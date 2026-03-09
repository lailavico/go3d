// script.js

document.addEventListener('DOMContentLoaded', function() {
  // --- Menú responsive mejorado ---
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const navbar = document.querySelector('.navbar');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
        menu.style.position = 'absolute';
        menu.style.top = navbar ? navbar.offsetHeight + 'px' : '70px';
        menu.style.left = '0';
        menu.style.right = '0';
        menu.style.width = '100%';
        menu.style.background = 'white';
        menu.style.padding = '0.5rem 0';
        menu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        menu.style.zIndex = '99';
        
        // Ajustar estilos de la lista
        const ul = menu.querySelector('ul');
        if (ul) {
          ul.style.flexDirection = 'column';
          ul.style.gap = '0';
          ul.style.width = '100%';
          ul.style.padding = '0';
          
          const items = ul.querySelectorAll('li');
          items.forEach(item => {
            item.style.width = '100%';
            item.style.textAlign = 'center';
            item.style.margin = '0';
            
            const link = item.querySelector('a');
            if (link) {
              link.style.display = 'block';
              link.style.padding = '14px 20px';
              link.style.width = '100%';
              link.style.borderBottom = '1px solid #f0f0f0';
            }
          });
          
          // El último item sin borde
          const lastLink = ul.querySelector('li:last-child a');
          if (lastLink) {
            lastLink.style.borderBottom = 'none';
          }
        }
      }
    });
    
    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          menu.style.display = 'none';
        }
      });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 900 && 
          menu.style.display === 'block' && 
          !menu.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        menu.style.display = 'none';
      }
    });

    // Resetear menú en resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        menu.style.display = 'flex';
        menu.style.position = 'static';
        menu.style.padding = '0';
        menu.style.boxShadow = 'none';
        menu.style.background = 'transparent';
        menu.style.right = 'auto';
        
        const ul = menu.querySelector('ul');
        if (ul) {
          ul.style.flexDirection = 'row';
          ul.style.gap = '1.2rem';
          ul.style.padding = '0';
          
          const items = ul.querySelectorAll('li');
          items.forEach(item => {
            item.style.width = 'auto';
            item.style.textAlign = 'left';
            
            const link = item.querySelector('a');
            if (link) {
              link.style.display = 'inline';
              link.style.padding = '0';
              link.style.width = 'auto';
              link.style.borderBottom = 'none';
            }
          });
        }
      } else {
        menu.style.display = 'none';
      }
    });
  }

  // --- Formulario de presupuesto con validación mejorada ---
  const form = document.getElementById('presupuestoForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const tipo = document.getElementById('tipo').value;
      const mensaje = document.getElementById('mensaje').value.trim();
      const privacidad = document.getElementById('privacidad').checked;

      let errores = [];
      
      if (!nombre) errores.push('• Nombre completo');
      if (!email) {
        errores.push('• Email');
      } else if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, introduce un email válido');
        return;
      }
      
      if (!tipo) errores.push('• Tipo de servicio');
      if (!mensaje) errores.push('• Descripción del proyecto');
      if (!privacidad) errores.push('• Aceptar política de privacidad');

      if (errores.length > 0) {
        alert('Por favor, completa:\n' + errores.join('\n'));
        return;
      }

      // Éxito
      alert('✓ ¡Solicitud enviada! Laila te contactará en menos de 24h.');
      form.reset();
    });
  }

  // --- Scroll suave para todos los enlaces internos ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        // Ajuste para header fijo
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Prevenir desbordamiento en imágenes rotas ---
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
    });
  });

  console.log('✅ Página optimizada para Pixel 7a y móviles - Laila Vico 3D');
});