<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Herramientas cualitativas para evaluar alternativas
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.tema1-img-cover(src="@/assets/curso/temas/t1/img1.png" alt="")
      .col-lg-8
        p.mb-4 Las herramientas cualitativas permiten analizar situaciones complejas a partir de variables que no siempre admiten una medición numérica, como las percepciones del entorno, las dinámicas de la organización o el juicio de expertos. Su valor radica en que facilitan una comprensión profunda de los fenómenos organizacionales cuando la información cuantitativa es escasa o insuficiente para orientar la decisión.
        .tema1-fondo-primario-claro.p-4
          p.mb-0 Estas herramientas responden a metodologías rigurosas que estructuran el pensamiento estratégico, integran varias perspectivas y reducen la incertidumbre de la decisión gerencial. Su aplicación exige conocer la técnica y comprender el contexto en que se emplea, porque una matriz diligenciada sin criterio produce diagnósticos vacíos que no conducen a ninguna acción.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p.mb-4 En Colombia, muchas organizaciones deciden con información incompleta y en mercados que cambian por factores regulatorios, climáticos o de orden público. Frente a ese escenario, las herramientas cualitativas aportan una forma disciplinada de preparar la decisión:
        .tarjeta.tema1-destacado-acento.p-4
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta: span 1
              | Ordenar lo que se sabe.
            li
              .lista-ol--cuadro__vineta: span 2
              | Hacer explícito lo que se supone.
            li
              .lista-ol--cuadro__vineta: span 3
              | Discutir sobre hechos declarados y no sobre intuiciones.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t1/img2.png" alt="")
    p.mb-0 El recorrido comienza por la herramienta más conocida en la gestión colombiana, la que cruza lo que la empresa es con lo que el entorno le ofrece o le exige. Su sencillez la ha convertido en el punto de partida habitual de cualquier ejercicio de planeación, y su aporte real aparece cuando el diagnóstico termina en decisiones.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Análisis FODA y su matriz estratégica
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img3.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis FODA, cuyo nombre proviene de las iniciales de fortalezas, oportunidades, debilidades y amenazas, es una de las herramientas estratégicas más utilizadas en las organizaciones. Su popularidad se debe a la sencillez con que integra el diagnóstico interno y el externo en un único marco para identificar las condiciones que más pesan en las decisiones estratégicas.
    p.mb-4 Desde la perspectiva gerencial, el FODA ofrece una radiografía de la situación de la empresa. Identifica los recursos en que se apoya la competitividad, señala los aspectos que limitan el desempeño, reconoce las condiciones externas que abren posibilidades y advierte sobre los factores del entorno que ponen en riesgo la estrategia.
    p.mb-4 En las empresas colombianas el FODA suele ser el primer ejercicio de planeación que se hace por escrito, y con frecuencia el único. Un diagnóstico que no termina en decisiones se archiva hasta el siguiente año, y por eso su aporte real está en cruzar los cuadrantes para derivar líneas de acción.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema1-destacado-acento
          .row.align-items-center
            .col-lg-8.px-5
              p.mb-0 Cada uno de los cuatro factores responde a una pregunta distinta y se llena con un tipo de evidencia diferente. Tratar como fortaleza algo que proviene del exterior es el error más común y el que más distorsiona el diagnóstico. Cada factor se describe con la condición de que ubica el hallazgo en su cuadrante:
            .col-lg-4.d-none.d-lg-block
              img(src="@/assets/curso/temas/t1/img4.svg" alt="")
    
    .row.justify-content-center.mb-0
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t1/img5.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro
            .p-4
              h5 Fortalezas
              p.mb-0 Recursos, habilidades y ventajas competitivas que la organización posee y controla, como una marca sólida, talento especializado o procesos eficientes. Su rasgo distintivo es que dependen de la empresa y se perderían si dejara de cultivarlas.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t1/img6.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro
            .p-4
              h5 Debilidades
              p.mb-0 Limitaciones internas que impiden alcanzar el desempeño esperado, como falta de recursos financieros, deficiencias en la gestión o sistemas desactualizados. La organización puede corregirlas con sus propias decisiones.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t1/img7.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro
            .p-4
              h5 Oportunidades
              p.mb-0 Condiciones del entorno que la organización puede aprovechar, como el crecimiento del mercado, cambios regulatorios favorables o necesidades que los competidores no atienden. Existen en el entorno al margen de lo que la empresa haga por ellas.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t1/img8.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro
            .p-4
              h5 Amenazas
              p.mb-0 Factores externos que ponen en riesgo la estabilidad o la posición competitiva, como nuevos competidores, cambios en las preferencias del consumidor o regulaciones restrictivas. Ante ellas, la empresa no controla su origen y solo puede prepararse.
    p.mb-4 La distinción entre lo interno y lo externo es la clave del método. Sobre los dos primeros factores la gerencia actúa de manera directa, y a los dos últimos solo puede responder; confundir ambos planos lleva a planes que intentan cambiar lo que no depende de la empresa.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema1-frase.p-4
          img(src="@/assets/curso/temas/t1/img9.svg" alt="")
          p.mb-0.fw-bold.text-center Un FODA que solo describe es un inventario. Se convierte en herramienta de decisión cuando cada cruce entre lo que la empresa tiene y lo que el entorno ofrece termina en una acción con responsable.
    p.mb-4 El mayor valor del FODA reside en la matriz estratégica, que cruza los factores internos con los externos para convertir el diagnóstico en líneas de acción. De cada combinación de un factor interno con uno externo surge una estrategia distinta, con un nivel de riesgo propio. Las cuatro estrategias que resultan de esos cruces se describen a continuación:
    .row.justify-content-center.mb-4
      .col-lg-10
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              img(src="@/assets/curso/temas/t1/img10.svg" alt="Infografía interactiva de la matriz estratégica FODA con los cruces FO, DO, FA y DA.")
            .tarjeta.tema1-conectada-4.p-3(x="43%" y="35%" numero="+")
              p.mb-0 Usar las fortalezas para aprovechar las oportunidades del entorno. Es la estrategia de mayor potencial de crecimiento.
            .tarjeta.tema1-conectada-4.p-3(x="58%" y="35%" numero="+")
              p.mb-0 Superar las debilidades con el apoyo de las oportunidades externas. Corrige lo interno mientras el entorno es favorable.
            .tarjeta.tema1-conectada-4.p-3(x="43%" y="64%" numero="+")
              p.mb-0 Emplear las fortalezas para mitigar las amenazas del entorno. Protege lo que la empresa hace bien.
            .tarjeta.tema1-conectada-4.p-3(x="58%" y="64%" numero="+")
              p.mb-0 Minimizar las debilidades y evitar las amenazas. Reduce la exposición al riesgo cuando ambos factores son adversos.
        .d-block.d-lg-none
          img(src="@/assets/curso/temas/t1/img10_1.svg" alt="")
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t1/img11.png" alt="")
      .col-lg-9
        .tema1-destacado-secundario.p-4
          p.mb-0 Los cuatro cuadrantes no son opciones excluyentes. Una misma empresa puede aplicar una estrategia ofensiva en su producto principal y una de supervivencia en una línea que pierde mercado, y esa lectura conjunta es la que convierte el diagnóstico en un plan.
        p.mt-4.mb-0 La matriz cobra sentido cuando se aplica a una decisión concreta. Los siguientes casos de empresas colombianas evidencian cómo un mismo cruce de factores condujo a estrategias distintas según el cuadrante de cada hallazgo:
    .row.justify-content-center.mb-0
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img12.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Ampliación de una panadería
              p.mb-0.text-center La gerencia cruzó su fortaleza, una receta reconocida en el municipio, con la oportunidad del nuevo conjunto residencial vecino y abrió un punto de venta allí. La estrategia ofensiva duplicó las ventas en un semestre sin cambiar el producto.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img13.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Renovación de flota en una empresa de transporte escolar
              p.mb-0.text-center La debilidad era la antigüedad de la flota y la oportunidad, una línea de crédito de fomento para renovar vehículos. La estrategia adaptativa combinó ambas y la empresa renovó cuatro buses sin comprometer su flujo de caja ni el contrato con los colegios.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img14.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Taller de confecciones
              p.mb-0.text-center Con la debilidad de depender de un solo cliente y la amenaza de que ese cliente importara desde Asia, la gerencia adoptó una estrategia de supervivencia. Redujo costos fijos, diversificó a tres clientes pequeños y sobrevivió al año en que el pedido principal desapareció.
    p.mb-4 En los tres casos la decisión no salió de la lista de factores, sino del cruce entre ellos. La matriz obliga a preguntarse qué hacer con cada combinación, y esa pregunta transforma el diagnóstico en estrategia.
    p.mb-4 Construir un FODA que termine en decisiones sigue una secuencia corta que la gerencia puede recorrer en una sesión con su equipo. Los siguientes pasos evitan los dos errores más frecuentes, confundir los planos y dejar la matriz sin acciones:
    .tarjeta.tema1-destacado-acento.p-4.mb-4
      ol.lista-ol--cuadro.mb-0
        li
          .lista-ol--cuadro__vineta: span 1
          | Reunir información de varias áreas y clasificar cada hallazgo según dependa de la empresa o del entorno, antes de juzgar si es favorable.
        li
          .lista-ol--cuadro__vineta: span 2
          | Ordenar los factores de cada cuadrante por importancia y conservar solo los cinco más relevantes.
        li
          .lista-ol--cuadro__vineta: span 3
          | Cruzar los cuadrantes de la matriz y formular al menos una acción por cruce, con responsable y plazo.
        li
          .lista-ol--cuadro__vineta: span 4
          | Revisar el análisis cada vez que cambie una condición del entorno, ya que un FODA es una fotografía y no un retrato permanente.
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-8.order-2.order-lg-1
        p.mb-4 Recorrer estos pasos convierte una sesión de planeación en decisiones verificables. El FODA deja de ser un documento de archivo y pasa a ser la primera pieza de un plan que la gerencia puede seguir.
        .tema1-fondo-primario-claro.p-4
          p.mb-0 El cuadrante de oportunidades y amenazas suele ser el más débil del FODA, porque exige conocer el entorno con un detalle que pocas empresas tienen. Para explorarlo de manera sistemática existe una herramienta que organiza los factores externos en seis dimensiones.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t1/img15.svg" alt="")

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Análisis PESTEL del entorno
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.tema1-img-cover(src="@/assets/curso/temas/t1/img16.png" alt="")
      .col-lg-8
        p.mb-4 El análisis PESTEL es una herramienta de exploración del macroentorno que permite comprender de manera sistemática los factores externos que condicionan a la organización. Sus siglas corresponden a las dimensiones política, económica, social, tecnológica, ecológica y legal, y obliga a examinar el contexto desde perspectivas diversas y complementarias.
        .row.align-items-center.mb-4
          .col-auto.d-none.d-lg-block: img.tema1-icono-84(src="@/assets/curso/temas/t1/img17.svg" alt="")
          .col
            p.mb-0 Su importancia gerencial está en que reduce el riesgo de omitir un factor crítico al formular la estrategia. Una empresa que solo vigila a sus competidores puede ser sorprendida por una reforma tributaria, una tecnología nueva o un cambio en los hábitos de consumo, y cada sorpresa tiene su lugar en una de las seis dimensiones.
        .tema1-fondo-primario-claro.p-4
          p.mb-0 En Colombia los cambios en la política de fomento, las reformas tributarias, la tasa de cambio y las exigencias ambientales afectan a empresas de cualquier sector en un mismo año. El PESTEL permite anticiparse a esas modificaciones y preparar a la organización para aprovecharlas o mitigar su impacto.
    p.mb-4 Las seis dimensiones no pesan igual en todas las empresas, y por eso conviene entender qué examina cada una antes de aplicar la herramienta. Por ejemplo, en una empresa agrícola pesan más los factores ecológicos y en una de tecnología, los legales. Se describen a continuación con el factor que suele pesar más en el contexto colombiano:
    SlyderF.mb-4(columnas="col-md-6 col-xl-4")
      .tarjeta.BGTARG.p-4.h-100
        img.tema1-slyder__icono(src="@/assets/curso/temas/t1/img18.svg" alt="")
        h5.text-center Política
        p.mb-0.text-center Comprende la estabilidad gubernamental, las políticas públicas sectoriales, los tratados comerciales y la relación entre el Estado y las empresas. Factor que suele pesar más: los cambios en los programas de fomento y en las prioridades de cada gobierno.
      .tarjeta.BGTARG.p-4.h-100
        img.tema1-slyder__icono(src="@/assets/curso/temas/t1/img19.svg" alt="")
        h5.text-center Económica
        p.mb-0.text-center Analiza las tasas de interés, la inflación, el crecimiento, el desempleo y los ciclos económicos que determinan la capacidad de inversión y de consumo. Factor que suele pesar más: la tasa de cambio para quien importa insumos o exporta.
      .tarjeta.BGTARG.p-4.h-100
        img.tema1-slyder__icono(src="@/assets/curso/temas/t1/img20.svg" alt="")
        h5.text-center Social
        p.mb-0.text-center Abarca los cambios demográficos, culturales y de comportamiento del consumidor, como el envejecimiento de la población o la valoración de la sostenibilidad. Factor que suele pesar más: la migración a ciudades intermedias y la compra digital.
      .tarjeta.BGTARG.p-4.h-100
        img.tema1-slyder__icono(src="@/assets/curso/temas/t1/img21.svg" alt="")
        h5.text-center Tecnológica
        p.mb-0.text-center Examina el ritmo de innovación, la disponibilidad de tecnologías digitales y la automatización de procesos que pueden convertirse en ventaja o en amenaza. Factor que suele pesar más: las plataformas de pago y de gestión en la nube al alcance de las pymes.
      .tarjeta.BGTARG.p-4.h-100
        img.tema1-slyder__icono(src="@/assets/curso/temas/t1/img22.svg" alt="")
        h5.text-center Ecológica
        p.mb-0.text-center Incluye el marco ambiental, los recursos naturales, la presión de consumidores por prácticas sostenibles y los riesgos del cambio climático. Factor que suele pesar más: las temporadas de lluvia y sequía sobre la producción y el transporte.
      .tarjeta.BGTARG.p-4.h-100
        img.tema1-slyder__icono(src="@/assets/curso/temas/t1/img23.svg" alt="")
        h5.text-center Legal
        p.mb-0.text-center Comprende las normas que regulan la actividad empresarial, como la legislación laboral, la tributaria, las regulaciones sectoriales y la protección al consumidor. Factor que suele pesar más: las reformas tributarias y la reglamentación de la factura electrónica.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-4 Las seis dimensiones se examinan por separado, pero actúan juntas. Una reforma legal cambia los costos, un cambio social altera la demanda y una tecnología modifica ambos, de modo que el análisis termina cuando la gerencia entiende cómo se relacionan los factores.
        .tema1-destacado-secundario.p-4.mb-4
          .row.align-items-center
            .col-auto.d-none.d-lg-block: img.tema1-icono-84(src="@/assets/curso/temas/t1/img24.svg" alt="")
            .col
              p.mb-0 El aporte del PESTEL se comprueba cuando la gerencia detecta con anticipación un factor externo que después resulta decisivo. Las empresas colombianas que hacen este análisis con periodicidad, aunque sea de forma sencilla, reaccionan antes que sus competidores a los cambios de regulación, de tecnología o de comportamiento de los clientes, sin necesidad de estudios de mercado costosos.
        p.mb-0 Esa ventaja se aprecia en organizaciones de tamaño y sector distintos, como en los siguientes casos del contexto colombiano:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema1-img-cover(src="@/assets/curso/temas/t1/img25.png" alt="")
    
    .tarjeta--container.row.mb-4
      .col-md-6.col-xl-4.tarjeta.tema1-conectada-1.p-4
        img.tema1-conectada__icono(src="@/assets/curso/temas/t1/img26.svg" alt="")
        h5.text-center Empresa de domicilios
        p.mb-5.text-center Al revisar la dimensión tecnológica, la gerencia detectó que las plataformas nacionales de reparto llegarían al municipio en un año. Se anticipó con una aplicación propia y acuerdos con restaurantes locales, y conservó la mitad del mercado cuando las plataformas entraron.
      .col-md-6.col-xl-4.tarjeta.tema1-conectada-2.p-4
        img.tema1-conectada__icono(src="@/assets/curso/temas/t1/img27.svg" alt="")
        h5.text-center Fábrica de ladrillos
        p.mb-5.text-center La dimensión ecológica reveló que la nueva norma de emisiones exigiría cambiar los hornos en dos años. La empresa programó la inversión por etapas y evitó el cierre temporal que sufrieron los competidores que esperaron a la sanción.
      .col-md-6.col-xl-4.tarjeta.tema1-conectada-3.p-4
        img.tema1-conectada__icono(src="@/assets/curso/temas/t1/img28.svg" alt="")
        h5.text-center Distribuidora de repuestos
        p.mb-5.text-center Las dimensiones económica y política, con la tasa de cambio y las restricciones fronterizas, llevaron a la gerencia a mantener inventario de tres meses. Cuando el paso fronterizo se cerró, la empresa fue la única de la zona con existencias y conservó a sus clientes.
    p.mb-4 En cada caso la gerencia no adivinó el futuro; lo examinó por dimensiones y encontró la señal antes que los demás. El valor del PESTEL está en esa rutina de exploración ordenada y no en la precisión de las predicciones.
    p.mb-0 Tanto el FODA como el PESTEL dependen del juicio de quienes los construyen, y ese juicio mejora cuando participan varias personas sin que una domine la conversación. Cómo lograr esa participación estructurada es el aporte de las técnicas que siguen.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Técnicas del grupo nominal y método Delphi
    p.mb-4 Cuando las decisiones requieren la participación de varios actores, bien sea para enriquecer el análisis, construir consenso o legitimar las conclusiones, las técnicas participativas cobran relevancia. Entre las más utilizadas están la técnica del grupo nominal y el método Delphi, que comparten el propósito de estructurar la participación colectiva para producir resultados de mayor calidad.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        .tema1-destacado-secundario.p-4.h-100
          .row.align-items-start
            .col-auto.d-none.d-lg-block.mb-4: img.tema1-icono-84(src="@/assets/curso/temas/t1/img29.svg" alt="")
            .col-lg-12
              p.mb-0 Su importancia radica en que corrigen un defecto habitual de las reuniones. Cuando un grupo delibera sin método, las personas con más jerarquía o más facilidad de palabra imponen su visión y las ideas de los demás se pierden antes de ser examinadas. Ambas técnicas separan la generación de ideas de su discusión.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema1-img-cover(src="@/assets/curso/temas/t1/img30.png" alt="")
    p.mb-4 En las empresas colombianas, donde la cultura jerárquica pesa y el desacuerdo con el jefe rara vez se expresa en público, estas técnicas resultan útiles. Permiten que el conocimiento de supervisores y vendedores llegue a la mesa de decisión sin que el temor a contradecir lo filtre.
    p.mb-4 Aunque comparten el propósito, las dos técnicas se diferencian en la forma de reunir a los participantes, en el papel del anonimato y en el tipo de decisión para el que sirven. Sus rasgos principales se describen a continuación con la situación en la que cada uno resulta determinante:
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t1/img31.png" alt="")
      .col-lg-7
        LineaTiempoD.color-primario
          p.mb-0(numero="1" titulo="Generación individual y silenciosa") En el grupo nominal cada participante escribe sus ideas en silencio y luego se exponen ronda por ronda sin debate, de modo que todas queden registradas. Resulta determinante cuando en la reunión hay personas que dominan la conversación.
          p.mb-0(numero="2" titulo="Discusión aclaratoria y votación") Tras exponer las ideas, el grupo nominal abre una discusión solo para aclarar significados y termina con una votación individual que las prioriza. Resulta determinante cuando se necesita una lista ordenada de problemas o de alternativas.
          p.mb-0(numero="3" titulo="Consulta anónima por rondas") En el método Delphi los expertos responden a un cuestionario sin conocerse entre sí, reciben un informe con las respuestas del grupo y ajustan su posición en la siguiente ronda. Resulta determinante cuando los expertos están dispersos o la jerarquía inhibiría sus respuestas.
          p.mb-0(numero="4" titulo="Convergencia del juicio experto") El Delphi continúa hasta que las respuestas se estabilizan, y el resultado es una síntesis cualificada del conocimiento disponible sobre un asunto incierto. Resulta determinante cuando la decisión depende de proyecciones de largo plazo o de tendencias tecnológicas.
    p.mb-4 Las dos técnicas se complementan. El grupo nominal es rápido y presencial, y sirve para ordenar prioridades en una sesión; el Delphi es lento y a distancia, y sirve para reunir juicio experto sobre el futuro. La elección depende de quién debe opinar y de cuánto tiempo hay.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema1-frase.p-4
          img(src="@/assets/curso/temas/t1/img32.svg" alt="")
          p.mb-0.fw-bold.text-center El anonimato no esconde a las personas; protege las ideas. Cuando nadie sabe quién dijo qué, cada propuesta se evalúa por su mérito y no por el cargo de quien la formuló.
    p.mb-4 Ambas técnicas enriquecen la decisión al incorporar diversidad de perspectivas, reducir los sesgos individuales y promover la apropiación colectiva de lo decidido. Fortalecen también el clima de la organización, porque quienes participan con método sienten que su criterio fue tenido en cuenta, aunque la decisión final no coincida con su voto.
    p.mb-4 Empresas colombianas de distinto tamaño las han empleado para decisiones concretas, como evidencian los siguientes casos:
    .row.justify-content-center.mb-0
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img33.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Inversiones en una empresa de acueducto
              p.mb-0.text-center La gerencia aplicó el grupo nominal con doce supervisores para ordenar las obras urgentes. Las ideas escritas en silencio revelaron una fuga que ningún informe había registrado, y la votación la ubicó por encima de la ampliación que la dirección tenía prevista.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img34.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Proyección de la demanda en una avícola
              p.mb-0.text-center Ante la incertidumbre del precio del maíz, la gerencia consultó por Delphi a ocho expertos del sector en tres rondas. La convergencia de sus respuestas permitió fijar contratos de abastecimiento a un año con un margen que después resultó acertado.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img35.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Plan de tecnología en una clínica
              p.mb-0.text-center La junta consultó por rondas anónimas a médicos, ingenieros y proveedores sobre qué sistema de historia clínica adoptar. Sin la presión de la reunión presencial, los médicos señalaron problemas de uso que los ingenieros no habían considerado y la elección cambió.
      
    .row.justify-content-center
      .col-lg-10
        .tarjeta.tema1-destacado-acento
          .row.align-items-center
            .col-lg-4.d-none.d-lg-block
              img(src="@/assets/curso/temas/t1/img36.svg" alt="")
            .col-lg-8.px-5
              p En los tres casos la técnica no reemplazó la decisión de la gerencia; la alimentó con conocimiento que de otro modo no habría llegado, porque dio a cada voz el mismo peso durante el análisis.
              p.mb-0 Las técnicas participativas ayudan a decidir qué es prioritario, pero no indican en qué dirección puede crecer la empresa ni si su organización interna está preparada para hacerlo. Esas dos preguntas tienen herramientas propias.
            

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Matriz de Ansoff y modelo McKinsey 7S
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9
        p.mb-4 La matriz de Ansoff fue propuesta por Ansoff (1957) para identificar y evaluar las opciones de crecimiento de una organización a partir de dos ejes, los productos, existentes o nuevos, y los mercados, actuales o nuevos. La intersección de esos ejes genera cuatro estrategias con distintos niveles de riesgo y de retorno.
        .tema1-fondo-primario-claro.p-4.mb-4
          p.mb-0 El modelo de las 7S, difundido por Peters y Waterman (1982), postula que el desempeño de una organización depende de la coherencia entre siete factores internos. Los tres elementos duros, estrategia, estructura y sistemas, son más fáciles de modificar; los cuatro elementos blandos, estilo, personal, habilidades y valores compartidos, están ligados a la cultura.
        .row.align-items-center
          .col-auto.d-none.d-lg-block: img.tema1-icono-84(src="@/assets/curso/temas/t1/img37.svg" alt="")
          .col
            p.mb-0 Las dos herramientas se complementan en la práctica colombiana. La matriz indica hacia dónde crecer y el modelo revela si la organización está alineada para lograrlo, porque una decisión de crecimiento que solo considera la estrategia tiende a fracasar en la implementación, aunque sea correcta en el papel.
      .col-lg-3.d-none.d-lg-block
        img.tema1-img-cover(src="@/assets/curso/temas/t1/img38.png" alt="")
    p.mb-4 Las cuatro estrategias de la matriz se ordenan de menor a mayor riesgo, y esa progresión orienta la elección según la tolerancia al riesgo y las capacidades de cada empresa. Se describen a continuación con la acción habitual que pone en marcha cada una:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema1-destacado-acento.p-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Penetración de mercado]#[br] Aumentar la participación en los mercados actuales con los productos existentes, la opción de menor riesgo cuando el mercado puede absorber más oferta. Acción habitual: programas de fidelización, mejoras del servicio o ajustes de precio.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Desarrollo de mercado]#[br] Llevar los productos existentes a mercados nuevos, geográficos o de segmento, lo que exige comprender el nuevo mercado y adecuar los canales. Acción habitual: abrir una sede en otra ciudad o vender por comercio electrónico a otra región.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Desarrollo de producto]#[br] Crear productos o servicios nuevos para los mercados que la empresa ya conoce, con inversión en innovación donde el ciclo de vida es corto. Acción habitual: diseñar una línea adaptada a las necesidades de los clientes actuales.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Diversificación]#[br] Ingresar a mercados nuevos con productos que la organización aún no ofrece, la estrategia de mayor riesgo, relacionada o no según exista el vínculo con la actividad actual. Acción habitual: adquirir o crear un negocio en otro sector.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t1/img39.svg" alt="")
      .col-lg-9
        p.mb-4 La matriz no prescribe qué estrategia elegir. Ofrece un mapa para valorar las alternativas, y su aplicación es más potente combinada con el FODA y el PESTEL, porque esos diagnósticos aportan el contexto para juzgar la viabilidad de cada cuadrante.
        .tema1-destacado-secundario.p-4
          p.mb-0 Para reconocer en qué cuadrante se ubica una alternativa basta con responder dos preguntas, si el producto es el actual o uno nuevo y si el mercado es el conocido o uno distinto. La combinación de esas respuestas ordena las cuatro estrategias de menor a mayor riesgo, de modo que la gerencia identifica cuánto se aleja de lo que ya domina antes de comprometer recursos. La figura 1 presenta la matriz que resulta de ese cruce, con los mercados en las columnas y los productos en las filas.
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Matriz de Ansoff: estrategias de crecimiento según productos y mercados
    .row.justify-content-center.mb-4
      .col-lg-10
        img.d-none.d-lg-block(src="@/assets/curso/temas/t1/img40.svg" alt="La figura 1 presenta la matriz de Ansoff. Cruza productos actuales o nuevos con mercados actuales o nuevos y da cuatro caminos de crecimiento, del menos arriesgado al más arriesgado. Al usarla, la gerencia reconoce cuánto riesgo asume con cada opción antes de invertir.")
        img.d-block.d-lg-none(src="@/assets/curso/temas/t1/img40_1.svg" alt="La figura 1 presenta la matriz de Ansoff. Cruza productos actuales o nuevos con mercados actuales o nuevos y da cuatro caminos de crecimiento, del menos arriesgado al más arriesgado. Al usarla, la gerencia reconoce cuánto riesgo asume con cada opción antes de invertir.")
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p.mb-4 Ubicar la alternativa en la matriz no cierra la decisión, pero sí fija el nivel de riesgo que la gerencia acepta. Con ese dato claro, la pregunta siguiente ya no es hacia dónde crecer, sino si la organización está preparada para hacerlo.
        .tema1-fondo-primario-claro.p-4
          p.mb-0 En ese punto interviene el modelo de las 7S. Antes de una decisión de cambio, la gerencia examina el estado de la organización en siete factores, identifica cuáles están alineados y cuáles presentan desajustes, define el estado deseado y elabora un plan para cerrar las brechas. Ese examen se hace factor por factor. Tres de ellos son duros, la estrategia, la estructura y los sistemas, y se ajustan con relativa facilidad; los otros cuatro son blandos, los valores compartidos, las habilidades, el estilo y el personal, y dependen de la cultura de la empresa. Cada factor, con su definición y la pregunta que permite comprobar si está alineado, se presenta a continuación:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema1-img-cover(src="@/assets/curso/temas/t1/img42.png" alt="")
    
    .row.justify-content-center.mb-4
      .col-lg-10
        h5.mb-3 Modelo McKinsey 7S: siete factores interconectados
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              img(src="@/assets/curso/temas/t1/img43.svg" alt="Infografía interactiva del modelo McKinsey 7S.")
            .tarjeta.tema1-conectada-4.p-3(x="50%" y="10%" numero="+")
              p Plan para lograr una ventaja competitiva.
              p.mb-0 #[strong Pregunta clave:] ¿está alineada con el entorno y con los recursos internos?
            .tarjeta.tema1-conectada-4.p-3(x="70%" y="30%" numero="+")
              p Organización y jerarquía de la empresa.
              p.mb-0 #[strong Pregunta clave:] ¿cómo se distribuyen los roles, las responsabilidades y la autoridad?
            .tarjeta.tema1-conectada-4.p-3(x="71%" y="68%" numero="+")
              p Procesos y procedimientos de la operación diaria.
              p.mb-0 #[strong Pregunta clave:] ¿apoyan la estrategia o la frenan?
            .tarjeta.tema1-conectada-4.p-3(x="50%" y="91%" numero="+")
              p Competencias y capacidades distintivas.
              p.mb-0 #[strong Pregunta clave:] ¿qué hace bien la organización?
            .tarjeta.tema1-conectada-4.p-3(x="30%" y="67%" numero="+")
              p Estilo de liderazgo y cultura de toma de decisiones.
              p.mb-0 #[strong Pregunta clave:] ¿cómo actúan los líderes?
            .tarjeta.tema1-conectada-4.p-3(x="32%" y="29%" numero="+")
              p Talento humano: selección, formación, motivación y evaluación del equipo.
              p.mb-0 #[strong Pregunta clave:] ¿cuenta la empresa con las personas que la decisión exige?
            .tarjeta.tema1-conectada-4.p-3(x="50%" y="56%" numero="+")
              p Valores centrales y cultura organizacional, núcleo del modelo.
              p.mb-0 #[strong Pregunta clave:] ¿qué principios guían las decisiones de todos?
        .d-block.d-lg-none
          img(src="@/assets/curso/temas/t1/img43_1.svg" alt="")
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema1-destacado-acento.p-4
          p.mb-0 Las siete preguntas se responden en conjunto, porque un factor desalineado arrastra a los demás. Una estrategia acertada con un personal que no tiene las habilidades que exige, o con sistemas que no la respaldan, se queda en el papel; por eso la revisión completa precede a cualquier cambio.
    p.mb-4 La combinación de ambas herramientas se comprende mejor en decisiones reales, en las que la elección del camino de crecimiento obligó a revisar la alineación interna, como en los siguientes casos colombianos:
    .row.justify-content-center.mb-0
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img45.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Lechería
              p.mb-0.text-center La gerencia optó por el desarrollo de producto, yogur y quesos madurados para sus clientes actuales, y el modelo 7S reveló que el personal no dominaba la nueva tecnología. Seis meses de capacitación previa evitaron los lotes defectuosos que habían arruinado a un competidor.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img46.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Ferretería
              p.mb-0.text-center Decidió penetración de mercado con un programa de crédito a maestros de obra. Al examinar el estilo de dirección, la gerencia notó que el control centralizado del dueño frenaría las aprobaciones y delegó en dos vendedores, con lo que la cartera creció sin mora.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img47.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Hotel
              p.mb-0.text-center Consideró diversificar hacia el transporte turístico, pero el análisis de habilidades y valores evidenció que no tenía experiencia en operar vehículos ni cultura de seguridad vial. Se alió con un transportador y evitó una inversión que no dominaba.
    p.mb-4 En los tres casos la matriz indicó el rumbo y el modelo advirtió sobre las condiciones para seguirlo. La decisión final no fue la más ambiciosa, sino la que la organización podía ejecutar con sus siete factores alineados.
    p.mb-0 Elegir el rumbo y alinear la organización deja pendiente cómo saber si la estrategia funciona y cómo prepararse para los futuros que podrían alterarla. Esas dos necesidades, medir y anticipar, tienen sus propias herramientas.

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5 Cuadro de mando, escenarios e información gerencial
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8
        p.mb-4 El cuadro de mando integral, presentado por Kaplan y Norton (1996), parte de que la gestión de una organización requiere evaluar su desempeño desde cuatro perspectivas complementarias. Estas son la financiera, la del cliente, la de procesos internos y la de aprendizaje y crecimiento. Supera así los enfoques de control basados solo en indicadores financieros.
        .tema1-fondo-primario-claro.p-4
          .row.align-items-center
            .col-auto.d-none.d-lg-block: img.tema1-icono-84(src="@/assets/curso/temas/t1/img48.svg" alt="")
            .col
              p.mb-0 Para la decisión gerencial su aporte es doble. Obliga a considerar los efectos de una alternativa en las cuatro perspectivas y ofrece los indicadores con los que se hará seguimiento a lo decidido. Una decisión que mejora la rentabilidad inmediata, pero deteriora la satisfacción del cliente queda en evidencia con este marco.
      .col-lg-4.d-none.d-lg-block
        img.tema1-img-cover(src="@/assets/curso/temas/t1/img49.png" alt="")
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t1/img49.svg" alt="")
      .col-lg-9
        p.mb-4 Dos herramientas amplían el horizonte del cuadro de mando. El análisis de escenarios, difundido por la prospectiva de Godet (2000), prepara a la organización para varios futuros posibles; y los sistemas de información gerencial recolectan y distribuyen los datos que alimentan indicadores y escenarios. En Colombia, la factura electrónica y los programas en la nube han puesto esos datos al alcance de las pymes.
        .row.align-items-center
          .col-auto.d-none.d-lg-block: img.tema1-icono-84(src="@/assets/curso/temas/t1/img50.svg" alt="")
          .col
            p.mb-0 Las cuatro perspectivas se encadenan en una relación de causa y efecto que va del aprendizaje a los resultados financieros, y por eso conviene examinarlas en ese orden. Cada una responde a una pregunta sobre la organización y se describe a continuación con un indicador frecuente para seguirla:
    .row.justify-content-center.mb-4
      .col-lg-10
        LineaTiempoD.color-primario
          p.mb-0(numero="1" titulo="Aprendizaje y crecimiento") Se enfoca en los activos intangibles que sustentan el desempeño a largo plazo, como el capital humano, los sistemas de información y la cultura, y habilita a las demás perspectivas. <br><br>#[b Indicador frecuente:] horas de formación por persona o rotación del personal clave.
          p.mb-0(numero="2" titulo="Procesos internos") Identifica los procesos críticos que la organización debe ejecutar con excelencia para cumplir su propuesta de valor, desde la innovación hasta la atención posterior al servicio. <br><br>#[b Indicador frecuente:] tiempo de respuesta a un pedido o porcentaje de productos sin defectos.
          p.mb-0(numero="3" titulo="Cliente") Indaga sobre la propuesta de valor que la organización entrega y sobre la satisfacción y la lealtad que genera en los segmentos que atiende. <br><br>#[b Indicador frecuente:] tasa de retención de clientes o índice de satisfacción medido por encuesta.
          p.mb-0(numero="4" titulo="Financiera") Responde a cómo perciben la empresa sus propietarios y se expresa en sostenibilidad financiera y generación de utilidades. Indicador frecuente: rentabilidad sobre el patrimonio o crecimiento de los ingresos frente al periodo anterior.
    p.mb-4 Las perspectivas no se suman, se encadenan. Si la organización no invierte en su gente y en sus sistemas, los procesos se deterioran, los clientes lo notan y las finanzas lo reflejan al final. El cuadro de mando hace visible esa cadena antes de que el último eslabón la delate.
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 1.
      span Las cuatro perspectivas del cuadro de mando integral
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Perspectiva financiera
            th Perspectiva del cliente
            th Procesos internos
            th Aprendizaje y crecimiento
        tbody
          tr
            td ¿Cómo nos perciben los accionistas? Rentabilidad, crecimiento de ingresos, retorno sobre la inversión.
            td ¿Cómo nos perciben los clientes? Satisfacción, fidelización, participación de mercado.
            td ¿En qué debemos sobresalir? Eficiencia operativa, innovación, calidad de procesos.
            td ¿Cómo sostenemos la capacidad de cambiar? Talento, cultura, tecnología, conocimiento.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema1-frase.p-4
          img(src="@/assets/curso/temas/t1/img51.svg" alt="")
          p.mb-0.fw-bold.text-center Los resultados financieros llegan al final de una cadena que empieza en las personas. Medir solo el último eslabón es enterarse tarde de lo que las demás perspectivas ya estaban indicando.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-4 El análisis de escenarios complementa el cuadro de mando cuando el futuro no puede proyectarse en una sola línea. Identifica las fuerzas del entorno de mayor impacto e incertidumbre, las usa como ejes y construye entre tres y cuatro narrativas coherentes, una optimista, una pesimista y las intermedias. Los sistemas de información gerencial aportan a ambos ejercicios los datos que los sostienen, desde los registros de transacciones hasta los tableros de inteligencia de negocios.
        p.mb-0 Las tres herramientas se apoyan entre sí en la práctica de empresas colombianas de distinto sector, como se evidencian en los siguientes casos:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t1/img52.svg" alt="")
    .row.justify-content-center.mb-0
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img53.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Confecciones
              p.mb-0.text-center El cuadro de mando reveló que la rentabilidad crecía mientras la rotación del personal calificado subía cada mes. La gerencia reconoció la cadena de causa y efecto y ajustó los turnos antes de que la calidad, y luego los clientes, resintieran la salida de las operarias expertas.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img54.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Exportadora de flores
              p.mb-0.text-center Construyó tres escenarios de tasa de cambio y de costo del flete aéreo, y definió para cada uno qué proporción de la cosecha vendería con contrato anticipado. Cuando la tasa cayó, el plan del escenario pesimista ya existía y la empresa evitó vender a pérdida.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img55.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.w-100.h-100
            .p-4
              br
              h5.text-center Cadena de droguerías
              p.mb-0.text-center Integró las ventas de sus ocho puntos en un tablero de inteligencia de negocios y detectó que dos sedes vendían medicamentos vencidos por falta de rotación. El sistema permitió redistribuir el inventario cada semana y eliminó las pérdidas por vencimiento.
    p.mb-4 En los tres casos la información no fue el problema, sino el orden con que se organizó. El cuadro de mando le dio estructura, los escenarios le dieron horizonte y el sistema de información la puso a disposición de quien decide.
    p.mb-0 Las herramientas cualitativas ordenan el juicio, pero no siempre bastan para comparar alternativas con cifras. Cuando la decisión compromete recursos medibles, hace falta cuantificar costos, beneficios y probabilidades, y ese es el aporte de las herramientas del tema siguiente.
</template>

<script>
export default {
  name: 'Tema1',
}
</script>
