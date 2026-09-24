<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Liderazgo y decisión en equipo

    p.mb-4 En el nivel gerencial, decidir rara vez es un acto individual ya que la mayoría de las decisiones relevantes se toman en conjunto. La decisión colectiva se caracteriza por:
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .tema4-destacado-acento.p-3
          ul.lista-ul.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 Participación de equipos, comités o grupos de trabajo.
            li
              i.fas.fa-bookmark
              p.mb-0 Perspectivas diversas que enriquecen el análisis.
            li
              i.fas.fa-bookmark
              p.mb-0 Responsabilidad compartida entre quienes participan.
            li
              i.fas.fa-bookmark
              p.mb-0 Un gerente que no decide solo, sino que lidera el proceso hacia mejores resultados.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema4-img-cover(src="@/assets/curso/temas/t4/img1.png" alt="")
    p.mb-4 Esa capacidad exige comprender los factores que influyen en la dinámica grupal y los estilos de liderazgo con sus efectos sobre la decisión. También supone reconocer los riesgos que emergen cuando la presión hacia la conformidad supera al análisis crítico, porque un grupo cohesionado puede tomar peores decisiones que cualquiera de sus miembros por separado.
    .row.align-items-center.justify-content-center
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t4/img2.svg" alt="")
      .col-lg-7
        .tarjeta.tema4-destacado-secundario.p-4.mb-4
          p.mb-0 En organizaciones colombianas con culturas jerárquicas marcadas, la decisión en equipo suele ser más formal que real. Se consulta, pero la elección ya viene tomada de antemano, y los desacuerdos se expresan en los pasillos y no en la reunión. Los conceptos de este tema ofrecen herramientas para que la participación sea efectiva y no un trámite.
        p.mb-0 Ninguna de esas condiciones aparece sola; las crea, o las impide, la forma en que el gerente conduce la reunión y reparte la palabra. Cada forma de liderar produce una dinámica distinta en el equipo, y reconocer la propia es el primer paso para decidir mejor en grupo.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Estilos de liderazgo y su influencia en la decisión
    p.mb-4 El estilo de liderazgo de un directivo tiene un efecto profundo sobre la forma en que se toman las decisiones en su área de responsabilidad. No existe un estilo superior en todos los casos; cada uno presenta ventajas y limitaciones según el contexto, la naturaleza de la decisión, las características del equipo y las exigencias del entorno.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .tema4-destacado-secundario.p-4.h-100
          .row.align-items-center
            .col-auto.d-none.d-lg-block.mb-4
              img.tema4-icono-84(src="@/assets/curso/temas/t4/img3.svg" alt="")
            .col-lg-12
              p.mb-0 Su importancia radica en que el estilo determina cuánta información llega a la mesa y cuánto compromiso genera lo decidido. Un líder que decide solo actúa rápido, pero conoce menos; uno que consulta a todos conoce más, pero tarda; y la diferencia entre ambos no es de carácter, sino de la situación que cada decisión plantea.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema4-img-cover(src="@/assets/curso/temas/t4/Mask Group 1188020.png" alt="")
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t4/img4.svg" alt="")
      .col-lg-8
        p En las organizaciones colombianas que trabajan por equipos y proyectos, los estilos participativos tienden a ser más coherentes con una cultura de autonomía. Eso no significa renunciar a la firmeza, porque la participación requiere líderes que conduzcan la deliberación, fijen límites y actúen con decisión cuando el consenso no es posible o la urgencia lo exige.
        
        .row.align-items-center
          .col-auto.d-none.d-lg-block
            img.tema4-icono-84(src="@/assets/curso/temas/t4/img5.svg" alt="")
          .col
            p.mb-0 La teoría del liderazgo ha descrito estilos desde distintos ángulos, y para la decisión gerencial conviene reconocer cuatro. Tres se refieren a la relación con el equipo y uno, propuesto por Mintzberg (2009), a cómo el propio gerente llega a decidir. Cada estilo se presenta junto con la situación en la que rinde mejor:
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-3.mb-4
        .tarjeta.tema4-conectada-1.p-4.h-100
          img.tema4-conectada__icono(src="@/assets/curso/temas/t4/img6.svg" alt="")
          h5.text-center Liderazgo directivo
          p.mb-0.text-center Concentra la autoridad decisional en el líder, que decide de manera unilateral y comunica al equipo para su ejecución; genera rapidez, pero poca apropiación. Situación adecuada: emergencias o decisiones con tiempo de respuesta crítico y equipo sin experiencia en el asunto.
      .col-md-6.col-xl-3.mb-4
        .tarjeta.tema4-conectada-2.p-4.h-100
          img.tema4-conectada__icono(src="@/assets/curso/temas/t4/img7.svg" alt="")
          h5.text-center Liderazgo participativo
          p.mb-0.text-center Involucra al equipo en el análisis de alternativas y en la deliberación, promueve el debate y construye consensos antes de decidir; favorece la creatividad y el compromiso, pero es más lento. Situación adecuada: decisiones que requieren el conocimiento y el respaldo del equipo para ejecutarse.
      .col-md-6.col-xl-3.mb-4
        .tarjeta.tema4-conectada-3.p-4.h-100
          img.tema4-conectada__icono(src="@/assets/curso/temas/t4/img8.svg" alt="")
          h5.text-center Liderazgo transformacional
          p.mb-0.text-center Inspira al equipo a superar sus intereses individuales en favor de un propósito colectivo y eleva la capacidad decisional de sus integrantes. Situación adecuada: procesos de transformación estratégica en los que el equipo debe cambiar su forma de trabajar.
      .col-md-6.col-xl-3.mb-4
        .tarjeta.tema4-conectada-4.p-4.h-100
          img.tema4-conectada__icono(src="@/assets/curso/temas/t4/img9.svg" alt="")
          h5.text-center Estilos de decisión de Mintzberg
          p.mb-0.text-center El analítico decide tras examinar la información, el visionario decide desde la intuición y la imagen de futuro, y el pragmático aprende actuando y ajusta sobre la marcha. Situación adecuada: reconocer el propio estilo para compensarlo cuando la decisión exige otro.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema4-destacado-secundario.p-4
          p.mb-0 Los cuatro estilos no se excluyen. Un mismo gerente puede ser directivo en una emergencia, participativo en la planeación anual y transformacional en un cambio de rumbo, y su madurez se reconoce en la capacidad de cambiar de estilo según lo que la decisión exige.
    p.mb-4 La conciencia del propio estilo predominante permite al gerente compensar sus tendencias naturales cuando la situación lo exige, combinando análisis, visión y acción de manera equilibrada. Un líder analítico aprende a decidir con información incompleta cuando el tiempo apremia, y uno visionario aprende a comprobar sus intuiciones con datos antes de comprometer recursos.
    p.mb-4 Los siguientes casos de empresas colombianas evidencian cómo la elección del estilo, y no solo la alternativa, definió el resultado:
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .tema4-componentes
          .tema4-componentes__item.p-4
            h5 Inundación en una bodega
            p.mb-0 Con el agua entrando, el gerente asumió un estilo directivo, asignó tareas sin consultar y evacuó la mercancía en dos horas. La misma semana volvió al estilo participativo para decidir con el equipo dónde reubicar la bodega, porque esa decisión sí admitía deliberación.
          .tema4-componentes__item.p-4
            h5 Rediseño del servicio en una empresa de gas
            p.mb-0 La gerencia optó por un estilo participativo y reunió a técnicos y operadores de campo antes de definir las nuevas rutas. Las rutas que propusieron los técnicos redujeron el tiempo de atención más que las diseñadas en la oficina.
          .tema4-componentes__item.p-4
            h5 Transformación digital en una cooperativa de transporte
            p.mb-0 El gerente ejerció un liderazgo transformacional durante dos años, explicó el propósito del cambio en cada asamblea y formó a los conductores en la aplicación de despacho. Los mismos conductores que se resistían terminaron capacitando a los nuevos.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema4-img-cover(src="@/assets/curso/temas/t4/img10.png" alt="")
    p.mb-4 En los cuatro casos el estilo se ajustó a la decisión y no al revés. La rapidez, la participación, la inspiración y el análisis fueron respuestas a lo que cada situación pedía, y esa flexibilidad es lo que distingue al liderazgo maduro.
    p.mb-0 Cuando el estilo elegido es participativo, aparece un riesgo propio de los grupos que trabajan juntos y se aprecian entre sí, el de preferir la armonía a la verdad. Ese riesgo tiene un nombre, síntomas que lo delatan y remedios para contrarrestarlo; conocerlos es lo que permite que la participación no termine en una mala decisión.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Decisión grupal y riesgos del pensamiento grupal
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img11.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La decisión grupal ofrece ventajas significativas frente a la individual. Incorpora mayor diversidad de perspectivas, distribuye la carga del análisis, genera mayor apropiación de los resultados y reduce el efecto de los sesgos de una sola persona. Sin embargo, introduce riesgos derivados de la dinámica social del grupo, y el más importante es el pensamiento grupal, conocido en inglés como #[em “groupthink”].
    p.mb-4 El concepto fue acuñado por Janis (1972) para describir un modo de pensamiento defectuoso de los grupos muy cohesionados, en los que el deseo de mantener la armonía prevalece sobre la evaluación crítica de las alternativas. Los miembros suprimen sus dudas para no generar conflicto, asumen que el silencio de los demás implica acuerdo y construyen una ilusión de unanimidad que conduce a decisiones de baja calidad.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.h-100.w-100(src="@/assets/curso/temas/t4/img12.svg" alt="")
      .col-lg-7
        .tema4-destacado-primario.p-4.h-100
          p.mb-0 En las juntas directivas y comités de las empresas colombianas el fenómeno es frecuente, en especial cuando el grupo lleva años trabajando junto y el fundador participa en la reunión. La historia empresarial ofrece numerosos casos de organizaciones que colapsaron con equipos directivos de alto perfil, porque nadie en la mesa se atrevió a decir lo que todos sospechaban.
    p.mb-4 Janis identificó los síntomas que permiten reconocer el pensamiento grupal antes de que produzca una decisión equivocada, y varios de ellos aparecen juntos en un mismo comité. Conviene distinguirlos con claridad, porque cada uno se manifiesta con una conducta reconocible en la reunión. Cuatro síntomas concentran el diagnóstico y se describen a continuación con la frase que suele delatarlos:
    .row.justify-content-center.mb-4
      .col-md-6.mb-4
        .tema4-destacado-secundario.p-4.h-100
          .row.align-items-center
            .col-auto.d-none.d-lg-block.mb-4
              img.tema4-icono-84(src="@/assets/curso/temas/t4/img13.svg" alt="")
            .col-lg-12
              h5 Ilusión de invulnerabilidad
              p.mb-0 El grupo cree que no puede equivocarse porque le ha ido bien antes, y por eso asume riesgos que no analiza. Frase que lo delata: “esto siempre nos ha funcionado, no hay por qué cambiar”.
      .col-md-6.mb-4
        .tema4-destacado-secundario.p-4.h-100
          .row.align-items-center
            .col-auto.d-none.d-lg-block.mb-4
              img.tema4-icono-84(src="@/assets/curso/temas/t4/img14.svg" alt="")
            .col-lg-12
              h5 Racionalización colectiva
              p.mb-0 El grupo minimiza las señales de alerta y construye explicaciones que las descartan sin examinarlas. Frase que lo delata: “esos datos deben estar mal, nuestros clientes no piensan así”.
      .col-md-6.mb-4
        .tema4-destacado-secundario.p-4.h-100
          .row.align-items-center
            .col-auto.d-none.d-lg-block.mb-4
              img.tema4-icono-84(src="@/assets/curso/temas/t4/img15.svg" alt="")
            .col-lg-12
              h5 Autocensura e ilusión de unanimidad
              p.mb-0 Quienes tienen dudas callan para no romper la armonía, y el silencio se interpreta como acuerdo de todos. Frase que lo delata: “como nadie dijo nada, quedamos de acuerdo”.
      .col-md-6.mb-4
        .tema4-destacado-secundario.p-4.h-100
          .row.align-items-center
            .col-auto.d-none.d-lg-block.mb-4
              img.tema4-icono-84(src="@/assets/curso/temas/t4/img16.svg" alt="")
            .col-lg-12
              h5 Presión a los disidentes
              p.mb-0 Cuando alguien discrepa, el grupo lo descalifica o lo aísla, y algunos miembros actúan como guardianes que silencian las voces discordantes. Frase que lo delata: “ya hablamos de eso, no volvamos atrás”.
    p.mb-4 Los cuatro síntomas se alimentan entre sí. La invulnerabilidad justifica racionalizar las alertas, la racionalización desanima a quien dudaba y la presión sobre el que discrepa confirma a los demás que callar es lo prudente. Romper el círculo exige un procedimiento y no solo buena voluntad.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema4-frase.p-4
          img(src="@/assets/curso/temas/t4/img17.svg" alt="")
          p.mb-0.fw-bold.text-center Un comité en el que nadie discrepa no ha llegado a un acuerdo; ha dejado de pensar. La unanimidad rápida es una señal de alerta, no de éxito.
    p.mb-4 Varios factores hacen que un grupo sea más propenso al pensamiento grupal. Entre ellos están la homogeneidad de sus miembros, el aislamiento frente a perspectivas externas, el liderazgo directivo que desalienta el desacuerdo, la urgencia y la ausencia de procedimientos de evaluación crítica. Reconocerlos permite a la gerencia diseñar reuniones que los contrarresten antes de que la decisión se tome.
    p.mb-4 Los siguientes casos de empresas colombianas evidencian cómo un síntoma no detectado, o uno detectado a tiempo, cambió el rumbo de una decisión:
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t4/img18.svg" alt="")
          .tarjeta.tema4-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Expansión de una cadena de gimnasios
              p.mb-0.text-center La junta aprobó cuatro sedes nuevas en una sola sesión, convencida de que el éxito de las dos primeras se repetiría. Nadie pidió el estudio de mercado y dos de las sedes cerraron en un año; la ilusión de invulnerabilidad costó más que el estudio que no se hizo.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t4/img19.svg" alt="")
          .tarjeta.tema4-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Lanzamiento de un producto en una empresa de lácteos
              p.mb-0.text-center Cuando el jefe de ventas presentó las encuestas desfavorables, el comité concluyó que los encuestados no representaban a los clientes reales. El producto salió al mercado sin ajustes y las devoluciones del primer trimestre confirmaron lo que las encuestas habían anticipado.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t4/img20.svg" alt="")
          .tarjeta.tema4-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Contrato con un cliente grande en una empresa de logística
              p.mb-0.text-center La contadora dudaba de la capacidad de pago del cliente, pero calló porque el gerente y los socios estaban entusiasmados con el contrato. Tres meses después el cliente entró en insolvencia; ella tenía los datos y nadie se los pidió.
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t4/img21.svg" alt="")
      .col-lg-6
        p.mb-4 En los tres primeros casos la información existía y el grupo la desechó por mantener la armonía; en el cuarto, un procedimiento sencillo obligó a examinarla. La diferencia no estuvo en la inteligencia de los participantes, sino en que alguien tenía el encargo de discrepar.
        p.mb-0 Introducir el contraste en una reunión requiere método, y varias técnicas participativas lo aportan de manera probada. Algunas ya se presentaron como herramientas de diagnóstico; ahora se examina su aplicación específica a la decisión en grupo, junto con un enfoque de innovación que amplía las alternativas.

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Técnicas participativas y #[em Design Thinking]
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.tema4-img-cover(src="@/assets/curso/temas/t4/img22.png" alt="")
      .col-lg-8
        p.mb-4 Las técnicas participativas estructuradas ofrecen al gerente metodologías probadas para conducir procesos de decisión grupal que maximicen la calidad del análisis y minimicen los riesgos del pensamiento grupal. El método Delphi y la técnica del grupo nominal, descritos entre las herramientas cualitativas, se examinan aquí en su aplicación a la decisión colectiva, y se incorpora el #[em Design Thinking] como metodología complementaria de innovación.
        .tema4-destacado-primario.p-4
          p.mb-0 Su importancia en la decisión grupal está en que cambian la dinámica de la reunión. En lugar de una conversación en la que gana quien más insiste, imponen una secuencia en la que primero se generan ideas, luego se aclaran y al final se priorizan. Esa secuencia protege al grupo de su propia cohesión.
    p.mb-4 En las empresas colombianas estas técnicas resultan valiosas cuando los expertos están dispersos en varias ciudades o cuando el asunto es sensible. También lo son cuando la decisión implica diseñar un producto, un servicio o una política interna para personas cuyas necesidades el equipo directivo no conoce de primera mano.
    p.mb-4 Cada técnica aporta algo distinto al momento de decidir en grupo, y por eso conviene reconocer qué problema resuelve cada una antes de elegirla. Tres aplicaciones concentran su uso en la decisión gerencial y se describen a continuación con el riesgo del pensamiento grupal que cada una neutraliza:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema4-casos.p-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Delphi en la decisión grupal]#[br] Reúne el juicio de expertos dispersos mediante rondas anónimas, de modo que cada posición se evalúa por su contenido y no por el estatus de quien la emite. Riesgo que neutraliza: la presión de la jerarquía y la autocensura, porque nadie sabe quién opinó qué.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Grupo nominal en la decisión grupal]#[br] Reúne a los participantes, pero separa la generación de ideas de su discusión y prioriza por votación ponderada, con lo que el resultado refleja el juicio colectivo. Riesgo que neutraliza: la dominación de la conversación por el miembro más vocal.
            li
              i.fas.fa-bookmark
              p.mb-0 #[em: strong Design Thinking]#[br] Proceso iterativo de cinco fases, empatizar, definir, idear, prototipar y evaluar, que parte de las necesidades de las personas afectadas y prueba las soluciones antes de adoptarlas. Riesgo que neutraliza: la racionalización colectiva, porque el prototipo se contrasta con usuarios reales.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema4-destacado-secundario.p-4
          p.mb-0 Las tres técnicas comparten un principio, el de introducir en el proceso un paso que el grupo no puede saltarse. Delphi impone el anonimato, el grupo nominal impone el silencio inicial y el #[em Design Thinking] impone la prueba con usuarios, y en los tres casos ese paso es el que impide que la cohesión sustituya al análisis.
    p.mb-4 Aplicado a la decisión gerencial, el #[em Design Thinking] aporta una perspectiva de innovación que complementa el análisis estratégico tradicional. Obliga a partir de la comprensión empática de los afectados, a generar alternativas sin prejuzgar su viabilidad y a aprender de la retroalimentación en cada iteración. Resulta valioso en decisiones de diseño de productos, servicios, procesos de atención o políticas internas.
    p.mb-4 Los siguientes casos de empresas colombianas evidencian el uso de las tres técnicas en decisiones colectivas:
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta.tema4-conectada-1.p-4.h-100
          img.tema4-conectada__icono(src="@/assets/curso/temas/t4/img23.svg" alt="")
          h5.text-center Política de teletrabajo en una empresa de seguros
          p.mb-0.text-center La gerencia aplicó #[em Design Thinking] y entrevistó a veinte empleados antes de redactar la política. El prototipo, dos días de trabajo remoto por área, se probó un mes y se ajustó con lo aprendido, con lo que la política definitiva no generó las quejas que la primera versión, escrita en la oficina, habría producido.
      .col-md-6.col-xl-4.mb-4
        .tarjeta.tema4-conectada-5.p-4.h-100
          img.tema4-conectada__icono(src="@/assets/curso/temas/t4/img24.svg" alt="")
          h5.text-center Ubicación de una planta en una empresa de alimentos
          p.mb-0.text-center Los socios vivían en tres ciudades y la decisión se tomó por Delphi en dos rondas. Sin la presión de la reunión presencial, el socio más joven señaló un problema de acceso vial que los mayores no habían considerado, y la ubicación cambió.
      .col-md-6.col-xl-4.mb-4
        .tarjeta.tema4-conectada-3.p-4.h-100
          img.tema4-conectada__icono(src="@/assets/curso/temas/t4/img25.svg" alt="")
          h5.text-center Rediseño del servicio al cliente en una clínica
          p.mb-0.text-center Con el grupo nominal, recepcionistas, enfermeras y administrativos escribieron en silencio los problemas de atención y los votaron. La espera en admisiones, que la gerencia no tenía en su lista, quedó de primera y se resolvió en un mes.
    p.mb-4 En los cuatro casos la técnica hizo llegar a la decisión una voz que la reunión habitual habría silenciado, la del empleado nuevo, la del socio joven, la de la recepcionista o la del cliente. Ese es el aporte que ninguna herramienta de análisis puede sustituir.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema4-destacado-acento.p-4
          p.mb-0 Para profundizar en estas técnicas y reconocer cómo se aplican en una decisión real, se presenta el siguiente recurso de audio, un pódcast en el que se explica cómo el método Delphi, el grupo nominal y el #[em Design Thinking] permiten que todo el equipo participe y elevan la calidad de la decisión colectiva.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema4-podcast.p-4
          .row.align-items-center
            .col-md-3.mb-4.mb-md-0
              img(src="@/assets/curso/temas/t4/img26.svg" alt="")
            .col-lg-9              
                h5 Pódcast
                .tarjeta.bg-white.p-3
                  TarjetaAudio.color-acento-botones.mb-3(
                    texto="Decidir mejor en grupo: técnicas que le dan la palabra a todos. "
                    :audio="require_src('@/assets/curso/temas/audio/Podcast_CF02.mp3')"
                  )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    p.mb-0 Cuando un equipo decide con método, las diferencias de opinión afloran en lugar de esconderse, y eso es una buena noticia con una condición, que el desacuerdo se gestione. Cómo convertir el conflicto en un aporte a la decisión, y no en una amenaza para el equipo, es lo que se examina a continuación.

    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.4 Gestión del conflicto en el proceso decisional
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema4-img-cover(src="@/assets/curso/temas/t4/img27.png" alt="")
      .col-lg-9
        p.mb-5 El conflicto es una realidad ineludible en los procesos de decisión grupal. Cuando las personas con diferentes perspectivas, intereses y valores deben acordar un curso de acción, la divergencia de opiniones es esperable y, además, deseable. Indica que el análisis incorpora la complejidad real del problema en lugar de simplificarla de forma artificial.
        .tema4-destacado-primario.p-4.mb-5
          p.mb-0 La distinción fundamental para el gerente separa el conflicto funcional del disfuncional. El primero, también llamado conflicto de tarea, gira en torno a las ideas, los datos y las alternativas, y enriquece la decisión al exponer supuestos ocultos. El segundo involucra ataques personales, disputas de poder y deterioro de la cohesión, y afecta tanto la calidad de la decisión como el clima de la organización.
        p.mb-0 En las empresas colombianas, donde las relaciones personales pesan tanto como las técnicas, el conflicto de tarea se convierte con facilidad en conflicto personal, y la gerencia suele evitarlo por completo para proteger la armonía. El resultado es que las objeciones no se expresan y la decisión se toma sin el contraste que las diferencias habrían aportado.
    p.mb-4 Para gestionar el conflicto, el modelo de Thomas y Kilmann (1974) describe cinco estilos de respuesta según el grado en que cada parte busca satisfacer sus propios intereses y los del otro. Ninguno es correcto en todos los casos, aunque uno resulta más adecuado para la decisión en equipo. Los cinco se describen a continuación con la situación en la que cada uno se justifica:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema4-casos.p-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Competir]#[br] Imponer la propia posición con la autoridad o los argumentos, sin ceder ante los intereses del otro. Se justifica cuando la decisión es urgente o afecta la seguridad y no admite negociación.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Colaborar]#[br] Buscar una solución que satisfaga los intereses de todas las partes mediante la exploración conjunta de alternativas integradoras. Se justifica cuando la decisión es importante para todos y hay tiempo para construirla en equipo.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Comprometerse]#[br] Alcanzar un punto intermedio en el que cada parte cede algo para llegar a un acuerdo aceptable, aunque no óptimo. Se justifica cuando las posiciones son igual de legítimas y el tiempo no permite colaborar.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Evitar]#[br] Posponer o esquivar el conflicto sin atender los intereses propios ni los ajenos. Se justifica cuando el asunto es menor o conviene esperar a que baje la tensión antes de tratarlo.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Acomodar]#[br] Ceder ante los intereses del otro en detrimento de los propios, para preservar la relación. Se justifica cuando la relación importa más que el asunto o la otra parte tiene la razón.
    p.mb-4 El estilo colaborativo es el más adecuado para la decisión gerencial en equipo, porque es el único que aprovecha la discrepancia para mejorar la alternativa. No siempre es el más accesible, dada la dinámica de poder en las organizaciones, y por eso conviene reconocer cuándo los otros cuatro son la respuesta razonable.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema4-frase.p-4
          img(src="@/assets/curso/temas/t4/img28.svg" alt="")
          p.mb-0.fw-bold.text-center El conflicto no es lo contrario de una buena decisión; es su materia prima. Lo que la daña no es el desacuerdo sobre las ideas, sino el silencio con que se evita o el ataque con que se responde.
    p.mb-4 La capacidad del gerente para transformar los conflictos disfuncionales en funcionales, y canalizar de manera productiva la energía de la discrepancia, es una competencia de alto valor estratégico. Exige separar el problema de las personas, pedir datos donde había adjetivos y reconocer en público el aporte de quien discrepó, incluso cuando su posición no prevalece.
    p.mb-4 Los siguientes casos de empresas colombianas evidencian cómo la gestión del conflicto definió la calidad de una decisión:
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .tarjeta.tema4-casos.p-4.h-100
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Reparto de presupuesto en una empresa de construcción]#[br] Dos jefes de área disputaban el presupuesto de equipos y la reunión derivó en reproches personales. El gerente suspendió la sesión, pidió a cada uno una lista de necesidades con cifras y, al retomar con datos, el conflicto se resolvió con un estilo colaborativo en media hora.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Cambio de proveedor en una fábrica de calzado]#[br] El jefe de compras y la jefe de producción discrepaban sobre la calidad del cuero nuevo. En lugar de evitar el tema, la gerencia organizó una prueba con dos lotes y el conflicto de tarea produjo una especificación técnica que ninguno de los dos tenía antes.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Horario de atención en una farmacia]#[br] La discusión entre los dos socios llevaba meses y afectaba la relación personal. El gerente reconoció que el asunto era menor frente a la sociedad y adoptó un compromiso, turnos alternos por semana, que ninguno prefería, pero ambos aceptaron sin reservas.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema4-img-cover(src="@/assets/curso/temas/t4/img29.png" alt="")
    p.mb-4 En los cuatro casos el conflicto existía antes de que la gerencia interviniera. Lo que cambió fue que se trasladó de las personas a los datos y de los reproches a las alternativas, y en ese traslado la discrepancia dejó de amenazar al equipo y empezó a mejorar la decisión.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.tema4-destacado-secundario
          .row.align-items-stretch.justify-content-center.mb-0
            .col-lg-8.order-2.order-lg-1.p-4.px-5
                p.mb-0 Una decisión bien analizada, bien liderada y acordada en equipo puede, aun así, dañar a terceros o al entorno y perder legitimidad ante quienes la reciben. La ética, la sostenibilidad y la comunicación responsable de lo decidido son el último filtro, y de ellas se ocupa el siguiente tema.
            .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img.h-100.w-100(src="@/assets/curso/temas/t4/img30.svg" alt="")
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>
