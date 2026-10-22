/* Doña Bigotes — tienda de afiliados (Store ID: donabigotes-20).
   Catálogo: SOLO productos con enlace exacto de afiliado verificado.
   Sin precios impresos: el precio vigente se consulta en Amazon.
   Refactor CRO: buscador por #código viral, tarjetas 1-click, router de afiliado,
   telemetría ligera, vistos recientemente, buzón "Pregúntale a Doña" y boletín. */

const STORE_TAG = "donabigotes-20";

const PRODUCTS = [
  {
    id: "stanley-quencher",
    codigo: "#01",
    marca: "Stanley",
    nombre: "Termo Stanley Quencher H2.0 FlowState",
    cat: "Hogar",
    tienda: "Amazon",
    url: "https://link.amazon/B0fBcdnXh",
    img: "img/prod-stanley.jpg",
    imgAlt: "Termo Stanley Quencher H2.0 FlowState azul, con asa, tapa y popote",
    mono: "St",
    rango: "$$",
    rangoLabel: "Rango medio · Consultar en Amazon",
    veredicto: "El termo no se negocia: si el hielo no aguanta sus 12 horas, no se queda.",
    problema: "Tu bebida pierde el frío a mitad del día y terminas comprando otra por el camino.",
    palabras: "frio hielo bebida cafe termo vaso horas carro",
    beneficio: "El termo de la casa de Doña, sometido a una sola pregunta: ¿el hielo aguanta 12 horas?",
    situacion: "“El café de las 7 ya es historia a las 9… y del hielo ni hablamos.”",
    descripcion: "El termo Quencher H2.0 FlowState de Stanley. Su permanencia en esta tienda depende de la prueba de las 12 horas: hielo a las 7 de la mañana, veredicto a las 7 de la noche, con las horas a la vista en el video.",
    uso: "Para mantener tu bebida a mano durante el día — en casa, en el carro o en la calle — sin depender de recalentar ni de comprar otra por el camino.",
    caracteristicas: ["Modelo Quencher H2.0 FlowState", "Es el producto exacto del enlace de afiliado verificado"],
    revisar: ["Tamaño y color disponibles y su precio hoy", "Compatibilidad con el portavasos de tu carro, según la ficha", "Tapa, popote y piezas incluidas en esta variante"],
    estado: "Investigado",
    estadoNota: "Ficha y enlace verificados. Su video de prueba (las 12 horas) está en producción: cuando se publique, su estado pasará a demostrado o probado según el resultado.",
    video: "En producción: la prueba de las 12 horas"
  },
  {
    id: "bomves-cepillo",
    codigo: "#02",
    marca: "Bomves",
    nombre: "Cepillo eléctrico giratorio inalámbrico",
    cat: "Limpieza",
    tienda: "Amazon",
    url: "https://link.amazon/B0iDmQS2B",
    img: "img/prod-bomves.jpg",
    imgAlt: "Cepillo eléctrico giratorio Bomves con sus cabezales",
    mono: "Bo",
    rango: "$$",
    rangoLabel: "Rango medio · Consultar en Amazon",
    veredicto: "Frotar de rodillas quedó en el siglo pasado.",
    problema: "El baño y la cocina piden limpieza a fondo, pero agacharse y frotar a mano ya cuesta trabajo.",
    palabras: "baño bano cocina frotar agacharse espalda rodillas sarro grasa juntas limpieza visita olores",
    beneficio: "Limpieza del baño y la cocina sin frotar de rodillas: el cepillo gira por ti.",
    situacion: "“La visita avisa que viene en una hora… y el baño lleva un mes pidiendo auxilio en silencio.”",
    descripcion: "Cepillo eléctrico giratorio inalámbrico para la limpieza de superficies del baño y la cocina, elegido para la línea de vergüenzas domésticas de Doña: esos rincones que nadie quiere frotar a mano.",
    uso: "Pensado para reducir el esfuerzo de frotar en zonas de sarro, grasa y juntas, especialmente para quien ya no quiere — o no debe — limpiar de rodillas.",
    caracteristicas: ["Eléctrico y giratorio", "Inalámbrico", "Para baño y cocina"],
    revisar: ["Qué cabezales incluye la caja y si hay repuestos", "Autonomía de la batería y tiempo de carga", "Para qué superficies lo recomienda el fabricante y para cuáles no"],
    estado: "Investigado",
    estadoNota: "Ficha y enlace verificados. Su reseña en video está en preparación; todavía no está demostrado ni probado en cámara.",
    video: "En preparación"
  },
  {
    id: "toosbuc-cocina",
    codigo: "#03",
    marca: "Toosbuc",
    nombre: "Set de utensilios de cocina de silicona",
    cat: "Cocina",
    tienda: "Amazon",
    url: "https://link.amazon/B0eLenxoI",
    img: "img/prod-toosbuc.jpg",
    imgAlt: "Set de utensilios de cocina de silicona gris dentro de su portautensilios",
    mono: "To",
    rango: "$",
    rangoLabel: "Rango accesible · Consultar en Amazon",
    veredicto: "Una cocina, tres generaciones: un solo set y se acabó la cacería de la espátula.",
    problema: "Las piezas de diario viven perdidas entre cajones que nadie ordena igual.",
    palabras: "cocina utensilios espatula orden generaciones cajones cocinar",
    beneficio: "Las piezas de diario reunidas en un solo set: se acabó cazar la espátula perdida.",
    situacion: "“Tres generaciones en la misma cocina, y la espátula que todos buscan… desaparecida otra vez.”",
    descripcion: "Set de utensilios de cocina de silicona de Toosbuc, elegido para la convivencia entre generaciones: cuando varias manos cocinan en la misma cocina, un set completo y a la vista baja la fricción diaria.",
    uso: "Para cocinar a diario con un juego completo en un solo sitio, en vez de piezas sueltas repartidas por cajones que nadie ordena igual.",
    caracteristicas: ["Set de utensilios de cocina", "Material: silicona"],
    revisar: ["Número exacto de piezas del set y cuáles son", "Resistencia al calor declarada por el fabricante", "Si incluye contenedor y si es apto para lavavajillas"],
    estado: "Investigado",
    estadoNota: "Ficha y enlace verificados. Reseña en video pendiente.",
    video: null
  },
  {
    id: "hollyland-micro",
    codigo: "#04",
    marca: "Hollyland",
    nombre: "Micrófono inalámbrico de solapa",
    cat: "Tecnología sencilla",
    tienda: "Amazon",
    url: "https://link.amazon/B0dMmoMra",
    img: "img/prod-hollyland.jpg",
    imgAlt: "Kit de micrófono inalámbrico de solapa: dos transmisores negros con clip y su estuche de carga",
    mono: "Ho",
    rango: "$$",
    rangoLabel: "Rango medio · Consultar en Amazon",
    veredicto: "Gritarle al teléfono desde la cocina no es estrategia de audio, mi'ja.",
    problema: "Grabas o llamas desde lejos y la voz se oye hueca, con todo el ruido de la casa encima.",
    palabras: "microfono voz grabar video llamadas audio sonido telefono",
    beneficio: "Se engancha a la ropa y la voz se escucha cerca, sin cables cruzando la casa.",
    situacion: "“Gritarle al teléfono desde la otra punta de la cocina no es estrategia de audio, mi'ja.”",
    descripcion: "Micrófono inalámbrico de solapa de Hollyland, el representante de la tecnología sencilla en esta tienda: aparatos que se encienden y funcionan, sin manual de 40 páginas.",
    uso: "Para grabar voz con claridad al crear videos o hacer llamadas y grabaciones sin depender del micrófono lejano del teléfono.",
    caracteristicas: ["Micrófono de solapa (lavalier)", "Inalámbrico"],
    revisar: ["Compatibilidad con tu teléfono o cámara (conector y sistema)", "Alcance y autonomía declarados por el fabricante", "Qué incluye la caja: transmisor, receptor y cables"],
    estado: "Investigado",
    estadoNota: "Ficha y enlace verificados. El modelo exacto y su compatibilidad se confirman en la ficha de Amazon enlazada. Reseña en video pendiente.",
    video: null
  },
  {
    id: "cerave-crema",
    codigo: "#05",
    marca: "CeraVe",
    nombre: "CeraVe Moisturizing Cream, 16 oz",
    cat: "Cuidado personal",
    tienda: "Amazon",
    url: "https://link.amazon/B07k5Ba7A",
    img: "img/prod-cerave.jpg",
    imgAlt: "Pote de CeraVe Moisturizing Cream de 16 oz abierto, con la crema visible",
    mono: "Ce",
    rango: "$",
    rangoLabel: "Rango accesible · Consultar en Amazon",
    veredicto: "Un pote serio vale más que cinco cremas de promesa.",
    problema: "Piel seca que pica, se marca y protesta cada vez que cambia el tiempo.",
    palabras: "piel seca crema hidratacion cara cuerpo picor",
    beneficio: "Un solo pote serio de hidratación diaria, en vez de cinco cremas de promesa.",
    situacion: "“Piel seca que pica, se marca y protesta cada vez que cambia el tiempo.”",
    descripcion: "Crema hidratante de CeraVe en presentación de 16 oz (454 g). Según la ficha del fabricante: con ceramidas y ácido hialurónico, sin fragancia y no comedogénica, para piel seca. Confirma siempre la ficha completa en Amazon antes de comprar.",
    uso: "Hidratación diaria de cara y cuerpo para piel seca, como paso fijo de rutina en vez de producto ocasional.",
    caracteristicas: ["16 oz (454 g)", "Con ceramidas y ácido hialurónico", "Sin fragancia", "No comedogénica"],
    revisar: ["Que la variante sea la de 16 oz y no otra presentación", "Ingredientes completos si tienes alergias conocidas", "Vendedor y fecha de caducidad al recibirla"],
    estado: "Investigado",
    estadoNota: "Ficha y enlace verificados; descripción según el fabricante. Reseña en video pendiente. El enlace se rescató del sitio anterior: si al abrirlo no cargara tu tag de afiliado, avisa en Contacto.",
    video: null
  }
];

