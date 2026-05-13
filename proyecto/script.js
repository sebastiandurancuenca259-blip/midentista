// Menu Toggle para dispositivos móviles
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (en móviles)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Formulario de reserva de citas
    const appointmentForm = document.getElementById('appointmentForm');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const treatment = document.getElementById('treatment').value;
            const terms = document.getElementById('terms').checked;
            
            if (!name || !email || !phone || !date || !time || !treatment || !terms) {
                alert('Por favor, complete todos los campos obligatorios y acepte los términos y condiciones.');
                return;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un correo electrónico válido.');
                return;
            }
            
            // Simulación de envío de formulario
            const formData = {
                name,
                email,
                phone,
                date,
                time,
                treatment,
                message: document.getElementById('message').value
            };
            
            console.log('Datos del formulario:', formData);
            
            // Mostrar mensaje de éxito
            alert('¡Gracias! Su cita ha sido reservada. Recibirá un correo de confirmación en breve.');
            
            // Limpiar formulario
            appointmentForm.reset();
        });
    }
    
    // Configurar fecha mínima en el campo de fecha (hoy)
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        
        const formattedToday = yyyy + '-' + mm + '-' + dd;
        dateInput.min = formattedToday;
    }
    
    // Efecto de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    document.querySelectorAll('.service-card, .treatment-card, .benefit, .payment-card').forEach(el => {
        observer.observe(el);
    });
    
    // Agregar estilos para animaciones
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .treatment-card, .benefit, .payment-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});

// Cambiar número de WhatsApp (reemplazar con el número real)
function updateWhatsAppNumber() {
    // Reemplaza este número con el número real de la clínica
    const whatsappNumber = "1234567890";
    
    // Actualizar todos los enlaces de WhatsApp
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.href = `https://wa.me/${whatsappNumber}`;
    });
}

// Llamar la función para actualizar números de WhatsApp
updateWhatsAppNumber();

// Manejar el envío de formularios de contacto
document.addEventListener('DOMContentLoaded', function() {
    // Puedes agregar aquí la lógica para enviar los formularios a un servidor
    // Por ejemplo, usando fetch() o XMLHttpRequest
    
    // Ejemplo de envío con fetch (descomenta y adapta según tu backend)
    /*
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            
            fetch('tu-servidor.com/endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Mensaje enviado con éxito');
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el mensaje');
            });
        });
    });
    */
});