# Validación del contenido del Word frente a la maquetación

## Objetivo

Comparar el contenido del documento `fuentes/12210030_CF02_DI.docx` con la maquetación de `Tema1.vue` a `Tema5.vue`, con el fin de comprobar que los textos se incorporaron completos, sin resúmenes, paráfrasis, correcciones editoriales ni omisiones.

La validación comprende:

- Títulos principales y títulos de sección.
- Párrafos introductorios, explicativos y de transición.
- Listados, tablas, líneas de tiempo, acordeones, infografías y tarjetas.
- Casos empresariales y frases destacadas.
- Negrillas y cursivas definidas en el Word.
- Textos alojados en formas, cuadros y objetos gráficos.
- Expresiones aparentemente inconsistentes del documento, como “en los cuatro casos” cuando se presentan tres casos.

## Convenciones

- **Conforme:** el contenido aplicable del Word está completo y conserva sus énfasis.
- **Con observación:** el contenido principal está completo, pero existe una diferencia puntual de texto o formato.
- **No conforme:** falta contenido del Word o la maquetación contiene un texto que corresponde a otro bloque.
- **Artefacto técnico:** nombre de archivo, texto alternativo interno o duplicación generada por un objeto incrustado que no debe mostrarse como contenido pedagógico.

## Resumen general

| Tema | Resultado de presencia textual | Estado | Observaciones |
|---|---:|---|---|
| Tema 1 | 122 de 122 bloques localizados | Conforme | El rótulo completo del modelo McKinsey 7S fue incorporado. |
| Tema 2 | 69 de 69 bloques localizados | Conforme | No se encontraron omisiones ni sustituciones. |
| Tema 3 | 129 de 129 bloques pedagógicos localizados | Conforme | El contenido y las cursivas están completos. Dos textos técnicos del Word se excluyen del conteo pedagógico. |
| Tema 4 | 75 de 75 bloques pedagógicos localizados | Conforme | Dos apariciones del nombre del archivo del guion se clasifican como artefactos técnicos. |
| Tema 5 | 75 de 75 bloques localizados | Conforme | Se restauró el párrafo introductorio del modelo de Kotter y se retiró el texto duplicado del Tema 4. |

## Validación del Tema 1

Archivo revisado: `src/views/Tema1.vue`.

### Resultado

**Estado: conforme.**

- Se localizaron los 122 bloques textuales del Tema 1.
- Están completos los contenidos de las secciones 1.1 a 1.5.
- Se verificaron los conceptos y casos de FODA, PESTEL, grupo nominal, método Delphi, matriz de Ansoff, modelo McKinsey 7S y cuadro de mando integral.
- La Tabla 1 conserva sus títulos, encabezados y contenido.
- Las expresiones editoriales del Word se mantienen sin corrección.

### Corrección verificada

El Word contiene el rótulo:

> Modelo McKinsey 7S: siete factores interconectados

La frase completa fue incorporada como texto visible antes de la infografía del modelo McKinsey 7S. El contenido del Word queda representado sin depender únicamente del texto alternativo de la imagen.

## Validación del Tema 2

Archivo revisado: `src/views/Tema2.vue`.

### Resultado

**Estado: conforme.**

- Se localizaron los 69 bloques textuales del Tema 2.
- Están completos los contenidos de las secciones 2.1 a 2.3.
- Se verificaron los conceptos del análisis costo-beneficio, las seis fases de aplicación, el árbol de decisiones y la matriz de ponderación multicriterio.
- Los casos empresariales, pasos, frases y transiciones coinciden con el Word.
- Las Figuras 2 y 3 conservan sus títulos y contenidos asociados.
- Se mantiene literalmente la expresión “en los cuatro casos”, aunque el documento presente tres casos.

No se encontraron textos omitidos, resumidos, sustituidos o añadidos desde otro tema.

## Validación del Tema 3

Archivo revisado: `src/views/Tema3.vue`.

### Resultado

**Estado: conforme.**

- Se localizaron los 129 bloques pedagógicos aplicables del Tema 3.
- Están completos los contenidos de las secciones 3.1 a 3.5.
- Se verificaron los indicadores, la Tabla 2, el almacenamiento de información, los formatos, la retroalimentación y el liderazgo durante la implementación.
- Los casos, componentes interactivos, enlaces y textos de transición están presentes.
- Se mantiene literalmente la expresión “en los cuatro casos” cuando aparecen tres casos.

### Corrección verificada

El Word presenta en cursiva los términos ingleses:

- *lagging*
- *leading*

En `Tema3.vue`, dentro de la Tabla 2, ambos términos conservan ahora la cursiva del Word:

