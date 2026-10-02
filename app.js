
const TRANSLATIONS = {
  en: {
    home:"Home", services:"Services", portfolio:"Portfolio", about:"About", contact:"Contact",
    account:"My Account", login:"Sign in", logout:"Sign out",
    hero_kicker:"DIGITAL CREATIVE STUDIO FOR GROWING BUSINESSES",
    hero_title1:"Create.", hero_title2:"Elevate.", hero_title3:"Inspire.",
    hero_body:"Professional websites, digital design and marketing support for businesses that want to look polished, credible and ready to grow.",
    explore:"Explore services", viewwork:"View portfolio",
    websites:"Websites", marketing:"Digital Marketing", design:"Creative Design",
    services_kicker:"DIGITAL SERVICES", services_title:"Clear solutions. Elegant execution.",
    services_body:"Our current focus is digital. Every project starts with a base scope and can grow according to your business needs.",
    port_kicker:"SELECTED WORK", port_title:"Real projects. Real businesses.",
    port_body:"A growing portfolio built around clarity, functionality and strong visual presentation.",
    about_kicker:"ABOUT ELYARA", about_title:"Creative support with intention.",
    about_body:"ELYARA Creative is a boutique digital studio focused on helping businesses build a polished presence through web design, digital materials and practical creative support. We combine thoughtful design, clear communication and technology to create work that feels professional and useful.",
    contact_kicker:"LET'S WORK TOGETHER", contact_title:"Tell us what you need.",
    contact_body:"Start with a message. We’ll review your project and guide you toward the right service or quote.",
    login_title:"Welcome to ELYARA",
    login_body:"Sign in with Google to save your information, manage requests and access your client account.",
    from:"From", quote:"Request a quote", deposit:"Start with 50% deposit",
    learn:"Learn more", visit:"Visit website", send:"Send message",
    pay_deposit:"Pay 50% deposit", continue_google:"Continue with Google",
    quote_required:"This service requires a custom quote before payment.",
    deposit_explain:"Your project can begin with a 50% deposit based on the starting scope shown.",
    account_title:"Your ELYARA account", account_body:"Review your profile, requests and payment activity.",
    orders:"Orders", requests:"Requests", no_orders:"No orders yet.", no_requests:"No requests yet.",
    signed_out:"You are not signed in.", sign_in_needed:"Please sign in with Google before starting a paid project.",
    success_title:"Payment received", success_body:"Your deposit was received. We’ll contact you to confirm the project scope and next steps.",
    cancel_title:"Checkout canceled", cancel_body:"No payment was made. You can return to services whenever you’re ready."
  },
  es: {
    home:"Inicio", services:"Servicios", portfolio:"Portafolio", about:"Nosotros", contact:"Contacto",
    account:"Mi cuenta", login:"Iniciar sesión", logout:"Cerrar sesión",
    hero_kicker:"ESTUDIO CREATIVO DIGITAL PARA NEGOCIOS EN CRECIMIENTO",
    hero_title1:"Crea.", hero_title2:"Eleva.", hero_title3:"Inspira.",
    hero_body:"Páginas web profesionales, diseño digital y apoyo de marketing para negocios que quieren verse sólidos, confiables y listos para crecer.",
    explore:"Ver servicios", viewwork:"Ver portafolio",
    websites:"Páginas web", marketing:"Marketing digital", design:"Diseño creativo",
    services_kicker:"SERVICIOS DIGITALES", services_title:"Soluciones claras. Ejecución elegante.",
    services_body:"Por ahora nuestro enfoque es digital. Cada proyecto parte de un alcance base y puede crecer según las necesidades de tu negocio.",
    port_kicker:"TRABAJO SELECCIONADO", port_title:"Proyectos reales. Negocios reales.",
    port_body:"Un portafolio en crecimiento construido alrededor de claridad, funcionalidad y una presentación visual sólida.",
    about_kicker:"SOBRE ELYARA", about_title:"Apoyo creativo con intención.",
    about_body:"ELYARA Creative es un estudio digital boutique enfocado en ayudar a negocios a construir una presencia profesional mediante diseño web, materiales digitales y apoyo creativo práctico. Combinamos diseño, comunicación clara y tecnología para crear trabajos profesionales y útiles.",
    contact_kicker:"TRABAJEMOS JUNTOS", contact_title:"Cuéntanos qué necesitas.",
    contact_body:"Comienza con un mensaje. Revisaremos tu proyecto y te orientaremos hacia el servicio o cotización adecuada.",
    login_title:"Bienvenido a ELYARA",
    login_body:"Inicia sesión con Google para guardar tu información, administrar solicitudes y acceder a tu cuenta de cliente.",
    from:"Desde", quote:"Solicitar cotización", deposit:"Iniciar con 50% de anticipo",
    learn:"Ver detalles", visit:"Visitar sitio", send:"Enviar mensaje",
    pay_deposit:"Pagar 50% de anticipo", continue_google:"Continuar con Google",
    quote_required:"Este servicio requiere una cotización personalizada antes del pago.",
    deposit_explain:"Tu proyecto puede iniciar con un anticipo del 50% calculado sobre el alcance inicial mostrado.",
    account_title:"Tu cuenta ELYARA", account_body:"Consulta tu perfil, solicitudes y actividad de pagos.",
    orders:"Pagos", requests:"Solicitudes", no_orders:"Todavía no hay pagos.", no_requests:"Todavía no hay solicitudes.",
    signed_out:"No has iniciado sesión.", sign_in_needed:"Inicia sesión con Google antes de comenzar un proyecto con pago.",
    success_title:"Pago recibido", success_body:"Recibimos tu anticipo. Nos pondremos en contacto para confirmar el alcance del proyecto y los siguientes pasos.",
    cancel_title:"Pago cancelado", cancel_body:"No se realizó ningún cargo. Puedes regresar a Servicios cuando estés listo."
  }
};

