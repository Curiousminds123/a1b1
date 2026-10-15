/* Camino al Español · Nivel B1 · contenido */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "b1-pasados",
  lvl: "B1",
  k: "g",
  t: "Contraste de pasados",
  en: "Contrasting the past tenses",
  ic: "🕰️",
  th: `<div class="card"><h2>Tres pasados <span class="en">(three past tenses)</span></h2>
<table><tr><th>Tiempo</th><th>Uso</th><th>Ejemplo</th></tr>
<tr><td><b>Pretérito perfecto</b><br>he hablado</td><td>Pasado conectado con el presente: <i>hoy, esta semana, este año, ya, todavía no, nunca, alguna vez</i></td><td>Hoy <b class="reg">he comido</b> paella. <span class="en">I've had paella today.</span></td></tr>
<tr><td><b>Indefinido</b><br>hablé</td><td>Acción terminada en un momento concreto: <i>ayer, el lunes, en 2019, hace dos años</i></td><td>Ayer <b class="reg">comí</b> paella. <span class="en">I had paella yesterday.</span></td></tr>
<tr><td><b>Imperfecto</b><br>hablaba</td><td>Descripción, contexto, hábitos del pasado: <i>siempre, todos los días, de niño, antes</i></td><td>De niño <b class="reg">comía</b> paella los domingos. <span class="en">As a child I used to eat paella on Sundays.</span></td></tr></table>
<p>En Latinoamérica y en Canarias se usa mucho más el indefinido: <i>Hoy comí paella.</i> <span class="en">In Latin America the preterite often replaces the present perfect.</span></p></div>
<div class="card"><h2>Acción y fondo <span class="en">(action vs background)</span></h2>
<p>Imagina una película 🎬: el <b>imperfecto</b> es el decorado (cómo era todo, qué pasaba) y el <b>indefinido</b> son las acciones que hacen avanzar la historia.</p>
<p><span class="irr">Hacía</span> sol y <span class="irr">había</span> mucha gente en la playa. De repente, <b class="reg">empezó</b> a llover. <span class="en">It was sunny and there were lots of people on the beach. Suddenly it started to rain.</span></p>
<h3>Acción interrumpida <span class="en">(interrupted action)</span></h3>
<p>Imperfecto (acción en progreso) + <b>cuando</b> + indefinido (acción que interrumpe):<br>
<b>Estaba</b> en la ducha <b>cuando sonó</b> el teléfono. <span class="en">I was in the shower when the phone rang.</span><br>
<b>Dormía</b> tranquilamente <b>cuando llegaste</b>. <span class="en">I was sleeping peacefully when you arrived.</span></p>
<h3>Mientras / cuando</h3>
<p><b>Mientras</b> + imperfecto = dos acciones a la vez: <i>Mientras yo cocinaba, él ponía la mesa.</i> <span class="en">While I was cooking, he was setting the table.</span><br>
<b>Cuando</b> + indefinido = una acción después de otra: <i>Cuando llegué, cenamos.</i> <span class="en">When I arrived, we had dinner.</span></p>
<div class="tip"><b>Truco / Trick:</b> Pregúntate: ¿la acción <i>avanza</i> la historia (→ indefinido) o <i>describe</i> la situación (→ imperfecto)? <span class="en">Does it move the story forward or paint the scene?</span></div></div>
<div class="card"><h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Ayer he ido al cine. ✅ Ayer <b>fui</b> al cine. <span class="en">"Ayer" closes the time → preterite.</span><br>
❌ Cuando era niño, fui al parque cada día. ✅ Cuando era niño, <b>iba</b> al parque cada día. <span class="en">Habits → imperfect.</span><br>
❌ Leí cuando sonó el timbre. ✅ <b>Leía</b> cuando sonó el timbre. <span class="en">The action in progress → imperfect.</span><br>
❌ El concierto era fantástico (y ya terminó). ✅ El concierto <b>fue</b> fantástico. <span class="en">An evaluation of a finished event → preterite.</span></p></div>`,
  voc: [
    ["📅","ayer","yesterday"],
    ["⏳","mientras","while"],
    ["⚡","de repente","suddenly"],
    ["🧒","de niño","as a child"],
    ["🔁","siempre","always"],
    ["☀️","esta mañana","this morning"],
    ["🗓️","hace dos años","two years ago"],
    ["🔔","sonar","to ring"],
    ["🌧️","empezar a llover","to start raining"],
    ["🏖️","había","there was / there were"]
  ],
  ex: [
    { q: "Ayer ___ al cine con mis primos.", o: ["he ido","fui","iba"], a: 1, t: "Yesterday I went to the cinema with my cousins." },
    { q: "Cuando era pequeña, ___ en un pueblo de Asturias.", o: ["viví","he vivido","vivía"], a: 2, t: "When I was little, I lived in a village in Asturias." },
    { q: "Esta semana ___ mucho trabajo.", o: ["he tenido","tenía","tuve"], a: 0, t: "This week I've had a lot of work. (Spain)" },
    { q: "Yo ___ la tele cuando se fue la luz.", o: ["vi","veía","he visto"], a: 1, t: "I was watching TV when the power went out." },
    { q: "Mientras mi madre ___, mi padre lavaba los platos.", o: ["cocinaba","cocinó","ha cocinado"], a: 0, t: "While my mother was cooking, my father was washing the dishes." },
    { q: "Caminábamos por la calle cuando ___ a Marta. (ver, nosotros)", a: ["vimos"], t: "We were walking down the street when we saw Marta." },
    { q: "De niño, siempre ___ al fútbol en el parque. (jugar, yo)", a: ["jugaba"], t: "As a child, I always played football in the park." },
    { q: "En 2020 mis padres ___ a México. (viajar)", a: ["viajaron"], t: "In 2020 my parents travelled to Mexico." },
    { q: "¿___ alguna vez en Buenos Aires? (estar, tú, perfecto)", a: ["has estado"], t: "Have you ever been to Buenos Aires?" },
    { w: "Estaba en la ducha cuando sonó el teléfono.", t: "I was in the shower when the phone rang." },
    { w: "De repente empezó a llover muy fuerte.", t: "Suddenly it started to rain very hard." },
    { w: "Hoy no he desayunado nada todavía.", t: "I haven't had any breakfast yet today." }
  ],
  tx: { ti: "Un viaje inolvidable", b: `El verano pasado <u>fui</u> a Cartagena de Indias con mi amiga Valeria. <u>Hacía</u> mucho calor y las calles <u>estaban</u> llenas de color y de música. El primer día <u>paseamos</u> por la ciudad amurallada y <u>comimos</u> pescado frito en un restaurante pequeño.<br><br>El tercer día <u>pasó</u> algo increíble. <u>Estábamos</u> en la playa y Valeria <u>leía</u> un libro <u>mientras</u> yo <u>tomaba</u> el sol. <u>De repente</u>, un hombre <u>se acercó</u> y nos <u>preguntó</u>: «¿Sois españolas?». ¡<u>Era</u> Andrés, un compañero del colegio! No lo <u>veíamos</u> desde hacía quince años. Esa noche <u>cenamos</u> los tres juntos y <u>hablamos</u> durante horas de cuando <u>éramos</u> niños y <u>jugábamos</u> en el patio.<br><br>Este año <u>he vuelto</u> a hablar con Andrés varias veces y ya <u>hemos planeado</u> otro viaje: esta vez, a Lima. ¡Qué pequeño es el mundo!` },
  q: [
    ["¿Qué tiempo hacía en Cartagena?", ["Llovía mucho","Hacía mucho calor","Hacía frío"], 1],
    ["¿Qué hacía Valeria cuando llegó el hombre?", ["Tomaba el sol","Comía pescado","Leía un libro"], 2],
    ["¿Quién era Andrés?", ["Un compañero del colegio","Un camarero","El novio de Valeria"], 0],
    ["¿Qué han hecho este año?", ["Han viajado a Lima","Han planeado otro viaje","Han vuelto a Cartagena"], 1]
  ],
  sp: [
    "¿Qué has hecho hoy? Cuenta tres cosas.",
    "¿Qué hiciste el fin de semana pasado?",
    "¿Cómo era tu vida cuando tenías diez años? ¿Qué hacías los veranos?",
    "Cuenta una anécdota: ¿qué estabas haciendo cuando pasó algo inesperado?",
    "Describe tu primer día de trabajo o de clase: ¿cómo era el lugar y qué pasó?",
    "¿Cuál es el mejor viaje que has hecho? ¿Adónde fuiste y cómo fue?"
  ]
},
{
  id: "b1-plusc",
  lvl: "B1",
  k: "g",
  t: "Pretérito pluscuamperfecto",
  en: "The past perfect (had done)",
  ic: "⏮️",
  th: `<div class="card"><h2>Pluscuamperfecto <span class="en">(past perfect: "had done")</span></h2>
<p>Se forma con el imperfecto de <b>haber</b> + participio. <span class="en">Imperfect of "haber" + past participle.</span></p>
<table><tr><th></th><th>haber</th><th>-AR</th><th>-ER / -IR</th></tr>
<tr><td>yo</td><td>había</td><td rowspan="6">habl<b class="reg">ado</b></td><td rowspan="6">com<b class="reg">ido</b> / viv<b class="reg">ido</b></td></tr>
<tr><td>tú</td><td>habías</td></tr><tr><td>él/ella/usted</td><td>había</td></tr><tr><td>nosotros/as</td><td>habíamos</td></tr><tr><td>vosotros/as</td><td>habíais</td></tr><tr><td>ellos/ellas/ustedes</td><td>habían</td></tr></table>
<h3>Participios irregulares <span class="en">(irregular participles)</span></h3>
<table><tr><th>infinitivo</th><th>participio</th><th>infinitivo</th><th>participio</th></tr>
<tr><td>hacer</td><td class="irr">hecho</td><td>ver</td><td class="irr">visto</td></tr>
<tr><td>decir</td><td class="irr">dicho</td><td>volver</td><td class="irr">vuelto</td></tr>
<tr><td>escribir</td><td class="irr">escrito</td><td>poner</td><td class="irr">puesto</td></tr>
<tr><td>abrir</td><td class="irr">abierto</td><td>romper</td><td class="irr">roto</td></tr>
<tr><td>morir</td><td class="irr">muerto</td><td>descubrir</td><td class="irr">descubierto</td></tr></table></div>
<div class="card"><h2>¿Cuándo se usa? <span class="en">(when is it used?)</span></h2>
<p>Para una acción <b>anterior</b> a otra acción del pasado. <span class="en">An action that happened before another past action.</span></p>
<p>Cuando llegué a la estación, el tren ya <b>había salido</b>. <span class="en">When I got to the station, the train had already left.</span><br>
Lucía estaba nerviosa porque nunca <b>había volado</b>. <span class="en">Lucía was nervous because she had never flown.</span></p>
<h3>Ya / todavía no en el pasado</h3>
<p><b>ya</b> + había… = <i>already</i>: A las diez ya <b>habíamos cenado</b>. <span class="en">By ten we had already had dinner.</span><br>
<b>todavía no / aún no</b> + había… = <i>not yet</i>: Cuando me llamaste, todavía no <b>había terminado</b>. <span class="en">When you called me, I hadn't finished yet.</span></p>
<div class="tip"><b>Truco / Trick:</b> Dibuja una línea del tiempo ⬅️: primero pasa la acción en pluscuamperfecto, después la acción en indefinido. <span class="en">Past perfect = the "earlier past".</span> En el habla de muchos países latinoamericanos a veces se usa el indefinido: <i>Cuando llegué, el tren ya salió</i> (informal).</div></div>
<div class="card"><h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Cuando llegué, el tren ya ha salido. ✅ Cuando llegué, el tren ya <b>había salido</b>.<br>
❌ Nunca había veído esa película. ✅ Nunca había <b>visto</b> esa película.<br>
❌ Había lo hecho. ✅ <b>Lo había hecho.</b> <span class="en">Pronouns go before "había", never between "había" and the participle: "ya lo había hecho".</span><br>
❌ Había hecho los deberes ayer. ✅ <b>Hice</b> los deberes ayer. <span class="en">Use it only when there is an earlier/later relation.</span></p></div>`,
  voc: [
    ["🚉","ya había salido","had already left"],
    ["⌛","todavía no","not yet"],
    ["✅","ya","already"],
    ["🔙","antes","before"],
    ["📝","escrito","written"],
    ["🔨","roto","broken"],
    ["🚪","abierto","open(ed)"],
    ["👀","visto","seen"],
    ["🛠️","hecho","done / made"],
    ["✈️","nunca había volado","had never flown"]
  ],
  ex: [
    { q: "Cuando llegamos al cine, la película ya ___.", o: ["empezó","había empezado","ha empezado"], a: 1, t: "When we got to the cinema, the film had already started." },
    { q: "Estaba nervioso porque nunca ___ en público.", o: ["había hablado","hablaba","habló"], a: 0, t: "He was nervous because he had never spoken in public." },
    { q: "Cuando me llamaste, todavía no ___ el informe.", o: ["he terminado","terminé","había terminado"], a: 2, t: "When you called me, I hadn't finished the report yet." },
    { q: "Ana no fue a la fiesta porque ya ___ otros planes.", o: ["había hecho","había hacido","hacía"], a: 0, t: "Ana didn't go to the party because she had already made other plans." },
    { q: "Al llegar a casa vi que alguien ___ la ventana. (abrir)", a: ["había abierto"], t: "When I got home I saw that someone had opened the window." },
    { q: "Nosotros nunca ___ un volcán antes de ir a Guatemala. (ver)", a: ["habíamos visto"], t: "We had never seen a volcano before going to Guatemala." },
    { q: "Les conté que ya ___ el libro. (escribir, yo)", a: ["había escrito"], t: "I told them I had already written the book." },
    { q: "¿Vosotros ya ___ cuando llegó Pablo? (cenar)", a: ["habíais cenado"], t: "Had you already had dinner when Pablo arrived?" },
    { q: "El vaso estaba en el suelo: el gato lo ___. (romper)", a: ["había roto"], t: "The glass was on the floor: the cat had broken it." },
    { w: "Cuando llegué, el tren ya había salido.", t: "When I arrived, the train had already left." },
    { w: "Nunca había probado la comida peruana.", t: "I had never tried Peruvian food." },
    { w: "Todavía no habían abierto la tienda.", t: "They hadn't opened the shop yet." }
  ],
  tx: { ti: "Una mañana desastrosa", b: `El lunes pasado fue un día horrible para Javier. Esa noche no <u>había dormido</u> bien porque sus vecinos <u>habían organizado</u> una fiesta. Por la mañana se despertó tarde: <u>no había puesto</u> la alarma.<br><br>Salió de casa corriendo, pero cuando llegó a la parada, el autobús <u>ya había pasado</u>. Tomó un taxi y, al llegar a la oficina, se dio cuenta de que <u>se había dejado</u> la cartera en casa. Una compañera, Rocío, le prestó dinero para pagar.<br><br>A las diez tenía una reunión muy importante con unos clientes de Monterrey. Javier estaba tranquilo porque el viernes <u>ya había preparado</u> la presentación. Sin embargo, cuando abrió el ordenador, descubrió que <u>no había guardado</u> el archivo. Por suerte, Rocío <u>había hecho</u> una copia y se la envió en un minuto.<br><br>La reunión fue un éxito. Esa tarde Javier invitó a Rocío a un café: nunca <u>había tenido</u> una compañera tan generosa.` },
  q: [
    ["¿Por qué no había dormido bien Javier?", ["Porque estaba enfermo","Porque sus vecinos hicieron una fiesta","Porque trabajó toda la noche"], 1],
    ["¿Qué pasó en la parada?", ["El autobús ya había pasado","Perdió la cartera","Encontró a Rocío"], 0],
    ["¿Qué problema tuvo con el ordenador?", ["Se rompió","No tenía batería","No había guardado el archivo"], 2],
    ["¿Cómo solucionó Rocío el problema?", ["Hizo la presentación ella","Tenía una copia del archivo","Llamó a los clientes"], 1]
  ],
  sp: [
    "Cuenta un día en que todo salió mal. ¿Qué había pasado antes?",
    "¿Qué cosas nunca habías hecho antes de cumplir dieciocho años?",
    "Antes de empezar a estudiar español, ¿habías estudiado otros idiomas?",
    "Recuerda una vez que llegaste tarde a algo. ¿Qué había pasado ya cuando llegaste?",
    "¿Qué habías aprendido ya a los diez años y qué todavía no?",
    "Cuenta la primera vez que viajaste en avión. ¿Habías volado antes?"
  ]
},
{
  id: "b1-porpara",
  lvl: "B1",
  k: "g",
  t: "Por y para",
  en: "Por vs para",
  ic: "🎯",
  th: `<div class="card"><h2>Por y para <span class="en">(two words for "for", "by", "through"…)</span></h2>
<table><tr><th>PARA ➡️ (destino, objetivo)</th><th>POR 🔄 (causa, medio, recorrido)</th></tr>
<tr><td><b>Finalidad</b>: Estudio español <b>para</b> trabajar en Chile. <span class="en">in order to</span></td><td><b>Causa</b>: Lo hice <b>por</b> ti. / Cerraron <b>por</b> la lluvia. <span class="en">because of, for the sake of</span></td></tr>
<tr><td><b>Destinatario</b>: Este regalo es <b>para</b> ti. <span class="en">for (recipient)</span></td><td><b>Lugar de paso</b>: Paseamos <b>por</b> el parque. <span class="en">through, around</span></td></tr>
<tr><td><b>Dirección</b>: Salgo <b>para</b> Lima mañana. <span class="en">towards</span></td><td><b>Medio</b>: Te llamo <b>por</b> teléfono. / Lo envié <b>por</b> correo. <span class="en">by (means)</span></td></tr>
<tr><td><b>Plazo</b>: Necesito el informe <b>para</b> el lunes. <span class="en">by (deadline)</span></td><td><b>Tiempo aproximado</b>: <b>por</b> la mañana, <b>por</b> Navidad. <span class="en">in, around</span></td></tr>
<tr><td><b>Opinión</b>: <b>Para</b> mí, es la mejor serie. <span class="en">in my opinion</span></td><td><b>Precio / intercambio</b>: Lo compré <b>por</b> 20 euros. <span class="en">for (price)</span></td></tr>
<tr><td><b>Comparación</b>: <b>Para</b> ser junio, hace frío. <span class="en">for (considering)</span></td><td><b>Agente de la pasiva</b>: escrito <b>por</b> Isabel Allende. <span class="en">by</span></td></tr>
<tr><td><b>Utilidad</b>: una taza <b>para</b> el café. <span class="en">for (use)</span></td><td><b>Frecuencia</b>: dos veces <b>por</b> semana; 10 % (diez <b>por</b> ciento). <span class="en">per</span></td></tr></table></div>
<div class="card"><h2>Expresiones fijas <span class="en">(fixed expressions)</span></h2>
<p><b>por fin</b> <span class="en">at last</span> · <b>por supuesto</b> <span class="en">of course</span> · <b>por eso</b> <span class="en">that's why</span> · <b>por ejemplo</b> <span class="en">for example</span> · <b>por favor</b> <span class="en">please</span> · <b>por cierto</b> <span class="en">by the way</span> · <b>por lo menos</b> <span class="en">at least</span> · <b>por si acaso</b> <span class="en">just in case</span> · <b>por primera vez</b> <span class="en">for the first time</span></p>
<p><b>para siempre</b> <span class="en">forever</span> · <b>para nada</b> <span class="en">not at all</span> · <b>para colmo</b> <span class="en">to top it all</span> · <b>¿para qué?</b> <span class="en">what for?</span> · <b>no es para tanto</b> <span class="en">it's not a big deal</span></p>
<p><b>¿Por qué?</b> pregunta la causa; <b>¿para qué?</b> pregunta el objetivo. <span class="en">"Why?" vs "What for?"</span><br>
¿Por qué estudias español? —Porque me encanta. ¿Para qué? —Para viajar.</p>
<div class="tip"><b>Truco / Trick:</b> <b>Para</b> mira hacia delante ➡️ (meta, destino, fecha límite). <b>Por</b> mira hacia atrás o alrededor 🔄 (causa, camino, medio). <span class="en">"Para" points to a goal; "por" explains the reason or the route.</span></div></div>
<div class="card"><h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Gracias para tu ayuda. ✅ Gracias <b>por</b> tu ayuda.<br>
❌ Estudio por aprobar el examen. ✅ Estudio <b>para</b> aprobar el examen.<br>
❌ Voy a estar en Madrid para tres días. ✅ Voy a estar en Madrid tres días / <b>durante</b> tres días.<br>
❌ Te llamo para teléfono. ✅ Te llamo <b>por</b> teléfono.</p></div>`,
  voc: [
    ["🏁","por fin","at last"],
    ["👍","por supuesto","of course"],
    ["♾️","para siempre","forever"],
    ["☂️","por si acaso","just in case"],
    ["💡","por ejemplo","for example"],
    ["🙏","por favor","please"],
    ["🎁","para ti","for you"],
    ["📞","por teléfono","by phone"],
    ["🗣️","por cierto","by the way"],
    ["🎯","para qué","what for"]
  ],
  ex: [
    { q: "Este regalo es ___ mi abuela.", o: ["por","para"], a: 1, t: "This present is for my grandmother." },
    { q: "Muchas gracias ___ la invitación.", o: ["por","para"], a: 0, t: "Thank you very much for the invitation." },
    { q: "Necesito terminar el proyecto ___ el viernes.", o: ["por","para"], a: 1, t: "I need to finish the project by Friday." },
    { q: "Me gusta pasear ___ el centro de Quito.", o: ["por","para"], a: 0, t: "I like walking around the centre of Quito." },
    { q: "Compré esta bici ___ 150 euros.", o: ["para","por"], a: 1, t: "I bought this bike for 150 euros." },
    { q: "Llevo paraguas por si ___. (expresión: just in case)", a: ["acaso"], t: "I'm taking an umbrella just in case." },
    { q: "¡Por ___ llegas! Te estábamos esperando. (at last)", a: ["fin"], t: "You're here at last! We were waiting for you." },
    { q: "Ahorro dinero ___ comprar un coche. (in order to)", a: ["para"], t: "I'm saving money to buy a car." },
    { q: "Voy al gimnasio tres veces ___ semana. (per)", a: ["por"], t: "I go to the gym three times a week." },
    { w: "Te quiero y te querré para siempre.", t: "I love you and I'll love you forever." },
    { w: "El museo está cerrado por obras.", t: "The museum is closed for renovation work." },
    { w: "Por supuesto que vendré a tu fiesta.", t: "Of course I'll come to your party." }
  ],
  tx: { ti: "Mensaje desde Oaxaca", b: `Querida Sofía:<br><br>¡<u>Por fin</u> tengo un rato <u>para</u> escribirte! Llegué a Oaxaca hace una semana y estoy encantada. Vine <u>para</u> hacer un curso de cocina mexicana, pero también paseo mucho <u>por</u> la ciudad. <u>Por</u> las mañanas voy a clase y <u>por</u> la tarde visito mercados. Ayer compré un mantel precioso <u>por</u> solo doscientos pesos. ¡Es <u>para</u> ti!<br><br><u>Por cierto</u>, el profesor del curso es muy simpático. Dice que <u>para</u> ser extranjera, cocino muy bien el mole. <u>Por supuesto</u>, no es verdad, pero me gusta oírlo.<br><br>El único problema es que llueve mucho <u>por</u> la tarde, así que siempre llevo chubasquero <u>por si acaso</u>. El sábado salgo <u>para</u> Puebla en autobús y vuelvo a Madrid a finales de mes. Tengo que estar en la oficina <u>para</u> el día treinta.<br><br>Te llamo <u>por</u> teléfono el domingo. ¡Gracias <u>por</u> cuidar de mi gato!<br><br>Un abrazo,<br>Marina` },
  q: [
    ["¿Para qué fue Marina a Oaxaca?", ["Para trabajar en un mercado","Para hacer un curso de cocina","Para visitar a Sofía"], 1],
    ["¿Cuánto costó el mantel?", ["Doscientos pesos","Treinta euros","Veinte pesos"], 0],
    ["¿Por qué lleva siempre chubasquero?", ["Porque hace frío","Porque es un regalo","Porque llueve mucho por la tarde"], 2],
    ["¿Qué hace Sofía por Marina?", ["Cuida de su gato","Le envía dinero","Le reserva el autobús"], 0]
  ],
  sp: [
    "¿Para qué estudias español? Da por lo menos dos razones.",
    "¿Por qué lugares te gusta pasear en tu ciudad?",
    "¿Qué regalo has comprado recientemente? ¿Para quién era y por cuánto lo compraste?",
    "¿Qué cosas llevas siempre en la mochila por si acaso?",
    "Para ti, ¿cuál es la mejor época del año para viajar? ¿Por qué?",
    "Da las gracias a alguien por algo importante que hizo por ti."
  ]
},
{
  id: "b1-fut",
  lvl: "B1",
  k: "g",
  t: "Futuro simple",
  en: "The simple future",
  ic: "🔮",
  th: `<div class="card"><h2>Futuro simple <span class="en">(will + verb)</span></h2>
<p>Infinitivo completo + terminaciones (iguales para -ar, -er, -ir). <span class="en">Whole infinitive + the same endings for all verbs.</span></p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr>
<tr><td>yo</td><td>hablar<b class="reg">é</b></td><td>comer<b class="reg">é</b></td><td>vivir<b class="reg">é</b></td></tr>
<tr><td>tú</td><td>hablar<b class="reg">ás</b></td><td>comer<b class="reg">ás</b></td><td>vivir<b class="reg">ás</b></td></tr>
<tr><td>él/ella/usted</td><td>hablar<b class="reg">á</b></td><td>comer<b class="reg">á</b></td><td>vivir<b class="reg">á</b></td></tr>
<tr><td>nosotros/as</td><td>hablar<b class="reg">emos</b></td><td>comer<b class="reg">emos</b></td><td>vivir<b class="reg">emos</b></td></tr>
<tr><td>vosotros/as</td><td>hablar<b class="reg">éis</b></td><td>comer<b class="reg">éis</b></td><td>vivir<b class="reg">éis</b></td></tr>
<tr><td>ellos/ustedes</td><td>hablar<b class="reg">án</b></td><td>comer<b class="reg">án</b></td><td>vivir<b class="reg">án</b></td></tr></table>
<h3>Irregulares <span class="en">(irregular stems, same endings)</span></h3>
<table><tr><th>infinitivo</th><th>raíz</th><th>yo</th><th>infinitivo</th><th>raíz</th><th>yo</th></tr>
<tr><td>tener</td><td class="irr">tendr-</td><td>tendré</td><td>hacer</td><td class="irr">har-</td><td>haré</td></tr>
<tr><td>salir</td><td class="irr">saldr-</td><td>saldré</td><td>decir</td><td class="irr">dir-</td><td>diré</td></tr>
<tr><td>poner</td><td class="irr">pondr-</td><td>pondré</td><td>poder</td><td class="irr">podr-</td><td>podré</td></tr>
<tr><td>venir</td><td class="irr">vendr-</td><td>vendré</td><td>saber</td><td class="irr">sabr-</td><td>sabré</td></tr>
<tr><td>querer</td><td class="irr">querr-</td><td>querré</td><td>haber</td><td class="irr">habr-</td><td>habrá (hay)</td></tr></table></div>
<div class="card"><h2>Usos <span class="en">(uses)</span></h2>
<p>🔮 <b>Predicciones</b>: Mañana <b>lloverá</b> en el norte. <span class="en">It will rain in the north tomorrow.</span><br>
🤝 <b>Promesas</b>: Te lo <b>diré</b> mañana, te lo prometo. <span class="en">I'll tell you tomorrow, I promise.</span><br>
📅 <b>Planes lejanos o poco seguros</b>: Algún día <b>viviré</b> en la costa. <span class="en">Someday I'll live on the coast.</span><br>
🤔 <b>Conjetura en el presente</b> (suposición): ¿Dónde <b>estará</b> Pedro? —<b>Estará</b> en el atasco. <span class="en">I wonder where Pedro is. —He's probably stuck in traffic.</span><br>
¿Qué hora es? —No sé, <b>serán</b> las cinco. <span class="en">I don't know, it must be about five.</span></p>
<div class="tip"><b>Truco / Trick:</b> Para planes seguros y cercanos se usa más <b>ir a + infinitivo</b>: <i>Esta noche voy a cenar con Ana.</i> El futuro simple suena más lejano, más formal o más hipotético. <span class="en">"Ir a" for firm plans; future tense for predictions, promises and guesses.</span></div></div>
<div class="card"><h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Yo teneré tiempo. ✅ Yo <b>tendré</b> tiempo.<br>
❌ Nosotros haceremos la cena. ✅ Nosotros <b>haremos</b> la cena.<br>
❌ Mañana habrán muchas personas. ✅ Mañana <b>habrá</b> muchas personas. <span class="en">"Habrá" (there will be) is always singular.</span><br>
❌ Hablare contigo. ✅ <b>Hablaré</b> contigo. <span class="en">Don't forget the accent.</span></p></div>`,
  voc: [
    ["🔮","predecir","to predict"],
    ["🤝","prometer","to promise"],
    ["🌅","mañana","tomorrow"],
    ["🗓️","el año que viene","next year"],
    ["✨","algún día","someday"],
    ["🌍","el futuro","the future"],
    ["🤔","suponer","to suppose"],
    ["⏰","dentro de diez años","in ten years' time"],
    ["🧳","saldré","I will leave"],
    ["📦","tendré","I will have"]
  ],
  ex: [
    { q: "El año que viene ___ un curso de fotografía. (hacer, yo)", a: ["haré"], t: "Next year I'll do a photography course." },
    { q: "Mañana ___ de casa a las seis. (salir, nosotros)", a: ["saldremos"], t: "Tomorrow we'll leave home at six." },
    { q: "Te lo prometo: no se lo ___ a nadie. (decir, yo)", a: ["diré"], t: "I promise: I won't tell anyone." },
    { q: "¿___ venir a mi boda? (poder, tú)", a: ["podrás"], t: "Will you be able to come to my wedding?" },
    { q: "Dentro de diez años los coches ___ solos.", o: ["conducirán","conduciran","conduzcarán"], a: 0, t: "In ten years cars will drive themselves." },
    { q: "Mañana ___ mucha gente en el concierto.", o: ["habrán","habrá","haberá"], a: 1, t: "There will be a lot of people at the concert tomorrow." },
    { q: "Marta no contesta. ___ en la ducha.", o: ["Estará","Estaría","Estuvo"], a: 0, t: "Marta isn't answering. She's probably in the shower." },
    { q: "Si estudias, ___ el examen sin problema.", o: ["aprobarás","aprobaste","aprobabas"], a: 0, t: "If you study, you'll pass the exam easily." },
    { w: "¿Dónde estarán mis llaves?", t: "Where can my keys be?" },
    { w: "Algún día viviremos cerca del mar.", t: "Someday we'll live near the sea." },
    { w: "Mañana lloverá en el norte de España.", t: "Tomorrow it will rain in the north of Spain." },
    { w: "Te prometo que te llamaré esta noche.", t: "I promise I'll call you tonight." }
  ],
  tx: { ti: "La pitonisa del barrio", b: `Todos los jueves, doña Remedios lee el futuro en una pequeña tienda de Valparaíso. Esta semana la visitó Tomás, un estudiante de veintidós años muy preocupado por su futuro.<br><br>—Veo muchas cosas buenas —le dijo ella—. Primero, <u>terminarás</u> la carrera sin problemas y <u>encontrarás</u> trabajo muy pronto. <u>Tendrás</u> que viajar mucho por tu empresa. <u>Saldrás</u> de Chile y <u>vivirás</u> unos años en Europa.<br><br>—¿Y el amor? —preguntó Tomás.<br><br>—<u>Conocerás</u> a una persona especial en un aeropuerto. Al principio no <u>querrás</u> hablar con ella, pero después <u>harán</u> un viaje juntos y <u>será</u> el inicio de una gran historia.<br><br>Tomás salió de la tienda muy contento. Mientras caminaba, pensó: «¿<u>Será</u> verdad? ¿Cuánto <u>habrá pagado</u> mi madre por este regalo?». Esa noche llamó a su amiga Inés y le dijo: «No sé si me lo creo, pero te prometo una cosa: <u>podré</u> contarte la historia dentro de diez años».` },
  q: [
    ["¿Dónde trabaja doña Remedios?", ["En un aeropuerto","En una tienda de Valparaíso","En una universidad"], 1],
    ["Según ella, ¿dónde vivirá Tomás unos años?", ["En Europa","En Chile","En Argentina"], 0],
    ["¿Dónde conocerá Tomás a una persona especial?", ["En la universidad","En el trabajo","En un aeropuerto"], 2],
    ["¿Qué piensa Tomás al salir?", ["Que todo es mentira","Que su madre pagó la visita","Que tiene que llamar a su madre"], 1]
  ],
  sp: [
    "¿Cómo será tu vida dentro de diez años?",
    "¿Qué harás el próximo verano? ¿Adónde irás?",
    "Haz tres predicciones sobre el mundo en el año 2050.",
    "Haz una promesa a un amigo o a una amiga: ¿qué harás por él o por ella?",
    "Mira a tu alrededor: ¿qué hora será? ¿Qué estarán haciendo tus amigos ahora?",
    "¿Crees que algún día hablarás español perfectamente? ¿Qué tendrás que hacer?"
  ]
},
{
  id: "b1-cond",
  lvl: "B1",
  k: "g",
  t: "Condicional",
  en: "The conditional (would)",
  ic: "💭",
  th: `<div class="card"><h2>Condicional simple <span class="en">(would + verb)</span></h2>
<p>Como el futuro: infinitivo completo + terminaciones del imperfecto de -er/-ir. <span class="en">Whole infinitive + -ía endings.</span></p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr>
<tr><td>yo</td><td>hablar<b class="reg">ía</b></td><td>comer<b class="reg">ía</b></td><td>vivir<b class="reg">ía</b></td></tr>
<tr><td>tú</td><td>hablar<b class="reg">ías</b></td><td>comer<b class="reg">ías</b></td><td>vivir<b class="reg">ías</b></td></tr>
<tr><td>él/ella/usted</td><td>hablar<b class="reg">ía</b></td><td>comer<b class="reg">ía</b></td><td>vivir<b class="reg">ía</b></td></tr>
<tr><td>nosotros/as</td><td>hablar<b class="reg">íamos</b></td><td>comer<b class="reg">íamos</b></td><td>vivir<b class="reg">íamos</b></td></tr>
<tr><td>vosotros/as</td><td>hablar<b class="reg">íais</b></td><td>comer<b class="reg">íais</b></td><td>vivir<b class="reg">íais</b></td></tr>
<tr><td>ellos/ustedes</td><td>hablar<b class="reg">ían</b></td><td>comer<b class="reg">ían</b></td><td>vivir<b class="reg">ían</b></td></tr></table>
<p>Irregulares: las mismas raíces que el futuro. <span class="en">Same irregular stems as the future.</span><br>
tener → <span class="irr">tendría</span> · salir → <span class="irr">saldría</span> · hacer → <span class="irr">haría</span> · decir → <span class="irr">diría</span> · poder → <span class="irr">podría</span> · poner → <span class="irr">pondría</span> · venir → <span class="irr">vendría</span> · saber → <span class="irr">sabría</span> · querer → <span class="irr">querría</span> · haber → <span class="irr">habría</span></p></div>
<div class="card"><h2>Usos <span class="en">(uses)</span></h2>
<p>🙏 <b>Peticiones educadas</b>: ¿<b>Podría</b> abrir la ventana, por favor? <span class="en">Could you open the window, please?</span> / ¿Te <b>importaría</b> ayudarme? <span class="en">Would you mind helping me?</span><br>
💡 <b>Consejos</b>: <b>Deberías</b> descansar más. <span class="en">You should rest more.</span> / <b>Yo que tú</b>, <b>hablaría</b> con ella. <span class="en">If I were you, I'd talk to her.</span> / <b>Yo en tu lugar</b>, no lo <b>compraría</b>. <span class="en">In your place, I wouldn't buy it.</span><br>
🌟 <b>Deseos</b>: Me <b>gustaría</b> conocer Cuba. <span class="en">I'd like to visit Cuba.</span> / Me <b>encantaría</b> ir contigo. <span class="en">I'd love to go with you.</span><br>
🤔 <b>Hipótesis</b>: ¿Qué <b>harías</b> con un millón de euros? —<b>Viajaría</b> por todo el mundo. <span class="en">What would you do with a million euros? —I'd travel all over the world.</span></p>
<p>👀 <b>Avance</b> <span class="en">(preview)</span>: en las frases con <b>si</b> + imperfecto de subjuntivo usamos condicional: <i>Si <b>tuviera</b> tiempo, <b>aprendería</b> a tocar la guitarra.</i> <span class="en">If I had time, I'd learn to play the guitar.</span> Estudiarás esta estructura en el nivel B2; de momento, aprende la frase de memoria.</p>
<div class="tip"><b>Truco / Trick:</b> Condicional = futuro + <b>-ía</b>. Si sabes <i>tendré</i>, ya sabes <i>tendría</i>. <span class="en">If you know the future stem, you know the conditional.</span> Para pedir en un bar, «¿Me pondría un café?» o «Querría un café» suena más amable que «Quiero un café».</div></div>
<div class="card"><h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Me gustaré ir. ✅ Me <b>gustaría</b> ir. <span class="en">Desire → conditional, not future.</span><br>
❌ ¿Poderías ayudarme? ✅ ¿<b>Podrías</b> ayudarme?<br>
❌ Si tendría dinero, viajaría. ✅ Si <b>tuviera</b> dinero, viajaría. <span class="en">Never use the conditional after "si".</span><br>
❌ Yo que tú, hablo con él. ✅ Yo que tú, <b>hablaría</b> con él.</p></div>`,
  voc: [
    ["🌟","me gustaría","I would like"],
    ["😍","me encantaría","I would love"],
    ["🙋","¿podría…?","could you…? (formal)"],
    ["☝️","deberías","you should"],
    ["🪞","yo que tú","if I were you"],
    ["🔄","en tu lugar","in your place"],
    ["🤷","¿te importaría…?","would you mind…?"],
    ["💰","un millón","a million"],
    ["🧭","aconsejar","to advise"]
  ],
  ex: [
    { q: "Me ___ visitar Machu Picchu algún día.", o: ["gustaré","gustaría","gusta"], a: 1, t: "I'd like to visit Machu Picchu someday." },
    { q: "¿___ cerrar la puerta, por favor? (usted)", o: ["Podría","Podrá","Pudo"], a: 0, t: "Could you close the door, please?" },
    { q: "Si tuviera tiempo, ___ un curso de baile.", o: ["haré","hacía","haría"], a: 2, t: "If I had time, I'd do a dance course." },
    { q: "Estás muy cansado. ___ dormir más.", o: ["Deberías","Debías","Deberás"], a: 0, t: "You're very tired. You should sleep more." },
    { q: "Yo que tú, no ___ ese coche tan caro. (comprar)", a: ["compraría"], t: "If I were you, I wouldn't buy such an expensive car." },
    { q: "¿Qué ___ tú en mi lugar? (hacer)", a: ["harías"], t: "What would you do in my place?" },
    { q: "Con más dinero, nosotros ___ en el campo. (vivir)", a: ["viviríamos"], t: "With more money, we would live in the countryside." },
    { q: "Yo en tu lugar se lo ___ a tus padres. (decir)", a: ["diría"], t: "In your place, I'd tell your parents." },
    { q: "¿Te ___ ayudarme con la mudanza? (importar)", a: ["importaría"], t: "Would you mind helping me with the move?" },
    { w: "Me encantaría ir contigo al concierto.", t: "I'd love to go to the concert with you." },
    { w: "¿Podría traernos la cuenta, por favor?", t: "Could you bring us the bill, please?" },
    { w: "Yo que tú, hablaría con ella.", t: "If I were you, I'd talk to her." }
  ],
  tx: { ti: "Consultorio sentimental", b: `<u>Querida Clara</u>: tengo treinta años y trabajo en un banco en Bogotá. Gano bien, pero no soy feliz. <u>Me gustaría</u> dejarlo todo y abrir una pequeña cafetería, pero mi familia dice que es una locura. ¿Qué <u>harías</u> tú? —Andrés<br><br>Querido Andrés: entiendo muy bien tu situación. <u>Yo que tú</u>, no <u>dejaría</u> el trabajo mañana mismo, pero tampoco <u>olvidaría</u> tu sueño. <u>Deberías</u> hacer un plan. Primero, <u>podrías</u> ahorrar dinero durante un año. También <u>sería</u> buena idea hacer un curso de barista los fines de semana. <u>Yo en tu lugar</u>, <u>hablaría</u> con personas que ya tienen una cafetería: te <u>darían</u> consejos muy útiles.<br><br>Sobre tu familia: <u>tendrías</u> que explicarles tu plan con calma. Seguro que <u>estarían</u> más tranquilos con números concretos. Y piensa en esto: si no lo intentaras nunca, ¿no te <u>arrepentirías</u>? A mí me <u>encantaría</u> tomar un café en tu cafetería algún día. ¡Mucha suerte!<br><br>Un abrazo, Clara` },
  q: [
    ["¿Qué le gustaría hacer a Andrés?", ["Trabajar en un banco","Abrir una cafetería","Estudiar en Bogotá"], 1],
    ["¿Qué le aconseja Clara primero?", ["Ahorrar dinero durante un año","Dejar el trabajo mañana","Hablar con su jefe"], 0],
    ["¿Con quién debería hablar Andrés, según Clara?", ["Con un abogado","Con su banco","Con personas que ya tienen una cafetería"], 2],
    ["¿Qué le gustaría a Clara?", ["Trabajar con Andrés","Tomar un café en su cafetería","Conocer a su familia"], 1]
  ],
  sp: [
    "¿Qué harías con un millón de euros?",
    "¿Dónde te gustaría vivir y por qué?",
    "Un amigo quiere dejar su trabajo para viajar un año. ¿Qué le aconsejarías?",
    "Pide tres cosas de forma educada en un hotel: usa «¿Podría…?» y «¿Le importaría…?».",
    "Si tuvieras un día libre mañana, ¿qué harías? (Usa: si tuviera…, haría…)",
    "¿Qué persona famosa te gustaría conocer? ¿Qué le preguntarías?"
  ]
},
{
  id: "b1-imp",
  lvl: "B1",
  k: "g",
  t: "Imperativo",
  en: "The imperative (commands)",
  ic: "👉",
  th: `<div class="card"><h2>Imperativo afirmativo <span class="en">(affirmative commands)</span></h2>
<table><tr><th></th><th>hablar</th><th>comer</th><th>escribir</th></tr>
<tr><td>tú</td><td>habl<b class="reg">a</b></td><td>com<b class="reg">e</b></td><td>escrib<b class="reg">e</b></td></tr>
<tr><td>usted</td><td>habl<b class="reg">e</b></td><td>com<b class="reg">a</b></td><td>escrib<b class="reg">a</b></td></tr>
<tr><td>vosotros/as</td><td>habl<b class="reg">ad</b></td><td>com<b class="reg">ed</b></td><td>escrib<b class="reg">id</b></td></tr>
<tr><td>ustedes</td><td>habl<b class="reg">en</b></td><td>com<b class="reg">an</b></td><td>escrib<b class="reg">an</b></td></tr></table>
<p><b>Tú</b> = 3.ª persona del presente (él habla → ¡habla!). <b>Usted/ustedes</b> = presente de subjuntivo (cambia la vocal: a ↔ e). <b>Vosotros</b> = infinitivo con <b>-d</b>. En Latinoamérica se usa <b>ustedes</b> en lugar de vosotros. <span class="en">"Ustedes" replaces "vosotros" in Latin America.</span></p>
<h3>Irregulares (tú) <span class="en">(irregular tú forms)</span></h3>
<table><tr><th>decir</th><th>hacer</th><th>ir</th><th>poner</th><th>salir</th><th>ser</th><th>tener</th><th>venir</th></tr>
<tr><td class="irr">di</td><td class="irr">haz</td><td class="irr">ve</td><td class="irr">pon</td><td class="irr">sal</td><td class="irr">sé</td><td class="irr">ten</td><td class="irr">ven</td></tr></table>
<p>Usted: <span class="irr">diga, haga, vaya, ponga, salga, sea, tenga, venga</span>. Los cambios de raíz se mantienen: cierra, vuelve, pide / cierre, vuelva, pida.</p></div>
<div class="card"><h2>Imperativo negativo <span class="en">(negative commands)</span></h2>
<p><b>no</b> + presente de subjuntivo para todas las personas: <span class="en">no + present subjunctive.</span></p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>hacer</th><th>ir</th></tr>
<tr><td>tú</td><td>no habl<b class="reg">es</b></td><td>no com<b class="reg">as</b></td><td class="irr">no hagas</td><td class="irr">no vayas</td></tr>
<tr><td>usted</td><td>no habl<b class="reg">e</b></td><td>no com<b class="reg">a</b></td><td class="irr">no haga</td><td class="irr">no vaya</td></tr>
<tr><td>vosotros/as</td><td>no habl<b class="reg">éis</b></td><td>no com<b class="reg">áis</b></td><td class="irr">no hagáis</td><td class="irr">no vayáis</td></tr>
<tr><td>ustedes</td><td>no habl<b class="reg">en</b></td><td>no com<b class="reg">an</b></td><td class="irr">no hagan</td><td class="irr">no vayan</td></tr></table>
<h3>Pronombres <span class="en">(pronoun placement)</span></h3>
<p>✅ Afirmativo: pronombres <b>detrás y unidos</b> (¡ojo con la tilde!): <b>dímelo</b>, <b>cómpralo</b>, <b>siéntese</b>, <b>dáselo</b>. <span class="en">Attached at the end: tell it to me, buy it, sit down, give it to him.</span><br>
🚫 Negativo: pronombres <b>delante y separados</b>: <b>no me lo digas</b>, <b>no lo compres</b>, <b>no se siente</b>. <span class="en">Before the verb: don't tell me, don't buy it.</span><br>
Reflexivos con vosotros: se pierde la -d: <b>sentaos</b>, <b>levantaos</b> (pero <i>idos</i>).</p>
<div class="tip"><b>Truco / Trick:</b> Orden de los pronombres: primero la persona (<b>me, te, se</b>), después la cosa (<b>lo, la</b>). Le/les + lo → <b>se lo</b>: <i>Dáselo</i>, no «dálelo». <span class="en">Person before thing; le + lo becomes se lo.</span></div></div>
<div class="card"><h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ ¡No habla! ✅ ¡No <b>hables</b>!<br>
❌ No dímelo. ✅ <b>No me lo digas.</b><br>
❌ Dime lo. ✅ <b>Dímelo.</b> <span class="en">(one word, with an accent)</span><br>
❌ ¡Hace los deberes! ✅ ¡<b>Haz</b> los deberes!<br>
❌ Sentados, por favor. ✅ <b>Sentaos</b> (vosotros) / <b>Siéntense</b> (ustedes), por favor.</p></div>`,
  voc: [
    ["👉","¡ven!","come!"],
    ["🛠️","¡haz!","do! / make!"],
    ["🗣️","¡dímelo!","tell me (it)!"],
    ["🤐","¡no me lo digas!","don't tell me!"],
    ["🪑","¡siéntese!","sit down! (formal)"],
    ["🚶","¡ve!","go!"],
    ["🍽️","¡pon la mesa!","set the table!"],
    ["⏸️","¡espera!","wait!"],
    ["🙌","¡ten cuidado!","be careful!"],
    ["🚪","¡sal!","get out! / go out!"]
  ],
  ex: [
    { q: "Pablo, ___ la mesa, por favor. (poner, tú)", a: ["pon"], t: "Pablo, set the table, please." },
    { q: "Señora, ___ por aquí, por favor. (venir, usted)", a: ["venga"], t: "Madam, come this way, please." },
    { q: "Niños, no ___ en la calle. (jugar, vosotros)", a: ["juguéis"], t: "Kids, don't play in the street." },
    { q: "Tengo la carta. ¿La quieres? —Sí, ___. (dar, tú + me + la)", a: ["dámela"], t: "I have the letter. Do you want it? —Yes, give it to me." },
    { q: "Es un secreto: no ___ a nadie.", o: ["lo digas","dilo","lo dices"], a: 0, t: "It's a secret: don't tell anyone." },
    { q: "___ los deberes antes de cenar. (tú)", o: ["Hace","Haz","Hagas"], a: 1, t: "Do your homework before dinner." },
    { q: "Pasen, pasen, y ___, por favor. (ustedes)", o: ["siéntense","siéntanse","se sienten"], a: 0, t: "Come in, come in, and sit down, please." },
    { q: "No ___ tarde, la película empieza a las nueve. (tú, llegar)", o: ["llegas","llega","llegues"], a: 2, t: "Don't be late, the film starts at nine." },
    { q: "Chicos, ___ ya, que perdemos el tren. (levantarse, vosotros)", o: ["levantaos","levantados","levantarse"], a: 0, t: "Guys, get up now, or we'll miss the train." },
    { w: "Por favor, dímelo antes del viernes.", t: "Please tell me before Friday." },
    { w: "No te preocupes, todo saldrá bien.", t: "Don't worry, everything will be fine." },
    { w: "Gire a la derecha en el semáforo.", t: "Turn right at the traffic lights." }
  ],
  tx: { ti: "Instrucciones para la casa de la playa", b: `Hola, Lucas y Elena: ¡bienvenidos a la casa! Aquí tenéis unas instrucciones. <u>Leedlas</u> con atención, por favor.<br><br>Las llaves están en la cocina. Al salir, <u>cerrad</u> siempre la puerta con llave y <u>no dejéis</u> las ventanas abiertas: a veces hay mucho viento. Si tenéis frío, <u>encended</u> la calefacción, pero <u>no la pongáis</u> muy alta.<br><br>Para la compra, <u>id</u> al mercado del pueblo: el pescado es fresquísimo. <u>Pedidle</u> a Manolo, el pescadero, sardinas; son las mejores. <u>Decidle</u> que sois amigos míos.<br><br>El perro de la vecina se llama Rufo y viene todas las mañanas. Es muy bueno, pero <u>no le deis</u> comida, porque está a dieta.<br><br>Si hay algún problema, <u>llamadme</u> por teléfono. Y si no contesto, <u>escribidme</u> un mensaje. Por último, <u>disfrutad</u> mucho y <u>no os preocupéis</u> por nada. ¡Ah! Y antes de iros, <u>sacad</u> la basura, por favor.<br><br>Un beso,<br>Carmen` },
  q: [
    ["¿Por qué no deben dejar las ventanas abiertas?", ["Porque entra el perro","Porque a veces hay mucho viento","Porque hace calor"], 1],
    ["¿Qué deben pedir en el mercado?", ["Sardinas","Pan","Carne"], 0],
    ["¿Por qué no deben dar comida a Rufo?", ["Porque muerde","Porque no es suyo","Porque está a dieta"], 2],
    ["¿Qué tienen que hacer antes de irse?", ["Llamar a Carmen","Sacar la basura","Dar de comer al perro"], 1]
  ],
  sp: [
    "Da cinco consejos a un estudiante nuevo de español (usa tú).",
    "Explica a un turista cómo llegar desde tu casa al centro (usa usted).",
    "Tu amigo se queda en tu casa una semana. Dale instrucciones: ¿qué debe hacer y qué no?",
    "Da tres órdenes negativas a unos niños (usa vosotros o ustedes).",
    "Explica una receta fácil con imperativos: corta, pon, mezcla…",
    "¿Qué consejos darías a alguien para dormir bien? Usa «no + subjuntivo»."
  ]
},
{
  id: "b1-subj",
  lvl: "B1",
  k: "g",
  t: "Presente de subjuntivo",
  en: "The present subjunctive",
  ic: "🌈",
  th: `<div class="card"><h2>Presente de subjuntivo <span class="en">(present subjunctive)</span></h2>
<p>Toma la forma <b>yo</b> del presente, quita la <b>-o</b> y usa la vocal "contraria": -ar → <b>e</b>, -er/-ir → <b>a</b>. <span class="en">Take the "yo" form, drop -o, swap the vowel.</span></p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th><th>tener (tengo)</th></tr>
<tr><td>yo</td><td>habl<b class="reg">e</b></td><td>com<b class="reg">a</b></td><td>viv<b class="reg">a</b></td><td>teng<b class="reg">a</b></td></tr>
<tr><td>tú</td><td>habl<b class="reg">es</b></td><td>com<b class="reg">as</b></td><td>viv<b class="reg">as</b></td><td>teng<b class="reg">as</b></td></tr>
<tr><td>él/ella/usted</td><td>habl<b class="reg">e</b></td><td>com<b class="reg">a</b></td><td>viv<b class="reg">a</b></td><td>teng<b class="reg">a</b></td></tr>
<tr><td>nosotros/as</td><td>habl<b class="reg">emos</b></td><td>com<b class="reg">amos</b></td><td>viv<b class="reg">amos</b></td><td>teng<b class="reg">amos</b></td></tr>
<tr><td>vosotros/as</td><td>habl<b class="reg">éis</b></td><td>com<b class="reg">áis</b></td><td>viv<b class="reg">áis</b></td><td>teng<b class="reg">áis</b></td></tr>
<tr><td>ellos/ustedes</td><td>habl<b class="reg">en</b></td><td>com<b class="reg">an</b></td><td>viv<b class="reg">an</b></td><td>teng<b class="reg">an</b></td></tr></table>
<p>Igual: hacer → <i>haga</i>, decir → <i>diga</i>, poner → <i>ponga</i>, salir → <i>salga</i>, venir → <i>venga</i>, conocer → <i>conozca</i>. Cambios de raíz: querer → <i>quiera</i> (pero <i>queramos</i>), poder → <i>pueda</i>, pedir → <i>pida</i>, dormir → <i>duerma</i> (<i>durmamos</i>).</p>
<h3>Totalmente irregulares <span class="en">(fully irregular)</span></h3>
<table><tr><th>ser</th><th>estar</th><th>ir</th><th>haber</th><th>saber</th><th>dar</th><th>ver</th></tr>
<tr><td class="irr">sea</td><td class="irr">esté</td><td class="irr">vaya</td><td class="irr">haya</td><td class="irr">sepa</td><td class="irr">dé</td><td class="irr">vea</td></tr></table></div>
<div class="card"><h2>Usos <span class="en">(uses)</span></h2>
<p>El subjuntivo aparece casi siempre después de <b>que</b> cuando hay <b>dos sujetos diferentes</b>. <span class="en">Mostly after "que" with two different subjects.</span></p>
<p>🌟 <b>Deseos</b>: <b>Ojalá</b> <b>haga</b> sol mañana. <span class="en">I hope it's sunny tomorrow.</span> / <b>Quiero que</b> <b>vengas</b> a mi fiesta. <span class="en">I want you to come to my party.</span> / ¡Que <b>tengas</b> buen viaje! <span class="en">Have a good trip!</span><br>
😊 <b>Emoción</b>: <b>Me alegra que</b> <b>estés</b> aquí. <span class="en">I'm glad you're here.</span> / Me molesta que <b>lleguen</b> tarde. <span class="en">It bothers me that they arrive late.</span><br>
🤔 <b>Duda</b>: <b>No creo que</b> <b>sea</b> verdad. <span class="en">I don't think it's true.</span> / Quizás <b>venga</b> Marta. <span class="en">Maybe Marta will come.</span><br>
💡 <b>Consejos y recomendaciones</b>: Te <b>recomiendo que</b> <b>pruebes</b> el ceviche. <span class="en">I recommend you try the ceviche.</span> / <b>Es importante que</b> <b>duermas</b> bien. <span class="en">It's important that you sleep well.</span><br>
📅 <b>Cuando + subjuntivo</b> (futuro): <b>Cuando</b> <b>tenga</b> dinero, compraré una moto. <span class="en">When I have money, I'll buy a motorbike.</span> (Pero hábito → indicativo: <i>Cuando tengo dinero, lo gasto.</i>)</p>
<div class="tip"><b>Truco / Trick:</b> Mismo sujeto → infinitivo; sujetos diferentes → que + subjuntivo. <i>Quiero <b>viajar</b></i> (yo-yo) / <i>Quiero que <b>viajes</b></i> (yo-tú). Y recuerda: <b>creo que</b> + indicativo, <b>no creo que</b> + subjuntivo.</div></div>
<div class="card"><h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Quiero que tú vienes. ✅ Quiero que <b>vengas</b>.<br>
❌ Cuando llegarás, llámame. ✅ Cuando <b>llegues</b>, llámame.<br>
❌ Creo que sea difícil. ✅ Creo que <b>es</b> difícil. / No creo que <b>sea</b> difícil.<br>
❌ Quiero que yo aprenda. ✅ Quiero <b>aprender</b>.</p></div>`,
  voc: [
    ["🙏","ojalá","I hope / hopefully"],
    ["🎉","me alegra que","I'm glad that"],
    ["🤨","no creo que","I don't think that"],
    ["💡","te recomiendo que","I recommend that you"],
    ["❗","es importante que","it's important that"],
    ["🔜","cuando llegues","when you arrive"],
    ["🌦️","quizás","perhaps"],
    ["😤","me molesta que","it bothers me that"],
    ["✈️","¡que tengas buen viaje!","have a good trip!"],
    ["🤞","esperar que","to hope that"]
  ],
  ex: [
    { q: "Ojalá ___ buen tiempo el fin de semana. (hacer)", a: ["haga"], t: "I hope the weather is good at the weekend." },
    { q: "Mis padres quieren que yo ___ medicina. (estudiar)", a: ["estudie"], t: "My parents want me to study medicine." },
    { q: "Me alegra mucho que ___ aquí. (estar, tú)", a: ["estés"], t: "I'm really glad you're here." },
    { q: "Cuando ___ a Lima, llámame. (llegar, tú)", a: ["llegues"], t: "When you get to Lima, call me." },
    { q: "Es importante que ___ la verdad. (decir, vosotros)", a: ["digáis"], t: "It's important that you tell the truth." },
    { q: "No creo que Luis ___ en casa ahora.", o: ["está","esté","estará"], a: 1, t: "I don't think Luis is at home now." },
    { q: "Creo que este restaurante ___ muy bueno.", o: ["es","sea","ser"], a: 0, t: "I think this restaurant is very good." },
    { q: "Te recomiendo que ___ el museo del Prado.", o: ["visitas","visitar","visites"], a: 2, t: "I recommend that you visit the Prado museum." },
    { q: "Quiero ___ un café antes de la clase.", o: ["tomar","que tome","tome"], a: 0, t: "I want to have a coffee before class. (same subject → infinitive)" },
    { w: "Ojalá podamos vernos pronto.", t: "I hope we can see each other soon." },
    { w: "Cuando sea mayor, viviré en Barcelona.", t: "When I grow up, I'll live in Barcelona." },
    { w: "Me molesta que no me escuches.", t: "It bothers me that you don't listen to me." }
  ],
  tx: { ti: "Carta a mi hija", b: `Querida Paula:<br><br>Mañana empiezas tu año de intercambio en Montevideo y estoy muy emocionada. <u>Me alegra mucho que tengas</u> esta oportunidad, aunque te voy a echar de menos.<br><br>Antes de que te vayas, quiero darte unos consejos. <u>Es importante que comas</u> bien y que <u>duermas</u> lo suficiente. <u>Te recomiendo que hables</u> con tus compañeros uruguayos y que no <u>pases</u> todo el día con otros estudiantes españoles: así aprenderás mucho más. También <u>quiero que</u> me <u>escribas</u> por lo menos una vez a la semana.<br><br>Tu padre dice que exagero. <u>No cree que sea</u> necesario llamarte todos los días, y probablemente tiene razón. <u>Ojalá</u> la familia de acogida <u>sea</u> tan simpática como parece en las fotos.<br><br><u>Cuando llegues</u>, mándame un mensaje, aunque <u>sea</u> muy tarde. Y <u>cuando vuelvas</u> en junio, haremos una gran fiesta. <u>¡Que tengas</u> un viaje estupendo!<br><br>Te quiere,<br>Mamá` },
  q: [
    ["¿Adónde va Paula?", ["A Buenos Aires","A Montevideo","A Madrid"], 1],
    ["¿Qué le recomienda su madre?", ["Hablar con compañeros uruguayos","Llamar todos los días a su padre","Estar con estudiantes españoles"], 0],
    ["¿Qué opina el padre?", ["Que Paula no debe ir","Que la familia es antipática","Que no es necesario llamarla cada día"], 2],
    ["¿Qué harán cuando Paula vuelva?", ["Un viaje","Una gran fiesta","Una cena en Montevideo"], 1]
  ],
  sp: [
    "¿Qué deseos tienes para el próximo año? Usa «ojalá».",
    "¿Qué quieres que hagan tus amigos o tu familia por ti?",
    "¿Qué te molesta que hagan otras personas? ¿Y qué te alegra?",
    "Un amigo va a visitar tu país. ¿Qué le recomiendas que haga?",
    "¿Qué harás cuando termines tus estudios o cuando te jubiles?",
    "Di tres cosas que no crees que sean verdad y explica por qué."
  ]
},
{
  id: "b1-indir",
  lvl: "B1",
  k: "g",
  t: "Estilo indirecto",
  en: "Reported speech",
  ic: "💬",
  th: `<div class="card"><h2>Estilo indirecto <span class="en">(reported speech)</span></h2>
<p>Contamos lo que dijo otra persona con <b>decir que</b>, <b>preguntar si</b>, <b>pedir que</b>… <span class="en">We report what someone said.</span></p>
<h3>1. Información → decir que</h3>
<p>«Estoy cansada.» → Ana <b>dice que</b> está cansada. <span class="en">(reporting now: same tense)</span><br>
«Estoy cansada.» → Ana <b>dijo que</b> <b>estaba</b> cansada. <span class="en">(reporting in the past: tense changes)</span></p>
<h3>2. Preguntas → preguntar si / preguntar + interrogativo</h3>
<p>«¿Tienes hambre?» → Me <b>preguntó si</b> tenía hambre. <span class="en">She asked me if I was hungry.</span><br>
«¿Dónde vives?» → Me <b>preguntó dónde</b> vivía. <span class="en">He asked me where I lived.</span></p>
<h3>3. Órdenes y peticiones → decir/pedir que + subjuntivo</h3>
<p>«Cierra la puerta.» → Me <b>dice que</b> <b>cierre</b> la puerta. / Me <b>dijo que</b> <b>cerrara</b> la puerta. <span class="en">She told me to close the door.</span><br>
<i>(cerrara = imperfecto de subjuntivo; a nivel B1 basta con reconocerlo.)</i></p></div>
<div class="card"><h2>Cambios de tiempo <span class="en">(tense changes when reporting in the past)</span></h2>
<table><tr><th>Estilo directo</th><th>Estilo indirecto (dijo que…)</th></tr>
<tr><td>presente: «Vivo en Quito.»</td><td>imperfecto: vivía en Quito</td></tr>
<tr><td>indefinido: «Fui al médico.»</td><td>pluscuamperfecto: había ido (o fue) al médico</td></tr>
<tr><td>perfecto: «He terminado.»</td><td>pluscuamperfecto: había terminado</td></tr>
<tr><td>futuro: «Te llamaré.»</td><td>condicional: me llamaría</td></tr>
<tr><td>ir a: «Voy a salir.»</td><td>iba a salir</td></tr>
<tr><td>imperativo: «Ven.»</td><td>que + imperfecto de subjuntivo: que fuera</td></tr>
<tr><td>imperfecto: «Era tarde.»</td><td class="irr">no cambia: era tarde</td></tr></table>
<h3>Otros cambios <span class="en">(other changes)</span></h3>
<p>Pronombres y posesivos: «<b>Mi</b> casa es grande» → dijo que <b>su</b> casa era grande.<br>
Tiempo y lugar: hoy → <b>aquel día</b> · mañana → <b>al día siguiente</b> · ayer → <b>el día anterior</b> · aquí → <b>allí</b> · este → <b>ese/aquel</b>.<br>
Verbos: venir → <b>ir</b>, traer → <b>llevar</b>: «Ven aquí» → me dijo que fuera allí.</p>
<div class="tip"><b>Truco / Trick:</b> Si el verbo introductor está en presente (<i>dice, pregunta</i>), no cambies el tiempo: solo los pronombres. Si está en pasado (<i>dijo, preguntó</i>), "retrocede" un paso en el tiempo. <span class="en">Present reporting verb → no tense change; past reporting verb → backshift.</span></div></div>
<div class="card"><h3>Errores frecuentes <span class="en">(common mistakes)</span></h3>
<p>❌ Me preguntó que si tenía hambre. ✅ Me preguntó <b>si</b> tenía hambre. <span class="en">(in careful speech)</span><br>
«¿Vienes a mi casa?» → ❌ Me preguntó si venía a mi casa. ✅ Me preguntó si <b>iba</b> a <b>su</b> casa. <span class="en">Change pronouns, possessives and venir → ir.</span><br>
❌ Dijo que vendrá mañana (ya pasó). ✅ Dijo que <b>vendría</b> al día siguiente.<br>
❌ Me dijo que cierro la puerta. ✅ Me dijo que <b>cerrara</b> la puerta.</p></div>`,
  voc: [
    ["🗣️","decir que","to say that"],
    ["❓","preguntar si","to ask if"],
    ["🙏","pedir que","to ask (someone) to"],
    ["📢","contar","to tell (a story)"],
    ["💬","comentar","to comment"],
    ["✋","explicar","to explain"],
    ["📆","al día siguiente","the next day"],
    ["⏪","el día anterior","the day before"],
    ["📍","allí","there"],
    ["🔁","repetir","to repeat"]
  ],
  ex: [
    { q: "«Tengo frío.» → Marta dice que ___ frío.", o: ["tiene","tenía","tuvo"], a: 0, t: "Marta says she's cold." },
    { q: "«Vivo en Quito.» → Carlos dijo que ___ en Quito.", o: ["vive","vivía","viviría"], a: 1, t: "Carlos said he lived in Quito." },
    { q: "«¿Quieres un café?» → Me preguntó ___ quería un café.", o: ["que","si","qué"], a: 1, t: "He asked me if I wanted a coffee." },
    { q: "«Te llamaré mañana.» → Dijo que me ___ al día siguiente.", o: ["llamará","llamaría","llamaba"], a: 1, t: "She said she would call me the next day." },
    { q: "«He perdido las llaves.» → Dijo que ___ las llaves. (perder)", a: ["había perdido"], t: "He said he had lost the keys." },
    { q: "«¿Dónde trabajas?» → Me preguntó dónde ___. (trabajar)", a: ["trabajaba"], t: "She asked me where I worked." },
    { q: "«Voy a salir.» → Dijo que ___ a salir. (ir)", a: ["iba"], t: "He said he was going to go out." },
    { q: "«Abre la ventana.» → Mi madre me dice que ___ la ventana. (abrir)", a: ["abra"], t: "My mother tells me to open the window." },
    { q: "«Mi coche es nuevo.» → Dijo que ___ coche era nuevo. (posesivo)", a: ["su"], t: "He said his car was new." },
    { w: "Me preguntó si quería ir al cine.", t: "She asked me if I wanted to go to the cinema." },
    { w: "Dijo que estaba muy cansado.", t: "He said he was very tired." },
    { w: "Nos pidió que llegáramos temprano.", t: "He asked us to arrive early." }
  ],
  tx: { ti: "La entrevista de trabajo", b: `Ayer Lorena tuvo una entrevista de trabajo en una agencia de viajes de Sevilla. Por la noche se lo contó todo a su amiga Itziar.<br><br>—Al principio, la directora me <u>preguntó cómo me llamaba</u> y <u>de dónde era</u>. Le <u>dije que era</u> de Valencia, pero que <u>vivía</u> en Sevilla desde hacía tres años. Luego me <u>preguntó si hablaba</u> otros idiomas. Le <u>expliqué que hablaba</u> inglés y francés y que el año anterior <u>había hecho</u> un curso de portugués en Lisboa.<br><br>—¿Y te <u>preguntó por qué</u> querías el trabajo?<br><br>—Sí. Le <u>contesté que</u> me <u>encantaba</u> viajar y que <u>quería</u> ayudar a la gente a organizar sus vacaciones. Ella <u>comentó que</u> mi currículum <u>era</u> muy interesante. Al final me <u>dijo que</u> me <u>llamaría</u> al día siguiente y me <u>pidió que llevara</u> mis títulos originales.<br><br>Esta mañana ha sonado el teléfono a las nueve. Era la directora: <u>ha dicho que</u> Lorena <u>empieza</u> el lunes.` },
  q: [
    ["¿Dónde vive Lorena?", ["En Valencia","En Lisboa","En Sevilla"], 2],
    ["¿Qué curso había hecho el año anterior?", ["De francés","De portugués","De inglés"], 1],
    ["¿Qué le pidió la directora?", ["Que llevara sus títulos originales","Que hablara en inglés","Que volviera el lunes"], 0],
    ["¿Qué ha dicho la directora esta mañana?", ["Que la llamará otro día","Que Lorena empieza el lunes","Que necesita más información"], 1]
  ],
  sp: [
    "¿Qué te dijo tu mejor amigo/a la última vez que hablasteis?",
    "Recuerda una entrevista o un examen oral: ¿qué te preguntaron?",
    "¿Qué te decían tus padres cuando eras pequeño/a? Usa «me decían que…».",
    "Cuenta una noticia que has leído esta semana: ¿qué decía?",
    "Tu compañero te dice: «Mañana no puedo venir a clase porque estoy enfermo». Cuéntaselo al profesor.",
    "¿Qué te pidió alguien recientemente? ¿Lo hiciste?"
  ]
}
);
