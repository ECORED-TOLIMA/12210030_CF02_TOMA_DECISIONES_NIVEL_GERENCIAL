export default {
  global: {
    Name: 'Herramientas de evaluación y seguimiento en la estructura organizacional',
    Description:
      'El componente formativo aborda las herramientas cualitativas y cuantitativas con que la gerencia compara alternativas de decisión, el seguimiento de las decisiones adoptadas según la estructura organizacional y el liderazgo necesario para implementarlas. Desarrolla los análisis del entorno, los indicadores y mecanismos de ajuste, la decisión en equipo y los criterios éticos y sostenibles que dan legitimidad a lo decidido.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'Herramientas cualitativas para evaluar alternativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Análisis FODA y su matriz estratégica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis PESTEL del entorno',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas del grupo nominal y método Delphi',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Matriz de Ansoff y modelo McKinsey 7S',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cuadro de mando, escenarios e información gerencial',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas cuantitativas para comparar alternativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Análisis costo-beneficio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Árboles de decisión',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Matriz de ponderación multicriterio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguimiento de la decisión en la estructura organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Seguimiento, evaluación e indicadores de las decisiones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Almacenamiento de la información para la decisión',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Formatos usados en el proceso de decisión',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Mecanismos de retroalimentación y ajuste',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Liderazgo y manejo de equipos en la implementación',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Liderazgo y decisión en equipo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estilos de liderazgo y su influencia en la decisión',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Decisión grupal y riesgos del pensamiento grupal',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas participativas y Design Thinking',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Gestión del conflicto en el proceso decisional',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ética, sostenibilidad y comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Ética gerencial y responsabilidad social',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sostenibilidad y triple cuenta de resultados',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Comunicación asertiva de las decisiones',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Gestión del cambio en decisiones de alto impacto',
            hash: 't_5_4',
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
  glosario: [
    {
      termino: 'Acta de decisión',
      significado:
        'Registro breve que consigna qué se decidió, quién lo decidió, con qué información y quién responde por la ejecución.',
    },
    {
      termino: 'Almacén de datos',
      significado:
        'Repositorio que reúne la información histórica de varias fuentes para analizarla en conjunto sin alterar los sistemas que operan a diario.',
    },
    {
      termino: 'Análisis costo-beneficio',
      significado:
        'Técnica que compara el valor presente de los costos y los beneficios de una alternativa para determinar si genera valor neto positivo.',
    },
    {
      termino: 'Análisis FODA',
      significado:
        'Herramienta de diagnóstico que integra los factores internos, fortalezas y debilidades, con los externos, oportunidades y amenazas.',
    },
    {
      termino: 'Análisis PESTEL',
      significado:
        'Marco de exploración del entorno que examina los factores políticos, económicos, sociales, tecnológicos, ecológicos y legales.',
    },
    {
      termino: 'Árbol de decisión',
      significado:
        'Representación gráfica de alternativas, eventos posibles y probabilidades que permite calcular el valor esperado de cada camino.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'Forma de expresar ideas y decisiones con claridad y firmeza, respetando a los interlocutores, sin imponer ni ceder ante presiones injustificadas.',
    },
    {
      termino: 'Cuadro de mando integral',
      significado:
        'Sistema de gestión estratégica que evalúa el desempeño desde las perspectivas financiera, del cliente, de procesos internos y de aprendizaje y crecimiento.',
    },
    {
      termino: 'Ficha de indicador',
      significado:
        'Documento que define un indicador con su nombre, fórmula, unidad, fuente, frecuencia, responsable y meta.',
    },
    {
      termino: 'Gestión del cambio',
      significado:
        'Conjunto de prácticas para conducir a las personas y a la organización a través de una transformación, con el menor costo humano y la mayor apropiación.',
    },
    {
      termino: 'Indicador de seguimiento',
      significado:
        'Medida cuantitativa o cualitativa que permite verificar el avance de una decisión frente a los objetivos establecidos.',
    },
    {
      termino: 'Matriz de ponderación multicriterio',
      significado:
        'Herramienta que evalúa alternativas con varios criterios a la vez, cada uno con un peso según su importancia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ansoff, H. I. (1957). Strategies for diversification. <em>Harvard Business Review, 35</em>(5), 113-124.',
      link: '',
    },
    {
      referencia:
        'Elkington, J. (1994). Towards the sustainable corporation: Win-win-win business strategies for sustainable development. <em>California Management Review, 36</em>(2), 90-100.',
      link: '',
    },
    {
      referencia:
        'Godet, M. (2000). The art of scenarios and strategic planning: Tools and pitfalls. <em>Technological Forecasting and Social Change, 65</em>(1), 3-22.',
      link: '',
    },
    {
      referencia:
        'Janis, I. L. (1972). <em>Victims of groupthink: A psychological study of foreign-policy decisions and fiascoes</em>. Houghton Mifflin.',
      link: '',
    },
    {
      referencia:
        'Kaplan, R. S., & Norton, D. P. (1996). <em>The balanced scorecard: Translating strategy into action</em>. Harvard Business School Press.',
      link: '',
    },
    {
      referencia:
        'Kotter, J. P. (1996). <em>Leading change</em>. Harvard Business School Press.',
      link: '',
    },
    {
      referencia:
        'Laudon, K. C., & Laudon, J. P. (2016). <em>Sistemas de información gerencial</em> (14.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Mintzberg, H. (2009). <em>Managing</em>. Berrett-Koehler Publishers.',
      link: '',
    },
    {
      referencia:
        "Peters, T. J., & Waterman, R. H. (1982). <em>In search of excellence: Lessons from America's best-run companies</em>. Harper & Row.",
      link: '',
    },
    {
      referencia:
        'Thomas, K. W., & Kilmann, R. H. (1974). <em>Thomas-Kilmann conflict mode instrument</em>. Xicom.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