const SERVICES = {
  essential_website: {en:"Essential Website",es:"Sitio web esencial",from:350,checkout:true,descEn:"Landing page or simple business presence.",descEs:"Landing page o presencia empresarial sencilla."},
  business_website: {en:"Business Website",es:"Sitio web empresarial",from:650,checkout:true,descEn:"4–6 pages or sections.",descEs:"4–6 páginas o secciones."},
  professional_website: {en:"Professional Website",es:"Sitio web profesional",from:950,checkout:false,descEn:"6–10 pages with more customization.",descEs:"6–10 páginas con mayor personalización."},
  advanced_website: {en:"Custom / Advanced Website",es:"Sitio web personalizado / avanzado",from:1500,checkout:false,descEn:"Payments, login, databases or custom systems.",descEs:"Pagos, login, bases de datos o sistemas personalizados."},
  digital_card: {en:"Digital Business Card",es:"Tarjeta de presentación digital",from:25,checkout:true,descEn:"Digital contact card for your business.",descEs:"Tarjeta digital de contacto para tu negocio."},
  social_flyer: {en:"Social Media Flyer",es:"Flyer para redes sociales",from:25,checkout:true,descEn:"Promotional design for social media.",descEs:"Diseño promocional para redes sociales."},
  digital_menu_1: {en:"Digital Menu · 1 page",es:"Menú digital · 1 página",from:35,checkout:true,descEn:"Simple digital menu.",descEs:"Menú digital sencillo."},
  digital_menu_23: {en:"Digital Menu · 2–3 pages",es:"Menú digital · 2–3 páginas",from:50,checkout:true,descEn:"Expanded digital menu.",descEs:"Menú digital ampliado."},
  elaborate_menu: {en:"Elaborate Digital Menu",es:"Menú digital elaborado",from:65,checkout:true,descEn:"More detailed digital menu design.",descEs:"Diseño digital de menú con mayor detalle."},
  web_maintenance_basic: {en:"Basic Web Maintenance",es:"Mantenimiento web básico",from:49,checkout:false,monthly:true,descEn:"Monthly website care.",descEs:"Cuidado mensual del sitio web."},
  web_maintenance_active: {en:"Active Web Maintenance",es:"Mantenimiento web activo",from:99,checkout:false,monthly:true,descEn:"Ongoing content and support.",descEs:"Contenido y soporte continuo."}
};

let lang = localStorage.getItem("elyaraLang") || "en";
let supabaseClient = null;
let currentSession = null;

function t(key){ return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || key; }

