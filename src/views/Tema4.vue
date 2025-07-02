<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Aplicación de normativas técnicas en nómina rural

    .row.bg-22.m-neg
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-8
              p Así como existen reglas que indican cuándo sembrar, cómo cuidar la tierra o cuándo cosechar, también existen leyes que regulan el trabajo y los pagos en el campo. Estas normativas no son para complicar el trabajo del campesino, sino para proteger tanto al empleador como al trabajador, asegurando que cada uno reciba lo que le corresponde de manera justa.

              .row.p-3.bg-10.align-items-center
                .col-lg-4.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema4/img1.png', alt='', style="width: 272px").m-auto
                .col-lg-8
                  p.px-4 
                    b La normativa laboral establece:

                  ul.lista-ul--color.mt-2.px-4
                    li.d-flex.align-items-start.p-1.bg-11
                      span.icono-img
                      p.mb-0 Cómo deben pagarse los salarios.

                    li.d-flex.align-items-start.p-1.bg-11
                      span.icono-img
                      p.mb-0 Qué beneficios debe recibir el trabajador.

                    li.d-flex.align-items-start.p-1.bg-11
                      span.icono-img
                      p.mb-0 Cómo manejar descansos, afiliaciones a salud y pensión.

                    li.d-flex.align-items-start.p-1.bg-11
                      span.icono-img
                      p.mb-0 Qué hacer en caso de accidentes o despidos.


              .row.mt-4.p-2.bg-12.align-items-center
                .col-lg-2
                  figure
                    img(src="@/assets/curso/tema4/img3.svg", alt="", style="width: 75px").m-auto
                .col-lg-10
                  p.p-2 Conocer y aplicar estas normas es tan importante como saber cuándo sembrar la semilla correcta para obtener una buena cosecha. Cumplir con la ley no solo evita sanciones legales, sino que también fortalece la confianza y el respeto dentro de las comunidades rurales.


            .col-lg-4.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema4/img2.png', alt='', style="width: 400px").m-auto

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Principales leyes laborales aplicables en el sector rural

    p En Colombia (y en otros países), existen leyes que protegen a los trabajadores rurales, incluso si en las fincas es común que se hagan acuerdos de palabra. La ley está por encima de cualquier acuerdo informal y su cumplimiento es obligatorio para garantizar condiciones de trabajo dignas. A continuación, se presentan las principales normas legales que deben conocerse y aplicarse en el contexto rural:

    .row.bg-5.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 0.7) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img4.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Código Sustantivo del Trabajo

                    p Regula todas las relaciones laborales en Colombia: salarios, horarios, descansos, vacaciones, cesantías, afiliaciones, etc. 
  
                    p #[b Ejemplo.] Don Álvaro contrata a Maritza en su cultivo de plátano. Gracias a esta ley, Maritza tiene derecho a su pago, descanso dominical y vacaciones si trabaja todo el año.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img5.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Ley 100 de 1993 

                    p Ley 100 de 1993 (Sistema de Seguridad Social Integral) Obliga a afiliar a los trabajadores (incluso rurales) a salud, pensión y riesgos laborales, protegiéndolos ante enfermedades, accidentes o en la vejez. 


                    p #[b Ejemplo.] Pedro, ordeñador en la finca de Don Horacio, recibe atención médica sin altos costos gracias a su afiliación en salud.


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img6.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Decreto 1072 de 2015 

                    p Decreto 1072 de 2015 (Sistema de Gestión de Seguridad y Salud en el Trabajo) Exige que todos los empleadores, incluso en zonas rurales, garanticen condiciones seguras para prevenir accidentes y enfermedades laborales. 


                    p #[b Ejemplo.] Don Anselmo entrega guantes, botas y capacitación básica a sus trabajadores del cultivo de cebolla.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img7.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Ley 1788 de 2016

                    p Garantiza el pago de la prima de servicios también para trabajadores del sector rural, no solo para empleados urbanos. 

                    p #[b Ejemplo.] Doña Teresa, trabajadora fija en la finca de Don Rodrigo, recibe su prima a mitad de año y en diciembre como reconocimiento por su labor.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img8.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Ley de formalización laboral rural

                    p Promueve el uso de contratos formales y el acceso a beneficios laborales para los trabajadores del campo, reduciendo la informalidad en veredas y corregimientos. 


                    p #[b Ejemplo.] En la vereda El Silencio, varios productores de caña formalizan contratos con sus trabajadores y aseguran afiliaciones y prestaciones.

              
    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema4/img9.svg", alt="", style="width: 100px").m-auto
      .col-lg-10
        p Así como la naturaleza tiene sus leyes —el sol para germinar, el agua para crecer, el tiempo para madurar—, el trabajo humano también necesita reglas claras que protejan a quienes, día a día, labran la tierra bajo el sol, la lluvia y el viento. Conocer y aplicar las leyes laborales es cuidar la semilla más valiosa que se siembra en el campo: la dignidad del trabajador.

    .titulo-tres.mt-5: h3 Relación de las leyes laborales con los derechos de los campesinos y su limitación frente al trabajo reproductivo

    .row.align-items-center.mt-4
      .col-lg-7
        p A continuación, se analiza en el podcast la relación entre las leyes laborales colombianas y los derechos de los campesinos, destacando sus limitaciones frente al reconocimiento del trabajo reproductivo en contextos rurales.

        .row.align-items-center.bg-15.p-4
          .col-lg-5.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema2/img14.png', alt='', style="width: 270px").m-auto
          .col-lg-7
            p(style="color:black")
              b  Pódcast

            TarjetaAudio.color-acento-botones.mb-3.bg-16.p-3(
              texto="Derechos laborales campesinos y trabajo reproductivo"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img10.png', alt='', style="width: 504px").m-auto  


    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Interpretación sencilla de normas clave
    
    p Cuando se habla de leyes laborales, muchas personas creen que son complicadas o que solo aplican en las ciudades. Sin embargo, en el campo también deben cumplirse, y entenderlas no tiene por qué ser difícil. Aquí explicamos, de forma sencilla, cómo interpretar algunas normas clave para aplicarlas correctamente en la vida diaria del trabajo rural.

    .row.mt-4.align-items-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img11.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Derecho al salario mínimo ")

            p.px-5.mb-0 ¿Qué dice la ley? 
            p.px-5.mb-0 Todo trabajador, sea urbano o rural, debe recibir como mínimo el salario legal vigente.
            p.px-5.mb-0 ¿Cómo se aplica en el campo? 
            p.px-5 No se puede pagar menos del jornal diario legal, incluso si se trabaja por días o temporadas. 


            p.px-5 #[b Ejemplo.] Si el salario mínimo mensual es de $1.300.000, el valor diario (aproximado) es $43.333. A un jornalero que recoge café no se le debe pagar menos por día.

          div(titulo="Derecho a la seguridad social")

            p.px-5.mb-0 ¿Qué dice la ley? 
            p.px-5.mb-0 Todos los trabajadores deben estar afiliados a salud, pensión y riesgos laborales.
            p.px-5.mb-0 ¿Cómo se aplica en el campo? 
            p.px-5 Así como se protege una siembra con cuidados, también se debe proteger al trabajador. La afiliación le garantiza atención médica y respaldo si se accidenta. 

            p.px-5 #[b Ejemplo.] Doña Margarita trabaja en ordeño. Al estar afiliada, si se lesiona en la finca, recibe atención médica sin pagar de su bolsillo.

          div(titulo="Pago de horas extra, dominicales y festivos")

            p.px-5.mb-0 ¿Qué dice la ley? 
            p.px-5.mb-0 El trabajo adicional o en días de descanso debe pagarse con recargos especiales.
            p.px-5.mb-0 ¿Cómo se aplica en el campo? 
            p.px-5 El trabajo extra no solo se agradece; se paga mejor. Las horas fuera del horario o los días festivos deben reconocerse con el recargo correspondiente. 

            p.px-5 #[b Ejemplo.] Don Julián trabaja un domingo recolectando naranja. Debe recibir el pago del día más un 75 % adicional.

          div(titulo="Prestaciones sociales obligatorias")

            p.px-5.mb-0 ¿Qué dice la ley? 
            p.px-5.mb-0 Todo trabajador tiene derecho a cesantías, intereses de cesantías, prima de servicios y vacaciones pagadas.
            p.px-5.mb-0 ¿Cómo se aplica en el campo? 
            p.px-5 El empleador debe separar una parte del salario como un “ahorro” que se entrega al finalizar el contrato o al final del año. 

            p.px-5 #[b Ejemplo.] Doña Clara, tras un año sembrando yuca, recibe su prima, sus vacaciones y sus cesantías, lo cual le ayuda a mejorar su casa y apoyar la educación de sus hijos.

    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema4/img12.svg", alt="", style="width: 85px").m-auto
      .col-lg-10
        p Entender las leyes laborales no es solo cosa de abogados o expertos. Es, simplemente, como seguir los ciclos de la naturaleza: respetar los tiempos, reconocer el trabajo y proteger a quienes siembran el futuro. Aplicar las normas es parte de construir un campo más justo, digno y respetuoso para todos.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Buenas prácticas para cumplir con la legislación laboral

    p Cumplir con las leyes laborales no tiene que ser complicado ni costoso. Por el contrario, es una manera de fortalecer la finca, mejorar el ambiente de trabajo y asegurar que quienes colaboran en el campo se sientan valorados y respetados. A continuación, se presentan algunas buenas prácticas campesinas que facilitan el cumplimiento de la normativa laboral y promueven una cultura de legalidad y respeto:

    .row.bg-5.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 0.7) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img13.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Hacer acuerdos claros desde el principio

                    p Antes de iniciar el trabajo, se debe acordar el salario, los días laborales, las responsabilidades y los pagos adicionales por horas extra o festivos.  
  
                    p #[b Ejemplo.] Don Fermín, antes de la cosecha de café, reúne a su equipo y explica cuánto se pagará por jornada, cómo se manejarán las horas extra y cuándo descansarán.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img14.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Registrar la asistencia y novedades diariamente

                    p Llevar una libreta o cuaderno donde se anoten diariamente la asistencia, horas trabajadas, ausencias, permisos o incapacidades ayuda a evitar confusiones al final del mes. 

                    p #[b Ejemplo.] Doña Ana anota cada día quién trabajó, si hubo llegadas tarde o permisos, y usa esa información para calcular el pago exacto.


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img15.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Afiliar al trabajador a la seguridad social

                    p La afiliación a salud, pensión y riesgos laborales es obligatoria, sin importar la duración del contrato. Esto protege al trabajador ante cualquier accidente o enfermedad. 

                    p #[b Ejemplo.] Don Abel, que contrata por dos meses para la cosecha de plátano, afilia a sus trabajadores desde el primer día a una EPS y fondo de pensión.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img16.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Pagar prestaciones sociales de forma oportuna

                    p Aunque se paguen una o dos veces al año, lo mejor es separar mes a mes el dinero destinado a cesantías, primas y vacaciones. 
 

                    p #[b Ejemplo.] Don Rodrigo guarda cada mes un porcentaje del salario de sus trabajadores en una cuenta especial, asegurando los fondos para cuando deba pagar prestaciones.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img17.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Tratar al trabajador con respeto y dignidad

                    p Más allá de cumplir con lo legal, el trato humano y respetuoso mejora el ambiente laboral y la motivación. 

                    p #[b Ejemplo.] Doña Isabel escucha las necesidades de su equipo y crea espacios de diálogo. Como resultado, sus trabajadores se sienten comprometidos y valorados.

              
    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema4/img18.svg", alt="", style="width: 100px").m-auto
      .col-lg-10
        p Cumplir con las normas laborales no es solo una obligación, sino una siembra de confianza, respeto y esperanza. Así como se prepara la tierra con cuidado para obtener los mejores frutos, también se debe cuidar a quienes con esfuerzo y dedicación hacen posible la vida en el campo.

</template>

<script>
export default {
  name: 'Tema4',
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
