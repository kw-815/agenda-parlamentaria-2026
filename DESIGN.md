---
name: Agenda Parlamentaria 2026
description: Reporte interactivo de Keyword sobre la agenda legislativa — un boletín de Estado digitalizado, índigo profundo con acentos categóricos por eje.
colors:
  indigo: "#1E2470"
  indigo-deep: "#171C5C"
  indigo-soft: "#2A2F92"
  ink: "#232876"
  paper: "#FFFFFF"
  orange: "#FF863E"
  green: "#A2C56B"
  teal: "#01C5B4"
  coral: "#F26A5A"
  amber: "#F5C042"
typography:
  display:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.4rem, 1.9rem + 3vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.15rem, 1.8rem + 1.8vw, 3.15rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.018em"
  title:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.7rem, 1.45rem + 1.1vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.28vw, 1.14rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(0.9rem, 0.86rem + 0.18vw, 1rem)"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  sm: "10px"
  md: "18px"
  lg: "26px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  "2xl": "3rem"
  section: "clamp(3.5rem, 8vw, 6.5rem)"
components:
  chip:
    backgroundColor: "{colors.indigo-soft}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.9rem"
  chip-active:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.9rem"
  card-eje:
    backgroundColor: "{colors.indigo-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "2.75rem"
---

# Design System: Agenda Parlamentaria 2026

## Overview

**Creative North Star: "El Boletín de Estado"**

Un boletín oficial digitalizado: serio, verificable, sin decoración gratuita — pero legible y navegable de una forma que el PDF nunca pudo ser. El índigo profundo funciona como "papel oficial", la superficie sobre la que todo lo demás se posa; el naranja es el único sello de acción del sistema, reservado casi exclusivamente para lo que el lector puede *hacer* (filtrar, actuar), nunca para decorar. Los cinco colores de eje no son marca, son señalización — cumplen el mismo rol que las pestañas de color en un archivo físico: identifican una categoría a simple vista sin competir entre sí por atención. El dinamismo visual que en el PDF original venían de íconos e ilustraciones simples se recupera aquí con una librería de íconos grandes, monolínea, heredada de `ace2040` — no decoran porque sí, cada uno identifica el tema del eje y llena el espacio que dejaría vacío un bloque de objetivos corto junto a una lista de leyes larga.

Este sistema es heredado, no inventado: comparte tokens con otros micrositios de Keyword (ace2040, pnsi-2025-2029, asamblea-ec, gabinete-ec). Refinar aquí significa afinar cómo se *usan* esos tokens para este reporte específico — más disciplina en la aplicación del color, no una paleta nueva.

Anti-referencias confirmadas: no debe parecer un portal de gobierno genérico (tablas grises, tipografía Arial, cero jerarquía) ni caer en los tics de diseño genérico de IA (gradiente morado-azul, Inter para todo, tarjetas anidadas en tarjetas, iconos en tile redondeado sobre cada título).

**Key Characteristics:**
- Campo índigo profundo constante — nunca fondo blanco, nunca modo claro.
- Un único color de acción (naranja) para todo lo interactivo; los acentos de eje son solo identidad categórica.
- Tarjetas "glass" con un filo superior de luz, nunca sombra dura.
- Tipografía única (DM Sans) en toda la jerarquía — sin mezclar familias. Se probó sumar una serif editorial (Newsreader) para titular/numerales y se revirtió: dañaba más de lo que aportaba.
- Radios generosos y consistentes (10–26px), nunca esquinas vivas.

## Colors

Paleta de campo oscuro constante: un índigo profundo como base, un naranja único como color de acción, y una rueda de cinco acentos que existe solo para diferenciar categorías, nunca para llamar la atención por sí misma.

### Primary
- **Naranja Sello** (`#FF863E`): el único color reservado para interacción — foco de teclado, borde activo de filtros, la alerta. Si algo es naranja, es accionable o requiere atención inmediata. Se usa en dosis pequeñas y deliberadas.

