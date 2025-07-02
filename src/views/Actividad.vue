<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión de la nómina en la economía campesina',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con la gestión de la nómina en el contexto rural, incluyendo obligaciones laborales, novedades, liquidación, normativas aplicables y herramientas de sistematización.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes es un derecho laboral fundamental en el trabajo campesino?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acceso a créditos bancarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entrega de alimentos a la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pago justo por el trabajo realizado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Descanso durante la cosecha de lluvias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué debe hacer el empleador si un trabajador falta sin justificación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar la ausencia y seguir el proceso legal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ignorar la falta si trabaja bien.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pedirle que recupere el tiempo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pagarle igual que un día normal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué novedad de nómina se presenta cuando un trabajador trabaja más allá de su jornada habitual?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Licencia remunerada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Horas extra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Vacaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permiso no remunerado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es una responsabilidad del empleador campesino?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contratar solo con vecinos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Afiliar al trabajador a seguridad social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Esperar a que el trabajador pida prestaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ofrecer transporte gratuito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el porcentaje de recargo por trabajar un domingo o festivo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '50 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '100 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '75 %.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '25 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué herramienta puede usarse para llevar el control de la nómina sin tecnología avanzada?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Internet satelital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Software empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuaderno de nómina.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Planilla electrónica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué representa el trabajo reproductivo en el contexto rural?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cultivo exclusivo de hortalizas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producción para vender.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuidado y tareas del hogar no remuneradas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Actividades en ferias campesinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes es una consecuencia legal por no cumplir las obligaciones laborales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Multas económicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cancelación de deudas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Premios por productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pérdida de productos agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué norma garantiza la afiliación a salud y pensión en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 100 de 1993.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Código Civil.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley de Reforma Agraria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estatuto Tributario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué beneficio aporta una nómina organizada?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite pagar menos impuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reduce el uso de herramientas agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evita que el trabajador se enferme.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilita la liquidación de pagos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El empleador solo debe pagar prestaciones si el trabajador está contratado más de un año.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Un trabajador que labora un domingo debe recibir un pago adicional.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La sistematización de la nómina solo se puede hacer con computador e internet.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las formas de trabajo como el “convite” no se consideran empleo formal pero son importantes en el campo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'No registrar las novedades de nómina puede generar conflictos y pagos injustos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