/* Publicaciones reales relacionadas con productos. No se inventan videos publicados. */
const VIDEOS = [
  {
    titulo: "La prueba de las 12 horas",
    detalle: "El termo Stanley se somete a su examen en cámara: hielo a las 7:00 a. m., veredicto a las 7:00 p. m.",
    productoId: "stanley-quencher",
    estado: "En producción",
    enProduccion: true
  }
];

const $ = (s) => document.querySelector(s);
const stateDot = (e) => e === "Probado" ? "dot-c" : e === "Demostrado" ? "dot-b" : "dot-a";

/* ---------- router de afiliado: todo enlace a Amazon sale con el Store ID ---------- */
function affUrl(u) {
  try {
    const url = new URL(u, location.href);
    if (/(^|\.)amazon\.[a-z.]+$/.test(url.hostname) && !url.searchParams.has("tag")) {
      url.searchParams.set("tag", STORE_TAG);
      return url.toString();
    }
  } catch (e) { /* enlace corto oficial (link.amazon): ya lleva el tag codificado */ }
  return u;
}

/* ---------- telemetría ligera (dataLayer + registro local) ---------- */
function track(evento, datos) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(Object.assign({ event: evento }, datos || {}));
  try {
    const log = JSON.parse(localStorage.getItem("db_eventos") || "[]");
    log.push(Object.assign({ t: Date.now(), evento: evento }, datos || {}));
    localStorage.setItem("db_eventos", JSON.stringify(log.slice(-100)));
  } catch (e) { /* almacenamiento no disponible */ }
}

