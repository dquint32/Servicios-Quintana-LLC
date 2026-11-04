/**
 * SERVICIOS QUINTANA LLC — main.js
 * Bilingual toggle, light/dark, mobile nav, hub picker, FAQ and small interactions.
 * Version: 2026-11 — Warm, human-first layout: how it works, everyday services,
 * shipping help, Community Hubs, business section kept separate.
 */

/* ══════════════════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════════════════ */
const translations = {
    en: {
        // ── NAV ──
        skip_link:    "Skip to main content",
        nav_services: "Services",
        nav_shipping: "Shipping",
        nav_hubs:     "Community Hubs",
        nav_business: "For Businesses",
        nav_about:    "About",
        nav_faq:      "FAQ",
        nav_contact:  "Contact",

        // ── HERO ──
        hero_eyebrow:      "Denver Metro · By appointment · English &amp; Español",
        hero_h1:           "Notary, DMV paperwork and certified translations, handled by one person you can call directly.",
        hero_sub:          "I'm David Quintana, a commissioned Colorado Notary Public. I help families and local businesses get their paperwork done right. I come to you, or we meet at a Community Hub, and you get the full price in writing before we meet.",
        hero_cta_call:     "Call or text 303-500-4122",
        hero_cta_services: "See services &amp; prices",
        btn_hablamos:      "¿Prefiere español? Cambiar idioma",
        promise_1:         "Full price in writing first",
        promise_2:         "Commissioned &amp; insured",
        promise_3:         "Fully bilingual",
        promise_4:         "$10 notarizations at Community Hubs",
        profile_role:      "Owner &amp; sole operator",
        profile_quote:     "“The person you message is the person who shows up. No call center, no hand-offs.”",
        profile_status:    "Call or text me directly",

        // ── HOW IT WORKS ──
        how_h2:  "How it works",
        how_sub: "Three simple steps, and no surprises along the way.",
        how_1_h: "Tell me what you need",
        how_1_p: "Call or text 303-500-4122, or email admin@serviciosquintana.com. English or Spanish, whichever is easier for you.",
        how_2_h: "Get your price in writing",
        how_2_p: "Before anything is booked, you get an exact quote in writing. No hidden fees.",
        how_3_h: "Meet where it's easy",
        how_3_p: "I come to your home or office, or we meet at a Community Hub. Appointments only, so I'm ready when you arrive.",

        // ── EVERYDAY SERVICES ──
        services_h2:   "Help for individuals and families",
        services_sub:  "Everyday paperwork, explained clearly and done right. Each service has its own page with full details.",
        services_also: "Sending a package to family abroad? See International Shipping Help",

        notary_h3:    "Mobile notary &amp; signings",
        notary_intro: "I come to your home or office, or meet you at a Community Hub, to notarize your documents in English or Spanish.",
        notary_s1:    "Standard notarizations: acknowledgments, oaths and affirmations, copy certifications",
        notary_s2:    "Apostilles through the Colorado Secretary of State",
        notary_s3:    "Loan signings for refinances, purchases and HELOCs",
        notary_s4:    "Airport notary at DIA: $95 flat with parking included, plus $10 per signature",
        notary_s5:    "U.S. passport help: I prepare DS-11/DS-82 forms and go with you to the post office or clerk's office",
        notary_price: "Notarizations <strong>$10–$15</strong> per act. Any travel fee is quoted in writing before we meet.",
        notary_cta:   "Notary &amp; passport services",

        dmv_h3:    "Colorado DMV help",
        dmv_intro: "If the DMV feels confusing, I'll prepare the paperwork and, when needed, go in person for you.",
        dmv_s1:    "Forms for address changes, private-party title transfers and bills of sale",
        dmv_s2:    "In-person DMV visits as your authorized proxy",
        dmv_s3:    "Out-of-state title transfers: I coordinate with owners, dealerships and lienholders",
        dmv_s4:    "Same-day rush for urgent paperwork and DMV submissions",
        dmv_price: "Government forms are free. I charge only for typing and my time, quoted in writing.",
        dmv_cta:   "DMV services",

        trans_brand: "Certified Translation",
        trans_h3:    "Spanish ↔ English translation",
        trans_intro: "Word-for-word translations with a signed Certificate of Accuracy, prepared for USCIS, the Colorado DMV, schools and state agencies.",
        trans_s1:    "Documents for USCIS (translation only)",
        trans_s2:    "Colorado DMV title and registration documents",
        trans_s3:    "School and university records",
        trans_s4:    "State agency and government paperwork",
        trans_price: "Rush turnaround available. Your quote comes in writing first.",
        trans_cta:   "Get a translation quote",

        // ── INTERNATIONAL SHIPPING HELP ──
        ship_h2:             "International Shipping Help",
        ship_sub:            "Ship clothes, gifts, and care packages to El Salvador, Guatemala, Honduras, Venezuela, and more at discounted commercial rates.",
        ship_body:           "Do it yourself with our free guide, or let us do it for you.",
        ship_guide_cta:      "Download the free guide (PDF)",
        ship_guide_alt:      "Guía en español (PDF)",
        ship_contact_call:   "Call or text",
        ship_contact_office: "Office:",
        ship_prices_h3:      "Prices",
        ship_col_service:    "Service",
        ship_col_price:      "Price",
        ship_p1:             "Free quote",
        ship_p2:             "DIY with our free guide",
        ship_p3:             "Label printing",
        ship_p3_price:       "$0.25/page B&amp;W, $1.00/page color",
        ship_p4:             "Assisted label (we help you buy your own label on your account)",
        ship_p5:             "Label service (we buy and print the label for you)",
        ship_p5_price:       "$12 + postage",
        ship_p6:             "Drop-off to USPS, UPS, or FedEx",
        ship_p6_price:       "$15 per package",
        ship_p7:             "Full service (we do everything and drop it off)",
        ship_p7_price:       "$25 + postage",
        ship_postage_note:   "Postage is charged at our exact cost. We show you the receipt.",

        // ── COMMUNITY HUBS ──
        hubs_h2:           "Save at a Community Hub",
        hubs_sub:          "Meet me at a public place in your neighborhood, by appointment, and pay less.",
        hub_rate_tag:      "Community rate",
        hub_rate_unit:     "per notarial act",
        hub_cmp_max:       "Colorado maximum",
        hub_cmp_travel:    "Travel fee",
        hubs_callout_body: "A real discount, offered voluntarily below the Colorado maximum, with <strong>no travel fee</strong>.",
        hub_tienda_sub:    "East Colfax, Denver",
        hub_msu_sub:       "Auraria Library, downtown",
        hub_dpl:           "Denver Public Library",
        hub_dpl_sub:       "Any branch in Denver",
        hub_panel_label:   "Selected location",
        hub_book:          "Book a hub visit",
        hub_directions:    "Directions",
        hub_desc_tienda:   "Neighborhood market on East Colfax. Tell me a time and I'll meet you there — just bring your unsigned document and a valid photo ID.",
        hub_desc_msu:      "Auraria Library on the downtown Auraria Campus — convenient for students, faculty, and anyone working near downtown.",
        hub_desc_dpl:      "Any Denver Public Library branch. Pick the one closest to you and I'll meet you there by appointment.",
        hub_note:          "These are public places where I meet clients by appointment; I am not affiliated with or endorsed by them.",

        // ── FOR BUSINESSES ──
        biz_kicker: "For businesses &amp; professionals",
        biz_h2:     "Support for firms and local businesses",
        biz_sub:    "Separate from my everyday client work. Each service has its own site with full details and pricing.",

        b2b_h3:    "Notary support for law firms, title companies &amp; employers",
        b2b_intro: "Subcontracted notary work for title companies, law firms, employers and fellow notaries, priced in writing and invoiced to your firm.",
        b2b_s1:    "<strong>Aurora ICE facility visits:</strong> I visit detained clients as your cleared legal proxy. $150 per visit (travel, clearance, first hour on site), $25 per 30 min after; nothing paid before the visit.",
        b2b_s2:    "<strong>Title &amp; real estate signings:</strong> one package up to 30 pages for $125, with printing, encrypted scanbacks and the FedEx/UPS drop.",
        b2b_s3:    "<strong>Apostille runs:</strong> $85 mail-in or $115 pickup, up to 3 documents; State fees at cost.",
        b2b_s4:    "<strong>Witnesses, recordings &amp; I-9:</strong> independent witness $35&ndash;$50, county recording $35&ndash;$75, I-9 authorized representative $40&ndash;$55.",
        b2b_cta:   "Business services",

        dev_h3:             "Bilingual websites for local businesses",
        dev_intro:          "I design and build fast, accessible websites in English and Spanish, from scratch. No templates.",
        dev_s1:             "<strong>Custom websites:</strong> from simple landing pages to full business and online-store sites.",
        dev_s2:             "<strong>Bilingual by design:</strong> reach more customers with a site that works just as well in Spanish as in English.",
        dev_s3:             "<strong>Tools for clinics:</strong> secure patient intake forms and FHIR-ready data, backed by my Health Informatics degree.",
        dev_s4:             "<strong>Ongoing care:</strong> hosting setup, domains, security updates and SEO basics.",
        dev_portfolio_note: "Portfolio includes work for Tienda Salvadoreña.",
        dev_cta:            "Portfolio &amp; pricing",

        // ── ABOUT ──
        about_h2:         "Who you'll be working with",
        about_p1:         "Servicios Quintana LLC is just me, David Quintana. There's no call center and no team passing you along. The person you message is the person who shows up, prepares your forms, or builds your site.",
        about_p2:         "I'm a commissioned Colorado Notary Public, a native bilingual Spanish–English translator, and a Health Informatics (B.S.) graduate of Metropolitan State University of Denver.",
        about_p3:         "What guides my work is simple: language barriers and complicated paperwork should never keep someone from moving forward.",
        about_trust_h3:   "What you can count on",
        about_photo_role: "Notary · DMV · Translation · Web",
        trust_1:          "<strong>Fully bilingual:</strong> native-level English and Spanish, so no interpreter is needed.",
        trust_2:          "<strong>Transparent pricing:</strong> no hidden fees. Every cost is disclosed and agreed in writing before your appointment.",
        trust_3:          "<strong>Community first:</strong> discounted notarizations at Community Hubs across Denver.",
        trust_5:          "<strong>Commissioned &amp; insured:</strong> I'm a Notary Public commissioned in Colorado (ID 20254044224). Servicios Quintana LLC is insured through The Hartford, with general liability, data breach coverage, and professional liability (errors &amp; omissions) for my notary, translation and web development work. Certificate of insurance available on request.",
        trust_4:          "<strong>Locally owned:</strong> serving the Denver Metro area since 2026.",

        // ── FAQ ──
        faq_h2: "Common questions",
        faq_sub: "Straight answers about areas, languages, pricing and what I can and can't do.",
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
        faq_q7: "Can you ship my package for me?",
        faq_a7: "Yes. With Full Service ($25 + postage) we compare rates, fill out customs, buy and print the label, and drop it off. Postage is charged at our exact cost.",
        faq_q8: "What do I need to bring?",
        faq_a8: "Your items (we need to see what goes in the box), the recipient's full name, phone number, full address with a landmark, and their ID number (for example, DUI in El Salvador, DPI in Guatemala, DNI in Honduras, Cédula in Venezuela).",
        faq_q9: "Do you pay customs taxes?",
        faq_a9: "No. Each country sets its own taxes, and the recipient may pay them on delivery. We are not responsible for customs holds, taxes, or delivery times set by the carrier and the destination country.",

        // ── CONTACT ──
        contact_h2:     "Tell me what you need",
        contact_p:      "Call, text or email, in English or Spanish. Appointments only, and you'll have your full price in writing before we meet.",
        contact_office: "Office: 5128 E Colfax Ave, Denver, CO 80220 (by appointment)",

        // ── FOOTER ──
        footer_tagline:       "Bilingual services · Community focused · Colorado owned",
        footer_hq_h5:         "Corporate HQ &amp; Registered Agent",
        footer_contact_h5:    "Contact",
        footer_brands_nav_h5: "My Brands",
        footer_insured:       "<strong>Commissioned &amp; Insured.</strong> Colorado notary commission ID 20254044224 · Insured through The Hartford: general liability, data breach, and professional liability (errors &amp; omissions) for notary, translation and web work · Certificate of insurance on request.",
        footer_statutory_en:  "<strong>Important Notice:</strong> I am not an attorney licensed to practice law in the state of Colorado and I may not give legal advice or accept fees for legal advice. I am not an immigration consultant, nor am I an expert on immigration matters. If you suspect fraud, you may contact the Colorado attorney general’s office or the Colorado supreme court. I provide administrative, translation, and notarial services only. (C.R.S. § 24-21-525)",
        footer_statutory_es:  "<strong>Aviso Importante:</strong> No soy abogado licenciado para ejercer el derecho en el estado de Colorado y no puedo dar asesoría legal ni aceptar honorarios por asesoría legal. No soy consultor de inmigración ni experto en asuntos de inmigración. Si sospecha de fraude, puede comunicarse con la oficina del Fiscal General de Colorado o con la Corte Suprema de Colorado. Solo ofrezco servicios administrativos, de traducción y notariales. (C.R.S. § 24-21-525)",

        // ── MISC ──
        lang_btn:    "Español",
        back_to_top: "Back to Top"
    },

    es: {
        // ── NAV ──
        skip_link:    "Saltar al contenido principal",
        nav_services: "Servicios",
        nav_shipping: "Envíos",
        nav_hubs:     "Hubs Comunitarios",
        nav_business: "Para Empresas",
        nav_about:    "Sobre mí",
        nav_faq:      "Preguntas",
        nav_contact:  "Contacto",

        // ── HERO ──
        hero_eyebrow:      "Área de Denver · Con cita previa · Español &amp; English",
        hero_h1:           "Servicios notariales, trámites del DMV y traducciones certificadas, con una sola persona a quien puede llamar directamente.",
        hero_sub:          "Soy David Quintana, Notary Public comisionado en Colorado. Ayudo a familias y negocios locales a resolver sus trámites correctamente. Yo voy a usted, o nos vemos en un Hub Comunitario, y usted recibe el precio completo por escrito antes de la cita.",
        hero_cta_call:     "Llame o escriba al 303-500-4122",
        hero_cta_services: "Ver servicios y precios",
        btn_hablamos:      "Prefer English? Switch language",
        promise_1:         "Precio completo por escrito primero",
        promise_2:         "Comisionado y asegurado",
        promise_3:         "Totalmente bilingüe",
        promise_4:         "Notarizaciones de $10 en Hubs Comunitarios",
        profile_role:      "Dueño y único operador",
        profile_quote:     "“La persona a quien le escribe es la misma que llega. Sin centro de llamadas, sin intermediarios.”",
        profile_status:    "Llámeme o escríbame directo",

        // ── HOW IT WORKS ──
        how_h2:  "Cómo funciona",
        how_sub: "Tres pasos sencillos y sin sorpresas en el camino.",
        how_1_h: "Dígame qué necesita",
        how_1_p: "Llame o escriba al 303-500-4122, o mande un correo a admin@serviciosquintana.com. En español o en inglés, como le sea más fácil.",
        how_2_h: "Reciba su precio por escrito",
        how_2_p: "Antes de agendar, recibe una cotización exacta por escrito. Sin cargos ocultos.",
        how_3_h: "Nos vemos donde le quede mejor",
        how_3_p: "Voy a su casa u oficina, o nos vemos en un Hub Comunitario. Solo con cita previa, así estoy listo cuando usted llegue.",

        // ── EVERYDAY SERVICES ──
        services_h2:   "Ayuda para personas y familias",
        services_sub:  "Trámites de todos los días, explicados con claridad y hechos correctamente. Cada servicio tiene su propia página con todos los detalles.",
        services_also: "¿Va a enviar un paquete a su familia en otro país? Vea Ayuda con Envíos Internacionales",

        notary_h3:    "Servicios notariales móviles y firmas",
        notary_intro: "Voy a su casa u oficina, o me reúno con usted en un Hub Comunitario, para notarizar sus documentos en español o en inglés.",
        notary_s1:    "Notarizaciones estándar: reconocimientos, juramentos y afirmaciones, certificaciones de copia",
        notary_s2:    "Apostillas a través de la Secretaría de Estado de Colorado",
        notary_s3:    "Firmas de préstamos para refinanciamientos, compras y HELOCs",
        notary_s4:    "Notarizaciones en el aeropuerto (DIA): $95 fijos con el estacionamiento incluido, más $10 por firma",
        notary_s5:    "Ayuda con pasaportes de EE.UU.: preparo los formularios DS-11/DS-82 y lo acompaño a la oficina de correos o del condado",
        notary_price: "Notarizaciones de <strong>$10–$15</strong> por acto. Cualquier tarifa de desplazamiento se cotiza por escrito antes de la cita.",
        notary_cta:   "Servicios notariales y de pasaporte",

        dmv_h3:    "Ayuda con el DMV de Colorado",
        dmv_intro: "Si el DMV le parece complicado, yo preparo los documentos y, cuando hace falta, voy en persona por usted.",
        dmv_s1:    "Formularios para cambios de dirección, transferencias privadas de título y facturas de venta",
        dmv_s2:    "Visitas en persona al DMV como su representante autorizado",
        dmv_s3:    "Transferencias de título de otros estados: coordino con propietarios, concesionarios y acreedores",
        dmv_s4:    "Servicio urgente el mismo día para documentos y entregas en el DMV",
        dmv_price: "Los formularios del gobierno son gratuitos. Solo cobro por la mecanografía y mi tiempo, cotizado por escrito.",
        dmv_cta:   "Servicios del DMV",

        trans_brand: "Traducción Certificada",
        trans_h3:    "Traducción español ↔ inglés",
        trans_intro: "Traducciones palabra por palabra con un Certificado de Exactitud firmado, preparadas para USCIS, el DMV de Colorado, escuelas y agencias estatales.",
        trans_s1:    "Documentos para USCIS (solo traducción)",
        trans_s2:    "Documentos de título y registro del DMV de Colorado",
        trans_s3:    "Registros escolares y universitarios",
        trans_s4:    "Trámites de agencias estatales y del gobierno",
        trans_price: "Entrega urgente disponible. Primero recibe su cotización por escrito.",
        trans_cta:   "Pedir cotización de traducción",

        // ── AYUDA CON ENVÍOS INTERNACIONALES ──
        ship_h2:             "Ayuda con Envíos Internacionales",
        ship_sub:            "Envíe ropa, regalos y encomiendas a El Salvador, Guatemala, Honduras, Venezuela y más, con tarifas comerciales con descuento.",
        ship_body:           "Hágalo usted mismo con nuestra guía gratis, o déjenos hacerlo por usted.",
        ship_guide_cta:      "Descargar la guía gratis (PDF)",
        ship_guide_alt:      "English guide (PDF)",
        ship_contact_call:   "Llame o escriba al",
        ship_contact_office: "Oficina:",
        ship_prices_h3:      "Precios",
        ship_col_service:    "Servicio",
        ship_col_price:      "Precio",
        ship_p1:             "Cotización gratis",
        ship_p2:             "Hágalo usted mismo con la guía",
        ship_p3:             "Impresión de etiqueta",
        ship_p3_price:       "$0.25/página B/N, $1.00/página a color",
        ship_p4:             "Asistencia de etiqueta (le ayudamos a comprar su propia etiqueta)",
        ship_p5:             "Servicio de etiqueta (nosotros compramos e imprimimos la etiqueta)",
        ship_p5_price:       "$12 + envío",
        ship_p6:             "Entrega en USPS, UPS o FedEx",
        ship_p6_price:       "$15 por paquete",
        ship_p7:             "Servicio completo (nosotros hacemos todo y lo entregamos)",
        ship_p7_price:       "$25 + envío",
        ship_postage_note:   "El envío se cobra a costo exacto. Le mostramos el recibo.",

        // ── COMMUNITY HUBS ──
        hubs_h2:           "Ahorre en un Hub Comunitario",
        hubs_sub:          "Nos vemos en un lugar público de su comunidad, con cita previa, y paga menos.",
        hub_rate_tag:      "Tarifa comunitaria",
        hub_rate_unit:     "por acto notarial",
        hub_cmp_max:       "Máximo de Colorado",
        hub_cmp_travel:    "Desplazamiento",
        hubs_callout_body: "Un descuento real, ofrecido voluntariamente por debajo del máximo de Colorado, <strong>sin tarifa de desplazamiento</strong>.",
        hub_tienda_sub:    "East Colfax, Denver",
        hub_msu_sub:       "Biblioteca Auraria, en el centro",
        hub_dpl:           "Biblioteca Pública de Denver",
        hub_dpl_sub:       "Cualquier sucursal en Denver",
        hub_panel_label:   "Lugar seleccionado",
        hub_book:          "Agendar en un hub",
        hub_directions:    "Cómo llegar",
        hub_desc_tienda:   "Mercado del barrio en East Colfax. Dígame a qué hora y nos vemos ahí — solo traiga su documento sin firmar y una identificación vigente con foto.",
        hub_desc_msu:      "Biblioteca Auraria en el campus Auraria del centro — práctico para estudiantes, profesores y quien trabaje cerca del centro.",
        hub_desc_dpl:      "Cualquier sucursal de la Biblioteca Pública de Denver. Elija la más cercana y nos vemos ahí con cita previa.",
        hub_note:          "Son lugares públicos donde me reúno con clientes con cita previa; no estoy afiliado ni respaldado por ellos.",

        // ── FOR BUSINESSES ──
        biz_kicker: "Para empresas y profesionales",
        biz_h2:     "Apoyo para bufetes y negocios locales",
        biz_sub:    "Separado de mis servicios para clientes particulares. Cada servicio tiene su propio sitio con todos los detalles y precios.",

        b2b_h3:    "Apoyo notarial para bufetes, compañías de títulos y empleadores",
        b2b_intro: "Trabajo notarial subcontratado para compañías de títulos, bufetes, empleadores y colegas, con precio por escrito y factura a su empresa.",
        b2b_s1:    "<strong>Visitas al centro de ICE de Aurora:</strong> visito a sus clientes detenidos como su representante autorizado. $150 por visita (viaje, autorización y la primera hora), $25 por cada 30 min después; no se paga nada antes de la visita.",
        b2b_s2:    "<strong>Firmas de títulos y bienes raíces:</strong> un paquete de hasta 30 páginas por $125, con impresión, escaneos cifrados y entrega en FedEx/UPS.",
        b2b_s3:    "<strong>Trámites de apostilla:</strong> $85 por correo o $115 con recogida, hasta 3 documentos; tarifas del Estado al costo.",
        b2b_s4:    "<strong>Testigos, registros e I-9:</strong> testigo independiente $35&ndash;$50, registro en el condado $35&ndash;$75, representante autorizado para I-9 $40&ndash;$55.",
        b2b_cta:   "Servicios para empresas",

        dev_h3:             "Sitios web bilingües para negocios locales",
        dev_intro:          "Diseño y construyo sitios web rápidos y accesibles en español y en inglés, desde cero. Sin plantillas.",
        dev_s1:             "<strong>Sitios a la medida:</strong> desde páginas sencillas hasta sitios completos de negocio y tiendas en línea.",
        dev_s2:             "<strong>Bilingües desde el inicio:</strong> llegue a más clientes con un sitio que funciona igual de bien en español que en inglés.",
        dev_s3:             "<strong>Herramientas para clínicas:</strong> formularios seguros de ingreso de pacientes y datos compatibles con FHIR, respaldados por mi título en Informática de la Salud.",
        dev_s4:             "<strong>Mantenimiento:</strong> configuración de hosting, dominios, actualizaciones de seguridad y fundamentos de SEO.",
        dev_portfolio_note: "El portafolio incluye trabajo para Tienda Salvadoreña.",
        dev_cta:            "Portafolio y precios",

        // ── ABOUT ──
        about_h2:         "Con quién va a trabajar",
        about_p1:         "Servicios Quintana LLC soy yo, David Quintana. No hay centro de llamadas ni un equipo que lo pase de una persona a otra. La persona a quien le escribe es la misma que llega, prepara sus formularios o construye su sitio.",
        about_p2:         "Soy Notary Public comisionado en Colorado, traductor bilingüe nativo de español e inglés, y graduado en Informática de la Salud (B.S.) de Metropolitan State University of Denver.",
        about_p3:         "Lo que guía mi trabajo es sencillo: el idioma y los trámites complicados nunca deben impedir que alguien salga adelante.",
        about_trust_h3:   "Con lo que puede contar",
        about_photo_role: "Servicios Notariales · DMV · Traducción · Web",
        trust_1:          "<strong>Totalmente bilingüe:</strong> español e inglés a nivel nativo, sin necesidad de intérprete.",
        trust_2:          "<strong>Precios transparentes:</strong> sin cargos ocultos. Todo costo se informa y se acuerda por escrito antes de su cita.",
        trust_3:          "<strong>La comunidad primero:</strong> notarizaciones con descuento en Hubs Comunitarios de Denver.",
        trust_5:          "<strong>Comisionado y asegurado:</strong> Soy Notary Public comisionado en Colorado (ID 20254044224). Servicios Quintana LLC tiene seguro con The Hartford, con responsabilidad civil general, cobertura por filtración de datos y responsabilidad profesional (errores y omisiones) para mis servicios notariales, de traducción y de desarrollo web. Certificado de seguro disponible a petición.",
        trust_4:          "<strong>Negocio local:</strong> sirviendo al área metropolitana de Denver desde 2026.",

        // ── FAQ ──
        faq_h2:  "Preguntas frecuentes",
        faq_sub: "Respuestas claras sobre áreas, idiomas, precios y lo que puedo y no puedo hacer.",
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
        faq_q7:  "¿Pueden enviar mi paquete por mí?",
        faq_a7:  "Sí. Con el Servicio completo ($25 + envío) comparamos tarifas, llenamos los formularios de aduana, compramos e imprimimos la etiqueta y entregamos el paquete. El envío se cobra a costo exacto.",
        faq_q8:  "¿Qué necesito traer?",
        faq_a8:  "Sus artículos (necesitamos ver lo que va en la caja) y los datos del destinatario: nombre completo, número de teléfono, dirección completa con un punto de referencia y su número de identificación (por ejemplo, DUI en El Salvador, DPI en Guatemala, DNI en Honduras, Cédula en Venezuela).",
        faq_q9:  "¿Ustedes pagan los impuestos de aduana?",
        faq_a9:  "No. Cada país fija sus propios impuestos, y es posible que el destinatario tenga que pagarlos al recibir el paquete. No somos responsables de retenciones en aduana, impuestos ni tiempos de entrega fijados por la empresa de transporte y el país de destino.",

        // ── CONTACT ──
        contact_h2:     "Dígame qué necesita",
        contact_p:      "Llame, escriba o mande un correo, en español o en inglés. Solo con cita previa, y tendrá su precio completo por escrito antes de la cita.",
        contact_office: "Oficina: 5128 E Colfax Ave, Denver, CO 80220 (con cita previa)",

        // ── FOOTER ──
        footer_tagline:       "Servicios bilingües · Enfocados en la comunidad · Negocio de Colorado",
        footer_hq_h5:         "Sede y Agente Registrado",
        footer_contact_h5:    "Contacto",
        footer_brands_nav_h5: "Mis Marcas",
        footer_insured:       "<strong>Comisionado y asegurado.</strong> Comisión de Colorado ID 20254044224 · Asegurado con The Hartford: responsabilidad civil general, filtración de datos y responsabilidad profesional (errores y omisiones) para servicios notariales, de traducción y web · Certificado de seguro a petición.",
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
        if (themeMeta) themeMeta.setAttribute('content', mode === 'light' ? '#ffffff' : '#0b1120');
        if (themeBtn) { themeBtn.setAttribute('aria-label', themeLabel()); themeBtn.title = themeLabel(); }
        if (save) { try { localStorage.setItem('sqTheme', mode); } catch (e) {} }
    };
    applyTheme(document.documentElement.getAttribute('data-theme') || 'light', false);
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

    // Hero "¿Prefiere español? / Prefer English?" link — switches language in place
    const heroEsBtn = document.getElementById('hero-es-btn');
    if (heroEsBtn) heroEsBtn.addEventListener('click', toggleLang);

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

    /* ── SHIPPING GUIDE: link the PDF in the current language ── */
    // Main button = guide in the page's language; small link = the other language.
    const shipGuides = [document.getElementById('ship-guide-link'), document.getElementById('ship-guide-alt-link')].filter(Boolean);
    if (shipGuides.length) {
        document.addEventListener('sq:lang', (e) => {
            shipGuides.forEach(link => {
                const href = link.getAttribute(e.detail === 'es' ? 'data-href-es' : 'data-href-en');
                if (href) {
                    link.setAttribute('href', href);
                    link.setAttribute('hreflang', /-ES\.pdf$/.test(href) ? 'es' : 'en');
                }
            });
        });
    }

    // Apply saved/default language on load
    updateContent(currentLang);

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
    }

    /* ── CONSOLE BRANDING ────────────────────────────────── */
    console.log('%c🟠 SERVICIOS QUINTANA LLC', 'font-size:18px;font-weight:bold;color:#f97316;');
    console.log('%c Colorado Notary · DMV · Translation · Shipping · Web', 'font-size:12px;color:#fbbf24;');
    console.log('%c Bilingual · Community Focused · Locally Owned', 'font-size:11px;color:#94a3b8;');
});
