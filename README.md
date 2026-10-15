# 🇪🇸 Camino al Español · A1–B1

Curso interactivo de español para estudiantes de ELE (español como lengua extranjera), del nivel **A1** al **B1**, al estilo de las apps de idiomas: teoría, tarjetas de vocabulario con imágenes, ejercicios con vidas y XP, lectura con audio y tarjetas de speaking.

*An interactive Spanish course (A1 → B1) with grammar, picture flashcards, gamified exercises, reading with audio and speaking practice. Interface in Spanish with English glosses.*

## ✨ Qué incluye

- **45 módulos completos**: 15 por nivel (8 de gramática + 7 de vocabulario).
- Cada módulo tiene 5 partes:
  - 📘 **Teoría** con tablas, ejemplos traducidos, trucos y errores frecuentes.
  - 🖼️ **Vocabulario**: tarjetas con imagen (emoji) que se giran y se escuchan.
  - 🎯 **Ejercicios** (5 vidas ❤️): elegir opción, escribir, ordenar la frase, ¿qué es? (imagen) y escuchar y elegir.
  - 📖 **Lectura** con audio, palabras clave subrayadas y preguntas de comprensión.
  - 🗣️ **Speaking**: tarjetas con preguntas para responder en voz alta (con reconocimiento de voz en Chrome/Edge).
- 🏆 **Examen de nivel** al final de A1, A2 y B1 (20 preguntas, aprobado con 70 %).
- ⭐ XP, 🔥 racha de días y 📊 página de progreso (con exportar/importar progreso).
- **Dos modos** que el alumno elige al entrar (y puede cambiar en ⚙️ Ajustes):
  - 🔓 **Todo abierto**: acceso libre a todo.
  - 🔒 **Desbloqueo progresivo**: cada módulo abre el siguiente (gramática y vocabulario avanzan por separado) y el examen de nivel abre el nivel siguiente. El examen también sirve como prueba de nivel para saltar a A2 o B1.

## 📚 Contenidos

| Nivel | Gramática | Vocabulario |
|---|---|---|
| **A1** | Ser y pronombres · Artículos, género y número · Presente regular · Estar y hay · Presente irregular · Verbos reflexivos · Gustar, encantar y doler · Ir a + infinitivo | Saludos · Números, fecha y hora · Familia y amigos · La casa · Comida y bebida · La ciudad y el transporte · Días, meses y el tiempo |
| **A2** | Ser y estar · Presente irregular · Estar + gerundio · Pretérito perfecto · Pretérito indefinido · Pretérito imperfecto · Pronombres OD/OI · Comparativos y superlativos | Comida y restaurante · Ropa y compras · Viajes y hotel · Salud y cuerpo · Trabajo y estudios · Tiempo libre y deporte · Tiempo y naturaleza |
| **B1** | Contraste de pasados · Pluscuamperfecto · Por y para · Futuro simple · Condicional · Imperativo · Presente de subjuntivo · Estilo indirecto | Medio ambiente · Tecnología e internet · Sentimientos y personalidad · Medios y noticias · Cultura hispana y fiestas · Frases hechas y coloquiales · Mundo laboral |

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `camino-espanol`).
2. Sube **el contenido de esta carpeta** (no la carpeta en sí): arrastra los archivos en *Add file → Upload files*, o con git:
   ```bash
   git init
   git add .
   git commit -m "Camino al Español A1-B1"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/camino-espanol.git
   git push -u origin main
   ```
3. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. En uno o dos minutos la app estará en `https://TU_USUARIO.github.io/camino-espanol/`.

No necesita instalación ni compilación. También funciona abriendo `index.html` directamente en el navegador.

### Fijar el modo para tus alumnos

Añade un parámetro al enlace que compartes:

- `https://TU_USUARIO.github.io/camino-espanol/?modo=abierto`
- `https://TU_USUARIO.github.io/camino-espanol/?modo=progresivo`

O cambia `DEFAULT_MODE` al principio de `js/app.js` (`"open"` o `"prog"`; `null` = preguntar al alumno).

## 🗂️ Estructura

```
camino-espanol/
├── index.html            # página principal
├── css/styles.css        # estilos
├── js/app.js             # lógica de la app (modos, ejercicios, progreso, voz)
├── data/                 # CONTENIDOS (editables)
│   ├── levels.js         # descripción de los niveles
│   ├── a1-gramatica.js   a1-vocabulario.js
│   ├── a2-gramatica.js   a2-vocabulario.js
│   └── b1-gramatica.js   b1-vocabulario.js
├── assets/img/           # logo, mascota, insignias de nivel y trofeo (SVG propios)
├── .nojekyll             # GitHub Pages sirve los archivos tal cual
└── README.md
```

## ✏️ Editar o añadir contenidos

Cada módulo es un objeto dentro de `data/*.js`:

```js
{
  id: "a1-ser", lvl: "A1", k: "g",            // k: "g" gramática · "v" vocabulario
  t: "El verbo ser", en: "The verb 'to be'", ic: "🧑",
  th: `<div class="card">…teoría en HTML…</div>`,
  voc: [["🍎", "la manzana", "apple"]],          // tarjetas: [imagen, español, inglés]
  ex: [
    { q: "Ella ___ de Perú.", o: ["es", "está"], a: 0, t: "She is from Peru." }, // elegir
    { q: "Yo ___ estudiante. (ser)", a: ["soy"], t: "I am a student." },         // escribir
    { w: "Me llamo Ana y soy profesora.", t: "My name is Ana…" }                 // ordenar
  ],
  tx: { ti: "Título", b: `Texto con <u>palabras clave</u>` },
  q: [["¿Pregunta?", ["A", "B", "C"], 1]],      // índice de la respuesta correcta
  sp: ["Pregunta para hablar…"]
}
```

Para añadir un módulo, cópialo en el archivo de su nivel y cambia el `id`. Aparecerá automáticamente en el menú, en el camino y en el examen.

## 🔊 Audio y micrófono

- La voz usa la síntesis del navegador (Web Speech API). Si no se oye, instala una voz en español en el sistema.
- El reconocimiento de voz del speaking funciona en Chrome y Edge (pide permiso de micrófono). En otros navegadores, el alumno responde en voz alta sin transcripción.

## 🔐 Privacidad

No hay servidor ni registro. El progreso se guarda solo en el navegador del alumno (`localStorage`).

## Créditos

Contenidos y gráficos originales creados para este proyecto. Las imágenes son emoji del sistema y SVG propios, sin imágenes externas con derechos. Fuente: [Nunito](https://fonts.google.com/specimen/Nunito) (Google Fonts, licencia OFL).
