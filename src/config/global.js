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
    {
      referencia:
        'Blake, L. , Chohan, J., y Escobar, M. P. (2023). Agro-extractivism and neoliberal conservation: Campesino abandonment in the Boyacá páramos, Colombia. <em>Journal of Rural Studies</em>.',
      link: '',
    },
    {
      referencia:
        'Chohan, J. (2024). The corporate food regime in conflict zones: Armed violence and agriculture in the Zona de Reserva Campesina-Valle del Río Cimitarra, Colombia. <em>Geoforum</em>.',
      link: '',
    },
    {
      referencia:
        'Chohan, J., Téllez, J., Eisler, M., et al. (2023). Agropastoralism and re-peasantisation: The importance of mobility and social networks in the páramos of Boyacá, Colombia. <em>Agriculture and Human Values</em>.',
      link: '',
    },
    {
      referencia:
        'Defensoría del Pueblo. (2015). <em>Derechos de los campesinos colombianos</em>. Delegada para Asuntos Agrarios y Tierras.',
      link: 'https://www.defensoria.gov.co"',
    },
    {
      referencia:
        'Fraser, N. (2023). <em>Capitalismo caníbal</em> (1.ª ed.). Ciudad Autónoma de Buenos Aires: Siglo Veintiuno Editores.',
      link: '',
    },
    {
      referencia:
        'HLPE. (2017). <em>La nutrición y los sistemas alimentarios</em>. Grupo de alto nivel de expertos en seguridad alimentaria y nutrición del Comité de Seguridad Alimentaria Mundial.',
      link: '',
    },
    {
      referencia:
        'La Vía Campesina. (2021). <em>El caminar del feminismo campesino y popular en La Vía Campesina</em>.',
      link: '',
    },
    {
      referencia:
        'Marcha Mundial de Mujeres. (2023). <em>La economía feminista como herramienta política de la Marcha Mundial de las Mujeres</em>.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, F. , Erazo, V., y Rendón, J. A. (2025). <em>Documento de preparación: Visita temática sobre mujeres campesinas y populares</em>. CampeSENA - Full Popular y Proyecto de caracterización economía campesina y popular. Documento de trabajo no publicado.',
      link: '',
    },
    {
      referencia:
        'Rosset, P. (s.f.). <em>Metodología “de campesino a campesino”</em>. Propuesta para el SENA.',
      link: '',
    },
    {
      referencia:
        'Sembradoras de Vida y Resistencia. (2024). <em>Cartilla de la Escuela Feminista de la Alianza por la Soberanía Alimentaria de los Pueblos de América Latina y el Caribe</em>.',
      link: '',
    },
    {
      referencia:
        'SENA. (2024). <em>Caracterización de la población de la economía campesina: Departamento de Boyacá</em>. Servicio Nacional de Aprendizaje - SENA, Dirección de Promoción y Relaciones Corporativas.',
      link: '',
    },
    {
      referencia:
        'Van der Ploeg, J. D. (2025). <em>Agricultura campesina: una promesa para el futuro</em>.',
      link: '',
    },
    {
      referencia:
        'Van der Ploeg, J. D. (2025). <em>Hambre Cero: el campo</em>. Documento de trabajo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Catalina Córdova ',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia	',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo	Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
