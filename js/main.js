(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var chips = Array.prototype.slice.call(document.querySelectorAll(".eje-chip"));
  var ejeSections = Array.prototype.slice.call(document.querySelectorAll('.section[id^="eje-"]'));

  var state = { activeEjes: new Set() };

  // ------------------------------------------------------------------
  // Conteo real por eje en la tarjeta de filtro, leído del DOM una sola
  // vez al cargar — nunca un número fijo que se desactualice si cambia
  // la lista de proyectos en una próxima edición.
  // ------------------------------------------------------------------
  Array.prototype.slice.call(document.querySelectorAll(".eje-chip__meta[data-count-for]")).forEach(function (meta) {
    var eje = meta.dataset.countFor;
    var total = document.querySelectorAll('.proyecto[data-eje="' + eje + '"]').length;
    meta.textContent = total + (total === 1 ? " proyecto de ley" : " proyectos de ley");
  });

  // ------------------------------------------------------------------
  // Filtro por eje: cada sección arranca oculta (ver CSS, .js .section[id^="eje-"])
  // y solo se muestra la del eje activo — nunca "todos a la vez".
  // ------------------------------------------------------------------
  function applyFilters() {
    ejeSections.forEach(function (section) {
      var eje = section.id.replace("eje-", "");
      var visible = state.activeEjes.has(eje);
      var alreadyHidden = section.style.display === "none" || getComputedStyle(section).display === "none";

      if (visible) {
        if (alreadyHidden) {
          // "block", no "" — la sección sigue matcheando la regla CSS
          // .js .section[id^="eje-"] { display:none }, así que limpiar el
          // inline style con "" solo la devuelve a esa regla (sigue oculta).
          // Hace falta un valor real que gane por encima de la clase.
          section.style.display = "block";
          section.style.opacity = "0";
          requestAnimationFrame(function () { section.style.opacity = "1"; });
        }
      } else if (!alreadyHidden) {
        section.style.opacity = "0";
        if (reduceMotion) {
          section.style.display = "none";
        } else {
          setTimeout(function () {
            if (section.style.opacity === "0") section.style.display = "none";
          }, 200);
        }
      }
    });
  }

  // Selección exclusiva (un eje a la vez, como pestañas) — antes cada
  // chip se activaba/desactivaba de forma independiente (multi-select),
  // así que elegir un segundo chip sin apagar el primero dejaba ambos
  // activos a la vez y parecía que "no cambiaba de filtro". Ahora elegir
  // un chip apaga cualquier otro; tocar el que ya está activo lo apaga
  // (oculta ese eje de nuevo — no hay estado "mostrar todos").
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var eje = chip.dataset.eje;
      var wasActive = chip.dataset.active === "true";

      chips.forEach(function (c) {
        c.dataset.active = "false";
        c.setAttribute("aria-pressed", "false");
      });
      state.activeEjes.clear();

      if (!wasActive) {
        state.activeEjes.add(eje);
        chip.dataset.active = "true";
        chip.setAttribute("aria-pressed", "true");
      }
      applyFilters();

      // Al activar un filtro, baja hasta ese eje — las tarjetas ahora
      // son grandes (foto de fondo) y actúan como una portada que
      // "despliega" la sección, no solo como un filtro silencioso.
      // El scroll espera a que las demás secciones terminen de
      // colapsar (mismo tiempo que el fade-out en applyFilters) para
      // no apuntar a una posición que todavía va a moverse.
      if (!wasActive) {
        var target = document.getElementById("eje-" + eje);
        if (target) {
          setTimeout(function () {
            target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
          }, reduceMotion ? 0 : 210);
        }
      }
    });
  });

  // ------------------------------------------------------------------
  // Entrada al hacer scroll: solo el hero. Las tarjetas de eje ya no
  // participan de este observer — arrancan en display:none y su
  // "entrada" es el fade que dispara applyFilters() al activarse su
  // chip, no un scroll-reveal (un observer nunca vería un elemento con
  // display:none de todos modos). Se salta por completo si el usuario
  // prefiere movimiento reducido — el contenido ya es visible por
  // defecto sin JS, esto solo evita trabajo innecesario.
  // ------------------------------------------------------------------
  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealTargets = Array.prototype.slice.call(document.querySelectorAll(".home-hero"));
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  } else {
    document.querySelectorAll(".home-hero").forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
