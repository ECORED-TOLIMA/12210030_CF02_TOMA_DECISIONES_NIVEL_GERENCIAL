<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seguimiento de la decisión en la estructura organizacional

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Las decisiones gerenciales no se producen en el vacío, ocurren dentro de estructuras organizacionales. Esas estructuras condicionan quién tiene autoridad para decidir, qué información fluye y hacia dónde, cómo se distribuyen los recursos y qué mecanismos existen para implementar y vigilar lo decidido. Comprender la estructura como marco de la decisión es una condición necesaria para ejercer el liderazgo gerencial con efectividad.
    p.mb-4 La estructura organizacional es el conjunto de relaciones formales de autoridad, coordinación e información que define cómo se divide el trabajo y cómo se integran las partes. Puede ser funcional, divisional, matricial, por proyectos o en red, y cada forma tiene implicaciones directas sobre la decisión, como el grado de centralización, la velocidad de respuesta y la coherencia estratégica.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t3/img2.svg" alt="")
      .col-lg-9
        .tema3-destacado-secundario.p-4.mb-4
          .row.align-items-center
            .col-auto.d-none.d-lg-block
              img.tema3-icono-84(src="@/assets/curso/temas/t3/img3.svg" alt="")
            .col
              p.mb-0 En las empresas colombianas es frecuente que una misma persona concentre varios roles, y entonces la estructura define quién decide, pero pocas veces quién vigila lo decidido. Este tema responde al criterio de hacer seguimiento a los resultados de la decisión y de seleccionar la mejor alternativa según la estructura. Por eso reúne los indicadores, el almacenamiento de la información, los formatos, los mecanismos de ajuste y el liderazgo que hace posible la implementación.
        p.mb-0 El primer elemento que la estructura debe garantizar es la capacidad de comprobar si la decisión produce los resultados esperados. Esa comprobación requiere indicadores definidos antes de actuar, y con ellos comienza el recorrido de este tema.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Seguimiento, evaluación e indicadores de las decisiones
    p.mb-4 Una de las brechas más frecuentes en la práctica gerencial separa la toma de la decisión de su seguimiento. Los directivos invierten un esfuerzo considerable en el análisis previo a la elección, pero descuidan la fase posterior, y ese descuido impide detectar a tiempo las desviaciones, aprender de los resultados y hacer los ajustes necesarios. Hacer seguimiento es verificar si las acciones implementadas producen los resultados esperados, en los plazos y con los recursos previstos.
    p.mb-4 El seguimiento y la evaluación no son lo mismo, pero ambos dependen de indicadores para decidir con hechos:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema3-destacado-acento.p-4
          .row.align-items-center
            .col-lg-8
              ul.lista-ul.mb-0
                li
                  i.fas.fa-bookmark
                  p.mb-3 #[strong Seguimiento:] proceso continuo que vigila la gestión en tiempo real.
                li
                  i.fas.fa-bookmark
                  p.mb-3 #[strong Evaluación:] ejercicio periódico y más profundo que mide la eficacia, la eficiencia y el impacto de lo decidido.
                li
                  i.fas.fa-bookmark
                  p.mb-0 #[strong Indicadores:] convierten las impresiones en datos comparables en el tiempo y entre áreas, y permiten discutir sobre hechos y no sobre percepciones.
            .col-lg-4.d-none.d-lg-block
              img(src="@/assets/curso/temas/t3/img4.svg" alt="")
    p.mb-4 En conjunto, el seguimiento y la evaluación se sostienen sobre buenos indicadores: sin ellos, no hay forma de saber si la decisión avanza como se esperaba. Por eso, el primer paso es definir qué indicadores medir y de qué tipo, como se describe en el siguiente ejemplo:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-destacado-secundario.p-4
          .row.align-items-center
            .col-auto.d-none.d-lg-block
              img.tema3-icono-84(src="@/assets/curso/temas/t3/img5.svg" alt="")
            .col
              p.mb-0 Una distribuidora que amplía su cobertura a nuevos municipios necesita saber cada mes cuántos clientes captó, cuánto vendió por municipio y cuánto le costó cada entrega. Sin esos tres datos, la gerencia no puede distinguir una expansión lenta de una expansión fallida, y esa es la situación de muchas empresas colombianas que deciden bien y miden poco.
    p.mb-4 Un sistema de seguimiento completo combina cuatro tipos de indicadores, porque cada uno vigila un momento distinto de la decisión. Kaplan y Norton (1996) advierten que medir solo el resultado final llega tarde; por eso conviene seguirlos en el orden en que actúan, desde los recursos hasta el impacto:
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-3.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img-1.svg" alt="")
          .tarjeta.tema3-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Indicador de gestión
              p.mb-0.text-center Mide el uso de los recursos frente a lo planeado. Indica si la decisión se ejecuta con los medios previstos.
      .col-md-6.col-xl-3.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img6.svg" alt="")
          .tarjeta.tema3-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Indicador de proceso
              p.mb-0.text-center Mide el avance de las actividades intermedias. Advierte si ocurren en la secuencia y el ritmo acordados.
      .col-md-6.col-xl-3.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img7.svg" alt="")
          .tarjeta.tema3-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Indicador de resultado
              p.mb-0.text-center Mide el logro final frente a la meta. Revela si la decisión consiguió lo esperado.
      .col-md-6.col-xl-3.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img8.svg" alt="")
          .tarjeta.tema3-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Indicador de impacto
              p.mb-0.text-center Mide el efecto a mediano plazo. Confirma si la decisión mejoró la situación de la organización
    p.mb-4 Los cuatro tipos se complementan y conviene leerlos en orden: el de gestión advierte si los recursos se desvían, el de proceso señala si las acciones avanzan, el de resultado confirma si se alcanzó la meta y el de impacto revela si valió la pena. Como el de gestión y el de proceso avisan antes que los otros dos, una gerencia que solo mide el resultado final se entera del problema cuando ya no puede corregirlo.
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Tipos de indicadores para el seguimiento de decisiones gerenciales
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Tipo de indicador
                th Ejemplo
                th Propósito
            tbody
              tr
                td Indicador de resultado (#[em lagging])
                td Incremento de ventas en 15 % respecto al período anterior.
                td Medir lo que ya ocurrió: evalúa el impacto de la decisión.
              tr
                td Indicador de gestión (#[em leading])
                td Número de clientes contactados por semana.
                td Anticipar resultados futuros que permiten ajustar acciones a tiempo.
              tr
                td Indicador de proceso
                td Tiempo promedio de atención al cliente.
                td Controlar la eficiencia operativa en la implementación de la decisión.
              tr
                td Indicador de impacto
                td Reducción de rotación de personal en 20 %.
                td Medir efectos de largo plazo en la organización y su entorno.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-frase.p-4
          img(src="@/assets/curso/temas/t3/img9.svg" alt="")
          p.mb-0.fw-bold.text-center Lo que no se mide no se corrige, y lo que se mide tarde tampoco. El seguimiento vale por la oportunidad con que llega, no por la cantidad de cifras que produce.
    p.mb-4 En el cuadro de mando integral, los indicadores de seguimiento se articulan con las cuatro perspectivas estratégicas, de modo que el monitoreo de cada decisión queda integrado en el sistema de gestión y no en instrumentos desconectados. En las empresas colombianas el seguimiento con indicadores no depende del tamaño, sino de la disciplina de medir lo que importa y de hacerlo a tiempo.
    p.mb-4 Los siguientes casos confirman esa disciplina en organizaciones de distinto sector:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-componentes
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block: img.tema3-icono-84(src="@/assets/curso/temas/t3/img10.svg" alt="")
              .col
                h5 Apertura de una sede
                p.mb-0 Una comercializadora de insumos agrícolas fijó tres indicadores antes de abrir, clientes activos, margen por venta y costo de entrega. A los cuatro meses el margen cumplía la meta, pero el costo de entrega la duplicaba, y la gerencia ajustó las rutas en lugar de cerrar la sede.
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block: img.tema3-icono-84(src="@/assets/curso/temas/t3/img11.svg" alt="")
              .col
                h5 Programa de capacitación en una empresa de calzado
                p.mb-0 La gerencia midió solo la asistencia a los talleres y concluyó que el programa funcionaba. Al añadir un indicador de resultado, los defectos por lote, descubrió que la capacitación no había cambiado la producción y rediseñó el contenido.
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block: img.tema3-icono-84(src="@/assets/curso/temas/t3/img12.svg" alt="")
              .col
                h5 Cambio de proveedor en una panadería
                p.mb-0 El nuevo proveedor de harina costaba menos, y ese fue el único dato que se revisó durante seis meses. Cuando se incorporó un indicador de impacto, las quejas de los clientes por la textura del pan, la decisión se revirtió con un costo mayor que el ahorro obtenido.
    p.mb-4 En los cuatro casos el indicador que faltaba era el que habría cambiado la decisión a tiempo. Medir lo fácil no equivale a medir lo importante, y elegir bien qué se mide es una decisión gerencial tanto como la que se quiere seguir.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img13.png" alt="")
      .col-lg-9
        p.mb-4 Definir un indicador con precisión evita ambigüedades y garantiza que los datos sean comparables a lo largo del tiempo. Los siguientes pasos, en el orden en que conviene recorrerlos, permiten construir el sistema de seguimiento de cualquier decisión:
        .tema3-lista-letras.p-4
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta: span A
              p.mb-2 Formular la pregunta que la gerencia necesita responder sobre la decisión y elegir, para cada una, el tipo de indicador que la responde.
            li
              .lista-ol--cuadro__vineta: span B
              p.mb-2 Definir cada indicador con su nombre, fórmula de cálculo, unidad de medida y fuente de datos, para que dos personas obtengan la misma cifra.
            li
              .lista-ol--cuadro__vineta: span C
              p.mb-2 Fijar la frecuencia de medición, el responsable del reporte y la meta o valor de referencia con el que se comparará el dato.
            li
              .lista-ol--cuadro__vineta: span D
              p.mb-0 Programar los cortes de evaluación en los que se examinará el conjunto de indicadores y se decidirá si la decisión continúa, se ajusta o se replantea.
    p.mb-4 Estos pasos convierten el seguimiento en parte de la decisión y no en una tarea posterior. Cuando los indicadores se definen antes de actuar, la gerencia sabe desde el primer día qué señal la obligará a corregir el rumbo.
    p.mb-0 Los indicadores producen datos mes a mes, y esos datos solo sirven si se conservan de forma ordenada y pueden compararse con los anteriores. Cómo guardar esa información para que esté disponible en el momento de decidir es lo que se examina a continuación.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Almacenamiento de la información para la decisión
    p.mb-4 Almacenar información es conservarla de manera organizada, segura y disponible para que pueda usarse cuando la gerencia la necesite. La calidad de una decisión depende de la calidad de los datos que la respaldan, y esa calidad se construye desde el momento en que la información se captura y se guarda (Laudon & Laudon, 2016). Un registro que se pierde, se duplica o queda en un formato que nadie puede abrir deja de ser un recurso y se convierte en un riesgo.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img14.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La importancia del almacenamiento radica en que el seguimiento de una decisión exige comparar el presente con el pasado. Sin registros conservados de forma coherente no hay serie histórica, y sin serie histórica los indicadores no revelan si el resultado mejora o empeora. En Colombia, además, la Ley 594 de 2000 obliga a las empresas a organizar y conservar sus documentos según las tablas de retención, de modo que guardar bien la información es también un deber legal.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        .row.align-items-center.mb-4
          .col-auto.d-none.d-lg-block
            img.tema3-icono-84(src="@/assets/curso/temas/t3/img15.svg" alt="")
          .col
            p.mb-0 Las pymes colombianas suelen tener la información repartida entre cuadernos, hojas de cálculo personales, correos y aplicaciones de mensajería. Cuando el vendedor que llevaba las cifras se retira, la empresa pierde la memoria de sus clientes. Los programas contables en la nube y la factura electrónica han facilitado centralizar los registros, pero el orden depende de las decisiones de la gerencia y no de la tecnología.
        p.mb-0 Un sistema de almacenamiento útil para decidir se apoya en cuatro componentes que Laudon y Laudon (2016) describen como la base de la gestión de datos en cualquier organización. Cada uno resuelve un problema distinto, desde dónde se guardan los registros hasta quién responde por su calidad, y se describen a continuación con la forma sencilla en que una pyme puede adoptarlos:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t3/img16.svg" alt="")
    .BGF01.p-4.p-lg-5.mb-4(:style="{'background-image': `url(${require_src('@/assets/curso/temas/bg/imgfondo1.png')})`}")
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/temas/t3/img17.png" alt="")
        .col-lg-8
          SlyderF(columnas="col-lg-12")
            .tarjeta.tema3-slyder.p-4.h-100
              img.tema3-slyder__icono(src="@/assets/curso/temas/t3/img18.svg" alt="")
              h5 Base de datos
              p.mb-0 Conjunto de registros organizados con una estructura común, de modo que cada dato se guarda una sola vez y puede consultarse desde distintas áreas. En una pyme: un programa contable o de ventas que reemplaza las hojas de cálculo dispersas de cada vendedor.
            .tarjeta.tema3-slyder.p-4.h-100
              img.tema3-slyder__icono(src="@/assets/curso/temas/t3/img19.svg" alt="")
              h5 Almacén de datos
              p.mb-0 Repositorio que reúne la información histórica de varias fuentes para analizarla en conjunto, sin alterar los sistemas que operan a diario. En una pyme: una hoja consolidada que recibe cada mes las ventas, los costos y la cartera de los tres últimos años.
            .tarjeta.tema3-slyder.p-4.h-100
              img.tema3-slyder__icono(src="@/assets/curso/temas/t3/img20.svg" alt="")
              h5 Política de información
              p.mb-0 Normas escritas que definen quién puede crear, modificar, consultar y eliminar cada tipo de dato, y por cuánto tiempo se conserva. En una pyme: una página que indica quién actualiza la lista de precios y dónde se guardan los contratos firmados.
            .tarjeta.tema3-slyder.p-4.h-100
              img.tema3-slyder__icono(src="@/assets/curso/temas/t3/img21.svg" alt="")
              h5 Calidad y respaldo de los datos
              p.mb-0 Procedimientos que garantizan que la información sea exacta y completa, y que esté protegida contra pérdidas mediante copias periódicas. En una pyme: una copia semanal en la nube y una revisión mensual para eliminar clientes duplicados.
    p.mb-4 Los cuatro componentes se sostienen entre sí. La base de datos ordena el presente, el almacén conserva el pasado, la política reparte las responsabilidades y el respaldo protege el conjunto. Cuando falta uno, la información existe, pero no puede usarse con confianza en el momento de decidir.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .tema3-destacado-acento.p-4.h-100
          p.mb-0 Para ordenar la conservación de los documentos, el Archivo General de la Nación publica de acceso libre el Formato de tabla de retención documental y el Formato único de inventario documental, que cualquier empresa puede adaptar para definir qué registros conserva, durante cuánto tiempo y en qué soporte. Con esos instrumentos, las empresas colombianas que ordenaron su almacenamiento lo hicieron con recursos modestos.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.h-100.w-100(src="@/assets/curso/temas/t3/img22.svg" alt="")
    p.mb-4 Los siguientes casos confirman que el punto de partida suele ser un problema concreto:
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img23.svg" alt="")
          .tarjeta.tema3-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Historial de clientes en una ferretería
              p.mb-0.text-center Cada vendedor guardaba sus contactos en el celular, y al retirarse uno de ellos se perdieron doscientos clientes de obra. La gerencia pasó los registros a un programa de ventas compartido, con lo que cualquier vendedor puede atender a cualquier cliente sin empezar de cero.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img24.svg" alt="")
          .tarjeta.tema3-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Contratos de una empresa de vigilancia
              p.mb-0.text-center Los contratos con los conjuntos residenciales se archivaban en carpetas físicas sin fecha de vencimiento a la vista. Una tabla de retención y un calendario de renovaciones permitieron a la gerencia negociar cada contrato con dos meses de anticipación, en lugar de descubrirlo vencido.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img25.svg" alt="")
          .tarjeta.tema3-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Registros de producción en una procesadora de frutas
              p.mb-0.text-center La planta anotaba los lotes en un cuaderno que se mojaba y se extraviaba. Con un formato digital único por lote, la gerencia comparó tres cosechas y detectó que las pérdidas se concentraban en un solo proveedor, lo que cambió la decisión de compra.
    p.mb-4 En los cuatro casos la información ya se producía a diario. Lo que cambió fue el lugar y la forma en que se conservó, y ese cambio permitió que una decisión posterior se tomara con datos guardados y no con lo que cada quien recordaba.
    .row.justify-content-center.mb-0
      .col-lg-10
        .tarjeta.tema3-destacado-secundario.p-4
          p.mb-0 Contar con los registros bien guardados resuelve la mitad del problema. La otra mitad consiste en presentarlos en formatos que la gerencia reconozca de inmediato y pueda comparar entre reuniones, que es lo que se examina a continuación.

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Formatos usados en el proceso de decisión
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p.mb-4 Un formato es una plantilla que fija qué información se registra, en qué orden y con qué nivel de detalle, para que dos personas distintas la produzcan y la interpreten de la misma manera. Laudon y Laudon (2016) señalan que la gerencia no decide con datos sueltos, sino con informes que los ordenan según el nivel que decide, desde el registro operativo hasta el tablero ejecutivo. El formato es el puente entre la información almacenada y la persona que debe usarla.
        .tema3-destacado-primario.p-4
          .row.align-items-center
            .col-auto.d-none.d-lg-block
              img.tema3-icono-84(src="@/assets/curso/temas/t3/img26.svg" alt="")
            .col
              p.mb-0 Su importancia se reconoce cuando falta. Cada área presenta sus cifras a su manera, las reuniones se gastan en aclarar qué significa cada columna y la decisión se aplaza hasta la siguiente sesión. Un formato común ahorra ese tiempo, hace comparables los periodos y deja constancia de por qué se decidió algo, un aspecto indispensable para revisar después el propio juicio y aprender de él.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img27.png" alt="")
    p.mb-4 En las empresas colombianas los formatos suelen heredarse de un contador, de un programa de gestión o de un cliente grande que los exige, y por eso conviven plantillas que no conversan entre sí. Ordenarlos no requiere diseñar documentos nuevos, sino elegir unos pocos, acordar su contenido mínimo y usarlos siempre en el mismo momento del proceso.
    p.mb-4 Cada etapa del proceso decisional produce un tipo de documento distinto, desde la comparación de alternativas hasta el seguimiento de lo decidido. Cinco formatos cubren ese recorrido en la mayoría de las empresas y se describen a continuación con la etapa en la que cada uno se utiliza y con el instrumento de acceso libre que sirve de modelo:
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img28.png" alt="")
      .col-lg-7
        LineaTiempoD.color-primario
          p.mb-0(numero="1" titulo="Tabla de consecuencias") Cuadro que ubica las alternativas en las filas y los criterios en las columnas, con el resultado esperado de cada cruce. #[br]#[br] #[strong Etapa de uso:] la evaluación de alternativas, antes de elegir, para que todas se comparen con los mismos criterios.
          p.mb-0(numero="2" titulo="Matriz de ponderación") Formato que asigna un peso a cada criterio, califica cada alternativa y calcula el puntaje total; la Matriz de priorización para la toma de decisiones del SENA es su modelo de acceso libre. #[br]#[br] #[strong Etapa de uso:] la selección de la alternativa, cuando los criterios tienen importancia distinta.
          p.mb-0(numero="3" titulo="Acta de decisión") Registro breve que consigna qué se decidió, quién lo decidió, con qué información, qué alternativas se descartaron y quién responde por la ejecución, con la estructura del acta de reunión institucional del SENA. #[br]#[br] #[strong Etapa de uso:] el cierre de la reunión decisoria.
          p.mb-0(numero="4" titulo="Ficha de indicador") Documento que define cada indicador con nombre, fórmula, unidad, fuente, frecuencia, responsable y meta, según la hoja de vida del indicador de la Guía de Función Pública. #[br]#[br] #[strong Etapa de uso:] el diseño del seguimiento, antes de la implementación.
          p.mb-0(numero="5" titulo="Informe y tablero de seguimiento") Presentación periódica de los indicadores frente a sus metas, con las desviaciones marcadas y las acciones de ajuste propuestas. #[br]#[br] #[strong Etapa de uso:] el seguimiento y la retroalimentación, en cada corte definido, para que la gerencia actúe sobre hechos.
    p.mb-4 Los cinco formatos siguen el orden del proceso, y esa es su principal virtud. La tabla de consecuencias y la matriz sirven para elegir, el acta deja constancia de la elección, la ficha prepara la medición y el informe la presenta. Una empresa que los usa en secuencia puede reconstruir cualquier decisión desde la primera alternativa hasta el último resultado.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-frase.p-4
          img(src="@/assets/curso/temas/t3/img29.svg" alt="")
          p.mb-0.fw-bold.text-center Una decisión que no quedó escrita se recuerda como cada uno la vivió. El formato es lo que permite discutir después sobre lo que se decidió y no sobre lo que cada uno cree que se decidió.
    p.mb-4 Conocer los cinco formatos no basta si no se dispone de ellos en el momento de decidir. Por eso se reúnen en un solo archivo, listo para diligenciar, con la tabla de consecuencias, la matriz de ponderación, el acta de decisión, la ficha de indicador y el informe de seguimiento. Cada formato incluye su plantilla en blanco y un ejemplo resuelto de una empresa colombiana que recorre el proceso completo.
    .tarjeta.tarjeta--gris.p-4.mb-4
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
          img(src="@/assets/curso/temas/t3/img30.svg" alt="")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Formato decisión
              p.mb-0 Para aplicar los cinco formatos del proceso de decisión, correspondientes a este componente formativo, se recomienda descargar la plantilla, diligenciarla con un caso propio y conservarla como base del seguimiento.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_01_Formatos_Decision.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    p.mb-4 Cuatro formatos oficiales de acceso libre complementan el anexo y se descargan desde el sitio de la entidad que los publica:
    .row.justify-content-center.mb-4
      .col-lg-6.mb-4
        .tarjeta.tarjeta--gris.p-4.h-100
          .row.align-items-center.h-100
            .col-lg-2.col-sm-2.d-none.d-lg-block
              img(src="@/assets/curso/temas/t3/img31.svg" alt="")
            .col-lg-7
              h4.mb-1 Matriz de priorización
              p Para ordenar varias opciones antes de decidir, se recomienda descargar la matriz de priorización incluida en el Anexo 01 y diligenciarla con un caso propio.
            .col-lg-2
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_01_Formatos_Decision.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
      .col-lg-6.mb-4
        .tarjeta.tarjeta--gris.p-4.h-100
          .row.align-items-center.h-100
            .col-lg-2.col-sm-2.d-none.d-lg-block.d-none.d-lg-block
              img(src="@/assets/curso/temas/t3/img32.svg" alt="")
            .col-lg-7
              h4.mb-1 Guía de indicadores
              p Para medir el avance de una decisión, se recomienda descargar la guía de indicadores de Función Pública y construir la hoja de vida de un indicador.
            .col-lg-2
              a.boton.color-acento-botones.texto-blanco(href="https://www1.funcionpublica.gov.co/documents/418548/34150781/Gu%C3%ADa+para+la+construcci%C3%B3n+y+an%C3%A1lisis+de+Indicadores+de+Gesti%C3%B3n+-+Versi%C3%B3n+4+-+Mayo+2018.pdf/0e0d10e4-0ec0-6781-21e9-f2bedfd0e18a?version=1.0&download=true" target="_blank")
                span Descargar
                i.fas.fa-file-download
      .col-lg-6.mb-4
        .tarjeta.tarjeta--gris.p-4.h-100
          .row.align-items-center.h-100
            .col-lg-2.col-sm-2.d-none.d-lg-block
              img(src="@/assets/curso/temas/t3/img33.svg" alt="")
            .col-lg-7
              h4.mb-1 Formato de tabla de retención
              p Para definir cuánto tiempo se conserva cada documento, se recomienda descargar el formato de tabla de retención documental del Archivo General de la Nación.
            .col-lg-2
              a.boton.color-acento-botones.texto-blanco(href="https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/2_Politica_archivistica/Instrumentos_Archivisticos/Formatotablasretenciondocumental.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download
      .col-lg-6.mb-4
        .tarjeta.tarjeta--gris.p-4.h-100
          .row.align-items-center.h-100
            .col-lg-2.col-sm-2.d-none.d-lg-block
              img(src="@/assets/curso/temas/t3/img34.svg" alt="")
            .col-lg-7
              h4.mb-1 Formato de inventario
              p Para registrar los documentos que respaldan una decisión, se recomienda descargar el formato único de inventario documental del Archivo General de la Nación.
            .col-lg-2
              a.boton.color-acento-botones.texto-blanco(href="https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/2_Politica_archivistica/Instrumentos_Archivisticos/Formatounicoinventariodocumental.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-destacado-primario.p-4
          .row.align-items-center
            .col-auto.d-none.d-lg-block
              img.tema3-icono-84(src="@/assets/curso/temas/t3/img35.svg" alt="")
            .col
              p.mb-0 Diligenciar los formatos con una decisión real de la empresa convierte la lectura en práctica. Una vez completados, la tabla y la matriz sustentan la elección, el acta la deja por escrito y la ficha y el informe la vuelven medible, con lo que el ciclo completo queda documentado.
    p.mb-0 Con indicadores definidos, información conservada y formatos acordados, la organización dispone de lo necesario para saber cómo va cada decisión. Falta que esa información regrese a quien puede actuar sobre ella y produzca ajustes a tiempo, que es la función de los mecanismos que se examinan a continuación.

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Mecanismos de retroalimentación y ajuste
    p.mb-4 Los mecanismos de retroalimentación son los procesos institucionales mediante los cuales la información generada por el seguimiento regresa al sistema decisional para orientar los ajustes necesarios. Sin retroalimentación efectiva, las organizaciones tienden a perpetuar decisiones que ya no son pertinentes o a repetir errores que podrían haberse corregido a tiempo.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .tema3-destacado-secundario.p-4.h-100
          img.tema3-icono-84.mb-4(src="@/assets/curso/temas/t3/img36.svg" alt="")
          p.mb-0 La retroalimentación efectiva requiere que la información llegue a quienes tienen la capacidad y la autoridad para actuar sobre ella. No basta con producir informes que nadie revisa o que llegan tarde para modificar el curso de las acciones. Hace falta, además, una cultura que valore el aprendizaje sobre el error y no castigue la comunicación de malos resultados, porque de lo contrario los colaboradores reportan solo las noticias positivas.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img37.png" alt="")
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t3/img38.svg" alt="")
      .col-lg-9
        p.mb-4 En las empresas colombianas los comités de seguimiento, las reuniones de revisión estratégica y los informes periódicos de gestión son los mecanismos más comunes, y en las sociedades comerciales la junta directiva y la revisoría fiscal cumplen también ese papel. El reto no es crearlos, sino lograr que sus conclusiones se conviertan en ajustes con responsable y fecha.
        .tema3-destacado-primario.p-4
          p.mb-0 Los mecanismos de retroalimentación se diferencian por su periodicidad, por quién participa y por el tipo de ajuste que pueden desencadenar. Una organización pequeña no necesita todos, pero sí conviene que reconozca cuál cumple cada función. Cuatro mecanismos concentran la práctica gerencial y se describen a continuación con la señal que activa cada uno:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema3-casos.p-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Comité de seguimiento]#[br] Reunión periódica en la que los responsables de las decisiones en curso presentan sus indicadores frente a las metas y acuerdan los ajustes necesarios. Señal que lo activa: el corte de medición definido en la ficha de cada indicador.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Revisión estratégica]#[br] Sesión semestral o anual en la que la dirección evalúa si las decisiones tomadas siguen siendo coherentes con la estrategia y con los cambios del entorno. Señal que lo activa: el cierre de un periodo o un cambio relevante en el mercado.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Sistema de alerta temprana]#[br] Umbrales definidos para cada indicador que, al superarse, obligan a informar de inmediato a quien puede decidir, sin esperar la siguiente reunión. Señal que lo activa: un dato que cruza el rango de ajuste registrado en la ficha.
            li
              i.fas.fa-bookmark
              p.mb-0 #[strong Revisión posterior de la decisión]#[br] Ejercicio en el que, cerrado el plazo, el equipo compara lo que supuso al decidir con lo que ocurrió, para aprender sin buscar culpables. Señal que lo activa: la fecha de evaluación fijada en el acta de decisión.
    p.mb-4 Los cuatro mecanismos actúan a ritmos distintos. La alerta responde en días, el comité en semanas, la revisión estratégica en meses y la revisión posterior cuando la decisión concluye, y esa gradación permite que ningún problema espere más de lo que su gravedad admite.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        .tema3-destacado-primario.p-4.mb-4
          p.mb-0 El ajuste que sigue a la retroalimentación puede ir desde modificaciones menores en el plan de implementación hasta replantear la alternativa elegida cuando el contexto cambió de manera sustancial. Reconocer la necesidad de ajuste y actuar con oportunidad, sin caer en la parálisis ni en el voluntarismo, es una de las expresiones más claras del liderazgo gerencial maduro.
        p.mb-0 Los siguientes casos de empresas colombianas evidencian cómo un mecanismo bien diseñado convirtió un dato en una corrección a tiempo:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img39.png" alt="")
    .row.justify-content-center.mb-4
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tema3-acordeon")
          .row(titulo="Comité semanal en una empresa de aseo")
            p.mb-0 El comité revisaba cada lunes las quejas por sede y detectó que una de ellas concentraba la mitad. La retroalimentación llegó al supervisor con autoridad para reasignar personal, y el ajuste se hizo en la misma semana en lugar de esperar el informe mensual.
          .row(titulo="Alerta de cartera en una distribuidora")
            p.mb-0 La gerencia fijó como umbral una mora superior al 8 %. Cuando el indicador lo cruzó, el sistema avisó al gerente comercial el mismo día y la empresa suspendió los despachos a crédito antes de que la cartera vencida duplicara la meta.
          .row(titulo="Revisión estratégica en una constructora")
            p.mb-0 En la sesión semestral, la junta comprobó que la decisión de construir vivienda de alto costo ya no coincidía con el entorno de tasas de interés. Replanteó el proyecto hacia vivienda de interés social y evitó un año de apartamentos sin vender.
    p.mb-4 En los cuatro casos la información existía antes del mecanismo. Lo que el mecanismo añadió fue la ruta y la oportunidad, es decir, que el dato llegara a la persona correcta en el momento en que todavía podía cambiar algo.
    .row.justify-content-center.mb-0
      .col-lg-10
        .tema3-destacado-primario.p-4
          p.mb-0 Los mecanismos ordenan la información, pero no ejecutan por sí solos los ajustes. Para que las decisiones y sus correcciones se lleven a la práctica hacen falta personas que movilicen recursos y equipos que asuman lo decidido. Ese liderazgo, encargado de conducir al equipo durante la implementación, es el tema que se desarrolla a continuación.

    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.5 Liderazgo y manejo de equipos en la implementación
    p.mb-4 La calidad técnica de una decisión es una condición necesaria, pero no suficiente para su éxito, porque la implementación efectiva requiere liderazgo. El gerente que ha adoptado una decisión asume la responsabilidad de movilizar los recursos humanos, materiales y organizativos para llevarlo a la práctica. Le corresponde conducir al equipo que la ejecuta y gestionar la resistencia que emerge cuando las decisiones implican cambios.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img40.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Su importancia está en que la decisión, una vez tomada, deja de ser un problema de análisis y se convierte en un problema de personas. El equipo necesita saber qué se espera de cada uno, por qué canales circulará la información durante la ejecución y ante quién responderá por los resultados, y esa claridad solo puede darla quien lidera.
    p.mb-4 En las empresas colombianas la implementación suele fallar por dos razones que el liderazgo puede corregir. La primera es que el equipo se entera de la decisión por rumores antes que por su jefe; la segunda es que nadie define los roles y los canales de comunicación, de modo que todos esperan que otro empiece.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tema3-destacado-acento
          .row.align-items-center
            .col-lg-8.px-4.p-lg-5
              p.mb-0 Conducir un equipo durante la implementación exige cuatro responsabilidades que el líder ejerce desde el momento en que la decisión se comunica hasta que el resultado se comprueba. Ninguna puede delegarse por completo, aunque todas se apoyan en el equipo. Se describen a continuación con la práctica que las hace visibles en el trabajo diario:
            .col-lg-4.d-none.d-lg-block
              img(src="@/assets/curso/temas/t3/img41.svg" alt="")
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-componentes
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block: img.tema3-icono-84(src="@/assets/curso/temas/t3/img42.svg" alt="")
              .col
                h5 Movilizar los recursos
                p.mb-0 Hay que asegurar que las personas, el presupuesto, los equipos y el tiempo que la decisión requiere estén disponibles cuando la ejecución los necesite. Práctica que la hace visible: el líder revisa antes del inicio qué falta y lo consigue, en lugar de descubrirlo a mitad de camino.
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block: img.tema3-icono-84(src="@/assets/curso/temas/t3/img43.svg" alt="")
              .col
                h5 Asignar roles y canales
                p.mb-0 Definir quién ejecuta cada parte, quién coordina, por qué medio se informará el avance y con qué frecuencia. Práctica que la hace visible: cada integrante puede decir qué le corresponde y a quién reporta sin consultar al líder.
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block: img.tema3-icono-84(src="@/assets/curso/temas/t3/img44.svg" alt="")
              .col
                h5 Sostener la comunicación
                p.mb-0 Mantener durante toda la ejecución el flujo de información en ambos sentidos, con reuniones cortas y canales abiertos para dudas y desacuerdos. Práctica que la hace visible: los problemas llegan al líder por el equipo antes que por los clientes.
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block: img.tema3-icono-84(src="@/assets/curso/temas/t3/img45.svg" alt="")
              .col
                h5 Gestionar la resistencia
                p.mb-0 Reconocer las objeciones legítimas, atenderlas con argumentos y datos, y distinguirlas de la oposición que solo busca aplazar el cambio. Práctica que la hace visible: quien discrepó en la reunión sigue participando en la ejecución.
    p.mb-4 Las cuatro responsabilidades operan juntas. Movilizar recursos sin asignar roles produce desorden, asignar roles sin sostener la comunicación produce silencio y todo lo anterior sin gestionar la resistencia produce un equipo que cumple sin convicción. Comunicar la decisión con claridad y respeto es la condición que las hace posibles, y la forma de hacerlo se desarrolla en el tema de comunicación de la decisión.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-frase.p-4
          img(src="@/assets/curso/temas/t3/img46.svg" alt="")
          p.mb-0.fw-bold.text-center Una decisión bien tomada y mal conducida produce el mismo resultado que una mala decisión. El liderazgo en la implementación es lo que convierte el acta en hechos.
    p.mb-4 La alineación entre la decisión adoptada y los valores de la organización es también un factor de legitimidad. Cuando los colaboradores perciben que la decisión es coherente con los principios que la empresa declara y aplica, la asumen como propia con mayor facilidad; cuando la contradice, se erosiona la credibilidad del liderazgo.
    p.mb-4 Los siguientes casos de empresas colombianas evidencian cómo el manejo del equipo definió el resultado de una decisión correcta:
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img47.svg" alt="")
          .tarjeta.tema3-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Cambio de turnos en una fábrica de muebles
              p.mb-0.text-center La gerencia comunicó primero a los supervisores, les asignó el rol de explicar el nuevo horario a sus grupos y abrió un canal semanal para objeciones. Las tres modificaciones que propuso el equipo se incorporaron y la rotación de personal, que se temía, no ocurrió.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img48.svg" alt="")
          .tarjeta.tema3-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Nuevo sistema de pedidos en una distribuidora
              p.mb-0.text-center La decisión era técnica, pero el líder del proyecto no consiguió los tres computadores adicionales antes de iniciar. Los vendedores volvieron al cuaderno en la segunda semana y la implementación se retrasó cuatro meses por un recurso que costaba menos que el retraso.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img49.svg" alt="")
          .tarjeta.tema3-destacado-primario.w-100.h-100
            .p-4
              br
              h5.text-center Fusión de dos áreas en una empresa de servicios
              p.mb-0.text-center Durante los seis meses de transición, la gerente sostuvo una reunión quincenal de quince minutos con cada equipo y un canal de mensajería para dudas. Los rumores sobre despidos se desmintieron el mismo día que aparecieron y nadie renunció.
    .row.align-items-stretch.justify-content-center.mb-0
      .col-lg-8.order-2.order-lg-1
        p.mb-4 En los cuatro casos la decisión era la misma antes y después del liderazgo; lo que cambió fue la forma de conducir al equipo. El resultado dependió de que el líder asumiera sus cuatro responsabilidades y no solo de que la alternativa elegida fuera correcta.
        .tema3-destacado-primario.p-4
          p.mb-0 El seguimiento exige personas que lo lideren y equipos que lo apropien, pero la forma de liderar no es única. Cada estilo de dirección influye de manera distinta en cómo se decide y en cómo participa el equipo. Esos estilos de liderazgo y la decisión tomada en equipo se examinan a continuación.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img50.png" alt="")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