/* ---------- vistos recientemente ---------- */
function markSeen(id) {
  try {
    let v = JSON.parse(localStorage.getItem("db_vistos") || "[]");
    v = [id].concat(v.filter((x) => x !== id)).slice(0, 6);
    localStorage.setItem("db_vistos", JSON.stringify(v));
    renderRecientes();
  } catch (e) { /* sin almacenamiento */ }
}
function renderRecientes() {
  const box = $("#recientes"), grid = $("#recientesGrid");
  if (!box || !grid) return;
  let v = [];
  try { v = JSON.parse(localStorage.getItem("db_vistos") || "[]"); } catch (e) { v = []; }
  const items = v.map((id) => PRODUCTS.find((d) => d.id === id)).filter(Boolean);
  box.hidden = items.length === 0;
  grid.innerHTML = items.map((d) =>
    `<button class="recent-chip" type="button" data-detalle="${d.id}"><span class="recent-code">${d.codigo}</span>${d.marca} · ${d.nombre}</button>`).join("");
}

/* ---------- tarjetas v2: 1-click a Amazon + ficha sin fricción ---------- */
function cardHTML(d) {
  const media = d.img
    ? `<img src="${d.img}" alt="${d.imgAlt || d.nombre}" loading="lazy"/>`
    : `<span class="mono" aria-hidden="true">${d.mono}</span>`;
  return `<article class="card">
    <div class="card-media">${media}
      <span class="code-badge">${d.codigo}</span>
      <span class="range-badge" title="${d.rangoLabel}">${d.rango}</span>
    </div>
    <div class="card-body">
      <span class="card-brand">${d.marca} · ${d.tienda} · ${d.cat}</span>
      <h3 class="card-name">${d.nombre}</h3>
      <p class="card-problem">${d.problema}</p>
      <p class="card-verdict">“${d.veredicto}”</p>
      <p class="card-estado"><span class="state-dot ${stateDot(d.estado)}"></span>${d.estado}${d.video ? " · Video: " + d.video : ""}</p>
      <div class="card-actions">
        <a class="btn btn-accent btn-sm" href="${affUrl(d.url)}" target="_blank" rel="sponsored noopener noreferrer" data-amazon="${d.id}">Ver precio en Amazon ↗</a>
        <button class="btn btn-detail btn-sm" type="button" data-detalle="${d.id}">Ver ficha y análisis</button>
      </div>
      <span class="card-meta">Enlace de afiliado · El precio válido es el de Amazon al abrirlo</span>
    </div>
  </article>`;
}

