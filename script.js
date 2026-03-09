// script.js

document.addEventListener('DOMContentLoaded', function() {
  // --- Menú responsive (toggle simple) ---
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
        menu.style.position = 'absolute';
        menu.style.top = '80px';
        menu.style.left = '0';
        menu.style.width = '100%';
        menu.style.background = 'white';
        menu.style.padding = '1.5rem';
        menu.style.boxShadow = '0 20px 30px rgba(0,0,0,0.1)';
      }
    });
    
    // Cerrar menú al hacer click en un enlace (opcional)
    document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          menu.style.display = 'none';
        }
      });
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        menu.style.display = 'flex';
        menu.style.position = 'static';
        menu.style.padding = '0';
        menu.style.boxShadow = 'none';
        menu.style.background = 'transparent';
      } else {
        menu.style.display = 'none';  // reset al modo mobile
      }
    });
  }

  // --- Formulario de presupuesto (simulación de envío) ---
  const form = document.getElementById('presupuestoForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita envío real (demo)
      
      // Pequeña validación visual
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const tipo = document.getElementById('tipo').value;
      const mensaje = document.getElementById('mensaje').value.trim();
      const privacidad = document.getElementById('privacidad').checked;

      if (!nombre || !email || !tipo || !mensaje || !privacidad) {
        alert('Por favor, completa todos los campos obligatorios (*)');
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        alert('Introduce un email válido');
        return;
      }

      // Si todo ok, mostramos mensaje de éxito (simulación)
      alert('¡Gracias! Tu solicitud de presupuesto ha sido enviada. Laila te responderá en menos de 24h. (demo funcional)');
      
      // Opcional: reiniciar formulario
      form.reset();
    });
  }

  // --- Scroll suave para los enlaces del menú (refuerzo) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Efecto hover opcional en proyectos (ya con css) o para consola ---
  console.log('🌟 Página de Laila Vico - Modelado 3D para Inmobiliarias');
});