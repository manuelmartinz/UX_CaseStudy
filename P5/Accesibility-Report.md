# Accesibility Report (template)

<img src="https://img.uxcel.com/cdn-cgi/image/format=auto/practices/wcag-principles-overview-1742315821212/a-1742315821212-2x.jpg" alt="usability Download png" style="height:200px" />


## 1. Ficha Técnica del Informe

- **Nombre del proyecto:** Anime Ramen (Caso B - DIU1 PGDuo).
- **Normativa de referencia:** WCAG 2.2 (Nivel AA) / Norma UNE-EN 301549.
- **Herramientas utilizadas:** Lighthouse y WAVE.
- **Fecha de la auditoría:** 29/5/2026.

## 2. Puntuaciones Globales (Métricas Automáticas)

Tras ejecutar las auditorías automáticas en las páginas principales de la aplicación de Anime Ramen (Caso B), se han extraído los siguientes indicadores globales de cumplimiento:

- **Lighthouse Accessibility Score:** **88 / 100**
- **WAVE Summary:**
  * **Errores críticos:** 0 errores detectados.
  * **Errores de contraste:** Multiples advertencias por ratio de contraste bajo.
  * **Alertas:** 4 alertas principales detectadas (`No heading structure`, `No page regions` y 2 elementos `noscript`).
  * **Valoración AIM Score:** **9.9 / 10**

---

## 3. Análisis por Principios (POUR)

Para que el informe sea profesional, agrupamos los fallos detectados según los 4 principios fundamentales de la accesibilidad web:

<img src="https://cdn.sanity.io/images/r115idoc/production/e745ae232e5e6760c1392354021aed4eecc4627d-1920x1080.png" alt="usability Download png" style="height:200px" />

### A. Perceptible

* **Error detectado:** Contraste de color insuficiente en textos secundarios y descripciones de la carta.
* **Criterio WCAG incumplido:** Criterio 1.4.3 - Contraste mínimo (Nivel AA).
* **Impacto:** Los usuarios con visión baja, daltonismo o fatiga ocular severa experimentan dificultades para distinguir las letras del fondo, impidiéndoles leer correctamente las descripciones de los platos.
* **Recomendación de mejora:** Cambiar el color de las fuentes tipográficas grises por un tono oscuro de alta opacidad (como el negro puro o `#1A1A1A`) para asegurar un ratio de contraste superior a 4.5:1.

### B. Operable

* **Error detectado:** Falta de regiones estructurales de página (`No page regions`).
* **Criterio WCAG incumplido:** Criterio 2.4.1 - Evitar bloques (Nivel A).
* **Impacto:** Al no delimitarse las zonas del layout, los usuarios que navegan exclusivamente mediante el teclado o con tecnologías asistivas no pueden saltar los bloques de menús repetitivos para ir al grano, volviendo lenta la exploración.
* **Recomendación de mejora:** Implementar regiones accesibles envolviendo el código de la página web mediante etiquetas semánticas contenedoras: `<header>`, `<nav>`, `<main>` y `<footer>`.

### C. Comprensible

* **Error detectado:** Ausencia completa de estructura jerárquica de encabezados (`No heading structure`).
* **Criterio WCAG incumplido:** Criterio 1.3.1 - Información y relaciones (Nivel A) / Criterio 3.3.2 - Etiquetas o instrucciones.
* **Impacto:** El sitio web pierde el orden lógico de lectura. Los lectores de pantalla que asisten a personas con discapacidad visual no logran estructurar mentalmente las secciones, haciendo que la consulta de la carta resulte caótica.
* **Recomendación de mejora:** Añadir encabezados ordenados semánticamente con etiquetas HTML directas (`<h1>` para el título principal, `<h2>` para las categorías del menú de ramen y `<h3>` para los nombres de los platos individuales).

### D. Robusto

* **Error detectado:** Presencia de elementos `noscript` en el código fuente.
* **Criterio WCAG incumplido:** Criterio 4.1.2 - Nombre, función, valor (Nivel A).
* **Impacto:** WAVE identifica 2 elementos `noscript`. Si un usuario navega con soporte JavaScript desactivado por accesibilidad o seguridad, estos fragmentos pueden desplegar contenido alternativo poco claro o inconsistente que entorpece la lectura de los lectores de pantalla.
* **Recomendación de mejora:** Validar el HTML y garantizar que las etiquetas `<noscript>` contengan explicaciones accesibles o que el contenido principal permanezca perfectamente comprensible sin depender de scripts.

---

## 4. Tabla de Hallazgos y Prioridades

Organiza los errores técnicos de forma que el equipo sepa qué arreglar primero:

| **ID** | **Prioridad** | **Criterio WCAG** | **Error detectado** | **Recomendación Técnica** |
| :---: | :---: | :--- | :--- | :--- |
| **ACC-01** | **Alta** | 1.3.1 Info y relaciones | Ausencia de estructura semántica en títulos (`No heading structure`). | Añadir y ordenar los títulos de la página web utilizando las etiquetas de `<h1>` a `<h3>`. |
| **ACC-02** | **Alta** | 2.4.1 Evitar bloques | No se detectan regiones estructurales (`No page regions`). | Envolver la arquitectura web con las etiquetas nativas `<header>`, `<main>` y `<footer>`. |
| **ACC-03** | **Media** | 1.4.3 Contraste mínimo | Textos e indicadores de precio de la carta con bajo contraste tipográfico. | Incrementar la opacidad del color del texto gris hacia tonalidades más oscuras para legibilidad. |
| **ACC-04** | **Baja** | 4.1.2 Nombre, función, valor | Presencia de 2 elementos `noscript` que generan ruido estructural. | Auditar el código fuente para asegurar que el contenido alternativo no confunda a los lectores de pantalla. |

---





## 5. Conclusiones y Declaración de Conformidad

- **¿Es el sitio accesible?** El sitio web de **Anime Ramen** presenta un estado de accesibilidad general **muy positivo**, respaldado por una gran puntuación automática de **88/100 en Lighthouse** y un **AIM Score de 9.9/10 en WAVE** sin registrar errores críticos en su plataforma. Sin embargo, el sitio cumple únicamente **de forma parcial con el nivel AA** de las pautas WCAG 2.2. Esto se debe a que la ausencia de regiones de página y la falta de jerarquía semántica en los encabezados configuran barreras estructurales que dificultan la navegación a personas que dependen de tecnologías asistivas y lectores de pantalla.

- **Próximos pasos:**
  1. Refactorizar el esqueleto del código HTML5 para introducir las etiquetas contenedoras de regiones semánticas nativas (`<header>`, `<main>`, `<nav>`, `<footer>`).
  2. Reestructurar el árbol del DOM aplicando un orden rígido y natural a los títulos jerárquicos (de `<h1>` a `<h3>`) para organizar de forma comprensible el catálogo de platos.
  3. Ajustar los colores del texto de la carta mediante CSS para blindar permanentemente los ratios de contraste mínimo exigidos por la ley.