/* destacados: los que tienen video en camino */
$("#gridFeature").innerHTML = PRODUCTS.filter((d) => d.video).map(cardHTML).join("");

/* categorías reales -> píldoras del buscador */
const cats = [...new Set(PRODUCTS.map((d) => d.cat))];

/* videos */
$("#videoList").innerHTML = VIDEOS.map((v) => {
  const p = PRODUCTS.find((d) => d.id === v.productoId);
  return `<div class="video-row">
    <div class="v-main"><h3>${v.titulo}</h3><p>${v.detalle}</p></div>
    <span class="status-tag${v.enProduccion ? " prod" : ""}">${v.estado}</span>
    ${p ? `<button class="btn btn-detail btn-sm" type="button" data-detalle="${p.id}">Ver el producto ${p.codigo}</button>` : ""}
  </div>`;
}).join("");

/* ---------- explorador: búsqueda por #código, nombre, categoría o problema ---------- */
let activeCat = "Todas";
$("#pills").innerHTML = ["Todas"].concat(cats).map((c, i) =>
  `<button type="button" class="pill${i === 0 ? " active" : ""}" data-cat="${c}" aria-pressed="${i === 0}">${c}</button>`).join("");

const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
function matches(d, raw) {
  const q = norm(raw).trim();
  if (!q) return true;
  const codeDigits = q.replace(/^#/, "");
  if (/^\d{1,2}$/.test(codeDigits)) return d.codigo === "#" + codeDigits.padStart(2, "0");
  const hay = norm([d.codigo, d.nombre, d.marca, d.cat, d.problema, d.beneficio, d.descripcion, d.palabras].join(" "));
  return q.split(/\s+/).every((w) => hay.includes(w));
}
function render() {
  const q = $("#q").value;
  const list = PRODUCTS.filter((d) => (activeCat === "Todas" || d.cat === activeCat) && matches(d, q));
  $("#count").innerHTML = `Mostrando <strong>${list.length} de ${PRODUCTS.length} productos</strong>${activeCat !== "Todas" ? " en " + activeCat : ""}${q.trim() ? " para “" + q.trim().replace(/</g, "&lt;") + "”" : ""}.`;
  $("#empty").style.display = list.length ? "none" : "block";
  $("#grid").innerHTML = list.map(cardHTML).join("");
}
function setCat(c, silent) {
  activeCat = c;
  document.querySelectorAll(".pill").forEach((p) => {
    const on = p.dataset.cat === c;
    p.classList.toggle("active", on);
    p.setAttribute("aria-pressed", on ? "true" : "false");
  });
  render();
  if (!silent) track("filtro_categoria", { categoria: c });
}
let searchTimer = null;
$("#q").addEventListener("input", () => {
  render();
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => track("busqueda", { texto: $("#q").value.trim().slice(0, 60) }), 600);
});
$("#pills").addEventListener("click", (e) => {
  const b = e.target.closest(".pill"); if (b) setCat(b.dataset.cat);
});
$("#clearFilters").addEventListener("click", () => { $("#q").value = ""; setCat("Todas", true); render(); });
render();
renderRecientes();

