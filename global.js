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
        hero_sub: "Servicios Quintana LLC is Colorado's home for trusted, bilingual services that make official, government, and digital processes accessible to everyone. We bring together three specialized brands under one mission: helping our community navigate paperwork, agencies, and technology with clarity and confidence.",
        btn_view_companies: "View Our Brands",
        div_header: "Our Brands",
        div_sub: "We operate three distinct brands serving the Denver Metro area.",
        badge_auth: "Document Authentication",
        badge_admin: "Administrative Support",
        badge_digital: "Digital Strategy & Web Development",
        badge_translation: "Translation Services",
        card_notary_title: "Quintana Notary & Signing",
        card_notary_text: "Mobile, bilingual notary services for real estate closings, affidavits, power of attorney, and more. We bring the office to your doorstep.",
        card_dmv_title: "Ayuda DMV",
        card_dmv_text: "Specialized assistance for Spanish\u2011speaking residents navigating Colorado DMV requirements. We simplify state processes so families can move forward without stress.",
        card_dev_title: "David Quintana Dev",
        card_dev_text: "High\u2011performance, bilingual web architecture for local businesses. We build accessible, modern websites with custom coding and community\u2011focused design.",
        card_translation_title: "Certified Translation Services",
        card_translation_text: "Professional certified translations for families, students, and individuals completing immigration, academic, or government paperwork. Every translation includes a signed Declaration of Accuracy designed to meet the strict submission requirements of USCIS, the Colorado DMV, schools, and state agencies.",
        card_translation_contact: "Learn More About Translation Services",
        card_visit: "Visit Official Site",
        card_portfolio: "Visit Portfolio Site",
        about_h2: "Built on Integrity",
        about_p1: "Servicios Quintana LLC brings together the professional work of <strong>David Quintana</strong>.",
        about_p2: "Whether we are notarizing a loan document in Castle Rock, helping a family register a vehicle, or writing semantic HTML for a local business, our core value remains the same: <strong>Accessibility.</strong>",
        about_p3: "Language barriers and technical complexity should never prevent someone from achieving their goals.",
        about_trust_h3: "Why Colorado Trusts Us",
        stat_brands: "Active Brands",
        stat_bilingual: "Bilingual",
        stat_local: "Locally Owned",
        footer_brand_tagline: "Reliable. Mobile. Bilingual.",
        footer_hq: "Corporate HQ & Registered Agent",
        footer_contact_title: "Contact",
        footer_statutory_en: "<strong>Important Notice:</strong> Servicios Quintana LLC and its representatives are not attorneys licensed to practice law in the State of Colorado. We may not give legal advice or accept fees for legal advice. We provide administrative, translation, and notary public services only.",
        footer_statutory_es: "<strong>Aviso Importante:</strong> Servicios Quintana LLC y sus representantes no son abogados licenciados para ejercer el derecho en el Estado de Colorado. No podemos dar asesor\u00eda legal ni aceptar honorarios por asesor\u00eda legal. Solo ofrecemos servicios administrativos, de traducci\u00f3n y de notario p\u00fablico.",
        footer_copyright: "All Rights Reserved.",
        footer_disclaimer2: '"Quintana Notary & Signing" and "Ayuda DMV" are registered Trade Names of Servicios Quintana LLC.',
        lang_btn: "Espa\u00f1ol"
    },
    es: {
        nav_divisions: "Nuestras Marcas",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        hero_eyebrow: "Est. 2026 \u2022 Colorado",
        hero_h1: "Cerrando la Brecha Entre Comunidad y Cumplimiento.",
        hero_sub: "Servicios Quintana LLC es el hogar de Colorado para servicios biling\u00fces confiables que hacen que los procesos oficiales, gubernamentales y digitales sean accesibles para todos. Reunimos tres marcas especializadas bajo una misi\u00f3n: ayudar a nuestra comunidad a navegar tr\u00e1mites, agencias y tecnolog\u00eda con claridad y confianza.",
        btn_view_companies: "Ver Nuestras Marcas",
        div_header: "Nuestras Marcas",
        div_sub: "Operamos tres marcas distintas que sirven al \u00e1rea metropolitana de Denver.",
        badge_auth: "Autenticaci\u00f3n de Documentos",
        badge_admin: "Apoyo Administrativo",
        badge_digital: "Estrategia Digital y Desarrollo Web",
        badge_translation: "Servicios de Traducci\u00f3n",
        card_notary_title: "Quintana Notary & Signing",
        card_notary_text: "Servicios notariales m\u00f3viles y biling\u00fces para cierres de bienes ra\u00edces, declaraciones juradas, poderes y m\u00e1s. Llevamos la oficina a su puerta.",
        card_dmv_title: "Ayuda DMV",
        card_dmv_text: "Asistencia especializada para residentes hispanohablantes que navegan los requisitos del DMV de Colorado. Simplificamos los procesos estatales para que las familias puedan avanzar sin estr\u00e9s.",
        card_dev_title: "David Quintana Dev",
        card_dev_text: "Arquitectura web biling\u00fce de alto rendimiento para negocios locales. Construimos sitios web accesibles y modernos con programaci\u00f3n personalizada y dise\u00f1o enfocado en la comunidad.",
        card_translation_title: "Servicios de Traducci\u00f3n Certificada",
        card_translation_text: "Traducciones certificadas profesionales para familias, estudiantes e individuos que completan tr\u00e1mites de inmigraci\u00f3n, acad\u00e9micos o gubernamentales. Cada traducci\u00f3n incluye una Declaraci\u00f3n de Exactitud firmada, dise\u00f1ada para cumplir con los estrictos requisitos de presentaci\u00f3n de USCIS, el DMV de Colorado, escuelas y agencias estatales.",
        card_translation_contact: "M\u00e1s Informaci\u00f3n Sobre Servicios de Traducci\u00f3n",
        card_visit: "Visitar Sitio Oficial",
        card_portfolio: "Ver Portafolio",
        about_h2: "Construido Sobre Integridad",
        about_p1: "Servicios Quintana LLC re\u00fane el trabajo profesional de <strong>David Quintana</strong>.",
        about_p2: "Ya sea que estemos notarizando un documento de pr\u00e9stamo en Castle Rock, ayudando a una familia a registrar un veh\u00edculo o escribiendo HTML sem\u00e1ntico para un negocio local, nuestro valor fundamental sigue siendo el mismo: <strong>Accesibilidad.</strong>",
        about_p3: "Las barreras del idioma y la complejidad t\u00e9cnica nunca deben impedir que alguien alcance sus objetivos.",
        about_trust_h3: "Por Qu\u00e9 Colorado Conf\u00eda en Nosotros",
        stat_brands: "Marcas Activas",
        stat_bilingual: "Biling\u00fce",
        stat_local: "Propiedad Local",
        footer_brand_tagline: "Confiable. M\u00f3vil. Biling\u00fce.",
        footer_hq: "Sede Corporativa y Agente Registrado",
        footer_contact_title: "Contacto",
        footer_statutory_en: "<strong>Important Notice:</strong> Servicios Quintana LLC and its representatives are not attorneys licensed to practice law in the State of Colorado. We may not give legal advice or accept fees for legal advice. We provide administrative, translation, and notary public services only.",
        footer_statutory_es: "<strong>Aviso Importante:</strong> Servicios Quintana LLC y sus representantes no son abogados licenciados para ejercer el derecho en el Estado de Colorado. No podemos dar asesor\u00eda legal ni aceptar honorarios por asesor\u00eda legal. Solo ofrecemos servicios administrativos, de traducci\u00f3n y de notario p\u00fablico.",
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
    langBtn.setAttribute('aria-label', 'Toggle language between English and Spanish');
    langBtn.setAttribute('role', 'button');
    navContainer.appendChild(langBtn);

    const updateContent = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = translations[lang] && translations[lang][key];
            if (!value) return;

            // For card-link anchors: preserve the <i> arrow icon by only
            // updating the text node, not blowing away child elements.
            if (element.classList.contains('card-link')) {
                // Find or update the first text node; leave <i> intact
                let textNode = null;
                element.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) textNode = node;
                });
                if (textNode) {
                    textNode.textContent = value + ' ';
                } else {
                    element.insertBefore(document.createTextNode(value + ' '), element.firstChild);
                }
            } else {
                // Safe innerHTML for elements that may contain <strong> tags etc.
                element.innerHTML = value;
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('preferredLang', lang);

        const ariaText = lang === 'en'
            ? 'Switch to Spanish - Cambiar a Español'
            : 'Switch to English - Cambiar a Inglés';
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
    let cursor;

    if (!isMobile) {
        cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        document.body.appendChild(cursor);

        let mouseX = -100;
        let mouseY = -100;
        let cursorX = -100;
        let cursorY = -100;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
        });

        const animateCursor = () => {
            const ease = 0.15;
            cursorX += (mouseX - cursorX) * ease;
            cursorY += (mouseY - cursorY) * ease;
            cursor.style.left = `${cursorX - 20}px`;
            cursor.style.top  = `${cursorY - 20}px`;
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        document.addEventListener('mousedown', () => cursor.classList.add('click'));
        document.addEventListener('mouseup',   () => cursor.classList.remove('click'));
    }

    // ============================================
    // 3. SCROLL REVEAL ENGINE
    // ============================================
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('reveal'), index * 100);
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => revealOnScroll.observe(card));

    // ============================================
    // 4. MICRO-INTERACTIONS - CARD TILT
    // ============================================
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect    = card.getBoundingClientRect();
            const x       = e.clientX - rect.left;
            const y       = e.clientY - rect.top;
            const centerX = rect.width  / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            card.style.transform = `translate(-8px,-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    // ============================================
    // 5. BUTTON RIPPLE EFFECT
    // ============================================
    document.querySelectorAll('.btn, .btn-primary, .btn-nav').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect   = this.getBoundingClientRect();
            const size   = Math.max(rect.width, rect.height);
            const x      = e.clientX - rect.left - size / 2;
            const y      = e.clientY - rect.top  - size / 2;
            ripple.style.cssText = `
                position:absolute; border-radius:50%;
                background:rgba(255,255,255,0.5);
                width:${size}px; height:${size}px;
                left:${x}px; top:${y}px;
                pointer-events:none;
                animation:ripple-effect 0.6s ease-out;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-effect {
            from { transform:scale(0); opacity:1; }
            to   { transform:scale(2); opacity:0; }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // 6. SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // 7. HERO PARALLAX
    // ============================================
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            hero.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
        });
    }

    // ============================================
    // 8. DYNAMIC FOOTER YEAR
    // ============================================
    const yearDisplay = document.getElementById('year');
    if (yearDisplay) yearDisplay.textContent = new Date().getFullYear();

    // ============================================
    // 9. LAZY IMAGES
    // ============================================
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
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));

    // ============================================
    // 10. MOBILE NAVIGATION TOGGLE
    // ============================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks     = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navLinks.style.display === 'flex';
            navLinks.style.display = isOpen ? 'none' : 'flex';
            mobileToggle.setAttribute('aria-expanded', String(!isOpen));
        });
    }

    // ============================================
    // 11. WCAG - REDUCED MOTION
    // ============================================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.card').forEach(card => {
            card.style.transition = 'none';
            card.classList.add('reveal');
        });
        if (cursor) cursor.style.display = 'none';
    }

    // ============================================
    // 12. CONSOLE BRANDING
    // ============================================
    console.log(
        '%c🟠 SERVICIOS QUINTANA LLC %c\nBuilt with ❤️ by David Quintana Dev\ndavidquintana.dev',
        'font-size:20px;font-weight:bold;color:#f97316;text-shadow:2px 2px 0px #0f172a;',
        'font-size:12px;color:#0f172a;'
    );
});