### Neutral
- **Índigo de Estado** (`#1E2470`): el campo base de toda la página — el "papel oficial" sobre el que todo se apoya, con dos gradientes radiales sutiles y una textura de ruido casi imperceptible (opacity 0.035, blend overlay) para que no se sienta como un color plano de UI.
- **Índigo Profundo** (`#171C5C`): recesos — pie de página, paneles de dropdown, el fondo detrás de las tarjetas de eje. Un paso más oscuro que el campo, para dar sensación de cavidad.
- **Índigo Suave** (`#2A2F92`): superficie secundaria — base de mezcla para los acentos categóricos (`color-mix()` con cada color de eje) y para chips/badges en reposo.
- **Tinta** (`#232876`): color de texto sobre superficies claras (p. ej. el texto seleccionado con `::selection`).
- **Blanco Papel** (`#FFFFFF`) en una rampa de opacidad — 92% para texto principal, 78% para texto secundario, 62% para metadatos, 40% para placeholders, 15%/10%/7.5% para bordes y rellenos sutiles de superficie. Toda la jerarquía tipográfica sobre índigo se resuelve con esta única rampa, nunca con grises independientes.

### Categórico (acentos por eje)
Cinco acentos, uno por eje temático de la agenda. Cada uno aparece únicamente como: el punto del chip de filtro, el círculo numerado del eje, el borde superior y el resplandor radial (al 20% de opacidad) de su tarjeta, y la viñeta de sus proyectos de ley. Nunca como relleno grande de superficie.
- **Naranja Sello** (`#FF863E`) — Eje 1, Salud y seguridad. Comparte el token con el naranja de acción por diseño: es el eje que abre el reporte.
- **Turquesa Técnico** (`#01C5B4`) — Eje 2, Economía y empleo.
- **Verde Oliva Suave** (`#A2C56B`) — Eje 3, Ecología y pueblos.
- **Coral Cálido** (`#F26A5A`) — Eje 4, Familia y mujeres.
- **Ámbar Institucional** (`#F5C042`) — Eje 5, Ética y transparencia.

### Named Rules
**La Regla de Señalización, No Papel Tapiz.** Los colores de eje identifican, no decoran. Aparecen como punto, borde de 1–2px o resplandor al 20%, nunca como relleno sólido de un área grande — si un bloque completo se ve "naranja" o "turquesa", se rompió la regla.

**La Regla del Naranja Único.** El naranja es el único color del sistema que significa "puedes actuar aquí". Ningún otro color —ni los acentos de eje, ni el índigo— debe usarse en un estado de foco, hover accionable o CTA. Única excepción: el chip de un eje puede iluminarse con *su propio* color al activarse (confirma "esto es lo que seleccionaste"), pero ese color nunca migra a otro elemento para decirle al lector que algo distinto es clickeable. Si dos colores compiten por señalar interactividad genérica, el lector duda; el sistema no permite esa duda.

## Typography

**Display / Body / Label Font:** DM Sans (con fallback `ui-sans-serif, system-ui, -apple-system, sans-serif`) — una sola familia para todo el sistema, de pesos 400 a 700.

**Character:** Geométrica, neutra y muy legible en textos largos sobre fondo oscuro; suficientemente institucional para sostener un boletín de Estado, suficientemente contemporánea para no sentirse burocrática.

*Nota (2026-08-13): se probó sumar Newsreader (serif editorial) para el titular y un numeral gigante; el usuario lo revirtió explícitamente ("el tipo de letra daña mucho el diseño") — DM Sans única queda confirmado, no solo por default sino por decisión explícita tras probar la alternativa.*

### Hierarchy
- **Display** (700, `clamp(2.4rem, 1.9rem + 3vw, 4rem)`, line-height 1.1): el titular del hero, una sola vez por página.
- **Headline** (700, `clamp(2.15rem, 1.8rem + 1.8vw, 3.15rem)`, line-height 1.1): títulos de sección de segundo nivel (p. ej. "A considerar").
- **Title** (700, `clamp(1.7rem, 1.45rem + 1.1vw, 2.3rem)`, line-height 1.1): título de cada eje, junto a su círculo numerado.
- **Body** (400, `clamp(1rem, 0.95rem + 0.28vw, 1.14rem)`, line-height 1.6): párrafos del hero y texto largo. Objetivos y proyectos de ley bajan un paso en la escala fluida (`--fs-sm`) porque son listas de lectura rápida, no prosa.
- **Label** (700, `clamp(0.9rem, 0.86rem + 0.18vw, 1rem)`, letter-spacing 0.06em, uppercase): etiquetas de bloque ("Objetivos", "Proyectos de ley priorizados"), siempre en el color del eje activo.

### Named Rules
**La Regla de Familia Única.** DM Sans en toda la jerarquía, sin excepción. Ninguna fuente secundaria, ni siquiera para números o etiquetas — la jerarquía se logra con peso, tamaño y color, no con una segunda familia.