/* clic directo a Amazon: telemetría + recientes */
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-amazon]");
  if (a) { track("clic_amazon", { producto: a.dataset.amazon }); markSeen(a.dataset.amazon); }
});

/* ---------- detalle de producto (dialog) ---------- */
const dlg = $("#detalle");
function openDetalle(id) {
  const d = PRODUCTS.find((x) => x.id === id); if (!d) return;
  $("#dMedia").innerHTML = d.img
    ? `<img src="${d.img}" alt="${d.imgAlt || d.nombre}"/>`
    : `<span class="mono" aria-hidden="true">${d.mono}</span>`;
  $("#dCat").textContent = d.codigo + " · " + d.cat + " · " + d.marca + " · " + d.tienda;
  $("#d-nombre").textContent = d.nombre;
  $("#dSituacion").textContent = d.situacion;
  $("#dVerdict").textContent = "“" + d.veredicto + "” — Doña Bigotes";
  $("#dDesc").textContent = d.descripcion;
  $("#dUso").textContent = d.uso;
  $("#dCarac").innerHTML = d.caracteristicas.map((c) => `<li>${c}</li>`).join("");
  $("#dRevisar").innerHTML = d.revisar.map((c) => `<li>${c}</li>`).join("");
  $("#dEstado").textContent = "Estado: " + d.estado + " · " + d.rangoLabel + ". " + d.estadoNota;
  const cta = $("#dCta");
  cta.href = affUrl(d.url);
  cta.dataset.amazon = d.id;
  cta.textContent = "Ver precio en Amazon ↗";
  if (typeof dlg.showModal === "function") dlg.showModal();
  track("abrir_ficha", { producto: d.id });
  markSeen(d.id);
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-detalle]"); if (b) openDetalle(b.dataset.detalle);
});
$("#dClose").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

/* ---------- header: menú móvil y buscador ---------- */
const nav = $("#mainNav"), toggle = $("#navToggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});
nav.addEventListener("click", (e) => { if (e.target.closest("a")) nav.classList.remove("open"); });
function goSearch(focus) {
  const el = $("#buscador") || $("#productos");
  if (el) el.scrollIntoView({ behavior: "smooth" });
  if (focus) setTimeout(() => $("#q").focus({ preventScroll: true }), 450);
}
$("#searchBtn").addEventListener("click", () => goSearch(true));

/* ---------- Pregúntale a Doña: diagnóstico en 1 clic ---------- */
const diagMap = { bano: "Limpieza", espalda: "Limpieza", cocina: "Cocina" };
document.querySelectorAll("[data-diag]").forEach((b) => b.addEventListener("click", () => {
  const tipo = b.dataset.diag;
  track("diagnostico", { tipo: tipo });
  if (tipo === "sugerir") {
    const f = $("#sugerirForm");
    if (f) { f.hidden = !f.hidden; if (!f.hidden) f.scrollIntoView({ behavior: "smooth", block: "center" }); }
    return;
  }
  const cat = diagMap[tipo];
  if (cat) {
    setCat(cat, true);
    const q = $("#q");
    if (tipo === "bano") q.value = "baño";
    if (tipo === "espalda") q.value = "agacharse";
    if (tipo === "cocina") q.value = "cocina";
    render();
    goSearch(false);
  }
}));
const sugBtn = $("#sugerirBtn");
if (sugBtn) sugBtn.addEventListener("click", () => {
  const nombre = $("#sugNombre").value.trim().slice(0, 80);
  const texto = $("#sugTexto").value.trim().slice(0, 400);
  if (!texto) { $("#sugTexto").focus(); return; }
  try {
    const arr = JSON.parse(localStorage.getItem("db_sugerencias") || "[]");
    arr.push({ t: Date.now(), nombre: nombre, texto: texto });
    localStorage.setItem("db_sugerencias", JSON.stringify(arr.slice(-20)));
  } catch (e) { /* sin almacenamiento */ }
  const msg = encodeURIComponent("Hola Doña Bigotes, soy " + (nombre || "una sobrina") + ". Quiero que pongas a prueba esto: " + texto);
  $("#sugLinks").innerHTML =
    `<a class="btn btn-accent btn-sm" target="_blank" rel="noopener" href="https://ig.me/m/dona_bigotes1?text=${msg}">Enviar por Instagram</a>` +
    `<a class="btn btn-plain btn-sm" target="_blank" rel="noopener" href="https://www.tiktok.com/@donabigotes1">Abrir su TikTok</a>` +
    `<a class="btn btn-plain btn-sm" href="mailto:?subject=${encodeURIComponent("Sugerencia para Doña Bigotes")}&body=${msg}">Enviar por correo</a>`;
  $("#sugOk").hidden = false;
  track("sugerencia_preparada", {});
});

/* ---------- El Boletín Sin Cuentos (registro local, listo para conectar el servicio) ---------- */
const newsForm = $("#newsForm");
if (newsForm) newsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const em = $("#newsEmail").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { $("#newsEmail").focus(); return; }
  try {
    const arr = JSON.parse(localStorage.getItem("db_boletin") || "[]");
    if (!arr.includes(em)) arr.push(em);
    localStorage.setItem("db_boletin", JSON.stringify(arr.slice(-500)));
  } catch (err) { /* sin almacenamiento */ }
  $("#newsOk").hidden = false;
  newsForm.reset();
  track("boletin_registro", {});
});

