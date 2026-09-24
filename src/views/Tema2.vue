<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas cuantitativas para comparar alternativas

    .row.align-items-center.mb-4
      .col-auto.d-none.d-lg-block
        img.tema2-icono-84(src="@/assets/curso/temas/t2/img1.svg" alt="")
      .col
        p.mb-0 Las herramientas cuantitativas para la decisión gerencial se fundamentan en el uso de datos numéricos, modelos matemáticos y técnicas estadísticas para evaluar alternativas, estimar riesgos y proyectar resultados. Su principal fortaleza radica en la trazabilidad del análisis, ya que al hacer explícitos los supuestos y los cálculos permiten que otros actores revisen, cuestionen y mejoren el razonamiento.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p.mb-4 Conviene entender, sin embargo, que la objetividad de la herramienta no garantiza la objetividad del proceso completo. Los datos siempre se construyen desde una perspectiva, los modelos incorporan supuestos discutibles y los resultados numéricos deben interpretarse a la luz del contexto y del juicio del gerente. Son insumos poderosos para decidir, pero no eliminan el análisis cualitativo ni la responsabilidad de quien elige.
        .tema2-destacado-primario.p-4
          p.mb-0 En Colombia la adopción de estas herramientas ha crecido con la digitalización de la información contable y comercial. Una empresa mediana dispone hoy de datos de ventas, costos y cartera que hacen viable calcular valores esperados o comparar alternativas con cifras. Lo que hace una década exigía un consultor externo cabe hoy en una hoja de cálculo bien diseñada.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema2-img-cover(src="@/assets/curso/temas/t2/img2.png" alt="")
    p.mb-0 El recorrido empieza por la herramienta de uso más extendido, la que compara lo que cuesta una alternativa con lo que devuelve. Su sencillez aparente esconde decisiones técnicas, como la tasa de descuento, que conviene entender antes de confiar en sus resultados.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Análisis costo-beneficio
    p.mb-4 El análisis costo-beneficio es una técnica de evaluación económica que compara los costos y los beneficios asociados a una alternativa para determinar si genera valor neto positivo para la organización. Su lógica consiste en identificar, cuantificar y contrastar todos los costos de implementar la alternativa, de inversión, operativos e indirectos, frente a los beneficios esperados, que pueden ser financieros, sociales u organizacionales.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .tema2-destacado-secundario.p-4.h-100
          img.tema2-icono-84.mb-4(src="@/assets/curso/temas/t2/img3.svg" alt="")
          p.mb-0 Su importancia gerencial está en que obliga a poner en la misma balanza lo que se gasta y lo que se obtiene. Incluye efectos que suelen olvidarse, como el costo de oportunidad de los recursos comprometidos o los beneficios intangibles que pueden monetizarse. Un indicador mayor que uno señala que la alternativa devuelve más de lo que cuesta.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.h-100.w-100(src="@/assets/curso/temas/t2/img4.svg" alt="")
    p.mb-4 En Colombia esta técnica es exigida por las entidades financieras y los fondos públicos al evaluar proyectos, y por eso muchas empresas la conocen como un requisito y no como una herramienta propia. Aplicarla antes de que la pida un tercero permite descartar a tiempo las inversiones que no se pagan solas.
    p.mb-4 Para aplicar el análisis con rigor es necesario manejar cuatro conceptos que aparecen en cualquier evaluación económica y que determinan el resultado más que los cálculos en sí. Se describen a continuación con la decisión práctica que cada uno implica para quien construye el análisis:
    .row.justify-content-center.mb-4.g-0
      .col-md-6.col-xl-3
        .tarjeta.tema2-conectada-1.p-4.h-100
          img.tema2-conectada__icono(src="@/assets/curso/temas/t2/img5.svg" alt="")
          h5.text-center Relación beneficio-costo
          p.mb-0.text-center Cociente entre el valor presente de los beneficios y el valor presente de los costos; si es mayor que uno, la alternativa se justifica en términos económicos. Decisión que implica: comparar alternativas por su relación y no solo por el tamaño de su beneficio.
      .col-md-6.col-xl-3
        .tarjeta.tema2-conectada-2.p-4.h-100
          img.tema2-conectada__icono(src="@/assets/curso/temas/t2/img6.svg" alt="")
          h5.text-center Valor presente neto
          p.mb-0.text-center Diferencia entre el valor presente de los beneficios y el de los costos, que expresa en pesos de hoy cuánto valor crea la alternativa. Decisión que implica: preferir, entre varias opciones viables, la de mayor valor presente neto.
      .col-md-6.col-xl-3
        .tarjeta.tema2-conectada-3.p-4.h-100
          img.tema2-conectada__icono(src="@/assets/curso/temas/t2/img7.svg" alt="")
          h5.text-center Tasa de descuento
          p.mb-0.text-center Tasa con la que los flujos futuros se convierten a valores de hoy; en la empresa privada suele ser el costo de oportunidad del capital o la tasa mínima atractiva de retorno. Decisión que implica: fijarla antes de calcular, porque una tasa alta castiga los beneficios lejanos.
      .col-md-6.col-xl-3
        .tarjeta.tema2-conectada-4.p-4.h-100
          img.tema2-conectada__icono(src="@/assets/curso/temas/t2/img8.svg" alt="")
          h5.text-center Externalidades
          p.mb-0.text-center Costos o beneficios que la alternativa produce sobre terceros y que no pasan por la caja de la empresa, como la congestión que genera una bodega o el empleo que crea una planta. Decisión que implica: registrarlas, aunque no se moneticen, para no ignorar efectos relevantes.
    p.mb-4 Los cuatro conceptos se relacionan entre sí. La tasa de descuento determina el valor presente, el valor presente define la relación beneficio-costo y las externalidades corrigen lo que las cifras no alcanzan a reflejar. Cambiar uno altera el resultado, y por eso conviene registrarlos todos por escrito.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema2-frase.p-4
          img(src="@/assets/curso/temas/t2/img9.svg" alt="")
          p.mb-0.fw-bold.text-center El análisis costo-beneficio no dice qué hacer. Dice cuánto vale cada opción bajo unos supuestos declarados, y su utilidad depende de que esos supuestos puedan discutirse antes de decidir.
    p.mb-4 Su aplicación se comprende mejor en decisiones concretas de inversión, en las que la gerencia debió cuantificar beneficios que al principio parecían inmedibles y elegir una tasa de descuento coherente con su costo de capital. En la práctica colombiana el análisis suele ser una hoja de cálculo con flujos anuales que cualquier contador puede construir.
    p.mb-4 Los siguientes casos evidencian ese uso en empresas de distinto sector:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema2-elementos.p-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Paneles solares en una piscícola]#[br] La inversión de ciento veinte millones parecía alta hasta que la gerencia descontó a cinco años el ahorro en energía y la reducción de paradas por cortes eléctricos. La relación beneficio-costo de 1,6 justificó la compra y el proyecto obtuvo crédito verde.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Sistema de riego en un cultivo de aguacate]#[br] El productor comparó el riego por goteo con el riego manual y descubrió que el beneficio principal no era el ahorro de agua, sino la cosecha en época seca, cuando el precio duplica al de temporada. Con ese beneficio incluido, el valor presente neto pasó de negativo a positivo.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Apertura de un punto de atención]#[br] Una empresa de giros evaluó abrir una oficina y, al incorporar como externalidad el tiempo que sus clientes dejarían de viajar al municipio vecino, estimó una demanda mayor que la de su registro histórico. La oficina superó la meta de transacciones en el tercer mes.
    p.mb-4 En cada caso el resultado cambió cuando se incluyó un beneficio o un costo que la primera versión había dejado por fuera. La calidad del análisis no está en la fórmula, sino en la lista completa de lo que entra en ella.
    p.mb-4 Construir un análisis costo-beneficio recorre seis fases que conviene respetar, porque omitir una suele invalidar el resultado o dejarlo expuesto a objeciones que llegan cuando ya se decidió. Ahora se presentan en el orden en que se ejecutan:
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema2-img-cover(src="@/assets/curso/temas/t2/img10.png" alt="")
      .col-lg-9
        .tarjeta.tema2-elementos.tema2-lista-letras.p-4.h-100
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta: span 1
              p.mb-3 Definir el alcance del análisis, el horizonte de tiempo y los grupos de interés cuyos costos y beneficios se considerarán.
            li
              .lista-ol--cuadro__vineta: span 2
              p.mb-3 Identificar y valorar los costos, distinguiendo los directos, que afectan el flujo de caja, de los indirectos y las externalidades.
            li
              .lista-ol--cuadro__vineta: span 3
              p.mb-3 Identificar y valorar los beneficios, incluidos los intangibles cuando sea posible expresarlos en dinero con un método declarado.
            li
              .lista-ol--cuadro__vineta: span 4
              p.mb-3 Elegir la tasa de descuento y convertir todos los flujos futuros a valor presente.
            li
              .lista-ol--cuadro__vineta: span 5
              p.mb-3 Calcular el valor presente neto y la relación beneficio-costo de cada alternativa y compararlas.
            li
              .lista-ol--cuadro__vineta: span 6
              | Realizar un análisis de sensibilidad que revele cómo cambia el resultado si varían los supuestos clave.
    p.mb-4 La última fase es la que separa un análisis útil de una simple operación aritmética. Si el resultado se invierte con un cambio pequeño en la tasa o en la demanda, la gerencia sabe que decide en terreno frágil y puede prepararse para ello.
    .row.justify-content-center.mb-0
      .col-lg-10
        .tema2-destacado-secundario.p-4
          .row.align-items-center
            .col-auto.d-none.d-lg-block
              img.tema2-icono-84(src="@/assets/curso/temas/t2/img11.svg" alt="")
            .col
              p.mb-0 El análisis costo-beneficio supone que los flujos ocurrirán como se proyectaron. Cuando el resultado depende de eventos inciertos, con probabilidades distintas, hace falta una herramienta que represente esas ramificaciones y calcule lo que cabe esperar de cada camino.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Árboles de decisión
    p.mb-4 Los árboles de decisión son representaciones gráficas de las alternativas disponibles en un proceso decisional, de las consecuencias posibles de cada una y de las probabilidades asociadas a esas consecuencias. Su estructura, que se asemeja a las ramas de un árbol, facilita comprender el problema, identificar los puntos de elección y estimar el valor esperado de cada curso de acción.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img12.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Su importancia radica en que obligan a explicitar los supuestos probabilísticos y los resultados posibles de cada alternativa. Al hacerlo ponen de manifiesto la estructura del problema y facilitan el debate colectivo sobre los criterios de elección. Las diferencias de opinión dejan de ser sobre la decisión y pasan a ser sobre una probabilidad o un valor concretos.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t2/img13.svg" alt="")
      .col-lg-8
        p.mb-4 En las empresas colombianas los árboles resultan útiles en decisiones de inversión, lanzamiento de productos y gestión de proyectos, donde la demanda, el clima o la respuesta de la competencia introducen incertidumbre. Su principal limitación está en la dificultad de estimar las probabilidades con precisión, y por eso conviene acompañarlos de un análisis de sensibilidad.
        .row.align-items-center
          .col-auto.d-none.d-lg-block
            img.tema2-icono-84(src="@/assets/curso/temas/t2/img14.svg" alt="")
          .col
            p.mb-0 Para construir y calcular un árbol basta con dominar cuatro elementos: tres tipos de nodos y una regla de cálculo, que se combinan en cualquier problema de decisión bajo incertidumbre. La Figura 2 presenta cada elemento con su símbolo, su definición y su forma de uso en el siguiente diagrama.
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span El árbol de decisión y sus nodos
        img.d-none.d-lg-block(src="@/assets/curso/temas/t2/img15.svg" alt="La Figura 2 representa un árbol de decisión: un cuadrado, nodo de decisión, se ramifica en círculos, nodos de azar, y estos a triángulos, nodos terminales; el valor esperado se calcula de derecha a izquierda. Al aplicarlo, la gerencia compara las alternativas bajo incertidumbre y elige la de mayor valor esperado.")
        img.d-block.d-lg-none(src="@/assets/curso/temas/t2/img15_1.svg" alt="La Figura 2 representa un árbol de decisión: un cuadrado, nodo de decisión, se ramifica en círculos, nodos de azar, y estos a triángulos, nodos terminales; el valor esperado se calcula de derecha a izquierda. Al aplicarlo, la gerencia compara las alternativas bajo incertidumbre y elige la de mayor valor esperado.")
    .row.align-items-start.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-4 Así, el árbol traduce una decisión incierta en un cálculo, ya que se obtiene el valor esperado en cada azar y se elige la mejor rama en cada decisión, de modo que la gerencia sustenta su elección con datos y no con intuición.
        p.mb-4 Su valor se aprecia en decisiones donde la gerencia tenía una preferencia intuitiva y el árbol la confirmó o la desmintió con cifras. Para mitigar la imprecisión de las probabilidades, el árbol se complementa con el análisis de sensibilidad, que evalúa cómo cambia la decisión óptima si las probabilidades varían.
        p.mb-0 Los siguientes casos de empresas colombianas evidencian ese uso en decisiones reales:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t2/img16.svg" alt="")
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t2/img17.svg" alt="")
          .tarjeta.tema2-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Lanzamiento de una bebida
              p.mb-0.text-center La gerencia dibujó dos alternativas, lanzar en toda la región o probar en tres tiendas, con probabilidades de aceptación alta y baja. El valor esperado de la prueba superó al del lanzamiento completo, y la empresa evitó producir un inventario que después no habría rotado.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t2/img18.svg" alt="")
          .tarjeta.tema2-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Compra de una cosechadora
              p.mb-0.text-center El productor de arroz comparó comprar la máquina con seguir alquilando, bajo escenarios de cosecha buena y mala con probabilidades tomadas de los últimos diez años. El árbol reveló que la compra solo superaba al alquiler si se compartía con dos fincas vecinas, y así se decidió.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t2/img19.svg" alt="")
          .tarjeta.tema2-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Contrato de suministro en una empresa
              p.mb-0.text-center Ante un cliente que ofrecía un contrato grande con pago a noventa días, el árbol incluyó la probabilidad de mora estimada a partir de la cartera histórica. El valor esperado, una vez descontado el riesgo de impago, resultó menor que el de tres clientes pequeños con pago de contado.
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t2/img20.svg" alt="")
      .col-lg-7
        .tema2-destacado-secundario.p-4.mb-4
          .row.align-items-center
            .col-auto.d-none.d-lg-block
              img.tema2-icono-84(src="@/assets/curso/temas/t2/img21.svg" alt="")
            .col
              p.mb-0 En los cuatro casos el árbol no reemplazó el juicio de la gerencia, pero le dio una estructura para discutirlo. Las probabilidades siguen siendo estimaciones, y su utilidad consiste en que quedan explícitas y pueden revisarse cuando llegue la información real.
        p.mb-0 Tanto el análisis costo-beneficio como el árbol trabajan con una sola medida, el dinero. Muchas decisiones gerenciales, sin embargo, deben equilibrar criterios que no se traducen a pesos, como el riesgo, la reputación o el impacto en el equipo, y para ellas existe una herramienta que pondera criterios distintos en una misma tabla.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Matriz de ponderación multicriterio
    p.mb-4 La matriz de ponderación multicriterio es una herramienta que permite evaluar y comparar alternativas considerando de manera simultánea varios criterios de valoración, a cada uno de los cuales se le asigna un peso según su importancia estratégica. Su aplicación es pertinente cuando la decisión involucra criterios heterogéneos que no pueden reducirse a una métrica común.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .tema2-destacado-secundario.p-4.h-100
          img.tema2-icono-84.mb-4(src="@/assets/curso/temas/t2/img22.svg" alt="")
          p.mb-0 Su importancia se aprecia en la comparación de proveedores, proyectos de inversión, candidatos a un cargo o estrategias de expansión. Una entidad de salud que debe elegir entre tres proveedores de programas clínicos enfrenta un dilema habitual. El más barato no es el más seguro, el más seguro no es el más fácil de usar y el más fácil de usar no es el que mejor se integra con sus sistemas. Sin una matriz, la decisión termina dependiendo de quién argumenta con más fuerza en la reunión.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema2-img-cover(src="@/assets/curso/temas/t2/img23.png" alt="")
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t2/img24.svg" alt="")
      .col-lg-9
        p.mb-3 En la gestión colombiana la matriz tiene, además, un valor institucional. El SENA la emplea en su Matriz de priorización para la toma de decisiones, con el fin de orientar recursos hacia temas estratégicos. Muchas entidades públicas y privadas la exigen para sustentar la selección de proveedores, de modo que dominarla facilita también rendir cuentas.
        .tarjeta.tema2-destacado-primario.p-4
          p.mb-0 La matriz se construye con cuatro elementos que deben definirse en orden, porque cada uno depende del anterior. Alterar la secuencia, por ejemplo, calificar las alternativas antes de fijar los pesos, es la forma más común de acomodar el resultado a una preferencia previa. La figura 3 presenta esos cuatro elementos aplicados a un caso de selección de proveedor, con el error que conviene evitar en cada uno.
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span Matriz de ponderación multicriterio: elementos y ejemplo de aplicación
        img.d-none.d-lg-block(src="@/assets/curso/temas/t2/img25.svg" alt="La Figura 3 presenta una matriz de ponderación con cuatro criterios, sus pesos y tres proveedores calificados de uno a cinco. El puntaje ponderado de cada opción indica cuál conviene elegir. Al aplicarla, el equipo compara las alternativas con los mismos criterios y sustenta la elección con datos.")
        img.d-block.d-lg-none(src="@/assets/curso/temas/t2/img25_1.svg" alt="La Figura 3 presenta una matriz de ponderación con cuatro criterios, sus pesos y tres proveedores calificados de uno a cinco. El puntaje ponderado de cada opción indica cuál conviene elegir. Al aplicarla, el equipo compara las alternativas con los mismos criterios y sustenta la elección con datos.")
    p.mb-4 La alternativa con el mayor puntaje ponderado representa la mejor opción dado el conjunto de criterios y pesos definidos. Ese resultado no es un dictamen inapelable; refleja los juicios de valor incorporados en la definición de criterios y pesos, que pueden debatirse y revisarse.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema2-frase.p-4
          img(src="@/assets/curso/temas/t2/img26.svg" alt="")
          p.mb-0.fw-bold.text-center La matriz no decide por el equipo. Hace visibles los criterios y los pesos con que cada persona decidiría, y esa visibilidad es lo que permite acordar una elección en lugar de imponerla.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-4 Por esa razón la matriz es también una herramienta de construcción de consenso. Al hacer explícitos los criterios y sus pesos, genera un espacio de deliberación en el que el equipo puede cuestionar y acordar la importancia de cada dimensión, y ese proceso fortalece el compromiso con la implementación. Cuando la decisión involucra la estructura organizacional, permite además incorporar criterios como la capacidad del área responsable.
        p.mb-4 Los siguientes casos de empresas colombianas evidencian ese uso:
        .tarjeta.tema2-elementos.p-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Elección de proveedor en una clínica]#[br] Tres proveedores de historia clínica electrónica se calificaron en costo, seguridad, facilidad de uso e integración, con pesos acordados por la junta. El más barato quedó de último y la decisión, que antes dependía del gerente, se explicó a los médicos con la tabla.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Selección de un jefe de planta]#[br] La empresa definió cinco criterios y sus pesos antes de entrevistar, y calificó a los candidatos con evidencia de cada entrevista. El puntaje favoreció a una persona distinta de la recomendada por el dueño, que aceptó el resultado porque él mismo había fijado los pesos.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Priorización de proyectos en una alcaldía]#[br] Con la estructura de la matriz de priorización del SENA, el equipo ponderó una demanda ciudadana, costo, tiempo y alineación con el plan de desarrollo. Las diez iniciativas quedaron ordenadas y el concejo aprobó las cuatro primeras sin la discusión que cada año bloqueaba el presupuesto.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema2-img-cover(src="@/assets/curso/temas/t2/img27.png" alt="")
    p.mb-4 En los cuatro casos la matriz cambió la conversación. En lugar de defender alternativas, el equipo discutió criterios y pesos, y la elección final se aceptó porque el procedimiento fue transparente para todos.
    p.mb-4 Construir una matriz de ponderación toma una sesión de trabajo y una hoja de cálculo sencilla. Los siguientes pasos, en el orden en que deben ejecutarse, garantizan que los pesos se fijen antes que las calificaciones y que el resultado pueda explicarse a cualquier interesado:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema2-elementos.tema2-lista-letras.p-4
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta: span 1
              | Definir las alternativas que se evaluarán y describir cada una con la misma información.
            li
              .lista-ol--cuadro__vineta: span 2
              | Acordar con el equipo los criterios de evaluación relevantes para la decisión, sin superar seis, y definirlos por escrito.
            li
              .lista-ol--cuadro__vineta: span 3
              | Asignar a cada criterio un peso, de modo que la suma sea igual a cien por ciento, y registrarlo antes de calificar.
            li
              .lista-ol--cuadro__vineta: span 4
              | Calificar cada alternativa en cada criterio con una escala común, con la evidencia que sustenta cada valor.
            li
              .lista-ol--cuadro__vineta: span 5
              | Multiplicar cada calificación por el peso, sumar los productos por alternativa y contrastar el resultado con el juicio del equipo.
    .row.align-items-stretch.justify-content-center.mb-0
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.h-100.w-100(src="@/assets/curso/temas/t2/img28.svg" alt="")
      .col-lg-8
        p.mb-4 Al seguir estos pasos en orden, la matriz produce dos resultados: una elección sustentada en datos y un registro de cómo se llegó a ella. Por eso, cuando el puntaje contradice lo que se esperaba, lo correcto es revisar la evidencia de las calificaciones, no cambiar los pesos para que la tabla confirme la preferencia inicial.
        .tema2-destacado-primario.p-4
          p.mb-0 Elegir bien no garantiza que lo elegido se cumpla. La decisión ocurre dentro de una estructura que define quién la ejecuta, quién la vigila. El siguiente tema desarrolla ese marco organizacional y el seguimiento que lo permite.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
