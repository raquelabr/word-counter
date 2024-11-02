// Obtener referencias a los elementos del DOM
const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const charNoSpacesCount = document.getElementById('char-no-spaces-count');
const wordCount = document.getElementById('word-count');
const lineCount = document.getElementById('line-count');

// Agregar evento de escucha para actualizar conteos
textInput.addEventListener('input', updateCounts);

/**
 * Actualiza todos los contadores basados en el texto actual
 */
function updateCounts() {
    const text = textInput.value;
    
    // Contar caracteres totales
    charCount.textContent = text.length;
    
    // Contar caracteres sin espacios
    charNoSpacesCount.textContent = text.replace(/\s/g, '').length;
    
    // Contar palabras (dividiendo por espacios y verificando texto vacío)
    const words = text.trim().split(/\s+/);
    wordCount.textContent = text.trim() === '' ? 0 : words.length;
    
    // Contar líneas (dividiendo por saltos de línea)
    const lines = text.split('\n');
    lineCount.textContent = text.trim() === '' ? 0 : lines.length;
}

/**
 * Limpia el área de texto y resetea todos los contadores
 */
function clearText() {
    textInput.value = '';
    updateCounts();
}