// Definición de las piezas (matrices) y sus colores
export const PIEZAS = [
    {
        matrix: [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        color: '#800080' // morado (pieza T)
    },
    {
        matrix: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        color: '#FF0000' // rojo (pieza Z)
    },
    {
        matrix: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        color: '#00FF00' // verde (pieza S)
    },
    {
        matrix: [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        color: '#0000FF' // azul (pieza J)
    },
    {
        matrix: [
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0]
        ],
        color: '#FFA500' // naranja (pieza L)
    },
    {
        matrix: [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        color: '#00FFFF' // cian (pieza I)
    },
    {
        matrix: [
            [1, 1],
            [1, 1]
        ],
        color: '#FFFF00' // amarillo (pieza O)
    }
];

// Crear una nueva pieza aleatoria (copia profunda de la matriz original)
export function crearPiezaAleatoria() {
    const index = Math.floor(Math.random() * PIEZAS.length);
    const pieza = PIEZAS[index];
    // Copia profunda de la matriz para no modificar la original
    const matrix = pieza.matrix.map(row => [...row]);
    return { matrix, color: pieza.color };
}

// Función para rotar una matriz NxN 90 grados (hacia la derecha)
export function rotar(matrix) {
    const N = matrix.length;
    const result = [];
    for (let i = 0; i < N; i++) {
        result.push([]);
        for (let j = 0; j < N; j++) {
            result[i][j] = matrix[N - j - 1][i];
        }
    }
    return result;
}
