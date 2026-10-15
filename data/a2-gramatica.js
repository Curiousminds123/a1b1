/* Camino al Español · Nivel A2 · contenido (gramática) */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(

/* ───────────── 1. SER Y ESTAR ───────────── */
{
  id: "a2-ser",
  lvl: "A2",
  k: "g",
  t: "Ser y estar",
  en: "Ser and estar (both 'to be')",
  ic: "🎭",
  th: `<div class="card"><h2>Ser y estar <span class="en">(both mean "to be")</span></h2>
<p>En español hay dos verbos para <i>to be</i>. Los dos son irregulares. <span class="en">Spanish has two verbs for "to be". Both are irregular.</span></p>
<table><tr><th></th><th>SER</th><th>ESTAR</th></tr>
<tr><td>yo</td><td class="irr">soy</td><td class="irr">estoy</td></tr>
<tr><td>tú</td><td class="irr">eres</td><td class="irr">estás</td></tr>
<tr><td>él/ella/usted</td><td class="irr">es</td><td class="irr">está</td></tr>
<tr><td>nosotros/as</td><td class="irr">somos</td><td>estamos</td></tr>
<tr><td>vosotros/as</td><td class="irr">sois</td><td>estáis</td></tr>
<tr><td>ellos/ellas/ustedes</td><td class="irr">son</td><td class="irr">están</td></tr></table>
<p>🌎 En Latinoamérica no se usa <i>vosotros</i>: se dice <i>ustedes son / ustedes están</i>. <span class="en">In Latin America "ustedes" replaces "vosotros".</span></p></div>
<div class="card"><h3>SER = identidad, origen, profesión, hora, características</h3>
<p>Soy estudiante. <span class="en">I'm a student.</span><br>Es de México. <span class="en">He's from Mexico.</span><br>Son las tres. <span class="en">It's three o'clock.</span><br>Hoy es martes. <span class="en">Today is Tuesday.</span><br>La mesa es de madera. <span class="en">The table is made of wood.</span><br>El coche es de Ana. <span class="en">The car is Ana's.</span><br>La fiesta es en mi casa. <span class="en">The party is at my house (event).</span></p>
<h3>ESTAR = lugar, estados temporales, emociones, acciones (estoy comiendo)</h3>
<p>Madrid está en España. <span class="en">Madrid is in Spain.</span><br>Estoy cansado. <span class="en">I'm tired.</span><br>La sopa está fría. <span class="en">The soup is cold (right now).</span><br>Estamos de vacaciones. <span class="en">We're on holiday.</span><br>¿Estás bien? <span class="en">Are you OK?</span></p>
<div class="tip"><b>Truco / Trick:</b> Ser = <i>what something IS</i> (su esencia). Estar = <i>how/where something IS right now</i> (su estado o lugar). <span class="en">"Bien" and "mal" always go with estar: Está bien.</span></div></div>
<div class="card"><h3>Adjetivos que cambian de significado <span class="en">(adjectives that change meaning)</span></h3>
<table><tr><th>adjetivo</th><th>con SER</th><th>con ESTAR</th></tr>
<tr><td>listo</td><td>Pablo es listo. <span class="en">Pablo is clever.</span></td><td>Pablo está listo. <span class="en">Pablo is ready.</span></td></tr>
<tr><td>aburrido</td><td>La clase es aburrida. <span class="en">The class is boring.</span></td><td>Estoy aburrido. <span class="en">I'm bored.</span></td></tr>
<tr><td>rico</td><td>Su familia es rica. <span class="en">His family is rich.</span></td><td>La paella está rica. <span class="en">The paella is tasty.</span></td></tr>
<tr><td>malo</td><td>Este café es malo. <span class="en">This coffee is bad (quality).</span></td><td>Mi hijo está malo. <span class="en">My son is ill (Spain).</span></td></tr>
<tr><td>verde</td><td>La manzana es verde. <span class="en">The apple is green (colour).</span></td><td>El plátano está verde. <span class="en">The banana is unripe.</span></td></tr>
<tr><td>abierto</td><td>Ana es muy abierta. <span class="en">Ana is very open-minded.</span></td><td>La tienda está abierta. <span class="en">The shop is open.</span></td></tr></table>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Soy cansado. ✅ Estoy cansado. <span class="en">I'm tired.</span><br>❌ Estoy profesor. ✅ Soy profesor. <span class="en">I'm a teacher.</span><br>❌ La fiesta está en mi casa. ✅ La fiesta es en mi casa. <span class="en">Events use ser.</span><br>❌ Es bien. ✅ Está bien. <span class="en">It's fine.</span></p></div>`,
  voc: [
    ["🧑‍🏫", "ser profesor", "to be a teacher"],
    ["🌍", "ser de", "to be from"],
    ["📍", "estar en casa", "to be at home"],
    ["😴", "cansado", "tired"],
    ["😊", "contento", "happy, pleased"],
    ["🧠", "listo", "clever (ser) / ready (estar)"],
    ["🥱", "aburrido", "boring (ser) / bored (estar)"],
    ["😋", "rico", "rich (ser) / tasty (estar)"],
    ["🤒", "enfermo", "ill, sick"],
    ["🍏", "verde", "green (ser) / unripe (estar)"]
  ],
  ex: [
    { q: "Mi hermana ___ profesora.", o: ["es", "está"], a: 0, t: "My sister is a teacher. (profession → ser)" },
    { q: "Hoy ___ muy cansado.", o: ["soy", "estoy"], a: 1, t: "Today I'm very tired. (temporary state → estar)" },
    { q: "La fiesta ___ en mi casa.", o: ["es", "está"], a: 0, t: "The party is at my house. (event → ser)" },
    { q: "Madrid ___ en España.", o: ["es", "está"], a: 1, t: "Madrid is in Spain. (location → estar)" },
    { q: "La sopa ___ fría.", o: ["es", "está"], a: 1, t: "The soup is cold. (state right now → estar)" },
    { q: "¿Qué hora ___?", o: ["es", "está"], a: 0, t: "What time is it? (time → ser)" },
    { q: "Ellos ___ de Colombia. (ser)", a: ["son"], t: "They are from Colombia." },
    { q: "Nosotros ___ contentos hoy. (estar)", a: ["estamos"], t: "We are happy today." },
    { q: "Esta película ___ muy aburrida; no me gusta. (ser)", a: ["es"], t: "This film is very boring; I don't like it." },
    { w: "Mi hermano es muy listo.", t: "My brother is very clever." },
    { w: "Esta tortilla está muy rica.", t: "This omelette is very tasty." },
    { w: "La cena ya está lista.", t: "Dinner is ready now." }
  ],
  tx: {
    ti: "Lucía, de Sevilla",
    b: `Me llamo Lucía y <u>soy</u> de Sevilla. <u>Soy</u> profesora de inglés en un instituto. Hoy <u>estoy</u> un poco cansada porque <u>es</u> lunes y anoche dormí poco. Mi casa <u>está</u> cerca del centro y <u>es</u> muy luminosa, pero ahora <u>está</u> un poco desordenada.<br><br>Ahora <u>estoy</u> en el trabajo y mis alumnos <u>están</u> en clase. Algunos <u>están aburridos</u>, pero la clase no <u>es aburrida</u>: hoy hablamos de comida. Mi alumno Pablo <u>es</u> muy <u>listo</u> y siempre termina primero. Cuando todos <u>están listos</u>, salimos al patio.<br><br>Por la tarde voy a casa de mi madre. Su gazpacho siempre <u>está</u> muy <u>rico</u>. Mi madre no <u>es rica</u>, pero <u>es</u> una mujer muy feliz.`
  },
  q: [
    ["¿De dónde es Lucía?", ["De Madrid", "De Sevilla", "De Inglaterra"], 1],
    ["¿Por qué está cansada?", ["Porque es lunes", "Porque no come", "Porque está enferma"], 0],
    ["¿Dónde está su casa?", ["Lejos", "En el trabajo", "Cerca del centro"], 2],
    ["¿Quién es Pablo?", ["Un alumno muy listo", "El hermano de Lucía", "Un profesor aburrido"], 0]
  ],
  sp: [
    "Preséntate: ¿cómo te llamas, de dónde eres y qué haces?",
    "¿Cómo estás hoy y por qué?",
    "Describe a tu mejor amigo/a (¿cómo es?).",
    "¿Dónde está tu casa? ¿Cómo es?",
    "¿Cómo es tu ciudad? ¿Dónde está?",
    "Piensa en una comida que siempre está muy rica y en una película que es aburrida. Explica por qué."
  ]
},

/* ───────────── 2. PRESENTE IRREGULAR ───────────── */
{
  id: "a2-irr",
  lvl: "A2",
  k: "g",
  t: "Presente irregular",
  en: "Irregular present tense",
  ic: "🔄",
  th: `<div class="card"><h2>Presente regular <span class="en">(regular verbs)</span></h2>
<table><tr><th></th><th>-AR hablar</th><th>-ER comer</th><th>-IR vivir</th></tr>
<tr><td>yo</td><td>habl<b class="reg">o</b></td><td>com<b class="reg">o</b></td><td>viv<b class="reg">o</b></td></tr>
<tr><td>tú</td><td>habl<b class="reg">as</b></td><td>com<b class="reg">es</b></td><td>viv<b class="reg">es</b></td></tr>
<tr><td>él/ella</td><td>habl<b class="reg">a</b></td><td>com<b class="reg">e</b></td><td>viv<b class="reg">e</b></td></tr>
<tr><td>nosotros</td><td>habl<b class="reg">amos</b></td><td>com<b class="reg">emos</b></td><td>viv<b class="reg">imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b class="reg">áis</b></td><td>com<b class="reg">éis</b></td><td>viv<b class="reg">ís</b></td></tr>
<tr><td>ellos</td><td>habl<b class="reg">an</b></td><td>com<b class="reg">en</b></td><td>viv<b class="reg">en</b></td></tr></table></div>
<div class="card"><h2>Irregulares importantes <span class="en">(key irregulars)</span></h2>
<table><tr><th></th><th>ir <i class="en">go</i></th><th>tener <i class="en">have</i></th><th>hacer <i class="en">do/make</i></th><th>querer <i class="en">want</i></th><th>poder <i class="en">can</i></th></tr>
<tr><td>yo</td><td class="irr">voy</td><td class="irr">tengo</td><td class="irr">hago</td><td class="irr">quiero</td><td class="irr">puedo</td></tr>
<tr><td>tú</td><td class="irr">vas</td><td class="irr">tienes</td><td>haces</td><td class="irr">quieres</td><td class="irr">puedes</td></tr>
<tr><td>él/ella</td><td class="irr">va</td><td class="irr">tiene</td><td>hace</td><td class="irr">quiere</td><td class="irr">puede</td></tr>
<tr><td>nosotros</td><td class="irr">vamos</td><td>tenemos</td><td>hacemos</td><td>queremos</td><td>podemos</td></tr>
<tr><td>vosotros</td><td class="irr">vais</td><td>tenéis</td><td>hacéis</td><td>queréis</td><td>podéis</td></tr>
<tr><td>ellos</td><td class="irr">van</td><td class="irr">tienen</td><td>hacen</td><td class="irr">quieren</td><td class="irr">pueden</td></tr></table>
<table><tr><th>verbo</th><th>yo</th><th>tú</th><th>él</th><th>nos.</th><th>ellos</th></tr>
<tr><td>venir <i class="en">come</i></td><td class="irr">vengo</td><td class="irr">vienes</td><td class="irr">viene</td><td>venimos</td><td class="irr">vienen</td></tr>
<tr><td>decir <i class="en">say</i></td><td class="irr">digo</td><td class="irr">dices</td><td class="irr">dice</td><td>decimos</td><td class="irr">dicen</td></tr>
<tr><td>saber <i class="en">know</i></td><td class="irr">sé</td><td>sabes</td><td>sabe</td><td>sabemos</td><td>saben</td></tr>
<tr><td>salir <i class="en">go out</i></td><td class="irr">salgo</td><td>sales</td><td>sale</td><td>salimos</td><td>salen</td></tr>
<tr><td>poner <i class="en">put</i></td><td class="irr">pongo</td><td>pones</td><td>pone</td><td>ponemos</td><td>ponen</td></tr>
<tr><td>dar <i class="en">give</i></td><td class="irr">doy</td><td>das</td><td>da</td><td>damos</td><td>dan</td></tr></table>
<p><span class="irr">Rojo</span> = cambio irregular. <span class="en">Red = irregular form. Stem changes (e→ie, o→ue, e→i) don't affect nosotros/vosotros.</span></p></div>
<div class="card"><h3>Cambios en la raíz <span class="en">(stem-changing verbs)</span></h3>
<table><tr><th>cambio</th><th>ejemplos</th><th>yo / nosotros</th></tr>
<tr><td>e → ie</td><td>querer, pensar, empezar, preferir, entender</td><td><span class="irr">empiezo</span> / empezamos</td></tr>
<tr><td>o → ue</td><td>poder, dormir, volver, encontrar, contar</td><td><span class="irr">duermo</span> / dormimos</td></tr>
<tr><td>u → ue</td><td>jugar</td><td><span class="irr">juego</span> / jugamos</td></tr>
<tr><td>e → i</td><td>pedir, repetir, servir, vestirse</td><td><span class="irr">pido</span> / pedimos</td></tr></table>
<div class="tip"><b>Truco / Trick:</b> Son "verbos bota" 👢: si escribes la tabla, las formas que cambian (yo, tú, él, ellos) forman una bota. Nosotros y vosotros quedan fuera. <span class="en">"Boot verbs": the changing forms make a boot shape; nosotros/vosotros stay regular.</span></div>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Yo sabo. ✅ Yo sé. <span class="en">I know.</span><br>❌ Yo salo a las ocho. ✅ Yo salgo a las ocho. <span class="en">I leave at eight.</span><br>❌ Nosotros quieremos. ✅ Nosotros queremos. <span class="en">We want.</span><br>❌ Él juga al tenis. ✅ Él juega al tenis. <span class="en">He plays tennis.</span></p></div>`,
  voc: [
    ["🚶", "ir", "to go"],
    ["🤲", "tener", "to have"],
    ["🛠️", "hacer", "to do / to make"],
    ["❤️", "querer", "to want / to love"],
    ["💪", "poder", "can / to be able to"],
    ["🗣️", "decir", "to say / to tell"],
    ["🧠", "saber", "to know"],
    ["🚪", "salir", "to go out / to leave"],
    ["😴", "dormir", "to sleep"],
    ["🍽️", "pedir", "to ask for / to order"]
  ],
  ex: [
    { q: "Yo ___ dos hermanos. (tener)", a: ["tengo"], t: "I have two siblings." },
    { q: "Ella ___ al cine. (ir)", a: ["va"], t: "She goes to the cinema." },
    { q: "Nosotros ___ pizza. (querer)", a: ["queremos"], t: "We want pizza." },
    { q: "Ellos ___ la verdad. (decir)", a: ["dicen"], t: "They tell the truth." },
    { q: "¿Tú ___ venir mañana? (poder)", o: ["puedes", "podes", "puedas"], a: 0, t: "Can you come tomorrow?" },
    { q: "Yo ___ deporte los lunes.", o: ["hago", "hace", "hacho"], a: 0, t: "I do sport on Mondays." },
    { q: "Yo no ___ la respuesta.", o: ["sabo", "sé", "sabe"], a: 1, t: "I don't know the answer." },
    { q: "Yo ___ a las ocho. (salir)", o: ["salo", "salgo", "sale"], a: 1, t: "I leave at eight." },
    { w: "Mi hermano duerme ocho horas.", t: "My brother sleeps eight hours." },
    { w: "Nosotros jugamos al fútbol los sábados.", t: "We play football on Saturdays." },
    { w: "¿A qué hora vuelves a casa?", t: "What time do you come back home?" },
    { w: "Yo pongo la mesa para cenar.", t: "I set the table for dinner." }
  ],
  tx: {
    ti: "Un día normal",
    b: `Todos los días <u>me levanto</u> a las siete y <u>desayuno</u> café con tostadas. Mi hermano <u>tiene</u> clase a las nueve, así que <u>sale</u> pronto. Yo <u>voy</u> al trabajo en metro y normalmente leo un libro en el viaje.<br><br>En la oficina <u>empiezo</u> a trabajar a las ocho y media. A mediodía mis compañeros y yo comemos en un bar pequeño; yo siempre <u>pido</u> el menú del día porque es barato. Por la tarde <u>vuelvo</u> a casa y <u>hago</u> deporte en el parque.<br><br>Los viernes mis amigos <u>quieren</u> cenar fuera, pero yo no <u>puedo</u> porque <u>tengo</u> que estudiar alemán. Mi profesora <u>dice</u> que ya <u>sé</u> mucho, pero yo <u>prefiero</u> estudiar más. Por la noche <u>duermo</u> muy bien.`
  },
  q: [
    ["¿Cómo va al trabajo?", ["En coche", "En metro", "A pie"], 1],
    ["¿Qué hace por la tarde?", ["Deporte", "Compras", "Nada"], 0],
    ["¿Por qué no cena con sus amigos?", ["Está enfermo", "Tiene que estudiar", "No quiere"], 1],
    ["¿Qué pide a mediodía?", ["Una ensalada", "El menú del día", "Un bocadillo"], 1]
  ],
  sp: [
    "¿Qué haces todos los días? Usa 'voy', 'tengo', 'hago'.",
    "¿Qué quieres hacer este fin de semana?",
    "¿Qué puedes hacer muy bien? ¿Qué no puedes hacer?",
    "¿A qué hora sales de casa?",
    "¿Qué dices cuando no sabes algo?",
    "¿Cuántas horas duermes normalmente? ¿A qué hora vuelves a casa?"
  ]
},

/* ───────────── 3. ESTAR + GERUNDIO ───────────── */
{
  id: "a2-ger",
  lvl: "A2",
  k: "g",
  t: "Estar + gerundio",
  en: "Present progressive (be + -ing)",
  ic: "🏃",
  th: `<div class="card"><h2>Estar + gerundio <span class="en">(what is happening right now)</span></h2>
<p>Usamos <b>estar</b> (presente) + <b>gerundio</b> para hablar de una acción que pasa en este momento. <span class="en">We use estar + gerund for an action in progress now.</span></p>
<table><tr><th>verbo</th><th>gerundio</th><th>ejemplo</th></tr>
<tr><td>-AR hablar</td><td>habl<b class="reg">ando</b></td><td>Estoy hablando por teléfono. <span class="en">I'm talking on the phone.</span></td></tr>
<tr><td>-ER comer</td><td>com<b class="reg">iendo</b></td><td>Estamos comiendo. <span class="en">We're eating.</span></td></tr>
<tr><td>-IR escribir</td><td>escrib<b class="reg">iendo</b></td><td>Ana está escribiendo. <span class="en">Ana is writing.</span></td></tr></table>
<table><tr><th>estar</th><th>+ gerundio</th></tr>
<tr><td>yo estoy</td><td rowspan="6">trabajando / leyendo / durmiendo…</td></tr>
<tr><td>tú estás</td></tr><tr><td>él/ella/usted está</td></tr><tr><td>nosotros estamos</td></tr><tr><td>vosotros estáis</td></tr><tr><td>ellos/ustedes están</td></tr></table>
<p>También para situaciones temporales: Este mes estoy trabajando en Lima. <span class="en">This month I'm working in Lima.</span></p></div>
<div class="card"><h3>Gerundios irregulares <span class="en">(irregular gerunds)</span></h3>
<table><tr><th>cambio</th><th>verbos</th></tr>
<tr><td>vocal + -iendo → <b>-yendo</b></td><td>leer → <span class="irr">leyendo</span>, oír → <span class="irr">oyendo</span>, ir → <span class="irr">yendo</span>, traer → <span class="irr">trayendo</span>, construir → <span class="irr">construyendo</span></td></tr>
<tr><td>e → i</td><td>decir → <span class="irr">diciendo</span>, pedir → <span class="irr">pidiendo</span>, servir → <span class="irr">sirviendo</span>, sentir → <span class="irr">sintiendo</span>, venir → <span class="irr">viniendo</span></td></tr>
<tr><td>o → u</td><td>dormir → <span class="irr">durmiendo</span>, morir → <span class="irr">muriendo</span>, poder → <span class="irr">pudiendo</span></td></tr></table>
<div class="tip"><b>Truco / Trick:</b> Si la raíz termina en vocal (<i>le-er, o-ír</i>), la <i>i</i> se convierte en <i>y</i>: leyendo. <span class="en">If the stem ends in a vowel, -iendo becomes -yendo.</span></div>
<p>Pronombres: <b>Me estoy duchando</b> = <b>Estoy duchándome</b>. <span class="en">I'm having a shower. (Note the accent when the pronoun is attached.)</span></p>
<p>🌎 España: <i>Estoy conduciendo</i>. Latinoamérica: <i>Estoy manejando</i>. <span class="en">I'm driving.</span></p></div>
<div class="card"><h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Estoy leiendo. ✅ Estoy leyendo. <span class="en">I'm reading.</span><br>❌ Soy comiendo. ✅ Estoy comiendo. <span class="en">I'm eating.</span><br>❌ Mañana estoy viajando a Roma. ✅ Mañana viajo / voy a viajar a Roma. <span class="en">For future plans Spanish uses the present or "ir a".</span><br>❌ Estoy teniendo un coche nuevo. ✅ Tengo un coche nuevo. <span class="en">Verbs like tener, saber, querer are not normally used with -ando.</span></p></div>`,
  voc: [
    ["📖", "leyendo", "reading"],
    ["😴", "durmiendo", "sleeping"],
    ["🗣️", "diciendo", "saying"],
    ["🍳", "cocinando", "cooking"],
    ["🏃", "corriendo", "running"],
    ["🎧", "escuchando", "listening"],
    ["✍️", "escribiendo", "writing"],
    ["🍽️", "pidiendo", "ordering / asking for"],
    ["👂", "oyendo", "hearing"],
    ["🚗", "conduciendo", "driving"]
  ],
  ex: [
    { q: "Ahora mismo yo ___ la tele.", o: ["estoy viendo", "soy viendo", "estoy vendo"], a: 0, t: "Right now I'm watching TV." },
    { q: "El bebé está ___. ¡No hagas ruido!", o: ["dormiendo", "durmiendo", "duermendo"], a: 1, t: "The baby is sleeping. Don't make any noise!" },
    { q: "¿Qué estás ___? — Una novela de García Márquez.", o: ["leyendo", "leiendo", "leendo"], a: 0, t: "What are you reading? — A novel by García Márquez." },
    { q: "Mis padres ___ en un restaurante ahora.", o: ["están cenando", "están cenado", "son cenando"], a: 0, t: "My parents are having dinner in a restaurant now." },
    { q: "Nosotros ___ español este año. (estar + estudiar)", a: ["estamos estudiando"], t: "We are studying Spanish this year." },
    { q: "¿Qué ___ tú? No te oigo bien. (estar + decir)", a: ["estás diciendo"], t: "What are you saying? I can't hear you well." },
    { q: "El camarero está ___ la comida. (servir)", a: ["sirviendo"], t: "The waiter is serving the food." },
    { q: "Ella está ___ un café. (pedir)", a: ["pidiendo"], t: "She is ordering a coffee." },
    { w: "¿Qué estás haciendo ahora mismo?", t: "What are you doing right now?" },
    { w: "Mi hermana está escribiendo un correo.", t: "My sister is writing an email." },
    { w: "Los niños están jugando en el parque.", t: "The children are playing in the park." },
    { w: "Me estoy duchando, te llamo luego.", t: "I'm having a shower, I'll call you later." }
  ],
  tx: {
    ti: "Un domingo en casa",
    b: `Es domingo por la tarde y mi familia está en casa, en Guadalajara (México). Mi madre <u>está cocinando</u> pozole en la cocina y mi padre <u>está leyendo</u> el periódico en el sofá. Mi abuelo <u>está durmiendo</u> la siesta y ronca un poco.<br><br>Mi hermano Diego <u>está jugando</u> a los videojuegos con un amigo. Los dos <u>están gritando</u> mucho, y mi madre les <u>está diciendo</u>: «¡Más bajo, por favor!». Mi hermana pequeña <u>está viendo</u> dibujos animados.<br><br>¿Y yo? Yo <u>estoy escribiendo</u> este texto para mi clase de español. Este mes <u>estoy aprendiendo</u> muchas cosas nuevas. Ahora <u>está empezando</u> a llover y mi perro <u>está durmiendo</u> debajo de la mesa. ¡Qué tranquilo!`
  },
  q: [
    ["¿Qué está haciendo la madre?", ["Está leyendo", "Está cocinando", "Está durmiendo"], 1],
    ["¿Quién está durmiendo la siesta?", ["El abuelo", "El padre", "Diego"], 0],
    ["¿Para qué está escribiendo el texto?", ["Para un amigo", "Para su clase de español", "Para el periódico"], 1],
    ["¿Qué tiempo hace al final?", ["Hace sol", "Está empezando a llover", "Hace mucho frío"], 1]
  ],
  sp: [
    "¿Qué estás haciendo ahora mismo?",
    "¿Qué crees que está haciendo tu familia en este momento?",
    "¿Qué estás aprendiendo este año? ¿Qué libro o serie estás viendo?",
    "Mira por la ventana y describe qué está pasando en la calle.",
    "¿Qué crees que están haciendo tus amigos ahora?",
    "Un amigo te llama, pero no puedes hablar. Explícale por qué usando estar + gerundio."
  ]
},

/* ───────────── 4. PRETÉRITO PERFECTO ───────────── */
{
  id: "a2-perf",
  lvl: "A2",
  k: "g",
  t: "Pretérito perfecto",
  en: "Present perfect (he hablado)",
  ic: "✅",
  th: `<div class="card"><h2>Pretérito perfecto <span class="en">(I have done)</span></h2>
<p>Se forma con <b>haber</b> (presente) + <b>participio</b>. <span class="en">It is formed with haber + past participle.</span></p>
<table><tr><th></th><th>haber</th><th>-AR hablar</th><th>-ER comer</th><th>-IR vivir</th></tr>
<tr><td>yo</td><td class="irr">he</td><td rowspan="6">habl<b class="reg">ado</b></td><td rowspan="6">com<b class="reg">ido</b></td><td rowspan="6">viv<b class="reg">ido</b></td></tr>
<tr><td>tú</td><td class="irr">has</td></tr>
<tr><td>él/ella/usted</td><td class="irr">ha</td></tr>
<tr><td>nosotros</td><td class="irr">hemos</td></tr>
<tr><td>vosotros</td><td>habéis</td></tr>
<tr><td>ellos/ustedes</td><td class="irr">han</td></tr></table>
<p>Hoy he comido con mi jefa. <span class="en">Today I've had lunch with my boss.</span><br>¿Habéis vivido en el extranjero? <span class="en">Have you lived abroad?</span></p></div>
<div class="card"><h3>Participios irregulares <span class="en">(irregular participles)</span></h3>
<table><tr><th>infinitivo</th><th>participio</th><th>infinitivo</th><th>participio</th></tr>
<tr><td>hacer <i class="en">do</i></td><td class="irr">hecho</td><td>volver <i class="en">return</i></td><td class="irr">vuelto</td></tr>
<tr><td>decir <i class="en">say</i></td><td class="irr">dicho</td><td>abrir <i class="en">open</i></td><td class="irr">abierto</td></tr>
<tr><td>ver <i class="en">see</i></td><td class="irr">visto</td><td>romper <i class="en">break</i></td><td class="irr">roto</td></tr>
<tr><td>escribir <i class="en">write</i></td><td class="irr">escrito</td><td>morir <i class="en">die</i></td><td class="irr">muerto</td></tr>
<tr><td>poner <i class="en">put</i></td><td class="irr">puesto</td><td>descubrir <i class="en">discover</i></td><td class="irr">descubierto</td></tr></table>
<div class="tip"><b>Truco / Trick:</b> El participio no cambia nunca: <i>Ella ha comido</i> (no "ha comida"). Y no ponemos nada entre <i>haber</i> y el participio: <i>Ya lo he visto.</i> <span class="en">The participle never changes, and nothing goes between haber and the participle.</span></div></div>
<div class="card"><h3>¿Cuándo lo usamos? <span class="en">(when do we use it?)</span></h3>
<p>Con tiempo que no ha terminado y con experiencias: <b>hoy, esta mañana, esta semana, este año, ya, todavía no, alguna vez, nunca, últimamente</b>.</p>
<p>Ya he terminado. <span class="en">I've already finished.</span><br>Todavía no hemos comprado los billetes. <span class="en">We haven't bought the tickets yet.</span><br>¿Has estado alguna vez en Cuba? <span class="en">Have you ever been to Cuba?</span><br>Nunca he visto la nieve. <span class="en">I've never seen snow.</span></p>
<p>🌎 En gran parte de Latinoamérica se prefiere el indefinido: <i>¿Ya comiste?</i> (España: <i>¿Ya has comido?</i>). <span class="en">Much of Latin America prefers the simple past here.</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ He hacido los deberes. ✅ He hecho los deberes. <span class="en">I've done my homework.</span><br>❌ Ayer he ido al cine. ✅ Ayer fui al cine. <span class="en">"Ayer" needs the simple past.</span><br>❌ He no visto la película. ✅ No he visto la película. <span class="en">I haven't seen the film.</span><br>❌ Ellas han comidas. ✅ Ellas han comido. <span class="en">They have eaten.</span></p></div>`,
  voc: [
    ["✅", "ya", "already"],
    ["⏳", "todavía no", "not yet"],
    ["❓", "alguna vez", "ever"],
    ["🚫", "nunca", "never"],
    ["📅", "esta semana", "this week"],
    ["🛠️", "hecho", "done / made"],
    ["👀", "visto", "seen"],
    ["✍️", "escrito", "written"],
    ["💔", "roto", "broken"],
    ["🔙", "vuelto", "come back, returned"]
  ],
  ex: [
    { q: "Esta mañana ___ café con leche.", o: ["he tomado", "ha tomado", "he tomada"], a: 0, t: "This morning I've had white coffee." },
    { q: "¿___ alguna vez en México?", o: ["Has estado", "Has estada", "Ha estás"], a: 0, t: "Have you ever been to Mexico?" },
    { q: "Todavía no ___ los deberes.", o: ["he hacido", "he hecho", "he hago"], a: 1, t: "I haven't done my homework yet." },
    { q: "Hoy los niños ___ muy pronto.", o: ["se han levantado", "se ha levantado", "han se levantado"], a: 0, t: "Today the children have got up very early." },
    { q: "¿Quién ___ la ventana? (romper)", a: ["ha roto"], t: "Who has broken the window?" },
    { q: "Nosotros nunca ___ esa película. (ver)", a: ["hemos visto"], t: "We have never seen that film." },
    { q: "Ana ya ___ el correo. (escribir)", a: ["ha escrito"], t: "Ana has already written the email." },
    { q: "¿Qué ___ vosotros este fin de semana? (hacer)", a: ["habéis hecho"], t: "What have you (all) done this weekend?" },
    { w: "Esta semana he trabajado mucho.", t: "This week I've worked a lot." },
    { w: "Todavía no hemos comprado los billetes.", t: "We haven't bought the tickets yet." },
    { w: "¿Has estado alguna vez en Perú?", t: "Have you ever been to Peru?" },
    { w: "Mis padres han vuelto de Italia.", t: "My parents have come back from Italy." }
  ],
  tx: {
    ti: "Un correo de Carmen",
    b: `¡Hola, Marta! ¿Qué tal? Yo estoy muy bien. Esta semana <u>ha sido</u> muy intensa. <u>He empezado</u> un curso de cocina y <u>ya</u> <u>he aprendido</u> a hacer una tortilla de patatas perfecta. También <u>he visto</u> dos películas en el cine con mi primo Andrés.<br><br>Hoy <u>he tenido</u> un día un poco raro: esta mañana se me <u>ha roto</u> el móvil y no <u>he podido</u> llamar a nadie. Por eso te <u>he escrito</u> este correo desde el ordenador.<br><br>¿Y tú? ¿<u>Has terminado</u> ya los exámenes? ¿<u>Has estado</u> <u>alguna vez</u> en Valencia? Yo <u>todavía no</u> la <u>he visitado</u>, pero quiero ir en mayo. ¡Escríbeme pronto!<br><br>Un abrazo,<br>Carmen`
  },
  q: [
    ["¿Qué ha aprendido Carmen?", ["A hacer paella", "A hacer tortilla de patatas", "A bailar salsa"], 1],
    ["¿Con quién ha ido al cine?", ["Con su primo Andrés", "Con Marta", "Sola"], 0],
    ["¿Por qué escribe desde el ordenador?", ["Porque no está en casa", "Porque se le ha roto el móvil", "Porque está en clase"], 1],
    ["¿Ha visitado Carmen Valencia?", ["Sí, muchas veces", "Sí, esta semana", "No, todavía no"], 2]
  ],
  sp: [
    "¿Qué has hecho hoy desde que te has levantado?",
    "¿Has estado alguna vez en un país hispanohablante? ¿Dónde?",
    "Di tres cosas que ya has hecho esta semana y dos que todavía no has hecho.",
    "¿Cuál es la comida más rara que has probado alguna vez?",
    "¿Has leído un buen libro o has visto una buena serie últimamente? Cuéntalo.",
    "¿Qué cosa no has hecho nunca y quieres hacer?"
  ]
},

/* ───────────── 5. PRETÉRITO INDEFINIDO ───────────── */
{
  id: "a2-indef",
  lvl: "A2",
  k: "g",
  t: "Pretérito indefinido",
  en: "Simple past (preterite)",
  ic: "📜",
  th: `<div class="card"><h2>Pretérito indefinido <span class="en">(simple past: finished actions)</span></h2>
<table><tr><th></th><th>-AR hablar</th><th>-ER comer</th><th>-IR vivir</th></tr>
<tr><td>yo</td><td>habl<b class="reg">é</b></td><td>com<b class="reg">í</b></td><td>viv<b class="reg">í</b></td></tr>
<tr><td>tú</td><td>habl<b class="reg">aste</b></td><td>com<b class="reg">iste</b></td><td>viv<b class="reg">iste</b></td></tr>
<tr><td>él/ella/usted</td><td>habl<b class="reg">ó</b></td><td>com<b class="reg">ió</b></td><td>viv<b class="reg">ió</b></td></tr>
<tr><td>nosotros</td><td>habl<b class="reg">amos</b></td><td>com<b class="reg">imos</b></td><td>viv<b class="reg">imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b class="reg">asteis</b></td><td>com<b class="reg">isteis</b></td><td>viv<b class="reg">isteis</b></td></tr>
<tr><td>ellos/ustedes</td><td>habl<b class="reg">aron</b></td><td>com<b class="reg">ieron</b></td><td>viv<b class="reg">ieron</b></td></tr></table>
<p>Cambios de ortografía en <i>yo</i>: llegar → <span class="irr">llegué</span>, buscar → <span class="irr">busqué</span>, empezar → <span class="irr">empecé</span>. Y leer → <span class="irr">leyó, leyeron</span>. <span class="en">Spelling changes keep the sound.</span></p>
<p>Ayer hablé con mi madre. <span class="en">Yesterday I spoke to my mother.</span><br>En 2010 vivimos en Quito. <span class="en">In 2010 we lived in Quito.</span></p></div>
<div class="card"><h3>Irregulares clave <span class="en">(key irregulars)</span></h3>
<p><b>ser / ir</b> (¡iguales!): <span class="irr">fui, fuiste, fue, fuimos, fuisteis, fueron</span></p>
<p>Otros irregulares: raíz nueva + <b class="reg">-e, -iste, -o, -imos, -isteis, -ieron</b> <span class="en">(new stem + these endings, no accents)</span></p>
<table><tr><th>verbo</th><th>yo</th><th>tú</th><th>él/ella</th><th>nosotros</th><th>ellos</th></tr>
<tr><td>tener</td><td class="irr">tuve</td><td class="irr">tuviste</td><td class="irr">tuvo</td><td class="irr">tuvimos</td><td class="irr">tuvieron</td></tr>
<tr><td>estar</td><td class="irr">estuve</td><td class="irr">estuviste</td><td class="irr">estuvo</td><td class="irr">estuvimos</td><td class="irr">estuvieron</td></tr>
<tr><td>hacer</td><td class="irr">hice</td><td class="irr">hiciste</td><td class="irr">hizo</td><td class="irr">hicimos</td><td class="irr">hicieron</td></tr>
<tr><td>poder</td><td class="irr">pude</td><td class="irr">pudiste</td><td class="irr">pudo</td><td class="irr">pudimos</td><td class="irr">pudieron</td></tr>
<tr><td>poner</td><td class="irr">puse</td><td class="irr">pusiste</td><td class="irr">puso</td><td class="irr">pusimos</td><td class="irr">pusieron</td></tr>
<tr><td>venir</td><td class="irr">vine</td><td class="irr">viniste</td><td class="irr">vino</td><td class="irr">vinimos</td><td class="irr">vinieron</td></tr>
<tr><td>decir</td><td class="irr">dije</td><td class="irr">dijiste</td><td class="irr">dijo</td><td class="irr">dijimos</td><td class="irr">dijeron</td></tr></table>
<div class="tip"><b>Truco / Trick:</b> Los irregulares no llevan tilde: <i>tuve, hizo, vino</i>. <i>Fui</i> puede ser de <i>ser</i> o de <i>ir</i>: el contexto lo explica (Fui profesor / Fui a Lima). <span class="en">Irregular forms have no written accent; "fui" = I was / I went.</span></div></div>
<div class="card"><h3>Marcadores temporales <span class="en">(time expressions)</span></h3>
<p><b>ayer, anoche, anteayer, el lunes pasado, la semana pasada, el año pasado, hace dos años, en 2010</b></p>
<p>Hace dos años fuimos a Cuba. <span class="en">Two years ago we went to Cuba.</span><br>La semana pasada no pude ir al gimnasio. <span class="en">Last week I couldn't go to the gym.</span></p>
<p>🌎 En Latinoamérica se usa también para el pasado reciente: <i>Hoy comí con mi jefe.</i> <span class="en">Latin America also uses it for today's actions.</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Ayer he ido al médico. ✅ Ayer fui al médico. <span class="en">Yesterday I went to the doctor.</span><br>❌ Él hació la cena. ✅ Él hizo la cena. <span class="en">He made dinner.</span><br>❌ Yo tení un perro. ✅ Yo tuve un perro. <span class="en">I had a dog.</span><br>❌ Ellos dijieron. ✅ Ellos dijeron. <span class="en">They said.</span><br>❌ Ayer yo hable con Pepe. ✅ Ayer yo hablé con Pepe. <span class="en">The accent matters: hable ≠ hablé.</span></p></div>`,
  voc: [
    ["📅", "ayer", "yesterday"],
    ["🌙", "anoche", "last night"],
    ["🗓️", "el año pasado", "last year"],
    ["⏪", "hace dos años", "two years ago"],
    ["✈️", "fui", "I went / I was"],
    ["🤲", "tuve", "I had"],
    ["🛠️", "hice", "I did / I made"],
    ["🗣️", "dije", "I said"],
    ["🚶", "vine", "I came"],
    ["📦", "puse", "I put"]
  ],
  ex: [
    { q: "Ayer ___ al cine con mis amigos.", o: ["fui", "fue", "he ido"], a: 0, t: "Yesterday I went to the cinema with my friends." },
    { q: "El año pasado Pedro ___ un viaje a Chile.", o: ["hizo", "hació", "hice"], a: 0, t: "Last year Pedro went on a trip to Chile." },
    { q: "En 2010 mis padres ___ en Buenos Aires.", o: ["vivieron", "vivió", "vivimos"], a: 0, t: "In 2010 my parents lived in Buenos Aires." },
    { q: "¿Qué le ___ tú a Marta anoche?", o: ["dijiste", "diciste", "dijistes"], a: 0, t: "What did you say to Marta last night?" },
    { q: "Anoche yo no ___ dormir bien. (poder)", a: ["pude"], t: "Last night I couldn't sleep well." },
    { q: "Ellos ___ a la fiesta en taxi. (venir)", a: ["vinieron"], t: "They came to the party by taxi." },
    { q: "¿Dónde ___ las llaves? (tú, poner)", a: ["pusiste"], t: "Where did you put the keys?" },
    { q: "La semana pasada nosotros ___ en Granada. (estar)", a: ["estuvimos"], t: "Last week we were in Granada." },
    { w: "Ayer llegué a casa muy tarde.", t: "Yesterday I got home very late." },
    { w: "El verano pasado fuimos a Cuba.", t: "Last summer we went to Cuba." },
    { w: "Mi abuela nació en un pueblo pequeño.", t: "My grandmother was born in a small village." },
    { w: "¿Qué hiciste el fin de semana?", t: "What did you do at the weekend?" }
  ],
  tx: {
    ti: "Un viaje a Perú",
    b: `El año pasado <u>fui</u> a Perú con mi amiga Sofía. <u>Llegamos</u> a Lima en julio y <u>estuvimos</u> allí tres días. <u>Comimos</u> ceviche en un restaurante del barrio de Miraflores y <u>visitamos</u> muchos museos.<br><br>Después <u>tomamos</u> un autobús a Cusco. El viaje <u>fue</u> muy largo, pero el paisaje <u>fue</u> espectacular. En Cusco <u>tuve</u> un pequeño problema: el segundo día no <u>pude</u> salir del hotel porque me <u>dolió</u> mucho la cabeza por la altura. Sofía me <u>hizo</u> un té de coca y al día siguiente <u>pude</u> salir sin problemas.<br><br>Finalmente <u>subimos</u> a Machu Picchu. Un guía muy simpático nos <u>dijo</u> que la ciudad se <u>construyó</u> en el siglo XV. ¡<u>Hicimos</u> cien fotos! <u>Volvimos</u> a España en agosto, cansadas pero muy felices.`
  },
  q: [
    ["¿Cuándo llegaron a Lima?", ["En julio", "En agosto", "En mayo"], 0],
    ["¿Qué comieron en Lima?", ["Paella", "Ceviche", "Tacos"], 1],
    ["¿Por qué no pudo salir del hotel?", ["Porque llovió", "Porque le dolió la cabeza", "Porque perdió el pasaporte"], 1],
    ["¿Qué les dijo el guía?", ["Que Machu Picchu se construyó en el siglo XV", "Que el hotel cerró", "Que el autobús llegó tarde"], 0]
  ],
  sp: [
    "¿Qué hiciste ayer por la tarde?",
    "Cuenta tu último viaje: ¿adónde fuiste, con quién y qué hiciste?",
    "¿Dónde estuviste el fin de semana pasado?",
    "¿Qué pasó en tu vida en un año importante (por ejemplo, en 2020)?",
    "¿Cuándo fue la última vez que comiste en un restaurante? ¿Qué pediste?",
    "Cuenta una anécdota divertida: ¿qué te pasó y qué dijiste?"
  ]
},

/* ───────────── 6. PRETÉRITO IMPERFECTO ───────────── */
{
  id: "a2-imperf",
  lvl: "A2",
  k: "g",
  t: "Pretérito imperfecto",
  en: "Imperfect past (used to / was …ing)",
  ic: "🕰️",
  th: `<div class="card"><h2>Pretérito imperfecto <span class="en">(used to / was …ing)</span></h2>
<table><tr><th></th><th>-AR jugar</th><th>-ER comer</th><th>-IR vivir</th></tr>
<tr><td>yo</td><td>jug<b class="reg">aba</b></td><td>com<b class="reg">ía</b></td><td>viv<b class="reg">ía</b></td></tr>
<tr><td>tú</td><td>jug<b class="reg">abas</b></td><td>com<b class="reg">ías</b></td><td>viv<b class="reg">ías</b></td></tr>
<tr><td>él/ella/usted</td><td>jug<b class="reg">aba</b></td><td>com<b class="reg">ía</b></td><td>viv<b class="reg">ía</b></td></tr>
<tr><td>nosotros</td><td>jug<b class="reg">ábamos</b></td><td>com<b class="reg">íamos</b></td><td>viv<b class="reg">íamos</b></td></tr>
<tr><td>vosotros</td><td>jug<b class="reg">abais</b></td><td>com<b class="reg">íais</b></td><td>viv<b class="reg">íais</b></td></tr>
<tr><td>ellos/ustedes</td><td>jug<b class="reg">aban</b></td><td>com<b class="reg">ían</b></td><td>viv<b class="reg">ían</b></td></tr></table>
<h3>Solo 3 irregulares <span class="en">(only 3 irregular verbs)</span></h3>
<table><tr><th></th><th>ser</th><th>ir</th><th>ver</th></tr>
<tr><td>yo</td><td class="irr">era</td><td class="irr">iba</td><td class="irr">veía</td></tr>
<tr><td>tú</td><td class="irr">eras</td><td class="irr">ibas</td><td class="irr">veías</td></tr>
<tr><td>él/ella</td><td class="irr">era</td><td class="irr">iba</td><td class="irr">veía</td></tr>
<tr><td>nosotros</td><td class="irr">éramos</td><td class="irr">íbamos</td><td class="irr">veíamos</td></tr>
<tr><td>vosotros</td><td class="irr">erais</td><td class="irr">ibais</td><td class="irr">veíais</td></tr>
<tr><td>ellos</td><td class="irr">eran</td><td class="irr">iban</td><td class="irr">veían</td></tr></table>
<div class="tip"><b>Truco / Trick:</b> La forma de <i>yo</i> y de <i>él/ella</i> es igual (yo jugaba / él jugaba). Usa el pronombre si no está claro. <span class="en">The yo and él forms are identical; add the pronoun if needed.</span></div></div>
<div class="card"><h3>¿Para qué sirve? <span class="en">(what is it for?)</span></h3>
<p>1️⃣ <b>Hábitos en el pasado:</b> De niño jugaba al fútbol todos los días. <span class="en">As a child I used to play football every day.</span><br>2️⃣ <b>Descripciones:</b> La casa era grande y tenía un jardín. Hacía sol. <span class="en">The house was big and had a garden. It was sunny.</span><br>3️⃣ <b>Edad y hora:</b> Tenía diez años. Eran las ocho. <span class="en">I was ten. It was eight o'clock.</span><br>4️⃣ <b>Acción en desarrollo</b> (+ indefinido): Leía cuando sonó el teléfono. <span class="en">I was reading when the phone rang.</span></p>
<p>Marcadores: <b>antes, de niño/a, cuando era pequeño/a, siempre, todos los días, normalmente, a menudo, mientras</b>.</p>
<p>🌎 En Argentina y otros países se dice <i>de chico</i> = <i>de pequeño</i>. <span class="en">"De chico" = as a kid.</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Cuando fui niño, vivía en Quito. ✅ Cuando era niño, vivía en Quito. <span class="en">When I was a child, I lived in Quito.</span><br>❌ Nosotros jugabamos. ✅ Nosotros jugábamos. <span class="en">Don't forget the accent.</span><br>❌ Antes yo veo mucha tele. ✅ Antes yo veía mucha tele. <span class="en">I used to watch a lot of TV.</span><br>❌ Ayer era a la playa. ✅ Ayer fui a la playa. <span class="en">One finished action → indefinido.</span></p></div>`,
  voc: [
    ["👶", "de niño", "as a child"],
    ["🔁", "antes", "before, in the past"],
    ["🧒", "era", "I was / he was"],
    ["🚶", "iba", "I used to go / he used to go"],
    ["📺", "veía", "I used to watch / he used to watch"],
    ["🏖️", "todos los veranos", "every summer"],
    ["⏱️", "mientras", "while"],
    ["🏡", "vivía", "I used to live / he used to live"],
    ["⚽", "jugaba", "I used to play / he used to play"]
  ],
  ex: [
    { q: "Cuando ___ niño, vivía en Quito.", o: ["era", "fui", "soy"], a: 0, t: "When I was a child, I lived in Quito." },
    { q: "Antes nosotros ___ a la playa todos los veranos.", o: ["íbamos", "ibamos", "vamos"], a: 0, t: "We used to go to the beach every summer." },
    { q: "Mi abuela ___ el pelo largo y los ojos verdes.", o: ["tenía", "tenió", "tiene"], a: 0, t: "My grandmother had long hair and green eyes." },
    { q: "Yo leía cuando ___ el teléfono.", o: ["sonó", "sonía", "suena"], a: 0, t: "I was reading when the phone rang." },
    { q: "De pequeños, mis hermanos y yo ___ mucha televisión. (ver)", a: ["veíamos"], t: "As kids, my siblings and I used to watch a lot of TV." },
    { q: "Antes tú ___ en Bogotá, ¿verdad? (vivir)", a: ["vivías"], t: "You used to live in Bogotá, right?" },
    { q: "La casa de mis abuelos ___ muy grande. (ser)", a: ["era"], t: "My grandparents' house was very big." },
    { q: "Eran las diez y ___ mucho frío. (hacer)", a: ["hacía"], t: "It was ten o'clock and it was very cold." },
    { w: "Cuando era pequeña, tenía un perro.", t: "When I was little, I had a dog." },
    { w: "Todos los domingos comíamos en casa de mi abuela.", t: "Every Sunday we used to eat at my grandmother's." },
    { w: "Mi padre trabajaba en un banco.", t: "My father used to work in a bank." },
    { w: "Mientras cocinaba, escuchaba la radio.", t: "While I was cooking, I used to listen to the radio." }
  ],
  tx: {
    ti: "Mi infancia en Valparaíso",
    b: `Cuando <u>era</u> niño, <u>vivía</u> con mis padres y mi hermana en Valparaíso, en Chile. Nuestra casa <u>era</u> pequeña y azul, y <u>estaba</u> en un cerro con vistas al mar. Desde mi ventana <u>veía</u> los barcos del puerto.<br><br>Todos los días <u>iba</u> al colegio a pie con mi hermana. Por las tardes <u>jugábamos</u> al fútbol en la calle con los vecinos y mi madre siempre nos <u>llamaba</u> para merendar: <u>había</u> pan con palta y leche. Mi padre <u>trabajaba</u> en el puerto y <u>volvía</u> a casa muy cansado, pero los sábados nos <u>llevaba</u> a la playa.<br><br>En invierno <u>llovía</u> mucho y <u>hacía</u> frío, así que <u>leíamos</u> cómics en casa. <u>Éramos</u> una familia sencilla, pero muy feliz.`
  },
  q: [
    ["¿Cómo era la casa?", ["Grande y blanca", "Pequeña y azul", "Antigua y fea"], 1],
    ["¿Cómo iba al colegio?", ["En autobús", "En coche", "A pie"], 2],
    ["¿Dónde trabajaba su padre?", ["En el puerto", "En un banco", "En un colegio"], 0],
    ["¿Qué hacían en invierno?", ["Iban a la playa", "Leían cómics en casa", "Jugaban en la calle"], 1]
  ],
  sp: [
    "¿Dónde vivías cuando eras niño/a? ¿Cómo era tu casa?",
    "¿A qué jugabas de pequeño/a? ¿Con quién?",
    "¿Cómo era tu colegio? ¿Quién era tu profesor/a favorito/a?",
    "¿Qué hacías en verano cuando eras pequeño/a?",
    "Compara tu vida de antes con tu vida de ahora: ¿qué hacías antes que ya no haces?",
    "Describe a una persona importante de tu infancia: ¿cómo era?"
  ]
},

/* ───────────── 7. PRONOMBRES DE OBJETO ───────────── */
{
  id: "a2-pron",
  lvl: "A2",
  k: "g",
  t: "Pronombres de objeto directo e indirecto",
  en: "Direct and indirect object pronouns",
  ic: "🎁",
  th: `<div class="card"><h2>Pronombres de objeto <span class="en">(object pronouns: me, him, it, them…)</span></h2>
<table><tr><th>persona</th><th>directo (¿qué? ¿a quién?)</th><th>indirecto (¿a quién?)</th></tr>
<tr><td>yo</td><td>me</td><td>me</td></tr>
<tr><td>tú</td><td>te</td><td>te</td></tr>
<tr><td>él/ella/usted</td><td><b class="reg">lo / la</b></td><td><b class="reg">le</b></td></tr>
<tr><td>nosotros</td><td>nos</td><td>nos</td></tr>
<tr><td>vosotros</td><td>os</td><td>os</td></tr>
<tr><td>ellos/ellas/ustedes</td><td><b class="reg">los / las</b></td><td><b class="reg">les</b></td></tr></table>
<p><b>Directo</b> = la cosa o persona que recibe la acción. <span class="en">Direct = what/whom.</span><br>¿Tienes el libro? Sí, <b>lo</b> tengo. <span class="en">Do you have the book? Yes, I have it.</span><br>¿Ves a María? Sí, <b>la</b> veo. <span class="en">Do you see María? Yes, I see her.</span><br>Compro las flores → <b>Las</b> compro. <span class="en">I buy the flowers → I buy them.</span></p>
<p><b>Indirecto</b> = la persona que recibe algo. <span class="en">Indirect = to/for whom.</span><br><b>Le</b> doy un regalo a mi madre. <span class="en">I give my mother a present.</span><br><b>Les</b> escribo a mis abuelos. <span class="en">I write to my grandparents.</span></p></div>
<div class="card"><h3>Dos pronombres juntos <span class="en">(two pronouns together)</span></h3>
<p>Orden: <b>indirecto + directo</b>. <span class="en">Order: indirect + direct.</span><br>Me das el libro → <b>Me lo</b> das. <span class="en">You give it to me.</span></p>
<p><b class="irr">le / les + lo, la, los, las → se lo, se la, se los, se las</b><br>Le doy el libro a Juan → <b>Se lo</b> doy. <span class="en">I give it to him.</span><br>Les envío las fotos → <b>Se las</b> envío. <span class="en">I send them to them.</span></p>
<div class="tip"><b>Truco / Trick:</b> "Le lo" no existe en español. Cuando ves <i>le + lo</i>, cambia <i>le</i> por <i>se</i>: <b>se lo</b>. <span class="en">"Le lo" never exists: it becomes "se lo".</span></div></div>
<div class="card"><h3>¿Dónde va el pronombre? <span class="en">(position)</span></h3>
<table><tr><th>caso</th><th>ejemplo</th></tr>
<tr><td>verbo conjugado: antes</td><td><b>Lo</b> compro. <span class="en">I buy it.</span></td></tr>
<tr><td>infinitivo: antes o detrás</td><td><b>Lo</b> voy a comprar. = Voy a comprar<b>lo</b>. <span class="en">I'm going to buy it.</span></td></tr>
<tr><td>gerundio: antes o detrás</td><td><b>La</b> estoy leyendo. = Estoy leyéndo<b>la</b>. <span class="en">I'm reading it.</span></td></tr>
<tr><td>imperativo afirmativo: detrás</td><td>¡Cómpra<b>lo</b>! <span class="en">Buy it!</span></td></tr></table>
<p>🇪🇸 En España es normal usar <i>le</i> para un hombre: <i>Le vi ayer</i> (= <i>Lo vi ayer</i>, más común en Latinoamérica). <span class="en">"Leísmo": Spain often uses "le" for a male person.</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Quiero lo comprar. ✅ Lo quiero comprar. / Quiero comprarlo. <span class="en">I want to buy it.</span><br>❌ Le lo doy. ✅ Se lo doy. <span class="en">I give it to him/her.</span><br>❌ ¿La paella? Lo como mañana. ✅ ¿La paella? La como mañana. <span class="en">Paella is feminine.</span><br>❌ Estoy leyendola. ✅ Estoy leyéndola. <span class="en">Add the accent.</span></p></div>`,
  voc: [
    ["📕", "lo", "it / him (direct)"],
    ["🌸", "la", "it / her (direct)"],
    ["📚", "los", "them, masculine (direct)"],
    ["🍎", "las", "them, feminine (direct)"],
    ["🎁", "le", "to him / to her (indirect)"],
    ["👨‍👩‍👧", "les", "to them (indirect)"],
    ["🔁", "se lo", "it to him / her / them"],
    ["🤲", "dar", "to give"],
    ["✉️", "enviar", "to send"]
  ],
  ex: [
    { q: "¿Tienes las llaves? Sí, ___ tengo.", o: ["las", "los", "les"], a: 0, t: "Do you have the keys? Yes, I have them." },
    { q: "¿Has visto a Pedro? No, no ___ he visto.", o: ["lo", "la", "les"], a: 0, t: "Have you seen Pedro? No, I haven't seen him. (In Spain 'le he visto' is also common.)" },
    { q: "Le doy el regalo a Ana. → ___ doy.", o: ["Se lo", "Le lo", "Lo le"], a: 0, t: "I give the present to Ana. → I give it to her." },
    { q: "Voy a comprar el pan. → Voy a ___.", o: ["comprarlo", "lo comprar", "comprarla"], a: 0, t: "I'm going to buy the bread. → I'm going to buy it." },
    { q: "¿La película? Sí, ya ___ he visto. (pronombre)", a: ["la"], t: "The film? Yes, I've already seen it." },
    { q: "Escribo un correo a mis padres. → ___ escribo un correo. (pronombre)", a: ["les"], t: "I write an email to my parents. → I write them an email." },
    { q: "¿Me dejas tu boli? Sí, te ___ dejo. (pronombre)", a: ["lo"], t: "Will you lend me your pen? Yes, I'll lend it to you." },
    { q: "¿El libro? Se ___ he dado a Luis. (pronombre)", a: ["lo"], t: "The book? I've given it to Luis." },
    { w: "No te lo puedo contar.", t: "I can't tell you (it)." },
    { w: "¿Me lo puedes repetir, por favor?", t: "Can you repeat it for me, please?" },
    { w: "Quiero regalárselo a mi hermana.", t: "I want to give it to my sister as a present." },
    { w: "Mis abuelos nos llaman cada domingo.", t: "My grandparents call us every Sunday." }
  ],
  tx: {
    ti: "El cumpleaños de Marta",
    b: `Mañana es el cumpleaños de mi hermana Marta. Ayer fui a una librería del centro de Madrid. Vi un libro de recetas mexicanas muy bonito y <u>lo</u> compré enseguida, porque a Marta <u>le</u> encanta cocinar. La dependienta <u>me</u> preguntó: «¿<u>Se lo</u> envuelvo?». <u>Le</u> dije que sí, y <u>me lo</u> envolvió con un papel rojo precioso.<br><br>También quiero dar<u>le</u> unas flores. Mis padres siempre <u>le</u> compran rosas, así que yo voy a comprar<u>le</u> girasoles. <u>Los</u> voy a recoger mañana por la mañana en la floristería de mi barrio.<br><br>Mis primos de Buenos Aires no pueden venir, pero <u>les</u> he enviado fotos de la fiesta del año pasado. Ellos <u>las</u> han visto y <u>me</u> han escrito: «¡Queremos una foto de la tarta!».`
  },
  q: [
    ["¿Qué regalo compró en la librería?", ["Una novela", "Un libro de recetas", "Un diccionario"], 1],
    ["¿De qué color es el papel del regalo?", ["Azul", "Rojo", "Verde"], 1],
    ["¿Qué flores va a comprar?", ["Rosas", "Girasoles", "Tulipanes"], 1],
    ["¿Qué quieren los primos?", ["Una foto de la tarta", "Un regalo", "Ir a la fiesta"], 0]
  ],
  sp: [
    "¿Qué regalo le hiciste a tu mejor amigo/a en su último cumpleaños? ¿Cuándo se lo diste?",
    "¿Llamas mucho a tus padres o abuelos? ¿Cuándo los llamas?",
    "¿Dónde compras la ropa? ¿La compras por internet?",
    "¿Qué le dices a un amigo cuando está triste?",
    "Tu amigo te pide tu coche (o carro). ¿Se lo dejas? ¿Por qué?",
    "Explica cómo tomas el café o el té: ¿lo tomas con leche? ¿Con azúcar?"
  ]
},

/* ───────────── 8. COMPARATIVOS Y SUPERLATIVOS ───────────── */
{
  id: "a2-comp",
  lvl: "A2",
  k: "g",
  t: "Comparativos y superlativos",
  en: "Comparatives and superlatives",
  ic: "📏",
  th: `<div class="card"><h2>Comparativos <span class="en">(comparing things and people)</span></h2>
<table><tr><th>tipo</th><th>estructura</th><th>ejemplo</th></tr>
<tr><td>➕ superioridad</td><td><b class="reg">más</b> + adjetivo/nombre + <b class="reg">que</b></td><td>Madrid es más grande que Sevilla. <span class="en">Madrid is bigger than Seville.</span></td></tr>
<tr><td>➖ inferioridad</td><td><b class="reg">menos</b> + adjetivo/nombre + <b class="reg">que</b></td><td>El tren es menos caro que el avión. <span class="en">The train is less expensive than the plane.</span></td></tr>
<tr><td>🟰 igualdad (adjetivo/adverbio)</td><td><b class="reg">tan</b> + adjetivo + <b class="reg">como</b></td><td>Ana es tan alta como Luis. <span class="en">Ana is as tall as Luis.</span></td></tr>
<tr><td>🟰 igualdad (nombre)</td><td><b class="reg">tanto/a/os/as</b> + nombre + <b class="reg">como</b></td><td>Tengo tantos libros como tú. <span class="en">I have as many books as you.</span></td></tr>
<tr><td>🟰 igualdad (verbo)</td><td>verbo + <b class="reg">tanto como</b></td><td>Trabajo tanto como mi hermano. <span class="en">I work as much as my brother.</span></td></tr></table>
<p>Con números: <b>más de / menos de</b>. Hay más de cien personas. <span class="en">There are more than a hundred people.</span></p></div>
<div class="card"><h3>Comparativos irregulares <span class="en">(irregular comparatives)</span></h3>
<table><tr><th>adjetivo / adverbio</th><th>comparativo</th><th>ejemplo</th></tr>
<tr><td>bueno / bien</td><td class="irr">mejor</td><td>Este café es mejor que el otro. <span class="en">This coffee is better than the other one.</span></td></tr>
<tr><td>malo / mal</td><td class="irr">peor</td><td>Hoy el tiempo está peor que ayer. <span class="en">The weather is worse today than yesterday.</span></td></tr>
<tr><td>grande (edad)</td><td class="irr">mayor</td><td>Mi hermano es mayor que yo. <span class="en">My brother is older than me.</span></td></tr>
<tr><td>pequeño (edad)</td><td class="irr">menor</td><td>Laura es menor que Pablo. <span class="en">Laura is younger than Pablo.</span></td></tr></table>
<div class="tip"><b>Truco / Trick:</b> Para el tamaño usamos <i>más grande / más pequeño</i>; para la edad, <i>mayor / menor</i>. ¡Y nunca "más bueno" para comparar calidad: <i>mejor</i>! <span class="en">Size → más grande; age → mayor. Quality → mejor.</span></div></div>
<div class="card"><h3>Superlativos <span class="en">(the most…, very…)</span></h3>
<p><b>el / la / los / las</b> (+ nombre) + <b>más / menos</b> + adjetivo + <b>de</b><br>El Aconcagua es la montaña más alta de América. <span class="en">Aconcagua is the highest mountain in the Americas.</span><br>Es el mejor restaurante de la ciudad. <span class="en">It's the best restaurant in the city.</span></p>
<p><b>Superlativo absoluto: -ísimo</b> = muy + adjetivo<br>caro → <span class="irr">carísimo</span>, fácil → <span class="irr">facilísimo</span>, grande → <span class="irr">grandísimo</span>, rico → <span class="irr">riquísimo</span> (c → qu), largo → <span class="irr">larguísimo</span> (g → gu), feliz → <span class="irr">felicísimo</span> (z → c)<br>La comida está buenísima. <span class="en">The food is really good.</span></p>
<h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Es más bueno que el otro. ✅ Es mejor que el otro. <span class="en">It's better than the other one.</span><br>❌ Es tan alto que yo. ✅ Es tan alto como yo. <span class="en">He's as tall as me.</span><br>❌ Tengo más que veinte años. ✅ Tengo más de veinte años. <span class="en">I'm over twenty.</span><br>❌ La ciudad más bonita en España. ✅ La ciudad más bonita de España. <span class="en">The most beautiful city in Spain.</span><br>❌ Es muy carísimo. ✅ Es carísimo. <span class="en">It's really expensive.</span></p></div>`,
  voc: [
    ["⬆️", "más", "more"],
    ["⬇️", "menos", "less / fewer"],
    ["🟰", "tan… como", "as … as"],
    ["👍", "mejor", "better"],
    ["👎", "peor", "worse"],
    ["👴", "mayor", "older"],
    ["👶", "menor", "younger"],
    ["🏆", "el mejor", "the best"],
    ["🤩", "buenísimo", "really good"],
    ["🏔️", "el más alto", "the tallest / the highest"]
  ],
  ex: [
    { q: "Mi hermano tiene 20 años y yo 25. Él es ___ que yo.", o: ["menor", "mayor", "peor"], a: 0, t: "My brother is 20 and I'm 25. He is younger than me." },
    { q: "Esta paella es ___ que la de ayer.", o: ["mejor", "más mejor", "bien"], a: 0, t: "This paella is better than yesterday's." },
    { q: "Lucía es tan alta ___ su madre.", o: ["como", "que", "de"], a: 0, t: "Lucía is as tall as her mother." },
    { q: "El Everest es la montaña más alta ___ mundo.", o: ["del", "en el", "que el"], a: 0, t: "Everest is the highest mountain in the world." },
    { q: "El avión es ___ rápido que el tren. (+)", a: ["más"], t: "The plane is faster than the train." },
    { q: "Yo no tengo ___ dinero como tú. (=)", a: ["tanto"], t: "I don't have as much money as you." },
    { q: "Hay ___ cincuenta personas en la fiesta. (+, con número)", a: ["más de"], t: "There are more than fifty people at the party." },
    { q: "Este examen es muy fácil, es ___. (fácil + -ísimo)", a: ["facilísimo"], t: "This exam is very easy, it's super easy." },
    { w: "Barcelona es más grande que Valencia.", t: "Barcelona is bigger than Valencia." },
    { w: "Mi hermana es la mayor de la familia.", t: "My sister is the oldest in the family." },
    { w: "Este restaurante es el mejor del barrio.", t: "This restaurant is the best in the neighbourhood." },
    { w: "Hoy hace menos calor que ayer.", t: "Today it's less hot than yesterday." }
  ],
  tx: {
    ti: "¿Ciudad o pueblo?",
    b: `Me llamo Andrés y vivo en Bogotá, pero mis abuelos viven en Villa de Leyva, un pueblo pequeño de Colombia. Bogotá es mucho <u>más grande que</u> Villa de Leyva y tiene <u>más de</u> siete millones de habitantes. En la capital hay <u>más</u> trabajo y <u>más</u> cines, pero también hay <u>más</u> tráfico y ruido.<br><br>En el pueblo la vida es <u>más tranquila</u> y la gente es <u>tan amable como</u> en mi barrio, o incluso <u>más</u>. El aire es <u>mejor</u> y la comida de mi abuela está <u>riquísima</u>. Para mí, su ajiaco es <u>el mejor de</u> Colombia.<br><br>Mi hermana Laura es <u>menor que</u> yo y prefiere la ciudad, porque es <u>más divertida</u>. Yo creo que el pueblo es <u>el lugar más bonito del</u> mundo, aunque no tiene <u>tantas</u> tiendas <u>como</u> Bogotá.`
  },
  q: [
    ["¿Dónde viven los abuelos de Andrés?", ["En Bogotá", "En Villa de Leyva", "En Medellín"], 1],
    ["¿Qué hay más en la capital?", ["Tranquilidad", "Tráfico y ruido", "Aire limpio"], 1],
    ["¿Qué piensa Andrés del ajiaco de su abuela?", ["Que es el mejor de Colombia", "Que es peor que el de Bogotá", "Que es demasiado picante"], 0],
    ["¿Quién es Laura?", ["La abuela", "La hermana mayor", "La hermana menor"], 2]
  ],
  sp: [
    "Compara tu ciudad con otra ciudad que conoces: ¿cuál es más grande, más cara, más bonita?",
    "¿Eres mayor o menor que tus hermanos o primos? Compárate con ellos.",
    "¿Cuál es el mejor restaurante de tu ciudad? ¿Por qué?",
    "¿Qué es mejor: vivir en el campo o en la ciudad? Da tres razones.",
    "Describe el día más bonito de tu vida.",
    "¿Quién es la persona más divertida que conoces? ¿Es tan divertida como tú?"
  ]
}

);