## Layout

Contenedor centrado de `1360px` (`--wrap`, ampliado desde 1160px) para el cuerpo del reporte y `880px` (`--wrap-narrow`) reservado para bloques de lectura densa; márgenes laterales fluidos (`clamp(1.25rem, 4vw, 2.5rem)`). El ritmo vertical entre secciones usa una única variable, `--s-section` (`clamp(2rem, 4.5vw, 3.25rem)`, reducido desde `clamp(3.5rem, 8vw, 6.5rem)` — el valor original dejaba hasta ~13rem de hueco entre secciones por una duplicación de padding, ver bug fijado abajo), para que el reporte respire igual en cada salto de eje. La navegación de índice y el header permanecen sticky, apilados (header primero, índice de ejes justo debajo), para que el lector nunca pierda dónde está mientras hace scroll o filtra.

Dentro de cada tarjeta de eje, el contenido va de ancho completo, apilado — no en dos columnas parejas. Ese diseño anterior fallaba cuando el bloque de objetivos era corto (1-3 frases) y el de proyectos de ley muy largo (hasta 24 entradas): la columna de objetivos quedaba con una franja de espacio vacío debajo. Ahora: **intro** (objetivos, ancho completo) y **bloque de proyectos** debajo, cuya lista se organiza en columnas tipo masonry (`columns: 320px 3`, no `display:grid`) en vez de una sola columna larga — con grid, cada fila se estira a la altura de su celda más alta, y como los nombres de ley varían mucho en longitud eso dejaba huecos en blanco; con columnas, cada ítem fluye a su propia columna sin esperar a los demás.

### Bug recurrente: `max-width` sin marco
Encontrado y corregido de forma independiente tres veces en esta sesión (`.intro`, `.eje__objetivo`, `.section-mark`) — vale la pena documentarlo para no repetirlo. **Patrón:** un bloque con `max-width` fijo, sin `margin-inline: auto` que lo centre y sin borde/fondo visible que explique por qué es más angosto que el contenedor de 1360px que lo rodea, se ve como una columna pegada a la izquierda con un hueco vacío sin sentido a la derecha. **Regla:** si un texto necesita ser más angosto que `--wrap`, o (a) se centra explícitamente, o (b) se envuelve en una tarjeta con fondo/borde que haga evidente el límite (como `.intro`), o (c) simplemente no se le pone `max-width` y se deja fluir a ancho completo con `text-align: justify` — la opción usada para `.eje__objetivo` y `.section-mark`.

## Elevation & Depth

Sistema de "glass en capas": las tarjetas no proyectan sombra dura, sino un filo superior de luz sutil (`inset 0 1px 0 rgba(255,255,255,0.06)`) combinado con una sombra difusa y oscura hacia abajo, dando sensación de vidrio flotando sobre el campo índigo, no de papel apilado. La profundidad es siempre suave, nunca dura ni con borde negro.

### Shadow Vocabulary
- **elev-1** (`0 2px 10px rgba(10,12,40,0.25)`): elevación mínima — chips y elementos pequeños en reposo.
- **elev-2** (`0 12px 34px rgba(10,12,40,0.35)`): elevación estándar — tarjetas de eje, hero, paneles de dropdown.
- **inset-hi** (`inset 0 1px 0 rgba(255,255,255,0.06)`): el filo de luz superior que da el efecto "glass" a cualquier superficie elevada; se combina siempre con una sombra externa, nunca solo.

### Named Rules
**La Regla del Filo, No el Borde.** La profundidad se lee en el filo superior de luz, no en un borde visible perimetral. Un borde traslúcido (`--t-10`/`--t-15`) delimita la forma; el filo de luz (`--edge-hi`) es lo que la hace sentir elevada.

## Shapes

Radios generosos y consistentes en tres escalones: `10px` (elementos pequeños — filas de proyecto de ley, ítems de lista), `18px` (radio estándar de tarjeta), `26px` (tarjetas grandes — el hero, la tarjeta de eje). Los elementos de interacción directa (chips, botones) usan pill (`999px`). Ninguna esquina viva en ningún componente — el sistema no tiene ni un solo `border-radius: 0`.

## Components

