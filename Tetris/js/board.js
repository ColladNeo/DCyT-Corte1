// Crear una cuadrícula vacía de tamaño alto x ancho (inicializa con null)
export function crearGrid(alto, ancho) {
    const grid = [];
    for (let y = 0; y < alto; y++) {
        grid[y] = [];
        for (let x = 0; x < ancho; x++) {
            grid[y][x] = null;
        }
    }
    return grid;
}

// Verificar colisión entre la pieza y el tablero o límites
export function colision(grid, pieza) {
    const { matrix, x: posX, y: posY } = pieza;
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x]) {
                const gridY = posY + y;
                const gridX = posX + x;
                // Limites laterales o inferior
                if (gridX < 0 || gridX >= grid[0].length || gridY >= grid.length) {
                    return true;
                }
                // Colisión con bloque existente (solo si está dentro del tablero)
                if (gridY >= 0 && grid[gridY][gridX]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Mezclar (congelar) la pieza en el tablero una vez que colisiona abajo
export function merge(grid, pieza) {
    const { matrix, x: posX, y: posY, color } = pieza;
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] && posY + y >= 0) {
                grid[posY + y][posX + x] = color;
            }
        }
    }
}

// Limpiar filas completas y desplazar las superiores hacia abajo
export function limpiarLineas(grid) {
    const width = grid[0].length;
    for (let y = grid.length - 1; y >= 0; y--) {
        if (grid[y].every(cell => cell !== null)) {
            // Si la fila está llena, la eliminamos
            grid.splice(y, 1);
            // Añadimos una fila vacía arriba
            grid.unshift(new Array(width).fill(null));
            y++; // Revisar de nuevo la posición y (ahora con la nueva fila)
        }
    }
}
