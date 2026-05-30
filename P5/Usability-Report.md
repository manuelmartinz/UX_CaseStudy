# Usability Report



<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF017nhV-TFmNER2OM8UbXtdN6xwAKBYrv0i6onNfKu6Yn0BV0RK6aiOroeXl73LSY-B0&usqp=CAU" alt="usability Download png" style="height:150px" />

### Evaluación de usabilidad del proyecto  Anime Ramen

27/05/2026

![Anime Ramen main page](https://github.com/manuelmartinz/UX_CaseStudy/blob/ae0057ca266068721956ea8a43eb000efb5f5dd5/img/anime_ramen.png)


* **Repositorio del proyecto co-evaluado:** [PGDuo](https://github.com/DIU1PGDuo/UX_CaseStudy)
* **Sitio web:** [Enlace a figma](https://hide-eject-71993137.figma.site/)

### Realizado por:  

* Manuel Martínez Herrera
* Lola Lorite Díaz

----

## 1 RESUMEN EJECUTIVO  (Executive Summary)

- **Objetivo:** Este informe evalúa la usabilidad y accesibilidad de la plataforma web de restauración **Anime Ramen** (Caso B) con el fin de verificar la eficacia de sus flujos de navegación y garantizar una experiencia de usuario óptima antes de su despliegue final.

<br>

- **Metodología:** Se ha implementado un enfoque de pruebas de usabilidad mixtas. Las métricas cuantitativas de percepción se obtuvieron mediante el cuestionario estandarizado **SUS** (System Usability Scale) y formularios en Tally.so. Los datos cualitativos biométricos se recopilaron a través del análisis de mapas de calor visuales con la herramienta de Eye Tracking **GazeMapping**. Finalmente, el cumplimiento técnico se validó con las herramientas de accesibilidad automática **Lighthouse** y **WAVE** bajo las directrices WCAG 2.2 Nivel AA.

<br>

- **Principales Hallazgos:** Los 3 puntos más críticos encontrados.
  1. *Falta de limpieza visual en elementos críticos:* Los mapas de calor demuestran una fijación muy dispersa en la Home debido a que los fondos texturizados e imágenes secundarias compiten con los botones de acción primarios (*Call To Action*).
  2. *Ceguera visual periférica en la carta:* Al consultar el menú, la atención visual de los usuarios es acaparada por las imágenes de los platos, sufriendo un retraso en la localización de los precios y los títulos debido a su reducido tamaño tipográfico.
  3. *Ausencia de marcas de navegación semántica:* El análisis automático de accesibilidad reporta una falta crítica de regiones estructurales (`<header>`, `<main>`, `<footer/>`) y de jerarquía de encabezados, impidiendo una navegación por teclado accesible.

<br>

- **Resultado Global:** La puntuación media SUS obtenida por Anime Ramen es de **81.0 / 100**. Este resultado sitúa al diseño dentro de la franja de **Aceptable (Clasificación A / Excelente)**. Aunque es una interfaz altamente usable, requiere correcciones de diseño visual para consolidar la fluidez de sus interacciones.


## 2. Metodología y Reclutamiento

Para la realización del estudio de usabilidad se siguió una metodología basada en evaluación con usuarios reales, combinando técnicas cuantitativas y cualitativas con el objetivo de analizar la experiencia de usuario del sistema y detectar posibles mejoras de diseño y accesibilidad.

## Perfil de los participantes

La muestra estuvo compuesta por un total de 10 participantes distribuidos entre los casos A y B del experimento. Los usuarios presentaban perfiles variados en cuanto a edad, experiencia tecnológica y conocimientos previos, permitiendo obtener resultados más diversos y representativos.

La edad de los participantes osciló entre los 19 y los 67 años, obteniéndose una edad media aproximada de 35 años. Respecto al nivel de competencia digital, predominaban usuarios con experiencia media y alta en el uso de aplicaciones web y herramientas tecnológicas, aunque también se incluyó un perfil con nivel bajo para evaluar la accesibilidad y facilidad de aprendizaje del sistema en usuarios menos experimentados.

Entre los perfiles participantes se encontraban principalmente estudiantes de Ingeniería Informática, además de otros perfiles como administrativos, profesores, trabajadores autónomos, ingenieros agrónomos y personas jubiladas. Esto permitió analizar el comportamiento del sistema desde diferentes perspectivas de uso y familiaridad tecnológica.

## Escenario de la prueba

Cada participante interactuó con alguno de los dos diseños evaluados (Caso A o Caso B) siguiendo un pequeño conjunto de tareas orientadas a simular un uso real de la aplicación.

La duración aproximada de cada sesión fue de 5 minutos. Tras completar las tareas, los participantes rellenaron el cuestionario SUS para valorar subjetivamente la usabilidad del sistema.

## Herramientas utilizadas

Para el desarrollo de la investigación se utilizaron distintas herramientas de evaluación UX:

- **GazeMapping**: utilizado para realizar pruebas de Eye Tracking y generar mapas de calor sobre las zonas de interés de la interfaz, permitiendo analizar la atención visual y el recorrido de los usuarios.

- **Tally.so**: empleado para la creación y recopilación de respuestas del cuestionario SUS y de los datos demográficos de los participantes.

- **Lighthouse** y **WAVE**: herramientas automáticas utilizadas para la auditoría de accesibilidad del sistema, permitiendo detectar problemas relacionados con contraste, estructura semántica, nombres accesibles y cumplimiento de las recomendaciones WCAG 2.1.

## 3. Resultados del Cuestionario SUS (Datos Cuantitativos)

Tras procesar los datos de las respuestas individuales y neutralizar las inversiones de polaridad en las preguntas pares, los resultados estadísticos promediados de la escala System Usability Scale (SUS) reflejan la siguiente situación:

### Comparativa General A vs. B
* **Caso A (Goiko):** **88.0 / 100** | Grado: Aceptable | Clasificación: **A**
* **Caso B (Anime Ramen):** **81.0 / 100** | Grado: Aceptable | Clasificación: **A**

### Desglose por Ítems y Debilidades
El análisis multivariable revela que las preguntas con peor puntuación en el **Caso B (Anime Ramen)** se concentraron en los siguientes ítems:
* **Pregunta 2 (Complejidad percibida):** Los usuarios P02, P07 y P08 anotaron una puntuación superior a la media en este control de inconsistencia. Ello indica que percibieron ciertas zonas de la navegación web con una sobrecarga visual innecesaria.
* **Pregunta 4 (Necesidad de soporte técnico):** Se experimentó una caída de rendimiento en el participante P02 (marcando un valor de 3), originada por la dificultad para encontrar de manera directa los enlaces de contacto e información de cierre en el footer.

A pesar de estas pequeñas desviaciones, el 81.0 de media global confirma que la estructura de la aplicación es sólida y se encuentra muy por encima del aprobado estándar de usabilidad (68 puntos).

Diagrama comparativo sobre la media de las respuestas a las cuestiones:
![Diagrama comparativo caso A-B](https://github.com/manuelmartinz/UX_CaseStudy/blob/53fb3718b16dd379fe8862ad66471d58855adc5d/img/chart.png)

Diagrama sobre la puntuación obtenida del caso B de cada participante:
![Diagrama puntuaciones caso B](https://github.com/manuelmartinz/UX_CaseStudy/blob/cfe407c57a21a2026d8753f50c638288227a27d2/img/chart%20(1).png)


## 4. Análisis de Eye Tracking (Datos Biométricos)

El análisis cualitativo basado en los mapas de calor (*Heatmaps*) obtenidos mediante la monitorización visual con **GazeMapping** a los participantes P02, P05 y P07 ha permitido identificar cómo procesan cognitivamente la interfaz de Anime Ramen:

* **Fijación e Impacto en los Puntos de Interés (POI):** Al analizar las zonas calientes del menú de la página principal, se observa una alta fijación en los elementos gráficos decorativos de estética anime y en los fondos con texturas secundarias. Esto compite de manera directa con la atención requerida por el botón "RESERVAR" (Header) y la sección de ubicación (Footer), generando fijaciones visuales muy dispersas en lugar de un escaneo directo y fluido.
* **Zonas de Silencio:** Durante las pruebas en la sección de la Carta, los números correspondientes a los **precios de los productos** y las descripciones de los ingredientes actuaron como áreas de silencio visual durante los primeros segundos. La mirada se dirige de forma prioritaria y masiva hacia las fotografías de los platos de ramen.
* **Hallazgo clave:** Existe un marcado fenómeno de **ceguera visual periférica** en las tarjetas de producto. Debido a que el tamaño de la tipografía de los precios es reducido y su color tiene un contraste bajo con el fondo, el ojo del usuario experimenta un retraso notable en su localización, viéndose obligado a realizar una búsqueda activa en lugar de percibirlos de manera intuitiva.

---

## 5. Auditoría de Accesibilidad

## Resultados obtenidos

### Lighthouse
Lighthouse obtuvo una puntuación de accesibilidad de **88/100**. Los principales problemas detectados fueron:
- Botones sin nombre accesible.
- Problemas de contraste entre texto y fondo.

### WAVE
WAVE obtuvo un **AIM Score de 9.9/10** y no detectó errores críticos. Sin embargo, mostró 4 alertas:
- No heading structure.
- No page regions.
- 2 elementos `noscript`.

## Problemas detectados

### 1. Botones sin nombre accesible

- Herramienta: Lighthouse
- Categoría: Robusto
- Criterio WCAG: 4.1.2 Name, Role, Value
- Problema: Algunos botones no tienen un nombre accesible.
- Impacto: Un lector de pantalla podría leer solo “botón”, sin explicar su función.
- Recomendación: Añadir texto descriptivo o atributos `aria-label`.

### 2. Contraste insuficiente

- Herramienta: Lighthouse
- Categoría: Perceptible
- Criterio WCAG: 1.4.3 Contraste mínimo
- Problema: Algunos textos y botones no tienen suficiente contraste con el fondo.
- Impacto: Puede dificultar la lectura a usuarios con baja visión.
- Recomendación: Aumentar el contraste entre texto y fondo.

### 3. Falta de estructura de encabezados

- Herramienta: WAVE
- Categoría: Comprensible
- Problema: WAVE detecta `No heading structure`.
- Impacto: La página pierde jerarquía semántica y puede ser más difícil de navegar con lector de pantalla.
- Recomendación: Añadir encabezados ordenados como `h1`, `h2`, `h3`.

### 4. Falta de regiones de página

- Herramienta: WAVE
- Categoría: Robusto / Operable
- Problema: WAVE detecta `No page regions`.
- Impacto: Los usuarios de tecnologías asistivas no pueden saltar fácilmente entre zonas como header, main o footer.
- Recomendación: Usar etiquetas semánticas como `header`, `main`, `nav`, `section` y `footer`.

## 6. Conclusiones y Recomendaciones (Actionable Insights)

Para transformar las debilidades detectadas en mejoras tangibles de negocio y usabilidad para la plataforma de **Anime Ramen**, se estructuran las siguientes soluciones de rediseño técnico ordenadas por su nivel de prioridad:

| **Prioridad** | **Hallazgo Técnico / Biométrico** | **Recomendación de Mejora (Solución)** |
| :--- | :--- | :--- |
| **Alta (Crítica)** | El Eye Tracking muestra fijaciones caóticas y dispersas por la Home debido a la interferencia de fondos de diseño anime con los CTA. Los precios de los platos sufren retraso de lectura por tipografía demasiado reducida. | **Limpieza Visual y Jerarquía:** Aumentar el tamaño de la fuente de los precios a un mínimo de 16px en estilo negrita. Eliminar o suavizar las texturas de fondo que entorpecen los bloques interactivos para que el botón "RESERVAR" destaque inmediatamente. |
| **Media** | Las auditorías automáticas de Lighthouse detectan botones iconográficos vacíos sin un nombre accesible (`Criterio 4.1.2`) y deficiencias en las relaciones de contraste tipográfico en pantallas (`Criterio 1.4.3`). | **Correcciones de Accesibilidad AA:** Modificar las variables de color CSS del menú para oscurecer el texto gris de las descripciones a un tono contrastado (#1A1A1A). Incorporar la propiedad descriptiva `aria-label` en todo botón basado en iconos. |
| **Baja** | WAVE genera alertas de falta de regiones (`No page regions`) y de desorden estructural en los títulos de contenido (`No heading structure`) junto a 2 etiquetas `<noscript>`. | **Refactorización Semántica:** Reestructurar el árbol de componentes sustituyendo los bloques genéricos por etiquetas contenedoras nativas de HTML5 (`<header>`, `<main>`, `<footer>`) y anidar coherentemente los encabezados de `<h1>` a `<h3>`. |