### Chips (filtro por eje) — ahora tarjetas con foto real
- **Rediseño 2026-08-13, cinco iteraciones:** (1) foto miniatura de 84-152px en la esquina de `.eje__head` — "diminuta en una esquina". (2) chip convertido en tarjeta con la foto como fondo completo — el usuario la vio "muy invasiva": solo imagen, sin nada más. (3) tarjeta de dos partes (bloque de color + foto) siguiendo `.obj-cover` de ace2040, pero del mismo ancho que el toolbar completo (`1fr`) — el usuario las vio demasiado grandes, con bordes mal definidos y "espacios blancos a los lados". (4) tamaño reducido a proporciones de ace2040 con `justify-content: space-between` — mejor, pero space-between esparcía las 3 tarjetas ya compactas de borde a borde del wrap (1360px), dejando demasiado espacio horizontal muerto entre ellas; el hueco de color seguía sin cubrir bien el botón. (5) **versión final:** `justify-content: center` en vez de space-between, y el bug de fondo corregido de raíz (ver abajo).
- **Bloque superior (`.eje-chip__top`), 44% de la altura:** fondo = color del eje (`--chip-accent`, sin mezclar — igual que los `--obj-N` de ace2040, que resultaron ser exactamente la misma paleta categórica de este proyecto). Contiene: número grande decorativo en la esquina (`rgba(23,28,92,.22)`), el título del eje en `--indigo-deep` (≥6.4:1 de contraste verificado contra los tres acentos usados aquí), y al pie una **pill de acción "Ver eje →"** (fondo `--indigo-deep`, invierte a un tinte del color del eje en hover) más una línea de **conteo real de proyectos** ("N proyectos de ley", calculado del DOM en `main.js`, no un número fijo).
- **Bloque inferior (`.eje-chip__photo`):** la foto, con un tinte índigo uniforme y sutil (`rgba(23,28,92,.28)`) encima — baja el brillo de fotos muy claras (cielo, ropa blanca) para que no compitan con el resto de la página, que es oscura. Zoom sutil (`scale(1.05)`) en hover.
- **Tamaño real (fix 2026-08-13):** `aspect-ratio: 3/4.1` (igual que ace2040) y columnas de `minmax(220px, 320px)` en vez de `1fr` — antes cada tarjeta se estiraba a 1/3 del `--wrap` de 1360px (~450px de ancho). `.eje-chips` usa `justify-content: center` (no `space-between`, que probamos primero y esparcía las 3 tarjetas de borde a borde con demasiado aire entre ellas) — quedan agrupadas con un gap consistente (`--s-4`), centradas en el toolbar.
- **Bug real detrás de los "espacios blancos" (fix 2026-08-13):** `.eje-chip` es un `<button>` y nunca se reseteó su apariencia nativa del navegador — faltaba específicamente `padding: 0` (el resto del reset — background/border/margin — ya estaba). El padding por defecto del navegador dejaba un margen visible entre el borde redondeado del botón y el bloque de color de adentro, revelando el fondo índigo de la página por ese hueco — eso era "el recuadro no cubre bien" que reportó el usuario, no un problema de tamaño. Reset completo: `appearance: none; background: none; border: 0; margin: 0; padding: 0; font: inherit;` más un borde propio declarado después (`1px solid var(--t-15)`, `border-top-color: var(--edge-hi)` — mismo tratamiento que toda otra tarjeta del sistema).
- **Espaciado vertical consistente (fix 2026-08-13):** `.eje-chips` usaba `margin-top: var(--s-5)` (2rem fijo) mientras que el espacio hacia la siguiente sección usa `var(--s-section)` (hasta 3.25rem) — la diferencia se notaba como un ritmo vertical irregular. Ahora ambos usan `--s-section`.
- **Diferencia deliberada con ace2040:** en ace2040 cada `obj-cover` enlaza a una página propia por pilar (`pages/pilar-1.html`). Aquí NO se replicó esa arquitectura multi-página — habría contradicho la decisión de producto de mantener el reporte en una sola página de lectura corrida (ver PRODUCT.md). La pill "Ver eje" en vez de "Explorar pilar →" refleja esto: el clic filtra + hace scroll suave hasta la sección del eje más abajo, no navega a otra URL.
- **Estado activo:** borde y anillo de 2px (`box-shadow`) con el color del eje puro alrededor de toda la tarjeta.
- **Selección exclusiva (fix 2026-08-13):** las tarjetas funcionan como pestañas — un clic apaga cualquier otra activa antes de encender la elegida; tocar la que ya está activa la apaga y vuelve a mostrar todos los ejes.
- **Conteo reintroducido a propósito:** el chip-pill anterior había perdido su contador ("no aportaba nada" en un pill de texto pequeño). Aquí se reintrodujo porque el componente cambió de naturaleza — es una tarjeta inspirada en un patrón que sí muestra esa métrica (ace2040 mostraba "N lineamientos"), y ayuda a decidir qué eje explorar primero.

