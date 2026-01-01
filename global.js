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
        hero_sub: "Servicios Quintana LLC is Colorado's home for trusted, bilingual services that make legal, government, and digital processes accessible to everyone. We bring together three specialized brands under one mission: helping our community navigate paperwork, agencies, and technology with clarity and confidence.",
        btn_view_companies: "View Our Brands",
        div_header: "Our Brands",
        div_sub: "We operate three distinct brands serving the Denver Metro area.",
        badge_legal: "Legal Services",
        badge_admin: "Administrative Support",
        badge_digital: "Digital Strategy & Web Development",
        badge_translation: "Translation Services",
        card_notary_title: "Quintana Notary & Signing",
        card_notary_text: "Mobile, bilingual notary services for real estate closings, affidavits, power of attorney, and more. We bring the office to your doorstep.",
        card_dmv_title: "Ayuda DMV",
        card_dmv_text: "Specialized assistance for Spanish‑speaking residents navigating Colorado DMV requirements. We simplify state processes so families can move forward without stress.",
        card_dev_title: "David Quintana Dev",
        card_dev_text: "High‑performance, bilingual web architecture for local businesses. We build accessible, modern websites with custom coding and community‑focused design.",
        card_translation_title: "Certified Translation Services",
        card_translation_text: "Professional certified translations for families, students, and individuals completing legal, immigration, or government paperwork. Every translation includes a signed Declaration of Accuracy accepted by USCIS, Colorado DMV, schools, and state agencies.",
        card_translation_contact: "Learn More About Translation Services",
        card_visit: "Visit Official Site",
        card_portfolio: "Visit Portfolio Site",
        about_h2: "Built on Integrity",
        about_p1: "Servicios Quintana LLC brings together the professional work of David Quintana.",
        about_p2: "Whether we are notarizing a loan document in Castle Rock, helping a family register a vehicle, or writing semantic HTML for a local business, our core value remains the same: Accessibility.",
        about_p3: "Language barriers and technical complexity should never prevent someone from achieving their goals.",
        about_trust_h3: "Why Colorado Trusts Us",
        stat_brands: "Active Brands",
        stat_bilingual: "Bilingual",
        stat_local: "Locally Owned",
        footer_brand_tagline: "Reliable. Mobile. Bilingual.",
        footer_hq: "Corporate HQ & Registered Agent",
        footer_contact_title: "Contact",
        footer_copyright: "All Rights Reserved.",
        footer_disclaimer2: '"Quintana Notary & Signing" and "Ayuda DMV" are registered Trade Names of Servicios Quintana LLC.',
        lang_btn: "Español"
    },
    es: {
        nav_divisions: "Nuestras Marcas",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        hero_eyebrow: "Est. 2026 • Colorado",
        hero_h1: "Cerrando la Brecha Entre Comunidad y Cumplimiento.",
        hero_sub: "Servicios Quintana LLC es el hogar de Colorado para servicios bilingües confiables que hacen que los procesos legales, gubernamentales y digitales sean accesibles para todos. Reunimos tres marcas especializadas bajo una misión: ayudar a nuestra comunidad a navegar trámites, agencias y tecnología con claridad y confianza.",
        btn_view_companies: "Ver Nuestras Marcas",
        div_header: "Nuestras Marcas",
        div_sub: "Operamos tres marcas distintas que sirven al área metropolitana de Denver.",
        badge_legal: "Servicios Legales",
        badge_admin: "Apoyo Administrativo",
        badge_digital: "Estrategia Digital y Desarrollo Web",
        badge_translation: "Servicios de Traducción",
        card_notary_title: "Quintana Notary & Signing",
        card_notary_text: "Servicios notariales móviles y bilingües para cierres de bienes raíces, declaraciones juradas, poderes y más. Llevamos la oficina a su puerta.",
        card_dmv_title: "Ayuda DMV",
        card_dmv_text: "Asistencia especializada para residentes hispanohablantes que navegan los requisitos del DMV de Colorado. Simplificamos los procesos estatales para que las familias puedan avanzar sin estrés.",
        card_dev_title: "David Quintana Dev",
        card_dev_text: "Arquitectura web bilingüe de alto rendimiento para negocios locales. Construimos sitios web accesibles y modernos con programación personalizada y diseño enfocado en la comunidad.",
        card_translation_title: "Servicios de Traducción Certificada",
        card_translation_text: "Traducciones certificadas profesionales para familias, estudiantes e individuos que completan trámites legales, de inmigración o gubernamentales. Cada traducción incluye una Declaración de Exactitud firmada aceptada por USCIS, DMV de Colorado, escuelas y agencias estatales.",
        card_translation_contact: "Más Información Sobre Servicios de Traducción",
        card_visit: "Visitar Sitio Oficial",
        card_portfolio: "Ver Portafolio",
        about_h2: "Construido Sobre Integridad",
        about_p1: "Servicios Quintana LLC reúne el trabajo profesional de David Quintana.",
        about_p2: "Ya sea que estemos notarizando un documento de préstamo en Castle Rock, ayudando a una familia a registrar un vehículo o escribiendo HTML semántico para un negocio local, nuestro valor fundamental sigue siendo el mismo: Accesibilidad.",
        about_p3: "Las barreras del idioma y la complejidad técnica nunca deben impedir que alguien alcance sus objetivos.",
        about_trust_h3: "Por Qué Colorado Confía en Nosotros",
        stat_brands: "Marcas Activas",
        stat_bilingual: "Bilingüe",
        stat_local: "Propiedad Local",
        footer_brand_tagline: "Confiable. Móvil. Bilingüe.",
        footer_hq: "Sede Corporativa y Agente Registrado",
        footer_contact_title: "Contacto",
        footer_copyright: "Todos los Derechos Reservados.",
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
