# Practica 5: Exportación + Documentación - entregables 
* **Caso Asignado (B):** [DIU1 PGDuo - Anime Ramen](https://github.com/DIU1PGDuo/UX_CaseStudy.git)

## 5.1. Plan de reclutamiento de participantes

Para la realización de estas pruebas, hemos seguido un modelo de entre-sujeto con una muestra de 10 usuarios distintos (distribuidos en 5 para el Caso A y 5 para el Caso B) para permitir un análisis comparativo robusto.

El muestreo combina perfiles de co-evaluación (grupo de clase) y usuarios externos independientes para mitigar sesgos de aprendizaje.

**Tabla de Usuarios**

| ID | Sexo/Edad | Ocupación | Competencia Digital (Exp. TIC) | Personalidad | Plataforma | Caso | Factores Técnicos (Gafas/Luz) |
| :---: | :---: | :--- | :---: | :--- | :---: | :---: | :--- |
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
1. **Encontrar el enlace a Instagram del restaurante desde la página principal**
   * **Escenario planteado**: "Estás buscando opiniones y fotos de los platos del restaurante antes de decidir si ir. Intenta localizar el enlace oficial a la cuenta de Instagram desde la página principal."
   * **Localización**: footer.
   * **Objetivo**: Ver si los usuarios son capaces de descubrir en qué lugar de la página se encuentran los enlaces a redes sociales.

<br>

2. **Encontrar el precio de algún producto de la carta** 
   * **Escenario planteado**: "Estás navegando por la página, decidiendo qué pedir y buscas el precio de algún producto concreto."
   * **Localización**: Tarjetas de producto de la carta.
   * **Objetivo**: Validar el diseño de los componentes de la carta. Se analiza si el precio destaca lo suficiente dentro de la tarjeta o si sufre de ceguera visual frente a la fotografía y el nombre del plato.

<br>

3. **Encontrar la ubicación del local**
   * **Escenario planteado**: "Has estado mirando la carta y te ha convencido el local. Buscas la ubicación para ver cómo de cerca te pilla."
   * **Localización**: Bloque inferior de la página principal (Homepage).
   * **Objetivo**: Verificar si la información de contacto y geolocalización es fácil de encontrar mediante un escaneo rápido de la página de inicio o si compite visualmente con otros elementos decorativos.

<br>

4. **Encontrar el botón "RESERVA"**
   * **Escenario planteado**: "Te has decidido por ir y quieres reservar una mesa para ir con tus amigos. Encuentra la vía más rápida para iniciar el proceso de reserva online desde la pantalla en la que te encuentras."
   * **Localización**: Barra de navegación superior (Header) y página principal.
   * **Objetivo**: Comprobar la efectividad del Call To Action (CTA) principal. 

<br>

### Definición de Puntos de Interés (POI / AOI)
Se monitorizaron mediante zonas de fijación específicas:
* El logo
* Los botones "INICIO", "CARTA" y "RESERVA" del header.
* Los enlaces del footer.
* El precio y el nombre de los productos de la carta.
* Los apartados de la carta.

<br>
<br>

A continuación se muestran los resultados obtenidos en las pruebas de Eye Tracking:

| Prueba | P02 | P05 | P07 |
| :---: | :---: | :---: | :---: |
| **Encontrar el enlace a instagram** | ![HeatMap de buscar Instagram](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P02/buscar_instagram.png) | ![HeatMap de buscar Instagram](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P05/buscar_instagram.png) | ![HeatMap de buscar Instagram](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P07/buscar_instagram.png) |
| **Encontrar el precio de un producto** | ![HeatMap de buscar precio](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P02/buscar_precio.png) | ![HeatMap de buscar precio](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P05/buscar_precio.png) | ![HeatMap de buscar precio](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P07/buscar_precio.png) |
| **Encontrar la ubicación del local** | ![HeatMap de buscar ubicación](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P02/buscar_ubicacion.png) | ![HeatMap de buscar ubicación](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P05/buscar_ubicacion.png) | ![HeatMap de buscar ubicación](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P07/buscar_ubicacion.png) |
| **Encontrar el botón de reservar** | ![HeatMap de buscar botón reserva](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P02/buscar_reserva.png) | ![HeatMap de buscar botón reserva](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P05/buscar_reservar.png) | ![HeatMap de buscar botón reserva](https://github.com/manuelmartinz/UX_CaseStudy/blob/86387e8a0d9f4bdc8ab2458ae9e6255afd2675e6/P5/Eye%20Tracking/P07/buscar_reservar.png) |

---

## 5.3. Evaluación caso B
Por limitaciones de la aplicación utilizada para el Eye Tracking, las pruebas solo se han podido realizar a tres de los participantes involucrados en la evaluación de la página.

Aun así, los participantes han completado todas las tareas sin ningún tipo de asistencia.

El mapa de calor resultante muestra un patrón de fijación altamente disperso. Al buscar el botón "RESERVAR" en el header (Tarea 4) o la dirección en el footer (Tarea 3), la mirada de los usuarios se detuvo de manera caótica en elementos puramente decorativos de la web, como los fondos texturizados o las imágenes secundarias. Aunque acabaron localizando los elementos de conversión de forma autónoma, el elevado número de saltos de la mirada demuestra una falta de limpieza visual que compite directamente con los Call to Action (CTA).

En el análisis de la Carta (Consulta de Precios - Tarea 2), al observar el POI de las tarjetas de los platos, la atención visual se centra casi por completo en las fotografías de la comida. El precio del producto sufre de un ligero retraso en la primera fijación, lo que confirma que, aunque los usuarios encuentran el coste sin ayuda, el diseño actual genera distracción periférica.

---

## 5.4. Escala SUS: Cuestionario
Inmediatamente después de interactuar con los sitios web, los datos de percepción subjetiva se recolectaron de forma individual mediante formularios en **Tally.so** y se procesaron estadísticamente a través de la suite multivariable **SUS Analysis Toolkit**.

* **Plantilla base utilizada:** [Tally SUS Template](https://tally.so/templates/escala-sus-test-de-usabilidad/wAyNNw)
* **Dataset Bruto en CSV:** [Consultar datos](https://github.com/manuelmartinz/UX_CaseStudy/blob/d4e7b5098c62261394ecc80b05cf2e30e3c67fbe/P5/Escala%20SUS%20(test_usabilidad).xlsx)

Este cuestionario consta de 10 preguntas, que pueden ser calificadas del 1 al 5 (donde el 1 significa estar "completamente en desacuerdo" y el 5 significa estar "completamente de acuerdo").

Los resultados fueron los siguientes:

| Pregunta | P03 (A) | P04 (A) | P06 (A) | P09 (A) | P10 (A) | P01 (B) | P02 (B) | P05 (B) | P07 (B) | P08 (B) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1. Creo que me gustará visitar con frecuencia este website** | 5 | 5 | 1 | 4 | 4 | 5 | 5 | 5 | 3 | 3 |
| **2. Encontré el website innecesariamente complejo** | 1 | 1 | 1 | 1 | 2 | 1 | 2 | 1 | 2 | 2 |
| **3. Pensé que era fácil utilizar este website** | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 4 | 3 |
| **4. Creo que necesitaría del apoyo de un experto para recorrer el website** | 1 | 1 | 1 | 1 | 1 | 1 | 3 | 1 | 2 | 2 |
| **5. Encontré las funciones del website bastante bien integradas** | 5 | 4 | 5 | 4 | 3 | 5 | 4 | 5 | 3 | 3 |
| **6. Pensé que había demasiada inconsistencia en el website** | 1 | 1 | 1 | 1 | 2 | 1 | 2 | 1 | 2 | 2 |
| **7. Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website** | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 4 |
| **8. Encontré el website muy grande al recorrerlo** | 1 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | 2 |
| **9. Me sentí muy confiado en el manejo del website** | 5 | 4 | 5 | 4 | 4 | 5 | 3 | 5 | 4 | 4 |
| **10. Necesito aprender muchas cosas antes de manejarse en el website** | 1 | 2 | 1 | 1 | 1 | 1 | 3 | 1 | 1 | 2 |

### Tratamiento de datos y cálculo de usabilidad
Las puntuaciones obtenidas a través de los cuestionarios de Tally se tabularon y procesaron manualmente siguiendo la metodología matemática estándar de la escala SUS. Para homogeneizar las respuestas y neutralizar el sesgo de las afirmaciones, los datos brutos se transformaron bajo el siguiente criterio:
* En las preguntas de control impares, se restó $1$ al valor marcado por el participante.
* En las preguntas de control pares, se invirtió la polaridad de la respuesta restando su valor a $5$.

Finalmente, las puntuaciones corregidas de los diez ítems se sumaron y se multiplicaron por $2.5$. Este ajuste permite proyectar el índice de usabilidad percibida dentro de un rango estandarizado de $0$ a $100$ puntos para su análisis comparativo.

Calculamos el SUS Score para cada participante y obtuvimos la siguiente tabla:

| ID | Caso | SUS Score | Evaluación Lingüística | Clasificación |
| :---: | :---: | :---: | :---: | :---: |
| **P01** | **B** | 95.0 | Excelente | **A** |
| **P02** | **B** | 70.0 | Buena | **C** |
| **P03** | **A** | 100.0 | Excelente | **A** |
| **P04** | **A** | 85.0 | Excelente | **A** |
| **P05** | **B** | 100.0 | Excelente | **A** |
| **P06** | **A** | 90.0 | Excelente | **A** |
| **P07** | **B** | 72.5 | Buena | **C** |
| **P08** | **B** | 67.5 | Aceptable pero débil | **D** |
| **P09** | **A** | 85.0 | Excelente | **A** |
| **P10** | **A** | 80.0 | Buena | **C** |

<br>

### Comparativa A/B Testing de Resultados
Finalmente, obtenemos los resultados para cada caso:

| Caso Evaluado | Puntuación Media SUS | Grado de Aceptabilidad | Escala Lingüística | Clasificación |
| :--- | :---: | :---: | :--- | :---: |
| **Caso A (Goiko)** | **88.0 / 100** | ACEPTABLE | Excelente | **A** |
| **Caso B (Anime Ramen)** | **81.0 / 100** | ACEPTABLE | Excelente | **A** |

**Conclusión del análisis estadístico:** Tras contrastar las métricas cuantitativas, ambos sistemas demuestran un rendimiento sobresaliente, situándose en la franja de Aceptable (Clasificación A / Excelente) al superar con creces el umbral crítico de 68 puntos.

Sin embargo, el Caso A (Goiko) se corona como el diseño más optimizado del experimento con una media de 88/100, aventajando al Caso B (Anime Ramen) por un margen de $7$ puntos. Esta diferencia radica en que el problema de Anime Ramen es que algunos de sus CTA clave, como el precio o las fotos de la carta, son demasiado pequeños, lo que exige un mayor esfuerzo visual. Por el contrario, Goiko ofrece una interfaz mucho más intuitiva e impactante; sus CTA son claros y altamente destacables, logrando que el ojo del usuario no se distraiga con elementos secundarios ni tenga que esforzarse en procesar componentes de menor tamaño.

---

## 5.5. Accesibility Report Caso B

Se ha ejecutado un estudio de accesibilidad sobre la propuesta de los compañeros utilizando herramientas automatizadas de diagnóstico como **Google Lighthouse** y **WAVE** (Web Accessibility Evaluation Tool). El análisis segmenta los hallazgos técnicos en base a los cuatro pilares fundamentales de las directrices **WCAG 2.2 (Nivel AA)**: Perceptible, Operable, Comprensible y Robusto.

[Estudio de accesibilidad del caso B](https://github.com/manuelmartinz/UX_CaseStudy/blob/8388c572a5fc77ad96f55c5e5fa2c4011c7660a9/P5/Acceibility-Report.md).

---

## 5.6 Usuability Report Caso B
Finalizaremos con un un informe de usabilidad que unifica los resultados de los mapas de calor biométricos generados en GazeMapping, las calificaciones del cuestionario SUS y las propuestas de rediseño organizadas por prioridad de impacto (Alta, Media y Baja).

[Estudio de usabilidad del caso B](https://github.com/manuelmartinz/UX_CaseStudy/blob/ca66dcd1c6291d65aedbf456e3a0aa13fe7bdf74/P5/Usability-Report.md).

---
