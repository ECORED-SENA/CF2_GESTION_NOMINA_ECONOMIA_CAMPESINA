export default {
  global: {
    Name: 'Gestión de nómina en la economía del trabajo campesina',
    Description:
      'Este componente formativo guía la gestión de la nómina en el contexto rural campesino, promoviendo el respeto a los derechos laborales en unidades productivas. Explica obligaciones legales, tipos de novedades de nómina y su correcto registro, liquidación salarial, normativas aplicables y herramientas de sistematización. Se valora el trabajo formal e informal del campo, incluyendo labores reproductivas y prácticas comunitarias tradicionales. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Obligaciones laborales en unidades campesinas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Principales derechos laborales que deben reconocerse en el campo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Responsabilidades del empleador campesino',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Consecuencias legales de no cumplir con las obligaciones laborales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Clasificación y origen de las novedades de nómina en el contexto rural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Qué son las novedades de nómina?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de novedades frecuentes en el trabajo campesino',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cómo registrar y reportar correctamente las novedades',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Liquidación de nómina en contextos agropecuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elementos básicos para liquidar la nómina',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Elementos básicos para liquidar la nómina',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Cálculo de salarios, horas extra y prestaciones en el campo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ejemplo práctico de liquidación de nómina campesina',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Aplicación de normativas técnicas en nómina rural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principales leyes laborales aplicables en el sector rural',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Interpretación sencilla de normas clave',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Buenas prácticas para cumplir con la legislación laboral',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistematización y generación de nómina campesina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: '¿Qué es la sistematización de la nómina?',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Herramientas sencillas para llevar el control de la nómina',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Ventajas de tener una nómina organizada y actualizada',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Principales derechos laborales que deben reconocerse en el campo',
      referencia:
        'TvAgro. (2025). Jornal Rural 2025: Guía Completa de Pagos y Derechos Laborales - TvAgro por Juan Gonzalo Angel.  [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iBB3eYhQKtI&ab_channel=TvAgro ',
    },
    {
      tema: 'Principales derechos laborales que deben reconocerse en el campo',
      referencia:
        'Pact Colombia. (2025). Tejiendo derechos laborales en la ruralidad. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=8r3soj7KxyY&ab_channel=PactColombia',
    },
    {
      tema: 'Liquidación de nómina en contextos agropecuarios',
      referencia:
        'Felipe Delgado. (2019). Como LIQUIDAR NOMINA ejercicio paso a paso.  [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=fisrBQIGnDQ&ab_channel=FelipeDelgado',
    },
  ],
  glosario: [
    {
      termino: 'Actividad',
      significado:
        'abarca las tareas cotidianas necesarias para el funcionamiento de la finca, como la siembra, el cuidado de animales o la recolección de productos.',
    },
    {
      termino: 'Cesantías',
      significado:
        'prestación social equivalente a un mes de salario por cada año trabajado, destinada a proteger al trabajador en caso de desempleo o retiro.',
    },
    {
      termino: 'Convite',
      significado:
        'jornada colectiva en la que varias personas realizan una tarea específica, generalmente acompañada de comida o con expectativa de reciprocidad futura.',
    },
    {
      termino: 'Horas extra',
      significado:
        'tiempo trabajado fuera del horario habitual, que debe ser pagado con un recargo adicional según lo establece la ley.',
    },
    {
      termino: 'Incapacidad médica',
      significado:
        'ausencia laboral justificada por enfermedad o accidente, durante la cual el trabajador puede recibir remuneración por parte del sistema de salud.',
    },
    {
      termino: 'Mano vuelta',
      significado:
        'forma tradicional de intercambio de trabajo entre vecinos sin pago económico, basada en la ayuda mutua y la reciprocidad.',
    },
    {
      termino: 'Nómina',
      significado:
        'registro detallado del personal, incluyendo jornadas, novedades, pagos, descuentos y prestaciones sociales.',
    },
    {
      termino: 'Prima de servicios',
      significado:
        'valor adicional equivalente a un mes de salario por cada año trabajado, pagado en dos partes durante el año.',
    },
    {
      termino: 'Sistematización de nómina',
      significado:
        'proceso de organizar y mantener en orden la información laboral de los trabajadores para facilitar los pagos y cumplir con la ley.',
    },
    {
      termino: 'Trabajo reproductivo',
      significado:
        'actividades no remuneradas esenciales para el bienestar familiar y comunitario, como el cuidado, la alimentación y el mantenimiento del hogar.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1950). <em>Código Sustantivo del Trabajo</em>. Secretaría del Senado.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      referencia:
        'Congreso de Colombia. (1993). <em>Ley 100 de 1993: Por la cual se crea el sistema de seguridad social integral</em>. Diario Oficial No. 41.148.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248',
    },
    {
      referencia:
        'Congreso de Colombia. (2016). <em>Ley 1788 de 2016: Por medio de la cual se garantiza el acceso en condiciones de igualdad al pago de la prima de servicios para los trabajadores y trabajadoras del servicio doméstico</em>. Diario Oficial No. 49.906.',
      link:
        'https://natlex.ilo.org/dyn/natlex2/natlex2/files/download/102572/LEY%201788%20COLOMBIA.pdf',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2015). <em>Decreto 1072 de 2015: Decreto Único Reglamentario del Sector Trabajo</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173',
    },
    {
      referencia:
        'Ministerio del Trabajo. (s. f.). <em>Guía para la formalización laboral en el sector rural colombiano</em>.',
      link: '',
    },
    {
      referencia:
        'Vega, C. (2021). <em>Trabajo rural y derechos laborales en Colombia</em>. Revista Latinoamericana de Estudios del Trabajo, 26(2), 45–68.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