### Cards / Tarjetas de eje
- **Corner Style:** 26px (`--r-lg`).
- **Background:** índigo profundo con un resplandor radial del color del eje al 20% de opacidad en la esquina superior izquierda — nunca relleno sólido.
- **Shadow Strategy:** elev-2 + inset-hi (ver Elevation & Depth).
- **Border:** 1px `--t-15`, con el borde superior en `--edge-hi`.
- **Internal Padding:** `clamp(1.75rem, 4vw, 2.75rem)`.
- El círculo numerado del eje (40px, relleno con el color del eje mezclado al 45% sobre índigo suave — bajado desde 85% para mantener ≥4.5:1 de contraste con el texto blanco en los 5 ejes) es el único lugar donde el color de eje aparece como relleno sólido — es la insignia de identidad, la excepción deliberada a la regla de señalización.

*Nota (2026-08-13): se probaron y se revirtieron dos recursos de "carácter" adicionales — un ícono de línea flotante por eje (librería de ace2040) y, después, un numeral gigante de solo contorno (recurso de ace2040/tools/icons.py nunca antes usado). Ambos intentos partieron de "qué existe en otros repos de Keyword" en vez de diseñar para el contenido real de este proyecto — feedback explícito del usuario. Lo que sí se mantuvo: un ícono pequeño y propio (no de otro repo) dentro del mismo círculo de 44px de siempre — mismo tamaño/posición que ya funcionaba, cero riesgo de layout. Pendiente: imágenes reales (foto por eje, foto de hero) — carpeta `IMAGENES/` creada 2026-08-13 para que el usuario las suba.*

### Objetivo de cada eje (`.eje__objetivo`)
- **Qué reemplaza:** una lista `<ul>` de 2-3 viñetas largas (una por "objetivo general" + "objetivos específicos" del documento fuente) que dejaba una columna angosta con mucho espacio vacío al lado — el objetivo real de cada eje es largo en el documento oficial, y una lista de viñetas no es el formato correcto para párrafos de esa extensión.
- **Ahora:** el objetivo se condensa a una sola oración (tono Keyword: corto, directo — no la prosa burocrática del documento fuente completo) y se presenta como un párrafo único, ancho completo de la tarjeta, `text-align: justify` + `hyphens: auto`.
- **Contenido:** nunca inventar — condensar preservando el hecho, no agregar interpretación. "Orgánica"/"Orgánico" se omite en todo el texto del reporte por decisión del usuario (2026-08-13): ni en objetivos ni en títulos de proyectos de ley.

### Objetivos específicos (`.eje__especificos`)
- **Qué resuelve:** el paso de condensación había dejado solo el "objetivo general" por eje, perdiendo la subestructura de "objetivos específicos" que sí trae el documento fuente — señalado por la revisión de diseño y confirmado con el usuario (2026-08-13) que había que recuperarlo.
- **Por qué no es un segundo párrafo:** devolverlos como prosa habría agravado el problema que motivó este mismo cambio (sensación de "bloque gigante de texto"). En su lugar, cada objetivo específico del documento se condensa a una frase corta (4-6 palabras, mismo criterio de fidelidad que `.eje__objetivo`: preservar el hecho, no interpretar) y se muestra como una pill de solo texto — mismo lenguaje visual que `.status-tag` pero sin ícono, con el borde teñido al 30% del color del eje (señalización de baja dosis).
- **Posición:** debajo de `.eje__objetivo`, dentro de la misma tarjeta `.eje__intro` — actúa como textura intermedia entre el párrafo justificado y el muro de filas de proyectos de ley.
- **Etiqueta "Objetivos específicos" (fix 2026-08-13):** las pills se lanzaron sin ningún texto que explicara qué eran — el usuario las vio "flotando ahí" sin entenderlas. Se agregó `<p class="eje__block-label eje__block-label--sm">Objetivos específicos</p>` justo encima, mismo componente visual que ya usa la etiqueta "Objetivo" (el modificador `--sm` solo ajusta el margen porque esta etiqueta va después de un párrafo, no antes).

