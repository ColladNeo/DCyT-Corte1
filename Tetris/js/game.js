import { crearPiezaAleatoria, rotar } from './tetrominos.js';
import { crearGrid, colision, merge, limpiarLineas } from './board.js';
import { inicializarControles } from './controles.js';

const ANCHO = 10;
const ALTO = 20;
const TAM_BLOQUE = 30;
const COLOR_VACIO = '#000';

const bgMusic = new Audio('sounds/theme.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.4;

const rotateSound = new Audio('sounds/rotate.wav');
const dropSound = new Audio('sounds/drop.wav');
const clearSound = new Audio('sounds/line-clear.wav');

bgMusic.addEventListener('error', () => {
  console.error('Error al cargar theme.mp3');
});

class Juego {
    constructor(context) {
        this.context = context;
        this.grid = crearGrid(ALTO, ANCHO);
        this.gameOver = false;
        this.pieza = this.crearPieza();
        this.intervalo = null;
    }

    iniciar() {
        this.actualizar();
        this.intervalo = setInterval(() => {
            this.bajar();
        }, 500);
    }

    crearPieza() {
        const { matrix, color } = crearPiezaAleatoria();
        const x = Math.floor((ANCHO - matrix[0].length) / 2);
        const y = -matrix.length;
        return { matrix, color, x, y };
    }

    actualizar() {
        this.context.fillStyle = COLOR_VACIO;
        this.context.fillRect(0, 0, ANCHO * TAM_BLOQUE, ALTO * TAM_BLOQUE);

        for (let y = 0; y < ALTO; y++) {
            for (let x = 0; x < ANCHO; x++) {
                const color = this.grid[y][x];
                if (color) {
                    this.context.fillStyle = color;
                    this.context.fillRect(x * TAM_BLOQUE, y * TAM_BLOQUE, TAM_BLOQUE, TAM_BLOQUE);
                    this.context.strokeStyle = '#333';
                    this.context.strokeRect(x * TAM_BLOQUE, y * TAM_BLOQUE, TAM_BLOQUE, TAM_BLOQUE);
                }
            }
        }

        const { matrix, x: posX, y: posY, color } = this.pieza;
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x]) {
                    this.context.fillStyle = color;
                    this.context.fillRect((posX + x) * TAM_BLOQUE, (posY + y) * TAM_BLOQUE, TAM_BLOQUE, TAM_BLOQUE);
                    this.context.strokeStyle = '#333';
                    this.context.strokeRect((posX + x) * TAM_BLOQUE, (posY + y) * TAM_BLOQUE, TAM_BLOQUE, TAM_BLOQUE);
                }
            }
        }
    }

    mover(dir) {
        this.pieza.x += dir;
        if (colision(this.grid, this.pieza)) {
            this.pieza.x -= dir;
        } else {
            this.actualizar();
        }
    }

    bajar() {
        this.pieza.y++;
        if (colision(this.grid, this.pieza)) {
            this.pieza.y--;
            merge(this.grid, this.pieza);
            dropSound.currentTime = 0;
            dropSound.play();

            limpiarLineas(this.grid);
            clearSound.currentTime = 0;
            clearSound.play();

            this.pieza = this.crearPieza();

            if (colision(this.grid, this.pieza)) {
                this.finJuego();
                return;
            }
        }
        this.actualizar();
    }

    rotar() {
        const matrixOriginal = this.pieza.matrix;
        this.pieza.matrix = rotar(this.pieza.matrix);
        if (colision(this.grid, this.pieza)) {
            this.pieza.matrix = matrixOriginal;
        } else {
            rotateSound.currentTime = 0;
            rotateSound.play();
            this.actualizar();
        }
    }

    finJuego() {
        clearInterval(this.intervalo);
        this.gameOver = true;
        alert('¡Juego terminado!');
    }
}

// Variable global para reiniciar si es necesario
let juego = null;

// Función para iniciar el juego desde el botón
function iniciarJuego() {
    if (juego && !juego.gameOver) return;

    const canvas = document.getElementById('tablero');
    const context = canvas.getContext('2d');
    juego = new Juego(context);
    inicializarControles(juego);
    juego.iniciar();
    bgMusic.play();
}

// Evento del botón
document.getElementById('start-btn').addEventListener('click', iniciarJuego);
