/**
 * SERVICIOS QUINTANA LLC - GLOBAL JS
 * Cleaned: removed redundant card-visibility injection, removed ripple @keyframes
 * injection (now lives in global.css), kept all logic and selectors intact.
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
        card_translation_text: "Professional certified translations for families, students, and individuals completing immigration, academic, or government paperwork. Every translation includes a signed Declaration of Accuracy for USCIS, the Colorado DMV, schools, and state agencies.",
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
        footer_statutory_en: "<strong>Important Notice:</strong> Servicios Quintana LLC and its representatives are not attorneys licensed to practice law in the State of Colorado. We may not give legal advice or accept fees for legal advice. We provide administrative, translation, and notary public services only.",
        footer_statutory_es: "<strong>Aviso Importante:</strong> Servicios Quintana LLC y sus representantes no son abogados licenciados para ejercer el derecho en el Estado de Colorado. No podemos dar asesor\u00eda legal ni aceptar honorarios por asesor\u00eda legal. Solo ofrecemos servicios administrativos, de traducci\u00f3n y de notario p\u00fablico.",
        lang_btn: "Espa\u00f1ol",
        back_to_top: "Back to Top"
    },
    es: {
        nav_divisions: "Nuestras Marcas",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        hero_eyebrow: "Est. 2026 \u2022 Colorado",
        hero_h1: "Cerrando la Brecha Entre Comunidad y Cumplimiento.",
        hero_sub: "Servicios Quintana LLC es el hogar de Colorado para servicios biling\u00fces confiables que hacen que los procesos oficiales, gubernamentales y digitales sean accesibles para todos.",
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
        card_dev_text: "Arquitectura web biling\u00fce de alto rendimiento para negocios locales. Construimos sitios web accesibles y modernos con programaci\u00f3n personalizada.",
        card_translation_title: "Servicios de Traducci\u00f3n Certificada",
        card_translation_text: "Traducciones certificadas profesionales para familias, estudiantes e individuos que completan tr\u00e1mites de inmigraci\u00f3n, acad\u00e9micos o gubernamentales.",
        card_translation_contact: "M\u00e1s Informaci\u00f3n Sobre Servicios de Traducci\u00f3n",
        card_visit: "Visitar Sitio Oficial",
        card_portfolio: "Ver Portafolio",
        about_h2: "Construido Sobre Integridad",
        about_p1: "Servicios Quintana LLC re\u00fane el trabajo profesional de <strong>David Quintana</strong>.",
        about_p2: "Ya sea que estemos notarizando un documento en Castle Rock, ayudando a una familia a registrar un veh\u00edculo o escribiendo HTML para un negocio local, nuestro valor fundamental sigue siendo el mismo: <strong>Accesibilidad.</strong>",
        about_p3: "Las barreras del idioma y la complejidad t\u00e9cnica nunca deben impedir que alguien alcance sus objetivos.",
        about_trust_h3: "Por Qu\u00e9 Colorado Conf\u00eda en Nosotros",
        stat_brands: "Marcas Activas",
        stat_bilingual: "Biling\u00fce",
        stat_local: "Propiedad Local",
        footer_statutory_en: "<strong>Important Notice:</strong> Servicios Quintana LLC and its representatives are not attorneys licensed to practice law in the State of Colorado. We may not give legal advice or accept fees for legal advice. We provide administrative, translation, and notary public services only.",
        footer_statutory_es: "<strong>Aviso Importante:</strong> Servicios Quintana LLC y sus representantes no son abogados licenciados para ejercer el derecho en el Estado de Colorado. No podemos dar asesor\u00eda legal ni aceptar honorarios por asesor\u00eda legal.",
        lang_btn: "English",
        back_to_top: "Volver Arriba"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // ── CARD VISIBILITY ──────────────────────────────────────────────────────
    // CSS starts cards at opacity:0; adding .reveal makes them visible.
    document.querySelectorAll('.card').forEach(card => card.classList.add('reveal'));

    // ── LANGUAGE TOGGLE ──────────────────────────────────────────────────────
    let currentLang = 'en';
    try { currentLang = localStorage.getItem('preferredLang') || 'en'; } catch(e) {}

    const langBtn = document.createElement('button');
    langBtn.id = 'lang-toggle';
    langBtn.setAttribute('aria-label', 'Toggle language / Cambiar idioma');
    langBtn.textContent = currentLang === 'en' ? 'Español' : 'English';

    const navContainer = document.querySelector('.nav-container');
    if (navContainer) navContainer.appendChild(langBtn);

    const updateContent = (lang) => {
        const t = translations[lang];
        if (!t) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = t[key];
            if (value === undefined) return;

            if (el.classList.contains('card-link')) {
                // Preserve the child <i> icon — only update text nodes
                Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) el.removeChild(node);
                });
                el.insertBefore(document.createTextNode(value + ' '), el.firstChild);
            } else {
                el.innerHTML = value;
            }
        });

        langBtn.textContent = t['lang_btn'] || (lang === 'en' ? 'Español' : 'English');
        document.documentElement.lang = lang;
        try { localStorage.setItem('preferredLang', lang); } catch(e) {}
    };

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateContent(currentLang);
    });

    updateContent(currentLang);

    // ── CUSTOM CURSOR ────────────────────────────────────────────────────────
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    let cursor;
    if (!isMobile) {
        cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        document.body.appendChild(cursor);

        let mouseX = -100, mouseY = -100, cursorX = -100, cursorY = -100;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
        });

        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            cursor.style.left = `${cursorX - 20}px`;
            cursor.style.top  = `${cursorY - 20}px`;
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        document.addEventListener('mousedown', () => cursor.classList.add('click'));
        document.addEventListener('mouseup',   () => cursor.classList.remove('click'));
    }

    // ── CARD TILT ────────────────────────────────────────────────────────────
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const rotateX = ((e.clientY - rect.top)  - rect.height / 2) / 20;
            const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 20;
            card.style.transform = `translate(-8px,-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    // ── BUTTON RIPPLE ────────────────────────────────────────────────────────
    // @keyframes ripple-effect is defined in global.css
    document.querySelectorAll('.btn, .btn-primary, .btn-nav').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect   = this.getBoundingClientRect();
            const size   = Math.max(rect.width, rect.height);
            ripple.style.cssText = `
                position:absolute;border-radius:50%;
                background:rgba(255,255,255,0.5);
                width:${size}px;height:${size}px;
                left:${e.clientX - rect.left - size/2}px;
                top:${e.clientY - rect.top - size/2}px;
                pointer-events:none;
                animation:ripple-effect 0.6s ease-out;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ── SMOOTH SCROLL ────────────────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // ── HERO PARALLAX ────────────────────────────────────────────────────────
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            hero.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
        }, { passive: true });
    }

    // ── BACK TO TOP ──────────────────────────────────────────────────────────
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── DYNAMIC YEAR ─────────────────────────────────────────────────────────
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();

    // ── MOBILE NAV TOGGLE ────────────────────────────────────────────────────
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks     = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navLinks.style.display === 'flex';
            navLinks.style.display = isOpen ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            mobileToggle.setAttribute('aria-expanded', String(!isOpen));
        });
    }

    // ── REDUCED MOTION ───────────────────────────────────────────────────────
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.card').forEach(c => c.style.transition = 'none');
        if (cursor) cursor.style.display = 'none';
    }

    console.log('%c🟠 SERVICIOS QUINTANA LLC', 'font-size:18px;font-weight:bold;color:#f97316;');
});