- Indicador de resultado (*lagging*)
- Indicador de gestión (*leading*)

### Artefactos técnicos excluidos

- `Anexo_01_Formatos_Decision.pdf` corresponde al nombre interno del archivo asociado al recurso de descarga. La ruta está implementada y el nombre técnico no necesita mostrarse como párrafo independiente.
- `Descargar matriz de priorización` está distribuido en la tarjeta como título del recurso y texto del botón. No representa una omisión de contenido.

## Validación del Tema 4

Archivo revisado: `src/views/Tema4.vue`.

### Resultado

**Estado: conforme.**

- Se localizaron los 75 bloques pedagógicos aplicables del Tema 4.
- Están completos los contenidos de las secciones 4.1 a 4.4.
- Se verificaron los estilos de liderazgo, los síntomas del pensamiento grupal, las técnicas participativas, los casos, la gestión del conflicto y las transiciones.
- Las cursivas de *groupthink* y *Design Thinking* están conservadas.
- Las negrillas de conceptos, estilos y títulos internos están representadas mediante `strong` o encabezados de tarjeta.
- El pódcast utiliza el título y el recurso de audio definidos para el CF02.
- Se mantienen literalmente las expresiones “en los cuatro casos” y “en los tres primeros casos”.

### Artefactos técnicos excluidos

El Word contiene dos apariciones de:

`12210030_CF02_Guion_podcast_01.docx`

Este texto corresponde al nombre del archivo incrustado del guion y no al contenido pedagógico visible. Su ausencia en la vista es correcta.

## Validación del Tema 5

Archivo revisado: `src/views/Tema5.vue`.

### Resultado

**Estado: conforme.**

- Se localizaron los 75 bloques textuales del Tema 5.
- Las secciones 5.1, 5.2 y 5.3 están completas.
- En la sección 5.4 están completos los cuatro momentos de Kotter, los tres casos, las tarjetas botón y el cierre del componente.
- La cursiva de *call center* está conservada.
- Se mantienen literalmente las expresiones “en los cuatro casos”.

### Corrección verificada

Antes del listado de los cuatro momentos, el Word contiene el siguiente párrafo:

> El modelo de Kotter (1996) propone ocho etapas para implementar el cambio, y su valor está en el orden, porque saltarse una suele explicar el fracaso de las siguientes. Para la decisión gerencial conviene agruparlas en cuatro momentos, que se describen a continuación con la señal que confirma que cada uno se ha cumplido:

El párrafo fue restaurado antes del listado de los cuatro momentos. El texto duplicado que correspondía al cierre del Tema 4 fue retirado de `Tema5.vue`, conservando la imagen `img28.svg` y la estructura visual del bloque.

## Validación de cursivas

El Word utiliza cursiva en cinco términos o expresiones relevantes:

| Expresión | Archivo | Resultado |
|---|---|---|
| *lagging* | `Tema3.vue` | Conforme. |
| *leading* | `Tema3.vue` | Conforme. |
| *groupthink* | `Tema4.vue` | Conforme. |
| *Design Thinking* | `Tema4.vue` | Conforme en sus apariciones. |
| *call center* | `Tema5.vue` | Conforme. |

## Validación de negrillas

- Los nombres de conceptos, métodos, enfoques, dimensiones, estilos, casos y criterios se conservan mediante `strong`, `h4`, `h5`, encabezados de tabla o títulos propios de los componentes institucionales.
- No se identificaron conceptos del Word que hayan perdido completamente su jerarquía en negrilla.
- Las negrillas contenidas dentro de frases o párrafos se mantienen mediante marcación Pug.

## Excepciones editoriales conservadas

- Las frases destacadas que el XML del Word repite por la estructura interna de las formas se muestran una sola vez, de acuerdo con la visualización del documento.
- Los nombres técnicos de archivos incrustados no se presentan como contenido pedagógico.
- Las expresiones “en los cuatro casos” se conservan aunque el bloque correspondiente incluya tres casos.
- No se corrigieron formulaciones, cantidades ni concordancias del documento fuente.

## Resultado de la revisión

La maquetación de `Tema1.vue` a `Tema5.vue` conserva íntegro el contenido pedagógico del Word. Los tres ajustes identificados durante la primera revisión fueron aplicados y verificados:

1. Se incorporó en `Tema1.vue` el rótulo completo “Modelo McKinsey 7S: siete factores interconectados”.
2. Se aplicó cursiva a *lagging* y *leading* en la Tabla 2 de `Tema3.vue`.
3. Se restauró en `Tema5.vue` el párrafo introductorio del modelo de Kotter y se retiró el texto duplicado del Tema 4.

Los cinco temas quedan con estado **conforme** en la validación textual.
