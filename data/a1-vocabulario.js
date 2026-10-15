/* Camino al Español · Nivel A1 · contenido */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "a1-saludos",
  lvl: "A1",
  k: "v",
  t: "Saludos y presentaciones",
  en: "Greetings and introductions",
  ic: "👋",
  th: `<div class="card"><h2>Saludar y despedirse <span class="en">(saying hello and goodbye)</span></h2>
<table><tr><th>Español</th><th>English</th><th>¿Cuándo? <span class="en">(when?)</span></th></tr>
<tr><td>¡Hola!</td><td>Hello! / Hi!</td><td>siempre <span class="en">(always)</span></td></tr>
<tr><td>Buenos días</td><td>Good morning</td><td>por la mañana, hasta la comida <span class="en">(until lunch)</span></td></tr>
<tr><td>Buenas tardes</td><td>Good afternoon / evening</td><td>por la tarde <span class="en">(afternoon)</span></td></tr>
<tr><td>Buenas noches</td><td>Good evening / Good night</td><td>por la noche <span class="en">(at night)</span></td></tr>
<tr><td>Adiós</td><td>Goodbye</td><td>siempre</td></tr>
<tr><td>Hasta luego / Hasta mañana</td><td>See you later / See you tomorrow</td><td>siempre</td></tr>
<tr><td>Chao / Chau</td><td>Bye</td><td>informal, muy común en Latinoamérica</td></tr></table>
<p>¿Qué tal? <span class="en">How are you? / How's it going?</span> — Bien, gracias. ¿Y tú? <span class="en">Fine, thanks. And you?</span><br>¿Cómo estás? <span class="en">How are you?</span> — Muy bien. / Regular. / Mal. <span class="en">Very well. / So-so. / Bad.</span></p></div>
<div class="card"><h3>Presentarse <span class="en">(introducing yourself)</span></h3>
<p>Me llamo Lucía. <span class="en">My name is Lucía.</span><br>Soy de México. <span class="en">I'm from Mexico.</span><br>Tengo veinte años. <span class="en">I'm twenty years old.</span><br>Vivo en Madrid. <span class="en">I live in Madrid.</span><br>Te presento a mi amigo Pablo. <span class="en">Let me introduce my friend Pablo.</span><br>¡Mucho gusto! / ¡Encantado! / ¡Encantada! <span class="en">Nice to meet you!</span></p>
<div class="tip"><b>Truco / Trick:</b> A man says <b>encantado</b>, a woman says <b>encantada</b>. <b>Mucho gusto</b> works for everybody. In Spain, people often greet with <b>dos besos</b> 😘😘 (two kisses on the cheeks); in much of Latin America, one kiss.</div></div>
<div class="card"><h3>Tú o usted <span class="en">(informal or formal "you")</span></h3>
<table><tr><th></th><th>Informal (tú)</th><th>Formal (usted)</th></tr>
<tr><td>Name</td><td>¿Cómo te llamas?</td><td>¿Cómo se llama?</td></tr>
<tr><td>Origin</td><td>¿De dónde eres?</td><td>¿De dónde es?</td></tr>
<tr><td>How are you?</td><td>¿Cómo estás?</td><td>¿Cómo está?</td></tr></table>
<p>Use <b>tú</b> with friends, family and young people. Use <b>usted</b> with older people, at work or with strangers. In Latin America, <b>usted</b> is more common than in Spain. For a group: <b>vosotros</b> (Spain, informal) / <b>ustedes</b> (formal, and everywhere in Latin America).</p>
<h3>Cortesía <span class="en">(courtesy)</span></h3>
<p>Por favor <span class="en">please</span> · Gracias <span class="en">thank you</span> · De nada <span class="en">you're welcome</span> · Perdón / Disculpe <span class="en">sorry / excuse me</span> · Lo siento <span class="en">I'm sorry</span></p></div>`,
  voc: [
    ["👋", "hola", "hello"],
    ["🌅", "buenos días", "good morning"],
    ["🌇", "buenas tardes", "good afternoon"],
    ["🌙", "buenas noches", "good evening / good night"],
    ["🚶", "adiós", "goodbye"],
    ["🔜", "hasta luego", "see you later"],
    ["🙏", "por favor", "please"],
    ["💐", "gracias", "thank you"],
    ["😊", "de nada", "you're welcome"],
    ["😔", "lo siento", "I'm sorry"],
    ["🤝", "mucho gusto", "nice to meet you"],
    ["🏷️", "el nombre", "name"],
    ["🔤", "el apellido", "surname"],
    ["🌎", "el país", "country"],
    ["🧑‍🤝‍🧑", "el amigo / la amiga", "friend"],
    ["🧓", "usted", "you (formal)"],
    ["😘", "el beso", "kiss"]
  ],
  ex: [
    { q: "Son las nueve de la mañana. Dices: «___».", o: ["Buenos días", "Buenas noches", "Buenas tardes"], a: 0, t: "It's 9 a.m.: Good morning." },
    { q: "—Gracias. —___.", o: ["De nada", "Lo siento", "Hasta luego"], a: 0, t: "Thank you. — You're welcome." },
    { q: "Hablas con tu profesor mayor: «¿Cómo ___ usted?»", o: ["está", "estás", "estáis"], a: 0, t: "How are you? (formal: usted + está)" },
    { q: "Ana es una mujer. Dice: «¡___!»", o: ["Encantada", "Encantado", "Encantados"], a: 0, t: "A woman says 'encantada'." },
    { q: "¿Cómo te ___? — Me llamo Diego.", a: ["llamas"], t: "What's your name? — My name is Diego." },
    { q: "¿De dónde ___? — Soy de Colombia. (ser, tú)", a: ["eres"], t: "Where are you from? — I'm from Colombia." },
    { q: "—Adiós, hasta ___. (see you later)", a: ["luego"], t: "Goodbye, see you later." },
    { q: "Mucho ___. (nice to meet you)", a: ["gusto"], t: "Nice to meet you." },
    { w: "Me llamo Carmen y soy de Sevilla.", t: "My name is Carmen and I'm from Seville." },
    { w: "¿Cómo se llama usted, por favor?", t: "What is your name, please? (formal)" },
    { w: "Te presento a mi amiga Sofía.", t: "Let me introduce my friend Sofía." },
    { w: "Bien, gracias. ¿Y tú?", t: "Fine, thanks. And you?" }
  ],
  tx: { ti: "El primer día de clase", b: `Es lunes y es el primer día de clase en una escuela de idiomas de Barcelona. La profesora entra y dice: «<u>¡Buenos días</u> a todos! <u>Me llamo</u> Marta y <u>soy de</u> Valencia».<br><br>Un chico levanta la mano: «<u>Hola</u>, me llamo Kenji. Soy de Japón y <u>tengo</u> veintidós <u>años</u>». A su lado, una chica dice: «Yo soy Amanda, de Brasil. <u>Mucho gusto</u>».<br><br>Un señor mayor llega tarde. «<u>Perdón</u>, <u>lo siento</u>», dice. La profesora pregunta: «¿Cómo <u>se llama usted</u>?». «Me llamo Robert y soy de Canadá. <u>Encantado</u>». A las dos, la clase termina. Todos dicen: «¡<u>Hasta mañana</u>!».` },
  q: [
    ["¿De dónde es la profesora?", ["De Barcelona", "De Valencia", "De Brasil"], 1],
    ["¿Cuántos años tiene Kenji?", ["Veinte", "Veintidós", "Doce"], 1],
    ["¿Por qué dice Robert «lo siento»?", ["Porque llega tarde", "Porque está enfermo", "Porque no habla español"], 0],
    ["¿Por qué la profesora usa «usted» con Robert?", ["Porque es su amigo", "Porque es un niño", "Porque es un señor mayor"], 2]
  ],
  sp: [
    "¿Cómo te llamas y de dónde eres?",
    "¿Cuántos años tienes y dónde vives?",
    "Preséntate a un compañero nuevo de clase (nombre, país, edad).",
    "Saluda de manera formal a la directora de tu escuela y pregúntale cómo está.",
    "¿Cómo saludas a tus amigos en tu país? ¿Con besos, con la mano?",
    "Despídete de un amigo: vas a verlo mañana."
  ]
},
{
  id: "a1-num",
  lvl: "A1",
  k: "v",
  t: "Números, fecha y hora",
  en: "Numbers, date and time",
  ic: "🔢",
  th: `<div class="card"><h2>Los números <span class="en">(numbers)</span></h2>
<table><tr><th>0–15</th><th>16–29</th><th>30–100+</th></tr>
<tr><td>0 cero, 1 uno, 2 dos, 3 tres, 4 cuatro, 5 cinco</td><td>16 dieciséis, 17 diecisiete, 18 dieciocho, 19 diecinueve</td><td>30 treinta, 31 treinta y uno, 40 cuarenta</td></tr>
<tr><td>6 seis, 7 siete, 8 ocho, 9 nueve, 10 diez</td><td>20 veinte, 21 veintiuno, 22 veintidós</td><td>50 cincuenta, 60 sesenta, 70 setenta</td></tr>
<tr><td>11 once, 12 doce, 13 trece, 14 catorce, 15 quince</td><td>23 veintitrés, 26 veintiséis</td><td>80 ochenta, 90 noventa, 100 cien, 101 ciento uno, 200 doscientos, 1000 mil</td></tr></table>
<div class="tip"><b>Truco / Trick:</b> 16–29 are written as <b>one word</b> (dieciocho, veintiocho). From 31 on, use <b>y</b>: treinta <b>y</b> cinco, noventa <b>y</b> nueve. But never after hundreds: ciento cinco (105), not <s>ciento y cinco</s>. <b>Uno</b> becomes <b>un</b> before a masculine noun: <b>un</b> libro, veinti<b>ún</b> años.</div></div>
<div class="card"><h3>La hora <span class="en">(telling the time)</span></h3>
<p>¿Qué hora es? <span class="en">What time is it?</span><br>Es <b>la</b> una. <span class="en">It's one o'clock.</span> · Son <b>las</b> tres. <span class="en">It's three o'clock.</span><br>Son las tres <b>y cuarto</b>. <span class="en">3:15</span> · Son las tres <b>y media</b>. <span class="en">3:30</span> · Son las cuatro <b>menos cuarto</b>. <span class="en">3:45</span><br>Son las ocho <b>de la mañana / de la tarde / de la noche</b>. <span class="en">8 a.m. / 8 p.m.</span><br>¿A qué hora...? — <b>A las</b> diez. <span class="en">At what time...? — At ten.</span><br>Es mediodía. / Es medianoche. <span class="en">It's noon. / It's midnight.</span></p></div>
<div class="card"><h3>La fecha <span class="en">(the date)</span></h3>
<p>¿Qué día es hoy? <span class="en">What's the date today?</span> — Hoy es <b>el</b> 15 de octubre. <span class="en">Today is October 15th.</span><br>Mi cumpleaños es <b>el</b> 3 de mayo. <span class="en">My birthday is on May 3rd.</span><br>Nací en 1998 (mil novecientos noventa y ocho). <span class="en">I was born in 1998.</span></p>
<p>In Spanish we use normal numbers for dates (el 3 de mayo), but <b>el primero</b> or <b>el uno</b> for the 1st. Ordinals: primero, segundo, tercero, cuarto, quinto <span class="en">(1st, 2nd, 3rd, 4th, 5th)</span> → Vivo en el <b>tercer</b> piso. <span class="en">I live on the third floor.</span> (primero/tercero → <b>primer/tercer</b> before a masculine noun)</p></div>`,
  voc: [
    ["0️⃣", "cero", "zero"],
    ["5️⃣", "cinco", "five"],
    ["🔟", "diez", "ten"],
    ["💯", "cien", "one hundred"],
    ["🕐", "la una", "one o'clock"],
    ["🕒", "las tres", "three o'clock"],
    ["🕧", "las doce y media", "half past twelve"],
    ["⏰", "la hora", "time / hour"],
    ["⏱️", "el minuto", "minute"],
    ["🕛", "el mediodía", "noon"],
    ["📅", "la fecha", "date"],
    ["🎂", "el cumpleaños", "birthday"],
    ["🗓️", "el año", "year"],
    ["🥇", "primero", "first"],
    ["🥈", "segundo", "second"],
    ["🥉", "tercero", "third"],
    ["☎️", "el número de teléfono", "phone number"]
  ],
  ex: [
    { q: "15 =", o: ["cinco", "quince", "cincuenta"], a: 1, t: "15 = quince" },
    { q: "Son las dos ___ (2:30).", o: ["y media", "y cuarto", "menos cuarto"], a: 0, t: "It's half past two." },
    { q: "___ la una y diez.", o: ["Es", "Son", "Está"], a: 0, t: "It's ten past one. (la una → es)" },
    { q: "Mi cumpleaños es ___ 7 de julio.", o: ["el", "en", "a"], a: 0, t: "My birthday is on July 7th." },
    { q: "Escribe el número: 21 (antes de «años») → Tengo ___ años.", a: ["veintiún", "veintiun"], t: "I'm twenty-one years old." },
    { q: "Escribe el número: 100 → ___ euros.", a: ["cien"], t: "One hundred euros." },
    { q: "Son las seis ___ cuarto. (5:45)", a: ["menos"], t: "It's a quarter to six." },
    { q: "La clase empieza ___ las nueve. (at)", a: ["a"], t: "The class starts at nine." },
    { w: "¿Qué hora es, por favor?", t: "What time is it, please?" },
    { w: "Son las ocho y cuarto de la mañana.", t: "It's a quarter past eight in the morning." },
    { w: "Hoy es el doce de octubre.", t: "Today is October 12th." },
    { w: "Mi número de teléfono es el 612 345 678.", t: "My phone number is 612 345 678." }
  ],
  tx: { ti: "Un día con Valeria", b: `Valeria vive en Buenos Aires, en el <u>tercer</u> piso de un edificio grande. Hoy es <u>el 20 de marzo</u> y es su <u>cumpleaños</u>: tiene <u>treinta y un</u> años.<br><br>Se levanta <u>a las siete y media</u> y desayuna con su hermano. Trabaja en una tienda desde <u>las nueve</u> hasta <u>la una y cuarto</u>. A <u>mediodía</u>, su madre la llama por teléfono y canta «Feliz cumpleaños».<br><br>Por la tarde, Valeria compra una tarta por <u>quince</u> mil pesos. La fiesta es <u>a las nueve de la noche</u> en su casa. Vienen <u>doce</u> amigos. A <u>medianoche</u>, todos bailan y comen tarta. ¡Qué buen día!` },
  q: [
    ["¿Cuántos años tiene Valeria hoy?", ["Treinta", "Treinta y uno", "Trece"], 1],
    ["¿A qué hora se levanta?", ["A las siete y media", "A las nueve", "A la una y cuarto"], 0],
    ["¿En qué piso vive?", ["En el primero", "En el segundo", "En el tercero"], 2],
    ["¿Cuántos amigos van a la fiesta?", ["Diez", "Doce", "Quince"], 1]
  ],
  sp: [
    "¿Qué hora es ahora?",
    "¿Cuándo es tu cumpleaños?",
    "¿A qué hora te levantas y a qué hora comes?",
    "Di tu número de teléfono (o un número inventado) en español.",
    "Cuenta de diez en diez hasta cien.",
    "¿Qué día es hoy? Di la fecha completa."
  ]
},
{
  id: "a1-fam",
  lvl: "A1",
  k: "v",
  t: "Familia y amigos",
  en: "Family and friends",
  ic: "👨‍👩‍👧",
  th: `<div class="card"><h2>La familia <span class="en">(the family)</span></h2>
<table><tr><th>Masculino</th><th>Femenino</th><th>English</th></tr>
<tr><td>el padre (papá)</td><td>la madre (mamá)</td><td>father / mother</td></tr>
<tr><td>el hermano</td><td>la hermana</td><td>brother / sister</td></tr>
<tr><td>el hijo</td><td>la hija</td><td>son / daughter</td></tr>
<tr><td>el abuelo</td><td>la abuela</td><td>grandfather / grandmother</td></tr>
<tr><td>el tío</td><td>la tía</td><td>uncle / aunt</td></tr>
<tr><td>el primo</td><td>la prima</td><td>cousin</td></tr>
<tr><td>el marido / el esposo</td><td>la mujer / la esposa</td><td>husband / wife</td></tr>
<tr><td>el novio</td><td>la novia</td><td>boyfriend / girlfriend</td></tr></table>
<div class="tip"><b>Truco / Trick:</b> The masculine plural can include both sexes: <b>los padres</b> = parents, <b>los hermanos</b> = brothers and sisters / siblings, <b>los hijos</b> = children. ¿Tienes hermanos? <span class="en">Do you have any siblings?</span></div></div>
<div class="card"><h3>Describir el físico <span class="en">(physical description)</span></h3>
<p><b>Ser</b> + adjetivo: Es <b>alto / bajo</b> <span class="en">tall / short</span>, <b>delgado / gordo</b> <span class="en">slim / fat</span>, <b>joven / mayor</b> <span class="en">young / old</span>, <b>rubio / moreno</b> <span class="en">blond / dark-haired</span>, <b>guapo</b> <span class="en">good-looking</span>.<br><b>Tener</b> + rasgo: Tiene el pelo <b>largo / corto / rizado</b> <span class="en">long / short / curly hair</span>. Tiene los ojos <b>azules / verdes / marrones</b> <span class="en">blue / green / brown eyes</span>. Lleva gafas. <span class="en">He/She wears glasses.</span></p>
<p>Adjectives agree: mi hermano es alt<b>o</b>, mi hermana es alt<b>a</b>, mis primos son alt<b>os</b>. Adjectives in -e or a consonant don't change for gender: joven, amable, inteligente.</p></div>
<div class="card"><h3>El carácter <span class="en">(personality)</span></h3>
<p>simpático/a <span class="en">nice, friendly</span> · antipático/a <span class="en">unfriendly</span> · divertido/a <span class="en">fun</span> · serio/a <span class="en">serious</span> · trabajador/a <span class="en">hard-working</span> · perezoso/a <span class="en">lazy</span> · tímido/a <span class="en">shy</span> · amable <span class="en">kind</span> · inteligente <span class="en">smart</span></p>
<p>Mi abuela es muy simpática y divertida. <span class="en">My grandmother is very nice and fun.</span><br>Mi mejor amigo se llama Iker. <span class="en">My best friend is called Iker.</span><br>🌎 In Mexico, <b>mamá</b> and <b>papá</b> are very common; in Argentina you also hear <b>la vieja / el viejo</b> (informal) for mum and dad.</p></div>`,
  voc: [
    ["👨", "el padre", "father"],
    ["👩", "la madre", "mother"],
    ["👦", "el hermano", "brother"],
    ["👧", "la hermana", "sister"],
    ["👶", "el hijo", "son"],
    ["👴", "el abuelo", "grandfather"],
    ["👵", "la abuela", "grandmother"],
    ["🧔", "el tío", "uncle"],
    ["👱‍♀️", "la prima", "cousin (female)"],
    ["💑", "el novio", "boyfriend"],
    ["💍", "el marido", "husband"],
    ["🤝", "el amigo", "friend"],
    ["🦒", "alto", "tall"],
    ["🐭", "bajo", "short"],
    ["👱", "rubio", "blond"],
    ["😄", "simpático", "nice, friendly"],
    ["😳", "tímido", "shy"],
    ["👓", "las gafas", "glasses"]
  ],
  ex: [
    { q: "La madre de mi madre es mi ___.", o: ["tía", "abuela", "prima"], a: 1, t: "My mother's mother is my grandmother." },
    { q: "El hijo de mi tío es mi ___.", o: ["primo", "hermano", "sobrino"], a: 0, t: "My uncle's son is my cousin." },
    { q: "Mi hermana es muy ___.", o: ["simpática", "simpático", "simpáticos"], a: 0, t: "My sister is very nice." },
    { q: "Mi padre ___ los ojos azules.", o: ["tiene", "es", "está"], a: 0, t: "My father has blue eyes." },
    { q: "Mis abuelos son ___. (mayor)", a: ["mayores"], t: "My grandparents are old." },
    { q: "Mi novia ___ el pelo largo y rizado. (tener)", a: ["tiene"], t: "My girlfriend has long curly hair." },
    { q: "Lo contrario de «alto» es ___.", a: ["bajo"], t: "The opposite of 'tall' is 'short'." },
    { q: "Lo contrario de «trabajador» es ___.", a: ["perezoso"], t: "The opposite of 'hard-working' is 'lazy'." },
    { w: "Tengo dos hermanos y una hermana.", t: "I have two brothers and a sister." },
    { w: "Mi abuela es baja y muy divertida.", t: "My grandmother is short and very funny." },
    { w: "Mi mejor amigo se llama Mateo.", t: "My best friend is called Mateo." },
    { w: "¿Cómo es tu madre?", t: "What is your mother like?" }
  ],
  tx: { ti: "La familia de Julia", b: `Me llamo Julia y vivo en Bogotá con mi familia. Mi <u>padre</u> se llama Andrés: es <u>alto</u>, <u>moreno</u> y muy <u>trabajador</u>. Mi <u>madre</u>, Patricia, es profesora. Es <u>baja</u>, tiene el <u>pelo rizado</u> y es muy <u>divertida</u>.<br><br>Tengo un <u>hermano</u> pequeño, Tomás. Tiene ocho años y es un poco <u>perezoso</u>, pero es muy <u>simpático</u>. Los domingos comemos en casa de mis <u>abuelos</u>. Mi <u>abuela</u> cocina muy bien y mi <u>abuelo</u> <u>lleva gafas</u> y cuenta historias.<br><br>Mi <u>mejor amiga</u> se llama Daniela. Es <u>rubia</u>, tiene los <u>ojos verdes</u> y es un poco <u>tímida</u>. ¡Es como una <u>hermana</u> para mí!` },
  q: [
    ["¿Cómo es el padre de Julia?", ["Bajo y rubio", "Alto y moreno", "Alto y rubio"], 1],
    ["¿Qué hace la madre de Julia?", ["Es profesora", "Es cocinera", "Es médica"], 0],
    ["¿Cuántos años tiene Tomás?", ["Seis", "Ocho", "Diez"], 1],
    ["¿Cómo es Daniela?", ["Morena y muy habladora", "Rubia y un poco tímida", "Alta y perezosa"], 1]
  ],
  sp: [
    "¿Cuántas personas hay en tu familia? ¿Quiénes son?",
    "¿Tienes hermanos? ¿Cómo se llaman y cuántos años tienen?",
    "Describe el físico de tu madre o de tu padre.",
    "¿Cómo es tu mejor amigo o amiga? Describe su carácter.",
    "Describe a una persona famosa y tus compañeros adivinan quién es.",
    "¿Con qué persona de tu familia hablas más? ¿Por qué?"
  ]
},
{
  id: "a1-casa",
  lvl: "A1",
  k: "v",
  t: "La casa",
  en: "The house",
  ic: "🏠",
  th: `<div class="card"><h2>Tipos de vivienda <span class="en">(types of housing)</span></h2>
<p><b>el piso</b> <span class="en">flat, apartment (Spain)</span> = <b>el apartamento / el departamento</b> <span class="en">(Latin America)</span><br><b>la casa</b> <span class="en">house</span> · <b>el chalé</b> <span class="en">detached house</span> · <b>el estudio</b> <span class="en">studio flat</span> · <b>el edificio</b> <span class="en">building</span></p>
<p>Vivo en un piso pequeño en el centro. <span class="en">I live in a small flat in the centre.</span><br>Mi casa tiene jardín. <span class="en">My house has a garden.</span></p></div>
<div class="card"><h3>Las habitaciones y los muebles <span class="en">(rooms and furniture)</span></h3>
<table><tr><th>Habitación</th><th>Muebles y objetos</th></tr>
<tr><td>el salón <span class="en">living room</span></td><td>el sofá, la mesa, la televisión, la lámpara, la estantería <span class="en">(shelves)</span></td></tr>
<tr><td>la cocina <span class="en">kitchen</span></td><td>la nevera <span class="en">(fridge)</span>, el horno <span class="en">(oven)</span>, el microondas, el fregadero <span class="en">(sink)</span></td></tr>
<tr><td>el dormitorio <span class="en">bedroom</span></td><td>la cama, el armario <span class="en">(wardrobe)</span>, la mesilla <span class="en">(bedside table)</span></td></tr>
<tr><td>el baño <span class="en">bathroom</span></td><td>la ducha, la bañera, el lavabo <span class="en">(washbasin)</span>, el espejo <span class="en">(mirror)</span></td></tr>
<tr><td>otros <span class="en">others</span></td><td>el comedor, el pasillo <span class="en">(hallway)</span>, la terraza, el jardín, el garaje</td></tr></table>
<p>🌎 Latinoamérica: <b>la recámara / la habitación</b> (bedroom), <b>la sala</b> (living room), <b>el refrigerador / la heladera</b> (fridge), <b>el clóset</b> (wardrobe).</p></div>
<div class="card"><h3>Hay / Está <span class="en">(there is / it is located)</span></h3>
<p>En mi dormitorio <b>hay</b> una cama y un armario. <span class="en">In my bedroom there is a bed and a wardrobe.</span><br>La cama <b>está</b> al lado de la ventana. <span class="en">The bed is next to the window.</span><br>Preposiciones: <b>encima de</b> <span class="en">on top of</span>, <b>debajo de</b> <span class="en">under</span>, <b>al lado de</b> <span class="en">next to</span>, <b>delante de</b> <span class="en">in front of</span>, <b>detrás de</b> <span class="en">behind</span>, <b>entre</b> <span class="en">between</span>.</p>
<div class="tip"><b>Truco / Trick:</b> <b>Hay</b> + un/una/números/nothing (Hay <b>un</b> sofá, hay <b>dos</b> sillas, hay libros). <b>Está/Están</b> + el/la/mi (<b>El</b> sofá está en el salón). ❌ <s>Hay el sofá</s> → ✅ Hay un sofá. Remember: de + el = <b>del</b> → al lado <b>del</b> sofá.</div></div>`,
  voc: [
    ["🏠", "la casa", "house"],
    ["🏢", "el piso", "flat, apartment"],
    ["🛋️", "el sofá", "sofa"],
    ["🛏️", "la cama", "bed"],
    ["🍳", "la cocina", "kitchen"],
    ["🛁", "la bañera", "bathtub"],
    ["🚿", "la ducha", "shower"],
    ["🚽", "el baño", "bathroom"],
    ["🪑", "la silla", "chair"],
    ["🪞", "el espejo", "mirror"],
    ["🚪", "la puerta", "door"],
    ["🪟", "la ventana", "window"],
    ["💡", "la lámpara", "lamp"],
    ["📺", "la televisión", "television"],
    ["🧊", "la nevera", "fridge"],
    ["🌳", "el jardín", "garden"],
    ["🔑", "la llave", "key"],
    ["🪜", "la escalera", "stairs"]
  ],
  ex: [
    { q: "Duermo en el ___.", o: ["dormitorio", "baño", "garaje"], a: 0, t: "I sleep in the bedroom." },
    { q: "En el salón ___ un sofá grande.", o: ["hay", "está", "es"], a: 0, t: "In the living room there is a big sofa." },
    { q: "La leche está en la ___.", o: ["nevera", "ducha", "cama"], a: 0, t: "The milk is in the fridge." },
    { q: "El gato está ___ la mesa. 🐈⬇️", o: ["debajo de", "encima de", "detrás de"], a: 0, t: "The cat is under the table." },
    { q: "Las llaves ___ encima de la mesa. (estar)", a: ["están"], t: "The keys are on the table." },
    { q: "Me ducho en el ___. (bathroom)", a: ["baño"], t: "I have a shower in the bathroom." },
    { q: "La lámpara está al lado ___ sofá. (de + el)", a: ["del"], t: "The lamp is next to the sofa." },
    { q: "En la cocina ___ cuatro sillas. (haber)", a: ["hay"], t: "In the kitchen there are four chairs." },
    { w: "Mi piso tiene dos dormitorios y un baño.", t: "My flat has two bedrooms and a bathroom." },
    { w: "La televisión está en el salón.", t: "The television is in the living room." },
    { w: "Vivo en una casa con jardín.", t: "I live in a house with a garden." },
    { w: "¿Dónde está el baño, por favor?", t: "Where is the bathroom, please?" }
  ],
  tx: { ti: "Se alquila piso en Granada", b: `Hola, soy Nacho. Busco compañero para mi <u>piso</u> en el centro de Granada. Es un piso moderno en el cuarto piso de un <u>edificio</u> con ascensor.<br><br>Tiene tres <u>dormitorios</u>, un <u>salón</u> grande, una <u>cocina</u> y dos <u>baños</u>. En el salón <u>hay</u> un <u>sofá</u> muy cómodo, una <u>televisión</u> y una <u>estantería</u> con muchos libros. La cocina tiene <u>nevera</u>, <u>horno</u> y <u>microondas</u>.<br><br>Tu dormitorio tiene una <u>cama</u>, un <u>armario</u> y una mesa <u>al lado de</u> la <u>ventana</u>. Desde la <u>terraza</u> se ve la Alhambra. El alquiler es de 300 euros al mes. ¡Escríbeme!` },
  q: [
    ["¿Cuántos dormitorios tiene el piso?", ["Dos", "Tres", "Cuatro"], 1],
    ["¿Qué hay en el salón?", ["Una cama y un armario", "Un sofá, una televisión y una estantería", "Un horno y una nevera"], 1],
    ["¿Dónde está la mesa del dormitorio?", ["Al lado de la ventana", "Debajo de la cama", "En la terraza"], 0],
    ["¿Qué se ve desde la terraza?", ["El mar", "La Alhambra", "Un jardín"], 1]
  ],
  sp: [
    "¿Vives en un piso o en una casa? ¿Cómo es?",
    "¿Cuántas habitaciones tiene tu casa?",
    "Describe tu dormitorio: ¿qué hay y dónde está cada cosa?",
    "¿Cuál es tu habitación favorita de la casa? ¿Por qué?",
    "Describe la casa de tus sueños.",
    "¿Qué hay en tu cocina?"
  ]
},
{
  id: "a1-comida",
  lvl: "A1",
  k: "v",
  t: "Comida y bebida",
  en: "Food and drink",
  ic: "🍎",
  th: `<div class="card"><h2>Las comidas del día <span class="en">(meals of the day)</span></h2>
<table><tr><th>Comida</th><th>Verbo</th><th>Hora en España</th></tr>
<tr><td>el desayuno <span class="en">breakfast</span></td><td>desayunar</td><td>7:00–9:00</td></tr>
<tr><td>la comida / el almuerzo <span class="en">lunch</span></td><td>comer / almorzar</td><td>14:00–15:30</td></tr>
<tr><td>la merienda <span class="en">afternoon snack</span></td><td>merendar</td><td>17:30–18:30</td></tr>
<tr><td>la cena <span class="en">dinner</span></td><td>cenar</td><td>21:00–22:30</td></tr></table>
<p>🌎 In Spain people eat late! In much of Latin America <b>el almuerzo</b> is the usual word for lunch, and dinner is earlier.</p></div>
<div class="card"><h3>Alimentos y bebidas <span class="en">(food and drinks)</span></h3>
<p><b>Frutas:</b> la manzana, el plátano (<i>banana</i> en Latinoamérica), la naranja, las fresas <span class="en">apple, banana, orange, strawberries</span><br><b>Verduras:</b> el tomate, la lechuga, la cebolla, la patata (<i>papa</i> en Latinoamérica) <span class="en">tomato, lettuce, onion, potato</span><br><b>Proteínas:</b> el pollo, la carne, el pescado, los huevos, el jamón, el queso <span class="en">chicken, meat, fish, eggs, ham, cheese</span><br><b>Otros:</b> el pan, el arroz, la pasta, el azúcar, la sal <span class="en">bread, rice, pasta, sugar, salt</span><br><b>Bebidas:</b> el agua, la leche, el café, el té, el zumo (<i>jugo</i> en Latinoamérica), la cerveza, el vino <span class="en">water, milk, coffee, tea, juice, beer, wine</span></p>
<div class="tip"><b>Truco / Trick:</b> <b>agua</b> is feminine but takes <b>el</b> in the singular: <b>el</b> agua fr<b>ía</b>, <b>las</b> aguas. To talk about your tastes use <b>me gusta</b> + singular, <b>me gustan</b> + plural: Me gust<b>a</b> el queso. Me gust<b>an</b> las fresas.</div></div>
<div class="card"><h3>En el mercado <span class="en">(at the market)</span></h3>
<p>Cantidades: <b>un kilo de</b> naranjas, <b>medio kilo de</b> tomates, <b>cien gramos de</b> jamón, <b>una docena de</b> huevos, <b>una botella de</b> agua, <b>un litro de</b> leche, <b>una barra de</b> pan, <b>una lata de</b> atún <span class="en">a kilo, half a kilo, 100 g, a dozen, a bottle, a litre, a loaf, a tin</span></p>
<p>—¿Qué le pongo? <span class="en">What can I get you?</span> —Quería un kilo de manzanas, por favor. <span class="en">I'd like a kilo of apples, please.</span><br>—¿Algo más? <span class="en">Anything else?</span> —No, nada más. ¿Cuánto es? <span class="en">No, that's all. How much is it?</span> —Son cuatro euros con cincuenta. <span class="en">That's €4.50.</span></p></div>`,
  voc: [
    ["🍎", "la manzana", "apple"],
    ["🍌", "el plátano", "banana"],
    ["🍊", "la naranja", "orange"],
    ["🍓", "la fresa", "strawberry"],
    ["🍅", "el tomate", "tomato"],
    ["🥔", "la patata", "potato"],
    ["🥚", "el huevo", "egg"],
    ["🍗", "el pollo", "chicken"],
    ["🐟", "el pescado", "fish"],
    ["🧀", "el queso", "cheese"],
    ["🍞", "el pan", "bread"],
    ["🍚", "el arroz", "rice"],
    ["💧", "el agua", "water"],
    ["🥛", "la leche", "milk"],
    ["☕", "el café", "coffee"],
    ["🧃", "el zumo", "juice"],
    ["🍷", "el vino", "wine"],
    ["🥐", "el desayuno", "breakfast"]
  ],
  ex: [
    { q: "Por la mañana tomo el ___.", o: ["desayuno", "cena", "merienda"], a: 0, t: "In the morning I have breakfast." },
    { q: "Quería una ___ de agua, por favor.", o: ["botella", "docena", "barra"], a: 0, t: "I'd like a bottle of water, please." },
    { q: "Me ___ mucho las naranjas.", o: ["gustan", "gusta", "gusto"], a: 0, t: "I really like oranges." },
    { q: "¿Qué es una fruta?", o: ["la fresa", "la cebolla", "el queso"], a: 0, t: "A strawberry is a fruit." },
    { q: "Una ___ de huevos (12), por favor.", a: ["docena"], t: "A dozen eggs, please." },
    { q: "Me ___ el café con leche. (gustar)", a: ["gusta"], t: "I like coffee with milk." },
    { q: "En España la ___ es a las diez de la noche. (dinner)", a: ["cena"], t: "In Spain dinner is at ten at night." },
    { q: "—¿Cuánto ___? —Son tres euros. (ser)", a: ["es"], t: "How much is it? — It's three euros." },
    { w: "Quería un kilo de tomates, por favor.", t: "I'd like a kilo of tomatoes, please." },
    { w: "Para desayunar tomo café con tostadas.", t: "For breakfast I have coffee with toast." },
    { w: "No me gusta el pescado.", t: "I don't like fish." },
    { w: "¿Algo más? No, nada más, gracias.", t: "Anything else? No, that's all, thanks." }
  ],
  tx: { ti: "De compras en el mercado", b: `Es sábado por la mañana y Rosa va al <u>mercado</u> de su barrio en Valencia. Primero va a la frutería. «Buenos días. <u>Quería</u> <u>un kilo de</u> <u>naranjas</u> y <u>medio kilo de</u> <u>fresas</u>, por favor». El frutero pregunta: «<u>¿Algo más?</u>». «Sí, unos <u>plátanos</u>».<br><br>Después compra <u>una barra de</u> <u>pan</u>, <u>una docena de</u> <u>huevos</u> y <u>doscientos gramos de</u> <u>queso</u>. En la pescadería compra <u>pescado</u> para la <u>cena</u>. «<u>¿Cuánto es?</u>», pregunta. «Doce euros con veinte».<br><br>A Rosa <u>le gusta</u> mucho el mercado porque los productos son frescos. Al final, toma un <u>café con leche</u> en un bar y vuelve a casa.` },
  q: [
    ["¿Cuántas naranjas compra Rosa?", ["Medio kilo", "Un kilo", "Una docena"], 1],
    ["¿Qué compra en la pescadería?", ["Pescado para la cena", "Queso", "Huevos"], 0],
    ["¿Cuánto paga en la pescadería?", ["Diez euros", "Doce euros con veinte", "Veinte euros"], 1],
    ["¿Por qué le gusta el mercado?", ["Porque es barato", "Porque está cerca", "Porque los productos son frescos"], 2]
  ],
  sp: [
    "¿Qué tomas normalmente para desayunar?",
    "¿A qué hora comes y a qué hora cenas?",
    "¿Qué comida te gusta mucho? ¿Y qué comida no te gusta?",
    "Estás en el mercado: pide tres productos con sus cantidades.",
    "¿Cuál es un plato típico de tu país? ¿Qué lleva?",
    "¿Qué bebes durante el día?"
  ]
},
{
  id: "a1-ciudad",
  lvl: "A1",
  k: "v",
  t: "La ciudad y el transporte",
  en: "The city and transport",
  ic: "🏙️",
  th: `<div class="card"><h2>Lugares de la ciudad <span class="en">(places in town)</span></h2>
<table><tr><th>Español</th><th>English</th><th>Español</th><th>English</th></tr>
<tr><td>la calle</td><td>street</td><td>la plaza</td><td>square</td></tr>
<tr><td>el banco</td><td>bank</td><td>la farmacia</td><td>pharmacy</td></tr>
<tr><td>el hospital</td><td>hospital</td><td>el supermercado</td><td>supermarket</td></tr>
<tr><td>el museo</td><td>museum</td><td>la iglesia</td><td>church</td></tr>
<tr><td>el parque</td><td>park</td><td>la estación</td><td>station</td></tr>
<tr><td>el restaurante</td><td>restaurant</td><td>la parada de autobús</td><td>bus stop</td></tr>
<tr><td>el cine</td><td>cinema</td><td>la oficina de correos</td><td>post office</td></tr></table>
<p>En mi barrio hay un parque y dos supermercados. <span class="en">In my neighbourhood there's a park and two supermarkets.</span><br>¿Hay una farmacia por aquí? <span class="en">Is there a pharmacy around here?</span></p></div>
<div class="card"><h3>El transporte <span class="en">(transport)</span></h3>
<p>Voy <b>en</b> autobús / metro / tren / coche / bici / avión / taxi. <span class="en">I go by bus / underground / train / car / bike / plane / taxi.</span><br>Pero: Voy <b>a pie</b> / Voy <b>andando</b>. <span class="en">I walk / I go on foot.</span></p>
<p>🌎 <b>el coche</b> (Spain) = <b>el carro</b> (Mexico, Colombia…) = <b>el auto</b> (Argentina, Chile). <b>El autobús</b> = <b>el camión</b> (Mexico), <b>el colectivo</b> (Argentina), <b>la guagua</b> (Canarias, Cuba). <b>Coger</b> el autobús (Spain) = <b>tomar</b> el autobús (Latin America).</p>
<div class="tip"><b>Truco / Trick:</b> Use <b>en</b> + vehicle (en tren, en metro) and <b>a</b> + destination (voy <b>a</b> la playa, voy <b>al</b> centro). Remember: a + el = <b>al</b>.</div></div>
<div class="card"><h3>Pedir y dar direcciones <span class="en">(asking for and giving directions)</span></h3>
<p>Perdone, ¿dónde está el museo? <span class="en">Excuse me, where is the museum?</span><br>¿Cómo voy a la estación? <span class="en">How do I get to the station?</span><br>Sigue todo recto. <span class="en">Go straight on.</span><br>Gira a la derecha / a la izquierda. <span class="en">Turn right / left.</span><br>Toma la primera / segunda calle. <span class="en">Take the first / second street.</span><br>Está en la esquina / enfrente del banco / cerca / lejos. <span class="en">It's on the corner / opposite the bank / near / far.</span></p></div>`,
  voc: [
    ["🚌", "el autobús", "bus"],
    ["🚇", "el metro", "underground, subway"],
    ["🚆", "el tren", "train"],
    ["🚗", "el coche", "car"],
    ["🚲", "la bicicleta", "bicycle"],
    ["✈️", "el avión", "plane"],
    ["🚕", "el taxi", "taxi"],
    ["🏦", "el banco", "bank"],
    ["💊", "la farmacia", "pharmacy"],
    ["🏥", "el hospital", "hospital"],
    ["🏛️", "el museo", "museum"],
    ["⛪", "la iglesia", "church"],
    ["🌳", "el parque", "park"],
    ["🎬", "el cine", "cinema"],
    ["🛒", "el supermercado", "supermarket"],
    ["🚉", "la estación", "station"],
    ["⬆️", "todo recto", "straight on"],
    ["➡️", "a la derecha", "to the right"]
  ],
  ex: [
    { q: "Voy al trabajo ___ metro.", o: ["en", "a", "de"], a: 0, t: "I go to work by underground." },
    { q: "Para comprar medicinas voy a la ___.", o: ["farmacia", "iglesia", "estación"], a: 0, t: "To buy medicine I go to the pharmacy." },
    { q: "⬅️ Gira a la ___.", o: ["izquierda", "derecha", "esquina"], a: 0, t: "Turn left." },
    { q: "En México, «el coche» se dice...", o: ["el carro", "la guagua", "el colectivo"], a: 0, t: "In Mexico, a car is 'el carro'." },
    { q: "Voy ___ centro en autobús. (a + el)", a: ["al"], t: "I go to the centre by bus." },
    { q: "No tengo coche, voy a ___. (on foot)", a: ["pie"], t: "I don't have a car, I go on foot." },
    { q: "Perdone, ¿dónde ___ la estación? (estar)", a: ["está"], t: "Excuse me, where is the station?" },
    { q: "Sigue todo ___ y gira a la derecha. (straight)", a: ["recto"], t: "Go straight on and turn right." },
    { w: "¿Hay un banco por aquí cerca?", t: "Is there a bank near here?" },
    { w: "Toma la segunda calle a la izquierda.", t: "Take the second street on the left." },
    { w: "El museo está enfrente del parque.", t: "The museum is opposite the park." },
    { w: "Normalmente voy a la universidad en bici.", t: "I normally go to university by bike." }
  ],
  tx: { ti: "Perdido en Ciudad de México", b: `Liam es irlandés y está de vacaciones en Ciudad de México. Hoy quiere visitar el <u>Museo</u> Nacional de Antropología, pero no sabe dónde está. Pregunta a una señora en la <u>plaza</u>: «<u>Perdone</u>, ¿cómo voy al museo?».<br><br>La señora es muy amable: «Está un poco <u>lejos</u>. Puedes tomar el <u>metro</u> en la <u>estación</u> de la <u>esquina</u>. O puedes ir en <u>camión</u>: la <u>parada</u> está <u>enfrente del</u> <u>banco</u>».<br><br>Liam decide ir en metro. Al salir, <u>sigue todo recto</u>, <u>gira a la derecha</u> y entra en el <u>parque</u> de Chapultepec. ¡Allí está el museo! Después de la visita, vuelve al hotel en <u>taxi</u> porque está muy cansado.` },
  q: [
    ["¿De dónde es Liam?", ["De México", "De Irlanda", "De Inglaterra"], 1],
    ["¿Dónde está la parada del camión?", ["Enfrente del banco", "En la esquina", "En el parque"], 0],
    ["¿Cómo va Liam al museo?", ["En camión", "A pie", "En metro"], 2],
    ["¿Por qué vuelve en taxi?", ["Porque llueve", "Porque está cansado", "Porque el metro está cerrado"], 1]
  ],
  sp: [
    "¿Qué lugares hay en tu barrio?",
    "¿Cómo vas al trabajo o a clase? ¿Cuánto tiempo tardas?",
    "Explica a un turista cómo ir de tu casa a la estación más cercana.",
    "¿Cuál es tu lugar favorito de tu ciudad? ¿Por qué?",
    "¿Qué medio de transporte prefieres? ¿Por qué?",
    "Pregunta a una persona en la calle dónde está una farmacia."
  ]
},
{
  id: "a1-tiempo",
  lvl: "A1",
  k: "v",
  t: "Días, meses y el tiempo",
  en: "Days, months and the weather",
  ic: "🌦️",
  th: `<div class="card"><h2>Los días y los meses <span class="en">(days and months)</span></h2>
<table><tr><th>Días de la semana</th><th>Meses del año</th></tr>
<tr><td>lunes <span class="en">Monday</span>, martes <span class="en">Tuesday</span>, miércoles <span class="en">Wednesday</span>, jueves <span class="en">Thursday</span>, viernes <span class="en">Friday</span>, sábado <span class="en">Saturday</span>, domingo <span class="en">Sunday</span></td><td>enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre</td></tr></table>
<div class="tip"><b>Truco / Trick:</b> Days and months are written in <b>lowercase</b>: el lunes, en abril. "On Monday" = <b>el</b> lunes (no preposition!); "on Mondays" = <b>los</b> lunes. "In May" = <b>en</b> mayo. ❌ <s>en el lunes</s> → ✅ el lunes. The weekend = <b>el fin de semana</b>.</div></div>
<div class="card"><h3>Las estaciones <span class="en">(seasons)</span></h3>
<p>🌸 la primavera <span class="en">spring</span> · ☀️ el verano <span class="en">summer</span> · 🍂 el otoño <span class="en">autumn</span> · ❄️ el invierno <span class="en">winter</span></p>
<p>En España, el verano es en julio y agosto. En Argentina y Chile, ¡el verano es en diciembre y enero! <span class="en">In Argentina and Chile, summer is in December and January!</span></p></div>
<div class="card"><h3>¿Qué tiempo hace? <span class="en">(what's the weather like?)</span></h3>
<table><tr><th>Hace + noun</th><th>Verbo</th><th>Hay / Está</th></tr>
<tr><td>Hace calor. <span class="en">It's hot.</span></td><td>Llueve. <span class="en">It's raining.</span></td><td>Hay niebla. <span class="en">It's foggy.</span></td></tr>
<tr><td>Hace frío. <span class="en">It's cold.</span></td><td>Nieva. <span class="en">It's snowing.</span></td><td>Hay tormenta. <span class="en">There's a storm.</span></td></tr>
<tr><td>Hace sol. <span class="en">It's sunny.</span></td><td>Truena. <span class="en">It's thundering.</span></td><td>Está nublado. <span class="en">It's cloudy.</span></td></tr>
<tr><td>Hace viento. <span class="en">It's windy.</span></td><td></td><td>Estamos a 25 grados. <span class="en">It's 25 degrees.</span></td></tr>
<tr><td>Hace buen / mal tiempo. <span class="en">The weather is good / bad.</span></td><td></td><td></td></tr></table>
<p>Hace <b>mucho</b> calor (not <s>muy calor</s>). <span class="en">It's very hot.</span> In Latin America you also hear <b>Hay sol</b> or <b>Está soleado</b>.</p></div>`,
  voc: [
    ["📅", "el lunes", "Monday"],
    ["🎉", "el viernes", "Friday"],
    ["🛌", "el domingo", "Sunday"],
    ["🏖️", "el fin de semana", "weekend"],
    ["🗓️", "el mes", "month"],
    ["🌸", "la primavera", "spring"],
    ["☀️", "el verano", "summer"],
    ["🍂", "el otoño", "autumn, fall"],
    ["⛄", "el invierno", "winter"],
    ["🥵", "hace calor", "it's hot"],
    ["🥶", "hace frío", "it's cold"],
    ["🌞", "hace sol", "it's sunny"],
    ["💨", "hace viento", "it's windy"],
    ["🌧️", "llueve", "it's raining"],
    ["🌨️", "nieva", "it's snowing"],
    ["☁️", "está nublado", "it's cloudy"],
    ["⛈️", "la tormenta", "storm"],
    ["🌡️", "la temperatura", "temperature"]
  ],
  ex: [
    { q: "El día después del martes es el ___.", o: ["miércoles", "jueves", "lunes"], a: 0, t: "The day after Tuesday is Wednesday." },
    { q: "🥶 Hace mucho ___.", o: ["frío", "sol", "calor"], a: 0, t: "It's very cold." },
    { q: "Tengo clase de inglés ___ lunes y los miércoles.", o: ["los", "en", "el"], a: 0, t: "I have English class on Mondays and Wednesdays." },
    { q: "En Chile, en enero es ___.", o: ["verano", "invierno", "otoño"], a: 0, t: "In Chile, January is summer." },
    { q: "Hoy ___ calor, estamos a 35 grados. (hacer)", a: ["hace"], t: "It's hot today, it's 35 degrees." },
    { q: "🌧️ Hoy no voy al parque porque ___. (llover)", a: ["llueve"], t: "I'm not going to the park today because it's raining." },
    { q: "El último mes del año es ___.", a: ["diciembre"], t: "The last month of the year is December." },
    { q: "☁️ El cielo está ___. (cloudy)", a: ["nublado"], t: "The sky is cloudy." },
    { w: "Mi cumpleaños es en septiembre.", t: "My birthday is in September." },
    { w: "En invierno nieva mucho en las montañas.", t: "In winter it snows a lot in the mountains." },
    { w: "¿Qué tiempo hace hoy en Lima?", t: "What's the weather like today in Lima?" },
    { w: "Los sábados juego al fútbol con mis amigos.", t: "On Saturdays I play football with my friends." }
  ],
  tx: { ti: "Dos amigas, dos estaciones", b: `Hoy es <u>domingo</u>, 15 de <u>enero</u>. Lucía vive en Salamanca y hace una videollamada con su amiga Camila, de Buenos Aires.<br><br>«¡Aquí <u>hace</u> mucho <u>frío</u>!», dice Lucía. «<u>Estamos a</u> dos <u>grados</u>, <u>está nublado</u> y ahora <u>nieva</u> un poco. Es pleno <u>invierno</u>».<br><br>Camila se ríe: «Pues aquí es <u>verano</u>. <u>Hace</u> mucho <u>calor</u> y <u>hace sol</u>. Estamos a treinta grados. Este <u>fin de semana</u> voy a la playa con mi familia».<br><br>Lucía prefiere la <u>primavera</u>, porque no hace ni frío ni calor. A Camila le gusta el <u>otoño</u>, en <u>abril</u> y <u>mayo</u>. Las dos quieren viajar juntas en <u>julio</u>, pero ¿adónde? ¿Al calor o al frío?` },
  q: [
    ["¿Qué tiempo hace en Salamanca?", ["Hace sol y calor", "Hace frío y está nublado", "Llueve y hace viento"], 1],
    ["¿Qué estación es en Buenos Aires?", ["Verano", "Invierno", "Otoño"], 0],
    ["¿Qué hace Camila este fin de semana?", ["Va a la montaña", "Va a la playa", "Visita a Lucía"], 1],
    ["¿Por qué prefiere Lucía la primavera?", ["Porque llueve", "Porque hace mucho calor", "Porque no hace ni frío ni calor"], 2]
  ],
  sp: [
    "¿Qué día de la semana prefieres? ¿Por qué?",
    "¿Qué haces normalmente los fines de semana?",
    "¿Qué tiempo hace hoy en tu ciudad?",
    "¿Cuál es tu estación favorita y qué tiempo hace en esa estación?",
    "¿En qué mes es tu cumpleaños? ¿Qué tiempo hace normalmente ese día?",
    "Presenta el pronóstico del tiempo para mañana como en la televisión."
  ]
}
);
