/**
 * SERVICIOS QUINTANA LLC — main.js
 * Full bilingual toggle, scroll, ripple, cursor, mobile nav, and all interactions.
 * Extended with new brand section translations (EN/ES).
 */

/* ══════════════════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════════════════ */
const translations = {
    en: {
        // ── NAV ──
        nav_brands:   "Our Brands",
        nav_services: "Services",
        nav_about:    "About",
        nav_contact:  "Contact HQ",

        // ── HERO ──
        hero_eyebrow: "Est. 2026 • Colorado",
        hero_h1:      "Bridging the Gap Between<br>Community &amp; Compliance.",
        hero_sub:     "Servicios Quintana LLC is Colorado's home for trusted, bilingual services that make official, government, and digital processes accessible to everyone. We bring together three specialized brands under one mission: helping our community navigate paperwork, agencies, and technology with clarity and confidence.",
        btn_view_services: "View Our Services",
        btn_hablamos:      "Hablamos Español",

        // ── BRANDS SECTION ──
        brands_h2:  "Our Specialized Brands",
        brands_sub: "We operate three distinct brands serving Castle Rock, the Denver Metro area, and beyond. Whether we come to you, or you meet us at a Community Hub, we are here to help.",

        // ── BADGES ──
        badge_auth:    "Document Authentication",
        badge_admin:   "Administrative Support",
        badge_digital: "Digital Strategy &amp; Web Development",
        badge_translation: "Translation Services",

        // ── NOTARY ──
        notary_tagline: "Professional, Mobile &amp; Bilingual Document Authentication",
        notary_intro:   "We bring the notary office to your doorstep or meet you at our fee-free Community Hubs (MSU Denver &amp; Tienda Salvadoreña).",
        notary_s1: "<strong>Standard Notarizations:</strong> Acknowledgments, Oaths/Affirmations, and Copy Certifications.",
        notary_s2: "<strong>Apostille Processing:</strong> Full-service handling for international documents via the CO Secretary of State.",
        notary_s3: "<strong>Loan Signings:</strong> Professional packages for Refinances, Purchases, and HELOCs.",
        notary_s4: "<strong>Business &amp; Agent Services:</strong> I-9 Employment Verifications.",
        notary_s5: "<strong>U.S. Passport Concierge:</strong> Clerical prep for DS-11/DS-82 and bilingual chaperone at the post office or clerk.",
        notary_cta:    "Explore Notary &amp; Passport Services",

        // ── DMV ──
        dmv_tagline: "Administrative Support &amp; DMV Proxy Services",
        dmv_intro:   "Specialized assistance for residents navigating complex Colorado DMV requirements. We simplify state processes so families can move forward without stress.",
        dmv_s1: "<strong>DMV Document Preparation:</strong> Accurate forms for address changes, private-party title transfers, and bills of sale.",
        dmv_s2: "<strong>In-Person Proxy Services:</strong> Can't go to the DMV? We act as your authorized proxy to submit documents in person.",
        dmv_s3: "<strong>Out-of-State Title Transfers:</strong> We coordinate with out-of-state owners, dealerships, and lienholders.",
        dmv_s4: "<strong>Same-Day Rush Services:</strong> Available for urgent document prep and DMV submissions.",
        dmv_cta: "Explore DMV Services",

        // ── WEB DEV ──
        dev_tagline: "Digital Strategy &amp; Web Development",
        dev_intro:   "High-performance, fully bilingual (EN/ES) web architecture for local businesses. We build accessible, modern websites from scratch — no cheap templates.",
        dev_s1: "<strong>Custom Websites:</strong> From basic landing pages to full Business and E-Commerce builds.",
        dev_s2: "<strong>Bilingual Integration:</strong> Reach more customers with seamless English and Spanish user experiences.",
        dev_s3: "<strong>Healthcare-Aligned Tools:</strong> Secure patient intake forms, validation workflows, and FHIR-ready JSON output for clinics.",
        dev_s4: "<strong>Ongoing Maintenance:</strong> Hosting setup, domain management, security patches, and SEO fundamentals.",
        dev_portfolio_note: "Includes portfolio work for Tienda SalvaDoreña",
        dev_cta: "View Web Portfolio &amp; Pricing",

        // ── TRANSLATION ──
        trans_h2:   "Certified Translation Services",
        trans_sub:  "Professional Spanish ↔ English Translations",
        trans_body: "We provide word-for-word certified translations for families, students, and businesses. Every translation includes a signed Certificate of Accuracy compliant with USCIS, the Colorado DMV, schools, and state agencies. Rush turnaround available.",
        trans_s1: "Immigration &amp; USCIS filings",
        trans_s2: "Colorado DMV title &amp; registration documents",
        trans_s3: "School &amp; university enrollment records",
        trans_s4: "State agency &amp; government paperwork",
        trans_cta: "Get a Translation Quote",
        trans_accent_label: "Certified &amp; Accurate",

        // ── ABOUT ──
        about_h2: "Built on Integrity",
        about_p1: "Servicios Quintana LLC brings together the professional work of <strong>David Quintana</strong>.",
        about_p2: "Whether we are notarizing a loan document in Castle Rock, helping a family register an out-of-state vehicle, or writing custom code for a local business, our core value remains the same: <strong>Accessibility.</strong>",
        about_p3: "Language barriers and technical complexity should never prevent someone from achieving their goals.",
        about_trust_h3: "Why Colorado Trusts Us",
        trust_1: "<strong>100% Bilingual:</strong> Native-level fluency in English and Spanish.",
        trust_2: "<strong>Transparent Pricing:</strong> No hidden fees; everything is disclosed upfront.",
        trust_3: "<strong>Community Focused:</strong> Lower fees available at our Community Hubs.",
        trust_4: "<strong>Locally Owned:</strong> Proudly serving the Denver Metro &amp; South Metro areas.",

        // ── STATS ──
        stat_brands:   "Active Brands",
        stat_bilingual: "Bilingual",
        stat_local:    "Locally Owned",

        // ── COMMUNITY HUBS ──
        hubs_h4:    "Community Hubs",
        hub_msu:    "MSU Denver",
        hub_tienda: "Tienda Salvadoreña",
        hub_note:   "Fee-free notary visits at these locations.",

        // ── FOOTER STATUTORY ──
        footer_statutory_en: "<strong>Important Notice:</strong> Servicios Quintana LLC and its representatives are not attorneys licensed to practice law in the State of Colorado. We may not give legal advice or accept fees for legal advice. We provide administrative, translation, and notary public services only.",
        footer_statutory_es: "<strong>Aviso Importante:</strong> Servicios Quintana LLC y sus representantes no son abogados licenciados para ejercer el derecho en el Estado de Colorado. No podemos dar asesoría legal ni aceptar honorarios por asesoría legal. Solo ofrecemos servicios administrativos, de traducción y de notario público.",

        // ── MISC ──
        lang_btn:    "Español",
        back_to_top: "Back to Top"
    },

    es: {
        // ── NAV ──
        nav_brands:   "Nuestras Marcas",
        nav_services: "Servicios",
        nav_about:    "Nosotros",
        nav_contact:  "Contacto",

        // ── HERO ──
        hero_eyebrow: "Est. 2026 • Colorado",
        hero_h1:      "Cerrando la Brecha Entre<br>Comunidad y Cumplimiento.",
        hero_sub:     "Servicios Quintana LLC es el hogar de Colorado para servicios bilingües confiables que hacen que los procesos oficiales, gubernamentales y digitales sean accesibles para todos. Reunimos tres marcas especializadas bajo una sola misión: ayudar a nuestra comunidad a navegar trámites, agencias y tecnología con claridad y confianza.",
        btn_view_services: "Ver Nuestros Servicios",
        btn_hablamos:      "We Speak English",

        // ── BRANDS SECTION ──
        brands_h2:  "Nuestras Marcas Especializadas",
        brands_sub: "Operamos tres marcas distintas que sirven a Castle Rock, el área metropolitana de Denver y más allá. Ya sea que vayamos a usted o que nos visite en un Hub Comunitario, estamos aquí para ayudar.",

        // ── BADGES ──
        badge_auth:        "Autenticación de Documentos",
        badge_admin:       "Apoyo Administrativo",
        badge_digital:     "Estrategia Digital y Desarrollo Web",
        badge_translation: "Servicios de Traducción",

        // ── NOTARY ──
        notary_tagline: "Autenticación de Documentos Profesional, Móvil y Bilingüe",
        notary_intro:   "Llevamos la oficina notarial a su puerta o nos reunimos con usted en nuestros Hubs Comunitarios sin costo adicional (MSU Denver y Tienda Salvadoreña).",
        notary_s1: "<strong>Notarizaciones Estándar:</strong> Reconocimientos, Juramentos/Afirmaciones y Certificaciones de Copia.",
        notary_s2: "<strong>Procesamiento de Apostilla:</strong> Servicio completo para documentos internacionales a través de la Secretaría de Estado de Colorado.",
        notary_s3: "<strong>Firmas de Préstamos:</strong> Paquetes profesionales para Refinanciamientos, Compras y HELOCs.",
        notary_s4: "<strong>Servicios para Empresas y Agentes:</strong> Verificaciones de Empleo I-9.",
        notary_s5: "<strong>Conserje de Pasaporte EE.UU.:</strong> Preparación de formularios DS-11/DS-82 y acompañamiento bilingüe en la oficina de correos o juzgado.",
        notary_cta: "Explorar Servicios de Notaría y Pasaporte",

        // ── DMV ──
        dmv_tagline: "Apoyo Administrativo y Servicios de Representación en el DMV",
        dmv_intro:   "Asistencia especializada para residentes que navegan los complejos requisitos del DMV de Colorado. Simplificamos los procesos estatales para que las familias puedan avanzar sin estrés.",
        dmv_s1: "<strong>Preparación de Documentos DMV:</strong> Formularios precisos para cambios de dirección, transferencias privadas de título y facturas de venta.",
        dmv_s2: "<strong>Servicios de Representación en Persona:</strong> ¿No puede ir al DMV? Actuamos como su representante autorizado para entregar sus documentos en persona.",
        dmv_s3: "<strong>Transferencias de Título de Otros Estados:</strong> Coordinamos con propietarios de otros estados, concesionarios y acreedores.",
        dmv_s4: "<strong>Servicios Urgentes el Mismo Día:</strong> Disponibles para preparación urgente de documentos y entregas en el DMV.",
        dmv_cta: "Explorar Servicios del DMV",

        // ── WEB DEV ──
        dev_tagline: "Estrategia Digital y Desarrollo Web",
        dev_intro:   "Arquitectura web de alto rendimiento, completamente bilingüe (EN/ES) para negocios locales. Construimos sitios web accesibles y modernos desde cero — sin plantillas baratas.",
        dev_s1: "<strong>Sitios Web Personalizados:</strong> Desde páginas de destino básicas hasta sitios completos de negocios y comercio electrónico.",
        dev_s2: "<strong>Integración Bilingüe:</strong> Llegue a más clientes con experiencias fluidas en inglés y español.",
        dev_s3: "<strong>Herramientas para Salud:</strong> Formularios seguros de ingreso de pacientes, flujos de validación y salida JSON compatible con FHIR para clínicas.",
        dev_s4: "<strong>Mantenimiento Continuo:</strong> Configuración de hosting, gestión de dominio, parches de seguridad y fundamentos de SEO.",
        dev_portfolio_note: "Incluye trabajo de portafolio para Tienda SalvaDoreña",
        dev_cta: "Ver Portafolio Web y Precios",

        // ── TRANSLATION ──
        trans_h2:   "Servicios de Traducción Certificada",
        trans_sub:  "Traducciones Profesionales Español ↔ Inglés",
        trans_body: "Proporcionamos traducciones certificadas palabra por palabra para familias, estudiantes y empresas. Cada traducción incluye un Certificado de Exactitud firmado, cumpliendo con los requisitos de USCIS, el DMV de Colorado, escuelas y agencias estatales. Entrega urgente disponible.",
        trans_s1: "Trámites de Inmigración y USCIS",
        trans_s2: "Documentos de título y registro del DMV de Colorado",
        trans_s3: "Registros de inscripción escolar y universitaria",
        trans_s4: "Trámites de agencias estatales y gubernamentales",
        trans_cta: "Solicitar Cotización de Traducción",
        trans_accent_label: "Certificada y Precisa",

        // ── ABOUT ──
        about_h2: "Construido Sobre Integridad",
        about_p1: "Servicios Quintana LLC reúne el trabajo profesional de <strong>David Quintana</strong>.",
        about_p2: "Ya sea que estemos notarizando un documento de préstamo en Castle Rock, ayudando a una familia a registrar un vehículo de otro estado, o escribiendo código personalizado para un negocio local, nuestro valor fundamental sigue siendo el mismo: <strong>Accesibilidad.</strong>",
        about_p3: "Las barreras del idioma y la complejidad técnica nunca deben impedir que alguien alcance sus objetivos.",
        about_trust_h3: "Por Qué Colorado Confía en Nosotros",
        trust_1: "<strong>100% Bilingüe:</strong> Dominio nativo del inglés y español.",
        trust_2: "<strong>Precios Transparentes:</strong> Sin cargos ocultos; todo se comunica por adelantado.",
        trust_3: "<strong>Enfocado en la Comunidad:</strong> Tarifas reducidas disponibles en nuestros Hubs Comunitarios.",
        trust_4: "<strong>Propiedad Local:</strong> Sirviendo con orgullo al área metropolitana de Denver y el Sur del Metro.",

        // ── STATS ──
        stat_brands:    "Marcas Activas",
        stat_bilingual: "Bilingüe",
        stat_local:     "Propiedad Local",

        // ── COMMUNITY HUBS ──
        hubs_h4:    "Hubs Comunitarios",
        hub_msu:    "MSU Denver",
        hub_tienda: "Tienda Salvadoreña",
        hub_note:   "Visitas notariales sin costo adicional en estas ubicaciones.",

        // ── FOOTER STATUTORY ──
        footer_statutory_en: "<strong>Important Notice:</strong> Servicios Quintana LLC and its representatives are not attorneys licensed to practice law in the State of Colorado. We may not give legal advice or accept fees for legal advice. We provide administrative, translation, and notary public services only.",
        footer_statutory_es: "<strong>Aviso Importante:</strong> Servicios Quintana LLC y sus representantes no son abogados licenciados para ejercer el derecho en el Estado de Colorado. No podemos dar asesoría legal ni aceptar honorarios por asesoría legal. Solo ofrecemos servicios administrativos, de traducción y de notario público.",

        // ── MISC ──
        lang_btn:    "English",
        back_to_top: "Volver Arriba"
    }
};

