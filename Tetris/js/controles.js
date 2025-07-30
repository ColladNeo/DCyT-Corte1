// Manejo de eventos del teclado para controlar la pieza activa
export function inicializarControles(juego) {
    document.addEventListener('keydown', event => {
        if (juego.gameOver) return; // Ignorar si ya terminó el juego
        if (event.key === 'ArrowLeft') {
            juego.mover(-1);    // Mover izquierda
        } else if (event.key === 'ArrowRight') {
            juego.mover(1);     // Mover derecha
        } else if (event.key === 'ArrowDown') {
            juego.bajar();      // Caída rápida (una fila)
        } else if (event.key === 'ArrowUp') {
            juego.rotar();      // Rotar pieza
        }
        juego.actualizar();     // Redibujar después de la acción
    });
}
