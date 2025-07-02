<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Obligaciones laborales en unidades campesinas

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el ámbito rural, las relaciones de trabajo a menudo se construyen sobre la confianza y el conocimiento mutuo. Sin embargo, esto no exime de la responsabilidad de cumplir con las leyes laborales que protegen a los trabajadores campesinos. Comprender cuáles son las obligaciones que tiene quien contrata en el campo es fundamental para garantizar derechos básicos como el salario justo, la seguridad social y unas condiciones dignas de trabajo.


    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Principales derechos laborales que deben reconocerse en el campo

    .row.align-items-center
      .col-lg-8
        .row.align-items-center.bg-4.p-4
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema1/img2.svg", alt="", style="width: 90px").m-auto
          .col-lg-10
            p Trabajar en el campo no es solo sembrar, cosechar o cuidar animales; también es construir vida y comunidad. Las personas que día a día laboran en una finca, un cultivo o con el ganado merecen recibir un trato justo y digno. Así como la tierra necesita cuidado para dar buenos frutos, quienes trabajan en ella también requieren respeto y reconocimiento.
        
        p.mt-4 Cuando se tiene a alguien trabajando en la finca, aunque sea por temporadas o por días, hay unos derechos fundamentales que deben respetarse. A continuación, se presentan las principales obligaciones laborales junto con ejemplos prácticos que ilustran su aplicación en la vida cotidiana del campo:

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 400px").m-auto


    .row.bg-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 0.7) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img4.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Pago justo por el trabajo realizado

                    p El salario debe cumplir como mínimo con lo establecido por la ley. No se puede pagar menos, aunque el acuerdo sea verbal. 

                    p #[b Ejemplo.] Don Manuel contrata a Rosa para recolectar frijol. Cada día debe pagarle el valor completo y justo.


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img5.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Afiliación al sistema de salud y pensión

                    p Todo trabajador debe estar afiliado para recibir atención médica y cotizar a pensión. 

                    p #[b Ejemplo.] Pedro se lesiona recogiendo plátano. Gracias a su afiliación, recibe atención sin pagar de su bolsillo.


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img6.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Prestaciones sociales

                    p Incluyen cesantías, intereses sobre cesantías, primas y vacaciones pagadas. Son recursos que protegen al trabajador. 

                    p #[b Ejemplo.] María, tras un año en una huerta, debe recibir primas además de su salario mensual.


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img7.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Condiciones dignas para trabajar

                    p Se debe garantizar agua potable, herramientas adecuadas, protección frente al clima y evitar tareas peligrosas. 

                    p #[b Ejemplo.] Juan necesita guantes y botas para desyerbar sin lesionarse.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img8.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Descanso justo y vacaciones

                    p El descanso semanal debe ser respetado y pagado. Quienes trabajan todo el año tienen derecho a vacaciones. 

                    p #[b Ejemplo.] Ana ordeña vacas a diario. Tiene derecho a descansar los domingos y a seguir recibiendo su salario.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img9.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Despido respetuoso y conforme a la ley

                    p No se puede despedir sin causa justa ni sin liquidar los derechos del trabajador. 

                    p #[b Ejemplo.] Don Tomás despide a un obrero sin aviso ni liquidación. El trabajador puede reclamar ante las autoridades.


    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema1/img10.svg", alt="", style="width: 100px").m-auto
      .col-lg-10
        p Así como se cuida el ganado, las semillas o el agua del río, también se debe cuidar al trabajador que, con sus manos, levanta cada cosecha. #[b Cumplir con estos derechos no es solo una obligación legal], sino un acto de respeto que fortalece las fincas, los cultivos y las comunidades campesinas.
                  
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Responsabilidades del empleador campesino

    .row.align-items-center
      .col-lg-8
        p Cuando se contrata a una persona para trabajar en la finca o en el campo, no solo se hace un acuerdo de palabra o un favor entre vecinos. Se asume una responsabilidad seria y legal que debe cumplirse con respeto y compromiso. El empleador campesino tiene deberes claros hacia quienes le ayudan a levantar su cosecha, a cuidar su ganado o a mantener su parcela en buen estado.

        p Entre las principales responsabilidades que debe asumir el empleador en el campo se encuentran las siguientes:
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img11.png', alt='', style="width: 400px").m-auto

    .row.mt-4.align-items-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img12.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Realizar un acuerdo de trabajo claro")

            p.px-5 Aunque muchas veces se acostumbra a hacer tratos “de palabra”, es importante dejar claro desde el principio cuánto se va a pagar, qué tareas se van a realizar, los horarios y las condiciones de trabajo. 

            p.mb-0.px-5 #[b Ejemplo.] Don Antonio contrata a Luz Marina para desyerbar un lote de maíz. Desde el primer día, acuerdan que le pagará diario $50.000, trabajará de 6 de la mañana a 2 de la tarde, y se le proporcionará almuerzo y agua potable.


          div(titulo="Pagar el salario en el tiempo convenido")

            p.px-5 El empleador debe entregar el salario en las fechas acordadas, sin retrasos ni descuentos injustificados. El pago puede ser diario, semanal o quincenal, según lo que se haya pactado. 

            p.mb-0.px-5 #[b Ejemplo.] Don Ernesto acuerda con Jorge pagarle cada viernes al terminar la semana de trabajo en la finca. Cumplir esta promesa demuestra respeto y seriedad.

          div(titulo="Afiliar a los trabajadores al sistema de seguridad social")

            p.px-5 Toda persona contratada debe estar afiliada a salud, pensiones y riesgos laborales, así trabaje por pocos días. Esto protege tanto al trabajador como al empleador en caso de accidentes o enfermedades. 

            p.mb-0.px-5 #[b Ejemplo.] Doña Teresa contrata a Manuel por dos meses para cosechar caña. Aunque sea un trabajo temporal, debe asegurarse de que esté afiliado, para que esté protegido si ocurre algún accidente.

          div(titulo="Garantizar las condiciones de trabajo seguras y saludables")

            p.px-5 El empleador debe entregar herramientas en buen estado, proporcionar agua potable, zonas de descanso, y minimizar riesgos en el lugar de trabajo. 

            p.mb-0.px-5 #[b Ejemplo.] En la finca de Don Elías, donde se siembra yuca, todos los trabajadores tienen guantes y machetes bien afilados para evitar accidentes, y descansan bajo sombra cada cierto tiempo.


    .row.mt-4.align-items-center
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Reconocer y pagar las prestaciones sociales")

            p.px-5 Además del salario, se deben reconocer y pagar cesantías, intereses sobre cesantías, primas y vacaciones a los trabajadores que laboran de manera continua. 

            p.mb-0.px-5 #[b Ejemplo.] Luz Marina, después de trabajar seis meses en la finca de Don Antonio, recibe su prima a mitad de año como agradecimiento y obligación por su servicio

          div(titulo="Respetar el derecho al descanso y a la desconexión")

            p.px-5 No se debe obligar a los trabajadores a laborar sin pausas ni a trabajar horas extra sin compensación. El cuerpo necesita descansar para poder rendir mejor. 

            p.mb-0.px-5 #[b Ejemplo.] En la finca de ganado de Don Ricardo, los peones tienen derecho a descansar el domingo y a tomar un breve descanso a media jornada para recuperar fuerzas.

          div(titulo="Cumplir con las normas en caso de terminación del contrato")

            p.px-5 Si el empleador decide dar por terminado el contrato, debe hacerlo cumpliendo los procedimientos legales, pagando lo que corresponda por ley y avisando de manera respetuosa. 

            p.mb-0.px-5 #[b Ejemplo.] Cuando se terminó la temporada de café, Don Julio avisó con ocho días de anticipación a sus trabajadores, pagó su liquidación completa y agradeció su labor.

      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img13.png', alt='', style="width: 295px").m-auto


    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema1/img14.svg", alt="", style="width: 100px").m-auto
      .col-lg-10
        p #[b Como en el campo cada semilla necesita cuidado para dar fruto, cada trabajador necesita respeto y cumplimiento de sus derechos para sembrar esperanza en su trabajo diario]. El rol del empleador campesino es clave para dignificar el trabajo rural, fortalecer las relaciones laborales y garantizar el bienestar de quienes hacen posible cada cosecha.

    .titulo-tres.mt-5: h3 Noción de trabajo, actividad y labor en el contexto campesino

    .row.align-items-center.mt-4
      .col-lg-8
        p En el mundo rural, el #[b trabajo] no siempre se reduce a un empleo formal o remunerado. Existen diversas formas de participación en la vida productiva y comunitaria que, aunque a veces no sean reconocidas por la economía oficial, resultan fundamentales para el sostenimiento de la finca, la familia y la comunidad.

        p A continuación se presentan las principales formas de comprender el trabajo en el contexto campesino:
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img15.png', alt='', style="width: 400px").m-auto

    .row.mt-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/img16.svg').m-auto

          p.text-center 
            b Trabajo
          p Se entiende como el conjunto de acciones orientadas a producir bienes o servicios, ya sea para el mercado o para el consumo propio. 
          p #[b Ejemplo.]  Una familia produce leche y parte la vende en el pueblo, mientras otra parte la consume en casa.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/img17.svg').m-auto

          p.text-center 
            b Actividad
          p Abarca las tareas cotidianas necesarias para el funcionamiento de la finca, incluyendo labores como la siembra, el cuidado de animales o la recolección de productos. 

          p #[b Ejemplo.] Carlos limpia el corral y alimenta a las gallinas todas las mañanas como parte de la rutina diaria de la finca.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/img18.svg').m-auto

          p.text-center 
            b Labor
          p Se refiere a faenas puntuales o esporádicas que pueden implicar cooperación comunitaria, como la limpieza de canales, reparación de cercas o apoyo en una cosecha. 
          p #[b Ejemplo.] Varios vecinos ayudan a construir una cerca en la finca de Don Esteban durante un fin de semana.

    
    .row.bg-9
      .col-12
        .p-5
          .titulo-tres.mt-5: h3 Trabajo reproductivo en el campo

          .row.mt-4.align-items-center
            .col-lg-8
              p #[b El trabajo reproductivo] comprende todas aquellas actividades no remuneradas que son esenciales para el bienestar diario y la continuidad de la vida familiar y comunitaria. Aunque tradicionalmente invisibilizado o no valorado como empleo, este tipo de trabajo es #[b indispensable para la sostenibilidad de la vida rural].

              .row.p-3.bg-10.align-items-center
                .col-lg-4.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema1/img19.png', alt='', style="width: 272px").m-auto
                .col-lg-8
                  p.px-4 
                    b Incluye tareas como:

                  ul.lista-ul--color.mt-2.px-4
                    li.d-flex.align-items-start.p-1.bg-11
                      span.icono-img
                      p.mb-0 El cuidado de niños, personas mayores o enfermas.

                    li.d-flex.align-items-start.p-1.bg-11
                      span.icono-img
                      p.mb-0 La preparación de alimentos.

                    li.d-flex.align-items-start.p-1.bg-11
                      span.icono-img
                      p.mb-0 La limpieza y el mantenimiento del hogar.

                    li.d-flex.align-items-start.p-1.bg-11
                      span.icono-img
                      p.mb-0 El apoyo emocional y organizativo dentro del núcleo familiar. 

              .row.mt-4.p-3.bg-12
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema1/img21.svg", alt="", style="width: 75px").m-auto
                .col-lg-10
                  p Estas acciones, mayoritariamente realizadas por mujeres, sostienen el resto de las actividades productivas, aunque #[b no generen ingresos monetarios] ni figuren en registros laborales.
            
            .col-lg-4.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema1/img20.png', alt='', style="width: 400px").m-auto



    .titulo-tres.mt-5: h3 Formas tradicionales de intercambio de trabajo en el campo

    p.mt-4 En muchas comunidades campesinas, el trabajo se organiza también a través de formas tradicionales de colaboración y reciprocidad, que fortalecen los lazos sociales y la solidaridad vecinal. Estas prácticas, aunque no mediadas por dinero, son profundamente valoradas y funcionales dentro del sistema rural.

    TabsB.color-acento-contenido 
      .py-4.py-md-5.bg-13(titulo="Mano vuelta" :icono="require('@/assets/curso/tema1/img22.svg')")
        .row.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/img23.png')
            
          .col-md-7
            h4 Mano vuelta
            p Intercambio de trabajo entre vecinos o familiares. No hay pago económico; se espera que la ayuda recibida se devuelva cuando se necesite. 

            p #[b Ejemplo.] Juan ayuda a Marta a sembrar frijol y, más adelante, ella lo apoya en la cosecha de maíz.
              
      .py-4.py-md-5.bg-13(titulo="Convite" :icono="require('@/assets/curso/tema1/img22.svg')")
        .row.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/img24.png')
             
          .col-md-7
            h4 Convite
            p Jornada colectiva en la que varias personas se reúnen para realizar una tarea específica. Generalmente se ofrece una comida o se espera reciprocidad futura. 

            p #[b Ejemplo.] En la cosecha de papa, toda la vereda acude a la finca de Don Pedro, y al terminar, comparten un almuerzo comunitario.

      .py-4.py-md-5.bg-13(titulo="Trabajo para el autoconsumo" :icono="require('@/assets/curso/tema1/img22.svg')")
        .row.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/img25.png')
             
          .col-md-7
            h4 Trabajo para el autoconsumo
            p Actividades destinadas a producir bienes para el consumo familiar, sin remuneración económica. 

            p #[b Ejemplo.] Una familia cultiva hortalizas en su huerta para su alimentación diaria.

    .row.align-items-center.p-4.bg-3.mt-4
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema1/img26.svg", alt="", style="width: 85px").m-auto
      .col-lg-10
        p Reconocer estas distintas formas de trabajo —remuneradas o no, visibles o invisibles — #[b permite valorar la diversidad de experiencias laborales en el campo]. También fortalece el respeto por todos los aportes que hacen posible la vida rural, resaltando el papel de cada persona en el sostenimiento de la comunidad.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Consecuencias legales de no cumplir con las obligaciones laborales

    .row.align-items-center
      .col-lg-10
        p Cuando se tienen trabajadores en el campo y no se respetan sus derechos, #[b no solo se rompe la confianza], sino que también se generan #[b problemas legales graves]. La ley protege a los trabajadores rurales, y aunque en muchas fincas se acostumbren acuerdos informales, esto no #[b exime al empleador de sus responsabilidades]. A continuación, se presentan las principales consecuencias legales que puede enfrentar un empleador campesino en caso de incumplimiento:
      .col-lg-2.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img27.svg', alt='', style="width: 190px").m-auto


    .row.bg-5.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 0.7) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img28.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Sanciones económicas

                    p El Estado puede imponer multas altas a quienes incumplen el pago del salario mínimo, no afilian a sus trabajadores al sistema de seguridad social o no pagan las prestaciones sociales. Estas sanciones pueden afectar seriamente el patrimonio de la finca. 

                    p #[b Ejemplo.] Don Ramón no afilió a sus trabajadores ni pagó prestaciones durante la cosecha de arroz. Uno de ellos sufrió un accidente y, tras una denuncia, Don Ramón fue multado con más de 10 millones de pesos.


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img29.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Obligación de pagar indemnizaciones

                    p El trabajador puede presentar una queja ante el Ministerio de Trabajo o una demanda judicial. Estos procesos pueden ser costosos, largos y afectar la imagen del empleador. 

                    p #[b Ejemplo.] Un grupo de recolectores de frutas demandó a Don Jacinto por no pagarles completo. El juicio fue largo y costoso; finalmente tuvo que pagar todo con intereses.


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img30.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Demandas laborales

                    p El trabajador puede presentar una queja ante el Ministerio de Trabajo o una demanda judicial. Estos procesos pueden ser costosos, largos y afectar la imagen del empleador. 

                    p #[b Ejemplo.] Un grupo de recolectores de frutas demandó a Don Jacinto por no pagarles completo. El juicio fue largo y costoso; finalmente tuvo que pagar todo con intereses.


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img31.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Suspensión de actividades productivas

                    p En casos graves, las autoridades pueden cerrar temporalmente la finca hasta que se resuelvan los incumplimientos. Esto implica pérdida de ingresos, producción y oportunidades. 

                    p #[b Ejemplo.] En una finca de flores, al comprobarse que no se pagaban horas extra ni se garantizaba la afiliación a salud, se ordenó el cierre temporal, perdiendo toda una temporada de ventas.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img32.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Afectación a la comunidad y la confianza

                    p Más allá de las sanciones legales, incumplir los derechos de los trabajadores deteriora la confianza en la comunidad. Nadie querrá volver a trabajar en esa finca, lo que obliga al empleador a buscar mano de obra fuera, con mayores costos. 

                    p #[b Ejemplo.] Don Abelardo incumplió reiteradamente con los pagos. Nadie de la vereda quiso volver a trabajar con él, y tuvo que contratar personal de otras zonas, gastando más en transporte y hospedaje.


              
    .row.align-items-center.p-4.bg-3
      .col-lg-2.d-lg-block.d-none 
        figure
          img(src="@/assets/curso/tema1/img33.svg", alt="", style="width: 100px").m-auto
      .col-lg-10
        p Cuando se trabaja la tierra con amor y se respetan a quienes trabajan en ella, se cosechan frutos buenos. Pero cuando se incumplen los derechos laborales, se siembran problemas que pueden marchitar hasta la mejor cosecha.


    .titulo-tres.mt-5: h3 Trabajo campesino y familia rural: una mirada cultural

    .row.mt-4.align-items-center
      .col-lg-8
        p Aunque existen marcos legales claros sobre las obligaciones laborales en el campo, es fundamental reconocer que muchas actividades campesinas se basan en prácticas tradicionales y acuerdos informales. Estas relaciones se apoyan en la confianza, la solidaridad y el trabajo colectivo, especialmente dentro de las familias campesinas, donde cada miembro aporta con tareas esenciales para la producción, el cuidado y la sostenibilidad del hogar.

        .row.mt-4.p-3.bg-14
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema1/img34.svg", alt="", style="width: 90px").m-auto
          .col-lg-10
            p Estas formas de trabajo, aunque no siempre estén reconocidas como empleo formal, #[b sostienen el tejido social rural y preservan valores culturales fundamentales]. Ignorar su importancia es desconocer la riqueza de la vida campesina. Por eso, es vital que las políticas laborales y sociales integren estas realidades, valoren el aporte no remunerado y protejan el bienestar integral de las comunidades rurales.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema1/img35.png", alt="", style="width: 400px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
