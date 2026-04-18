const fs = require('fs');
const path = require('path');

const FILE_PATH = './mongo-db/init-mongo.js';

try {
    // 1. Leer el contenido del archivo
    let content = fs.readFileSync(FILE_PATH, 'utf8');

    // 2. Extraer el array de objetos del script de Mongo
    // Buscamos lo que hay dentro de insertMany([ ... ])
    const startIndex = content.indexOf('[');
    const endIndex = content.lastIndexOf(']') + 1;
    const jsonArrayString = content.substring(startIndex, endIndex);

    // 3. Parsear a objeto de JavaScript
    const books = JSON.parse(jsonArrayString);

    // 4. Modificar cada libro para máxima disponibilidad
    const modifiedBooks = books.map(book => {
        return {
            ...book,
            metrics: {
                ...book.metrics,
                borrowed_count: 0 // Nadie ha prestado nada
            },
            status: {
                ...book.status,
                is_available: true, // Siempre disponible si quantity > 0
                available_count: book.quantity, // El disponible es igual al total
                next_availability_date: null // No hay fecha de espera
            }
        };
    });

    // 5. Reconstruir el formato del script de MongoDB
    const newContent = `db.books.insertMany(${JSON.stringify(modifiedBooks, null, 2)});`;

    // 6. Sobrescribir el archivo original
    fs.writeFileSync(FILE_PATH, newContent);

    console.log(`✅ ¡Éxito! Todos los libros (${modifiedBooks.length}) están ahora al 100% de disponibilidad.`);
    console.log(`🚀 Ahora puedes ejecutar: docker-compose down -v && docker-compose up -d`);

} catch (err) {
    console.error("❌ Error procesando el archivo:", err.message);
    console.log("Asegúrate de que init-mongo.js tenga un formato JSON válido dentro de insertMany.");
}