/* Doña Bigotes — versión final.
   Catálogo: SOLO productos con enlace exacto de afiliado verificado (tag donabigotes-20).
   Sin precios en tarjetas: el precio vigente se consulta en Amazon. */

const PRODUCTS = [
  {
    id: "bomves-cepillo",
    marca: "Bomves",
    nombre: "Cepillo eléctrico giratorio inalámbrico",
    cat: "Limpieza",
    tienda: "Amazon",
    url: "https://link.amazon/B0iDmQS2B",
    img: "img/prod-bomves.jpg",
    mono: "Bo",
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
    id: "stanley-quencher",
    marca: "Stanley",
    nombre: "Termo Stanley Quencher H2.0 FlowState",
    cat: "Hogar",
    tienda: "Amazon",
    url: "https://link.amazon/B0fBcdnXh",
    img: "img/prod-stanley.jpg",
    imgAlt: "Termo Stanley Quencher H2.0 FlowState azul, con asa, tapa y popote",
    mono: "St",
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
    id: "toosbuc-cocina",
    marca: "Toosbuc",
    nombre: "Set de utensilios de cocina de silicona",
    cat: "Cocina",
    tienda: "Amazon",
    url: "https://link.amazon/B0eLenxoI",
    img: "img/prod-toosbuc.jpg",
    imgAlt: "Set de utensilios de cocina de silicona gris dentro de su portautensilios",
    mono: "To",
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
    marca: "Hollyland",
    nombre: "Micrófono inalámbrico de solapa",
    cat: "Tecnología sencilla",
    tienda: "Amazon",
    url: "https://link.amazon/B0dMmoMra",
    img: "img/prod-hollyland.jpg",
    imgAlt: "Kit de micrófono inalámbrico de solapa: dos transmisores negros con clip y su estuche de carga",
    mono: "Ho",
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
    marca: "CeraVe",
    nombre: "CeraVe Moisturizing Cream, 16 oz",
    cat: "Cuidado personal",
    tienda: "Amazon",
    url: "https://link.amazon/B07k5Ba7A",
    img: "img/prod-cerave.jpg",
    imgAlt: "Pote de CeraVe Moisturizing Cream de 16 oz abierto, con la crema visible",
    mono: "Ce",
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

/* Publicaciones reales relacionadas con productos.
   Hoy: una en producción. No se inventan videos publicados. */
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

function cardHTML(d, big) {
  const media = d.img
    ? `<img src="${d.img}" alt="${d.imgAlt || d.nombre}" loading="lazy"/>`
    : `<span class="mono" aria-hidden="true">${d.mono}</span>`;
  return `<article class="card">
    <div class="card-media">${media}<span class="cat-chip">${d.cat}</span></div>
    <div class="card-body">
      <span class="card-brand">${d.marca} · ${d.tienda}</span>
      <h3 class="card-name">${d.nombre}</h3>
      <p class="card-benefit">${d.beneficio}</p>
      <p class="card-estado"><span class="state-dot ${stateDot(d.estado)}"></span>Estado: ${d.estado}${d.video ? " · Video: " + d.video : ""}</p>
      <div class="card-actions">
        <a class="btn btn-accent btn-sm" href="${d.url}" target="_blank" rel="sponsored noopener">Ver en Amazon</a>
        <button class="btn btn-detail btn-sm" type="button" data-detalle="${d.id}">Detalles</button>
      </div>
      <span class="card-meta">Enlace de afiliado · Consultar precio vigente en Amazon</span>
    </div>
  </article>`;
}

/* destacados: los que tienen video en camino */
$("#gridFeature").innerHTML = PRODUCTS.filter((d) => d.video).map((d) => cardHTML(d, true)).join("");

/* categorías reales */
const cats = [...new Set(PRODUCTS.map((d) => d.cat))];
$("#catList").innerHTML = cats.map((c) => {
  const n = PRODUCTS.filter((d) => d.cat === c).length;
  return `<button class="cat-card" type="button" data-cat="${c}"><strong>${c}</strong><span>${n} producto${n !== 1 ? "s" : ""}</span></button>`;
}).join("");

/* videos */
$("#videoList").innerHTML = VIDEOS.map((v) => {
  const p = PRODUCTS.find((d) => d.id === v.productoId);
  return `<div class="video-row">
    <div class="v-main"><h3>${v.titulo}</h3><p>${v.detalle}</p></div>
    <span class="status-tag${v.enProduccion ? " prod" : ""}">${v.estado}</span>
    ${p ? `<button class="btn btn-detail btn-sm" type="button" data-detalle="${p.id}">Ver el producto</button>` : ""}
  </div>`;
}).join("");

/* explorador */
let activeCat = "Todas";
$("#pills").innerHTML = ["Todas", ...cats].map((c, i) =>
  `<button type="button" class="pill${i === 0 ? " active" : ""}" data-cat="${c}">${c}</button>`).join("");

function render() {
  const q = $("#q").value.trim().toLowerCase();
  const list = PRODUCTS.filter((d) =>
    (activeCat === "Todas" || d.cat === activeCat) &&
    (!q || (d.nombre + " " + d.marca + " " + d.cat + " " + d.beneficio + " " + d.descripcion).toLowerCase().includes(q)));
  $("#count").innerHTML = `Mostrando <strong>${list.length} de ${PRODUCTS.length} productos</strong>${activeCat !== "Todas" ? " en " + activeCat : ""}.`;
  $("#empty").style.display = list.length ? "none" : "block";
  $("#grid").innerHTML = list.map((d) => cardHTML(d)).join("");
}
function setCat(c) {
  activeCat = c;
  document.querySelectorAll(".pill").forEach((p) => p.classList.toggle("active", p.dataset.cat === c));
  render();
}
$("#q").addEventListener("input", render);
$("#pills").addEventListener("click", (e) => {
  const b = e.target.closest(".pill"); if (b) setCat(b.dataset.cat);
});
$("#catList").addEventListener("click", (e) => {
  const b = e.target.closest("[data-cat]"); if (!b) return;
  setCat(b.dataset.cat);
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
});
$("#clearFilters").addEventListener("click", () => { $("#q").value = ""; setCat("Todas"); });
render();

/* detalle de producto */
const dlg = $("#detalle");
function openDetalle(id) {
  const d = PRODUCTS.find((x) => x.id === id); if (!d) return;
  $("#dMedia").innerHTML = d.img
    ? `<img src="${d.img}" alt="${d.imgAlt || d.nombre}"/>`
    : `<span class="mono" aria-hidden="true">${d.mono}</span>`;
  $("#dCat").textContent = d.cat + " · " + d.marca + " · " + d.tienda;
  $("#d-nombre").textContent = d.nombre;
  $("#dSituacion").textContent = d.situacion;
  $("#dDesc").textContent = d.descripcion;
  $("#dUso").textContent = d.uso;
  $("#dCarac").innerHTML = d.caracteristicas.map((c) => `<li>${c}</li>`).join("");
  $("#dRevisar").innerHTML = d.revisar.map((c) => `<li>${c}</li>`).join("");
  $("#dEstado").textContent = "Estado: " + d.estado + ". " + d.estadoNota;
  const cta = $("#dCta");
  cta.href = d.url;
  cta.textContent = "Ver en Amazon";
  if (typeof dlg.showModal === "function") dlg.showModal();
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-detalle]"); if (b) openDetalle(b.dataset.detalle);
});
$("#dClose").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