function applyLanguage(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach(el => {
    const key = el.dataset.t;
    if (TRANSLATIONS[lang]?.[key] !== undefined) el.textContent = TRANSLATIONS[lang][key];
  });
  document.querySelectorAll("[data-lang-toggle]").forEach(btn => btn.textContent = lang === "en" ? "EN / ES" : "ES / EN");
  document.querySelectorAll("[data-service-name]").forEach(el => {
    const s = SERVICES[el.dataset.serviceName];
    if (s) el.textContent = lang === "es" ? s.es : s.en;
  });
  document.querySelectorAll("[data-service-desc]").forEach(el => {
    const s = SERVICES[el.dataset.serviceDesc];
    if (s) el.textContent = lang === "es" ? s.descEs : s.descEn;
  });
  document.querySelectorAll("[data-service-price]").forEach(el => {
    const s = SERVICES[el.dataset.servicePrice];
    if (s) el.textContent = `${t("from")} $${s.from}${s.monthly ? (lang==="es" ? " / mes" : " / month") : ""}`;
  });
  updateAuthUi();
}

function configReady(){
  return window.ELYARA_CONFIG &&
    window.ELYARA_CONFIG.SUPABASE_URL &&
    !window.ELYARA_CONFIG.SUPABASE_URL.includes("YOUR_") &&
    window.ELYARA_CONFIG.SUPABASE_ANON_KEY &&
    !window.ELYARA_CONFIG.SUPABASE_ANON_KEY.includes("YOUR_");
}

function initSupabase(){
  if (!window.supabase || !configReady()) return;
  supabaseClient = window.supabase.createClient(
    window.ELYARA_CONFIG.SUPABASE_URL,
    window.ELYARA_CONFIG.SUPABASE_ANON_KEY
  );
}

async function refreshSession(){
  if (!supabaseClient) return null;
  const { data } = await supabaseClient.auth.getSession();
  currentSession = data.session || null;
  updateAuthUi();
  return currentSession;
}

function updateAuthUi(){
  document.querySelectorAll("[data-auth-label]").forEach(el => {
    el.textContent = currentSession ? t("account") : t("login");
    el.setAttribute("href", currentSession ? "account.html" : "login.html");
  });
  const email = currentSession?.user?.email || "";
  document.querySelectorAll("[data-user-email]").forEach(el => el.textContent = email);
}

async function signInGoogle(){
  if (!supabaseClient){
    alert("Supabase is not configured yet. Add your project URL and anon key in config.js.");
    return;
  }
  const redirectTo = `${window.location.origin}/login.html`;
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo }
  });
  if (error) alert(error.message);
}

async function signOut(){
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  currentSession = null;
  window.location.href = "index.html";
}

async function startService(serviceId){
  const service = SERVICES[serviceId];
  if (!service) return;
  if (!service.checkout){
    const url = new URL("contact.html", window.location.href);
    url.searchParams.set("service", serviceId);
    window.location.href = url.toString();
    return;
  }

  await refreshSession();
  if (!currentSession){
    sessionStorage.setItem("elyaraPendingService", serviceId);
    alert(t("sign_in_needed"));
    window.location.href = `login.html?return=services.html`;
    return;
  }

  const modal = document.getElementById("orderModal");
  if (!modal) return;
  document.getElementById("modalTitle").textContent = lang === "es" ? service.es : service.en;
  document.getElementById("modalText").textContent = t("deposit_explain");
  document.getElementById("modalAmount").textContent =
    `${t("from")} $${(service.from * .5).toFixed(2)} ${lang==="es" ? "de anticipo" : "deposit"}`;
  const pay = document.getElementById("payDepositBtn");
  pay.dataset.serviceId = serviceId;
  modal.style.display = "grid";
}

