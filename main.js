/**
 * SERVICIOS QUINTANA LLC — main.js
 * Full bilingual toggle, scroll, ripple, cursor, mobile nav, FAQ, and all interactions.
 * Version: 2026 SEO Update — Extended with FAQ, trust pills, hubs callout translations.
 */

/* ══════════════════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════════════════ */
const translations = {
    en: {
        // ── NAV ──
        nav_brands:   "Our Brands",
        nav_services: "Services",
        nav_faq:      "FAQ",
        nav_about:    "About",
        nav_contact:  "Contact HQ",

        // ── HERO ──
        hero_eyebrow: "Est. 2026 · Castle Rock &amp; Denver Metro, Colorado",
        hero_h1:      "Bridging the Gap Between<br>Community &amp; Compliance.",
        hero_sub:     "Servicios Quintana LLC is Colorado's home for trusted, bilingual services that make official, government, and digital processes accessible to everyone. We bring together three specialized brands under one mission: helping our community navigate paperwork, agencies, and technology — with clarity and confidence.",
        btn_view_services: "View Our Services",
        btn_hablamos:      "Hablamos Español",

        // ── BRANDS SECTION ──
        brands_h2:  "Our Specialized Brands",
        brands_sub: "We operate three distinct brands serving Castle Rock, the Denver Metro area, and beyond. Whether we come to you or you meet us at a Community Hub, we are here to help.",

        // ── BADGES ──
        badge_auth:        "Document Authentication",
        badge_admin:       "Administrative Support",
        badge_digital:     "Digital Strategy &amp; Web Development",
        badge_translation: "Translation Services",

        // ── NOTARY ──
        notary_tagline:      "Professional, Mobile &amp; Bilingual Document Authentication",
        notary_intro:        "We bring the notary office to your doorstep or meet you at our discounted Community Hubs (MSU Denver &amp; Tienda Salvadoreña).",
        notary_s1:           "<strong>Standard Notarizations:</strong> Acknowledgments, Oaths/Affirmations, and Copy Certifications.",
        notary_s2:           "<strong>Apostille Processing:</strong> Full-service handling for international documents via the CO Secretary of State.",
        notary_s3:           "<strong>Loan Signings:</strong> Professional packages for Refinances, Purchases, and HELOCs.",
        notary_s4:           "<strong>Business &amp; Agent Services:</strong> I-9 Employment Verifications.",
        notary_s5:           "<strong>U.S. Passport Concierge:</strong> Clerical prep for DS-11/DS-82 and bilingual chaperone at the post office or clerk's office.",
        notary_pricing_note: "Notarial acts from <strong>$10–$15</strong> · Mobile fee quoted in writing before every appointment.",
        notary_cta:          "Explore Notary &amp; Passport Services",

        // ── DMV ──
        dmv_tagline: "Administrative Support &amp; DMV Proxy Services",
        dmv_intro:   "Specialized assistance for residents navigating complex Colorado DMV requirements. We simplify state processes so families can move forward without stress.",
        dmv_s1:      "<strong>DMV Document Preparation:</strong> Accurate forms for address changes, private-party title transfers, and bills of sale.",
        dmv_s2:      "<strong>In-Person Proxy Services:</strong> Can't go to the DMV? We act as your authorized proxy to submit documents in person.",
        dmv_s3:      "<strong>Out-of-State Title Transfers:</strong> We coordinate with out-of-state owners, dealerships, and lienholders.",
        dmv_s4:      "<strong>Same-Day Rush Services:</strong> Available for urgent document prep and DMV submissions.",
        dmv_cta:     "Explore DMV Services",

        // ── WEB DEV ──
        dev_tagline:       "Digital Strategy &amp; Web Development",
        dev_intro:         "High-performance, fully bilingual (EN/ES) web architecture for local businesses. We build accessible, modern websites from scratch — no cheap templates.",
        dev_s1:            "<strong>Custom Websites:</strong> From basic landing pages to full Business and E-Commerce builds.",
        dev_s2:            "<strong>Bilingual Integration:</strong> Reach more customers with seamless English and Spanish user experiences.",
        dev_s3:            "<strong>Healthcare-Aligned Tools:</strong> Secure patient intake forms, validation workflows, and FHIR-ready JSON output for clinics.",
        dev_s4:            "<strong>Ongoing Maintenance:</strong> Hosting setup, domain management, security patches, and SEO fundamentals.",
        dev_portfolio_note:"Includes portfolio work for Tienda SalvaDoreña",
        dev_cta:           "View Web Portfolio &amp; Pricing",

        // ── HUBS CALLOUT ──
        hubs_callout_h3:   "Save More at Our Community Hubs",
        hubs_callout_body: "Meet us at a Community Hub and pay <strong>$10 per notarial act</strong> (vs. the standard $15 maximum) with <strong>no travel fee</strong>. These are real discounts — voluntarily offered below the Colorado statutory maximum.",
        hub_tienda_sub:    "Community Hub — Castle Rock area",
        hub_crrec_sub:     "Community Hub — Castle Rock, CO",
        hub_msu_sub:       "Campus / Community Hub — Denver, CO",

        // ── TRANSLATION ──
        trans_h2:           "Certified Translation Services",
        trans_sub:          "Professional Spanish ↔ English Translations — USCIS, DMV, Schools &amp; State Agencies",
        trans_body:         "We provide word-for-word certified translations for families, students, and businesses. Every translation includes a signed <strong>Certificate of Accuracy</strong> compliant with USCIS, the Colorado DMV, schools, and state agencies. Rush turnaround available.",
        trans_s1:           "Immigration &amp; USCIS filings",
        trans_s2:           "Colorado DMV title &amp; registration documents",
        trans_s3:           "School &amp; university enrollment records",
        trans_s4:           "State agency &amp; government paperwork",
        trans_cta:          "Get a Translation Quote",
        trans_accent_label: "Certified &amp; Accurate",

        // ── FAQ ──
        faq_h2: "Frequently Asked Questions",
        faq_sub: "Quick answers to the most common questions about our services.",
        faq_q1: "What areas do you serve?",
        faq_a1: "We primarily serve Castle Rock, the Denver Metro area, and the South Metro region of Colorado. Mobile notary services extend beyond this area for an additional travel fee. We also operate Community Hubs at MSU Denver, Castle Rock Rec Center, and Tienda Salvadoreña where discounted fees apply — no travel charge.",
        faq_q2: "Do you offer services in Spanish?",
        faq_a2: "Yes — all services are fully bilingual in English and Spanish. David Quintana has native-level fluency in both languages and can assist with bilingual consultations, certified translations, and bilingual accompaniment to government appointments.",
        faq_q3: "What notary services are available?",
        faq_a3: "Quintana Notary &amp; Signing offers standard notarizations (acknowledgments, oaths, copy certifications), apostille processing for international documents via the Colorado Secretary of State, loan signing packages, I-9 employment verification, and U.S. passport concierge services.",
        faq_q4: "Can you help with out-of-state vehicle title transfers?",
        faq_a4: "Yes. Through the Ayuda DMV brand, we handle out-of-state title transfers, in-person DMV proxy services, and document preparation for private-party title transfers and bills of sale in Colorado.",
        faq_q5: "Are you attorneys? Can you give legal advice?",
        faq_a5: "No. Per C.R.S. § 24-21-525, Servicios Quintana LLC and its representatives are not attorneys licensed to practice law in Colorado. We cannot give legal advice or accept fees for legal advice. We provide administrative, notarial, translation, and clerical services only.",
        faq_q6: "What payment methods do you accept?",
        faq_a6: "We accept Cash, Venmo, Zelle, and Credit/Debit Card. A 3% processing fee applies to card payments. Payment is required upfront to confirm appointments. You will always receive an exact quote in writing before your appointment is confirmed.",

        // ── ABOUT ──
        about_h2:        "Built on Integrity",
        about_p1:        "Servicios Quintana LLC brings together the professional work of <strong>David Quintana</strong> — Colorado notary, DMV specialist, certified translator, and bilingual web developer.",
        about_p2:        "Whether we are notarizing a loan document in Castle Rock, helping a family register an out-of-state vehicle, or writing custom code for a local business, our core value remains the same: <strong>Accessibility.</strong>",
        about_p3:        "Language barriers and technical complexity should never prevent someone from achieving their goals.",
        about_trust_h3:  "Why Colorado Trusts Us",
        trust_1:         "<strong>100% Bilingual:</strong> Native-level fluency in English and Spanish — no interpreter needed.",
        trust_2:         "<strong>Transparent Pricing:</strong> No hidden fees; every cost is disclosed and agreed in writing before your appointment.",
        trust_3:         "<strong>Community Focused:</strong> Discounted fees available at our Community Hubs in Castle Rock and Denver.",
        trust_4:         "<strong>Locally Owned:</strong> Proudly serving the Denver Metro &amp; South Metro areas since 2026.",

        // ── STATS ──
        stat_brands:    "Active Brands",
        stat_bilingual: "Bilingual",
        stat_local:     "Locally Owned",

        // ── COMMUNITY HUBS (about section) ──
        hubs_h4:    "Community Hubs",
        hub_msu:    "MSU Denver — Denver, CO",
        hub_tienda: "Tienda Salvadoreña",
        hub_crrec:  "Castle Rock Rec Center",
        hub_note:   "$10 per notarial act &amp; no travel fee at these locations.",

        // ── FOOTER ──
        footer_brands_nav_h5: "Our Brands",
        footer_statutory_en:  "<strong>Important Notice:</strong> Servicios Quintana LLC and its representatives are not attorneys licensed to practice law in the State of Colorado. We may not give legal advice or accept fees for legal advice. We provide administrative, translation, and notary public services only. (C.R.S. § 24-21-525)",
        footer_statutory_es:  "<strong>Aviso Importante:</strong> Servicios Quintana LLC y sus representantes no son abogados licenciados para ejercer el derecho en el Estado de Colorado. No podemos dar asesoría legal ni aceptar honorarios por asesoría legal. Solo ofrecemos servicios administrativos, de traducción y de notario público.",

        // ── MISC ──
        lang_btn:    "Español",
        back_to_top: "Back to Top"
    },

    es: {
        // ── NAV ──
        nav_brands:   "Nuestras Marcas",
        nav_services: "Servicios",
        nav_faq:      "Preguntas",
        nav_about:    "Nosotros",
        nav_contact:  "Contacto",

        // ── HERO ──
        hero_eyebrow: "Est. 2026 · Castle Rock y Denver Metro, Colorado",
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
        notary_tagline:      "Autenticación de Documentos Profesional, Móvil y Bilingüe",
        notary_intro:        "Llevamos la oficina notarial a su puerta o nos reunimos con usted en nuestros Hubs Comunitarios con descuento (MSU Denver y Tienda Salvadoreña).",
        notary_s1:           "<strong>Notarizaciones Estándar:</strong> Reconocimientos, Juramentos/Afirmaciones y Certificaciones de Copia.",
        notary_s2:           "<strong>Procesamiento de Apostilla:</strong> Servicio completo para documentos internacionales a través de la Secretaría de Estado de Colorado.",
        notary_s3:           "<strong>Firmas de Préstamos:</strong> Paquetes profesionales para Refinanciamientos, Compras y HELOCs.",
        notary_s4:           "<strong>Servicios para Empresas y Agentes:</strong> Verificaciones de Empleo I-9.",
        notary_s5:           "<strong>Conserje de Pasaporte EE.UU.:</strong> Preparación de formularios DS-11/DS-82 y acompañamiento bilingüe en la oficina de correos o juzgado.",
        notary_pricing_note: "Actos notariales desde <strong>$10–$15</strong> · Tarifa de desplazamiento cotizada por escrito antes de cada cita.",
        notary_cta:          "Explorar Servicios de Notaría y Pasaporte",

        // ── DMV ──
        dmv_tagline: "Apoyo Administrativo y Servicios de Representación en el DMV",
        dmv_intro:   "Asistencia especializada para residentes que navegan los complejos requisitos del DMV de Colorado. Simplificamos los procesos estatales para que las familias puedan avanzar sin estrés.",
        dmv_s1:      "<strong>Preparación de Documentos DMV:</strong> Formularios precisos para cambios de dirección, transferencias privadas de título y facturas de venta.",
        dmv_s2:      "<strong>Servicios de Representación en Persona:</strong> ¿No puede ir al DMV? Actuamos como su representante autorizado para entregar sus documentos en persona.",
        dmv_s3:      "<strong>Transferencias de Título de Otros Estados:</strong> Coordinamos con propietarios de otros estados, concesionarios y acreedores.",
        dmv_s4:      "<strong>Servicios Urgentes el Mismo Día:</strong> Disponibles para preparación urgente de documentos y entregas en el DMV.",
        dmv_cta:     "Explorar Servicios del DMV",

        // ── WEB DEV ──
        dev_tagline:        "Estrategia Digital y Desarrollo Web",
        dev_intro:          "Arquitectura web de alto rendimiento, completamente bilingüe (EN/ES) para negocios locales. Construimos sitios web accesibles y modernos desde cero — sin plantillas baratas.",
        dev_s1:             "<strong>Sitios Web Personalizados:</strong> Desde páginas de destino básicas hasta sitios completos de negocios y comercio electrónico.",
        dev_s2:             "<strong>Integración Bilingüe:</strong> Llegue a más clientes con experiencias fluidas en inglés y español.",
        dev_s3:             "<strong>Herramientas para Salud:</strong> Formularios seguros de ingreso de pacientes, flujos de validación y salida JSON compatible con FHIR para clínicas.",
        dev_s4:             "<strong>Mantenimiento Continuo:</strong> Configuración de hosting, gestión de dominio, parches de seguridad y fundamentos de SEO.",
        dev_portfolio_note: "Incluye trabajo de portafolio para Tienda SalvaDoreña",
        dev_cta:            "Ver Portafolio Web y Precios",

        // ── HUBS CALLOUT ──
        hubs_callout_h3:   "Ahorre Más en Nuestros Hubs Comunitarios",
        hubs_callout_body: "Visítenos en un Hub Comunitario y pague <strong>$10 por acto notarial</strong> (en lugar del máximo estándar de $15) <strong>sin tarifa de desplazamiento</strong>. Son descuentos reales — ofrecidos voluntariamente por debajo del máximo legal de Colorado.",
        hub_tienda_sub:    "Hub Comunitario — área de Castle Rock",
        hub_crrec_sub:     "Hub Comunitario — Castle Rock, CO",
        hub_msu_sub:       "Hub Universitario / Comunitario — Denver, CO",

        // ── TRANSLATION ──
        trans_h2:           "Servicios de Traducción Certificada",
        trans_sub:          "Traducciones Profesionales Español ↔ Inglés — USCIS, DMV, Escuelas y Agencias Estatales",
        trans_body:         "Proporcionamos traducciones certificadas palabra por palabra para familias, estudiantes y empresas. Cada traducción incluye un <strong>Certificado de Exactitud</strong> firmado, cumpliendo con los requisitos de USCIS, el DMV de Colorado, escuelas y agencias estatales. Entrega urgente disponible.",
        trans_s1:           "Trámites de Inmigración y USCIS",
        trans_s2:           "Documentos de título y registro del DMV de Colorado",
        trans_s3:           "Registros de inscripción escolar y universitaria",
        trans_s4:           "Trámites de agencias estatales y gubernamentales",
        trans_cta:          "Solicitar Cotización de Traducción",
        trans_accent_label: "Certificada y Precisa",

        // ── FAQ ──
        faq_h2:  "Preguntas Frecuentes",
        faq_sub: "Respuestas rápidas a las preguntas más comunes sobre nuestros servicios.",
        faq_q1:  "¿A qué áreas sirven?",
        faq_a1:  "Principalmente servimos Castle Rock, el área metropolitana de Denver y la región sur del metro de Colorado. Los servicios de notaría móvil se extienden más allá de esta área con una tarifa de desplazamiento adicional. También operamos Hubs Comunitarios en MSU Denver, Castle Rock Rec Center y Tienda Salvadoreña donde aplican tarifas con descuento — sin cargo de viaje.",
        faq_q2:  "¿Ofrecen servicios en español?",
        faq_a2:  "Sí — todos los servicios son completamente bilingües en inglés y español. David Quintana tiene fluidez de nivel nativo en ambos idiomas y puede asistir con consultas bilingües, traducciones certificadas y acompañamiento bilingüe a citas gubernamentales.",
        faq_q3:  "¿Qué servicios notariales están disponibles?",
        faq_a3:  "Quintana Notary &amp; Signing ofrece notarizaciones estándar (reconocimientos, juramentos, certificaciones de copia), procesamiento de apostillas para documentos internacionales a través de la Secretaría de Estado de Colorado, paquetes de firma de préstamos, verificación de empleo I-9 y servicios de conserje de pasaporte estadounidense.",
        faq_q4:  "¿Pueden ayudar con transferencias de título de vehículos de otros estados?",
        faq_a4:  "Sí. A través de la marca Ayuda DMV, manejamos transferencias de título de otros estados, servicios de representación en persona en el DMV, y preparación de documentos para transferencias privadas de título y facturas de venta en Colorado.",
        faq_q5:  "¿Son abogados? ¿Pueden dar asesoría legal?",
        faq_a5:  "No. Conforme a C.R.S. § 24-21-525, Servicios Quintana LLC y sus representantes no son abogados licenciados para ejercer el derecho en Colorado. No podemos dar asesoría legal ni aceptar honorarios por asesoría legal. Solo ofrecemos servicios administrativos, notariales, de traducción y de trámites.",
        faq_q6:  "¿Qué métodos de pago aceptan?",
        faq_a6:  "Aceptamos Efectivo, Venmo, Zelle y Tarjeta de Crédito/Débito. Se aplica un cargo de procesamiento del 3% a los pagos con tarjeta. Se requiere pago por adelantado para confirmar citas. Siempre recibirá una cotización exacta por escrito antes de que su cita sea confirmada.",

        // ── ABOUT ──
        about_h2:       "Construido Sobre Integridad",
        about_p1:       "Servicios Quintana LLC reúne el trabajo profesional de <strong>David Quintana</strong> — notario de Colorado, especialista en DMV, traductor certificado y desarrollador web bilingüe.",
        about_p2:       "Ya sea que estemos notarizando un documento de préstamo en Castle Rock, ayudando a una familia a registrar un vehículo de otro estado, o escribiendo código personalizado para un negocio local, nuestro valor fundamental sigue siendo el mismo: <strong>Accesibilidad.</strong>",
        about_p3:       "Las barreras del idioma y la complejidad técnica nunca deben impedir que alguien alcance sus objetivos.",
        about_trust_h3: "Por Qué Colorado Confía en Nosotros",
        trust_1:        "<strong>100% Bilingüe:</strong> Dominio nativo del inglés y español — sin intérprete necesario.",
        trust_2:        "<strong>Precios Transparentes:</strong> Sin cargos ocultos; todo se comunica y se acuerda por escrito antes de su cita.",
        trust_3:        "<strong>Enfocado en la Comunidad:</strong> Tarifas con descuento disponibles en nuestros Hubs Comunitarios en Castle Rock y Denver.",
        trust_4:        "<strong>Propiedad Local:</strong> Sirviendo con orgullo al área metropolitana de Denver y el Sur del Metro desde 2026.",

        // ── STATS ──
        stat_brands:    "Marcas Activas",
        stat_bilingual: "Bilingüe",
        stat_local:     "Propiedad Local",

        // ── COMMUNITY HUBS (about section) ──
        hubs_h4:    "Hubs Comunitarios",
        hub_msu:    "MSU Denver — Denver, CO",
        hub_tienda: "Tienda Salvadoreña",
        hub_crrec:  "Castle Rock Rec Center",
        hub_note:   "$10 por acto notarial y sin tarifa de desplazamiento en estas ubicaciones.",

        // ── FOOTER ──
        footer_brands_nav_h5: "Nuestras Marcas",
        footer_statutory_en:  "<strong>Important Notice:</strong> Servicios Quintana LLC and its representatives are not attorneys licensed to practice law in the State of Colorado. We may not give legal advice or accept fees for legal advice. We provide administrative, translation, and notary public services only. (C.R.S. § 24-21-525)",
        footer_statutory_es:  "<strong>Aviso Importante:</strong> Servicios Quintana LLC y sus representantes no son abogados licenciados para ejercer el derecho en el Estado de Colorado. No podemos dar asesoría legal ni aceptar honorarios por asesoría legal. Solo ofrecemos servicios administrativos, de traducción y de notario público.",

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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
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
     */
    const updateContent = (lang) => {
        const t = translations[lang];
        if (!t) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key   = el.getAttribute('data-i18n');
            const value = t[key];
            if (value === undefined) return;

            if (el.classList.contains('card-link')) {
                Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) el.removeChild(node);
                });
                el.insertBefore(document.createTextNode(value + ' '), el.firstChild);
            } else if (el.tagName === 'BUTTON' && el.id !== 'lang-toggle') {
                Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) el.removeChild(node);
                });
                el.insertBefore(document.createTextNode(value), el.firstChild);
            } else {
                el.innerHTML = value;
            }
        });

        // Update hero-es button aria-label
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

        // Update <html> lang for screen readers and AI parsers
        document.documentElement.setAttribute('lang', lang);

        try { localStorage.setItem('sqLang', lang); } catch (e) {}
    };

    // Main language toggle
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateContent(currentLang);
    });

    // Hero "Hablamos Español" button — switch lang AND smooth-scroll to brands
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

    // Apply saved/default language on load
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

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ── FAQ KEYBOARD ACCESSIBILITY ─────────────────────── */
    // Native <details> handles click; ensure Enter key works on summaries
    document.querySelectorAll('.faq-question').forEach(summary => {
        summary.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                summary.closest('details').toggleAttribute('open');
            }
        });
    });

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
    console.log('%c Bilingual · Community Focused · Locally Owned', 'font-size:11px;color:#94a3b8;');
});