### Estado de proyecto de ley (`.status-tag`)
- **Qué reemplaza:** un punto de color de 8px + texto — se sentía "demasiado simple" según el usuario.
- **Ahora:** una pill con ícono inline (reloj para "en análisis", círculo con "+" para "nueva propuesta") — más peso visual, y el ícono comunica el significado sin depender solo del color.
- **Cuándo aparece:** eje 1 (6 en análisis + 1 nueva propuesta) usa los dos grupos etiquetados. Ejes 2 y 3, confirmados 2026-08-13 como 100% en análisis y ninguno nuevo, no se dividen en dos grupos (dividir cuando uno quedaría vacío no aporta nada) — en su lugar muestran una sola `.status-tag--analisis` sobre la lista completa, mismo componente visual que usa eje 1 por grupo, no una nota de texto aparte.

### Filas de proyecto de ley
- **Style:** fondo `--t-08`, borde `--t-10`, radio 10px (`--r-sm`), viñeta de 6px en el color del eje. Fila, no tarjeta — deliberadamente más plana que una card, porque son decenas de entradas en total y cada una no merece el peso visual de una tarjeta. Se organizan en columnas tipo masonry (`columns`), no en grid ni en una sola columna larga — ver Layout.
- **Sin divulgación progresiva (retirada 2026-08-13):** existía un botón "Mostrar N más" que colapsaba listas de más de 12 entradas. Se quitó a pedido del usuario — ahora que hay tarjetas de filtro por eje, el lector llega a un eje ya con intención de leerlo completo, así que ocultar parte de la lista no aportaba. Todas las listas se muestran completas siempre.
- **Filtro por eje, ocultas por defecto (fix 2026-08-13):** las tres secciones de eje (`#eje-1/2/3`) ahora arrancan en `display:none` (`.js .section[id^="eje-"]`, solo dentro de `.js` para que sin JS se vea todo el contenido) y solo se muestra la del eje activo al hacer clic en su tarjeta de filtro — antes las tres estaban siempre visibles y el chip solo filtraba/ocultaba. Se quitó también el botón "Ver todos los ejes" (antes "Limpiar filtros"): ya no existe un estado "mostrar todos a la vez", así que no tenía sentido. Tocar la tarjeta ya activa vuelve a ocultar esa sección (no hay atajo para "ver todo").

### Sello e ilustración (keyreview-template) — retirados
El sello de alerta (`.alert__icon`) y la silueta (`.considerar__figure`) que se documentaban aquí correspondían al contenido de la Agenda 2021-2022 (el callout de "evaluación semestral" y la sección "A considerar"). Ninguno de los dos existe en el contenido real de la Agenda 2026-2027 (reemplazo de contenido, 2026-08-13) — no hay alerta ni silueta en la versión actual. Si una necesidad equivalente aparece con contenido real, documentar de nuevo aquí.

### Hero
- **Contenido (2026-08-13):** solo logo + `<h1>` con el título de la edición. Se quitaron el eyebrow ("Reporte interactivo · Asamblea Nacional del Ecuador") y el párrafo de subtítulo introductorio a pedido del usuario — el texto introductorio real vive en `.intro`, justo debajo, así que repetirlo en el hero era redundante.
- **Fondo (foto real, 2026-08-13):** `IMAGENES/hero.jpg` — el hemiciclo histórico de la Asamblea, reemplaza la foto genérica de Quito (`img/hero-quito.avif`, retirada del proyecto). Llega con un gradiente índigo superpuesto (`.home-hero::before`) para mantener el contraste del `<h1>` blanco sobre la foto. **Nota técnica:** el archivo subido venía codificado como AVIF con extensión `.jpg` (bytes reales no coincidían con la extensión, lo que habría roto la carga en el navegador); se convirtió a JPEG real antes de integrarlo.

### Fotos por eje — ahora viven en las tarjetas de filtro
La foto de cada eje ya no está dentro de la tarjeta `.eje` (se intentó como miniatura de esquina y no funcionó — ver nota abajo). Vive en la tarjeta de filtro (`.eje-chip`, sección "Chips" arriba), como fondo completo con scrim. La tarjeta `.eje` en sí (objetivo + proyectos) se mantiene sin foto, 100% superficie de lectura.

