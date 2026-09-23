<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 Decidir en el nivel gerencial combina método, información y criterio. Una buena decisión nace de valorar las alternativas con las herramientas adecuadas, se sostiene con el seguimiento dentro de la estructura de la organización y se legitima con un liderazgo ético y una comunicación clara. En un entorno que cambia con rapidez y exige transparencia, integrar el análisis, el seguimiento y la comunicación permite tomar decisiones más sólidas y sustentadas en datos, que generan confianza en el equipo y en la sociedad.

    p.mb-4 El mapa conceptual que se presenta a continuación organiza los cinco ejes del componente y el recorrido que los articula:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg" alt="Mapa conceptual de las herramientas de evaluación y seguimiento en la estructura organizacional. Presenta cinco ejes: herramientas cualitativas para evaluar alternativas; herramientas cuantitativas para comparar alternativas; seguimiento de la decisión en la estructura organizacional; liderazgo y decisión en equipo; y ética, sostenibilidad y comunicación. Cada eje se desarrolla mediante los subtemas del componente formativo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
