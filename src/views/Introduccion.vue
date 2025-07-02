<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bg-1.align-items-center 
      .col-lg-3
        figure
          img(src='@/assets/curso/intro/img1.png', alt='', style="width: 296px").m-auto
      .col-lg-9
        p La economía campesina es el motor de vida de muchas comunidades rurales. Cada jornada de trabajo en el campo, ya sea cultivando, cosechando o cuidando animales, representa esfuerzo, dedicación y conocimiento ancestral. Sin embargo, así como existe un compromiso con la tierra, también hay un compromiso con las personas que trabajan en ella. La gestión adecuada de la nómina en las unidades campesinas no solo es una obligación legal, sino una forma de respetar la dignidad de quienes hacen posible que los alimentos lleguen a nuestras mesas.

        .row.justify-content-center.mb-5
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-2
              .col-lg.d-flex
                .p-4.w-100.d-flex.align-items-center
                  p.mb-0 Este componente formativo busca explicar, de manera sencilla y práctica, los aspectos más importantes para llevar un manejo correcto de la nómina en el contexto rural. Se abordarán temas como las obligaciones laborales, el manejo de novedades de nómina, la correcta liquidación de salarios, la aplicación de normativas técnicas y la importancia de sistematizar la información. Todo está pensado para brindar herramientas claras, aplicables en el día a día de los empleadores campesinos, fortaleciendo así el trabajo digno y la productividad del campo.
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/img3.png', alt='', class="w-100 h-100 object-fit-cover")

    
    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/intro/img3.svg", alt="", style="width: 100px").m-auto
      .col-lg-10
        p El objetivo es que, al finalizar esta lectura, cualquier persona vinculada al trabajo rural pueda comprender y aplicar buenas prácticas en la gestión de la nómina, fortaleciendo tanto sus unidades productivas como su cumplimiento ante la ley.

              


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
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

<style lang="sass"></style>