**Contenido de las fotos (2026-08-13):** `eje-1.jpg` Plaza Grande/Centro Histórico de Quito (una primera entrega mostraba un retén militar con fusiles en primer plano — se marcó como no apto para el tono del reporte por indicación explícita de la guía de imágenes, y el usuario la reemplazó); `eje-2.jpg` mujer en contexto de producción agrícola rural; `eje-3.jpg` planta de procesamiento con trabajadores — las tres siguen la guía de `IMAGENES/LEEME.md`.

*Nota (2026-08-13, intento revertido): la primera integración de estas fotos las puso como miniatura de `clamp(84px, 16vw, 152px)` dentro de `.eje__head`, junto al ícono. El usuario la vio en el navegador y la rechazó ("quedó como una imagen diminuta en una esquina") — no aportaba el "dinamismo" que se buscaba. Se corrigió moviendo la foto a las tarjetas de filtro, con mucho más peso visual, siguiendo una referencia que el propio usuario señaló (`.obj-cover` de ace2040).*

### Cierre — "A considerar" (`#a-considerar`)
- **Componente (rediseñado 2026-08-13):** ya no reutiliza la tarjeta completa de `.intro` (fondo, borde, filo naranja) — el usuario pidió algo más sutil, "como un considerando", no una segunda tarjeta con el mismo peso visual que la introducción de apertura. `.intro--cierre` ahora solo trae un filo superior fino (`border-top: 1px solid var(--t-15)`) como separador, sin fondo ni acento naranja, texto en `--fs-sm`/`--t-70` (más discreto que el cuerpo normal) y la etiqueta `.intro__label` en gris (`--t-60`) en vez de naranja — el naranja se reserva para acción, y este bloque no lo es.
- **Contenido:** un único párrafo, texto real suministrado por el usuario (2026-08-13) sobre fiscalización, participación ciudadana y el llamado de la Presidenta a distintos sectores a aportar observaciones.

### Texto de enlace antes de Fortalecimiento Institucional (`.intro--lead-in`)
- **Qué es:** un párrafo corto, mismo componente `.intro` (tarjeta con fondo/borde/filo naranja) que la introducción de apertura, ubicado como primer elemento dentro de `#fortalecimiento` — anuncia lo que sigue: "Para alcanzar los objetivos establecidos en los ejes de la Agenda Legislativa, la Asamblea Nacional trabajará en procesos de fortalecimiento institucional, diplomacia y modernización:" (texto real del usuario, 2026-08-13).
- **Márgenes propios:** `margin-top: 0; margin-bottom: var(--s-5);` — a diferencia de la intro de apertura (que vive dentro de `.hero`, sin padding-top propio de sección), esta vive como primer hijo de una `.section` que ya trae su propio `padding-top: var(--s-section)`; un `margin-top` adicional habría duplicado el espacio (mismo bug de doble-padding ya documentado en Layout).

### Fortalecimiento Institucional (`.section-mark`)
- **Sección "Participación Ciudadana" retirada por completo (2026-08-13):** existía una sección `#participacion` ("Modernización de los Mecanismos de Participación Ciudadana", con una lista de solo 3 títulos). El usuario pidió quitarla — "no lo ven necesario". Se eliminó la sección completa del HTML y la clase `.titles-list` (sin más usos). El punto IV del documento fuente (Fortalecimiento Institucional) sigue siendo el único de esa familia de contenido en el reporte.
- **Eyebrow retirado (2026-08-13):** la sección tenía un `.section-mark__eyebrow` (kicker en mayúsculas, "Fortalecimiento institucional") arriba del `<h2>` — redundante con el propio `<h2>`, que ya dice lo mismo con más detalle. Se quitó el `<p>` y la regla `.section-mark__eyebrow` (sin más usos en el proyecto).
- **Tono editorial de `.section-mark__lead` (fix 2026-08-13):** el texto original describía a la Asamblea como un hecho ya cumplido ("Una Asamblea organizada y transparente..."), lo que sonaba a que Keyword estuviera haciendo una afirmación valorativa propia, o hablando como si fuera la Asamblea. Se reescribió con el mismo patrón de infinitivo-objetivo que ya usa `.eje__objetivo` ("Fortalecer la organización y transparencia de la Asamblea...") — reporta lo que la agenda se propone, no una afirmación sobre el estado actual. Aplica también a futuras ediciones: cualquier lead nuevo en `.section-mark` debe seguir ese mismo patrón de verbo-objetivo, no de descripción/juicio.

