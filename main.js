/**
 * SERVICIOS QUINTANA LLC — main.js
 * Full bilingual toggle, scroll, ripple, cursor, mobile nav, FAQ, and all interactions.
 * Version: 2026-10 — Personal hero, stats banner, asymmetric brand cards, hub locator.
 */

/* ══════════════════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════════════════ */
const translations = {
    en: {
        // ── NAV ──
        nav_brands:   "My Brands",
        nav_services: "Services",
        nav_faq:      "FAQ",
        nav_about:    "About",
        nav_contact:  "Contact HQ",

        // ── HERO ──
        hero_eyebrow: "Est. 2026 · Denver Metro, Colorado",
        hero_h1:      "Hi, I'm David.<br><span class=\"hero-h1-sub\">Bilingual notary, DMV help &amp; web development — one person, start to finish.</span>",
        hero_sub:     "Servicios Quintana isn't a call center or a franchise — it's me. When you book, I'm the notary who shows up, the one who stands in line at the DMV for you, and the developer who builds your website. Same person from first message to final signature, in English or Spanish.",
        pill_bilingual: "100% Bilingual EN / ES",
        pill_area:      "Denver Metro Area",
        pill_pricing:   "Transparent Pricing",
        profile_role:   "Owner &amp; sole operator",
        profile_edu:    "B.S. Health Informatics, MSU Denver",
        profile_status: "Call or text me directly",

        // ── STATS BANNER ──
        bs_rate_label:   "Hub notarial act",
        bs_travel_label: "Travel fee at hubs",
        bs_brands_label: "Brands · one owner",
        bs_lang_label:   "Languages",
        bs_hubs_label:   "Meet me at",
        pill_dpl:        "Denver Public Libraries",
        btn_view_services: "View My Services",
        btn_hablamos:      "Hablamos Español",

        // ── BRANDS SECTION ──
        brands_h2:  "My Specialized Brands",
        brands_sub: "I operate four distinct brands serving the Denver Metro area and beyond. Whether I come to you or you meet me at a Community Hub, I'm here to help.",

        // ── BADGES ──
        badge_auth:        "Document Authentication",
        badge_admin:       "Administrative Support",
        badge_digital:     "Digital Strategy &amp; Web Development",
        badge_translation: "Translation Services",

        // ── NOTARY ──
        notary_tagline:      "Professional, Mobile &amp; Bilingual Document Authentication",
        notary_intro:        "I bring the notary office to your doorstep or meet you at discounted Community Hubs (MSU Denver &amp; Tienda Salvadoreña).",
        notary_s1:           "<strong>Standard Notarizations:</strong> Acknowledgments, Oaths/Affirmations, and Copy Certifications.",
        notary_s2:           "<strong>Apostille Processing:</strong> Full-service handling for international documents via the CO Secretary of State.",
        notary_s3:           "<strong>Loan Signings:</strong> Professional packages for Refinances, Purchases, and HELOCs.",
        notary_s4:           "<strong>Airport Notary (DIA):</strong> I meet you in the terminal — a flat $95 with parking included, plus $10 per signature.",
        notary_s5:           "<strong>U.S. Passport Concierge:</strong> Clerical prep for DS-11/DS-82 and bilingual chaperone at the post office or clerk's office. The forms are free from the government; I charge only for typing and my time.",
        notary_pricing_note: "Notarial acts from <strong class=\"mono\">$10–$15</strong> · Mobile fee quoted in writing before every appointment.",
        notary_cta:          "Explore Notary &amp; Passport Services",

        // ── DMV ──
        dmv_tagline: "Administrative Support &amp; DMV Proxy Services",
        dmv_intro:   "Specialized assistance for residents navigating complex Colorado DMV requirements. I simplify state processes so families can move forward without stress.",
        dmv_s1:      "<strong>DMV Document Preparation:</strong> I type the forms you choose for address changes, private-party title transfers, and bills of sale. The forms are free from the government; I charge only for typing and my time.",
        dmv_s2:      "<strong>In-Person Proxy Services:</strong> Can't go to the DMV? I act as your authorized proxy to submit documents in person.",
        dmv_s3:      "<strong>Out-of-State Title Transfers:</strong> I coordinate with out-of-state owners, dealerships, and lienholders.",
        dmv_s4:      "<strong>Same-Day Rush Services:</strong> Available for urgent document prep and DMV submissions.",
        dmv_cta:     "Explore DMV Services",

        // ── B2B ──
        badge_b2b:   "Business &amp; Legal Support",
        b2b_tagline: "Legal Proxy, ICE Detention Visits, Corporate &amp; Law Firm Subcontracting",
        b2b_intro:   "Notary support for title companies, law firms, employers and fellow notaries &mdash; priced in writing, invoiced to your firm.",
        b2b_s1:      "<strong>Aurora ICE Facility Visits:</strong> I visit detained clients as your cleared legal proxy. $150 per visit (travel, clearance, first hour on site), $25 per 30 min after; nothing paid before the visit.",
        b2b_s2:      "<strong>Title &amp; Real Estate Signings:</strong> One package up to 30 pages for $125, with printing, encrypted scanbacks and the FedEx/UPS drop.",
        b2b_s3:      "<strong>Apostille Runs for Notaries &amp; Firms:</strong> $85 mail-in or $115 pickup, up to 3 documents; State fees at cost.",
        b2b_s4:      "<strong>Witnesses, Recordings &amp; I-9 Overflow:</strong> Independent witness $35&ndash;$50, county recording $35&ndash;$75, I-9 authorized representative $40&ndash;$55.",
        b2b_cta:     "Explore Business Services",

        // ── WEB DEV ──
        dev_tagline:       "Digital Strategy &amp; Web Development",
        dev_intro:         "High-performance, fully bilingual (EN/ES) web architecture for local businesses. I build accessible, modern websites from scratch — no cheap templates.",
        dev_s1:            "<strong>Custom Websites:</strong> From basic landing pages to full Business and E-Commerce builds.",
        dev_s2:            "<strong>Bilingual Integration:</strong> Reach more customers with seamless English and Spanish user experiences.",
        dev_s3:            "<strong>Healthcare-Aligned Tools:</strong> As an MSU Denver Health Informatics graduate, I build secure patient intake forms, validation workflows, and FHIR-ready JSON output for clinics.",
        dev_s4:            "<strong>Ongoing Maintenance:</strong> Hosting setup, domain management, security patches, and SEO fundamentals.",
        dev_portfolio_note:"Includes portfolio work for Tienda Salvadoreña",
        dev_cta:           "View Web Portfolio &amp; Pricing",

        // ── HUBS CALLOUT ──
        hubs_callout_h3:   "Save More at a Community Hub",
        hubs_callout_body: "Meet me at a Community Hub and pay <strong>$10 per notarial act</strong> (vs. the standard $15 maximum) with <strong>no travel fee</strong>. These are real discounts — voluntarily offered below the Colorado statutory maximum.",
        hub_tienda_sub:    "Community Hub — East Colfax, Denver",
        hub_crrec_sub:     "Community Hub — any branch in Denver",
        hub_msu_sub:       "Auraria Library — Denver, CO",
        hub_rate_tag:      "Community-first rate",
        hub_rate_unit:     "/ notarial act",
        hub_cmp_max:       "CO max",
        hub_cmp_travel:    "Travel",
        hub_panel_label:   "// selected hub",
        hub_book:          "Book a hub visit",
        hub_directions:    "Directions",
        hub_desc_tienda:   "Neighborhood market on East Colfax. Tell me a time and I'll meet you there — just bring your unsigned document and a valid photo ID.",
        hub_desc_msu:      "Auraria Library on the downtown Auraria Campus — convenient for students, faculty, and anyone working near downtown.",
        hub_desc_dpl:      "Any Denver Public Library branch. Pick the one closest to you and I'll meet you there by appointment.",

        // ── TRANSLATION ──
        trans_h2:           "Certified Translation Services",
        trans_sub:          "Professional Spanish ↔ English Translations — USCIS, DMV, Schools &amp; State Agencies",
        trans_body:         "I provide word-for-word certified translations for families, students, and businesses. Every translation includes a signed <strong>Certificate of Accuracy</strong> compliant with USCIS, the Colorado DMV, schools, and state agencies. Rush turnaround available.",
        trans_s1:           "Documents for USCIS (translation only)",
        trans_s2:           "Colorado DMV title &amp; registration documents",
        trans_s3:           "School &amp; university enrollment records",
        trans_s4:           "State agency &amp; government paperwork",
        trans_cta:          "Get a Translation Quote",
        trans_accent_label: "Certified &amp; Accurate",

        // ── FAQ ──
        faq_h2: "Frequently Asked Questions",
        faq_sub: "Quick answers to the most common questions about my services.",
        faq_q1: "What areas do you serve?",
        faq_a1: "I primarily serve the Denver Metro area of Colorado. Mobile notary services extend beyond this area for an additional travel fee. I also meet clients by appointment at Community Hubs (Tienda Salvadoreña, MSU Denver's Auraria Library, and any Denver Public Library branch), where notarization is $10 per act with no travel charge. These are public places where I meet clients; I am not affiliated with or endorsed by them.",
        faq_q2: "Do you offer services in Spanish?",
        faq_a2: "Yes — all services are fully bilingual in English and Spanish. I have native-level fluency in both languages and can assist with bilingual consultations, certified translations, and bilingual accompaniment to government appointments.",
        faq_q3: "What notary services are available?",
        faq_a3: "Quintana Notary &amp; Signing offers standard notarizations (acknowledgments, oaths, copy certifications), apostille processing for international documents via the Colorado Secretary of State, loan signing packages, I-9 employment verification, and U.S. passport concierge services.",
        faq_q4: "Can you help with out-of-state vehicle title transfers?",
        faq_a4: "Yes. Through the Ayuda DMV brand, I handle out-of-state title transfers, in-person DMV proxy services, and document preparation for private-party title transfers and bills of sale in Colorado.",
        faq_q5: "Are you an attorney? Can you give legal advice?",
        faq_a5: "No. I am not an attorney licensed to practice law in the state of Colorado and I may not give legal advice or accept fees for legal advice. I am not an immigration consultant, nor am I an expert on immigration matters. If you suspect fraud, you may contact the Colorado attorney general’s office or the Colorado supreme court. I provide administrative, notarial, translation, and clerical services only. (C.R.S. § 24-21-525)",
        faq_q6: "What payment methods do you accept?",
        faq_a6: "I accept Cash, Venmo, Zelle, bank transfer (ACH), and Credit/Debit Card. Credit card payments have a 2% processing surcharge; debit cards have none; there is no surcharge for cash, Venmo, Zelle, or bank transfer. Notice required by Colorado: To cover the cost of processing a credit or charge card transaction, and pursuant to section 5-2-212, Colorado Revised Statutes, a seller or lessor may impose a processing surcharge in an amount not to exceed 2% of the total payment made for goods or services purchased or leased by use of a credit or charge card. A seller or lessor shall not impose a processing surcharge on payments made by use of cash, a check, or a debit card or redemption of a gift card. Payment is required upfront to confirm appointments (ICE facility visits are paid after the visit). Cancel or reschedule with 24+ hours' notice and what you paid stays as credit on your account (it doesn't expire); with less notice or a no-show, I keep the deposit shown on your invoice and the rest is credit; if I cancel, you get a full refund. You will always receive an exact quote in writing before your appointment is confirmed.",

        // ── ABOUT ──
        about_h2:        "Built on Integrity",
        about_p1:        "Servicios Quintana LLC is the solo, owner-operated practice of <strong>David Quintana</strong> — a Colorado mobile notary, DMV specialist, native bilingual Spanish-English translator, and bilingual web developer.",
        about_creds:     "I'm also a <strong>Health Informatics (B.S.) graduate</strong> of Metropolitan State University of Denver — training that sharpens my secure healthcare-technology work.",
        about_p2:        "Whether I'm notarizing a loan document in Denver, helping a family register an out-of-state vehicle, or writing custom code for a local business, my core value remains the same: <strong>Accessibility.</strong>",
        about_p3:        "Language barriers and technical complexity should never prevent someone from achieving their goals.",
        about_trust_h3:  "Why Colorado Trusts Me",
        about_photo_role: "Notary · DMV · Web Development",
        trust_1:         "<strong>100% Bilingual:</strong> Native-level fluency in English and Spanish — no interpreter needed.",
        trust_2:         "<strong>Transparent Pricing:</strong> No hidden fees; every cost is disclosed and agreed in writing before your appointment.",
        trust_3:         "<strong>Community Focused:</strong> Discounted fees available at Community Hubs across Denver.",
        trust_5:         "<strong>Commissioned &amp; Insured:</strong> I'm a Notary Public commissioned in Colorado (ID 20254044224). Servicios Quintana LLC is insured through The Hartford, with general liability, data breach coverage, and professional liability (errors &amp; omissions) for my notary, translation and web development work. Certificate of insurance available on request.",
        pill_insured:    "Commissioned &amp; Insured",
        footer_insured:  "<strong>Commissioned &amp; Insured.</strong> Colorado notary commission ID 20254044224 · Insured through The Hartford: general liability, data breach, and professional liability (errors &amp; omissions) for notary, translation and web work · Certificate of insurance on request.",
        trust_4:         "<strong>Locally Owned:</strong> Proudly serving the Denver Metro area since 2026.",

        // ── STATS ──
        stat_brands:    "Active Brands",
        stat_bilingual: "Bilingual",
        stat_local:     "Locally Owned",

        // ── COMMUNITY HUBS (about section) ──
        hubs_h4:    "Community Hubs",
        hub_msu:    "MSU Denver — Denver, CO",
        hub_tienda: "Tienda Salvadoreña",
        hub_crrec:  "Denver Public Library (all branches)",
        hub_dpl:    "Denver Public Library (all branches)",
        hub_note:   "$10 per notarial act &amp; no travel fee at these locations. These are public places where I meet clients by appointment; I am not affiliated with or endorsed by them.",

        // ── FOOTER ──
        footer_brands_nav_h5: "My Brands",
        footer_statutory_en:  "<strong>Important Notice:</strong> I am not an attorney licensed to practice law in the state of Colorado and I may not give legal advice or accept fees for legal advice. I am not an immigration consultant, nor am I an expert on immigration matters. If you suspect fraud, you may contact the Colorado attorney general’s office or the Colorado supreme court. I provide administrative, translation, and notarial services only. (C.R.S. § 24-21-525)",
        footer_statutory_es:  "<strong>Aviso Importante:</strong> No soy abogado licenciado para ejercer el derecho en el estado de Colorado y no puedo dar asesoría legal ni aceptar honorarios por asesoría legal. No soy consultor de inmigración ni experto en asuntos de inmigración. Si sospecha de fraude, puede comunicarse con la oficina del Fiscal General de Colorado o con la Corte Suprema de Colorado. Solo ofrezco servicios administrativos, de traducción y notariales. (C.R.S. § 24-21-525)",

        // ── MISC ──
        lang_btn:    "Español",
        back_to_top: "Back to Top"
    },

    es: {
        // ── NAV ──
        nav_brands:   "Mis Marcas",
        nav_services: "Servicios",
        nav_faq:      "Preguntas",
        nav_about:    "Nosotros",
        nav_contact:  "Contacto",

        // ── HERO ──
        hero_eyebrow: "Est. 2026 · Área Metropolitana de Denver, Colorado",
        hero_h1:      "Hola, soy David.<br><span class=\"hero-h1-sub\">Servicios notariales, ayuda con el DMV y desarrollo web — una sola persona, de principio a fin.</span>",
        hero_sub:     "Servicios Quintana no es un centro de llamadas ni una franquicia — soy yo. Cuando hace una cita, yo soy quien llega a notarizar, quien hace la fila en el DMV por usted y quien construye su sitio web. La misma persona desde el primer mensaje hasta la firma final, en español o en inglés.",
        pill_bilingual: "100% Bilingüe ES / EN",
        pill_area:      "Área Metropolitana de Denver",
        pill_pricing:   "Precios Transparentes",
        profile_role:   "Dueño y único operador",
        profile_edu:    "B.S. Informática de la Salud, MSU Denver",
        profile_status: "Llámeme o escríbame directo",

        // ── STATS BANNER ──
        bs_rate_label:   "Acto notarial en hub",
        bs_travel_label: "Desplazamiento en hubs",
        bs_brands_label: "Marcas · un dueño",
        bs_lang_label:   "Idiomas",
        bs_hubs_label:   "Encuéntreme en",
        pill_dpl:        "Bibliotecas Públicas de Denver",
        btn_view_services: "Ver Mis Servicios",
        btn_hablamos:      "We Speak English",

        // ── BRANDS SECTION ──
        brands_h2:  "Mis Marcas Especializadas",
        brands_sub: "Opero cuatro marcas distintas que sirven al área metropolitana de Denver y más allá. Ya sea que yo vaya a usted o que me visite en un Hub Comunitario, estoy aquí para ayudar.",

        // ── BADGES ──
        badge_auth:        "Autenticación de Documentos",
        badge_admin:       "Apoyo Administrativo",
        badge_digital:     "Estrategia Digital y Desarrollo Web",
        badge_translation: "Servicios de Traducción",

        // ── NOTARY ──
        notary_tagline:      "Autenticación de Documentos Profesional, Móvil y Bilingüe",
        notary_intro:        "Llevo la oficina notarial a su puerta o me reúno con usted en Hubs Comunitarios con descuento (MSU Denver y Tienda Salvadoreña).",
        notary_s1:           "<strong>Notarizaciones Estándar:</strong> Reconocimientos, Juramentos/Afirmaciones y Certificaciones de Copia.",
        notary_s2:           "<strong>Procesamiento de Apostilla:</strong> Servicio completo para documentos internacionales a través de la Secretaría de Estado de Colorado.",
        notary_s3:           "<strong>Firmas de Préstamos:</strong> Paquetes profesionales para Refinanciamientos, Compras y HELOCs.",
        notary_s4:           "<strong>Notarizaciones en el Aeropuerto (DIA):</strong> lo veo en la terminal — $95 fijos con el estacionamiento incluido, más $10 por firma.",
        notary_s5:           "<strong>Conserje de Pasaporte EE.UU.:</strong> Preparación de formularios DS-11/DS-82 y acompañamiento bilingüe en la oficina de correos o juzgado. Los formularios son gratuitos del gobierno; solo cobro por la mecanografía y mi tiempo.",
        notary_pricing_note: "Actos notariales desde <strong class=\"mono\">$10–$15</strong> · Tarifa de desplazamiento cotizada por escrito antes de cada cita.",
        notary_cta:          "Explorar Servicios Notariales y de Pasaporte",

        // ── DMV ──
        dmv_tagline: "Apoyo Administrativo y Servicios de Representación en el DMV",
        dmv_intro:   "Asistencia especializada para residentes que navegan los complejos requisitos del DMV de Colorado. Simplifico los procesos estatales para que las familias puedan avanzar sin estrés.",
        dmv_s1:      "<strong>Preparación de Documentos DMV:</strong> Escribo los formularios que usted elige para cambios de dirección, transferencias privadas de título y facturas de venta. Los formularios son gratuitos del gobierno; solo cobro por la mecanografía y mi tiempo.",
        dmv_s2:      "<strong>Servicios de Representación en Persona:</strong> ¿No puede ir al DMV? Actúo como su representante autorizado para entregar sus documentos en persona.",
        dmv_s3:      "<strong>Transferencias de Título de Otros Estados:</strong> Coordino con propietarios de otros estados, concesionarios y acreedores.",
        dmv_s4:      "<strong>Servicios Urgentes el Mismo Día:</strong> Disponibles para preparación urgente de documentos y entregas en el DMV.",
        dmv_cta:     "Explorar Servicios del DMV",

        // ── B2B ──
        badge_b2b:   "Apoyo para Empresas y Abogados",
        b2b_tagline: "Representante Legal, Visitas a Centros de Detención de ICE y Subcontratación para Empresas y Bufetes",
        b2b_intro:   "Apoyo notarial para compañías de títulos, bufetes, empleadores y colegas &mdash; con precio por escrito y factura a su empresa.",
        b2b_s1:      "<strong>Visitas al Centro de ICE de Aurora:</strong> visito a sus clientes detenidos como su representante autorizado. $150 por visita (viaje, autorización y la primera hora), $25 por cada 30 min después; no se paga nada antes de la visita.",
        b2b_s2:      "<strong>Firmas de Títulos y Bienes Raíces:</strong> un paquete de hasta 30 páginas por $125, con impresión, escaneos cifrados y entrega en FedEx/UPS.",
        b2b_s3:      "<strong>Trámites de Apostilla para Colegas y Bufetes:</strong> $85 por correo o $115 con recogida, hasta 3 documentos; tarifas del Estado al costo.",
        b2b_s4:      "<strong>Testigos, Registros e I-9:</strong> testigo independiente $35&ndash;$50, registro en el condado $35&ndash;$75, representante autorizado para I-9 $40&ndash;$55.",
        b2b_cta:     "Explorar Servicios para Empresas",

        // ── WEB DEV ──
        dev_tagline:        "Estrategia Digital y Desarrollo Web",
        dev_intro:          "Arquitectura web de alto rendimiento, completamente bilingüe (EN/ES) para negocios locales. Construyo sitios web accesibles y modernos desde cero — sin plantillas baratas.",
        dev_s1:             "<strong>Sitios Web Personalizados:</strong> Desde páginas de destino básicas hasta sitios completos de negocios y comercio electrónico.",
        dev_s2:             "<strong>Integración Bilingüe:</strong> Llegue a más clientes con experiencias fluidas en inglés y español.",
        dev_s3:             "<strong>Herramientas para Salud:</strong> Como graduado en Informática de la Salud de MSU Denver, creo formularios seguros de ingreso de pacientes, flujos de validación y salida JSON compatible con FHIR para clínicas.",
        dev_s4:             "<strong>Mantenimiento Continuo:</strong> Configuración de hosting, gestión de dominio, parches de seguridad y fundamentos de SEO.",
        dev_portfolio_note: "Incluye trabajo de portafolio para Tienda Salvadoreña",
        dev_cta:            "Ver Portafolio Web y Precios",

        // ── HUBS CALLOUT ──
        hubs_callout_h3:   "Ahorre Más en un Hub Comunitario",
        hubs_callout_body: "Visíteme en un Hub Comunitario y pague <strong>$10 por acto notarial</strong> (en lugar del máximo estándar de $15) <strong>sin tarifa de desplazamiento</strong>. Son descuentos reales — ofrecidos voluntariamente por debajo del máximo legal de Colorado.",
        hub_tienda_sub:    "Hub Comunitario — East Colfax, Denver",
        hub_crrec_sub:     "Hub Comunitario — cualquier sucursal en Denver",
        hub_msu_sub:       "Biblioteca Auraria — Denver, CO",
        hub_rate_tag:      "Tarifa comunitaria",
        hub_rate_unit:     "/ acto notarial",
        hub_cmp_max:       "Máx. CO",
        hub_cmp_travel:    "Viaje",
        hub_panel_label:   "// hub seleccionado",
        hub_book:          "Agendar en un hub",
        hub_directions:    "Cómo llegar",
        hub_desc_tienda:   "Mercado del barrio en East Colfax. Dígame a qué hora y nos vemos ahí — solo traiga su documento sin firmar y una identificación vigente con foto.",
        hub_desc_msu:      "Biblioteca Auraria en el campus Auraria del centro — práctico para estudiantes, profesores y quien trabaje cerca del centro.",
        hub_desc_dpl:      "Cualquier sucursal de la Biblioteca Pública de Denver. Elija la más cercana y nos vemos ahí con cita previa.",

        // ── TRANSLATION ──
        trans_h2:           "Servicios de Traducción Certificada",
        trans_sub:          "Traducciones Profesionales Español ↔ Inglés — USCIS, DMV, Escuelas y Agencias Estatales",
        trans_body:         "Proporciono traducciones certificadas palabra por palabra para familias, estudiantes y empresas. Cada traducción incluye un <strong>Certificado de Exactitud</strong> firmado, cumpliendo con los requisitos de USCIS, el DMV de Colorado, escuelas y agencias estatales. Entrega urgente disponible.",
        trans_s1:           "Documentos para USCIS (solo traducción)",
        trans_s2:           "Documentos de título y registro del DMV de Colorado",
        trans_s3:           "Registros de inscripción escolar y universitaria",
        trans_s4:           "Trámites de agencias estatales y gubernamentales",
        trans_cta:          "Solicitar Cotización de Traducción",
        trans_accent_label: "Certificada y Precisa",

        // ── FAQ ──
        faq_h2:  "Preguntas Frecuentes",
        faq_sub: "Respuestas rápidas a las preguntas más comunes sobre mis servicios.",
        faq_q1:  "¿A qué áreas sirve?",
        faq_a1:  "Principalmente sirvo el área metropolitana de Denver, Colorado. Los servicios notariales móviles se extienden más allá de esta área con una tarifa de desplazamiento adicional. También me reúno con clientes, con cita previa, en Hubs Comunitarios (Tienda Salvadoreña, la Biblioteca Auraria de MSU Denver y cualquier sucursal de la Biblioteca Pública de Denver), donde la notarización cuesta $10 por acto sin cargo de viaje. Son lugares públicos donde me reúno con clientes; no estoy afiliado ni respaldado por ellos.",
        faq_q2:  "¿Ofrece servicios en español?",
        faq_a2:  "Sí — todos los servicios son completamente bilingües en inglés y español. Tengo fluidez de nivel nativo en ambos idiomas y puedo asistir con consultas bilingües, traducciones certificadas y acompañamiento bilingüe a citas gubernamentales.",
        faq_q3:  "¿Qué servicios notariales están disponibles?",
        faq_a3:  "Quintana Notary &amp; Signing ofrece notarizaciones estándar (reconocimientos, juramentos, certificaciones de copia), procesamiento de apostillas para documentos internacionales a través de la Secretaría de Estado de Colorado, paquetes de firma de préstamos, verificación de empleo I-9 y servicios de conserje de pasaporte estadounidense.",
        faq_q4:  "¿Puede ayudar con transferencias de título de vehículos de otros estados?",
        faq_a4:  "Sí. A través de la marca Ayuda DMV, manejo transferencias de título de otros estados, servicios de representación en persona en el DMV, y preparación de documentos para transferencias privadas de título y facturas de venta en Colorado.",
        faq_q5:  "¿Es abogado? ¿Puede dar asesoría legal?",
        faq_a5:  "No. No soy abogado licenciado para ejercer el derecho en el estado de Colorado y no puedo dar asesoría legal ni aceptar honorarios por asesoría legal. No soy consultor de inmigración ni experto en asuntos de inmigración. Si sospecha de fraude, puede comunicarse con la oficina del Fiscal General de Colorado o con la Corte Suprema de Colorado. Solo ofrezco servicios administrativos, notariales, de traducción y de trámites. (C.R.S. § 24-21-525)",
        faq_q6:  "¿Qué métodos de pago acepta?",
        faq_a6:  "Acepto Efectivo, Venmo, Zelle, transferencia bancaria (ACH) y Tarjeta de Crédito/Débito. Los pagos con tarjeta de crédito tienen un recargo de procesamiento de 2%; las tarjetas de débito no tienen recargo; no hay recargo por efectivo, Venmo, Zelle ni transferencia bancaria. Aviso requerido por Colorado: Para cubrir el costo de procesar una transacción con tarjeta de crédito o de cargo, y conforme a la sección 5-2-212 de los Estatutos Revisados de Colorado, un vendedor o arrendador puede imponer un recargo de procesamiento por un monto que no exceda el 2% del pago total realizado por bienes o servicios comprados o arrendados con tarjeta de crédito o de cargo. Un vendedor o arrendador no impondrá un recargo de procesamiento a los pagos realizados en efectivo, con cheque o con tarjeta de débito, ni al canje de una tarjeta de regalo. Se requiere pago por adelantado para confirmar citas (las visitas al centro de ICE se pagan después de la visita). Si cancela o cambia su cita con 24 horas o más de aviso, lo que pagó queda como saldo a favor en su cuenta (no vence); con menos aviso o si no se presenta, me quedo con el depósito que aparece en su factura y el resto es saldo a favor; si yo cancelo, le devuelvo todo. Siempre recibirá una cotización exacta por escrito antes de que su cita sea confirmada.",

        // ── ABOUT ──
        about_h2:       "Construido Sobre Integridad",
        about_p1:       "Servicios Quintana LLC es la práctica individual de <strong>David Quintana</strong> — Notary Public móvil comisionado en Colorado, especialista en DMV, traductor inglés-español (bilingüe nativo) y desarrollador web bilingüe.",
        about_creds:    "También soy <strong>graduado en Informática de la Salud (Licenciatura)</strong> de Metropolitan State University of Denver — formación que fortalece mi trabajo seguro en tecnología de salud.",
        about_p2:       "Ya sea que esté notarizando un documento de préstamo en Denver, ayudando a una familia a registrar un vehículo de otro estado, o escribiendo código personalizado para un negocio local, mi valor fundamental sigue siendo el mismo: <strong>Accesibilidad.</strong>",
        about_p3:       "Las barreras del idioma y la complejidad técnica nunca deben impedir que alguien alcance sus objetivos.",
        about_trust_h3: "Por Qué Colorado Confía en Mí",
        about_photo_role: "Servicios Notariales · DMV · Desarrollo Web",
        trust_1:        "<strong>100% Bilingüe:</strong> Dominio nativo del inglés y español — sin intérprete necesario.",
        trust_2:        "<strong>Precios Transparentes:</strong> Sin cargos ocultos; todo se comunica y se acuerda por escrito antes de su cita.",
        trust_3:        "<strong>Enfocado en la Comunidad:</strong> Tarifas con descuento disponibles en Hubs Comunitarios en Denver.",
        trust_5:        "<strong>Comisionado y asegurado:</strong> Soy Notary Public comisionado en Colorado (ID 20254044224). Servicios Quintana LLC tiene seguro con The Hartford, con responsabilidad civil general, cobertura por filtración de datos y responsabilidad profesional (errores y omisiones) para mis servicios notariales, de traducción y de desarrollo web. Certificado de seguro disponible a petición.",
        pill_insured:   "Comisionado y asegurado",
        footer_insured: "<strong>Comisionado y asegurado.</strong> Comisión de Colorado ID 20254044224 · Asegurado con The Hartford: responsabilidad civil general, filtración de datos y responsabilidad profesional (errores y omisiones) para servicios notariales, de traducción y web · Certificado de seguro a petición.",
        trust_4:        "<strong>Propiedad Local:</strong> Sirviendo con orgullo al área metropolitana de Denver desde 2026.",

        // ── STATS ──
        stat_brands:    "Marcas Activas",
        stat_bilingual: "Bilingüe",
        stat_local:     "Propiedad Local",

        // ── COMMUNITY HUBS (about section) ──
        hubs_h4:    "Hubs Comunitarios",
        hub_msu:    "MSU Denver — Denver, CO",
        hub_tienda: "Tienda Salvadoreña",
        hub_crrec:  "Biblioteca Pública de Denver (todas las sucursales)",
        hub_dpl:    "Biblioteca Pública de Denver (todas las sucursales)",
        hub_note:   "$10 por acto notarial y sin tarifa de desplazamiento en estas ubicaciones. Son lugares públicos donde me reúno con clientes con cita previa; no estoy afiliado ni respaldado por ellos.",

        // ── FOOTER ──
        footer_brands_nav_h5: "Mis Marcas",
        footer_statutory_en:  "<strong>Important Notice:</strong> I am not an attorney licensed to practice law in the state of Colorado and I may not give legal advice or accept fees for legal advice. I am not an immigration consultant, nor am I an expert on immigration matters. If you suspect fraud, you may contact the Colorado attorney general’s office or the Colorado supreme court. I provide administrative, translation, and notarial services only. (C.R.S. § 24-21-525)",
        footer_statutory_es:  "<strong>Aviso Importante:</strong> No soy abogado licenciado para ejercer el derecho en el estado de Colorado y no puedo dar asesoría legal ni aceptar honorarios por asesoría legal. No soy consultor de inmigración ni experto en asuntos de inmigración. Si sospecha de fraude, puede comunicarse con la oficina del Fiscal General de Colorado o con la Corte Suprema de Colorado. Solo ofrezco servicios administrativos, de traducción y notariales. (C.R.S. § 24-21-525)",

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

    /* ── LIGHT / DARK TOGGLE ─────────────────────────────── */
    const themeBtn = document.getElementById('theme-toggle');
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const themeLabel = () => {
        const light = document.documentElement.getAttribute('data-theme') === 'light';
        const es = document.documentElement.getAttribute('lang') === 'es';
        return light ? (es ? 'Cambiar a modo oscuro' : 'Switch to dark mode')
                     : (es ? 'Cambiar a modo claro' : 'Switch to light mode');
    };
    const applyTheme = (mode, save) => {
        document.documentElement.setAttribute('data-theme', mode);
        if (themeMeta) themeMeta.setAttribute('content', mode === 'light' ? '#f5f6fa' : '#070b16');
        if (themeBtn) { themeBtn.setAttribute('aria-label', themeLabel()); themeBtn.title = themeLabel(); }
        if (save) { try { localStorage.setItem('sqTheme', mode); } catch (e) {} }
    };
    applyTheme(document.documentElement.getAttribute('data-theme') || 'dark', false);
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light', true);
        });
    }

    /* ── LANGUAGE TOGGLE ─────────────────────────────────── */
    // Language: a choice made with the button wins; otherwise follow the
    // visitor's device (Spanish phone or browser -> Spanish, anything else -> English).
    let currentLang = '';
    try { currentLang = localStorage.getItem('sqLang') || ''; } catch (e) {}
    if (currentLang !== 'en' && currentLang !== 'es') {
        const deviceLang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
        currentLang = /^es\b/i.test(deviceLang) ? 'es' : 'en';
    }

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

    // Floating language switch — stays on screen while scrolling
    const floatLang = document.createElement('button');
    floatLang.type = 'button';
    floatLang.id = 'float-lang';
    floatLang.innerHTML = '<span class="float-lang-globe" aria-hidden="true"></span>' +
        '<span class="float-lang-opt" data-lang="en">EN</span>' +
        '<span class="float-lang-opt" data-lang="es">ES</span>' +
        '<span class="float-lang-label"></span>';
    document.body.appendChild(floatLang);
    const syncFloatLang = (lang) => {
        floatLang.querySelectorAll('.float-lang-opt').forEach(o =>
            o.classList.toggle('is-active', o.dataset.lang === lang));
        floatLang.querySelector('.float-lang-label').textContent = lang === 'en' ? 'Español' : 'English';
        floatLang.setAttribute('aria-label', lang === 'en'
            ? 'Cambiar a Español / Switch to Spanish'
            : 'Switch to English / Cambiar a Inglés');
        floatLang.title = floatLang.getAttribute('aria-label');
    };

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
        syncFloatLang(lang);
        document.dispatchEvent(new CustomEvent('sq:lang', { detail: lang }));
        if (themeBtn) { themeBtn.setAttribute('aria-label', themeLabel()); themeBtn.title = themeLabel(); }
    };

    // Main language toggle (nav) + floating toggle share one handler
    // Keeps the reader exactly where they were: remember which element sits
    // just under the sticky nav, swap the language, then put that element back
    // at the same spot (Spanish text is longer, so the page height changes).
    const toggleLang = (e) => {
        if (e) e.preventDefault();
        const nav = document.querySelector('.navbar');
        const probeY = (nav ? nav.getBoundingClientRect().bottom : 0) + 12;
        let anchor = document.elementFromPoint(window.innerWidth / 2, probeY);
        if (anchor && (anchor.closest('#float-lang') || anchor === document.body || anchor === document.documentElement)) anchor = null;
        const anchorTop = anchor ? anchor.getBoundingClientRect().top : 0;
        const startY = window.scrollY;
        const html = document.documentElement;
        const prevBehavior = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';          // no smooth-scroll animation on restore
        html.style.overflowAnchor = 'none';          // we handle anchoring ourselves

        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateContent(currentLang);

        const restore = () => {
            if (anchor && anchor.isConnected) {
                window.scrollTo(0, window.scrollY + (anchor.getBoundingClientRect().top - anchorTop));
            } else {
                window.scrollTo(0, startY);
            }
        };
        restore();
        requestAnimationFrame(() => {
            restore();
            html.style.scrollBehavior = prevBehavior;
            html.style.overflowAnchor = '';
        });
    };
    langBtn.addEventListener('click', toggleLang);
    floatLang.addEventListener('click', toggleLang);

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

    /* ── COMMUNITY HUB LOCATOR ───────────────────────────── */
    const hubData = {
        tienda: { name: { en: 'Tienda Salvadoreña', es: 'Tienda Salvadoreña' },
                  q: 'Tienda Salvadore%C3%B1a East Colfax Denver' },
        msu:    { name: { en: 'MSU Denver · Auraria Library', es: 'MSU Denver · Biblioteca Auraria' },
                  q: 'Auraria Library Denver' },
        dpl:    { name: { en: 'Denver Public Library', es: 'Biblioteca Pública de Denver' },
                  q: 'Denver Public Library' }
    };
    const hubTabs  = Array.from(document.querySelectorAll('.hub-tab'));
    const hubPanel = document.getElementById('hubpanel');
    let activeHub  = 'tienda';
    const renderHub = () => {
        if (!hubPanel) return;
        const lang = document.documentElement.getAttribute('lang') === 'es' ? 'es' : 'en';
        const h = hubData[activeHub];
        const title = document.getElementById('hub-panel-title');
        const desc  = document.getElementById('hub-panel-desc');
        const map   = document.getElementById('hub-map-link');
        if (title) title.textContent = h.name[lang];
        if (desc)  desc.textContent  = (translations[lang] || translations.en)['hub_desc_' + activeHub];
        if (map)   map.href = 'https://www.google.com/maps/search/?api=1&query=' + h.q.replace(/ /g, '+');
        hubPanel.setAttribute('aria-labelledby', 'hubtab-' + activeHub);
    };
    const selectHub = (tab, focus) => {
        activeHub = tab.dataset.hub;
        hubTabs.forEach(t => {
            const on = t === tab;
            t.setAttribute('aria-selected', String(on));
            t.tabIndex = on ? 0 : -1;
        });
        if (focus) tab.focus();
        if (hubPanel) {
            hubPanel.classList.remove('hub-panel--swap');
            void hubPanel.offsetWidth; // restart the fade
            hubPanel.classList.add('hub-panel--swap');
        }
        renderHub();
    };
    hubTabs.forEach((tab, i) => {
        tab.addEventListener('click', () => selectHub(tab, false));
        tab.addEventListener('keydown', (e) => {
            let next = null;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = hubTabs[(i + 1) % hubTabs.length];
            if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   next = hubTabs[(i - 1 + hubTabs.length) % hubTabs.length];
            if (e.key === 'Home') next = hubTabs[0];
            if (e.key === 'End')  next = hubTabs[hubTabs.length - 1];
            if (next) { e.preventDefault(); selectHub(next, true); }
        });
    });
    document.addEventListener('sq:lang', renderHub);
    // Pills in the stats banner open the matching hub
    document.querySelectorAll('.hub-pill').forEach((pill, i) => {
        pill.addEventListener('click', () => { if (hubTabs[i]) selectHub(hubTabs[i], false); });
    });

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
            // normalised to the card size so wide cards don't over-rotate (max ~3deg)
            const rotateX = (((e.clientY - rect.top)  / rect.height) - 0.5) * 6;
            const rotateY = (0.5 - ((e.clientX - rect.left) / rect.width)) * 6;
            card.style.transform = `translateY(-6px) perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
    // Only the decorative grid drifts — moving the whole hero made it slide
    // over the stats/hub banner (and the profile card on phones).
    const heroGrid = document.querySelector('.hero-blueprint');
    const heroEl   = document.querySelector('.hero');
    const calmMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (heroGrid && heroEl && !calmMotion) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = Math.min(window.scrollY, heroEl.offsetHeight);
                heroGrid.style.transform = `translateY(${y * 0.25}px)`;
                ticking = false;
            });
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

    /* ── FLOATING BUTTONS STEP ASIDE WHILE SCROLLING ─────── */
    // The EN/ES pill and Back to Top fade out while the page moves so they
    // never sit on top of what the visitor is reading; they return on pause.
    let scrollIdle;
    window.addEventListener('scroll', () => {
        document.body.classList.add('is-scrolling');
        clearTimeout(scrollIdle);
        scrollIdle = setTimeout(() => document.body.classList.remove('is-scrolling'), 650);
    }, { passive: true });

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
