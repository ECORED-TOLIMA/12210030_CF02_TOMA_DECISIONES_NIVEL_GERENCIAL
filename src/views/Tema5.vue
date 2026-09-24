<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Ética, sostenibilidad y comunicación

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        .tema5-destacado-primario.p-4.mb-4
          p.mb-0 Las decisiones gerenciales no ocurren en una esfera técnica aislada de sus consecuencias sociales, ambientales y éticas. Cada elección de un directivo afecta a personas, colaboradores, clientes, proveedores, comunidades y generaciones futuras. Por eso la dimensión ética no es un añadido ornamental a los análisis estratégicos y cuantitativos, sino una condición de legitimidad y de continuidad de la acción directiva.
        p.mb-0 El comportamiento ético del gerente no se reduce a cumplir la norma, sino que abarca la manera en que decide y las consecuencias que asume ante todos los grupos de interés. Cuatro rasgos definen esa conducta:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema5-img-cover(src="@/assets/curso/temas/t5/img1.png" alt="")
      
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema5-destacado-acento.p-4
          ul.lista-ul.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Legalidad:] respeta las leyes y normas que rigen la actividad, el punto de partida de toda decisión ética.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Responsabilidad:] considera el impacto de sus decisiones en todos los grupos de interés.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Integridad:] actúa con coherencia aun cuando las presiones externas o los incentivos económicos apunten en otra dirección.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Visión estratégica:] entiende que esa integridad es valiosa en sí misma y, además, fortalece a la organización.
    p.mb-4 En Colombia, casos recientes de empresas sancionadas por prácticas ambientales o laborales confirman que una decisión rentable a corto plazo puede costar la reputación y la continuidad del negocio. Las organizaciones con liderazgos éticos construyen reputaciones más sólidas, retienen mejor el talento y generan mayor confianza en las comunidades donde operan.
    .row.align-items-stretch.justify-content-center
      .col-lg-7.order-2.order-lg-1
        .tema5-destacado-secundario.p-4.h-100
          img.tema5-icono-84.mb-4(src="@/assets/curso/temas/t5/img2.svg" alt="")
          p.mb-0 Las preguntas sobre a quién afecta una decisión y qué costo tendrá mañana no se responden solo con cifras. Conducen al terreno de la ética gerencial, donde la organización define los principios que orientan sus elecciones y la responsabilidad que asume frente a quienes las reciben.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.h-100.w-100(src="@/assets/curso/temas/t5/img3.svg" alt="")

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Ética gerencial y responsabilidad social
    p.mb-4 La ética gerencial es el conjunto de principios y valores que orientan las decisiones y conductas de quienes ejercen roles directivos. Incluye la honestidad en la información que se utiliza y comunica, la equidad en el trato a los grupos de interés y la responsabilidad por las consecuencias de las propias decisiones. Exige también integridad entre los valores declarados y la conducta efectiva.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img4.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Su importancia se comprueba en los dilemas éticos, situaciones en las que el gerente debe elegir entre alternativas que benefician a unos y perjudican a otros, o en las que valores igualmente legítimos entran en tensión. Reducir costos prescindiendo de personal, adoptar tecnologías que desplazan puestos de trabajo o elegir proveedores por precio frente a sus condiciones laborales son dilemas que exigen deliberación ética y no solo análisis técnico.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-9
        .row.align-items-center.mb-4
          .col-auto.d-none.d-lg-block
            img.tema5-icono-84(src="@/assets/curso/temas/t5/img5.svg" alt="")
          .col
            p.mb-0 La responsabilidad social empresarial es la expresión institucional de esa ética, el compromiso voluntario de la organización con prácticas que van más allá del cumplimiento legal y buscan generar valor para todos sus grupos de interés. En las empresas colombianas que definen su misión con propósito, la responsabilidad social no es un programa adicional, sino una consecuencia de sus principios fundacionales.
        p.mb-0 Para afrontar los dilemas, la reflexión ética ofrece marcos complementarios que conducen a preguntas distintas sobre la misma decisión. Ninguno resuelve por sí solo un dilema real, pero aplicarlos juntos evita que la decisión se tome por conveniencia disfrazada de principio. Tres enfoques concentran la deliberación gerencial y se describen a continuación con la pregunta que cada uno formula:
      .col-lg-3.col-8.d-none.d-lg-block
        img(src="@/assets/curso/temas/t5/img6.svg" alt="")
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t5/img7.svg" alt="")
          .tarjeta.tema5-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Enfoque consecuencialista
              p.text-center Evalúa las alternativas por sus consecuencias y prefiere la que produce el mayor bienestar para el mayor número de personas afectadas.
              p.mb-0.text-center #[strong Pregunta clave:] ¿qué alternativa deja mejor, en conjunto, a todos los que reciben sus efectos?
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t5/img8.svg" alt="")
          .tarjeta.tema5-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Enfoque deontológico
              p.text-center Evalúa las alternativas según su conformidad con deberes y principios que no dependen de las consecuencias, como no engañar o cumplir lo prometido.
              p.mb-0.text-center #[strong Pregunta clave:] ¿esta alternativa respeta los deberes que la empresa tiene con cada afectado?
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t5/img9.svg" alt="")
          .tarjeta.tema5-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Ética de las virtudes
              p.text-center Se centra en el carácter de quien decide y en la persona que la organización quiere ser, más que en reglas o resultados.
              p.mb-0.text-center #[strong Pregunta clave:] ¿qué haría en esta situación un directivo íntegro al que la empresa quisiera parecerse?
    p.mb-4 Los tres enfoques rara vez coinciden por completo, y esa tensión es útil. Cuando la alternativa que produce más beneficio incumple un deber, o cuando cumplir el deber perjudica a muchos, la deliberación se vuelve explícita y la decisión final puede explicarse con las razones que la sustentaron.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema5-frase.p-4
          img(src="@/assets/curso/temas/t5/img10.svg" alt="")
          p.mb-0.fw-bold.text-center La ética no es lo que la empresa hace cuando le conviene. Se comprueba en la decisión que cuesta, cuando el análisis financiero apunta en una dirección y los valores declarados en otra.
    p.mb-4 La deliberación ética se aprende en decisiones concretas, no en declaraciones de principios. Las empresas colombianas que la han incorporado suelen hacerlo a partir de un dilema que las obligó a preguntarse quién resultaba afectado y qué deber tenían con esa persona. De esa pregunta surgieron alternativas que el análisis inicial no contemplaba.
    p.mb-4 Los siguientes casos evidencian esa deliberación en organizaciones de distinto tamaño:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema5-casos.p-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Cierre de una planta en una empresa textil]#[br] La opción más rentable era cerrar y despedir a ochenta personas. La gerencia aplicó el enfoque consecuencialista y el deontológico, negoció un plan de reconversión con seis meses de formación y recolocó a la mitad; el costo fue mayor y la reputación en el municipio, intacta.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Selección de proveedor en una comercializadora]#[br] El proveedor más barato incumplía la seguridad social de sus trabajadores. La empresa lo descartó por el deber de no beneficiarse de esa práctica, y explicó la decisión a los socios con el sobrecosto exacto, que aceptaron como el precio de su propia coherencia.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Información a clientes en una empresa de servicios funerarios]#[br] Un error de facturación había cobrado de más a doscientos clientes durante un año. La gerencia decidió informarlo y devolver el dinero antes de que alguien lo reclamara, guiada por la pregunta de qué haría la empresa que quería ser, y la confianza de los clientes se fortaleció.
    
    .row.align-items-stretch.justify-content-center.mb-0
      .col-lg-9.order-2.order-lg-1
        p.mb-4 En los cuatro casos la decisión ética no fue la más barata a corto plazo, pero sí la que la empresa pudo explicar sin reservas a todos los afectados. Esa capacidad de explicación es la prueba práctica de que la deliberación ocurrió.
        .tema5-destacado-primario.p-4
          p.mb-0 La deliberación ética obliga a considerar a todos los afectados por una decisión, y algunos de ellos nunca se sientan en la mesa como el entorno natural y las generaciones que lo heredarán. Incluirlos supone medir el resultado de la empresa no solo en lo económico, sino también en lo social y lo ambiental. Ese marco de tres dimensiones es el que propone la sostenibilidad.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.h-100.w-100(src="@/assets/curso/temas/t5/img11.svg" alt="")

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Sostenibilidad y triple cuenta de resultados
    .row.align-items-center.mb-4
      .col-auto.d-none.d-lg-block
        img.tema5-icono-84(src="@/assets/curso/temas/t5/img12.svg" alt="")
      .col
        p.mb-0 El concepto de triple cuenta de resultados fue introducido por Elkington (1994) para ampliar la evaluación del desempeño empresarial más allá de la dimensión financiera. Su premisa es que una empresa exitosa y sostenible debe generar valor en tres dimensiones a la vez, la económica, la social y la ambiental, conocidas en inglés como las tres P, beneficio, personas y planeta.
    p.mb-4 Cada una de estas dimensiones aporta una mirada distinta sobre el valor que genera la organización y ninguna basta por sí sola para considerar sostenible una decisión:
    .row.justify-content-center
      .col-md-6.col-xl-4.mb-4
        .tema5-destacado-secundario.p-4.h-100
          h5 Económica
          p.mb-0 #[strong #[i Profit] - Beneficio.] Generar valor económico sostenible: empleo de calidad, impuestos justos y prácticas comerciales leales.
      .col-md-6.col-xl-4.mb-4
        .tema5-destacado-secundario.p-4.h-100
          h5 Social
          p.mb-0 #[strong #[i People] - Personas.] Cuidar el impacto en las personas: condiciones laborales dignas, equidad, inclusión y derechos humanos.
      .col-md-6.col-xl-4.mb-4
        .tema5-destacado-secundario.p-4.h-100
          h5 Ambiental
          p.mb-0 #[strong #[i Planet] - Planeta.] Reducir la huella ecológica: uso responsable de los recursos, menos emisiones y residuos, y cuidado de la biodiversidad.
    p.mb-4 Una decisión sostenible no maximiza una dimensión a costa de las otras, sino que busca el equilibrio entre las tres. Evaluarlas juntas convierte la sostenibilidad en un criterio real de decisión y no en una simple declaración de intenciones.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img13.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 En el contexto colombiano las decisiones que ignoran la dimensión ambiental son cuestionables en lo ético y arriesgadas en lo estratégico. Las regulaciones se endurecen de forma progresiva, los consumidores y los inversionistas orientan sus preferencias hacia la sostenibilidad y los eventos climáticos afectan a los negocios de cualquier sector en el mismo año.
    p.mb-4 Las tres dimensiones de la triple cuenta se evalúan por separado, pero la decisión sostenible es la que las considera juntas y gestiona de manera explícita los compromisos entre ellas. Cada dimensión abarca aspectos concretos que la gerencia puede medir, y se describen a continuación con un criterio de evaluación aplicable en una empresa colombiana:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema5-componentes
          .tema5-componentes__item.p-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                img.tema5-icono-84(src="@/assets/curso/temas/t5/img14.svg" alt="")
              .col
                h5 Dimensión económica
                p Creación de valor económico sostenible en el tiempo, que incluye empleo de calidad, pago justo de impuestos, prácticas comerciales leales y contribución al desarrollo del sector, y no solo la utilidad de los propietarios.
                p.mb-0 #[strong Criterio de evaluación:] la alternativa mantiene la rentabilidad sin trasladar los costos a terceros.
          .tema5-componentes__item.p-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                img.tema5-icono-84(src="@/assets/curso/temas/t5/img15.svg" alt="")
              .col
                h5 Dimensión social
                p Impacto de la organización en las personas, con las condiciones laborales, la equidad, la inclusión de poblaciones vulnerables y el respeto a los derechos humanos en la cadena de valor.
                p.mb-0 #[strong Criterio de evaluación:] la alternativa mejora o al menos no deteriora la situación de trabajadores y comunidades.
          .tema5-componentes__item.p-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                img.tema5-icono-84(src="@/assets/curso/temas/t5/img16.svg" alt="")
              .col
                h5 Dimensión ambiental
                p Huella ecológica de la organización, con el uso de recursos naturales, las emisiones, la generación de residuos y el impacto en la biodiversidad.
                p.mb-0 #[strong Criterio de evaluación:] la alternativa reduce o compensa su efecto sobre el entorno y cumple con anticipación la regulación.
    p.mb-4 Las tres dimensiones pueden entrar en tensión, y la triple cuenta no elimina esa tensión, la hace visible. Una alternativa que gana en lo económico y pierde en lo ambiental no queda descartada de antemano, pero la gerencia debe decidir el compromiso a sabiendas y no descubrirlo cuando llegue la sanción.
    p.mb-4 La aplicación práctica de la triple cuenta consiste en incorporar los tres criterios en la etapa de análisis de las alternativas. La matriz de ponderación multicriterio permite valorar los tres ejes junto con los demás criterios de la decisión, de modo que las alternativas se comparen por su valor económico, social y ambiental a la vez.
    p.mb-4 Los siguientes casos de empresas colombianas evidencian decisiones evaluadas con ese marco:
    .tarjeta--container.row.mb-4
      .col-md-6.col-xl-4.tarjeta.tema5-conectada-1.p-5
        img.tema5-conectada__icono(src="@/assets/curso/temas/t5/img17.svg" alt="")
        h5.text-center Cambio de combustible en una ladrillera
        p.mb-0.text-center El carbón era más barato, pero la matriz con las tres dimensiones reveló que el gas reducía las quejas de la comunidad, eliminaba el riesgo de sanción y se pagaba en cuatro años con el ahorro en mantenimiento. La decisión ambiental resultó también la económica a mediano plazo.
      .col-md-6.col-xl-4.tarjeta.tema5-conectada-2.p-5
        img.tema5-conectada__icono(src="@/assets/curso/temas/t5/img18.svg" alt="")
        h5.text-center Proveedores locales en un hotel
        p.mb-0.text-center Comprar alimentos a los campesinos de la zona costaba un 8 % más que a un mayorista central. La dimensión social inclinó la decisión y, con el tiempo, el hotel convirtió ese vínculo en su principal argumento de mercadeo.
      .col-md-6.col-xl-4.tarjeta.tema5-conectada-3.p-5
        img.tema5-conectada__icono(src="@/assets/curso/temas/t5/img19.svg" alt="")
        h5.text-center Gestión de residuos en una empresa de baterías
        p.mb-0.text-center La gerencia comparó disponer los residuos con un gestor autorizado o seguir con el actual, más barato. El criterio ambiental y el riesgo legal pesaron más que el ahorro, y meses después una inspección cerró a un competidor que había elegido lo contrario.
    .row.align-items-stretch.justify-content-center.mb-0
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema5-img-cover(src="@/assets/curso/temas/t5/img20.png" alt="")
      .col-lg-9
        p.mb-4 En los cuatro casos la dimensión que parecía un costo terminó siendo una ventaja, no por casualidad, sino porque la triple cuenta obligó a estimar los efectos que el análisis financiero dejaba por fuera. Decidir con las tres dimensiones no es más caro; es más completo.
        .tema5-destacado-primario.p-4
          p.mb-4 Una decisión ética y sostenible todavía puede fracasar si quienes la reciben no la entienden o no confían en ella. Comunicarla con claridad, respeto y firmeza es la tarea que sigue, y para la gerencia es una competencia tan decisiva como el análisis que la precedió.

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3 Comunicación asertiva de las decisiones
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t5/img21.svg" alt="")
      .col-lg-9
        .tema5-destacado-secundario.p-4.mb-4
          .row.align-items-center
            .col-auto.d-none.d-lg-block
              img.tema5-icono-84(src="@/assets/curso/temas/t5/img22.svg" alt="")
            .col
              p.mb-0 Comunicar una decisión es el proceso mediante el cual el gerente selecciona, diseña y transmite los mensajes apropiados a cada audiencia, por los canales adecuados y en el momento oportuno. Hacerlo de forma asertiva consiste en expresar la decisión con claridad y firmeza, respetando las perspectivas de los interlocutores, sin caer en la imposición autoritaria ni ceder ante presiones injustificadas.
        p.mb-0 En las empresas colombianas, la comunicación de una decisión suele reducirse a un correo o a un anuncio en reunión, y por eso una decisión técnicamente correcta genera desconfianza, rumores y resistencia. Diseñar la comunicación con el mismo cuidado que el análisis es lo que convierte una decisión tomada en una decisión aceptada.
    p.mb-4 Comunicar una decisión con asertividad y estrategia se apoya en cuatro elementos que el gerente define antes de anunciar, desde a quién se dirige hasta con qué actitud lo hace. Se describen a continuación con la práctica que permite reconocer cada uno en una comunicación bien hecha:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema5-casos.p-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Análisis de audiencias]#[br] Identificación de los grupos de interés y de lo que cada uno necesita saber. El equipo directivo requiere fundamentos técnicos; los colaboradores, claridad sobre su trabajo, y los socios, el impacto en los retornos. Práctica: un mensaje distinto para cada audiencia, con la misma decisión.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Mensajes clave]#[br] Formulación clara y coherente de la decisión, con la idea principal primero y su desarrollo después, según el principio de la pirámide invertida, sin simplificar hasta distorsionar ni complicar hasta oscurecer. Práctica: quien lee solo el primer párrafo entiende qué se decidió y por qué.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Selección de canales]#[br] Elección del medio (reunión presencial, correo, boletín, intranet o espacio de diálogo), según la naturaleza del mensaje, la cultura de la organización y cada audiencia. Práctica: las decisiones de alto impacto emocional se comunican en persona, donde el gerente puede responder en tiempo real.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Actitud asertiva]#[br] Manera de comunicar directa y honesta sobre el contenido de la decisión y sus consecuencias, que reconoce las preocupaciones legítimas de los afectados sin ceder ante presiones injustificadas, y mantiene un tono respetuoso. Práctica: la gerencia explica la decisión difícil sin culpar a nadie ni disculparse por tomarla.
    p Los cuatro elementos se diseñan juntos y en ese orden. Sin análisis de audiencias el mensaje no llega, sin mensaje claro el canal no importa, sin el canal adecuado la reacción no puede gestionarse y sin asertividad la comunicación oscila entre la imposición y la excusa.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema5-frase.p-4
          img(src="@/assets/curso/temas/t5/img23.svg" alt="")
          p.mb-0.fw-bold.text-center Comunicar una decisión no es anunciarla. Es lograr que quien la recibe entienda por qué se tomó, qué le corresponde hacer y por dónde puede decir lo que piensa.
    p.mb-4 La asertividad se pone a prueba en las decisiones que nadie quiere anunciar, un cierre, un cambio de condiciones, una restricción o un resultado negativo. En esos momentos el gerente que comunica con claridad y respeto conserva la confianza incluso de quienes resultan perjudicados, mientras que el que evade o impone la pierde también entre los beneficiados.
    p.mb-4 Los siguientes casos de empresas colombianas evidencian cómo la comunicación definió la acogida de una decisión:
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t5/img24.svg" alt="")
          .tarjeta.tema5-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Reducción de la nómina en una empresa de #[em call center]
              p.mb-0.text-center La gerencia comunicó la decisión primero a los afectados, en reuniones individuales con la explicación y las condiciones de retiro, y luego al resto del equipo con las razones del mercado. No hubo rumores, y varias de las personas retiradas recomendaron después a la empresa como empleador.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t5/img25.svg" alt="")
          .tarjeta.tema5-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Aumento de tarifas en una empresa de acueducto
              p.mb-0.text-center El mensaje se diseñó por audiencias, una carta breve con la idea principal para los usuarios y una presentación técnica para la junta y el concejo. La tarifa se aprobó sin las protestas que el aumento anterior, anunciado por un aviso en la factura, había provocado.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t5/img26.svg" alt="")
          .tarjeta.tema5-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Cambio de horario en una fábrica de vidrio
              p.mb-0.text-center La decisión se anunció por correo un viernes y el lunes la planta amaneció con rumores de cierre. La gerencia rectificó con una reunión presencial por turno, respondió cada pregunta y la producción se normalizó, pero la confianza tardó meses en recuperarse.
    p.mb-4 En los cuatro casos la decisión era la misma con o sin comunicación diseñada; lo que cambió fue la reacción de quienes la recibieron. El tercer caso, con su rectificación tardía, indica el costo de tratar la comunicación como un trámite posterior a la decisión.
    .row.justify-content-center.mb-0
      .col-lg-10
        .tema5-destacado-secundario.p-4
          p.mb-0 Algunas decisiones no solo deben comunicarse; deben conducirse, porque transforman la organización durante meses. Cómo guiar a las personas a través de esa transformación sin que el cambio se detenga a mitad de camino es el asunto del último numeral.

    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.4 Gestión del cambio en decisiones de alto impacto
    p.mb-4 Las decisiones gerenciales de alto impacto, como reestructuraciones, fusiones, implementación de nuevas tecnologías o cambios de modelo de negocio generan procesos de cambio que deben gestionarse con planificación, sensibilidad y liderazgo sostenido. La gestión del cambio es la disciplina que estudia cómo conducir a las organizaciones y a las personas a través de esas transiciones, con el menor costo humano y la mayor probabilidad de éxito.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img27.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Su importancia se aprecia en un dato de Kotter (1996), según el cual solo cerca de una tercera parte de los procesos de cambio organizacional alcanzan sus objetivos. Las razones del fracaso se repiten, un sentido de urgencia insuficiente, la ausencia de una coalición que lo lidere, una visión poco clara o mal comunicada y la incapacidad de gestionar la resistencia activa y pasiva.
    p.mb-4 En las organizaciones colombianas con cultura participativa, el cambio exige que los procesos se diseñen con la participación de los equipos y que la junta directiva o el órgano de gobierno legitime las decisiones. Eso los hace más lentos, pero también más sólidos, porque cuentan con el respaldo de la comunidad organizacional y no solo con la orden de la gerencia.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.tema5-destacado-primario
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.order-2.order-lg-1.p-4.px-5
              p.mb-0 El modelo de Kotter (1996) propone ocho etapas para implementar el cambio, y su valor está en el orden, porque saltarse una suele explicar el fracaso de las siguientes. Para la decisión gerencial conviene agruparlas en cuatro momentos, que se describen a continuación con la señal que confirma que cada uno se ha cumplido:
            .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img.h-100.w-100(src="@/assets/curso/temas/t5/img28.svg" alt="")
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema5-casos.p-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Crear urgencia y coalición]#[br] Comunicar de manera convincente por qué el cambio es necesario y reunir un grupo con la credibilidad, las habilidades y el poder formal e informal para liderarlo. Señal de cumplimiento: personas de distintas áreas explican con sus palabras por qué no cambiar sería peor.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Formular y comunicar la visión]#[br] Construir una imagen clara y motivadora de cómo será la organización tras el cambio y difundirla por todos los canales, con líderes coherentes con ella en su conducta. Señal de cumplimiento: cualquier colaborador puede describir el destino del cambio en dos oraciones.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Eliminar obstáculos y lograr victorias tempranas]#[br] Retirar las estructuras, sistemas o prácticas que bloquean la transformación y producir resultados tangibles a corto plazo que demuestren que el cambio funciona. Señal de cumplimiento: en los primeros meses se celebra un logro concreto atribuible al cambio.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Consolidar y anclar en la cultura]#[br] Evitar declarar la victoria antes de tiempo e incorporar los nuevos comportamientos en los sistemas de gestión hasta que se vuelvan la forma habitual de trabajar. Señal de cumplimiento: los nuevos empleados adoptan la práctica como si siempre hubiera existido.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p.mb-4 Los cuatro momentos siguen un orden que no admite atajos. Una visión comunicada sin urgencia previa se percibe como un discurso, y una victoria temprana sin visión se olvida en semanas. La secuencia es la que convierte una decisión de alto impacto en un cambio que permanece.
        .tema5-destacado-primario.p-4
          p.mb-0 La comprensión de los factores de riesgo permite al gerente anticiparlos y gestionarlos de manera proactiva. La resistencia, en particular, no es un obstáculo que se elimina, sino una información que se atiende, porque quien se resiste suele conocer un costo del cambio que la gerencia no ha considerado.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema5-img-cover(src="@/assets/curso/temas/t5/img29.png" alt="")
    p.mb-4 Los siguientes casos de empresas colombianas evidencian cómo el orden de las etapas, respetado o no, definió el resultado de una decisión de alto impacto:
    .row.tema5-tarjetas-boton.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta.tarjeta--boton.tema5-tarjeta-boton.p-4.h-100
          .tema5-tarjeta-boton__iconos
            img.tema5-tarjeta-boton__img.tema5-tarjeta-boton__img--base(src="@/assets/curso/temas/t5/img30.svg" alt="")
            img.tema5-tarjeta-boton__img.tema5-tarjeta-boton__img--hover(src="@/assets/curso/temas/t5/img33.svg" alt="")
          h5 Sistema de gestión en una empresa de transporte
          p.mb-0 La gerencia empezó por instalar el programa y comunicar la visión después. Los conductores lo percibieron como vigilancia y lo boicotearon durante meses, hasta que la empresa volvió atrás, explicó la urgencia con los datos de pérdidas por rutas y reinició el proceso con una coalición de conductores antiguos.
      .col-md-6.col-xl-4.mb-4
        .tarjeta.tarjeta--boton.tema5-tarjeta-boton.p-4.h-100
          .tema5-tarjeta-boton__iconos
            img.tema5-tarjeta-boton__img.tema5-tarjeta-boton__img--base(src="@/assets/curso/temas/t5/img31.svg" alt="")
            img.tema5-tarjeta-boton__img.tema5-tarjeta-boton__img--hover(src="@/assets/curso/temas/t5/img34.svg" alt="")
          h5 Fusión de dos empresas de aseo
          p.mb-0 La coalición guía incluyó supervisores de ambas empresas y la primera victoria fue unificar la nómina sin errores en el primer mes. Ese logro, comunicado a todo el personal, sostuvo el ánimo durante la integración de rutas, que tardó un año.
      .col-md-6.col-xl-4.mb-4
        .tarjeta.tarjeta--boton.tema5-tarjeta-boton.p-4.h-100
          .tema5-tarjeta-boton__iconos
            img.tema5-tarjeta-boton__img.tema5-tarjeta-boton__img--base(src="@/assets/curso/temas/t5/img32.svg" alt="")
            img.tema5-tarjeta-boton__img.tema5-tarjeta-boton__img--hover(src="@/assets/curso/temas/t5/img35.svg" alt="")
          h5 Cambio de modelo de venta en una distribuidora
          p.mb-0 La gerencia declaró el éxito cuando las ventas digitales llegaron al 20 % y retiró el impulso. Un año después el canal había caído a la mitad, porque nunca se ancló en los incentivos de los vendedores ni en los procesos de despacho.
    p.mb-4 En los cuatro casos la decisión de cambiar era correcta, y solo dos prosperaron. La diferencia estuvo en el respeto al orden de las etapas y en la persistencia después del primer logro, que es donde la mayoría de los cambios se abandonan.
    .row.justify-content-center.mb-0
      .col-lg-10
        .tema5-destacado-primario.p-4
          p.mb-0 A lo largo del componente, las herramientas de evaluación permiten seleccionar la mejor alternativa; la estructura organizacional y el seguimiento comprueban que esa alternativa dé los resultados esperados, y el liderazgo, la ética y la comunicación le dan legitimidad y permanencia. La gestión del cambio completa ese recorrido, porque una decisión de alto impacto solo se sostiene cuando se implementa con método y se acompaña a las personas durante la transición. El reto de la gerencia está en integrar todas estas dimensiones sin renunciar a ninguna. Decidir bien y hacer seguimiento a lo decidido son las dos caras de una misma responsabilidad.
</template>

<script>
export default {
  name: 'Tema5',
}
</script>