/* ---------- tip para webviews de TikTok / Instagram / Facebook ---------- */
(function () {
  const ua = navigator.userAgent || "";
  const inApp = /TikTok|Instagram|FBAN|FBAV|FB_IAB/i.test(ua);
  const tip = $("#appTip");
  if (inApp && tip) {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem("db_tip") === "1"; } catch (e) { dismissed = false; }
    if (!dismissed) tip.hidden = false;
    const x = $("#appTipClose");
    if (x) x.addEventListener("click", () => {
      tip.hidden = true;
      try { sessionStorage.setItem("db_tip", "1"); } catch (e) { /* sin sesión */ }
    });
  }
})();

/* ---------- año y revelado suave (con escalonado dentro de cada grupo) ---------- */
$("#year").textContent = new Date().getFullYear();
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver((es) => es.forEach((x) => {
    if (x.isIntersecting) { x.target.classList.add("visible"); io.unobserve(x.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.classList && c.classList.contains("reveal"));
    el.style.setProperty("--d", Math.min(siblings.indexOf(el), 5) * 70 + "ms");
    io.observe(el);
  });
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
}

/* ---------- capa inmersiva ---------- */
const progress = $("#progress");
if (progress) {
  let ticking = false;
  const paint = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }, { passive: true });
  paint();
}

/* inclinación 3D suave: foto del hero y tarjetas (solo puntero fino) */
if (!reduceMotion && matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let raf = null;
  const apply = (el, e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    const max = el.classList.contains("hero-img") ? 5 : 3.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`;
  };
  document.addEventListener("pointermove", (e) => {
    const el = e.target.closest(".card, .hero-img");
    if (raf) cancelAnimationFrame(raf);
    if (el) { raf = requestAnimationFrame(() => apply(el, e)); }
  });
  document.addEventListener("pointerout", (e) => {
    const el = e.target.closest(".card, .hero-img");
    if (el && !el.contains(e.relatedTarget)) el.style.transform = "";
  });
}

/* volver arriba + barra móvil (se oculta al llegar al pie) */
const toTop = $("#toTop"), stickyCta = $("#stickyCta");
addEventListener("scroll", () => {
  const show = scrollY > 650;
  if (toTop) toTop.classList.toggle("show", show);
  if (stickyCta) stickyCta.classList.toggle("show", show);
}, { passive: true });
if (toTop) toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
const footerEl = document.querySelector(".site-footer");
if (footerEl && stickyCta && "IntersectionObserver" in window) {
  new IntersectionObserver((es) => es.forEach((x) => stickyCta.classList.toggle("hide", x.isIntersecting)), { threshold: 0.05 }).observe(footerEl);
}
const stickySearch = $("#stickySearch");
if (stickySearch) stickySearch.addEventListener("click", () => goSearch(true));

/* destello dorado al tocar los botones principales */
if (!reduceMotion) {
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".btn-accent"); if (!b) return;
    for (let i = 0; i < 6; i++) {
      const s = document.createElement("span");
      s.className = "spark";
      s.style.left = e.clientX + "px";
      s.style.top = e.clientY + "px";
      s.style.setProperty("--tx", (Math.random() * 90 - 45) + "px");
      s.style.setProperty("--ty", (Math.random() * -70 - 12) + "px");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 750);
    }
  });
}
