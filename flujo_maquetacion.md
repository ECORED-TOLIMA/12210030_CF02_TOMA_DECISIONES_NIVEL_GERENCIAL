# Flujo de trabajo para la maquetación de componentes formativos

## 1. Propósito

Este documento presenta el flujo estándar para implementar la maquetación de nuevos programas o componentes formativos. Está dirigido a maquetadores, diseñadores instruccionales y demás integrantes de la línea de producción.

Su objetivo es facilitar un trabajo ordenado, reducir reprocesos y asegurar que todas las vistas utilicen correctamente los componentes institucionales, las reglas de accesibilidad y los criterios visuales aprobados.

El documento `maquetacion.md` complementa esta síntesis con ejemplos técnicos, estructuras Pug y el historial detallado de las decisiones tomadas.

## 2. Principio general

La maquetación se realiza por bloques.

Cada bloque se construye a partir de tres fuentes:

1. El PDF o archivo de diseño define la composición visual esperada.
2. El archivo `TemaX.vue` contiene la información que debe presentarse.
3. La biblioteca institucional proporciona los componentes y estilos que deben utilizarse.

La prioridad es reutilizar componentes institucionales. El CSS personalizado se reserva para necesidades visuales que no estén cubiertas por dichos componentes.

## 3. Participantes y responsabilidades

### Línea de producción o diseño instruccional

- Entregar el PDF o archivo de diseño aprobado.
- Confirmar el orden de los temas y secciones.
- Proporcionar los textos definitivos.
- Entregar las imágenes organizadas y nombradas.
- Señalar los componentes institucionales esperados cuando estén definidos.
- Revisar la fidelidad visual y funcional de cada bloque.
- Aprobar los bloques correctos y describir con precisión los ajustes pendientes.

### Maquetador

- Revisar los insumos antes de comenzar.
- Identificar los componentes institucionales presentes en el diseño.
- Construir cada tema siguiendo el orden del documento fuente.
- Conservar la información, imágenes y colores que ya estén aprobados.
- Aplicar las reglas de estructura, espaciado, accesibilidad y adaptación responsiva.
- Evitar estilos personalizados innecesarios.
- Validar la compilación después de cada grupo de cambios.
- Documentar los patrones nuevos y las decisiones reutilizables.

### Revisor

- Comparar la vista implementada con el diseño fuente.
- Revisar el resultado por bloques, no mediante observaciones generales.
- Indicar qué elementos están correctos y deben conservarse.
- Identificar el resultado esperado y, cuando sea posible, proporcionar una referencia aprobada.
- Validar el comportamiento en escritorio y dispositivos móviles.

## 4. Insumos mínimos para iniciar

Antes de comenzar deben estar disponibles:

- PDF, XD u otro archivo de diseño aprobado.
- Textos definitivos por tema.
- Carpeta de imágenes organizada por tema.
- Estructura inicial del proyecto.
- Menú y numeración de temas.
- Paleta de colores institucional.
- Biblioteca de componentes institucionales.
- Glosario y referencias, cuando correspondan.
- Actividad didáctica, introducción y síntesis, si forman parte del alcance.

Si falta un insumo que pueda modificar la estructura o el contenido, debe informarse antes de avanzar con ese bloque.

## 5. Flujo general

```text
Recepción de insumos
        ↓
Revisión técnica y visual
        ↓
Inventario de temas, bloques e imágenes
        ↓
Identificación de componentes institucionales
        ↓
Primera implementación del tema
        ↓
Validación técnica y responsiva
        ↓
Revisión por bloques
        ↓
Ajustes y documentación
        ↓
Aprobación del tema
        ↓
Validación global del componente formativo
```

## 6. Etapas del proceso

### Etapa 1. Recepción y verificación de insumos

Se comprueba que los documentos fuente, textos e imágenes correspondan a la misma versión del programa.

Resultado esperado:

- Insumos completos y accesibles.
- Número de temas confirmado.
- Correspondencia entre páginas del diseño y archivos `TemaX.vue`.
- Posibles faltantes identificados.

### Etapa 2. Inventario visual

Para cada página se identifican:

- Bloques de apertura.
- Títulos y subtítulos.
- Párrafos y textos destacados.
- Figuras y tablas numeradas.
- Sliders, acordeones y líneas de tiempo.
- Tarjetas, cajones y listas.
- Imágenes para escritorio y móvil.
- Fondos, degradados y colores particulares.

Resultado esperado: una ficha breve por tema con el orden de los bloques y los recursos que utiliza.

### Etapa 3. Asociación con componentes institucionales

Cada bloque visual se compara con los componentes disponibles y con temas ya aprobados.

Ejemplos frecuentes:

- Apertura con imagen e icono.
- `cajon.color-primario` o `cajon.color-secundario`.
- `tarjeta-avatar`.
- `tarjeta--container`.
- `tarjeta-numerada`.
- `LineaTiempoD`.
- `AcordionA`.
- `SlyderA`, `SlyderB` o `SlyderF`.
- `bloque-texto-g`.
- `.tabla-a`.
- Lista institucional numerada.

Resultado esperado: cada bloque tiene un componente o patrón de referencia antes de implementarse.

### Etapa 4. Primera implementación

Se construye el tema siguiendo el orden del diseño.

Durante esta etapa se debe:

- Mantener el contenido del archivo fuente.
- Utilizar las imágenes del tema correspondiente.
- Aplicar componentes institucionales antes de crear soluciones personalizadas.
- Usar títulos `h5` dentro de sliders, acordeones y tarjetas.
- Aplicar márgenes estándar `.mb-4` y `.mt-4`.
- Cerrar el último párrafo de cada bloque con `p.mb-0`.
- Usar `alt=""` en imágenes que no sean figuras numeradas.
- Incorporar textos alternativos descriptivos en figuras numeradas.

