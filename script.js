const toggleButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');
const langButtons = document.querySelectorAll('.lang-btn');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('form-submit-btn');

const nameInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('mensaje');
const subjectInput = document.getElementById('form-subject');
const languageInput = document.getElementById('form-language');
const metaDescription = document.querySelector('meta[name="description"]');

let currentLang = localStorage.getItem('site-language') || 'es';

const translations = {
  es: {
    brand: "Mathias Pedrozo",
    navAbout: "Sobre mí",
    navExperience: "Experiencia",
    navMethod: "Cómo trabajo",
    navServices: "Servicios",
    navTools: "Herramientas",
    navContact: "Contacto",
    heroTitle: "Analista en Operaciones y Negocio con enfoque en Datos.",
    heroLead: "Analizo el funcionamiento del negocio a partir de sus datos y transformo esa información en reportes, indicadores y visualizaciones claras que permiten comprender su dinámica, identificar oportunidades de mejora y definir acciones concretas orientadas a resultados. El objetivo no es únicamente interpretar información, sino convertirla en decisiones estructuradas con impacto real en la operativa.",
    heroBtnPrimary: "Contactarme",
    heroBtnSecondary: "Ver experiencia",
    heroBtnServices: "Servicio Integral",
    summaryTitle: "Enfoque profesional",
    summaryText: "Profesional orientado a operaciones y negocio, con base en análisis y ciencia de datos. Enfocado en la gestión y ejecución de proyectos, conectando áreas técnicas y operativas para transformar información en mejoras concretas, optimizando procesos y recursos dentro de la organización.",
    kpi1: "Operaciones y datos",
    kpi2: "Datos y ejecución",
    kpi3: "Optimización y control",
    kpi4: "Claridad y acción",
    aboutTitle: "Sobre mí",
    aboutText: "Cuento con más de 10 años de experiencia trabajando en operaciones, pasando por distintos sectores y tipos de negocio. Ese recorrido me permitió entender cómo funcionan las empresas y qué tipo de mejoras buscan dentro de sus operaciones. Con el tiempo fui incorporando el análisis de datos como base para tomar decisiones y optimizar procesos.\n\nHoy complemento esa experiencia con formación en Ciencia de Datos, lo que me permite trabajar con información de forma más estructurada y con mayor profundidad. Mi objetivo es aplicar ese conocimiento para que las empresas puedan obtener una visión clara y real de su situación, utilizando los datos como herramienta para mejorar procesos, impulsar automatizaciones y tomar decisiones más precisas y efectivas.",
    focusTitle: "En qué me enfoco",
    focus1: "Análisis de datos",
    focus2: "Visualización de información",
    focus3: "Mejora de procesos",
    focus4: "Reporting ejecutivo",
    focus5: "Orden y calidad de datos",
    focus6: "Automatización operativa",
    experienceTitle: "Experiencia laboral",
    exp1Date: "2024 — Actualidad",
    exp1Title: "MAPFRE | Analista de Datos – Operaciones",
    exp1Text: "Participación en la gestión y ejecución de proyectos operativos, trabajando de forma transversal con equipos de sistemas, tecnología y negocio.\nEnfoque en mejorar procesos, optimizar recursos y generar mayor control sobre la operativa a través del uso de datos, acompañando cada iniciativa con seguimiento y medición de resultados.",
    exp2Date: "2022 – 2024",
    exp2Title: "REQUIRO / Manhattan | Analista de Datos y Gestión Operativa",
    exp2Text: "Gestión de datos y operativa del negocio, combinando análisis, control de procesos y toma de decisiones.\nDesarrollo de indicadores, reportes y mejoras que permitieron ordenar la información y optimizar el funcionamiento general.",
    exp3Date: "2016 – 2022",
    exp3Title: "Synapsis / PedidosYa / RUA | Supervisor de Operaciones",
    exp3Text: "Liderazgo de equipos y gestión de indicadores en distintos entornos operativos.\nParticipación en mejora de procesos, implementación de soluciones y control de resultados, desarrollando una base sólida en gestión y funcionamiento del negocio.",
    methodTitle: "Cómo trabajo",
    methodLead: "Esta parte es clave porque diferencia una simple lista de experiencia de un perfil profesional con criterio. Acá mostrás tu forma de pensar y de abordar cada trabajo.",
    methodCard1Title: "1. Entiendo el contexto",
    methodCard1Text: "Antes de mirar números, busco entender el negocio, el problema y el objetivo real. Sin contexto, los datos pierden valor.",
    methodCard2Title: "2. Ordeno la información",
    methodCard2Text: "Trabajo sobre calidad, estructura y claridad para que los datos sirvan de verdad y no generen más ruido.",
    methodCard3Title: "3. Traduzco en decisiones",
    methodCard3Text: "El objetivo final no es solo analizar, sino transformar la información en algo entendible, accionable y útil.",
    servicesTitle: "Servicios",
    servicesLead: "Trabajo sobre la información del negocio para convertirla en una base útil de análisis, control y decisión.",
    service1Title: "Análisis y orden de datos",
    service1Text: "Limpieza, estructuración y revisión de información para transformar datos dispersos en una base clara, consistente y utilizable.",
    service2Title: "Dashboards e indicadores",
    service2Text: "Construcción de reportes, KPIs y visualizaciones para seguir resultados, entender desvíos y mejorar la toma de decisiones.",
    service3Title: "Mejora operativa",
    service3Text: "Detección de oportunidades de optimización en procesos, controles y circuitos de trabajo, con foco en eficiencia y claridad operativa.",
    toolsTitle: "Herramientas",
    siteExtrasTitle: "Base de formación",
    siteExtrasText: "Mi formación fue evolucionando junto con mi recorrido profesional. Comencé en el desarrollo web, iniciando en Front End en Hack Academy y continuando luego con formación Full Stack en MundosE. Más adelante, de forma autodidacta, profundicé en análisis de datos, incorporando herramientas y lenguajes orientados al trabajo con información. Finalmente, consolidé ese camino con formación en Ciencia de Datos en la UDELAR, integrando una mirada más analítica, estructurada y aplicada al negocio.",
    contactTitle: "Contacto",
    contactText: "Si te interesa sumar una visión analítica a tu negocio y empezar a tomar decisiones basadas en datos, te invito a contactarme. \n\nSiempre es buen momento para conversar.",
    contactLink1: "LinkedIn",
    contactLink2: "Descargar CV",
    contactLink3: "WhatsApp",
    contactLink4: "Email",
    formName: "Nombre",
    formEmail: "Correo electrónico",
    formMessage: "Mensaje",
    formSubmit: "Enviar mensaje",
    formSuccess: "Mensaje enviado con éxito. Me estaré contactando a la brevedad.",
    formError: "No se pudo enviar el mensaje. Por favor, intentá nuevamente.",
    formSending: "Enviando...",
    footerText: "© Mathias Pedrozo · Data-Driven Business Advisor",
    formNamePlaceholder: "Tu nombre",
    formEmailPlaceholder: "tunombre@email.com",
    formMessagePlaceholder: "Contame brevemente en qué te puedo ayudar",
    pageTitle: "Mathias Pedrozo | Perfil Profesional",
    pageDescription: "Perfil profesional de Mathias Pedrozo. Experiencia en operaciones, análisis de datos, mejora de procesos, reporting ejecutivo y automatización."
  },
  en: {
    brand: "Mathias Pedrozo",
    navAbout: "About me",
    navExperience: "Experience",
    navMethod: "How I work",
    navServices: "Services",
    navTools: "Tools",
    navContact: "Contact",
    heroTitle: "Data-Driven Business Advisor.",
    heroLead: "I analyze business performance through its data and transform that information into clear reports, indicators, and visualizations that help understand its dynamics, identify improvement opportunities, and define concrete, results-oriented actions. The goal is not only to interpret information, but to turn it into structured decisions with real impact on operations.",
    heroBtnPrimary: "Contact me",
    heroBtnSecondary: "View experience",
    heroBtnServices: "Other Services",
    summaryTitle: "Professional summary",
    summaryText: "Operations and business-oriented professional with a strong foundation in data analysis and data science. Focused on project management and execution, connecting technical and operational teams to transform information into concrete improvements, optimizing processes and resources within the organization.",
    kpi1: "Operations & data",
    kpi2: "Data & execution",
    kpi3: "Optimization & control",
    kpi4: "Clarity & action",
    aboutTitle: "About me",
    aboutText: "I have over 10 years of experience working in operations across different industries and business environments. This path has allowed me to understand how companies operate and the types of improvements they seek within their processes. Over time, I incorporated data analysis as a foundation for decision-making and process optimization.\n\nToday, I complement that experience with a background in Data Science, which allows me to work with information in a more structured and in-depth way. My goal is to apply this knowledge so businesses can gain a clear and realistic view of their situation, using data as a tool to improve processes, drive automation, and make more accurate and effective decisions.",
    focusTitle: "What I focus on",
    focus1: "Data analysis",
    focus2: "Information visualization",
    focus3: "Process improvement",
    focus4: "Executive reporting",
    focus5: "Data quality and organization",
    focus6: "Operational automation",
    experienceTitle: "Work experience",
    exp1Date: "2024 – Present",
    exp1Title: "MAPFRE | Data Analyst – Operations",
    exp1Text: "Involved in the management and execution of operational projects, working cross-functionally with technology, systems, and business teams.\nFocused on improving processes, optimizing resources, and increasing operational control through data, supporting each initiative with follow-up and performance measurement.",
    exp2Date: "2022 — 2024",
    exp2Title: "REQUIRO / Manhattan | Data Analyst & Operations Management",
    exp2Text: "Managed business data and operations, combining analysis, process control, and decision-making.\nDeveloped indicators, reports, and improvements that helped structure information and optimize overall performance.",
    exp3Date: "2016 — 2022",
    exp3Title: "Synapsis / PedidosYa / RUA | Operations Supervisor",
    exp3Text: "Led teams and managed performance indicators across different operational environments.\nInvolved in process improvement, solution implementation, and performance control, building a strong foundation in business operations and management.",
    methodTitle: "How I work",
    methodLead: "This section matters because it separates a simple list of experience from a professional profile with judgment. Here you show how you think and how you approach each piece of work.",
    methodCard1Title: "1. I understand the context",
    methodCard1Text: "Before looking at numbers, I seek to understand the business, the problem, and the real objective. Without context, data loses value.",
    methodCard2Title: "2. I organize the information",
    methodCard2Text: "I work on quality, structure, and clarity so data becomes truly useful instead of creating more noise.",
    methodCard3Title: "3. I turn it into decisions",
    methodCard3Text: "The final goal is not only to analyze, but to transform information into something understandable, actionable, and useful.",
    servicesTitle: "Services",
    servicesLead: "I work on business information to turn it into a useful foundation for analysis, control, and decision-making.",
    service1Title: "Data analysis and organization",
    service1Text: "Cleaning, structuring, and reviewing information to transform scattered data into a clear, consistent, and usable base.",
    service2Title: "Dashboards and KPIs",
    service2Text: "Building reports, KPIs, and visualizations to track results, understand deviations, and improve decision-making.",
    service3Title: "Operational improvement",
    service3Text: "Identifying optimization opportunities in processes, controls, and workflows, focusing on efficiency and operational clarity.",
    toolsTitle: "Tools",
    siteExtrasTitle: "Educational background",
    siteExtrasText: "My training evolved alongside my professional path. I started in web development, first studying Front End at Hack Academy and then continuing with Full Stack training at MundosE. Later, through self-directed study, I deepened my knowledge in data analysis, incorporating tools and languages focused on working with information. Finally, I consolidated that path with formal training in Data Science at UDELAR, integrating a more analytical, structured, and business-oriented perspective.",
    contactTitle: "Contact",
    contactText: "If you're interested in adding an analytical perspective to your business and starting to make data-driven decisions, feel free to reach out. \n\nIt is always a good time to have a conversation.",
    contactLink1: "LinkedIn",
    contactLink2: "Download CV",
    contactLink3: "WhatsApp",
    contactLink4: "Email",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send message",
    formSuccess: "Message sent successfully. I’ll be in touch shortly.",
    formError: "The message could not be sent. Please try again.",
    formSending: "Sending...",
    footerText: "© Mathias Pedrozo · Data-Driven Business Advisor",
    formNamePlaceholder: "Your name",
    formEmailPlaceholder: "yourname@email.com",
    formMessagePlaceholder: "Tell me briefly how I can help you",
    pageTitle: "Mathias Pedrozo | Professional Profile",
    pageDescription: "Professional profile of Mathias Pedrozo. Experience in operations, data analysis, process improvement, executive reporting, and automation."
  }
};