### Sin hyphenation (fix 2026-08-13)
`.intro p` y `.eje__objetivo` tenían `hyphens: auto` junto con `text-align: justify` (para evitar ríos de espacio en blanco). El usuario vio los guiones de corte de palabra a fin de línea y pidió quitarlos — "juguemos con espacios para que esté justificado pero sin ese recurso". Se quitó `hyphens: auto` de ambas reglas, se mantiene `text-align: justify`. El detector de Impeccable marca esto como advertencia (`justified-text` — espaciado irregular sin hyphenation); está en la lista de reglas ignoradas del proyecto porque es una decisión editorial explícita, no un descuido.

### Cita de cierre (`.closing-quote`)
- **Qué es:** última pieza del reporte, después de "A considerar" — una cita de Mishel Mancheno (Presidenta de la Asamblea Nacional), agregada 2026-08-13 a pedido del usuario, adaptando el componente `.voice` de ace2040 (foto circular + cita + autor) pero para una sola voz protagonista en vez de una grilla de varias.
- **Foto:** círculo de 104px con borde naranja de 2px (mismo tratamiento que `.voice__photo` de ace2040), `IMAGENES/MM.jpg` — retrato oficial provisto por el usuario.
- **Marca de cita:** una comilla grande decorativa en naranja sobre el texto (`::before`, mismo recurso que ace2040), sin comillas literales en el texto — la marca decorativa más el `<blockquote>`/`<footer>` semánticos ya comunican que es una cita.
- **Layout:** centrado, `max-width: 46rem`, a diferencia de la grilla de 3 columnas de ace2040 (ahí había tres voces institucionales distintas; aquí es un cierre de una sola voz, con más protagonismo).

### Banner de borrador retirado (2026-08-13)
Existía un `.wip-banner` naranja fijo arriba de todo ("BASE DE DISEÑO EN CONSTRUCCIÓN...") desde la primera versión del proyecto. Se quitó por completo (HTML + CSS) porque el reporte ya está en etapa final de revisión, no es un borrador.

### Navegación
- **Header:** sticky, fondo índigo profundo al 72% con blur, borde inferior `--t-10`. Solo logo + breadcrumb de texto — sin links de navegación adicionales aquí.
- **Índice de ejes retirado (2026-08-13):** existía una segunda barra sticky bajo el header con links a cada sección (`.home-nav`, con indicador deslizante animado). El usuario la calificó de "inmovilizada" y no útil, y pidió quitarla — con las tarjetas de filtro por eje (fotos + CTA "Ver eje") ya hay una forma más visual de saltar a cada sección, así que la barra de texto quedaba redundante. Se quitó por completo: HTML, CSS (`.home-nav*`) y el JS que la manejaba (`IntersectionObserver` + `moveIndicatorTo`/`setActiveLink`). `.section` bajó su `scroll-margin-top` de `header-h + 56px` a `header-h + 24px` porque ya no hay una segunda barra sticky que compensar.

## Do's and Don'ts

### Do:
- **Do** usar el naranja (`#FF863E`) exclusivamente para foco y acción — es el único color del sistema que significa "interactúa aquí".
- **Do** mantener los cinco acentos de eje como señalización de baja dosis (punto, borde, resplandor al 20%), nunca como relleno grande.
- **Do** resolver toda la jerarquía tipográfica con DM Sans + la rampa de opacidad de blanco — nunca introducir grises independientes ni una segunda familia tipográfica (probado y revertido, ver Typography).
- **Do** dar a cada superficie elevada un filo superior de luz (`--edge-hi` / `--inset-hi`) en vez de un borde duro.

### Don't:
- **Don't** rellenar un bloque completo con un color de eje — rompe la Regla de Señalización, No Papel Tapiz.
- **Don't** usar un color de eje para indicar que algo es clickeable — solo el naranja comunica interactividad.
- **Don't** introducir sombras duras con borde negro o gradiente morado-azul genérico — ninguno pertenece a este sistema.
- **Don't** anidar tarjetas dentro de tarjetas; las filas de proyecto de ley son intencionalmente más planas que las tarjetas de eje que las contienen, no una tarjeta más.
- **Don't** usar `repeating-linear-gradient`/`repeating-radial-gradient` como textura decorativa (franjas, marcas de agua) — es una firma reconocible de UI genérica de IA; se probó y se quitó en esta misma sesión.
- **Don't** elegir el recurso de "carácter visual" de un eje buscando qué ya existe en otro repo de Keyword — eso fue el error de esta sesión (dos veces). El recurso tiene que nacer de pensar en el contenido y la audiencia de *este* reporte.