/* ══════════════════════════════════════════════════════════
   DOM READY
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

    /* ── CARD VISIBILITY ─────────────────────────────────── */
    // Reveal cards immediately (IntersectionObserver or direct)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
        // If already in view on load, reveal immediately
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.classList.add('reveal');
        } else {
            observer.observe(card);
        }
    });

    /* ── LANGUAGE TOGGLE ─────────────────────────────────── */
    let currentLang = 'en';
    try { currentLang = localStorage.getItem('sqLang') || 'en'; } catch (e) {}

    // Create and inject the language toggle button
    const langBtn = document.createElement('button');
    langBtn.id = 'lang-toggle';
    langBtn.setAttribute('aria-label', 'Toggle language / Cambiar idioma');
    langBtn.textContent = currentLang === 'en' ? 'Español' : 'English';

    const navContainer = document.querySelector('.nav-container');
    const mobileToggleBtn = navContainer ? navContainer.querySelector('.mobile-toggle') : null;
    if (navContainer) {
        if (mobileToggleBtn) {
            navContainer.insertBefore(langBtn, mobileToggleBtn);
        } else {
            navContainer.appendChild(langBtn);
        }
    }

    /**
     * updateContent — applies the given language to all [data-i18n] elements.
     * Handles innerHTML keys (for bold/HTML), card-link icon preservation,
     * and the lang attribute on <html>.
     */
    const updateContent = (lang) => {
        const t = translations[lang];
        if (!t) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key   = el.getAttribute('data-i18n');
            const value = t[key];
            if (value === undefined) return;

            if (el.classList.contains('card-link')) {
                // Preserve child <i> icon — update text node only
                Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) el.removeChild(node);
                });
                el.insertBefore(document.createTextNode(value + ' '), el.firstChild);
            } else if (el.tagName === 'BUTTON' && el.id !== 'lang-toggle') {
                // Buttons with icons: keep existing <i>, replace text nodes
                Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) el.removeChild(node);
                });
                el.insertBefore(document.createTextNode(value), el.firstChild);
            } else {
                el.innerHTML = value;
            }
        });

        // Update hero-es button aria-label dynamically
        const heroEsBtn = document.getElementById('hero-es-btn');
        if (heroEsBtn) {
            heroEsBtn.setAttribute('aria-label',
                lang === 'en'
                    ? 'Switch to Spanish / Cambiar a Español'
                    : 'Switch to English / Cambiar a Inglés'
            );
        }

        langBtn.textContent = t['lang_btn'] || (lang === 'en' ? 'Español' : 'English');
        document.documentElement.lang = lang;

        try { localStorage.setItem('sqLang', lang); } catch (e) {}
    };

    // Wire up main language button
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateContent(currentLang);
    });

    // Hero "Hablamos Español" button — switch lang AND scroll to brands
    const heroEsBtn = document.getElementById('hero-es-btn');
    if (heroEsBtn) {
        heroEsBtn.addEventListener('click', () => {
            if (currentLang === 'en') {
                currentLang = 'es';
                updateContent(currentLang);
            }
            const brandsSection = document.getElementById('brands');
            if (brandsSection) {
                window.scrollTo({ top: brandsSection.offsetTop - 80, behavior: 'smooth' });
            }
        });
    }

    // Apply saved language on load
    updateContent(currentLang);

    /* ── CUSTOM CURSOR ───────────────────────────────────── */
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

    /* ── CARD 3D TILT ────────────────────────────────────── */
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect    = card.getBoundingClientRect();
            const rotateX = ((e.clientY - rect.top)  - rect.height / 2) / 20;
            const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 20;
            card.style.transform = `translate(-8px,-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    /* ── BUTTON RIPPLE ───────────────────────────────────── */
    // @keyframes ripple-effect defined in styles.css
    document.querySelectorAll('.btn, .btn-gold, .btn-nav').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect   = this.getBoundingClientRect();
            const size   = Math.max(rect.width, rect.height);
            ripple.style.cssText = `
                position:absolute; border-radius:50%;
                background:rgba(255,255,255,0.5);
                width:${size}px; height:${size}px;
                left:${e.clientX - rect.left - size / 2}px;
                top:${e.clientY - rect.top  - size / 2}px;
                pointer-events:none;
                animation:ripple-effect 0.6s ease-out;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    /* ── SMOOTH SCROLL ───────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    /* ── HERO PARALLAX ───────────────────────────────────── */
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            hero.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
        }, { passive: true });
    }

    /* ── BACK TO TOP ─────────────────────────────────────── */
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ── DYNAMIC YEAR ────────────────────────────────────── */
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();

    /* ── MOBILE NAV TOGGLE ───────────────────────────────── */
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks     = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.contains('open');
            navLinks.classList.toggle('open', !isOpen);
            mobileToggle.setAttribute('aria-expanded', String(!isOpen));
        });

        // Close nav when a link is clicked (mobile UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ── REDUCED MOTION ──────────────────────────────────── */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.card').forEach(c => {
            c.style.transition = 'none';
            c.style.animation  = 'none';
        });
        if (cursor) cursor.style.display = 'none';
    }

    /* ── CONSOLE BRANDING ────────────────────────────────── */
    console.log('%c🟠 SERVICIOS QUINTANA LLC', 'font-size:18px;font-weight:bold;color:#f97316;');
    console.log('%c Colorado Notary · DMV · Translation · Web', 'font-size:12px;color:#fbbf24;');
});
