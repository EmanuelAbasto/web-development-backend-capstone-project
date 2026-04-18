import requests
from mongoengine import connect, Document, StringField, ListField, FloatField, IntField, BooleanField, EmbeddedDocument, EmbeddedDocumentField

# ... (Mantén las clases Author, Metrics, Status, Flags y Book igual que antes) ...

def fetch_and_save_books(query: str):
    try:
        # Conexión a MongoDB
        connect(host="mongodb://admin:password123@localhost:27017/library_db?authSource=admin")
        
        # Agregamos un User-Agent para evitar bloqueos básicos
        headers: dict = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
        
        url: str = f"https://www.googleapis.com/books/v1/volumes?q={requests.utils.quote(query)}"
        
        print(f"Buscando libros para: {query}...")
        response = requests.get(url, headers=headers, timeout=10)
        
        # Esto lanzará una excepción si el status no es 2xx
        response.raise_for_status() 

        data = response.json()
        items = data.get("items", [])

        if not items:
            print(f"No se encontraron resultados para '{query}'.")
            return

        for item in items:
            volume_info = item.get("volumeInfo", {}) # Ojo: Google usa camelCase (volumeInfo)
            sale_info = item.get("saleInfo", {})
            
            published_date: str = volume_info.get("publishedDate", "Unknown")
            
            book = Book(
                book_id=item.get("id"),
                title=volume_info.get("title", "Untitled"),
                author=Author(name=volume_info.get("authors", ["Unknown"])[0]),
                cover_image=volume_info.get("imageLinks", {}).get("thumbnail", ""),
                categories=volume_info.get("categories", []),
                metrics=Metrics(
                    rating=float(volume_info.get("averageRating", 0)),
                    review_count=int(volume_info.get("ratingsCount", 0))
                ),
                status=Status(
                    is_available=(sale_info.get("saleability") == "FOR_SALE"),
                    next_availability_date=None
                ),
                flags=Flags(
                    is_new=("2025" in published_date or "2026" in published_date),
                    is_popular=(int(volume_info.get("ratingsCount", 0)) > 100),
                    is_wishlisted=False
                ),
                summary_short=(volume_info.get("description", "")[:150] + "..."),
                published_at=published_date,
                summary=volume_info.get("description", "")
            )
            book.save()
            print(f"Éxito: {book.title}")

    except requests.exceptions.HTTPError as errh:
        print(f"Error HTTP: {errh}")
    except requests.exceptions.ConnectionError:
        print("Error de Conexión. Revisa tu internet o la URL.")
    except Exception as e:
        print(f"Ocurrió un error inesperado: {e}")

if __name__ == "__main__":
    fetch_and_save_books("clean architecture")