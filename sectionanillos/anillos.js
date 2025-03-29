document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
  
    if (!menuToggle) {
      console.error("No se encontró el botón del menú hamburguesa.");
      return;
    }
  
    if (!sidebar) {
      console.error("No se encontró la barra lateral.");
      return;
    }
  
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  
    console.log("Script cargado correctamente.");
  });
  
  document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('.menu-btn');
  
    // Si se hace clic fuera de la sidebar y del botón, se cierra el menú
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
      sidebar.classList.remove('active');
    }
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const sparkleContainer = document.getElementById("sparkle-container");
    const sparkleCount = 20; // Cantidad de brillos
  
    for (let i = 0; i < sparkleCount; i++) {
      let sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
  
      // Posición aleatoria
      sparkle.style.top = Math.random() * 100 + "vh";
      sparkle.style.left = Math.random() * 100 + "vw";
  
      // Duración de animación aleatoria para que no vayan todas iguales
      sparkle.style.animationDuration = (2 + Math.random() * 2) + "s";
  
      sparkleContainer.appendChild(sparkle);
    }
  });