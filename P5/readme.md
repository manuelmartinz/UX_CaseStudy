# Practica 5: Exportación + Documentación - entregables 
* **Caso Asignado (B):** [DIU1 PGDuo - Rakuin Ramen](https://github.com/DIU1PGDuo/UX_CaseStudy.git)

## 5.1. Plan de reclutamiento de participantes

Para la realización de estas pruebas, hemos seguido un modelo de entre-sujeto con una muestra de 10 usuarios distintos (distribuidos en 5 para el Caso A y 5 para el Caso B) para permitir un análisis comparativo robusto.

El muestreo combina perfiles de co-evaluación (grupo de clase) y usuarios externos independientes para mitigar sesgos de aprendizaje.

**Tabla de Usuarios**

| ID | Sexo/Edad | Ocupación | Competencia Digital (Exp. TIC) | Personalidad | Plataforma | Caso | Factores Técnicos (Gafas/Luz) |
| :---: | :---: | :--- | :---: | :--- | :---: | :---: | :--- | :--- |
| **P01** | H / 43 | Administrativo | Media | Práctico | Web | **B** | Gafas / Luz artificial |
| **P02** | M / 29 | Analista de datos | Alta | Creativa | Web | **B** | Ninguno / Luz artificial |
| **P03** | H / 53 | Profesor | Media | Analítico | Web | **A** | Lentillas / Luz artificial |
| **P04** | M / 44 | Trabajadora autónoma | Media | Observadora | Web | **A** | Gafas / Luz natural |
| **P05** | H / 20 | Estudiante Ing. Informática | Alta | Introvertido | Web | **B** | Gafas / Luz artificial |
| **P06** | M / 21 | Estudiante Ing. Informática | Alta | Creativa | Web | **A** | Ninguno / Luz artificial |
| **P07** | H / 33 | Ingeniero Agrónomo | Media | Intuitivo | Web | **B** | Gafas / Luz natural |
| **P08** | H / 21 | Estudiante Ing. Informática | Alta | Activo | Web | **B** | Ninguno / Luz artificial |
| **P09** | M / 67 | Jubilada | Baja | Tranquila | Web | **A** | Gafas / Luz natural tenue |
| **P10** | H / 19 | Estudiante Ing. Informática | Media | Curioso | Web | **A** | Ninguno / Luz artificial |

Las pruebas se han realizado en un portátil de 14".

---

## 5.2. Diseño de la prueba mediante: Eye Tracking
Para capturar la atención biométrica se configuró la herramienta **GazeMapping** (`webgazer.js`), rasterizando los estados clave de las interfaces en imágenes de alta resolución mediante la extensión de Chrome *FireShot*.

### Diseño de las Pruebas
Hemos diseñado cuatro tareas críticas que los usuarios deberán resolver:
1. **Encuentra el enlace a Instagram del restaurante desde la página principal**
   * Escenario planteado: "Estás buscando opiniones y fotos de los platos del restaurante antes de decidir si ir. Intenta localizar el enlace oficial a la cuenta de Instagram desde la página principal."
   * Localización: footer.
   * Objetivo: Ver si los usuarios son capaces de descubrir en qué lugar de la página se encuentran los enlaces a redes sociales.
2. **Encuentra el precio de algún producto de la carta** Se encuentran en las tarjetas de los productos de la carta.
   * Escenario planteado: "Estás navegando por la página, decidiendo qué pedir y buscas el precio de algún producto concreto."
   * Localización: Tarjetas de producto de la carta.
   * Objetivo: Validar el diseño de los componentes de la carta. Se analiza si el precio destaca lo suficiente dentro de la tarjeta o si sufre de ceguera visual frente a la fotografía y el nombre del plato.
3. **Encuentra la ubicación del local**
   * Escenario planteado: "Has estado mirando la carta y te ha convencido el local. Buscas la ubicación para ver cómo de cerca te pilla."
   * Localización: Bloque inferior de la página principal (Homepage).
   * Objetivo: Verificar si la información de contacto y geolocalización es fácil de encontrar mediante un escaneo rápido de la página de inicio o si compite visualmente con otros elementos decorativos.
4. **Encuentra el botón "RESERVAR"**
   * Escenario planteado: "Te has decidido por ir y quieres reservar una mesa para ir con tus amigos. Encuentra la vía más rápida para iniciar el proceso de reserva online desde la pantalla en la que te encuentras.
   * Localización: Barra de navegación superior (Header) y página principal.
   * Objetivo: Comprobar la efectividad del Call To Action (CTA) principal.

### Definición de Puntos de Interés (POI / AOI)
Se monitorizaron mediante zonas de fijación específicas:
* El logo
* Los botones "INICIO", "CARTA" y "RESERVA" del header.
* Los enlaces del footer.
* Los apartados de la carta.

A continuación se muestran los resultados obtenidos en las pruebas de Eye Tracking:

| Prueba | P02 | P05 | P07 |
| :---: | :---: | :---: | :---: |
| **Encontrar el enlace a instagram** | ![HeatMap de buscar Instagram](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P02/buscar_instagram.png) | ![HeatMap de buscar Instagram](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P05/buscar_instagram.png) | ![HeatMap de buscar Instagram](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P07/buscar_instagram.png) |
| **Encontrar el precio de un producto** | ![HeatMap de buscar precio](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P02/buscar_precio.png) | ![HeatMap de buscar precio](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P05/buscar_precio.png) | ![HeatMap de buscar precio](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P07/buscar_precio.png) |
| **Encontrar la ubicación del local** | ![HeatMap de buscar ubicación](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P02/buscar_ubicacion.png) | ![HeatMap de buscar ubicación](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P05/buscar_ubicacion.png) | ![HeatMap de buscar ubicación](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P07/buscar_ubicacion.png) |
| **Encontrar el botón de reservar** | ![HeatMap de buscar botón reserva](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P02/buscar_reserva.png) | ![HeatMap de buscar botón reserva](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P05/buscar_reservar.png) | ![HeatMap de buscar botón reserva](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P07/buscar_reservar.png) |




- Exportación a HTML/React
- Documentación con Storybook
- Autoevaluacion del diseño 
Puntos fuertes y de mejora relativos a los criterios de accesibilidad de tu diseño
- Conclusiones


>>>> Este fichero se debe editar para que cada evidencia quede enlazada con el recurso subido a la carpeta de la practica. Se pide más detalle técnico en las descripciones de lo que sería el README principal del repositorio y que corresponde a la descripcion del Case Study.
>>>> Termine con la seccion de Conclusiones para aportar una valoración final del equipo sobre la propia realización de la práctica



Protocolos de adaptación:

Optimización de Eye Tracking: Si por limitaciones temporales o técnicas no fuera posible realizar el seguimiento ocular a toda la muestra, se priorizará esta prueba para un mínimo de 3 usuarios clave, garantizando así datos cualitativos suficientes para el análisis visual. Cualquier reducción en la muestra será debidamente justificada en el informe final. Tablas de datos: Recuerda que si un usuario evalúa A y B, sus respuestas en el SUS pueden estar sesgadas por la fatiga o por haber aprendido de la primera web. Asegúrate de que la mitad de esos usuarios pruebe primero la A y la otra mitad primero la B (Contrabalanceo).


2. [Diseño de la prueba mediante: Eye Tracking]
En esta fase utilizaremos GazeMapping, una herramienta de desarrollo propio que permite realizar evaluaciones de seguimiento ocular sobre elementos visuales estáticos. Este análisis es fundamental para validar la jerarquía visual y la ubicación de elementos críticos mediante el estudio de Zonas de Interés (AOI/POI).


heatmap	



Áreas de Interés (POI)
3. [Evaluación caso A o B]
Finalmente se completa estudio con el uso del sitio real por parte del usuario, dando indicaciones acerca de alguna tarea a realizar (reserva un producto, consulta horario...). Puede ser supervisada (se le da apoyo para hacer tareas) o no supervisada. En cualquier caso, se deberá indicar si ha necesitado ayuda par completar tareas. Duración entre 5-10 min aproximadamente.

4. [Escala SUS: Cuestionario]
Finalizada la evaluación por parte del usuario, debe rellenar el cuestionario SUS. El cuestionario está disponible en https://tally.so/. se puede usar la siguiente plantilla: https://tally.so/templates/escala-sus-test-de-usabilidad/wAyNNw

Configuración del cuestionario , se puede hacer una copia del cuestionario y amplíar con preguntas demograficas comentadas en apartado 1 (reclutamiento) y que se pueden añadir al final del cuestionario.
Rellenar datos por parte del usuario. Es importante que entienda claramente cómo responder al cuestionario.
Análisis de resultados con SUS tools https://sus.tools/. Los datos JSON de los usuarios se pegan directamente en la herramienta https://sus.mixality.de/ como análisis multivariable (https://sus.mixality.de/) y se extraen conclusiones.
PREGUNTAS	1	2	3	4	5
1	Creo que me gustará visitar con frecuencia este website					
2	Encontré el website innecesariamente complejo					
3	Pensé que era fácil utilizar este website					
4	Creo que necesitaría del apoyo de un experto para recorrer el website					
5	Encontré las funciones del website bastante bien integradas					
6	Pensé que había demasiada inconsistencia en el website					
7	Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website					
8	Encontré el website muy grande al recorrerlo					
9	Me sentí muy confiado en el manejo del website					
10	Necesito aprender muchas cosas antes de manejarse en el website					
Información de cómo usar la escala SUS e interpretar los resultados (pasar a escala linguística): http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/

[5. Evaluación de Accesibidad]
Finalizaremos con un estudio de accesibilidad del caso B. Para incluir un informe de accesibilidad basado en herramientas automáticas y normativas de forma profesional teniendo en cuenta el cumplimiento técnico (relacionado con la forma de diseñar el software) y de la normativa legal (las pautas WCAG).

El marco normativo para la web, el estándar es el WCAG (Web Content Accessibility Guidelines).

Nivel de conformidad: Generalmente se busca el AA (el estándar legal para sitios públicos y empresas), Versión WCAG 2.1 o 2.2. Referencia: norma UNE-EN 301549
Para realizar el análisis usaremos Herramientas Automáticas (debermos indicarlo en informe) como

Lighthouse (Google): Para una puntuación rápida de accesibilidad.
WAVE (Web Accessibility Evaluation Tool): Excelente para errores visuales y de contraste.
El informe deberá organizar los resultados en esta 4 categorias:

Categoría	Qué analizar (Ejemplos)
Perceptible	Contraste de colores, texto alternativo en imágenes (alt), subtítulos.
Operable	Navegación por teclado, tiempo suficiente para leer, evitar destellos.
Comprensible	Idioma de la página definido, formularios claros, errores fáciles de corregir.
Robusto	Código limpio (HTML válido) para que los lectores de pantalla funcionen.
Un ejemplo de resultado sería:

Perceptible:
Error detectado: Falta de contraste en el botón de reservar.
Criterio WCAG incumplido: "Criterio 1.4.3 - Contraste mínimo".
Impacto: "Los usuarios con visión baja no pueden identificar la acción principal".
Recomendación de mejora: "Cambiar el color del texto de gris claro a negro (#000000)".
El informe debería dar una valoracion general de accesibilidad e incluir al menos 2-3 resultados identificados y clasificados adecuadamente.

[6 USABILITY REPORT]
Usar la plantilla Usability-report-template y completar los resultados para el CASO B siguiendo este formato recomendado

Resumen ejecutivo (Executive Summary)
Metodología y Reclutamiento
Resultados del Cuestionario SUS (Datos Cuantitativos)
Análisis de Eye Tracking (Datos Biométricos)
Auditoría de Accesibilidad
Conclusiones y Recomendaciones (Actionable Insights)
Más información: 

25 puntos clave de la usabilidad https://boluda.com/tutorial/25-puntos-clave-de-la-usabilidad/ 
Resumen de herramientas usadas:
Tally.so Cuestionarios online y SUS https://tally.so/

Plantilla de cuestionario SUS: https://tally.so/templates/escala-sus-test-de-usabilidad/wAyNNw
GazeMapping Eye tracking https://github.com/mgea/gazemapping

FireShot, extensión de Chrome para captura de imágenes de sitios web https://chromewebstore.google.com/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg?hl=es

SUS tools Análisis de resultados de escala SUS https://sus.tools/

Lighthouse extensión de Chrome para accesibildad. https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es

**WAVE ** Web Accessibility Evaluation Tools https://wave.webaim.org/

