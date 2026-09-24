<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

const mensajeIncorrecto =
  'Revise nuevamente el contenido del componente formativo.'

const imagenes = [
  '@/assets/actividad/imagen1.png',
  '@/assets/actividad/imagen2.png',
  '@/assets/actividad/imagen4.png',
  '@/assets/actividad/imagen5.png',
  '@/assets/actividad/imagen6.png',
  '@/assets/actividad/imagen7.png',
  '@/assets/actividad/imagen8.png',
  '@/assets/actividad/imagen9.png',
  '@/assets/actividad/imagen10.png',
]

const datosPreguntas = [
  {
    texto:
      'Una panadería lleva su receta estrella a un conjunto residencial nuevo. ¿Qué estrategia del FODA aplica?',
    opciones: ['Ofensiva.', 'Adaptativa.', 'Defensiva.', 'De supervivencia.'],
    correcta: 0,
    mensaje:
      'Cuando una fortaleza se dirige a una oportunidad, la estrategia es ofensiva.',
  },
  {
    texto:
      'Una norma ambiental obliga a una ladrillera a cambiar sus hornos. ¿Qué dimensión del PESTEL es?',
    opciones: ['Económica.', 'Social.', 'Ecológica.', 'Legal.'],
    correcta: 2,
    mensaje:
      'La dimensión ecológica reúne el marco ambiental, los recursos naturales y los riesgos del clima.',
  },
  {
    texto: '¿Cómo participan los expertos en el método Delphi?',
    opciones: [
      'En una reunión presencial.',
      'De forma anónima y por rondas.',
      'Con una votación a mano alzada.',
      'Solo con personas de su área.',
    ],
    correcta: 1,
    mensaje:
      'Los expertos responden sin conocerse y ajustan su opinión en cada ronda hasta llegar a un acuerdo.',
  },
  {
    texto:
      'Una lechería crea productos nuevos para sus clientes actuales. Según la matriz de Ansoff, ¿qué estrategia es?',
    opciones: [
      'Penetración de mercado.',
      'Desarrollo de mercado.',
      'Desarrollo de producto.',
      'Diversificación.',
    ],
    correcta: 2,
    mensaje:
      'Ofrecer productos nuevos a los clientes actuales es desarrollo de producto.',
  },
  {
    texto:
      'En el cuadro de mando integral, ¿por qué la perspectiva de aprendizaje se examina primero?',
    opciones: [
      'Es la más fácil de medir.',
      'Inicia la cadena de causa y efecto.',
      'Reemplaza a la perspectiva financiera.',
      'Solo aplica a empresas grandes.',
    ],
    correcta: 1,
    mensaje:
      'Las personas y los sistemas sostienen los procesos, los procesos satisfacen al cliente y el cliente genera el resultado financiero.',
  },
  {
    texto:
      'En un análisis costo-beneficio, ¿qué significa una relación beneficio-costo mayor que uno?',
    opciones: [
      'La inversión conviene.',
      'El proyecto pierde dinero.',
      'La tasa de descuento es alta.',
      'Faltan datos.',
    ],
    correcta: 0,
    mensaje:
      'Los beneficios superan a los costos, y por eso la alternativa se justifica.',
  },
  {
    texto:
      'En un árbol de decisión, ¿cómo se obtiene el valor esperado de una alternativa?',
    opciones: [
      'Sumando todos los resultados.',
      'Multiplicando cada resultado por su probabilidad.',
      'Tomando el mejor resultado.',
      'Restando el peor resultado.',
    ],
    correcta: 1,
    mensaje:
      'Cada resultado se multiplica por su probabilidad y luego se suman los productos.',
  },
  {
    texto:
      'En una matriz de ponderación, ¿qué error se debe evitar con los pesos?',
    opciones: [
      'Que sumen cien por ciento.',
      'Definirlos antes de calificar.',
      'Cambiarlos después de conocer el resultado.',
      'Acordarlos en equipo.',
    ],
    correcta: 2,
    mensaje:
      'Los pesos se fijan antes de calificar; cambiarlos después convierte la matriz en una excusa.',
  },
  {
    texto:
      '¿Cuál es la diferencia entre seguimiento y evaluación de una decisión?',
    opciones: [
      'El seguimiento es continuo; la evaluación, periódica.',
      'Solo la gerencia hace seguimiento.',
      'La evaluación ocurre antes de decidir.',
      'Son lo mismo.',
    ],
    correcta: 0,
    mensaje:
      'El seguimiento acompaña la ejecución con datos; la evaluación compara los resultados con la meta en momentos definidos.',
  },
  {
    texto:
      'Una empresa medía solo la asistencia a la capacitación y los defectos no bajaron. ¿Qué indicador faltaba?',
    opciones: ['De proceso.', 'De gestión.', 'De resultado.', 'De impacto.'],
    correcta: 2,
    mensaje:
      'La asistencia es un indicador de proceso; el indicador de resultado muestra si la decisión logró lo que buscaba.',
  },
  {
    texto:
      '¿Qué instrumento define qué documentos se conservan, por cuánto tiempo y en qué soporte?',
    opciones: [
      'El acta de decisión.',
      'La tabla de retención documental.',
      'El tablero de indicadores.',
      'La matriz de ponderación.',
    ],
    correcta: 1,
    mensaje:
      'La tabla de retención documental, del Archivo General de la Nación, ordena la conservación de los registros.',
  },
  {
    texto:
      '¿Qué formato registra qué se decidió, quién lo decidió y quién responde?',
    opciones: [
      'La tabla de consecuencias.',
      'La ficha de indicador.',
      'El acta de decisión.',
      'El informe de seguimiento.',
    ],
    correcta: 2,
    mensaje:
      'El acta de decisión deja la memoria de lo decidido y permite rendir cuentas.',
  },
  {
    texto:
      'Una distribuidora recibe un aviso cuando la cartera vencida supera el límite. ¿Qué mecanismo de retroalimentación es?',
    opciones: [
      'Revisión posterior.',
      'Sistema de alerta temprana.',
      'Revisión estratégica anual.',
      'Comité de seguimiento.',
    ],
    correcta: 1,
    mensaje:
      'La alerta temprana avisa cuando un indicador cruza el umbral acordado, antes de que el problema crezca.',
  },
  {
    texto:
      'Un gerente escucha las objeciones del equipo y las responde con datos. ¿Qué práctica aplica?',
    opciones: [
      'Movilizar los recursos.',
      'Asignar roles y canales.',
      'Gestionar la resistencia.',
      'Sostener la comunicación.',
    ],
    correcta: 2,
    mensaje:
      'La resistencia se atiende como información útil, no como un obstáculo que se elimina.',
  },
  {
    texto:
      'Ante una bodega inundada, el gerente ordena trasladar la mercancía de inmediato. ¿Qué estilo de liderazgo conviene?',
    opciones: [
      'Participativo.',
      'Directivo.',
      'Transformacional.',
      'Delegativo.',
    ],
    correcta: 1,
    mensaje:
      'En una emergencia, sin tiempo para deliberar, el estilo directivo es el adecuado.',
  },
  {
    texto:
      'Un comité descarta encuestas negativas porque no son clientes reales. ¿Qué síntoma del pensamiento grupal es?',
    opciones: [
      'Ilusión de invulnerabilidad.',
      'Racionalización colectiva.',
      'Presión a los disidentes.',
      'Autocensura.',
    ],
    correcta: 1,
    mensaje:
      'El grupo inventa explicaciones para descartar las señales de alarma sin examinarlas.',
  },
  {
    texto:
      '¿Cuál es el punto de partida del <em>Design Thinking</em> en una decisión?',
    opciones: [
      'La intuición del gerente.',
      'Comprender a las personas afectadas.',
      'Una votación del equipo.',
      'La primera idea que surge.',
    ],
    correcta: 1,
    mensaje:
      'El <em>Design Thinking</em> parte de la empatía con los afectados, genera alternativas y aprende de cada prueba.',
  },
  {
    texto:
      '¿Cuándo conviene el estilo colaborativo para resolver un conflicto?',
    opciones: [
      'Cuando el asunto es menor.',
      'Cuando hay una emergencia.',
      'Cuando el asunto importa a todos y hay tiempo.',
      'Cuando una parte manda.',
    ],
    correcta: 2,
    mensaje:
      'Colaborar toma tiempo y se justifica cuando el resultado y la relación importan a las dos partes.',
  },
  {
    texto:
      'Una empresa evalúa una decisión por su costo, el empleo y las emisiones. ¿Qué enfoque aplica?',
    opciones: [
      'Triple cuenta de resultados.',
      'Análisis costo-beneficio.',
      'Matriz de Ansoff.',
      'Grupo nominal.',
    ],
    correcta: 0,
    mensaje:
      'La triple cuenta de resultados valora a la vez lo económico, lo social y lo ambiental.',
  },
  {
    texto:
      'Un gerente adapta el anuncio de un alza de tarifas a cada público. ¿Qué práctica aplica?',
    opciones: [
      'Evitar el anuncio.',
      'Análisis de audiencias.',
      'Informar solo a quienes aprueban.',
      'Delegar el anuncio.',
    ],
    correcta: 1,
    mensaje:
      'Cada audiencia necesita saber algo distinto; el mensaje se adapta sin cambiar la decisión.',
  },
]

const preguntas = datosPreguntas.map((pregunta, indice) => ({
  id: indice + 1,
  texto: pregunta.texto,
  imagen: imagenes[indice % imagenes.length],
  barajarRespuestas: true,
  opciones: pregunta.opciones.map((texto, opcionIndice) => ({
    id: String.fromCharCode(97 + opcionIndice),
    texto,
    esCorrecta: opcionIndice === pregunta.correcta,
  })),
  mensaje_correcto: pregunta.mensaje,
  mensaje_incorrecto: mensajeIncorrecto,
}))

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Herramientas bajo prueba: evaluar, seguir y liderar la decisión',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de las herramientas para elegir alternativas, del seguimiento de la decisión en la estructura organizacional y del liderazgo, la ética y la comunicación que la legitiman.<br><br>Lea la pregunta de cada ítem y seleccione la respuesta correcta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas,
      mensaje_final_aprobado:
        'Ha superado la actividad. Sus respuestas demuestran que sabe elegir la herramienta adecuada para evaluar alternativas, que reconoce cómo la estructura organizacional, los indicadores y los formatos sostienen el seguimiento de lo decidido, y que identifica el liderazgo, la comunicación y la ética que dan legitimidad a una decisión gerencial.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad.',
    },
  }),
}
</script>
