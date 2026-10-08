# Web de Rochuchu — normas del proyecto

Web de autor de **Rochuchu** (cuentos ilustrados y libros para colorear). Enseña los libros y enlaza a Amazon; no vende nada.
Dirección: `https://cuentosrochuchu.github.io/` (GitHub Pages, repositorio `cuentosrochuchu/cuentosrochuchu.github.io`, rama `main`, carpeta raíz).
El plan completo está en `PLAN_WEB_ROCHUCHU.md` (no se publica). Lo pendiente, en `PENDIENTE.md`.

## Cómo hablar con Rochuchu
- En español, frases cortas y sencillas. No sabe programar: nada de pedirle que edite código ni escriba comandos.
- En la web nunca «el autor» ni «la autora»: siempre «Rochuchu».
- Enseñar antes de publicar. Pedir confirmación antes de cualquier paso público o irreversible.

## Lo que no se inventa
- Nada de reseñas, estrellas, premios, cifras de ventas, «el más vendido». Sin precios.
- Ningún dato de un libro (páginas, edad, argumento…) que no venga del plan o de Rochuchu. Edad desconocida → no se muestra.
- Títulos exactos, letra por letra (con tildes, mayúsculas y signos). Ojo: «Mia», sin tilde.
- Solo imágenes propias: portadas y logo. Sin logotipos de Amazon. Sin ilustraciones generadas.
- Contacto: no hay correo todavía → no hay sección «Contacto» ni opción en el menú.

## Reglas técnicas
- Web estática: HTML, un `css/estilos.css` y un `js/principal.js`. Sin frameworks, sin compilación, sin Node.
- Debe funcionar con doble clic en `index.html` y publicada: rutas relativas (nunca empiezan por `/`), enlaces a archivos (`en/index.html`, no `en/`), sin `fetch()` ni `type="module"`.
- Nada de terceros al cargar: fuentes en `fuentes/`, sin CDN, sin analítica, sin cookies.
- Sin JavaScript todo se ve; el JS solo añade los filtros (`aria-pressed`) y el menú del móvil.
- Nombres de archivo en minúsculas, sin tildes, sin ñ, sin espacios, con guiones.
- No hay plantillas: cabecera y pie se repiten en cada página. Si se cambian, cambiarlos en TODAS (18 páginas).
- Amazon: `target="_blank" rel="noopener"` + `<span class="oculto"> (se abre en otra pestaña)</span>`. Español → `https://www.amazon.es/dp/ASIN`. Inglés → dos botones, Amazon.com y Amazon.es, mismo ASIN. Enlaces NO de afiliado.
- Colores (`:root`), contraste ≥ 4,5:1; `--oro` nunca como texto sobre fondo claro (usar `--oro-oscuro`). El texto del cielo solo sobre el tramo oscuro.
- Móvil primero: comprobar 360, 768 y 1280 px, sin desplazamiento horizontal. Botones de 44 px de alto como mínimo.
- Direcciones completas (canónicas, Open Graph, sitemap, 404) con `https://cuentosrochuchu.github.io/`. `404.html` usa direcciones completas en todo.

## Carpetas
- `index.html` portada española · `libros/` 10 páginas de libros en español · `en/` portada inglesa + 4 libros en inglés
- `aviso-legal.html`, `404.html`, `sitemap.xml`, `robots.txt`, `.nojekyll`
- `google8ff268addb5f9b82.html`: verificación de Google Search Console. No borrarlo nunca.
- `img/portadas/ID-480.webp` portadas de la web · `img/compartir/ID.jpg` imagen para compartir de cada libro · `img/compartir.jpg` (1200×630) de las portadas · `img/logo.png`, `img/icono-32.png`, `img/icono-180.png`
- No se publican (`.gitignore`): `portadas/` (originales, no tocar), `PLAN_WEB_ROCHUCHU.md`, `PENDIENTE.md`, `boceto-*.jpg`, `.claude/`

## Añadir un libro nuevo
1. Portada: de `portadas/` a `img/portadas/ID-480.webp` (si mide > 960 px, hacer 480 y 960 en WebP calidad ~80 con `srcset`; si no, copiar tal cual). < 150 KB. Y `img/compartir/ID.jpg`.
2. Página propia `libros/ID.html` (o `en/ID.html`): copiar una existente del mismo tipo y cambiar todo: `<title>`, descripción, canónica, Open Graph, JSON-LD `Book`, migas, ficha, botones, textos, temas, datos, «Más libros».
3. Estantería de `index.html` (o `en/index.html`) con `data-etiquetas` (`cuento`, `colorear`, `perritos`), en el orden que diga Rochuchu.
4. Si es de Los Perritos del Mundo: añadirlo a la colección de la portada y a los «Más libros» de los otros perritos. Si encaja, a «¿Qué cuento necesitas hoy?».
5. Si tiene pareja en el otro idioma: enlace «También disponible en…» en las dos páginas y `hreflang` en las dos.
6. Añadirlo a `sitemap.xml`.
7. Revisar: capturas a 360/768/1280, enlaces rotos, títulos exactos. Enseñar a Rochuchu antes de publicar.

## Publicar
Git está en esta carpeta, conectado a `https://github.com/cuentosrochuchu/cuentosrochuchu.github.io.git`.
Git es la versión portátil y no está en el PATH: `& "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe" …`. Autor de los commits: «Rochuchu» con el correo noreply de GitHub (nunca un correo personal).
Cuando Rochuchu diga «Publica los cambios en GitHub»: `git add -A`, commit con mensaje en español, `git push`. GitHub Pages tarda unos minutos. Después, abrir la web publicada y comprobarla.
