const fs = require('fs');

const INPUT_FILE = './init-mongo.js';
const OUTPUT_FILE = './init-mongo-normalized.js';

try {
    const content = fs.readFileSync(INPUT_FILE, 'utf8');

    // Extraer el array de libros del insertMany
    const startIndex = content.indexOf('[');
    const endIndex = content.lastIndexOf(']') + 1;
    const books = JSON.parse(content.substring(startIndex, endIndex));

    // Extraer categorías únicas
    const categorySet = new Set();
    books.forEach(book => {
        if (book.categories && Array.isArray(book.categories)) {
            book.categories.forEach(cat => categorySet.add(cat));
        }
    });

    // Crear objetos para la colección de categorías
    const categoriesData = Array.from(categorySet).map(cat => ({
        name: cat,
        slug: cat.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        created_at: new Date().toISOString()
    }));

    // Generar el nuevo contenido del archivo
    const newFileContent = `
// Colección de Categorías
db.categories.insertMany(${JSON.stringify(categoriesData, null, 2)});

// Colección de Libros
db.books.insertMany(${JSON.stringify(books, null, 2)});
    `;

    fs.writeFileSync(OUTPUT_FILE, newFileContent);
    console.log(`✅ ¡Éxito! Se extrajeron ${categoriesData.length} categorías únicas.`);
    console.log(`🚀 Nuevo archivo creado en: ${OUTPUT_FILE}`);

} catch (err) {
    console.error("❌ Error:", err.message);
}