<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Liquidación de nómina en contextos agropecuarios

    .row.bg-17
      .col-12 
        .p-5  
          .row.align-items-center
            .col-lg-8
              p En el trabajo campesino, así como se suma la cantidad de bultos cosechados o los litros de leche recogidos para saber cuánto se ha producido, también es necesario hacer una suma justa de todo lo que ha trabajado una persona para calcular cuánto debe pagársele. A esto se le llama #[b liquidar la nómina].

              .row.mt-4.p-3.bg-18
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img1.svg", alt="", style="width: 90px").m-auto
                .col-lg-10
                  p La liquidación de la nómina no es más que organizar toda la información de los días trabajados, las horas extras, las novedades que se presentaron, y calcular cuánto se le debe pagar al trabajador por su esfuerzo durante el mes o el tiempo acordado. Hacer esta liquidación de forma correcta ayuda a mantener la confianza, evitar discusiones y cumplir con la ley.

            .col-lg-4.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema3/img2.png', alt='', style="width: 400px").m-auto

          p.mt-4 En este tema se explicará, paso a paso, cuáles son los elementos que se deben tener en cuenta para liquidar la nómina en el campo, cómo calcular salarios, horas extra y prestaciones, y se presentará un ejemplo práctico que ayudará a entenderlo fácilmente. Así como se lleva el control del agua para el riego o de los abonos para los cultivos, llevar el control de la nómina permite que el trabajo campesino sea más justo, organizado y respetuoso.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Elementos básicos para liquidar la nómina

    p En el trabajo campesino, así como se suman los bultos cosechados o los litros de leche recogidos, también es necesario sumar con justicia todo lo que ha trabajado una persona para calcular cuánto debe pagársele. A esto se le llama liquidar la nómina.

    .row.mt-4.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img3.png', alt='', style="width: 400px").m-auto
      .col-lg-4
        p.p-5.bg-19.bg-r8 La liquidación de la nómina consiste en #[b organizar toda la información relacionada con el tiempo trabajado, las horas extra y las novedades], para calcular lo que el trabajador debe recibir por su esfuerzo durante el mes o el periodo acordado. Hacerlo correctamente #[b fortalece la confianza, evita conflictos y asegura el cumplimiento de la ley].

      .col-lg-4
        figure
          img(src='@/assets/curso/tema3/img4.png', alt='', style="width: 400px").m-auto

    .row.align-items-center.p-4.bg-3.mt-4
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema3/img5.svg", alt="", style="width: 85px").m-auto
      .col-lg-10
        p Así como se lleva el control del agua para el riego o de los abonos para los cultivos, llevar el control de la nómina hace que el trabajo en el campo sea más justo, organizado y respetuoso con quienes hacen posible la producción.


    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Elementos básicos para liquidar la nómina

    p Liquidar correctamente la nómina #[b no se trata solo de pagar lo que se crea justo o lo que se acuerde verbalmente]. Hay que considerar varios elementos que, en conjunto, garantizan un pago conforme a la ley y a los derechos del trabajador.

    .row.bg-5.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 0.7) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img6.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Salario básico acordado

                    p Es el valor pactado entre el empleador y el trabajador. Puede fijarse por día, semana o mes, pero siempre debe respetar el salario mínimo legal o superarlo si se acuerda.  

                    p #[b Ejemplo.] Don Rubén contrata a Doña Elvia para recoger habichuelas y acuerdan un pago de $50.000 por día trabajado.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img7.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Días efectivamente trabajados

                    p Se cuentan los días en que el trabajador asistió, descontando ausencias no justificadas y sumando jornadas extra si se trabajaron domingos o festivos. 


                    p #[b Ejemplo.] Pedro trabajó 26 días, descansó 4 domingos y faltó 1 día sin justificación.


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img8.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Horas extra trabajadas

                    p Toda hora laborada por fuera del horario regular debe ser registrada y pagada con recargo adicional según lo establece la ley. 

                    p #[b Ejemplo.] Doña Mariela trabajó dos horas extra diarias durante una semana en la cosecha de maíz. Esas horas deben pagarse a un valor mayor.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img9.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Recargos dominicales y festivos

                    p Cuando se trabaja en días dominicales o festivos, se debe reconocer un pago adicional al salario normal. 

                    p #[b Ejemplo.] Don Andrés trabajó durante la fiesta de San Pedro, día festivo. Ese día debe ser remunerado con recargo especial.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img10.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Prestaciones sociales acumuladas

                    p Comprenden cesantías, intereses sobre cesantías, primas y vacaciones. Aunque no siempre se pagan cada mes, se deben calcular y guardar para entregarlos en el momento correspondiente. 

                    p #[b Ejemplo.] Don Alfonso reserva cada mes un porcentaje del salario para pagar cesantías y primas en junio y diciembre.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img11.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Descuentos legales

                    p Corresponden a los aportes del trabajador a salud y pensión. Estos deben descontarse correctamente para no afectar su cobertura ni su derecho a una pensión futura. 

                    p #[b Ejemplo.] Don Samuel realiza el descuento del salario de sus trabajadores para entregarlo a la EPS y al fondo de pensiones.

              
    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema3/img12.svg", alt="", style="width: 100px").m-auto
      .col-lg-10
        p Después de comprender cuáles son los elementos básicos que componen una liquidación, el siguiente paso es revisar un #[b ejemplo práctico] que ilustre cómo hacer el cálculo completo de la nómina.


    .titulo-tres.mt-5: h3 Ejercicio práctico: liquidación de nómina en contexto agropecuario

    .row.align-items-center
      .col-lg-8
        p Don Simón, dueño de una pequeña finca cafetera, contrató a Doña Clara para trabajar durante todo el mes de marzo en la recolección de café. A continuación se describen las condiciones del trabajo y el proceso de liquidación correspondiente:

        .row.p-3.bg-10.align-items-center
          .col-lg-4.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema3/img13.png', alt='', style="width: 272px").m-auto
          .col-lg-8
            p.px-4 
              b Condiciones acordadas

            ul.lista-ul--color.mt-2.px-4
              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Salario diario: $50.000

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Días trabajados en marzo: 26 días

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Domingos trabajados: 2 domingos

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Horas extra trabajadas: 2 días × 2 horas = 4 horas

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Descuentos obligatorios: Salud (4 %) y pensión (4 %) sobre el salario base mensual

        p.mt-4 A continuación, se presenta el cálculo detallado del salario de un trabajador con base en los días laborados, recargos dominicales, horas extra diurnas y los descuentos correspondientes por seguridad social:


      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img14.png', alt='', style="width: 400px").m-auto

    .row.bg-20
      .col-12
        .p-5
          .row.align-items-center.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-3.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema3/img15.png', alt='', style="width: 290px").m-auto
                .col-lg-9
                  .titulo-sexto.color-acento-contenido.mb-3.mt-4
                    h5 Tabla 1. 
                    span Activos de la familia campesina
                  .table-responsive
                    table.table.table-bordered.tabla-compacta
                      thead
                        tr
                          th Concepto
                          th Cálculo paso a paso
                      tbody(style="background-color: #F5FAFF")
                        tr
                          td.text-start Salario por días trabajados
                          td.text-start $50.000 × 26 días = $1.300.000
                        tr
                          td.text-start Recargo por trabajo dominical
                          td.text-start
                            ul.lista-ul--color
                              li.d-flex.align-items-start
                                span.icono-img
                                p.mb-0 Recargo dominical: 75 % del salario diario

                              li.d-flex.align-items-start
                                span.icono-img
                                p.mb-0 $50.000 × 75 % = $37.500

                              li.d-flex.align-items-start
                                span.icono-img
                                p.mb-0 Total por 2 domingos: $37.500 × 2 = $75.000

                        tr
                          td.text-start Pago por horas extra diurnas
                          td.text-start
                            ul.lista-ul--color
                              li.d-flex.align-items-start
                                span.icono-img
                                p.mb-0 Valor hora normal: $50.000 ÷ 8 = $6.250

                              li.d-flex.align-items-start
                                span.icono-img
                                p.mb-0 Valor hora extra (25 % más): $6.250 × 1.25 = $7.812,50

                              li.d-flex.align-items-start
                                span.icono-img
                                p.mb-0 Total horas extra: 4 × $7.812,50 = $31.250
                        tr
                          td.text-start Suma total antes de descuentos
                          td.text-start $1.300.000 + $75.000 + $31.250 = $1.406.250

                        tr
                          td.text-start Descuentos de seguridad social (8 %)
                          td.text-start $1.406.250 × 8 % = $112.500
                        tr
                          td.text-start Salario neto a pagar
                          td.text-start $1.406.250 – $112.500 = $1.293.750

                p.mt-4 Don Simón debe pagarle a Doña Clara #[b $1.293.750] por su trabajo durante el mes de marzo, ya con #[b todo lo trabajado y los descuentos aplicados]. Este cálculo refleja un manejo responsable y justo de la liquidación de nómina.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Cálculo de salarios, horas extra y prestaciones en el campo

    p El salario no se limita únicamente al pago diario por la jornada trabajada. En el contexto rural, #[b el cálculo justo del salario incluye también horas extra, recargos por días especiales y las prestaciones sociales] que el trabajador tiene derecho a recibir según la ley. Para hacer un cálculo adecuado en el campo, es importante considerar los siguientes elementos:

    .row.mt-4
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/img16.svg').m-auto

          p.text-center 
            b Salario base
          p Es el valor acordado por día, semana o mes entre el empleador y el trabajador, siempre respetando el salario mínimo legal vigente. 

          p #[b Ejemplo.]  Doña Carmen acordó un pago de $55.000 diarios por su trabajo en el cultivo de cebolla.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/img17.svg').m-auto

          p.text-center 
            b Horas extra diurnas
          p Se pagan con un recargo del 25 % sobre el valor de una hora ordinaria.  

          p #[b Ejemplo.] Si un trabajador gana $6.000 por hora, la hora extra diurna se paga a $7.500.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/img18.svg').m-auto

          p.text-center 
            b Horas extra nocturnas
          p Tienen un recargo del 75 % sobre el valor de la hora ordinaria.  
          p #[b Ejemplo.] Una hora normal de $6.000 se paga a $10.500 si es laborada de noche.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/img19.svg').m-auto

          p.text-center 
            b Recargo por dominicales y festivos
          p Trabajar un domingo o un festivo se paga con un recargo del 75 % sobre el valor diario, además del salario normal.  
          p #[b Ejemplo.] Si el salario diario es $50.000, se paga $87.500 por trabajar un festivo.

    .row.bg-21
      .col-12
        .p-5
          .titulo-tres.mt-5: h3 Prestaciones sociales obligatorias

          p.mt-4 A continuación, se presenta un video que explica las prestaciones sociales obligatorias en Colombia, resaltando su importancia como parte del salario integral y como garantía del bienestar de los trabajadores.

          .row.mt-2
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema3/img20.svg", alt="", style="width: 100px").m-auto
      .col-lg-10
        p #[b Estas prestaciones sociales son como los abonos que se le echan a la tierra:] ayudan a que el esfuerzo del trabajador no solo se reconozca día a día, sino también a largo plazo. #[b Cumplir con ellas es una muestra de respeto, justicia y compromiso con la dignidad del trabajo campesino.]

    .titulo-tres.mt-5: h3 Ejercicio práctico: Cálculo de salario, horas extra y prestaciones

    .row.align-items-center
      .col-lg-8
        p Don Gregorio, propietario de una finca de plátanos, contrató a #[b Doña Rosalba] durante el mes de abril con las siguientes condiciones:

        .row.p-3.bg-10.align-items-center
          .col-lg-4.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema3/img21.png', alt='', style="width: 272px").m-auto
          .col-lg-8
            p.px-4 
              b Condiciones laborales

            ul.lista-ul--color.mt-2.px-4
              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 #[b Salario diario:] $52.000

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 #[b Días trabajados:] 24 días

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 #[b Horas extra diurnas trabajadas:] 6 horas

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 #[b Domingo trabajado:] 1 (durante feria local)


        p.mt-4 A continuación, se presenta el cálculo detallado del salario mensual, incluyendo horas extra, trabajo en domingo y prestaciones sociales proporcionales correspondientes a un mes laborado. 


      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img22.png', alt='', style="width: 400px").m-auto

    .row.mt-4.align-items-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img23.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Salario base mensual")

            p.px-5 $52.000 × 24 días = #[b $1.248.000]

          div(titulo="Pago por horas extra diurnas")

            ul.lista-ul--color.px-5
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Valor hora ordinaria: $52.000 ÷ 8 = $6.500

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Valor hora extra (25 % más): $6.500 × 1.25 = $8.125

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Total horas extra: 6 × $8.125 = #[b $48.750]

          div(titulo="Pago por domingo trabajado")

            ul.lista-ul--color.px-5
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Recargo dominical: $52.000 × 75 % = $39.000

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Total domingo: $52.000 + $39.000 = #[b $91.000]

          div(titulo="Suma total mensual a pagar")

            p.px-5 $1.248.000 + $48.750 + $91.000 = #[b $1.387.750]

          div(titulo="Cálculo estimado de prestaciones sociales proporcionales ")
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 2. 
              span Cálculo de prestación
            .table-responsive
              table.table.table-bordered.tabla-compacta
                thead
                  tr
                    th Prestación
                    th Cálculo aproximado
                    th Valor estimado
                tbody(style="background-color: #F5FAFF")
                  tr
                    td.text-start Cesantías

                    td.text-start 1/12 del salario mensual

                    td.text-end $115.646

                  tr
                    td.text-start Intereses sobre cesantías

                    td.text-start 12 % de cesantías

                    td.text-end $13.877

                  tr
                    td.text-start Prima de servicios

                    td.text-start 1/12 del salario mensual

                    td.text-end $115.646

                  tr
                    td.text-start Vacaciones
                    td.text-start 1.25 días (aproximadamente)
                    td.text-end $54.167 (1.25 días × $43.333*)

            p.mt-4 * Valor diario estimado de vacaciones: $1.300.000 ÷ 30 días ≈ $43.333

    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema3/img24.svg", alt="", style="width: 100px").m-auto
      .col-lg-10
        p Don Gregorio debe pagar a #[b Doña Rosalba $1.387.750] por su trabajo en abril. Además, debe #[b separar los valores estimados para cesantías, intereses, prima y vacaciones], asegurando así que se cumplan sus obligaciones legales y el reconocimiento justo por el esfuerzo realizado.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Ejemplo práctico de liquidación de nómina campesina

    .row.align-items-center
      .col-lg-8
        p Para comprender mejor cómo aplicar todo lo aprendido sobre la liquidación de nómina rural, veamos un ejemplo completo, sencillo y paso a paso, basado en una situación muy común en las fincas campesinas.

        .row.p-3.bg-10.align-items-center
          .col-lg-12
            p.px-4 
              b Caso

            p.px-4 Don Alfredo, propietario de una finca de hortalizas en la vereda #[b El Progreso], contrató a #[b Don José] durante el mes de mayo bajo las siguientes condiciones:

            ul.lista-ul--color.mt-2.px-4
              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Salario diario: $53.000.

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Días efectivamente trabajados: 25.

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Horas extra diurnas trabajadas: 8 horas.

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Domingo trabajado: 1.

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Afiliación a salud y pensión: sí (se aplican descuentos del 8 % sobre el salario base).

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Debe calcularse también el valor proporcional de las prestaciones sociales.



      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img25.png', alt='', style="width: 400px").m-auto

    .titulo-tres.mt-5: h3 Cálculo paso a paso

    p.mt-4 A continuación, se presenta el cálculo detallado del salario correspondiente a un mes laboral: 

    .row.mt-4.align-items-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img26.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Salario base por días trabajados")

            p.px-5 $53.000 × 25 días = #[b $1.325.000]


          div(titulo="Pago por horas extra diurnas")

            ul.lista-ul--color.mt-2.px-4
              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Valor hora ordinaria: $53.000 ÷ 8 = $6.625

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Valor hora extra (25 % más): $6.625 + 25 % = $8.281

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Total por 8 horas: $8.281 × 8 = #[b $66.248]

          div(titulo="Pago por domingo trabajado")

            ul.lista-ul--color.mt-2.px-4
              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Salario del día: $53.000

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Recargo dominical: $53.000 × 75 % = $39.750

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 Total por el domingo: $53.000 + $39.750 = $92.750

          div(titulo="Total ingresos brutos (antes de descuentos)")

            ul.lista-ul--color.mt-2.px-4
              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 $1.325.000 (salario base)

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 $66.248 (horas extra)

              li.d-flex.align-items-start.p-1.bg-11
                span.icono-img
                p.mb-0 $92.750 (domingo trabajado)


    .row.mt-4.align-items-center
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Descuento por seguridad social (8 % sobre salario base)")

            p.px-5 $1.325.000 × 8 % = #[b $106.000]

          div(titulo="Salario neto a pagar")

            p.px-5 $1.483.998 – $106.000 = #[b $1.377.998]

          div(titulo="Cálculo de prestaciones sociales proporcionales (por un mes trabajado)")

            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 3. 
              span Cálculo de prestaciones sociales proporcionales (por un mes trabajado)
            .table-responsive
              table.table.table-bordered.tabla-compacta
                thead
                  tr
                    th Prestación
                    th Cálculo
                    th Valor
                tbody(style="background-color: #F5FAFF")
                  tr
                    td.text-start Cesantías
                    td.text-start 1/12 de $1.483.998
                    td.text-end $123.666
                  tr
                    td.text-start Intereses sobre cesantías
                    td.text-start 12 % de cesantías
                    td.text-end $14.840
                  tr
                    td.text-start Prima de servicios
                    td.text-start 1/12 de $1.483.998
                    td.text-end $123.666
                  tr
                    td.text-start Vacaciones
                    td.text-start 1.25 días proporcionales aprox.
                    td.text-end Según salario diario

      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img27.png', alt='', style="width: 295px").m-auto

    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema3/img28.svg", alt="", style="width: 100px").m-auto
      .col-lg-10
        p Liquidar la nómina en el campo no es complicado si se lleva el registro día a día, se aplican correctamente las fórmulas y se respetan los derechos laborales. Cumplir con lo justo es sembrar respeto, legalidad y sostenibilidad en cada pago entregado.

</template>

<script>
export default {
  name: 'Tema3',
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
