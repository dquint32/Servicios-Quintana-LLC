/**
 * SERVICIOS QUINTANA LLC - PREMIUM GLOBAL JS
 * Features: i18n, Scroll Reveal, Custom Cursor, Micro-Interactions
 */

const translations = {
    en: {
        nav_divisions: "Our Brands",
        nav_about: "About",
        nav_contact: "Contact HQ",
        hero_eyebrow: "Est. 2026 • Colorado",
        hero_h1: "Bridging the Gap Between Community & Compliance.",
        hero_sub: "Servicios Quintana LLC is the parent entity for Colorado's most trusted bilingual services. We operate at the intersection of legal access, government navigation, and digital accessibility.",
        btn_view_companies: "View Our Companies",
        div_header: "Our Companies",
        div_sub: "We operate three distinct brands serving the Denver Metro area.",
        badge_legal: "Legal Services",
        badge_admin: "Admin Support",
        badge_digital: "Digital Strategy",
        card_notary_title: "Quintana Notary & Signing",
        card_notary_text: "Mobile and bilingual notary services for real estate closings, affidavits, and power of attorney. We bring the office to your doorstep.",
        card_dmv_title: "Ayuda DMV",
        card_dmv_text: "Specialized assistance for Spanish speakers navigating Colorado DMV requirements. We simplify bureaucracy for the community.",
        card_dev_title: "David Quintana Dev",
        card_dev_text: "High-performance web architecture for local businesses. Specializing in bilingual accessibility and custom coding.",
        card_visit: "Visit Official Site",
        card_portfolio: "Visit Portfolio Site",
        about_h2: "Built on Integrity.",
        about_p1: "Servicios Quintana LLC consolidates the professional activities of David Quintana.",
        about_p2: "Whether we are notarizing a loan document in Castle Rock, helping a family register a vehicle, or writing semantic HTML for a local market, our core value remains the same: Accessibility.",
        about_p3: "We believe that language barriers or technical complexity should never prevent a business or individual from achieving their goals.",
        stat_brands: "Active Brands",
        stat_bilingual: "Bilingual",
        stat_local: "Locally Owned",
        footer_brand_tagline: "Reliable. Mobile. Bilingual.",
        footer_hq: "Corporate HQ & Registered Agent",
        footer_contact_title: "Contact",
        footer_copyright: "All Rights Reserved.",
        footer_disclaimer: "Servicios Quintana LLC is a registered entity in the State of Colorado.",
        footer_disclaimer2: '"Quintana Notary & Signing" and "Ayuda DMV" are registered Trade Names of Servicios Quintana LLC.',
        lang_btn: "Español"
    },
    es: {
        nav_divisions: "Nuestras Marcas",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        hero_eyebrow: "Est. 2026 • Colorado",
        hero_h1: "Cerrando la Brecha Entre Comunidad y Cumplimiento.",
        hero_sub: "Servicios Quintana LLC es la entidad matriz de los servicios bilingües más confiables de Colorado. Operamos en la intersección del acceso legal, la navegación gubernamental y la accesibilidad digital.",
        btn_view_companies: "Ver Nuestras Empresas",
        div_header: "Nuestras Empresas",
        div_sub: "Operamos tres marcas distintas que sirven al área metropolitana de Denver.",
        badge_legal: "Servicios Legales",
        badge_admin: "Apoyo Admin",
        badge_digital: "Estrategia Digital",
        card_notary_title: "Quintana Notary & Signing",
        card_notary_text: "Servicios notariales móviles y bilingües para cierres de bienes raíces, declaraciones juradas y poderes. Llevamos la oficina a su puerta.",
        card_dmv_title: "Ayuda DMV",
        card_dmv_text: "Asistencia especializada para hispanohablantes que navegan los requisitos del DMV de Colorado. Simplificamos la burocracia para la comunidad.",
        card_dev_title: "David Quintana Dev",
        card_dev_text: "Arquitectura web de alto rendimiento para negocios locales. Especializados en accesibilidad bilingüe y programación personalizada.",
        card_visit: "Visitar Sitio Oficial",
        card_portfolio: "Ver Portafolio",
        about_h2: "Construido Sobre Integridad.",
        about_p1: "Servicios Quintana LLC consolida las actividades profesionales de David Quintana.",
        about_p2: "Ya sea que estemos notarizando un documento de préstamo en Castle Rock, ayudando a una familia a registrar un vehículo o escribiendo HTML para un mercado local, nuestro valor fundamental sigue siendo el mismo: Accesibilidad.",
        about_p3: "Creemos que las barreras del idioma o la complejidad técnica nunca deben impedir que una empresa o individuo alcance sus objetivos.",
        stat_brands: "Marcas Activas",
        stat_bilingual: "Bilingüe",
        stat_local: "Propiedad Local",
        footer_brand_tagline: "Confiable. Móvil. Bilingüe.",
        footer_hq: "Sede Corporativa y Agente Registrado",
        footer_contact_title: "Contacto",
        footer_copyright: "Todos los Derechos Reservados.",
        footer_disclaimer: "Servicios Quintana LLC es una entidad registrada en el Estado de Colorado.",
        footer_disclaimer2: '"Quintana Notary & Signing" y "Ayuda DMV" son Nombres Comerciales registrados de Servicios Quintana LLC.',
        lang_btn: "English"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // 1. LANGUAGE TOGGLE WITH ACCESSIBILITY
    // ============================================
    let currentLang = localStorage.getItem('preferredLang') || 'en';
    const navContainer = document.querySelector('.nav-container');
    
    const langBtn = document.createElement('button');
    langBtn.id = 'lang-toggle';
    langBtn.setAttribute('data-i18n', 'lang_btn');
    langBtn.setAttribute('aria-label', 'Toggle language between English and Spanish');
    langBtn.setAttribute('role', 'button');
    navContainer.appendChild(langBtn);

    const updateContent = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLang', lang);
        
        // Update ARIA label
        const ariaText = lang === 'en' ? 
            'Switch to Spanish - Cambiar a Español' : 
            'Switch to English - Cambiar a Inglés';
        langBtn.setAttribute('aria-label', ariaText);
    };

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateContent(currentLang);
    });

    updateContent(currentLang);

    // ============================================
    // 2. CUSTOM CURSOR - "NOTARY SEAL" EFFECT
    // ============================================
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (!isMobile) {
        const cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        document.body.appendChild(cursor);

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            const ease = 0.15;
            cursorX += (mouseX - cursorX) * ease;
            cursorY += (mouseY - cursorY) * ease;
            
            cursor.style.left = `${cursorX - 20}px`;
            cursor.style.top = `${cursorY - 20}px`;
            
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Click effect
        document.addEventListener('mousedown', () => {
            cursor.classList.add('click');
        });

        document.addEventListener('mouseup', () => {
            cursor.classList.remove('click');
        });

        // Hide cursor when it leaves the window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });
    }

    // ============================================
    // 3. SCROLL REVEAL ENGINE - INTERSECTION OBSERVER
    // ============================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('reveal');
                }, index * 100); // Stagger effect
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        revealOnScroll.observe(card);
    });

    // ============================================
    // 4. MICRO-INTERACTIONS - ENHANCED HOVER STATES
    // ============================================
    
    // Card tilt effect on mouse move
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `
                translate(-8px, -8px) 
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Button ripple effect
    document.querySelectorAll('.btn, .btn-primary, .btn-nav').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                animation: ripple-effect 0.6s ease-out;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-effect {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // 5. SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // 6. PARALLAX EFFECT ON HERO
    // ============================================
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // ============================================
    // 7. DYNAMIC FOOTER YEAR
    // ============================================
    const yearDisplay = document.getElementById('year');
    if (yearDisplay) {
        yearDisplay.textContent = new Date().getFullYear();
    }

    // ============================================
    // 8. LOADING PERFORMANCE OPTIMIZATION
    // ============================================
    
    // Lazy load images if any are added
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ============================================
    // 9. MOBILE NAVIGATION TOGGLE (IF NEEDED)
    // ============================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            mobileToggle.setAttribute(
                'aria-expanded', 
                navLinks.style.display === 'flex' ? 'true' : 'false'
            );
        });
    }

    // ============================================
    // 10. WCAG COMPLIANCE - REDUCED MOTION
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.querySelectorAll('.card').forEach(card => {
            card.style.transition = 'none';
            card.classList.add('reveal'); // Show immediately
        });
        
        if (cursor) {
            cursor.style.display = 'none';
        }
    }

    // ============================================
    // 11. CONSOLE BRANDING (DEVELOPER EASTER EGG)
    // ============================================
    console.log(
        '%c🟠 SERVICIOS QUINTANA LLC %c\n' +
        'Built with ❤️ by David Quintana Dev\n' +
        'davidquintana.dev',
        'font-size: 20px; font-weight: bold; color: #f97316; text-shadow: 2px 2px 0px #0f172a;',
        'font-size: 12px; color: #0f172a;'
    );
});