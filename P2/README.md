## DIU - Practica2, entregables

## Ideación 

El análisis de la experiencia del usuario ha revelado varias deficiencias en la plataforma actual: concluímos que la página de Goiko puede no ser intuitiva para un usuario novato en páginas web. El acceso a la carta y a la carta de alérgenos está "escondido", carece de botones para retroceder y la ayuda y el contacto no están a la vista.

### Malla receptora de información 
Para idear como podríamos reconvertir la página web, vamos a hacer uso de distinas herramientas.

* Para Rosa Lorite hemos diseñado el siguiente Mapa de Empatía:
![Mapa de Empatía Rosa](https://github.com/manuelmartinz/UX_CaseStudy/blob/dde7c923f4d0f2ed80d9c485f28dfeafcb42c690/P2/Ideaci%C3%B3n/Empathy%20Customer%20Map%20Goiko%20Rosa.png)

* Para Manuel Cazorla hemos realizado otro Mapa de Empatía:
![Mapa de Empatía Manuel](https://github.com/manuelmartinz/UX_CaseStudy/blob/dde7c923f4d0f2ed80d9c485f28dfeafcb42c690/P2/Ideaci%C3%B3n/Empathy%20Customer%20Map%20Goiko%20Manuel.jpg)

### Feedback Capture Grid
Para remarcar los aspectos más importantes, recurrimos a un Feedback Capture Grid:
![feedback capture grid](https://github.com/manuelmartinz/UX_CaseStudy/blob/7cb802121c91ac4b98e31929ea6202349efb77ab/P2/Feeback%20capture%20grid.png)

### Point of View
Tras el análisis realizado, planteamos nuestra propuesta de valor, focalizándonos en el acceso intuitivo de las funcionalidades de la página:
- Se desea reconstruir la página inicial para que las funcionalidades principales (la carta, hacer pedidos, reservar mesa y la ayuda de contacto) estén a la vista.
- Facilitar la búsqueda de la carta.

Con estas mejoras, se espera optimizar la experiencia del usuario.

Por otro lado, buscamos fomentar la participación activa y el acceso a la web de los usuarios de Goiko, por lo que proponemos un concurso donde sean los usuarios los que elijan los productos de la carta. Cada mes, habrá un nuevo producto innovador elegido por la comunidad.

## PROPUESTA DE VALOR

Queremos mejorar la experiencia de los usuarios de la web de Goiko, y para ello, tenemos que facilitar el acceso a la información para nuestros usuarios. 

Proponemos mejorar la página inicial, para que cualquier usuario nuevo, novato o experimentado no encuentre problemas para buscar la carta, retroceder a la página inicial, buscar ayuda o buscar su restaurante más cercano. También queremos facilitar la consulta de la carta incorporando unos filtros que nos permitirán buscar nuestro producto ideal, ya sea por precio, sabor o alérgenos.

Creemos que estos cambios mejorarían la experiencia de usuarios como Manuel o Rosa, que son nuevos usuarios en la web de Goiko.

Para diferenciarnos del resto, nuestra propuesta de valor transforma al cliente de un consumidor pasivo a un creador protagonista. A través de una plataforma interactiva, ofrecemos la oportunidad de diseñar la *"hamburguesa perfecta"*, permitiendo que quienes las disfrutan definan el futuro de nuestra carta.

Invitamos a los usuarios a experimentar con ingredientes, texturas y sabores mediante una interfaz intuitiva donde pueden enviar su propuesta personalizada. Además, tendrán que tener en cuenta el precio de la hamburguesa, pues cada ingrediente tiene un precio distinto, y para que la hamburguesa sea elegida por la comunidad, debe llamar la atención de los usuarios de Goiko.

De entre todas las candidaturas, un jurado de expertos de Goiko seleccionará las tres recetas más innovadoras, basándose en la originalidad y el espíritu de la marca.

La decisión final recae en la comunidad. La Galería de Votación se convierte en un espacio donde los usuarios interactúan, comparan y eligen su favorita, fomentando la participación activa.

El ganador obtiene el máximo reconocimiento en el mundo de la comida rápida:

- La hamburguesa ganadora será integrada en la carta oficial de Goiko de forma temporal, permitiendo que miles de personas en todo el país prueben su creación.
- Un mes de hamburguesas gratis para el creador, celebrando su victoria disfrutando de nuestra cocina.

Con este Scope Canvas esquematizamos nuestra propuesta de valor:

![ScopeCanvas](https://github.com/manuelmartinz/UX_CaseStudy/blob/master/P2/Scope%20Canvas.png)


## TASK ANALYSIS

### User Task Matrix

Hemos recopilado las funcionalidades más críticas para realizar nuestro análisis de tareas basándonos en el **Task Analysis**.

| Tarea | Cliente frecuente | Usuario nuevo | Usuario alérgico | 
| :--- | :---: | :---: | :---: |
| **Reservar de forma rápida** | **ALTA** | Media | Media |
| **Realizar pedido** | **ALTA** | Media | Media |
| **Consultar carta y precios** | Media | **ALTA** | **ALTA** |
| **Consultar y filtrar alérgenos** | Media | Media | **ALTA** |
| **Encontrar localización** | Baja | **ALTA** | Media |

---

#### Perfiles :busts_in_silhouette:

* **Cliente frecuente:** Usuario que ya conoce la marca y el producto. No necesita explorar, busca eficiencia. Desea realizar su pedido en el menos tiempo posible y asegurar su mesa sin complicaciones.
* **Usuario nuevo:** Alguien que descubre Goiko por primera vez. Necesita información y confianza. Quiere conocer dónde se encuentra, además de sus precios y servicios.
* **Usuario alérgico:** Su navegación es preventiva. El filtrado de ingredientes es su tarea primaria; si no confía en la información de alérgenos, abandonará la plataforma.

> Esta matriz justifica la arquitectura de información de nuestro prototipo, priorizando el acceso directo a los **Filtros** y a los botones de **Reserva/Pedido** en el header.

### Task Flow
A continuación, podemos observar los distintos Task Flows:

- **Task Flow 1:** Acceso y Consulta de la Carta
Este flujo describe los pasos que realiza el usuario desde que entra en la página hasta que visualiza los productos de la carta. Para ello, el usuario tendrá que pulsar el botón en el que pone *"Carta"* en la página de inicio. Después, el cliente tendrá que elegir entre las opciones: *Entrantes, Hamburguesas* y *Postres*. Una vez dentro podremos elegir los filtros para los alérgenos.
![TaskFlow](https://github.com/manuelmartinz/UX_CaseStudy/blob/b2e9348ade9c9146935717088f4077e864132838/P2/Task%20flow/carta.jpg)

- **Task Flow 2:** Creación de hamburguesa
Este flujo describe los pasos que realiza el usuario para crear una hamburguesa para el concurso *"Crea Sabores con Encanto"* de nuestra propuesta de valor. Para ello, el usuario accederá a la página del concurso desde la página inicio. El cliente tendrá que configurar su hamburguesa, seleccionando los ingredientes y eligiendo el nombre. Una vez configurada, tendrá que iniciar sesión para que su hamburguesa sea propuesta en la galería de hamburguesas.
![TaskFlow](https://github.com/manuelmartinz/UX_CaseStudy/blob/b2e9348ade9c9146935717088f4077e864132838/P2/Task%20flow/propuesta.jpg)


## ARQUITECTURA DE INFORMACIÓN
### SiteMap
Nuestro SiteMap para la navegación de la nueva página de Goiko sería el siguiente:
![SiteMap](https://github.com/manuelmartinz/UX_CaseStudy/blob/b2e9348ade9c9146935717088f4077e864132838/P2/sitemap.png)

### Labelling
A continuación se detallan las secciones y pantallas extraídas del Sitemap, definiendo el alcance de cada una para el desarrollo del proyecto.

| Término | Significado |
| :--- | :--- |
| **Página de Inicio** | Nodo central con accesos directos a todas las funcionalidades. |
| **Iniciar Sesión** | Gestión de acceso de usuarios ya existentes. |
| **Registro** | Gestión de acceso de nuevos usuarios. |
| **Reservar mesa** | Página donde se accede para reservar mesa. Se pide seleccionar la ciudad, el restaurante de esa ciudad (si hay más de uno), el número de personas y el teléfono. |
| **Reserva confirmada** | Pantalla de éxito tras finalizar el proceso de reserva de mesa. |
| **Carta** | Punto de acceso categorizado por Filtros de alérgenos, Entrantes, Hamburguesas y Postres. |
| **Categorías (Entrantes/Burguers/Postres)** | Pantallas específicas con el listado de productos y rejilla de imágenes de cada categoría. |
| **Sobre nosotros** | Información corporativa: contacto, preguntas frecuentes (FAQ) y localizador de tiendas. |
| **Crea sabores con encanto** | Página inicial dedicada al concurso, con información y acceso a la participación. |
| **Configuración hamburguesa** | Interfaz interactiva para la selección de productos y personalización de ingredientes. |
| **Galería** | Visualización de creaciones y fotos de la comunidad. Área donde se pueden votar las propuestas para el concurso del mes. |
| **Hacer pedido** | Página para realizar un pedido en el que elegimos el método de entrega: "Recoger en casa" o "Recoger en local". |
| **Pago** | Pasarela de pago para introducir métodos de cobro (VISA, etc.) y procesar la transacción. |
| **Pedido confirmado** | Pantalla final con el resumen del pedido y confirmación de recepción del pago. |
| **Mi Goiko (Perfil)** | Área personal del usuario: gestión de cuenta, historial de reservas, pedidos, descuentos y creaciones. |

## Prototipo Lo-FI Wireframe 

Para la elaboración de los wireframes, hemos usado assets de Figma para simular distribución y organización del layout:

HomePage formato portátil:
![WireFrame](https://github.com/manuelmartinz/UX_CaseStudy/blob/master/P2/wireframes/homepage.png)

Carta formato portátil:
![WireFrame](https://github.com/manuelmartinz/UX_CaseStudy/blob/master/P2/wireframes/carta.png)

Filtros de la carta formato portátil:
![WireFrame](https://github.com/manuelmartinz/UX_CaseStudy/blob/master/P2/wireframes/carta_filtros.png)

Concurso "Crea Sabores con Encanto" formato portátil:
![WireFrame](https://github.com/manuelmartinz/UX_CaseStudy/blob/master/P2/wireframes/galer%C3%ADa1.png)

Galería "Crea Sabores con Encanto"  formato portátil:
![WireFrame](https://github.com/manuelmartinz/UX_CaseStudy/blob/master/P2/wireframes/galer%C3%ADa2.png)

Configuración de la hamburguesa formato portátil:
![WireFrame](https://github.com/manuelmartinz/UX_CaseStudy/blob/master/P2/wireframes/configuracion_hamb1.png)

Filtros de la configuración de la hamburguesa formato portátil:
![WireFrame](https://github.com/manuelmartinz/UX_CaseStudy/blob/master/P2/wireframes/configuracion_hamb2.png)


## Conclusiones 

En esta práctica hemos desarrollado una propuesta de valor centrada en el usuario, siguiendo los principios del diseño centrado en la experiencia. Para ello, ha sido necesario empatizar con el usuario final y analizar la web de partida, identificando sus principales carencias y problemas de usabilidad con el objetivo de plantear mejoras.

La propuesta de valor se basa en dos aspectos fundamentales. Por un lado, acercar la información al usuario, facilitando el acceso a datos relevantes como precios y alérgenos de cada plato. Por otro, fomentar la interacción mediante la incorporación de un sistema de concurso, con el fin de aumentar la participación y el compromiso del usuario con la plataforma.


La práctica ha resultado útil para comprender la importancia del diseño centrado en el usuario y su impacto en la experiencia final. Se ha podido observar cómo una correcta fase de ideación y análisis influye directamente en la calidad del prototipo. El uso de herramientas como Figma ha permitido materializar las ideas de forma visual, reforzando la capacidad de diseñar interfaces intuitivas y orientadas a las necesidades reales de los usuarios.

>>>> Este fichero se debe editar para que cada evidencia quede enlazada con el recurso subido a la carpeta de la practica. Se pide más detalle técnico en las descripciones de lo que sería el README principal del repositorio y que corresponde a la descripcion del Case Study.
>>>> Termine con la seccion de Conclusiones para aportar una valoración final del equipo sobre la propia realización de la práctica