/* header: menú móvil y buscador */
const nav = $("#mainNav"), toggle = $("#navToggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});
nav.addEventListener("click", (e) => { if (e.target.closest("a")) nav.classList.remove("open"); });
$("#searchBtn").addEventListener("click", () => {
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => $("#q").focus({ preventScroll: true }), 450);
});

/* año y revelado suave (con escalonado dentro de cada grupo) */
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

/* ---------- capa inmersiva (solo portada; todo respeta reduced-motion) ---------- */

/* barra de progreso de lectura */
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

/* contadores animados (cifras estructurales reales del proyecto) */
const counters = document.querySelectorAll("[data-count]");
if (counters.length) {
  const run = (el) => {
    const end = +el.dataset.count, t0 = performance.now(), dur = 1100;
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    if (reduceMotion) { el.textContent = end; } else { requestAnimationFrame(step); }
  };
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver((es) => es.forEach((x) => {
      if (x.isIntersecting) { run(x.target); cio.unobserve(x.target); }
    }), { threshold: 0.4 });
    counters.forEach((el) => cio.observe(el));
  } else { counters.forEach(run); }
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

/* botón volver arriba + barra de acción móvil */
const toTop = $("#toTop"), stickyCta = $("#stickyCta");
addEventListener("scroll", () => {
  const show = scrollY > 650;
  if (toTop) toTop.classList.toggle("show", show);
  if (stickyCta) stickyCta.classList.toggle("show", show);
}, { passive: true });
if (toTop) toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

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
