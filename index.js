// Esperar a que la página cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    crearBurbujas();
    animarTitulo();
});

function crearBurbujas() {
    const contenedor = document.getElementById('bubblesContainer');
    const cantidadBurbujas = 20; // Número de burbujas

    for (let i = 0; i < cantidadBurbujas; i++) {
        const burbuja = document.createElement('span');
        burbuja.classList.add('burbuja-magica');
        
        // Tamaño aleatorio
        const tamano = Math.random() * 50 + 20; // Entre 20px y 70px
        burbuja.style.width = `${tamano}px`;
        burbuja.style.height = `${tamano}px`;
        
        // Posición aleatoria
        burbuja.style.left = `${Math.random() * 100}%`;
        burbuja.style.animationDuration = `${Math.random() * 10 + 5}s`; // Velocidad variable
        burbuja.style.animationDelay = `${Math.random() * 5}s`;
        
        // Estilos básicos para que se vea si no tienes el CSS exacto
        burbuja.style.position = 'absolute';
        burbuja.style.bottom = '-100px';
        burbuja.style.background = 'rgba(255, 255, 255, 0.2)';
        burbuja.style.borderRadius = '50%';
        burbuja.style.pointerEvents = 'none';
        
        // Añadimos la burbuja al contenedor
        contenedor.appendChild(burbuja);
    }
}

function animarTitulo() {
    const letras = document.querySelectorAll('.letter');
    letras.forEach((letra) => {
        letra.addEventListener('mouseover', () => {
            letra.style.transform = 'scale(1.5) rotate(10deg)';
            letra.style.color = '#ffd700'; // Color dorado al pasar el mouse
            letra.style.transition = '0.3s';
        });
        
        letra.addEventListener('mouseout', () => {
            letra.style.transform = 'scale(1) rotate(0deg)';
            letra.style.color = ''; // Vuelve al color original
        });
    });
}
