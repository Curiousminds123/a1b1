/* Camino al Español · Nivel B1 · vocabulario */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "b1-medio",
  lvl: "B1",
  k: "v",
  t: "Medio ambiente",
  en: "The environment",
  ic: "🌍",
  th: `<div class="card"><h2>El medio ambiente <span class="en">(the environment)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>el cambio climático</td><td>climate change</td></tr>
<tr><td>el calentamiento global</td><td>global warming</td></tr>
<tr><td>la contaminación</td><td>pollution</td></tr>
<tr><td>los residuos / la basura</td><td>waste / rubbish, trash</td></tr>
<tr><td>reciclar, reutilizar, reducir</td><td>to recycle, to reuse, to reduce</td></tr>
<tr><td>las energías renovables</td><td>renewable energy</td></tr>
<tr><td>la sequía / las inundaciones</td><td>drought / floods</td></tr>
<tr><td>las especies en peligro de extinción</td><td>endangered species</td></tr>
<tr><td>malgastar / ahorrar agua</td><td>to waste / to save water</td></tr>
</table></div>
<div class="card"><h3>Los contenedores de reciclaje <span class="en">(recycling bins)</span></h3>
<p>🟡 <b>amarillo</b>: plásticos, latas y envases <span class="en">plastics, cans and packaging</span><br>
🔵 <b>azul</b>: papel y cartón <span class="en">paper and cardboard</span><br>
🟢 <b>verde</b>: vidrio <span class="en">glass</span><br>
🟤 <b>marrón</b>: residuos orgánicos <span class="en">organic waste</span></p>
<div class="tip"><b>Truco / Trick:</b> En España se dice <i>la basura</i> y <i>el contenedor</i>; en México también se oye <i>el bote de basura</i>, y en Argentina <i>el tacho</i>. En casi toda Latinoamérica <i>el carro</i> = <i>el coche</i>.</div></div>
<div class="card"><h3>Dar tu opinión <span class="en">(giving your opinion)</span></h3>
<p><b>Creo que</b> / <b>Pienso que</b> + indicativo: Creo que el reciclaje es necesario. <span class="en">I think recycling is necessary.</span><br>
<b>En mi opinión</b>, / <b>Para mí</b>, / <b>A mi modo de ver</b>, … <span class="en">In my opinion…</span><br>
<b>No creo que</b> + subjuntivo: No creo que sea demasiado tarde. <span class="en">I don't think it's too late.</span><br>
<b>Estoy de acuerdo con</b>… / <b>No estoy de acuerdo con</b>… <span class="en">I agree / I disagree with…</span><br>
<b>Es importante que</b> + subjuntivo: Es importante que todos reciclemos. <span class="en">It's important that we all recycle.</span></p>
<div class="tip"><b>Truco / Trick:</b> Afirmación → indicativo (<i>creo que <u>es</u></i>); negación → subjuntivo (<i>no creo que <u>sea</u></i>).</div></div>`,
  voc: [
    ["🌡️", "el calentamiento global", "global warming"],
    ["🏭", "la contaminación", "pollution"],
    ["♻️", "reciclar", "to recycle"],
    ["🗑️", "el contenedor", "bin, container"],
    ["☀️", "la energía solar", "solar energy"],
    ["💨", "la energía eólica", "wind energy"],
    ["🌳", "el bosque", "forest"],
    ["🔥", "el incendio forestal", "wildfire"],
    ["🏜️", "la sequía", "drought"],
    ["🌊", "la inundación", "flood"],
    ["🐼", "la especie en peligro de extinción", "endangered species"],
    ["🚲", "el transporte sostenible", "sustainable transport"],
    ["🛍️", "la bolsa de plástico", "plastic bag"],
    ["💧", "ahorrar agua", "to save water"],
    ["🌱", "ecológico", "eco-friendly, organic"],
    ["🌫️", "el humo", "smoke"]
  ],
  ex: [
    { q: "Creo que el cambio climático ___ un problema muy grave.", o: ["es", "sea", "ser"], a: 0, t: "I think climate change is a very serious problem. (creo que + indicative)" },
    { q: "No creo que ___ demasiado tarde para actuar.", o: ["es", "sea", "está"], a: 1, t: "I don't think it's too late to act. (no creo que + subjunctive)" },
    { q: "Las botellas de vidrio van al contenedor…", o: ["amarillo", "azul", "verde"], a: 2, t: "Glass bottles go in the green bin." },
    { q: "Cuando no llueve durante muchos meses, hay una…", o: ["inundación", "sequía", "tormenta"], a: 1, t: "When it doesn't rain for months, there is a drought." },
    { q: "Hay que ___ el papel y el cartón en el contenedor azul. (to recycle)", a: ["reciclar"], t: "You have to recycle paper and cardboard in the blue bin." },
    { q: "Cierra el grifo mientras te lavas los dientes para ___ agua. (to save)", a: ["ahorrar"], t: "Turn off the tap while brushing your teeth to save water." },
    { q: "En mi ___, deberíamos usar más la bicicleta. (opinion)", a: ["opinión", "opinion"], t: "In my opinion, we should use bikes more." },
    { q: "Los coches y las fábricas producen mucha ___. (pollution)", a: ["contaminación", "contaminacion"], t: "Cars and factories produce a lot of pollution." },
    { w: "Creo que debemos reducir el uso del plástico.", t: "I think we must reduce the use of plastic." },
    { w: "No estoy de acuerdo con esa idea.", t: "I don't agree with that idea." },
    { w: "El oso polar está en peligro de extinción.", t: "The polar bear is endangered." },
    { w: "Es importante que todos reciclemos en casa.", t: "It's important that we all recycle at home." }
  ],
  tx: {
    ti: "Un barrio más verde",
    b: `Me llamo Lucía y vivo en Valencia. Hace dos años, mi barrio organizó un proyecto para cuidar el <u>medio ambiente</u>. Al principio, muchos vecinos no sabían <u>reciclar</u> bien y tiraban todo al mismo <u>contenedor</u>. Ahora separamos los <u>residuos</u>: el plástico al amarillo, el papel al azul y el vidrio al verde.<br><br>También pusimos <u>placas solares</u> en el tejado del colegio y creamos un huerto <u>ecológico</u> donde los niños aprenden a cultivar tomates. Además, el ayuntamiento abrió un carril bici y ahora mucha gente va al trabajo en bicicleta en lugar de en coche.<br><br><u>En mi opinión</u>, estos cambios pequeños son muy importantes. <u>Creo que</u> el <u>cambio climático</u> es el mayor problema de nuestra generación, pero <u>no creo que</u> sea imposible solucionarlo. Mi abuelo, que vive en un pueblo con <u>sequía</u> casi todos los veranos, dice que ya es hora de actuar. Estoy totalmente de acuerdo con él.`
  },
  q: [
    ["¿Qué problema tenían los vecinos al principio?", ["No tenían contenedores", "No separaban la basura", "No tenían agua"], 1],
    ["¿Dónde pusieron las placas solares?", ["En el tejado del colegio", "En el ayuntamiento", "En casa de Lucía"], 0],
    ["¿Cómo va mucha gente al trabajo ahora?", ["En coche", "En autobús", "En bicicleta"], 2],
    ["¿Qué opina Lucía del cambio climático?", ["Que no es un problema real", "Que es grave pero tiene solución", "Que es imposible solucionarlo"], 1]
  ],
  sp: [
    "¿Qué haces tú en casa para cuidar el medio ambiente?",
    "En tu opinión, ¿cuál es el problema medioambiental más grave hoy? ¿Por qué?",
    "¿Cómo se recicla en tu ciudad? Explica el sistema.",
    "¿Estás de acuerdo con prohibir los coches en el centro de las ciudades? Da tu opinión.",
    "¿Qué cambios has notado en el clima de tu país en los últimos años?",
    "Propón tres ideas para hacer tu barrio más sostenible."
  ]
},
{
  id: "b1-tec",
  lvl: "B1",
  k: "v",
  t: "Tecnología e internet",
  en: "Technology and the internet",
  ic: "💻",
  th: `<div class="card"><h2>Dispositivos y aplicaciones <span class="en">(devices and apps)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>el móvil (España) / el celular (Latinoamérica)</td><td>mobile phone, cell phone</td></tr>
<tr><td>el ordenador (España) / la computadora (Latinoamérica)</td><td>computer</td></tr>
<tr><td>el portátil / la laptop</td><td>laptop</td></tr>
<tr><td>la tableta</td><td>tablet</td></tr>
<tr><td>la aplicación (la app)</td><td>app</td></tr>
<tr><td>la pantalla / el teclado / el ratón</td><td>screen / keyboard / mouse</td></tr>
<tr><td>el cargador / la batería</td><td>charger / battery</td></tr>
<tr><td>la red wifi / la contraseña</td><td>wifi network / password</td></tr>
</table></div>
<div class="card"><h3>Verbos de internet <span class="en">(internet verbs)</span></h3>
<table><tr><th>Español</th><th>English</th><th>Ejemplo</th></tr>
<tr><td>descargar / bajar</td><td>to download</td><td>Descargué la app ayer. <span class="en">I downloaded the app yesterday.</span></td></tr>
<tr><td>subir</td><td>to upload / post</td><td>Subo fotos a Instagram. <span class="en">I post photos on Instagram.</span></td></tr>
<tr><td>compartir</td><td>to share</td><td>Comparte el enlace. <span class="en">Share the link.</span></td></tr>
<tr><td>navegar</td><td>to browse</td><td>Navego por internet. <span class="en">I browse the internet.</span></td></tr>
<tr><td>conectarse</td><td>to connect / go online</td><td>No me puedo conectar. <span class="en">I can't get online.</span></td></tr>
<tr><td>seguir</td><td>to follow</td><td>Sigo a muchos artistas. <span class="en">I follow lots of artists.</span></td></tr>
<tr><td>borrar / guardar</td><td>to delete / to save</td><td>Guarda el archivo. <span class="en">Save the file.</span></td></tr>
</table></div>
<div class="card"><h3>Seguridad en internet <span class="en">(online safety)</span></h3>
<p>Usa una <b>contraseña segura</b>. <span class="en">Use a strong password.</span><br>
No abras enlaces sospechosos. <span class="en">Don't open suspicious links.</span><br>
Cuidado con los <b>datos personales</b> y la <b>privacidad</b>. <span class="en">Be careful with personal data and privacy.</span><br>
Si alguien te acosa, <b>bloquéalo</b> y <b>denúncialo</b>. <span class="en">If someone harasses you, block and report them.</span></p>
<div class="tip"><b>Truco / Trick:</b> Muchos verbos vienen del inglés: <i>chatear, tuitear, hacer clic, wasapear</i> (enviar un WhatsApp). Son muy coloquiales pero se usan mucho.</div></div>`,
  voc: [
    ["📱", "el móvil", "mobile phone"],
    ["💻", "el portátil", "laptop"],
    ["🖥️", "el ordenador", "computer"],
    ["⌨️", "el teclado", "keyboard"],
    ["🖱️", "el ratón", "mouse"],
    ["🔋", "la batería", "battery"],
    ["🔌", "el cargador", "charger"],
    ["📶", "la conexión", "connection, signal"],
    ["🔑", "la contraseña", "password"],
    ["📥", "descargar", "to download"],
    ["📤", "subir", "to upload, to post"],
    ["🔗", "el enlace", "link"],
    ["👍", "el me gusta", "like"],
    ["💬", "el mensaje", "message"],
    ["🔒", "la privacidad", "privacy"],
    ["🎮", "el videojuego", "video game"],
    ["📸", "la publicación", "post (social media)"]
  ],
  ex: [
    { q: "En México no dicen «el móvil», dicen…", o: ["el celular", "el portátil", "el teclado"], a: 0, t: "In Mexico they say 'el celular' for mobile phone." },
    { q: "Me he quedado sin ___; necesito el cargador.", o: ["batería", "contraseña", "pantalla"], a: 0, t: "My battery has run out; I need the charger." },
    { q: "Para entrar en tu cuenta necesitas tu…", o: ["ratón", "contraseña", "enlace"], a: 1, t: "To log in to your account you need your password." },
    { q: "No abras ese correo: el enlace parece…", o: ["sospechoso", "guardado", "conectado"], a: 0, t: "Don't open that email: the link looks suspicious." },
    { q: "Ayer ___ una aplicación nueva para aprender idiomas. (descargar, pretérito, yo)", a: ["descargué", "descargue"], t: "Yesterday I downloaded a new language app." },
    { q: "¿Me puedes ___ el enlace por WhatsApp? (to share, infinitive)", a: ["compartir", "pasar", "mandar", "enviar"], t: "Can you share the link with me on WhatsApp?" },
    { q: "Mi hermana ___ fotos a Instagram todos los días. (subir, presente)", a: ["sube"], t: "My sister posts photos on Instagram every day." },
    { q: "No olvides ___ el documento antes de cerrar. (to save)", a: ["guardar"], t: "Don't forget to save the document before closing." },
    { q: "La red ___ del hotel no funciona bien. (wifi)", a: ["wifi"], t: "The hotel's wifi network doesn't work well." },
    { w: "Nunca compartas tu contraseña con nadie.", t: "Never share your password with anyone." },
    { w: "Sigo a muchos cocineros en las redes sociales.", t: "I follow lots of chefs on social media." },
    { w: "¿Me ayudas a descargar esta aplicación?", t: "Will you help me download this app?" }
  ],
  tx: {
    ti: "Una semana sin pantallas",
    b: `Diego tiene veinte años, estudia en Bogotá y pasa unas siete horas al día con el <u>celular</u>. Por la mañana mira sus <u>redes sociales</u>, en clase toma apuntes en el <u>portátil</u> y por la noche juega a <u>videojuegos</u> en línea con sus amigos.<br><br>Un día, su profesora propuso un reto: pasar una semana sin <u>conectarse</u> a internet en el tiempo libre. Diego aceptó, aunque al principio le pareció imposible. El primer día se sentía nervioso y quería <u>descargar</u> los mensajes cada cinco minutos. Pero poco a poco empezó a leer, a salir a correr y a hablar más con su familia.<br><br>Al final de la semana, Diego <u>subió</u> una <u>publicación</u> para <u>compartir</u> su experiencia. Escribió que la tecnología es muy útil, pero que hay que usarla con cuidado. También aprendió algo sobre seguridad: ahora usa una <u>contraseña</u> diferente para cada <u>aplicación</u> y piensa dos veces antes de publicar sus <u>datos personales</u>.`
  },
  q: [
    ["¿Cuántas horas al día usaba Diego el celular?", ["Unas tres", "Unas siete", "Unas diez"], 1],
    ["¿Quién le propuso el reto?", ["Su madre", "Un amigo", "Su profesora"], 2],
    ["¿Cómo se sentía Diego el primer día?", ["Nervioso", "Feliz", "Aburrido pero tranquilo"], 0],
    ["¿Qué cambió Diego sobre la seguridad?", ["Borró todas sus redes", "Usa una contraseña distinta para cada app", "Compró un móvil nuevo"], 1]
  ],
  sp: [
    "¿Cuántas horas al día usas el móvil? ¿Crees que es demasiado?",
    "¿Qué aplicaciones son imprescindibles para ti? ¿Por qué?",
    "¿Qué redes sociales usas y qué sueles subir o compartir?",
    "Da tres consejos a un amigo para estar seguro en internet.",
    "¿Podrías pasar una semana sin internet? Explica por qué sí o por qué no.",
    "En tu opinión, ¿la tecnología nos acerca o nos aleja de las personas?"
  ]
},
{
  id: "b1-emoc",
  lvl: "B1",
  k: "v",
  t: "Sentimientos y personalidad",
  en: "Feelings and personality",
  ic: "😊",
  th: `<div class="card"><h2>Expresar sentimientos <span class="en">(expressing feelings)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>estar contento/a, alegre</td><td>to be happy, cheerful</td></tr>
<tr><td>estar triste, deprimido/a</td><td>to be sad, depressed</td></tr>
<tr><td>estar enfadado/a (Esp.) / enojado/a (Lat.)</td><td>to be angry</td></tr>
<tr><td>estar preocupado/a, nervioso/a</td><td>to be worried, nervous</td></tr>
<tr><td>estar orgulloso/a de</td><td>to be proud of</td></tr>
<tr><td>estar harto/a de</td><td>to be fed up with</td></tr>
<tr><td>tener celos / tener miedo</td><td>to be jealous / to be afraid</td></tr>
</table></div>
<div class="card"><h3>Ponerse, sentirse, estar <span class="en">(to become, to feel, to be)</span></h3>
<p><b>ponerse</b> + adjetivo = cambio rápido de emoción <span class="en">sudden change of mood</span><br>
Me pongo nervioso antes de los exámenes. <span class="en">I get nervous before exams.</span><br>
Se puso roja cuando la vio. <span class="en">She went red when she saw her.</span><br>
<b>sentirse</b> + adjetivo/adverbio = cómo te sientes por dentro <span class="en">how you feel inside</span><br>
Hoy me siento solo. <span class="en">Today I feel lonely.</span> · Me siento fatal. <span class="en">I feel awful.</span><br>
<b>estar harto de</b> + nombre/infinitivo <span class="en">to be fed up with</span><br>
Estoy harta de esperar. <span class="en">I'm fed up with waiting.</span><br>
<b>me da</b> + nombre: me da miedo, me da vergüenza, me da pena <span class="en">it scares me, it embarrasses me, it makes me sad</span></p>
<div class="tip"><b>Truco / Trick:</b> <i>Ser</i> + adjetivo = personalidad (<i>Es nervioso</i> = he's a nervous person). <i>Estar</i> + adjetivo = estado (<i>Está nervioso</i> = he's nervous right now).</div></div>
<div class="card"><h3>La personalidad y las relaciones <span class="en">(personality and relationships)</span></h3>
<table><tr><th>Positivo 👍</th><th>Negativo 👎</th></tr>
<tr><td>simpático, amable <span class="en">nice, kind</span></td><td>antipático, borde (Esp.) <span class="en">unfriendly, rude</span></td></tr>
<tr><td>generoso <span class="en">generous</span></td><td>tacaño <span class="en">stingy</span></td></tr>
<tr><td>trabajador <span class="en">hard-working</span></td><td>vago, flojo (Lat.) <span class="en">lazy</span></td></tr>
<tr><td>sincero <span class="en">honest</span></td><td>mentiroso <span class="en">liar, dishonest</span></td></tr>
<tr><td>tranquilo <span class="en">calm</span></td><td>impaciente <span class="en">impatient</span></td></tr>
</table>
<p>llevarse bien/mal con <span class="en">to get on well/badly with</span> · enamorarse de <span class="en">to fall in love with</span> · discutir <span class="en">to argue</span> · hacer las paces <span class="en">to make up</span> · romper con <span class="en">to break up with</span></p></div>`,
  voc: [
    ["😄", "alegre", "cheerful"],
    ["😢", "triste", "sad"],
    ["😠", "enfadado", "angry"],
    ["😟", "preocupado", "worried"],
    ["😳", "la vergüenza", "embarrassment"],
    ["😨", "el miedo", "fear"],
    ["😒", "los celos", "jealousy"],
    ["🥱", "aburrido", "bored"],
    ["😤", "harto", "fed up"],
    ["🏅", "orgulloso", "proud"],
    ["🤗", "cariñoso", "affectionate"],
    ["😇", "sincero", "honest, sincere"],
    ["🤑", "tacaño", "stingy"],
    ["🙄", "antipático", "unfriendly"],
    ["😌", "tranquilo", "calm"],
    ["😍", "enamorarse de", "to fall in love with"],
    ["🤝", "llevarse bien con", "to get on well with"],
    ["💔", "romper con", "to break up with"]
  ],
  ex: [
    { q: "Siempre me ___ nervioso cuando hablo en público.", o: ["pongo", "siento de", "estoy"], a: 0, t: "I always get nervous when I speak in public." },
    { q: "Mi jefe nunca invita a nada; es muy…", o: ["generoso", "tacaño", "cariñoso"], a: 1, t: "My boss never pays for anything; he's very stingy." },
    { q: "Estoy ___ de trabajar los fines de semana.", o: ["harto", "contento", "orgulloso"], a: 0, t: "I'm fed up with working at weekends." },
    { q: "Lo contrario de «trabajador» es…", o: ["sincero", "vago", "tranquilo"], a: 1, t: "The opposite of 'hard-working' is 'lazy'." },
    { q: "Hoy me ___ un poco triste. (sentirse, yo)", a: ["siento"], t: "Today I feel a bit sad." },
    { q: "Ana y su hermano se ___ muy bien. (llevar)", a: ["llevan"], t: "Ana and her brother get on very well." },
    { q: "Me da ___ hablar delante de tanta gente. (embarrassment)", a: ["vergüenza", "verguenza"], t: "Speaking in front of so many people embarrasses me." },
    { q: "Ayer discutimos, pero hoy hemos hecho las ___. (to make up)", a: ["paces"], t: "We argued yesterday, but today we've made up." },
    { w: "Mi abuela está muy orgullosa de mí.", t: "My grandmother is very proud of me." },
    { w: "Se puso muy contento con la noticia.", t: "He got very happy with the news." },
    { w: "Marta se enamoró de un chico argentino.", t: "Marta fell in love with an Argentinian boy." },
    { w: "No me llevo bien con mi compañero.", t: "I don't get on well with my colleague." }
  ],
  tx: {
    ti: "Dos hermanas muy diferentes",
    b: `Carmen y Elena son hermanas, pero tienen personalidades muy distintas. Carmen es <u>tranquila</u>, <u>trabajadora</u> y muy <u>sincera</u>: siempre dice lo que piensa. Elena, en cambio, es más <u>impaciente</u> y se <u>pone nerviosa</u> por cualquier cosa, aunque también es muy <u>cariñosa</u> y <u>generosa</u>.<br><br>De pequeñas, discutían mucho. Elena tenía <u>celos</u> de su hermana porque sacaba mejores notas, y Carmen estaba <u>harta de</u> que Elena le cogiera la ropa sin pedir permiso. Sin embargo, siempre hacían <u>las paces</u> antes de dormir.<br><br>Ahora viven en ciudades diferentes: Carmen en Sevilla y Elena en Lima, donde trabaja como enfermera. Hablan por videollamada todos los domingos y <u>se llevan</u> mejor que nunca. Cuando Elena <u>se siente</u> sola o <u>preocupada</u>, llama a Carmen, que siempre la escucha. Y Carmen dice que está muy <u>orgullosa de</u> su hermana pequeña, que ha sido muy valiente al empezar una vida nueva en otro país.`
  },
  q: [
    ["¿Cómo es Carmen?", ["Impaciente y nerviosa", "Tranquila y sincera", "Tacaña y antipática"], 1],
    ["¿Por qué tenía celos Elena de pequeña?", ["Porque Carmen sacaba mejores notas", "Porque Carmen tenía más ropa", "Porque Carmen tenía novio"], 0],
    ["¿Dónde vive Elena ahora?", ["En Sevilla", "En Bogotá", "En Lima"], 2],
    ["¿Qué siente Carmen por su hermana?", ["Está harta de ella", "Está orgullosa de ella", "Tiene miedo por ella"], 1]
  ],
  sp: [
    "Describe tu personalidad con cuatro adjetivos y da ejemplos.",
    "¿Qué situaciones te ponen nervioso o nerviosa?",
    "¿De qué estás harto o harta últimamente? Explica por qué.",
    "Describe a tu mejor amigo o amiga. ¿Por qué os lleváis tan bien?",
    "¿De qué te sientes más orgulloso u orgullosa en tu vida?",
    "¿Qué haces cuando discutes con alguien? ¿Cómo hacéis las paces?"
  ]
},
{
  id: "b1-medios",
  lvl: "B1",
  k: "v",
  t: "Medios de comunicación y noticias",
  en: "Media and news",
  ic: "📰",
  th: `<div class="card"><h2>Los medios de comunicación <span class="en">(the media)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>la prensa / el periódico / el diario</td><td>the press / newspaper / daily paper</td></tr>
<tr><td>la revista</td><td>magazine</td></tr>
<tr><td>la televisión / la cadena / el canal</td><td>TV / network / channel</td></tr>
<tr><td>la radio / la emisora</td><td>radio / radio station</td></tr>
<tr><td>el telediario (Esp.) / el noticiero (Lat.)</td><td>TV news programme</td></tr>
<tr><td>el/la periodista, el/la reportero/a</td><td>journalist, reporter</td></tr>
<tr><td>el/la presentador/a</td><td>presenter, anchor</td></tr>
<tr><td>el pódcast, el blog, la prensa digital</td><td>podcast, blog, online press</td></tr>
</table></div>
<div class="card"><h3>Las secciones de un periódico <span class="en">(newspaper sections)</span></h3>
<p>📌 <b>la portada</b> <span class="en">front page</span> · 🌐 <b>internacional</b> <span class="en">world news</span> · 🏛️ <b>política / nacional</b> <span class="en">politics / national</span> · 💶 <b>economía</b> <span class="en">business</span> · ⚽ <b>deportes</b> <span class="en">sports</span> · 🎭 <b>cultura y espectáculos</b> <span class="en">arts and entertainment</span> · ✍️ <b>opinión</b> <span class="en">opinion</span> · 🌦️ <b>el tiempo</b> <span class="en">weather</span> · 📢 <b>los anuncios</b> <span class="en">ads</span></p>
<p>Una noticia tiene <b>el titular</b> <span class="en">headline</span>, <b>el subtítulo</b> <span class="en">subheading</span> y <b>el cuerpo</b> <span class="en">body</span>. Los titulares usan a menudo el presente y omiten artículos: <i>«Detienen a dos ladrones en Valencia»</i> <span class="en">Two thieves arrested in Valencia</span>.</p></div>
<div class="card"><h3>Noticias falsas <span class="en">(fake news)</span></h3>
<p>Las <b>noticias falsas</b> (o <i>bulos</i>, en España) se <b>difunden</b> muy rápido por las redes. <span class="en">Fake news spreads very fast on social media.</span><br>
Antes de compartir, hay que <b>comprobar la fuente</b> y <b>contrastar la información</b>. <span class="en">Before sharing, you need to check the source and cross-check the information.</span><br>
Según el periódico… / Al parecer… / Se dice que… <span class="en">According to the paper… / Apparently… / It's said that…</span></p>
<div class="tip"><b>Truco / Trick:</b> <i>La noticia</i> = a single news item (<i>una noticia</i>, a piece of news). <i>Las noticias</i> = the news in general, or the news programme. ¡No digas «un nuevo»!</div></div>`,
  voc: [
    ["📰", "el periódico", "newspaper"],
    ["📖", "la revista", "magazine"],
    ["📺", "el telediario", "TV news"],
    ["📻", "la emisora", "radio station"],
    ["🎙️", "el/la periodista", "journalist"],
    ["🧑‍💼", "el/la presentador/a", "presenter, anchor"],
    ["🗞️", "el titular", "headline"],
    ["📌", "la portada", "front page"],
    ["⚽", "la sección de deportes", "sports section"],
    ["🌦️", "el pronóstico del tiempo", "weather forecast"],
    ["📢", "el anuncio", "advertisement"],
    ["🎧", "el pódcast", "podcast"],
    ["🤥", "la noticia falsa", "fake news"],
    ["🔍", "la fuente", "source"],
    ["🎤", "la entrevista", "interview"],
    ["🔴", "en directo", "live"]
  ],
  ex: [
    { q: "En Latinoamérica, el programa de noticias de la tele se llama…", o: ["el noticiero", "el periódico", "la emisora"], a: 0, t: "In Latin America the TV news programme is called 'el noticiero'." },
    { q: "La primera página de un periódico es…", o: ["la portada", "el titular", "la revista"], a: 0, t: "The first page of a newspaper is the front page." },
    { q: "Los resultados del fútbol están en la sección de…", o: ["economía", "deportes", "opinión"], a: 1, t: "The football results are in the sports section." },
    { q: "Antes de compartir una noticia, hay que comprobar…", o: ["la fuente", "el anuncio", "la emisora"], a: 0, t: "Before sharing a news story, you must check the source." },
    { q: "He leído una ___ muy interesante sobre el clima. (piece of news)", a: ["noticia"], t: "I've read a very interesting news story about the climate." },
    { q: "El partido se emite en ___ esta noche. (live)", a: ["directo"], t: "The match is broadcast live tonight." },
    { q: "Mi tía es ___ y trabaja en un diario de Buenos Aires. (journalist)", a: ["periodista"], t: "My aunt is a journalist and works for a Buenos Aires daily." },
    { q: "Según el pronóstico del ___, mañana va a llover. (weather)", a: ["tiempo"], t: "According to the weather forecast, it's going to rain tomorrow." },
    { w: "Escucho la radio todas las mañanas.", t: "I listen to the radio every morning." },
    { w: "Esa noticia falsa se difundió por internet.", t: "That fake news story spread on the internet." },
    { w: "Según el periódico, el alcalde va a dimitir.", t: "According to the paper, the mayor is going to resign." },
    { w: "La presentadora entrevistó a un actor famoso.", t: "The presenter interviewed a famous actor." }
  ],
  tx: {
    ti: "¿Verdad o bulo?",
    b: `El lunes pasado, un mensaje se hizo viral en las <u>redes sociales</u>: «Cierran todas las playas de Málaga por un tiburón». En pocas horas, miles de personas lo habían <u>compartido</u>. Pablo, un estudiante de <u>periodismo</u>, sospechó enseguida. El <u>titular</u> era muy alarmista y el mensaje no citaba ninguna <u>fuente</u>.<br><br>Pablo decidió <u>contrastar la información</u>. Primero buscó en la <u>prensa digital</u> y en la <u>portada</u> de los principales <u>periódicos</u>, pero no encontró nada. Después escuchó una <u>emisora</u> de radio local y, por último, vio el <u>telediario</u> de la noche. Nadie hablaba del tiburón.<br><br>Al día siguiente, el ayuntamiento confirmó que era una <u>noticia falsa</u>: la foto del tiburón era de Australia y tenía cinco años. Pablo escribió un artículo en el blog de su universidad explicando cómo detectar <u>bulos</u>. Su consejo principal es sencillo: «Antes de compartir, lee la noticia completa, comprueba quién la publica y busca otras fuentes».`
  },
  q: [
    ["¿Qué decía el mensaje viral?", ["Que había un incendio en Málaga", "Que cerraban las playas por un tiburón", "Que llegaba una tormenta"], 1],
    ["¿Por qué sospechó Pablo?", ["Porque no citaba ninguna fuente", "Porque lo envió un amigo", "Porque estaba en inglés"], 0],
    ["¿De dónde era realmente la foto?", ["De Málaga", "De México", "De Australia"], 2],
    ["¿Dónde publicó Pablo su artículo?", ["En el telediario", "En el blog de su universidad", "En una revista"], 1]
  ],
  sp: [
    "¿Cómo te informas normalmente: prensa, televisión, radio o redes sociales?",
    "¿Qué sección del periódico lees primero? ¿Por qué?",
    "Cuenta una noticia importante que has leído o escuchado esta semana.",
    "¿Alguna vez has creído una noticia falsa? ¿Qué pasó?",
    "Da tres consejos para detectar noticias falsas.",
    "En tu opinión, ¿los periodistas tienen demasiado poder? Justifica tu respuesta."
  ]
},
{
  id: "b1-cultura",
  lvl: "B1",
  k: "v",
  t: "Cultura hispana y fiestas",
  en: "Hispanic culture and festivals",
  ic: "🎉",
  th: `<div class="card"><h2>Fiestas del mundo hispano <span class="en">(festivals of the Hispanic world)</span></h2>
<table><tr><th>Fiesta</th><th>¿Dónde y cuándo?</th><th>¿Qué se hace?</th></tr>
<tr><td>💀 Día de Muertos</td><td>México, 1 y 2 de noviembre</td><td>Se ponen <b>altares</b> con <b>ofrendas</b>, flores de cempasúchil y calaveras de azúcar para recordar a los difuntos. <span class="en">Altars with offerings, marigolds and sugar skulls honour the dead.</span></td></tr>
<tr><td>🐂 San Fermín</td><td>Pamplona (España), 6–14 de julio</td><td>Los <b>encierros</b>: la gente corre delante de los toros. Todos visten de blanco con un pañuelo rojo. <span class="en">The bull runs; everyone wears white with a red scarf.</span></td></tr>
<tr><td>☀️ Inti Raymi</td><td>Cusco (Perú), 24 de junio</td><td>La fiesta inca del Sol, con <b>desfiles</b>, música y ceremonias en Sacsayhuamán. <span class="en">The Inca festival of the Sun, with parades and ceremonies.</span></td></tr>
<tr><td>✝️ Semana Santa</td><td>marzo o abril</td><td><b>Procesiones</b> con pasos y nazarenos, sobre todo en Sevilla y Guatemala (alfombras de flores). <span class="en">Processions, especially in Seville and Guatemala.</span></td></tr>
<tr><td>🎄 Navidad</td><td>24 de diciembre – 6 de enero</td><td>Nochebuena, Nochevieja (12 uvas en España), los <b>Reyes Magos</b> y las <b>posadas</b> en México. <span class="en">Christmas Eve, New Year's Eve, the Three Kings, posadas.</span></td></tr>
</table></div>
<div class="card"><h3>Costumbres <span class="en">(customs)</span></h3>
<p>la <b>sobremesa</b>: quedarse hablando en la mesa después de comer <span class="en">chatting at the table after a meal</span><br>
la <b>siesta</b>, el <b>tapeo</b> (ir de tapas) <span class="en">nap, going out for tapas</span><br>
dar <b>dos besos</b> al saludar (España) / un beso (gran parte de Latinoamérica) <span class="en">two kisses / one kiss as a greeting</span><br>
la <b>quinceañera</b>: fiesta de los 15 años de una chica en Latinoamérica <span class="en">a girl's 15th birthday party</span><br>
el <b>santo</b>: el día del santo de tu nombre <span class="en">your name day</span></p>
<div class="tip"><b>Truco / Trick:</b> Para hablar de costumbres usa el <b>se impersonal</b>: <i>En Navidad <u>se come</u> turrón. En México <u>se celebran</u> las posadas.</i> (verbo en singular o plural según el nombre)</div></div>`,
  voc: [
    ["💀", "la calavera", "skull"],
    ["🕯️", "la vela", "candle"],
    ["🌼", "la ofrenda", "offering"],
    ["🐂", "el encierro", "bull run"],
    ["🧣", "el pañuelo", "scarf, handkerchief"],
    ["☀️", "el dios Sol", "the Sun god"],
    ["💃", "el desfile", "parade"],
    ["⛪", "la procesión", "procession"],
    ["🎄", "la Nochebuena", "Christmas Eve"],
    ["🍇", "las doce uvas", "the twelve grapes"],
    ["👑", "los Reyes Magos", "the Three Wise Men"],
    ["🎆", "los fuegos artificiales", "fireworks"],
    ["🎭", "el disfraz", "costume"],
    ["🥘", "el plato típico", "typical dish"],
    ["🎶", "la música tradicional", "traditional music"],
    ["😴", "la siesta", "nap"],
    ["👗", "la quinceañera", "15th birthday celebration"]
  ],
  ex: [
    { q: "El Día de Muertos se celebra sobre todo en…", o: ["México", "España", "Argentina"], a: 0, t: "The Day of the Dead is celebrated mainly in Mexico." },
    { q: "En San Fermín, la gente corre delante de los toros en…", o: ["las procesiones", "los encierros", "las posadas"], a: 1, t: "At San Fermín people run in front of the bulls in the bull runs." },
    { q: "El Inti Raymi es la fiesta inca del…", o: ["Sol", "Mar", "Maíz"], a: 0, t: "Inti Raymi is the Inca festival of the Sun." },
    { q: "En España, en Nochevieja se comen doce…", o: ["turrones", "uvas", "calaveras"], a: 1, t: "In Spain, on New Year's Eve, people eat twelve grapes." },
    { q: "En Navidad ___ turrón en España. (comer, se impersonal)", a: ["se come"], t: "At Christmas, people eat turrón in Spain." },
    { q: "Los niños españoles reciben regalos de los Reyes ___ el 6 de enero. (Wise)", a: ["magos"], t: "Spanish children get presents from the Three Wise Men on 6 January." },
    { q: "Después de comer, nos quedamos charlando en la ___. (after-meal chat)", a: ["sobremesa"], t: "After lunch we stayed chatting at the table." },
    { q: "En Sevilla, durante la Semana Santa, hay muchas ___. (processions)", a: ["procesiones"], t: "In Seville, during Holy Week, there are many processions." },
    { w: "En Pamplona todos visten de blanco y rojo.", t: "In Pamplona everyone dresses in white and red." },
    { w: "Las familias ponen altares con fotos y flores.", t: "Families set up altars with photos and flowers." },
    { w: "En México se celebran las posadas en diciembre.", t: "In Mexico the posadas are celebrated in December." },
    { w: "Al final de la fiesta hay fuegos artificiales.", t: "At the end of the festival there are fireworks." }
  ],
  tx: {
    ti: "Un año de fiestas",
    b: `Sofía es una periodista chilena que pasó un año viajando para escribir un libro sobre las <u>fiestas</u> hispanas. En abril estuvo en Sevilla durante la <u>Semana Santa</u>. Le impresionó el silencio de las <u>procesiones</u> por la noche, con miles de <u>velas</u> encendidas.<br><br>En junio viajó a Cusco para ver el <u>Inti Raymi</u>. Cientos de actores vestidos de incas representaron la ceremonia al <u>dios Sol</u>, con <u>música tradicional</u> y bailes. En julio corrió… bueno, miró desde un balcón los <u>encierros</u> de <u>San Fermín</u>, con su <u>pañuelo</u> rojo.<br><br>Su fiesta favorita, sin embargo, fue el <u>Día de Muertos</u> en Oaxaca. Una familia la invitó a su casa y le explicó el significado del <u>altar</u>: las <u>ofrendas</u> de comida, las flores naranjas y las <u>calaveras</u> de azúcar sirven para dar la bienvenida a los difuntos. «No es una fiesta triste», le dijo la abuela, «es una celebración de la vida». Sofía terminó el año en Madrid, comiendo las <u>doce uvas</u> en Nochevieja.`
  },
  q: [
    ["¿De dónde es Sofía?", ["De México", "De Chile", "De España"], 1],
    ["¿Qué le impresionó de la Semana Santa en Sevilla?", ["El ruido de la música", "El silencio de las procesiones", "Los fuegos artificiales"], 1],
    ["¿Cómo vio Sofía los encierros de San Fermín?", ["Corriendo delante de los toros", "Por televisión", "Desde un balcón"], 2],
    ["Según la abuela, ¿qué es el Día de Muertos?", ["Una celebración de la vida", "Una fiesta muy triste", "Una fiesta solo para niños"], 0]
  ],
  sp: [
    "¿Cuál es la fiesta más importante de tu país? Descríbela.",
    "¿Qué fiesta hispana te gustaría conocer en persona? ¿Por qué?",
    "¿Cómo celebras tú la Navidad o el Año Nuevo?",
    "Compara una costumbre de tu país con una costumbre española o latinoamericana.",
    "¿Qué opinas de los encierros de San Fermín? Da tu opinión.",
    "Explica a un amigo extranjero qué se hace en un cumpleaños en tu cultura."
  ]
},
{
  id: "b1-frases",
  lvl: "B1",
  k: "v",
  t: "Frases hechas y coloquiales",
  en: "Idioms and colloquial expressions",
  ic: "💬",
  th: `<div class="card"><h2>Frases hechas <span class="en">(idioms)</span></h2>
<table><tr><th>Expresión</th><th>Significado</th><th>Ejemplo</th></tr>
<tr><td>estar en las nubes</td><td>estar distraído <span class="en">to have your head in the clouds</span></td><td>Perdona, estaba en las nubes. <span class="en">Sorry, I was miles away.</span></td></tr>
<tr><td>costar un ojo de la cara</td><td>ser muy caro <span class="en">to cost an arm and a leg</span></td><td>Este móvil cuesta un ojo de la cara. <span class="en">This phone costs a fortune.</span></td></tr>
<tr><td>ser pan comido</td><td>ser muy fácil <span class="en">to be a piece of cake</span></td><td>El examen fue pan comido. <span class="en">The exam was a piece of cake.</span></td></tr>
<tr><td>tomar el pelo</td><td>engañar en broma <span class="en">to pull someone's leg</span></td><td>¿Me estás tomando el pelo? <span class="en">Are you pulling my leg?</span></td></tr>
<tr><td>meter la pata</td><td>cometer un error <span class="en">to put your foot in it</span></td><td>Metí la pata con mi jefa. <span class="en">I put my foot in it with my boss.</span></td></tr>
<tr><td>echar una mano</td><td>ayudar <span class="en">to lend a hand</span></td><td>¿Me echas una mano? <span class="en">Can you give me a hand?</span></td></tr>
<tr><td>no tener pelos en la lengua</td><td>decir lo que piensas <span class="en">to speak your mind</span></td><td>Mi abuela no tiene pelos en la lengua. <span class="en">My grandma doesn't mince her words.</span></td></tr>
<tr><td>estar hecho polvo</td><td>estar muy cansado <span class="en">to be exhausted</span></td><td>Después del viaje estoy hecho polvo. <span class="en">I'm shattered after the trip.</span></td></tr>
<tr><td>ponerse las pilas</td><td>empezar a esforzarse <span class="en">to get your act together</span></td><td>Tienes que ponerte las pilas. <span class="en">You need to get your act together.</span></td></tr>
</table>
<div class="tip"><b>Truco / Trick:</b> En las frases hechas el verbo se conjuga, pero el resto no cambia: <i>Yo <u>meto</u> la pata, tú <u>metiste</u> la pata, ellos <u>han metido</u> la pata.</i></div></div>
<div class="card"><h3>Palabras coloquiales <span class="en">(colloquial words)</span></h3>
<table><tr><th>Palabra</th><th>¿Dónde?</th><th>Significado</th></tr>
<tr><td>guay</td><td>🇪🇸 España</td><td>genial <span class="en">cool</span></td></tr>
<tr><td>vale</td><td>🇪🇸 España</td><td>de acuerdo <span class="en">OK</span></td></tr>
<tr><td>tío / tía</td><td>🇪🇸 España</td><td>amigo, persona <span class="en">mate, dude</span></td></tr>
<tr><td>chévere</td><td>🇻🇪 🇨🇴 🇵🇪 Caribe y Andes</td><td>genial <span class="en">cool, great</span></td></tr>
<tr><td>órale</td><td>🇲🇽 México</td><td>¡vale!, ¡vamos!, ¡qué sorpresa! <span class="en">OK!, come on!, wow!</span></td></tr>
<tr><td>padre / qué padre</td><td>🇲🇽 México</td><td>genial <span class="en">cool</span></td></tr>
<tr><td>bacán</td><td>🇨🇱 🇵🇪 Chile, Perú</td><td>genial <span class="en">cool</span></td></tr>
<tr><td>che / boludo</td><td>🇦🇷 Argentina</td><td>llamar a un amigo (boludo es vulgar con desconocidos) <span class="en">hey / mate</span></td></tr>
<tr><td>la plata / la pasta</td><td>Latinoamérica / España</td><td>el dinero <span class="en">money, dough</span></td></tr>
</table></div>`,
  voc: [
    ["☁️", "estar en las nubes", "to have your head in the clouds"],
    ["👁️", "costar un ojo de la cara", "to cost an arm and a leg"],
    ["🍞", "ser pan comido", "to be a piece of cake"],
    ["💇", "tomar el pelo", "to pull someone's leg"],
    ["🦶", "meter la pata", "to put your foot in it"],
    ["🤲", "echar una mano", "to lend a hand"],
    ["👅", "no tener pelos en la lengua", "to speak your mind"],
    ["🔋", "ponerse las pilas", "to get your act together"],
    ["😵", "estar hecho polvo", "to be worn out"],
    ["😎", "guay", "cool (Spain)"],
    ["👌", "vale", "OK (Spain)"],
    ["🌴", "chévere", "cool (Caribbean, Colombia)"],
    ["🌮", "órale", "OK! / wow! (Mexico)"],
    ["🤙", "bacán", "cool (Chile, Peru)"],
    ["💵", "la plata", "money (Latin America)"],
    ["🧉", "che", "hey (Argentina)"]
  ],
  ex: [
    { q: "Este examen es muy fácil; es…", o: ["pan comido", "un ojo de la cara", "hecho polvo"], a: 0, t: "This exam is very easy; it's a piece of cake." },
    { q: "Le dije a Marta que su novio era feo… ¡y era su hermano! Metí…", o: ["la mano", "la pata", "el pelo"], a: 1, t: "I told Marta her boyfriend was ugly… and he was her brother! I put my foot in it." },
    { q: "En México, para decir «¡vale, vamos!», se dice…", o: ["¡guay!", "¡órale!", "¡che!"], a: 1, t: "In Mexico, 'órale!' means 'OK, let's go!'." },
    { q: "En Colombia, una fiesta «chévere» es una fiesta…", o: ["aburrida", "muy cara", "estupenda"], a: 2, t: "In Colombia, a 'chévere' party is a great party." },
    { q: "Esta chaqueta me costó un ojo de la ___. (face)", a: ["cara"], t: "This jacket cost me an arm and a leg." },
    { q: "¿Me ___ una mano con la mudanza? (echar, tú, presente)", a: ["echas"], t: "Will you give me a hand with the move?" },
    { q: "No me tomes el ___; eso no puede ser verdad. (hair)", a: ["pelo"], t: "Don't pull my leg; that can't be true." },
    { q: "Si quieres aprobar, tienes que ponerte las ___. (batteries)", a: ["pilas"], t: "If you want to pass, you need to get your act together." },
    { w: "Perdona, no te escuchaba; estaba en las nubes.", t: "Sorry, I wasn't listening; I was miles away." },
    { w: "Mi abuela no tiene pelos en la lengua.", t: "My grandmother doesn't mince her words." },
    { w: "Después de la mudanza estoy hecho polvo.", t: "After the move I'm exhausted." },
    { w: "¡Qué guay! Vale, nos vemos a las ocho.", t: "Cool! OK, see you at eight." }
  ],
  tx: {
    ti: "Un intercambio muy coloquial",
    b: `Tom es un estudiante inglés que vive en Madrid y tiene un intercambio de idiomas con Andrés, un chico de Bogotá. Tom habla bien español, pero las <u>frases hechas</u> le parecen un misterio.<br><br>El primer día, su compañera de piso le dijo: «¡Qué <u>guay</u> tu camiseta, <u>tío</u>!». Tom no entendía por qué lo llamaba «tío». Luego, en clase, el profesor le preguntó algo y Tom no respondió porque <u>estaba en las nubes</u>. «<u>Ponte las pilas</u>», le dijo el profesor, y Tom buscó unas pilas en su mochila. ¡Qué vergüenza! Había <u>metido la pata</u>.<br><br>Andrés le <u>echó una mano</u>: le explicó que en Colombia dicen <u>chévere</u> en lugar de «guay», y que en México un amigo suyo siempre dice <u>órale</u>. También le advirtió: «A veces la gente te va a <u>tomar el pelo</u>, pero no te preocupes». Ahora Tom entiende casi todo. Dice que aprender expresiones coloquiales no es <u>pan comido</u>, pero que es la parte más divertida del idioma.`
  },
  q: [
    ["¿De dónde es Andrés?", ["De Madrid", "De Bogotá", "De México"], 1],
    ["¿Por qué no respondió Tom al profesor?", ["Porque estaba distraído", "Porque estaba enfadado", "Porque no tenía pilas"], 0],
    ["¿Qué hizo Tom cuando el profesor dijo «ponte las pilas»?", ["Se puso a estudiar", "Buscó pilas en su mochila", "Salió de clase"], 1],
    ["¿Qué opina Tom de las expresiones coloquiales?", ["Que son fáciles", "Que son aburridas", "Que son difíciles pero divertidas"], 2]
  ],
  sp: [
    "Cuenta una vez en la que metiste la pata. ¿Qué pasó?",
    "¿Qué cosa te parece pan comido y qué cosa te cuesta mucho?",
    "Nombra algo que cuesta un ojo de la cara en tu ciudad.",
    "¿Cuándo fue la última vez que echaste una mano a alguien?",
    "¿Conoces alguna frase hecha de tu idioma? Explícala en español.",
    "¿Qué palabras coloquiales en español te gustan más: guay, chévere, órale o bacán? ¿Por qué?"
  ]
},
{
  id: "b1-laboral",
  lvl: "B1",
  k: "v",
  t: "Mundo laboral y entrevistas",
  en: "The world of work and job interviews",
  ic: "💼",
  th: `<div class="card"><h2>Buscar trabajo <span class="en">(looking for a job)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>la oferta de empleo / el puesto de trabajo</td><td>job offer / position</td></tr>
<tr><td>el currículum (CV) / la carta de presentación</td><td>CV, résumé / cover letter</td></tr>
<tr><td>la experiencia laboral / la formación</td><td>work experience / education</td></tr>
<tr><td>solicitar un puesto / enviar la candidatura</td><td>to apply for a job / send the application</td></tr>
<tr><td>el/la candidato/a, el/la entrevistador/a</td><td>candidate, interviewer</td></tr>
<tr><td>el contrato indefinido / temporal</td><td>permanent / temporary contract</td></tr>
<tr><td>a tiempo completo / a media jornada</td><td>full-time / part-time</td></tr>
<tr><td>el sueldo / el salario (bruto, neto)</td><td>salary (gross, net)</td></tr>
<tr><td>contratar / despedir / estar en paro (Esp.), desempleado</td><td>to hire / to fire / to be unemployed</td></tr>
</table></div>
<div class="card"><h3>En la entrevista: registro formal <span class="en">(formal register)</span></h3>
<p>En una entrevista se habla de <b>usted</b> (en España, algunas empresas modernas usan <i>tú</i>; en Latinoamérica, <i>usted</i> es más habitual). <span class="en">Use 'usted' in interviews.</span><br>
Encantado/a de conocerle. <span class="en">Pleased to meet you.</span><br>
¿Podría hablarme de su experiencia? <span class="en">Could you tell me about your experience?</span><br>
Mis puntos fuertes son la organización y el trabajo en equipo. <span class="en">My strengths are organisation and teamwork.</span><br>
Me gustaría saber cuáles serían mis funciones. <span class="en">I'd like to know what my duties would be.</span><br>
Quedo a la espera de su respuesta. <span class="en">I look forward to your reply.</span></p>
<div class="tip"><b>Truco / Trick:</b> Usa el <b>condicional</b> para ser más cortés: <i>quería → <u>querría</u>, puede → <u>podría</u>, me gusta → <u>me gustaría</u></i>. En un correo formal: <i>Estimado/a Sr./Sra. …</i> y <i>Atentamente / Un cordial saludo</i>.</div></div>
<div class="card"><h3>En la oficina <span class="en">(at the office)</span></h3>
<p>el/la jefe/a, el/la compañero/a, el equipo <span class="en">boss, colleague, team</span><br>
la reunión, el plazo, el proyecto <span class="en">meeting, deadline, project</span><br>
pedir un aumento / pedir vacaciones / estar de baja <span class="en">ask for a raise / ask for holidays / be on sick leave</span><br>
teletrabajar (trabajar desde casa) <span class="en">to work remotely</span><br>
el horario flexible, hacer horas extra <span class="en">flexible hours, work overtime</span></p></div>`,
  voc: [
    ["📄", "el currículum", "CV, résumé"],
    ["✉️", "la carta de presentación", "cover letter"],
    ["📢", "la oferta de empleo", "job offer"],
    ["🤝", "la entrevista de trabajo", "job interview"],
    ["🧑‍💼", "el/la candidato/a", "candidate"],
    ["📝", "el contrato", "contract"],
    ["💰", "el sueldo", "salary"],
    ["⏰", "el horario", "schedule, working hours"],
    ["👔", "el/la jefe/a", "boss"],
    ["👥", "el/la compañero/a de trabajo", "colleague"],
    ["📊", "la reunión", "meeting"],
    ["📅", "el plazo", "deadline"],
    ["🏠", "teletrabajar", "to work from home"],
    ["📈", "el aumento de sueldo", "pay rise"],
    ["🚪", "despedir", "to fire, to dismiss"],
    ["✅", "contratar", "to hire"],
    ["🏖️", "las vacaciones pagadas", "paid holidays"]
  ],
  ex: [
    { q: "Un contrato sin fecha de fin es un contrato…", o: ["temporal", "indefinido", "a media jornada"], a: 1, t: "A contract with no end date is a permanent contract." },
    { q: "En una entrevista formal, lo más adecuado es decir:", o: ["¿Qué tal, tío?", "Encantada de conocerle.", "¡Hola, guapo!"], a: 1, t: "In a formal interview, the most suitable is 'Pleased to meet you'." },
    { q: "Trabajo cuatro horas al día: trabajo a…", o: ["tiempo completo", "media jornada", "horas extra"], a: 1, t: "I work four hours a day: I work part-time." },
    { q: "Al final de un correo formal escribes:", o: ["Un beso", "Atentamente", "Chao"], a: 1, t: "At the end of a formal email you write 'Yours sincerely'." },
    { q: "Envié mi ___ y una carta de presentación a la empresa. (CV)", a: ["currículum", "curriculum", "cv", "currículo", "curriculo"], t: "I sent my CV and a cover letter to the company." },
    { q: "¿___ hablarme de su experiencia laboral? (poder, usted, condicional)", a: ["podría", "podria"], t: "Could you tell me about your work experience?" },
    { q: "La empresa va a ___ a cinco personas nuevas este mes. (to hire)", a: ["contratar"], t: "The company is going to hire five new people this month." },
    { q: "El ___ para entregar el proyecto es el viernes. (deadline)", a: ["plazo"], t: "The deadline to deliver the project is Friday." },
    { w: "Me gustaría solicitar el puesto de recepcionista.", t: "I'd like to apply for the receptionist position." },
    { w: "Mis puntos fuertes son la organización y la puntualidad.", t: "My strengths are organisation and punctuality." },
    { w: "Mañana tenemos una reunión con el jefe.", t: "Tomorrow we have a meeting with the boss." },
    { w: "Quedo a la espera de su respuesta.", t: "I look forward to your reply." }
  ],
  tx: {
    ti: "Mi primera entrevista",
    b: `Valentina terminó la carrera de Marketing en Montevideo y estuvo seis meses buscando trabajo. Cada semana leía las <u>ofertas de empleo</u> y enviaba su <u>currículum</u> con una <u>carta de presentación</u>. Por fin, una empresa de turismo la llamó para una <u>entrevista</u>.<br><br>Esa mañana se puso su mejor chaqueta y llegó diez minutos antes. La <u>entrevistadora</u> fue muy amable: «Buenos días, señorita Pérez. ¿Podría hablarme de su <u>experiencia laboral</u>?». Valentina explicó que había hecho unas prácticas en una agencia y que sus <u>puntos fuertes</u> eran la creatividad y el <u>trabajo en equipo</u>. Después preguntó por el <u>horario</u> y el <u>sueldo</u>, con mucha educación: «Me gustaría saber qué tipo de <u>contrato</u> ofrecen».<br><br>Una semana después recibió un correo: «Estimada señorita Pérez: Nos complace comunicarle que ha sido seleccionada para el <u>puesto</u>». Era un contrato <u>temporal</u> de seis meses, <u>a tiempo completo</u>, con posibilidad de <u>teletrabajar</u> dos días a la semana. Valentina lo celebró con su familia esa misma noche.`
  },
  q: [
    ["¿Cuánto tiempo estuvo Valentina buscando trabajo?", ["Seis meses", "Un año", "Dos semanas"], 0],
    ["¿Qué puntos fuertes mencionó en la entrevista?", ["La puntualidad y los idiomas", "La creatividad y el trabajo en equipo", "La paciencia y la informática"], 1],
    ["¿Cómo le comunicaron la noticia?", ["Por teléfono", "En persona", "Por correo"], 2],
    ["¿Qué tipo de contrato le ofrecieron?", ["Indefinido a media jornada", "Temporal a tiempo completo", "Temporal a media jornada"], 1]
  ],
  sp: [
    "Describe tu trabajo ideal: horario, sueldo, compañeros y lugar.",
    "Preséntate como si estuvieras en una entrevista de trabajo (usa usted).",
    "¿Cuáles son tus puntos fuertes y tus puntos débiles en el trabajo?",
    "¿Prefieres teletrabajar o ir a la oficina? Explica por qué.",
    "Pide a tu jefe un aumento de sueldo de forma educada.",
    "¿Qué consejos darías a alguien que tiene su primera entrevista?"
  ]
}
);
