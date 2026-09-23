<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure.introduccion-imagen.h-100
          img.h-100(src="@/assets/curso/temas/intro/img1.png" alt="")
      .col-lg-9
        p.mb-4 En la gestión empresarial contemporánea, la capacidad de tomar decisiones acertadas es una de las competencias más determinantes para quienes ejercen roles de liderazgo. La calidad de esas decisiones no depende solo de la intuición o de la experiencia acumulada; requiere el dominio de herramientas analíticas para comprender la organización, evaluar alternativas con rigor y hacer seguimiento a lo decidido.
        .introduccion-destacado.p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0.d-none.d-lg-block
              figure.introduccion-destacado__icono
                img(src="@/assets/curso/temas/intro/img2.svg" alt="")
            .col
              p.mb-0 Este componente formativo propone un recorrido por los principales instrumentos de análisis, cualitativos y cuantitativos, que los directivos utilizan para evaluar alternativas en contextos de incertidumbre. Desde el análisis FODA hasta el cuadro de mando integral, los árboles de decisión y la matriz multicriterio, cada herramienta aporta una perspectiva complementaria sobre la realidad de la empresa.

    p.mb-4 El componente aborda también la dimensión institucional y humana de la decisión. La estructura organizacional define quién decide, con qué información y en qué formatos se registra lo decidido; el seguimiento con indicadores permite comprobar los resultados y ajustar el rumbo; y el liderazgo, la comunicación asertiva, la ética y la sostenibilidad dan legitimidad y continuidad a las elecciones estratégicas.

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
        .cajon.color-secundario.p-4
          p.mb-0 Ninguna herramienta, tomada de forma aislada, garantiza por sí sola la idoneidad de una decisión. La fortaleza del gerente radica en integrar distintas perspectivas, reconocer las limitaciones de cada enfoque y adaptarlo con criterio a su organización. A lo largo del componente se presentan conceptos, ejemplos del contexto colombiano, tablas y formatos que acompañan la construcción de ese saber práctico.
        p.mt-4.mb-0 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.h-100
          img.h-100(src="@/assets/curso/temas/intro/img3.svg" alt="")

    .video
      iframe(width="1331" height="749" src="https://www.youtube.com/embed/TTIZ771irmM" title="Herramientas de evaluación y seguimiento en la estructura organizacional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
    figcaption Video 1. Herramientas de evaluación y seguimiento en la estructura organizacional
</template>

<script>
export default {
  name: 'Introduccion',
}
</script>
