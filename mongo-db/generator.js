const fs = require('fs');
const path = require('path');

// --- CONFIGURACIÓN ---
const API_KEY = 'AIzaSyD6QyJEJbvHXK7GIabNnO6v26Na9qViDSg'; 
const OUTPUT_FILE = './mongo-db/init-mongo.js';

async function generateLibrary() {
    const queries = ['subject:programming', 'subject:computers', 'subject:software+engineering'];
    let books = [];

    console.log("🚀 Generando catálogo con lógica de stock real...");

    for (const q of queries) {
        if (books.length >= 40) break;
        
        const url = `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=20&key=${API_KEY}`;
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (!data.items) continue;

            data.items.forEach(item => {
                const info = item.volumeInfo;
                
                // --- LÓGICA DE NEGOCIO CORRELACIONADA ---
                const totalQuantity = Math.floor(Math.random() * 15) + 1; // 1 a 15 copias totales
                const borrowed = Math.floor(Math.random() * (totalQuantity + 1)); // No puede prestar más de lo que tiene
                const available = totalQuantity - borrowed;
                const isAvailable = available > 0;
                
                // Si no hay disponibles, calculamos una fecha de retorno estimada (15 días después de hoy)
                const nextDate = !isAvailable ? new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] : null;

                const rating = info.averageRating || parseFloat((Math.random() * 2 + 3).toFixed(1));

                books.push({
                    title: info.title || "Untitled",
                    author: { name: info.authors ? info.authors[0] : "Unknown Author" },
                    cover_image: info.imageLinks?.thumbnail || "",
                    categories: info.categories || ["Technical"],
                    metrics: {
                        rating: rating,
                        review_count: info.ratingsCount || Math.floor(Math.random() * 100),
                        borrowed_count: borrowed // Nuevo: Seguimiento de préstamos
                    },
                    quantity: totalQuantity, // Total de libros físicos
                    status: {
                        is_available: isAvailable,
                        available_count: available, // Nuevo: Cuántos quedan en estantería
                        next_availability_date: nextDate
                    },
                    flags: {
                        is_new: info.publishedDate ? info.publishedDate.startsWith('2025') : false,
                        is_popular: rating >= 4.5 || borrowed > 10,
                        is_wishlisted: false
                    },
                    summary_short: info.description ? info.description.substring(0, 120) + "..." : "",
                    published_at: info.publishedDate || "N/A",
                    summary: info.description || "No description available."
                });
            });
        } catch (e) {
            console.error("Error:", e.message);
        }
    }

    const finalSelection = books.slice(0, 40);
    const mongoContent = `db.books.insertMany(${JSON.stringify(finalSelection, null, 2)});`;

    if (!fs.existsSync('./mongo-db')) fs.mkdirSync('./mongo-db');
    fs.writeFileSync(OUTPUT_FILE, mongoContent);
    console.log(`✅ Catálogo generado con éxito: ${finalSelection.length} libros.`);
}

generateLibrary();