Resultado esperado: tema completo, navegable y listo para revisión visual.

### Etapa 5. Validación técnica

Antes de presentar el tema para revisión se valida:

- Compilación sin errores mediante `npm run build`.
- Rutas de imágenes correctas.
- Sintaxis e indentación Pug válidas.
- Componentes renderizados correctamente.
- Ausencia de muestras o contenido duplicado.
- Adaptación básica en escritorio y móvil.
- Ausencia de CSS personalizado sin uso.

Un tema no debe enviarse a revisión si no supera esta etapa.

### Etapa 6. Revisión por bloques

La revisión se realiza únicamente sobre los bloques señalados. Los bloques no mencionados se consideran correctos y se conservan.

Formato de retroalimentación:

```text
Bloque: nombre, clase o fila donde inicia
Estado actual: qué está correcto y qué está incorrecto
Resultado esperado: cómo debe quedar
Componente sugerido: componente o referencia aprobada
Qué debe cambiar: estructura, color, imagen, margen o contenido
Motivo: razón del ajuste
```

Ejemplo:

```text
Bloque: tarjetas de acceso
Estado actual: contenido, imágenes y fondos correctos; estructura incorrecta
Resultado esperado: usar la tarjeta-avatar aprobada en Tema 1
Componente sugerido: tarjeta-avatar
Qué debe cambiar: estructura interna y clases responsivas
Motivo: conservar el comportamiento del componente institucional
```

### Etapa 7. Aplicación de ajustes

Al recibir una revisión, el maquetador debe:

1. Comparar el bloque actual con la referencia.
2. Conservar todo lo que fue declarado correcto.
3. Cambiar únicamente lo solicitado.
4. Aplicar la estructura institucional completa.
5. Eliminar muestras duplicadas después de utilizarlas.
6. Retirar CSS que haya quedado sin uso.
7. Ejecutar nuevamente la validación técnica.
8. Registrar el criterio aprendido cuando pueda reutilizarse.

### Etapa 8. Aprobación del tema

Un tema se considera aprobado cuando:

- Todos sus bloques coinciden con el diseño esperado.
- Los componentes institucionales funcionan correctamente.
- El contenido y las imágenes son correctos.
- La vista responde adecuadamente en escritorio y móvil.
- Las reglas de accesibilidad están aplicadas.
- La compilación finaliza sin errores.
- Las decisiones reutilizables están documentadas.

### Etapa 9. Validación global

Cuando todos los temas estén aprobados se realiza una revisión transversal:

- Menú, títulos y numeración.
- Navegación entre temas y anclajes.
- Consistencia de colores y componentes.
- Márgenes y cierres de sección.
- Introducción y síntesis.
- Glosario y referencias.
- Actividad didáctica.
- Recursos multimedia y enlaces.
- Visualización responsiva.
- Compilación general del proyecto.

## 7. Reglas que reducen reprocesos

- No modificar bloques que no hayan sido señalados.
- No reemplazar contenido correcto durante un cambio estructural.
- No cambiar imágenes o fondos aprobados si la solicitud solo afecta el componente.
- No copiar una muestra y dejarla duplicada en la vista.
- No crear CSS antes de revisar los estilos institucionales.
- No simular un componente institucional únicamente con clases parecidas; debe respetarse su jerarquía completa.
- No cerrar una revisión sin validar la compilación.
- No esperar hasta el final para documentar decisiones reutilizables.

## 8. Entregables por tema

Cada tema aprobado debe entregar:

- Archivo `TemaX.vue` maquetado.
- Imágenes correctamente vinculadas.
- Estilos personalizados estrictamente necesarios.
- Compilación exitosa.
- Registro breve de ajustes y criterios aplicados.
- Confirmación de revisión responsiva.

## 9. Lista de verificación para el maquetador

- [ ] Revisé la página correspondiente del diseño.
- [ ] Confirmé el contenido y las imágenes del tema.
- [ ] Identifiqué los componentes institucionales antes de editar.
- [ ] Conservé los bloques y elementos aprobados.
- [ ] Utilicé títulos `h5` dentro de componentes.
- [ ] Apliqué `.mb-4`, `.mt-4` y `p.mb-0` según las reglas.
- [ ] Configuré correctamente los atributos `alt`.
- [ ] Verifiqué escritorio y móvil.
- [ ] Eliminé muestras y código sin uso.
- [ ] Ejecuté `npm run build` sin errores.
- [ ] Documenté los criterios nuevos.

## 10. Lista de verificación para revisión y aprobación

- [ ] El orden de los bloques coincide con el diseño.
- [ ] El contenido está completo y ubicado correctamente.
- [ ] Las imágenes corresponden al bloque esperado.
- [ ] Los colores aprobados se mantienen.
- [ ] Los componentes institucionales son los correctos.
- [ ] Las tablas y figuras numeradas cumplen el patrón institucional.
- [ ] No existe contenido duplicado.
- [ ] La vista funciona en escritorio y móvil.
- [ ] Los ajustes pendientes están descritos por bloques.
- [ ] El tema puede marcarse como aprobado.

## 11. Criterio de mejora continua

Cada programa maquetado debe mejorar el estándar. Cuando aparezca un nuevo patrón:

1. Se valida en un bloque real.
2. Se corrige hasta obtener aprobación.
3. Se documenta el motivo de la solución.
4. Se incorpora al manual técnico `maquetacion.md`.
5. Se reutiliza en los temas y programas siguientes.

De esta manera, la experiencia de cada componente formativo se convierte en una referencia práctica para toda la línea de producción.