async function createCheckout(serviceId){
  if (!currentSession) await refreshSession();
  if (!currentSession){
    alert(t("sign_in_needed"));
    return;
  }

  const btn = document.getElementById("payDepositBtn");
  if (btn){ btn.disabled = true; btn.textContent = lang === "es" ? "Abriendo pago..." : "Opening checkout..."; }

  try{
    const res = await fetch("/api/create-checkout", {
      method:"POST",
      headers:{
        "content-type":"application/json",
        "authorization":`Bearer ${currentSession.access_token}`
      },
      body:JSON.stringify({serviceId})
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Checkout error");
    window.location.href = data.url;
  }catch(err){
    alert(err.message);
    if (btn){ btn.disabled = false; btn.textContent = t("pay_deposit"); }
  }
}

async function submitContact(form){
  const payload = Object.fromEntries(new FormData(form).entries());
  payload.language = lang;

  if (!supabaseClient){
    alert("Supabase is not configured yet. The form is ready, but the database connection must be added first.");
    return;
  }

  const { error } = await supabaseClient.from("contact_requests").insert({
    user_id: currentSession?.user?.id || null,
    first_name: payload.first_name || "",
    last_name: payload.last_name || "",
    email: payload.email || "",
    service: payload.service || "",
    message: payload.message || "",
    language: lang
  });

  if (error){
    alert(error.message);
    return;
  }

  form.reset();
  alert(lang === "es" ? "Gracias. Recibimos tu solicitud." : "Thank you. Your request was received.");
}

async function loadAccount(){
  const account = document.querySelector("[data-account-page]");
  if (!account || !supabaseClient) return;

  await refreshSession();
  if (!currentSession){
    account.innerHTML = `<div class="login-card"><h1 class="serif">${t("signed_out")}</h1><a class="btn btn--navy" href="login.html">${t("login")}</a></div>`;
    return;
  }

  const user = currentSession.user;
  document.querySelector("[data-account-email]").textContent = user.email || "";

  const { data: orders } = await supabaseClient
    .from("orders")
    .select("service_id,service_name,amount_cents,status,created_at")
    .eq("user_id", user.id)
    .order("created_at",{ascending:false});

  const { data: requests } = await supabaseClient
    .from("contact_requests")
    .select("service,message,status,created_at")
    .eq("user_id", user.id)
    .order("created_at",{ascending:false});

  const ordersBox = document.querySelector("[data-orders]");
  const reqBox = document.querySelector("[data-requests]");

  ordersBox.innerHTML = orders?.length ? orders.map(o => `
    <div class="account-row">
      <b>${o.service_name || o.service_id}</b>
      <span>$${((o.amount_cents||0)/100).toFixed(2)} · ${o.status}</span>
    </div>`).join("") : `<p>${t("no_orders")}</p>`;

  reqBox.innerHTML = requests?.length ? requests.map(r => `
    <div class="account-row">
      <b>${r.service || "General"}</b>
      <span>${r.status || "new"}</span>
    </div>`).join("") : `<p>${t("no_requests")}</p>`;
}

document.addEventListener("DOMContentLoaded", async () => {
  initSupabase();
  applyLanguage();

  if (supabaseClient){
    await refreshSession();
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      currentSession = session;
      updateAuthUi();
    });
  }

  document.querySelectorAll("[data-lang-toggle]").forEach(btn => btn.addEventListener("click", () => {
    lang = lang === "en" ? "es" : "en";
    localStorage.setItem("elyaraLang",lang);
    applyLanguage();
  }));

  document.querySelectorAll("[data-menu]").forEach(btn => btn.addEventListener("click", () => {
    document.querySelector("[data-mobile]")?.classList.toggle("open");
  }));

  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  }), {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  document.querySelectorAll("[data-google-login]").forEach(btn => btn.addEventListener("click", signInGoogle));
  document.querySelectorAll("[data-signout]").forEach(btn => btn.addEventListener("click", signOut));
  document.querySelectorAll("[data-service-start]").forEach(btn => btn.addEventListener("click", () => startService(btn.dataset.serviceStart)));
  document.querySelectorAll("[data-close]").forEach(btn => btn.addEventListener("click", () => {
    document.getElementById("orderModal").style.display = "none";
  }));

  document.getElementById("payDepositBtn")?.addEventListener("click", e => createCheckout(e.currentTarget.dataset.serviceId));

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) contactForm.addEventListener("submit", e => {
    e.preventDefault();
    submitContact(contactForm);
  });

  const params = new URLSearchParams(location.search);
  const serviceParam = params.get("service");
  if (serviceParam && SERVICES[serviceParam]){
    const select = document.querySelector('select[name="service"]');
    if (select) select.value = serviceParam;
  }

  await loadAccount();
});
