# Usability Report



<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF017nhV-TFmNER2OM8UbXtdN6xwAKBYrv0i6onNfKu6Yn0BV0RK6aiOroeXl73LSY-B0&usqp=CAU" alt="usability Download png" style="height:150px" />

### Evaluación de usabilidad del proyecto  Anime Ramen

27/05/2026

![Anime Ramen main page](https://github.com/manuelmartinz/UX_CaseStudy/blob/ae0057ca266068721956ea8a43eb000efb5f5dd5/img/anime_ramen.png)


https://github.com/DIU1PGDuo/UX_CaseStudy

### Realizado por:  

Manuel Martínez Herrera
Lola Lorite Díaz


 


## 1 RESUMEN EJECUTIVO  (Executive Summary)

[ Es la sección más importante para los interesados (stakeholders). Debe ocupar una sola página] .

- **Objetivo:** ¿Qué evaluamos y por qué?
- **Metodología:** Breve mención del A/B Testing, SUS y Eye Tracking.
- **Principales Hallazgos:** Los 3 puntos más críticos encontrados.
- **Resultado Global:** Puntuación SUS media y si el diseño es "Aceptable" o no.


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

[Aquí se muestran datos del análisis multivariable de SUS] 

- **Comparativa A vs. B:** Un gráfico de barras comparando la puntuación final de ambos diseños.
- **Desglose por ítems:** Identifica qué preguntas del SUS tuvieron peor puntuación (por ejemplo, si la pregunta 2 sobre "complejidad" fue muy alta en el Diseño B).

Valoración numérica del SUS - 


## 4. Análisis de Eye Tracking (Datos Biométricos)

[Presenta la evidencia visual del comportamiento del usuario]

- **Heatmaps (Mapas de calor):** Incluye las capturas de GazeMapping. Comenta si los usuarios miraron los **POI** (Puntos de Interés) definidos.
- **Zonas de Silencio:** Identifica elementos importantes que fueron totalmente ignorados.
- **Hallazgo clave:** Ejemplo: "El 80% de los usuarios ignoró el botón de CTA debido a su ubicación en el margen inferior".

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

No te limites a decir qué está mal; di cómo arreglarlo. Clasifica las recomendaciones por prioridad:

| **Prioridad**      | **Hallazgo**                                                 | **Recomendación de Mejora**                                  |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Alta (Crítica)** | Ej. El SUS indica alta complejidad y el Eye Tracking muestra confusión en el menú. | Simplificar la arquitectura de información y aumentar el tamaño de las fuentes. |
| **Media**          | Ej. Los usuarios no ven el botón de registro rápidamente.        | Cambiar el color del CTA a uno de mayor contraste según WCAG. |
| **Baja**           | Ej. El logo no redirige a la home.                               | Añadir el enlace estándar al logotipo en la cabecera.        |



