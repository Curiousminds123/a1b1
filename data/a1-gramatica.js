/* Camino al Español · Nivel A1 · contenido */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "a1-ser",
  lvl: "A1",
  k: "g",
  t: "El verbo ser y los pronombres",
  en: "The verb 'to be' (ser) and subject pronouns",
  ic: "🧑",
  th: `<div class="card"><h2>Los pronombres personales <span class="en">(subject pronouns)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>yo</td><td>I</td></tr>
<tr><td>tú</td><td>you (informal, one person)</td></tr>
<tr><td>él / ella / usted</td><td>he / she / you (formal)</td></tr>
<tr><td>nosotros / nosotras</td><td>we</td></tr>
<tr><td>vosotros / vosotras</td><td>you all (informal, Spain)</td></tr>
<tr><td>ellos / ellas / ustedes</td><td>they / you all</td></tr></table>
<p>En Latinoamérica no se usa <i>vosotros</i>: se dice <b>ustedes</b> para todos. <span class="en">In Latin America "ustedes" is used for any group of people.</span><br>
En español el pronombre es opcional: <i>Soy Ana</i> = <i>Yo soy Ana</i>. <span class="en">The pronoun is usually dropped because the verb shows who it is.</span></p></div>
<div class="card"><h2>El verbo SER <span class="en">(to be: identity)</span></h2>
<table><tr><th>pronombre</th><th>SER</th><th>English</th></tr>
<tr><td>yo</td><td class="irr">soy</td><td>I am</td></tr>
<tr><td>tú</td><td class="irr">eres</td><td>you are</td></tr>
<tr><td>él / ella / usted</td><td class="irr">es</td><td>he / she is, you are</td></tr>
<tr><td>nosotros/as</td><td class="irr">somos</td><td>we are</td></tr>
<tr><td>vosotros/as</td><td class="irr">sois</td><td>you all are</td></tr>
<tr><td>ellos / ellas / ustedes</td><td class="irr">son</td><td>they are, you all are</td></tr></table>
<h3>¿Para qué usamos SER? <span class="en">(uses)</span></h3>
<p>👤 Identidad: Soy Marta. <span class="en">I'm Marta.</span><br>
🌍 Origen: Somos de Perú. <span class="en">We are from Peru.</span><br>
🏳️ Nacionalidad: Ella es mexicana. <span class="en">She is Mexican.</span><br>
💼 Profesión: Mi padre es médico. <span class="en">My father is a doctor.</span></p>
<div class="tip"><b>Truco / Trick:</b> Con profesiones no usamos <i>un/una</i>: <i>Soy profesor</i>, no <i>Soy un profesor</i>. <span class="en">No article before a profession.</span></div></div>
<div class="card"><h3>Preguntas <span class="en">(question words)</span></h3>
<p>¿<b>Quién</b> es? — Es Carlos. <span class="en">Who is it? — It's Carlos.</span><br>
¿De <b>dónde</b> eres? — Soy de Chile. <span class="en">Where are you from? — I'm from Chile.</span><br>
¿<b>Qué</b> eres? / ¿A qué te dedicas? — Soy enfermera. <span class="en">What do you do? — I'm a nurse.</span></p>
<p>Las nacionalidades se escriben con minúscula: <i>español, colombiana</i>. <span class="en">Nationalities are not capitalised in Spanish.</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Yo es de Italia. ✅ Yo <b>soy</b> de Italia. <span class="en">I am from Italy.</span><br>
❌ Soy una estudiante. ✅ Soy estudiante. <span class="en">I'm a student.</span><br>
❌ Ella es Francesa. ✅ Ella es francesa. <span class="en">She's French.</span></p></div>`,
  voc: [
    ["🙋", "yo", "I"],
    ["👉", "tú", "you (informal)"],
    ["👨", "él", "he"],
    ["👩", "ella", "she"],
    ["👥", "nosotros", "we"],
    ["🌍", "ser de", "to be from"],
    ["🩺", "el médico", "doctor"],
    ["👩‍🏫", "la profesora", "teacher (female)"],
    ["❓", "¿quién?", "who?"],
    ["📍", "¿de dónde?", "where from?"]
  ],
  ex: [
    { q: "Yo ___ estudiante.", o: ["soy", "es", "eres"], a: 0, t: "I am a student." },
    { q: "¿De dónde ___ tú?", o: ["es", "eres", "sois"], a: 1, t: "Where are you from?" },
    { q: "Nosotros ___ de Argentina.", o: ["son", "sois", "somos"], a: 2, t: "We are from Argentina." },
    { q: "¿___ es ella? — Es mi hermana.", o: ["Quién", "Dónde", "Qué"], a: 0, t: "Who is she? — She's my sister." },
    { q: "Ella es de Italia. Es ___.", o: ["italiano", "italiana", "Italiana"], a: 1, t: "She is from Italy. She's Italian." },
    { q: "Ellos ___ médicos. (ser)", a: ["son"], t: "They are doctors." },
    { q: "Vosotros ___ de Madrid. (ser)", a: ["sois"], t: "You (all) are from Madrid." },
    { q: "Usted ___ el señor García, ¿verdad? (ser)", a: ["es"], t: "You are Mr García, right?" },
    { q: "¿De ___ eres? — Soy de Cuba. (where)", a: ["dónde", "donde"], t: "Where are you from? — I'm from Cuba." },
    { w: "Mi madre es profesora de inglés.", t: "My mother is an English teacher." },
    { w: "¿De dónde son ustedes?", t: "Where are you all from?" },
    { w: "Nosotras somos de Bogotá, Colombia.", t: "We (female) are from Bogotá, Colombia." }
  ],
  tx: {
    ti: "Mi clase de español",
    b: `¡Hola! <u>Soy</u> Daniel y <u>soy</u> de Toronto, Canadá. <u>Soy</u> ingeniero, pero ahora <u>soy</u> estudiante de español en Salamanca. Mi clase <u>es</u> muy internacional. Akiko <u>es</u> japonesa y <u>es</u> fotógrafa. Pierre y Claire <u>son</u> franceses; <u>son</u> hermanos. La profesora se llama Elena y <u>es</u> de Sevilla. <u>Es</u> muy simpática.<br><br>El primer día, Elena pregunta: "¿<u>Quién</u> eres? ¿<u>De dónde</u> eres? ¿<u>Qué</u> haces?". Yo respondo: "<u>Soy</u> Daniel, <u>soy</u> canadiense y <u>soy</u> ingeniero". Nosotros <u>somos</u> de países diferentes, pero <u>somos</u> amigos.`
  },
  q: [
    ["¿De dónde es Daniel?", ["De Salamanca", "De Canadá", "De Francia"], 1],
    ["¿Qué es Akiko?", ["Fotógrafa", "Profesora", "Ingeniera"], 0],
    ["¿Quiénes son hermanos?", ["Daniel y Akiko", "Elena y Daniel", "Pierre y Claire"], 2],
    ["¿Cómo es la profesora?", ["Muy simpática", "Muy seria", "Muy joven"], 0]
  ],
  sp: [
    "Preséntate: ¿cómo te llamas y de dónde eres?",
    "¿Cuál es tu profesión o qué estudias?",
    "¿De dónde es tu familia? ¿Qué nacionalidad tiene?",
    "Describe a un amigo: ¿quién es, de dónde es y qué es?",
    "Pregunta a un compañero de dónde es y qué hace.",
    "¿Quién es tu persona famosa favorita? ¿De dónde es?"
  ]
},
{
  id: "a1-art",
  lvl: "A1",
  k: "g",
  t: "Artículos, género y número",
  en: "Articles, gender and number",
  ic: "📚",
  th: `<div class="card"><h2>Los artículos <span class="en">(articles: the / a)</span></h2>
<table><tr><th></th><th>masculino</th><th>femenino</th></tr>
<tr><td>definido singular <i class="en">the</i></td><td>el libro</td><td>la mesa</td></tr>
<tr><td>definido plural <i class="en">the</i></td><td>los libros</td><td>las mesas</td></tr>
<tr><td>indefinido singular <i class="en">a / an</i></td><td>un libro</td><td>una mesa</td></tr>
<tr><td>indefinido plural <i class="en">some</i></td><td>unos libros</td><td>unas mesas</td></tr></table>
<p>Todos los nombres tienen género: masculino o femenino. <span class="en">Every noun is masculine or feminine, even objects.</span></p></div>
<div class="card"><h2>¿Masculino o femenino? <span class="en">(gender)</span></h2>
<p>Normalmente <b class="reg">-o</b> = masculino: el perr<b class="reg">o</b>, el vas<b class="reg">o</b>. <span class="en">Usually -o is masculine.</span><br>
Normalmente <b class="reg">-a</b> = femenino: la cas<b class="reg">a</b>, la sill<b class="reg">a</b>. <span class="en">Usually -a is feminine.</span><br>
<b class="reg">-ción, -dad</b> = femenino: la canción, la ciudad. <span class="en">Words in -ción/-dad are feminine.</span><br>
Excepciones: <span class="irr">el día, el mapa, el problema, la mano, la foto, la moto</span>. <span class="en">Exceptions to learn by heart.</span></p>
<div class="tip"><b>Truco / Trick:</b> Aprende cada palabra nueva con su artículo: no "casa", sino "<b>la</b> casa". <span class="en">Always learn nouns with el/la.</span></div></div>
<div class="card"><h2>El plural y la concordancia <span class="en">(plural and agreement)</span></h2>
<table><tr><th>termina en…</th><th>plural</th><th>ejemplo</th></tr>
<tr><td>vocal</td><td><b class="reg">+s</b></td><td>el gato → los gato<b class="reg">s</b></td></tr>
<tr><td>consonante</td><td><b class="reg">+es</b></td><td>la flor → las flor<b class="reg">es</b></td></tr>
<tr><td>-z</td><td><b class="reg">-ces</b></td><td>el lápiz → los lápi<b class="reg">ces</b></td></tr></table>
<p>El adjetivo concuerda con el nombre: <i>el coche roj<b>o</b>, la casa roj<b>a</b>, los coches roj<b>os</b>, las casas roj<b>as</b></i>. <span class="en">Adjectives agree in gender and number and usually go after the noun.</span><br>
Adjetivos en -e o consonante no cambian de género: <i>un chico inteligente, una chica inteligente</i>. <span class="en">Adjectives in -e don't change for gender.</span></p>
<p>En Latinoamérica se dice <i>el carro</i>; en España, <i>el coche</i>. <span class="en">"Car" varies by region.</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ la problema ✅ <b>el</b> problema <span class="en">the problem</span><br>
❌ las casas blanco ✅ las casas <b>blancas</b> <span class="en">the white houses</span><br>
❌ los lápizes ✅ los <b>lápices</b> <span class="en">the pencils</span></p></div>`,
  voc: [
    ["📖", "el libro", "book"],
    ["🏠", "la casa", "house"],
    ["🐱", "el gato", "cat"],
    ["🌸", "la flor", "flower"],
    ["✏️", "el lápiz", "pencil"],
    ["🗺️", "el mapa", "map"],
    ["✋", "la mano", "hand"],
    ["🏙️", "la ciudad", "city"],
    ["🚗", "el coche", "car (Spain) / el carro (LatAm)"],
    ["🎵", "la canción", "song"]
  ],
  ex: [
    { q: "___ problema es difícil.", o: ["La", "El", "Los"], a: 1, t: "The problem is difficult." },
    { q: "Tengo ___ perro y dos gatos.", o: ["una", "un", "unos"], a: 1, t: "I have a dog and two cats." },
    { q: "Las casas son ___.", o: ["blancos", "blanca", "blancas"], a: 2, t: "The houses are white." },
    { q: "___ ciudad es muy bonita.", o: ["La", "El", "Las"], a: 0, t: "The city is very beautiful." },
    { q: "el lápiz → los ___ (plural)", a: ["lápices"], t: "the pencil → the pencils" },
    { q: "la flor → las ___ (plural)", a: ["flores"], t: "the flower → the flowers" },
    { q: "Es una chica muy ___. (simpático)", a: ["simpática"], t: "She's a very nice girl." },
    { q: "___ mano (el / la)", a: ["la"], t: "the hand (feminine, an exception)" },
    { q: "Necesito ___ libros para clase. (some, unos / unas)", a: ["unos"], t: "I need some books for class." },
    { w: "Los coches rojos son muy rápidos.", t: "The red cars are very fast." },
    { w: "Mi hermana tiene una moto nueva.", t: "My sister has a new motorbike." },
    { w: "Hay unas flores amarillas en la mesa.", t: "There are some yellow flowers on the table." }
  ],
  tx: {
    ti: "Mi habitación nueva",
    b: `Me llamo Valeria y vivo en Quito, Ecuador. Tengo <u>una habitación</u> nueva. Es pequeña, pero muy bonita. Hay <u>una cama</u> grande y <u>un escritorio</u> blanco. En <u>el escritorio</u> hay <u>unos libros</u>, <u>dos lápices</u> y <u>una lámpara</u> azul. En la pared hay <u>un mapa</u> de América del Sur y <u>unas fotos</u> de mis amigos.<br><br><u>La ventana</u> es grande y tiene <u>unas flores</u> rojas. Mi gato, Pepe, duerme en <u>la silla</u>. Es <u>un gato negro</u> y muy perezoso. ¡Me encanta mi habitación!`
  },
  q: [
    ["¿Cómo es la habitación de Valeria?", ["Grande y fea", "Pequeña y bonita", "Vieja y oscura"], 1],
    ["¿Qué hay en la pared?", ["Un mapa y unas fotos", "Una lámpara", "Unas flores"], 0],
    ["¿De qué color es la lámpara?", ["Blanca", "Roja", "Azul"], 2],
    ["¿Dónde duerme el gato?", ["En la cama", "En la silla", "En el escritorio"], 1]
  ],
  sp: [
    "Describe tu habitación: ¿qué hay en ella?",
    "¿Qué cosas hay en tu mochila o bolso?",
    "Di cinco objetos de la clase con el artículo correcto.",
    "¿Cómo es tu casa? Usa tres adjetivos.",
    "¿Tienes animales? ¿Cómo son?",
    "Describe tu ciudad: ¿es grande o pequeña? ¿Qué hay?"
  ]
},
{
  id: "a1-pres",
  lvl: "A1",
  k: "g",
  t: "Presente regular",
  en: "Regular present tense",
  ic: "🗣️",
  th: `<div class="card"><h2>Presente regular <span class="en">(regular present tense)</span></h2>
<p>Hay tres grupos de verbos: <b>-ar</b>, <b>-er</b>, <b>-ir</b>. Quitamos la terminación y añadimos otra. <span class="en">Remove the ending and add the new one.</span></p>
<table><tr><th></th><th>-AR hablar</th><th>-ER comer</th><th>-IR vivir</th></tr>
<tr><td>yo</td><td>habl<b class="reg">o</b></td><td>com<b class="reg">o</b></td><td>viv<b class="reg">o</b></td></tr>
<tr><td>tú</td><td>habl<b class="reg">as</b></td><td>com<b class="reg">es</b></td><td>viv<b class="reg">es</b></td></tr>
<tr><td>él/ella/usted</td><td>habl<b class="reg">a</b></td><td>com<b class="reg">e</b></td><td>viv<b class="reg">e</b></td></tr>
<tr><td>nosotros/as</td><td>habl<b class="reg">amos</b></td><td>com<b class="reg">emos</b></td><td>viv<b class="reg">imos</b></td></tr>
<tr><td>vosotros/as</td><td>habl<b class="reg">áis</b></td><td>com<b class="reg">éis</b></td><td>viv<b class="reg">ís</b></td></tr>
<tr><td>ellos/ustedes</td><td>habl<b class="reg">an</b></td><td>com<b class="reg">en</b></td><td>viv<b class="reg">en</b></td></tr></table>
<p>Otros verbos: trabajar, estudiar, escuchar, beber, leer, aprender, escribir, abrir. <span class="en">work, study, listen, drink, read, learn, write, open.</span></p>
<div class="tip"><b>Truco / Trick:</b> -er y -ir son iguales excepto en <i>nosotros</i> y <i>vosotros</i>: com<b>emos</b> / viv<b>imos</b>. <span class="en">-er and -ir only differ in the "we" and "you all" forms.</span></div></div>
<div class="card"><h2>La negación y las preguntas <span class="en">(negatives and questions)</span></h2>
<p><b>No</b> va antes del verbo: <i>No hablo francés.</i> <span class="en">I don't speak French.</span><br>
Preguntas sí/no: mismo orden, con entonación ↗ y ¿…?: <i>¿Trabajas aquí?</i> <span class="en">Do you work here?</span><br>
Con palabra interrogativa: <i>¿Dónde vives? ¿Qué estudias? ¿Cuándo comes?</i> <span class="en">Where do you live? What do you study? When do you eat?</span><br>
No hay "do/does" en español. <span class="en">Spanish has no auxiliary "do".</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Yo no hablar inglés. ✅ Yo no <b>hablo</b> inglés. <span class="en">I don't speak English.</span><br>
❌ Hablo no alemán. ✅ <b>No hablo</b> alemán. <span class="en">I don't speak German.</span><br>
❌ Nosotros vivemos en Lima. ✅ Nosotros <b>vivimos</b> en Lima. <span class="en">We live in Lima.</span></p></div>`,
  voc: [
    ["💬", "hablar", "to speak"],
    ["💼", "trabajar", "to work"],
    ["📚", "estudiar", "to study"],
    ["🎧", "escuchar", "to listen"],
    ["🍽️", "comer", "to eat"],
    ["🥤", "beber", "to drink"],
    ["📖", "leer", "to read"],
    ["🏡", "vivir", "to live"],
    ["✍️", "escribir", "to write"],
    ["🚪", "abrir", "to open"]
  ],
  ex: [
    { q: "Yo ___ español y portugués.", o: ["habla", "hablo", "hablas"], a: 1, t: "I speak Spanish and Portuguese." },
    { q: "Nosotros ___ en Buenos Aires.", o: ["vivemos", "vivimos", "viven"], a: 1, t: "We live in Buenos Aires." },
    { q: "¿Tú ___ café por la mañana?", o: ["bebes", "bebe", "bebo"], a: 0, t: "Do you drink coffee in the morning?" },
    { q: "Ellos no ___ los sábados.", o: ["trabajamos", "trabajan", "trabaja"], a: 1, t: "They don't work on Saturdays." },
    { q: "Mi hermano ___ medicina. (estudiar)", a: ["estudia"], t: "My brother studies medicine." },
    { q: "Vosotros ___ muchos libros. (leer)", a: ["leéis"], t: "You (all) read a lot of books." },
    { q: "Yo ___ correos todos los días. (escribir)", a: ["escribo"], t: "I write emails every day." },
    { q: "Ustedes ___ música clásica. (escuchar)", a: ["escuchan"], t: "You (all) listen to classical music." },
    { q: "Mi padre ___ fruta. (no + comer)", a: ["no come"], t: "My father doesn't eat fruit." },
    { w: "¿Dónde trabaja tu madre?", t: "Where does your mother work?" },
    { w: "Yo no hablo alemán muy bien.", t: "I don't speak German very well." },
    { w: "Mis amigos comen en un restaurante mexicano.", t: "My friends eat at a Mexican restaurant." }
  ],
  tx: {
    ti: "Una familia en Valencia",
    b: `La familia Ruiz <u>vive</u> en Valencia. El padre, Andrés, <u>trabaja</u> en un banco y <u>habla</u> inglés y francés. La madre, Sofía, es periodista: <u>escribe</u> artículos para un periódico y <u>lee</u> mucho. Los hijos, Lucas y Nerea, <u>estudian</u> en el instituto.<br><br>Por la tarde, Lucas <u>escucha</u> música y Nerea <u>aprende</u> a tocar la guitarra. A las nueve, toda la familia <u>cena</u> junta. Normalmente <u>comen</u> pescado o verduras y <u>beben</u> agua. Lucas <u>no come</u> carne porque es vegetariano. Los domingos, ¿qué <u>hacen</u>? <u>Caminan</u> por la playa.`
  },
  q: [
    ["¿Dónde trabaja Andrés?", ["En un periódico", "En un banco", "En un instituto"], 1],
    ["¿Qué escribe Sofía?", ["Libros", "Canciones", "Artículos"], 2],
    ["¿Por qué Lucas no come carne?", ["Es vegetariano", "No le gusta", "Está enfermo"], 0],
    ["¿Qué hace la familia los domingos?", ["Estudia", "Camina por la playa", "Trabaja"], 1]
  ],
  sp: [
    "¿Dónde vives y con quién?",
    "¿Qué idiomas hablas? ¿Cuáles no hablas?",
    "¿Trabajas o estudias? ¿Qué y dónde?",
    "¿Qué comes y bebes normalmente para cenar?",
    "¿Qué música escuchas? ¿Qué libros lees?",
    "Haz tres preguntas a un compañero con -ar, -er e -ir."
  ]
},
{
  id: "a1-estar",
  lvl: "A1",
  k: "g",
  t: "Estar y hay",
  en: "Estar (to be: location, states) and hay (there is/are)",
  ic: "📍",
  th: `<div class="card"><h2>El verbo ESTAR <span class="en">(to be: where and how)</span></h2>
<table><tr><th>pronombre</th><th>ESTAR</th></tr>
<tr><td>yo</td><td class="irr">estoy</td></tr>
<tr><td>tú</td><td class="irr">estás</td></tr>
<tr><td>él / ella / usted</td><td class="irr">está</td></tr>
<tr><td>nosotros/as</td><td>estamos</td></tr>
<tr><td>vosotros/as</td><td class="irr">estáis</td></tr>
<tr><td>ellos / ustedes</td><td class="irr">están</td></tr></table>
<p>📍 Lugar: El museo está en el centro. <span class="en">The museum is in the centre.</span><br>
😊 Estado: Estoy cansado. ¿Cómo estás? <span class="en">I'm tired. How are you?</span><br>
Estados: bien, mal, contento/a, triste, cansado/a, enfermo/a, nervioso/a. <span class="en">well, bad, happy, sad, tired, ill, nervous.</span></p></div>
<div class="card"><h2>HAY o ESTÁ <span class="en">(there is/are vs. is located)</span></h2>
<p><b>Hay</b> + un/una/unos/números/nada: presenta algo nuevo. <span class="en">"Hay" introduces something (there is / there are). It never changes.</span><br>
Hay un banco en mi calle. <span class="en">There is a bank in my street.</span><br>
Hay tres parques en el barrio. <span class="en">There are three parks in the neighbourhood.</span></p>
<p><b>Está / están</b> + el/la/los/las/mi/nombre propio: localiza algo conocido. <span class="en">Locates something specific.</span><br>
El banco está al lado del hotel. <span class="en">The bank is next to the hotel.</span><br>
Mis llaves están en la mesa. <span class="en">My keys are on the table.</span></p>
<div class="tip"><b>Truco / Trick:</b> ¿Ves <i>un/una</i>? → <b>hay</b>. ¿Ves <i>el/la</i>? → <b>está</b>. <span class="en">Indefinite → hay; definite → está.</span></div></div>
<div class="card"><h3>Preposiciones de lugar <span class="en">(prepositions of place)</span></h3>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>en</td><td>in / on</td></tr><tr><td>encima de</td><td>on top of</td></tr><tr><td>debajo de</td><td>under</td></tr>
<tr><td>al lado de</td><td>next to</td></tr><tr><td>delante de / detrás de</td><td>in front of / behind</td></tr>
<tr><td>entre … y …</td><td>between … and …</td></tr><tr><td>cerca de / lejos de</td><td>near / far from</td></tr></table>
<p><i>de + el = <b>del</b></i>: El gato está debajo <b>del</b> sofá. <span class="en">The cat is under the sofa.</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Está un supermercado aquí. ✅ <b>Hay</b> un supermercado aquí. <span class="en">There's a supermarket here.</span><br>
❌ Hay el museo en la plaza. ✅ El museo <b>está</b> en la plaza. <span class="en">The museum is in the square.</span><br>
❌ Hayn dos camas. ✅ <b>Hay</b> dos camas. <span class="en">There are two beds.</span></p></div>`,
  voc: [
    ["🛋️", "el sofá", "sofa"],
    ["🛏️", "la cama", "bed"],
    ["🔑", "las llaves", "keys"],
    ["🏦", "el banco", "bank"],
    ["🌳", "el parque", "park"],
    ["⬇️", "debajo de", "under"],
    ["↔️", "al lado de", "next to"],
    ["😴", "cansado", "tired"],
    ["😃", "contento", "happy"],
    ["🤒", "enfermo", "ill, sick"]
  ],
  ex: [
    { q: "En mi barrio ___ dos supermercados.", o: ["están", "hay", "es"], a: 1, t: "There are two supermarkets in my neighbourhood." },
    { q: "La farmacia ___ al lado del banco.", o: ["hay", "es", "está"], a: 2, t: "The pharmacy is next to the bank." },
    { q: "¿Cómo ___ tus padres? — Bien, gracias.", o: ["están", "son", "hay"], a: 0, t: "How are your parents? — Fine, thanks." },
    { q: "El perro está ___ la mesa. (under)", o: ["encima de", "debajo de", "lejos de"], a: 1, t: "The dog is under the table." },
    { q: "Hoy yo ___ muy cansada. (estar)", a: ["estoy"], t: "Today I'm very tired." },
    { q: "Nosotros ___ en la playa. (estar)", a: ["estamos"], t: "We are at the beach." },
    { q: "¿___ un cajero automático por aquí? (there is)", a: ["hay"], t: "Is there an ATM around here?" },
    { q: "El hotel está cerca ___ estación. (de + la)", a: ["de la"], t: "The hotel is near the station." },
    { q: "Mi casa está al lado ___ parque. (de + el)", a: ["del"], t: "My house is next to the park." },
    { w: "Las llaves están encima de la mesa.", t: "The keys are on the table." },
    { w: "Hay un parque muy grande aquí.", t: "There is a very big park here." },
    { w: "¿Dónde está la estación de tren?", t: "Where is the train station?" }
  ],
  tx: {
    ti: "Mi barrio en Ciudad de México",
    b: `Me llamo Tomás y vivo en Coyoacán, un barrio de Ciudad de México. Mi casa <u>está</u> en una calle tranquila. En mi calle <u>hay</u> una panadería, una farmacia y un café pequeño. La panadería <u>está</u> <u>al lado de</u> mi casa y el café <u>está</u> <u>enfrente</u>.<br><br><u>Hay</u> un mercado muy grande <u>cerca de</u> la plaza. Allí <u>hay</u> frutas, flores y comida típica. El museo de Frida Kahlo también <u>está</u> en mi barrio. Hoy <u>estoy</u> muy <u>contento</u> porque mis amigos de Guadalajara <u>están</u> aquí de visita. ¡Vamos al mercado!`
  },
  q: [
    ["¿Dónde está la casa de Tomás?", ["En una calle tranquila", "En la plaza", "Lejos del centro"], 0],
    ["¿Qué está al lado de su casa?", ["El café", "La panadería", "El museo"], 1],
    ["¿Qué hay en el mercado?", ["Libros y ropa", "Frutas, flores y comida", "Coches"], 1],
    ["¿Por qué está contento Tomás?", ["Porque no trabaja", "Porque es su cumpleaños", "Porque sus amigos están de visita"], 2]
  ],
  sp: [
    "¿Cómo estás hoy? ¿Por qué?",
    "¿Qué hay en tu barrio? ¿Qué no hay?",
    "¿Dónde está tu casa? ¿Qué hay cerca?",
    "Describe tu habitación: ¿dónde están la cama, la mesa y la ventana?",
    "Pregunta a un turista: ¿dónde está…? ¿Hay… cerca?",
    "¿Dónde estás normalmente los sábados por la tarde?"
  ]
},
{
  id: "a1-irr",
  lvl: "A1",
  k: "g",
  t: "Presente irregular: e>ie, o>ue, e>i",
  en: "Irregular present: stem-changing verbs",
  ic: "🔄",
  th: `<div class="card"><h2>Verbos con cambio vocálico <span class="en">(stem-changing verbs)</span></h2>
<p>La vocal de la raíz cambia en todas las personas <b>excepto nosotros y vosotros</b>. <span class="en">The stem vowel changes except in the "we" and "you all" forms (the "boot" verbs).</span></p>
<table><tr><th></th><th>e→ie querer</th><th>o→ue poder</th><th>o→ue dormir</th><th>e→i pedir</th><th>u→ue jugar</th></tr>
<tr><td>yo</td><td class="irr">quiero</td><td class="irr">puedo</td><td class="irr">duermo</td><td class="irr">pido</td><td class="irr">juego</td></tr>
<tr><td>tú</td><td class="irr">quieres</td><td class="irr">puedes</td><td class="irr">duermes</td><td class="irr">pides</td><td class="irr">juegas</td></tr>
<tr><td>él/ella</td><td class="irr">quiere</td><td class="irr">puede</td><td class="irr">duerme</td><td class="irr">pide</td><td class="irr">juega</td></tr>
<tr><td>nosotros</td><td>queremos</td><td>podemos</td><td>dormimos</td><td>pedimos</td><td>jugamos</td></tr>
<tr><td>vosotros</td><td>queréis</td><td>podéis</td><td>dormís</td><td>pedís</td><td>jugáis</td></tr>
<tr><td>ellos</td><td class="irr">quieren</td><td class="irr">pueden</td><td class="irr">duermen</td><td class="irr">piden</td><td class="irr">juegan</td></tr></table>
<p>Más verbos: e→ie <i>empezar, pensar, preferir, cerrar</i>; o→ue <i>volver, encontrar, costar</i>; e→i <i>repetir, servir</i>. <span class="en">More verbs of each group.</span></p>
<div class="tip"><b>Truco / Trick:</b> Dibuja una bota 👢 alrededor de yo, tú, él y ellos: dentro de la bota la vocal cambia. <span class="en">Draw a boot around the changing forms.</span></div></div>
<div class="card"><h2>Irregulares en la forma <i>yo</i> <span class="en">(irregular "I" forms)</span></h2>
<table><tr><th>verbo</th><th>yo</th><th>tú</th><th>él</th><th>nosotros</th><th>ellos</th></tr>
<tr><td>hacer <i class="en">do/make</i></td><td class="irr">hago</td><td>haces</td><td>hace</td><td>hacemos</td><td>hacen</td></tr>
<tr><td>salir <i class="en">go out</i></td><td class="irr">salgo</td><td>sales</td><td>sale</td><td>salimos</td><td>salen</td></tr>
<tr><td>poner <i class="en">put</i></td><td class="irr">pongo</td><td>pones</td><td>pone</td><td>ponemos</td><td>ponen</td></tr>
<tr><td>tener <i class="en">have</i></td><td class="irr">tengo</td><td class="irr">tienes</td><td class="irr">tiene</td><td>tenemos</td><td class="irr">tienen</td></tr>
<tr><td>venir <i class="en">come</i></td><td class="irr">vengo</td><td class="irr">vienes</td><td class="irr">viene</td><td>venimos</td><td class="irr">vienen</td></tr></table>
<p><i>Tener</i> y <i>venir</i> tienen dos irregularidades: -go en yo y e→ie. <span class="en">Tener and venir are doubly irregular.</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Yo podo nadar. ✅ Yo <b>puedo</b> nadar. <span class="en">I can swim.</span><br>
❌ Nosotros quieremos. ✅ Nosotros <b>queremos</b>. <span class="en">No change with "nosotros".</span><br>
❌ Yo tieno un perro. ✅ Yo <b>tengo</b> un perro. <span class="en">I have a dog.</span></p></div>`,
  voc: [
    ["❤️", "querer", "to want / to love"],
    ["💪", "poder", "can, to be able to"],
    ["😴", "dormir", "to sleep"],
    ["🙋", "pedir", "to ask for, to order"],
    ["⚽", "jugar", "to play"],
    ["🛠️", "hacer", "to do / to make"],
    ["🚪", "salir", "to go out, to leave"],
    ["📥", "poner", "to put"],
    ["🤲", "tener", "to have"],
    ["🏃", "venir", "to come"]
  ],
  ex: [
    { q: "Yo ___ ocho horas cada noche.", o: ["dormo", "duermo", "duerme"], a: 1, t: "I sleep eight hours every night." },
    { q: "Nosotros ___ ir al cine.", o: ["queremos", "quieremos", "quieren"], a: 0, t: "We want to go to the cinema." },
    { q: "Mis hijos ___ al fútbol los sábados.", o: ["jugan", "juegamos", "juegan"], a: 2, t: "My children play football on Saturdays." },
    { q: "Yo ___ de casa a las ocho.", o: ["salo", "salgo", "sale"], a: 1, t: "I leave home at eight." },
    { q: "¿Tú ___ hablar más despacio? (poder)", a: ["puedes"], t: "Can you speak more slowly?" },
    { q: "En el restaurante, ella siempre ___ pescado. (pedir)", a: ["pide"], t: "At the restaurant she always orders fish." },
    { q: "Yo ___ los deberes por la tarde. (hacer)", a: ["hago"], t: "I do my homework in the afternoon." },
    { q: "Yo ___ dos hermanas. (tener)", a: ["tengo"], t: "I have two sisters." },
    { q: "¿___ (vosotros) a la fiesta esta noche? (venir)", a: ["venís"], t: "Are you (all) coming to the party tonight?" },
    { w: "Yo pongo la mesa a las nueve.", t: "I set the table at nine." },
    { w: "¿A qué hora empieza la película?", t: "What time does the film start?" },
    { w: "Mi abuelo duerme la siesta todos los días.", t: "My grandfather takes a nap every day." }
  ],
  tx: {
    ti: "Un sábado con Camila",
    b: `Camila tiene veinte años y vive en Montevideo. Los sábados no <u>tiene</u> clase, así que <u>duerme</u> hasta las diez. Después <u>hace</u> el desayuno y <u>pone</u> música. A las doce <u>sale</u> con su hermano Mateo. Ellos <u>juegan</u> al tenis en un parque.<br><br>Por la tarde, sus amigos <u>vienen</u> a su casa. Todos <u>quieren</u> ver una película, pero no <u>pueden</u> decidir cuál. Al final, <u>piden</u> una pizza y <u>juegan</u> a las cartas. Camila dice: "Yo <u>prefiero</u> los sábados tranquilos". La noche <u>empieza</u> tarde y <u>vuelven</u> a casa a la una.`
  },
  q: [
    ["¿Hasta qué hora duerme Camila los sábados?", ["Hasta las ocho", "Hasta las diez", "Hasta las doce"], 1],
    ["¿Qué hace con su hermano?", ["Juega al tenis", "Ve una película", "Hace la comida"], 0],
    ["¿Qué piden los amigos?", ["Sushi", "Una pizza", "Hamburguesas"], 1],
    ["¿Qué prefiere Camila?", ["Las fiestas grandes", "Los sábados tranquilos", "Salir a bailar"], 1]
  ],
  sp: [
    "¿Cuántas horas duermes normalmente?",
    "¿Qué quieres hacer este fin de semana?",
    "¿Qué puedes hacer muy bien? ¿Qué no puedes hacer?",
    "¿Juegas a algún deporte? ¿Cuándo y con quién?",
    "¿A qué hora sales de casa por la mañana? ¿Qué haces después?",
    "Estás en un restaurante: ¿qué pides normalmente?"
  ]
},
{
  id: "a1-refl",
  lvl: "A1",
  k: "g",
  t: "Verbos reflexivos y la rutina",
  en: "Reflexive verbs and daily routine",
  ic: "⏰",
  th: `<div class="card"><h2>Verbos reflexivos <span class="en">(reflexive verbs)</span></h2>
<p>Muchos verbos de la rutina llevan un pronombre: <b>me, te, se, nos, os, se</b>. La acción es sobre uno mismo. <span class="en">The action falls on the subject itself (I wash myself).</span></p>
<table><tr><th>pronombre</th><th>levantarse</th><th>ducharse</th><th>acostarse (o→ue)</th></tr>
<tr><td>yo</td><td><b class="reg">me</b> levanto</td><td><b class="reg">me</b> ducho</td><td><b class="reg">me</b> <span class="irr">acuesto</span></td></tr>
<tr><td>tú</td><td><b class="reg">te</b> levantas</td><td><b class="reg">te</b> duchas</td><td><b class="reg">te</b> <span class="irr">acuestas</span></td></tr>
<tr><td>él/ella/usted</td><td><b class="reg">se</b> levanta</td><td><b class="reg">se</b> ducha</td><td><b class="reg">se</b> <span class="irr">acuesta</span></td></tr>
<tr><td>nosotros/as</td><td><b class="reg">nos</b> levantamos</td><td><b class="reg">nos</b> duchamos</td><td><b class="reg">nos</b> acostamos</td></tr>
<tr><td>vosotros/as</td><td><b class="reg">os</b> levantáis</td><td><b class="reg">os</b> ducháis</td><td><b class="reg">os</b> acostáis</td></tr>
<tr><td>ellos/ustedes</td><td><b class="reg">se</b> levantan</td><td><b class="reg">se</b> duchan</td><td><b class="reg">se</b> <span class="irr">acuestan</span></td></tr></table>
<p>Otros: despertarse (e→ie: me <span class="irr">despierto</span>), lavarse, vestirse (e→i: me <span class="irr">visto</span>), peinarse, cepillarse los dientes. <span class="en">wake up, wash, get dressed, comb one's hair, brush one's teeth.</span></p>
<div class="tip"><b>Truco / Trick:</b> El pronombre va <b>antes</b> del verbo conjugado, pero <b>pegado</b> al infinitivo: <i>Me ducho</i> / <i>Quiero ducharme</i>. <span class="en">Before a conjugated verb, attached to an infinitive.</span></div></div>
<div class="card"><h2>La hora y las expresiones de tiempo <span class="en">(time expressions)</span></h2>
<p>¿A qué hora te levantas? — <b>A las</b> siete. <span class="en">What time do you get up? — At seven.</span><br>
a la una, a las dos y media, a las ocho menos cuarto <span class="en">at one, at half past two, at quarter to eight</span><br>
por la mañana / por la tarde / por la noche <span class="en">in the morning / afternoon / at night</span><br>
primero, luego, después, más tarde, antes de, después de <span class="en">first, then, after that, later, before, after</span><br>
siempre, normalmente, a veces, nunca <span class="en">always, usually, sometimes, never</span></p>
<p>En Latinoamérica se dice <i>en la mañana / en la tarde</i>. <span class="en">"en la mañana" is common in Latin America.</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Yo levanto a las siete. ✅ Yo <b>me</b> levanto a las siete. <span class="en">I get up at seven.</span><br>
❌ Me lavo mis dientes. ✅ Me lavo <b>los</b> dientes. <span class="en">I brush my teeth (article, not possessive).</span><br>
❌ Nosotros se duchamos. ✅ Nosotros <b>nos</b> duchamos. <span class="en">We shower.</span></p></div>`,
  voc: [
    ["⏰", "despertarse", "to wake up"],
    ["🛌", "levantarse", "to get up"],
    ["🚿", "ducharse", "to have a shower"],
    ["🪥", "cepillarse los dientes", "to brush one's teeth"],
    ["👕", "vestirse", "to get dressed"],
    ["💇", "peinarse", "to comb one's hair"],
    ["🧼", "lavarse las manos", "to wash one's hands"],
    ["😴", "acostarse", "to go to bed"],
    ["☕", "desayunar", "to have breakfast"],
    ["🌙", "por la noche", "at night"]
  ],
  ex: [
    { q: "Yo ___ levanto a las siete.", o: ["me", "se", "te"], a: 0, t: "I get up at seven." },
    { q: "¿A qué hora ___ acuestas?", o: ["se", "te", "nos"], a: 1, t: "What time do you go to bed?" },
    { q: "Mis hermanos ___ duchan por la noche.", o: ["nos", "os", "se"], a: 2, t: "My brothers shower at night." },
    { q: "Ella se ___ muy rápido. (vestirse)", o: ["viste", "veste", "vista"], a: 0, t: "She gets dressed very quickly." },
    { q: "Nosotros ___ levantamos temprano. (pronombre)", a: ["nos"], t: "We get up early." },
    { q: "Yo me ___ a las once y media. (acostarse)", a: ["acuesto"], t: "I go to bed at half past eleven." },
    { q: "Mi padre se ___ a las seis. (despertarse)", a: ["despierta"], t: "My father wakes up at six." },
    { q: "Llego a clase ___ las nueve. (at)", a: ["a"], t: "I arrive at class at nine." },
    { q: "Antes de comer, me lavo ___ manos. (the)", a: ["las"], t: "Before eating, I wash my hands." },
    { w: "Primero me ducho y luego desayuno.", t: "First I shower and then I have breakfast." },
    { w: "Normalmente me acuesto a las once.", t: "I usually go to bed at eleven." },
    { w: "¿A qué hora te levantas los domingos?", t: "What time do you get up on Sundays?" }
  ],
  tx: {
    ti: "La rutina de Javier",
    b: `Javier es enfermero en un hospital de Bilbao. De lunes a viernes <u>se despierta</u> a las seis menos cuarto. Primero <u>se ducha</u> con agua fría y <u>se viste</u>. Luego desayuna un café con leche y tostadas. <u>Se cepilla los dientes</u> y sale de casa a las seis y media.<br><br>Trabaja <u>por la mañana</u> y vuelve a casa a las tres. <u>Por la tarde</u> descansa, lee o pasea con su perra, Luna. Cena a las nueve y <u>se acuesta</u> a las diez y media. Los fines de semana es diferente: <u>se levanta</u> tarde, a las diez, y <u>nunca</u> pone el despertador.`
  },
  q: [
    ["¿A qué hora se despierta Javier entre semana?", ["A las 5:45", "A las 6:30", "A las 10:00"], 0],
    ["¿Qué hace primero?", ["Desayuna", "Se ducha", "Pasea al perro"], 1],
    ["¿Cuándo vuelve a casa?", ["A las nueve", "A las tres", "A las diez y media"], 1],
    ["¿Qué hace los fines de semana?", ["Se levanta tarde", "Trabaja en el hospital", "Se acuesta temprano"], 0]
  ],
  sp: [
    "¿A qué hora te levantas de lunes a viernes?",
    "Describe tu rutina de la mañana: primero, luego, después…",
    "¿Te duchas por la mañana o por la noche?",
    "¿A qué hora te acuestas normalmente? ¿Y los sábados?",
    "¿Qué haces por la tarde después del trabajo o de clase?",
    "Compara tu rutina de lunes y tu rutina de domingo."
  ]
},
{
  id: "a1-gustar",
  lvl: "A1",
  k: "g",
  t: "Gustar, encantar y doler",
  en: "To like, to love and to hurt",
  ic: "😍",
  th: `<div class="card"><h2>El verbo GUSTAR <span class="en">(to like: literally "to please")</span></h2>
<p>Con <i>gustar</i>, la cosa que gusta es el sujeto. El verbo concuerda con la cosa, no con la persona. <span class="en">The thing liked is the subject; the verb agrees with it.</span></p>
<table><tr><th>(a + persona)</th><th>pronombre</th><th>+ singular / infinitivo</th><th>+ plural</th></tr>
<tr><td>(a mí)</td><td><b class="reg">me</b></td><td>gusta</td><td>gustan</td></tr>
<tr><td>(a ti)</td><td><b class="reg">te</b></td><td>gusta</td><td>gustan</td></tr>
<tr><td>(a él / ella / usted)</td><td><b class="reg">le</b></td><td>gusta</td><td>gustan</td></tr>
<tr><td>(a nosotros/as)</td><td><b class="reg">nos</b></td><td>gusta</td><td>gustan</td></tr>
<tr><td>(a vosotros/as)</td><td><b class="reg">os</b></td><td>gusta</td><td>gustan</td></tr>
<tr><td>(a ellos / ustedes)</td><td><b class="reg">les</b></td><td>gusta</td><td>gustan</td></tr></table>
<p>Me gusta el chocolate. <span class="en">I like chocolate.</span><br>
Me gustan los gatos. <span class="en">I like cats.</span><br>
Nos gusta bailar. <span class="en">We like dancing (infinitive = singular).</span><br>
A Marta le gusta el cine. <span class="en">Marta likes cinema.</span></p></div>
<div class="card"><h2>Encantar y doler <span class="en">(to love / to hurt)</span></h2>
<p><b>Encantar</b> = gustar mucho: Me encanta la playa. Me encantan los tacos. <span class="en">I love the beach. I love tacos.</span><br>
No se dice "me encanta mucho". <span class="en">"Encantar" is already strong.</span><br>
<b>Doler</b> (o→ue) funciona igual: Me <span class="irr">duele</span> la cabeza. Me <span class="irr">duelen</span> los pies. <span class="en">I have a headache. My feet hurt.</span></p>
<div class="tip"><b>Truco / Trick:</b> Piensa "X <i>me gusta</i>" = "X pleases me". Si X es plural → <b>gustan</b>. <span class="en">Plural thing → plural verb.</span></div></div>
<div class="card"><h3>Reaccionar <span class="en">(agreeing and disagreeing)</span></h3>
<table><tr><th>frase</th><th>respuesta igual</th><th>respuesta diferente</th></tr>
<tr><td>Me gusta el café. 😊</td><td>A mí <b>también</b>. <span class="en">Me too.</span></td><td>A mí <b>no</b>. <span class="en">I don't.</span></td></tr>
<tr><td>No me gusta el café. 😕</td><td>A mí <b>tampoco</b>. <span class="en">Me neither.</span></td><td>A mí <b>sí</b>. <span class="en">I do.</span></td></tr></table>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Yo gusto el chocolate. ✅ <b>Me gusta</b> el chocolate. <span class="en">I like chocolate.</span><br>
❌ Me gusta los perros. ✅ Me <b>gustan</b> los perros. <span class="en">I like dogs.</span><br>
❌ A Juan gusta leer. ✅ A Juan <b>le</b> gusta leer. <span class="en">Juan likes reading.</span><br>
❌ No me gusta. — A mí también. ✅ A mí <b>tampoco</b>. <span class="en">Me neither.</span></p></div>`,
  voc: [
    ["👍", "gustar", "to like"],
    ["😍", "encantar", "to love (things)"],
    ["🤕", "doler", "to hurt"],
    ["🤯", "la cabeza", "head"],
    ["🦶", "los pies", "feet"],
    ["🍫", "el chocolate", "chocolate"],
    ["💃", "bailar", "to dance"],
    ["🏖️", "la playa", "beach"],
    ["🙌", "también", "also, too"],
    ["🙅", "tampoco", "neither, not either"]
  ],
  ex: [
    { q: "Me ___ los perros.", o: ["gusta", "gustan", "gusto"], a: 1, t: "I like dogs." },
    { q: "A mi madre ___ gusta cocinar.", o: ["le", "les", "me"], a: 0, t: "My mother likes cooking." },
    { q: "No me gusta el fútbol. — A mí ___.", o: ["también", "tampoco", "sí también"], a: 1, t: "I don't like football. — Me neither." },
    { q: "Me ___ la cabeza.", o: ["duelo", "duele", "duelen"], a: 1, t: "I have a headache." },
    { q: "A nosotros ___ encanta viajar. (pronombre)", a: ["nos"], t: "We love travelling." },
    { q: "¿Te ___ las películas de terror? (gustar)", a: ["gustan"], t: "Do you like horror films?" },
    { q: "A mis abuelos ___ gusta pasear. (pronombre)", a: ["les"], t: "My grandparents like going for walks." },
    { q: "Después del partido, me ___ las piernas. (doler)", a: ["duelen"], t: "After the match my legs hurt." },
    { q: "Me gusta la música latina. — A mí ___. (too)", a: ["también"], t: "I like Latin music. — Me too." },
    { w: "A mi hermano le encanta el chocolate.", t: "My brother loves chocolate." },
    { w: "¿Os gustan las fiestas de cumpleaños?", t: "Do you (all) like birthday parties?" },
    { w: "No me gusta levantarme temprano.", t: "I don't like getting up early." }
  ],
  tx: {
    ti: "Dos amigas muy diferentes",
    b: `Inés y Carmen son amigas, pero son muy diferentes. A Inés <u>le encanta</u> la naturaleza: <u>le gusta</u> caminar por la montaña y <u>le gustan</u> mucho los animales. A Carmen <u>no le gusta</u> el campo; <u>le encantan</u> las ciudades grandes, los museos y las tiendas.<br><br>Las dos tienen algo en común: <u>les gusta</u> mucho la comida peruana. "<u>Me encanta</u> el ceviche", dice Inés. "¡<u>A mí también</u>!", responde Carmen. Hoy no salen porque a Carmen <u>le duele</u> la cabeza y a Inés <u>le duelen</u> los pies. "<u>No me gusta</u> estar en casa", dice Carmen. "<u>A mí tampoco</u>", dice Inés.`
  },
  q: [
    ["¿Qué le encanta a Inés?", ["Las tiendas", "La naturaleza", "Los museos"], 1],
    ["¿Qué les gusta a las dos?", ["La comida peruana", "La montaña", "Las ciudades"], 0],
    ["¿Qué le duele a Carmen?", ["Los pies", "La espalda", "La cabeza"], 2],
    ["¿Qué significa \"A mí tampoco\" en el texto?", ["A Inés tampoco le gusta estar en casa", "A Inés le gusta estar en casa", "Inés quiere salir sola"], 0]
  ],
  sp: [
    "¿Qué te gusta hacer los fines de semana?",
    "¿Qué comida te encanta? ¿Qué comida no te gusta?",
    "¿Qué música les gusta a tus amigos?",
    "Di tres cosas que no te gustan. Tu compañero responde con \"a mí también / tampoco\".",
    "¿Qué te duele cuando haces mucho deporte?",
    "¿Qué le gusta a tu mejor amigo/a? ¿Y a ti?"
  ]
},
{
  id: "a1-ira",
  lvl: "A1",
  k: "g",
  t: "Ir a + infinitivo",
  en: "Going to + infinitive (future plans)",
  ic: "🗓️",
  th: `<div class="card"><h2>Ir a + infinitivo <span class="en">(going to + verb)</span></h2>
<p>Para hablar de planes e intenciones usamos el verbo <b>ir</b> + <b>a</b> + infinitivo. <span class="en">Used for plans and intentions, like "going to".</span></p>
<table><tr><th>pronombre</th><th>IR</th><th></th><th>infinitivo</th></tr>
<tr><td>yo</td><td class="irr">voy</td><td>a</td><td>estudiar</td></tr>
<tr><td>tú</td><td class="irr">vas</td><td>a</td><td>comer</td></tr>
<tr><td>él / ella / usted</td><td class="irr">va</td><td>a</td><td>viajar</td></tr>
<tr><td>nosotros/as</td><td class="irr">vamos</td><td>a</td><td>salir</td></tr>
<tr><td>vosotros/as</td><td class="irr">vais</td><td>a</td><td>ver</td></tr>
<tr><td>ellos / ustedes</td><td class="irr">van</td><td>a</td><td>dormir</td></tr></table>
<p>Voy a visitar a mis abuelos. <span class="en">I'm going to visit my grandparents.</span><br>
¿Qué vas a hacer mañana? <span class="en">What are you going to do tomorrow?</span><br>
No vamos a trabajar el domingo. <span class="en">We aren't going to work on Sunday.</span><br>
¡Vamos a bailar! <span class="en">Let's dance!</span></p>
<div class="tip"><b>Truco / Trick:</b> Solo conjugas <i>ir</i>; el segundo verbo siempre está en infinitivo. Con reflexivos: <i>Voy a ducharme</i>. <span class="en">Only "ir" changes; the second verb stays in the infinitive.</span></div></div>
<div class="card"><h2>Expresiones de futuro <span class="en">(future time expressions)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>esta tarde / esta noche</td><td>this afternoon / tonight</td></tr>
<tr><td>mañana / pasado mañana</td><td>tomorrow / the day after tomorrow</td></tr>
<tr><td>mañana por la mañana</td><td>tomorrow morning</td></tr>
<tr><td>este fin de semana / este verano</td><td>this weekend / this summer</td></tr>
<tr><td>el próximo lunes / la próxima semana</td><td>next Monday / next week</td></tr>
<tr><td>el mes que viene / el año que viene</td><td>next month / next year</td></tr></table>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Voy estudiar. ✅ Voy <b>a</b> estudiar. <span class="en">I'm going to study.</span><br>
❌ Vamos a comemos. ✅ Vamos a <b>comer</b>. <span class="en">We are going to eat.</span><br>
❌ el próxima semana ✅ <b>la próxima</b> semana <span class="en">next week</span></p></div>`,
  voc: [
    ["🚶", "ir a", "to be going to"],
    ["✈️", "viajar", "to travel"],
    ["🌅", "mañana", "tomorrow"],
    ["🌆", "esta tarde", "this afternoon"],
    ["🌃", "esta noche", "tonight"],
    ["📅", "la próxima semana", "next week"],
    ["🎉", "el fin de semana", "weekend"],
    ["☀️", "el verano", "summer"],
    ["🧳", "las vacaciones", "holidays, vacation"],
    ["🗓️", "el año que viene", "next year"]
  ],
  ex: [
    { q: "Mañana yo ___ a estudiar en la biblioteca.", o: ["voy", "va", "vamos"], a: 0, t: "Tomorrow I'm going to study in the library." },
    { q: "¿Qué ___ a hacer tú este fin de semana?", o: ["vas", "va", "van"], a: 0, t: "What are you going to do this weekend?" },
    { q: "Ellos van a ___ a Cancún en agosto.", o: ["viajan", "viajar", "viajando"], a: 1, t: "They're going to travel to Cancún in August." },
    { q: "___ próximo martes tengo un examen.", o: ["La", "El", "Los"], a: 1, t: "Next Tuesday I have an exam." },
    { q: "Nosotros ___ a cenar en casa de Lola. (ir)", a: ["vamos"], t: "We are going to have dinner at Lola's house." },
    { q: "Vosotros ___ a ver la final, ¿no? (ir)", a: ["vais"], t: "You (all) are going to watch the final, aren't you?" },
    { q: "Mi hermana va ___ comprar un coche. (preposición)", a: ["a"], t: "My sister is going to buy a car." },
    { q: "Esta noche no voy a ___ la tele. (ver)", a: ["ver"], t: "Tonight I'm not going to watch TV." },
    { q: "Usted ___ a necesitar el pasaporte. (ir)", a: ["va"], t: "You are going to need your passport." },
    { w: "Esta tarde voy a jugar al fútbol.", t: "This afternoon I'm going to play football." },
    { w: "¿Qué vais a hacer el próximo verano?", t: "What are you (all) going to do next summer?" },
    { w: "Mis padres van a visitar Cartagena.", t: "My parents are going to visit Cartagena." }
  ],
  tx: {
    ti: "Planes para el puente",
    b: `Hola, Marina:<br><br>¡Tengo muchos planes para el puente! El viernes <u>voy a terminar</u> el trabajo pronto y <u>esta noche</u> <u>voy a hacer</u> la maleta. <u>Mañana por la mañana</u> Raúl y yo <u>vamos a tomar</u> el tren a Granada. Allí <u>vamos a visitar</u> la Alhambra y <u>vamos a comer</u> tapas en el Albaicín. El sábado por la noche mis primos <u>van a cantar</u> en un concierto de flamenco.<br><br>El domingo <u>no vamos a hacer</u> nada especial: <u>vamos a descansar</u>. Y tú, ¿qué <u>vas a hacer</u>? ¿<u>Vas a venir</u> a Granada <u>el próximo mes</u>?<br><br>Un abrazo,<br>Noelia`
  },
  q: [
    ["¿Qué va a hacer Noelia esta noche?", ["Ir a un concierto", "Hacer la maleta", "Comer tapas"], 1],
    ["¿Cómo van a viajar a Granada?", ["En tren", "En coche", "En avión"], 0],
    ["¿Quiénes van a cantar?", ["Raúl y Noelia", "Marina", "Los primos de Noelia"], 2],
    ["¿Qué van a hacer el domingo?", ["Visitar la Alhambra", "Descansar", "Volver al trabajo"], 1]
  ],
  sp: [
    "¿Qué vas a hacer esta tarde?",
    "¿Qué planes tienes para este fin de semana?",
    "¿Adónde vas a ir de vacaciones el próximo verano?",
    "¿Qué vas a cenar esta noche?",
    "Cuenta tres cosas que vas a hacer el año que viene.",
    "Invita a un amigo a un plan: ¿qué vamos a hacer, dónde y cuándo?"
  ]
}
);