function closeMenu() {
  if (!toggleButton || !mobileMenu) return;
  mobileMenu.classList.remove('is-open');
  toggleButton.classList.remove('is-open');
  toggleButton.setAttribute('aria-expanded', 'false');
}

function getFormSubject(lang) {
  return lang === 'en'
    ? 'New message from your website'
    : 'Nuevo mensaje desde tu sitio web';
}

function updateLanguageButtons(lang) {
  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = dict.pageTitle;
  metaDescription?.setAttribute('content', dict.pageDescription);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  if (nameInput) nameInput.placeholder = dict.formNamePlaceholder;
  if (emailInput) emailInput.placeholder = dict.formEmailPlaceholder;
  if (messageInput) messageInput.placeholder = dict.formMessagePlaceholder;
  if (subjectInput) subjectInput.value = getFormSubject(lang);
  if (languageInput) languageInput.value = lang;

  updateLanguageButtons(lang);
  localStorage.setItem('site-language', lang);
}

function setupMenu() {
  if (!toggleButton || !mobileMenu) return;

  toggleButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    toggleButton.classList.toggle('is-open', isOpen);
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    const clickedInsideMenu = mobileMenu.contains(target);
    const clickedToggle = toggleButton.contains(target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}

function setupLanguageSwitcher() {
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

function setFormState({ type = '', message = '', loading = false }) {
  if (!formStatus || !submitBtn) return;

  formStatus.className = 'form-status';
  if (type) {
    formStatus.classList.add(type, 'show');
  } else if (message) {
    formStatus.classList.add('show');
  }

  formStatus.textContent = message;
  submitBtn.disabled = loading;
  submitBtn.classList.toggle('is-loading', loading);
}

function setupContactForm() {
  if (!contactForm || !formStatus || !submitBtn) return;

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const dict = translations[currentLang];
    const formData = new FormData(contactForm);

    setFormState({
      message: dict.formSending,
      loading: true
    });

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setFormState({
          type: 'success',
          message: dict.formSuccess,
          loading: false
        });

        contactForm.reset();

        if (subjectInput) subjectInput.value = getFormSubject(currentLang);
        if (languageInput) languageInput.value = currentLang;
      } else {
        setFormState({
          type: 'error',
          message: dict.formError,
          loading: false
        });
      }
    } catch {
      setFormState({
        type: 'error',
        message: dict.formError,
        loading: false
      });
    }
  });
}

function setupRevealAnimations() {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupAutoHideNavbar() {
  const navbar = document.querySelector('.nav');
  if (!navbar) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNavbar() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (currentScrollY <= 10) {
      navbar.classList.remove('nav-hidden');
      lastScrollY = currentScrollY;
      ticking = false;
      return;
    }

    const scrollingDown = currentScrollY > lastScrollY;
    const scrollDifference = Math.abs(currentScrollY - lastScrollY);

    if (scrollDifference < 10) {
      ticking = false;
      return;
    }

    if (scrollingDown) {
      navbar.classList.add('nav-hidden');
    } else {
      navbar.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  });
}

setupMenu();
setupLanguageSwitcher();
setupContactForm();
setupRevealAnimations();
setupAutoHideNavbar();
setLanguage(currentLang);