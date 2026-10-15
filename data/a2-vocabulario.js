/* Camino al Español · Nivel A2 · contenido */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "a2-rest",
  lvl: "A2",
  k: "v",
  t: "Comida y restaurante",
  en: "Food and restaurants",
  ic: "🍽️",
  th: `<div class="card"><h2>En el restaurante <span class="en">(at the restaurant)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>la carta / el menú</td><td>menu</td></tr>
<tr><td>el menú del día</td><td>set menu of the day</td></tr>
<tr><td>la cuenta</td><td>the bill (US: the check)</td></tr>
<tr><td>el camarero / la camarera</td><td>waiter / waitress (LatAm: el mesero / la mesera)</td></tr>
<tr><td>el primer plato / el segundo plato / el postre</td><td>starter / main course / dessert</td></tr>
<tr><td>la propina</td><td>tip</td></tr>
<tr><td>el pollo, el pescado, la carne</td><td>chicken, fish, meat</td></tr>
<tr><td>las verduras, la fruta</td><td>vegetables, fruit</td></tr>
<tr><td>picante, dulce, salado</td><td>spicy, sweet, salty</td></tr></table>
<div class="tip"><b>Truco / Trick:</b> En España, el <b>menú del día</b> incluye primer plato, segundo plato, postre, pan y bebida por un precio fijo. <span class="en">In Spain the "menú del día" is a fixed-price lunch with starter, main, dessert, bread and a drink.</span></div></div>
<div class="card"><h3>Frases útiles <span class="en">(useful phrases)</span></h3>
<p>Una mesa para dos, por favor. <span class="en">A table for two, please.</span><br>
¿Tienen mesa en la terraza? <span class="en">Do you have a table on the terrace?</span><br>
Quisiera la paella. <span class="en">I would like the paella.</span><br>
De primero, una ensalada; de segundo, pescado. <span class="en">For starter, a salad; for main, fish.</span><br>
¿Qué me recomienda? <span class="en">What do you recommend?</span><br>
Soy alérgico a los frutos secos. <span class="en">I'm allergic to nuts.</span><br>
¿Nos trae la cuenta, por favor? <span class="en">Could you bring us the bill?</span><br>
Estaba riquísimo. <span class="en">It was delicious.</span></p></div>
<div class="card"><h3>Cocinar y describir la comida <span class="en">(cooking and describing food)</span></h3>
<table><tr><th>¿Cómo está hecho?</th><th>English</th></tr>
<tr><td>a la plancha</td><td>grilled (on a hot plate)</td></tr>
<tr><td>frito / asado / al horno</td><td>fried / roasted / baked</td></tr>
<tr><td>poco hecho / muy hecho</td><td>rare / well done</td></tr>
<tr><td>rico, sabroso, soso</td><td>tasty, flavourful, bland</td></tr></table>
<p>La sopa está fría. <span class="en">The soup is cold.</span><br>Este plato está muy rico. <span class="en">This dish is really tasty.</span><br>
En México: el carro, la comida <b>picosa</b>; en España: el coche, la comida <b>picante</b>. <span class="en">Vocabulary changes across countries.</span></p></div>`,
  voc: [
    ["📋", "la carta", "menu"],
    ["🧾", "la cuenta", "bill / check"],
    ["🤵", "el camarero", "waiter"],
    ["🍗", "el pollo", "chicken"],
    ["🐟", "el pescado", "fish"],
    ["🥩", "la carne", "meat"],
    ["🥦", "las verduras", "vegetables"],
    ["🍎", "la fruta", "fruit"],
    ["🥗", "la ensalada", "salad"],
    ["🍰", "el postre", "dessert"],
    ["🍞", "el pan", "bread"],
    ["🍷", "el vino", "wine"],
    ["💧", "el agua", "water"],
    ["🥘", "la paella", "paella"],
    ["🌶️", "picante", "spicy"],
    ["🍬", "dulce", "sweet"],
    ["🪙", "la propina", "tip"],
    ["🍴", "el tenedor", "fork"]
  ],
  ex: [
    { q: "la cuenta", o: ["the bill", "the menu", "the tip"], a: 0, t: "la cuenta = the bill" },
    { q: "el camarero", o: ["cook", "waiter", "customer"], a: 1, t: "el camarero = waiter" },
    { q: "Quisiera ___ la carta, por favor.", o: ["ver", "ser", "dar"], a: 0, t: "I'd like to see the menu, please." },
    { q: "Para beber, ___ agua con gas.", o: ["quisiera", "quiere", "quieren"], a: 0, t: "To drink, I'd like sparkling water." },
    { q: "Dulce es lo contrario de...", o: ["salado", "caliente", "rico"], a: 0, t: "Sweet is the opposite of salty." },
    { q: "el postre", o: ["dessert", "starter", "drink"], a: 0, t: "el postre = dessert" },
    { q: "¿Nos trae la ___, por favor? (the bill)", a: ["cuenta"], t: "Could you bring us the bill, please?" },
    { q: "Una ___ para dos, por favor. (table)", a: ["mesa"], t: "A table for two, please." },
    { q: "Al final dejamos una ___ al camarero. (tip)", a: ["propina"], t: "In the end we left the waiter a tip." },
    { w: "De primero quiero una ensalada mixta.", t: "For the starter I want a mixed salad." },
    { w: "¿Qué me recomienda de postre?", t: "What do you recommend for dessert?" },
    { w: "El pescado a la plancha está riquísimo.", t: "The grilled fish is delicious." }
  ],
  tx: {
    ti: "Una cena en Valencia",
    b: `Ayer fuimos a un restaurante nuevo en el centro de Valencia. Era viernes y había mucha gente, pero teníamos una reserva. El <u>camarero</u> nos dio la <u>carta</u> y nos recomendó la paella de la casa. Pedimos de <u>primer plato</u> una ensalada con tomate y aguacate. De segundo, yo tomé <u>pescado</u> a la plancha con <u>verduras</u> y mi novio, <u>carne</u> asada con patatas. Para beber, pedimos agua y una botella de vino blanco.<br><br>De <u>postre</u> compartimos una tarta de chocolate. Estaba riquísimo, aunque un poco <u>dulce</u> para mí. Al final pedimos la <u>cuenta</u>: fueron cincuenta euros. Pagamos con tarjeta y dejamos una <u>propina</u> de cinco euros porque el servicio fue excelente. Queremos volver el mes que viene para probar la paella.`
  },
  q: [
    ["¿Qué pidieron de primer plato?", ["Sopa", "Ensalada", "Paella"], 1],
    ["¿Qué comió el novio?", ["Carne", "Pescado", "Pollo"], 0],
    ["¿Qué dejaron al final?", ["Una nota", "Una propina", "Nada"], 1],
    ["¿Por qué quieren volver?", ["Para probar la paella", "Porque es barato", "Para trabajar allí"], 0]
  ],
  sp: [
    "¿Cuál es tu plato favorito? Descríbelo.",
    "Estás en un restaurante: pide una mesa y tu comida.",
    "¿Qué comes normalmente para desayunar?",
    "¿Te gusta la comida picante? ¿Por qué?",
    "¿Qué plato típico de tu país recomiendas?",
    "Cuenta la última vez que comiste en un restaurante: ¿qué pediste y cómo estaba?"
  ]
},
{
  id: "a2-ropa",
  lvl: "A2",
  k: "v",
  t: "Ropa y compras",
  en: "Clothes and shopping",
  ic: "👗",
  th: `<div class="card"><h2>La ropa <span class="en">(clothes)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>la camiseta / la camisa</td><td>T-shirt / shirt</td></tr>
<tr><td>los pantalones / los vaqueros</td><td>trousers / jeans (LatAm: los jeans)</td></tr>
<tr><td>la falda / el vestido</td><td>skirt / dress</td></tr>
<tr><td>el jersey / la chaqueta / el abrigo</td><td>jumper / jacket / coat (LatAm: el suéter)</td></tr>
<tr><td>los zapatos / las zapatillas / las botas</td><td>shoes / trainers / boots</td></tr>
<tr><td>el bolso / la gorra / la bufanda</td><td>handbag / cap / scarf</td></tr></table>
<p>Llevo una camiseta blanca y unos vaqueros. <span class="en">I'm wearing a white T-shirt and jeans.</span></p></div>
<div class="card"><h3>Colores, tallas y materiales <span class="en">(colours, sizes and materials)</span></h3>
<table><tr><th>Colores</th><th>Tallas</th><th>Materiales</th></tr>
<tr><td>rojo, azul, verde, amarillo</td><td>la talla S, M, L</td><td>de algodón <span class="en">cotton</span></td></tr>
<tr><td>negro, blanco, gris, marrón</td><td>el número (zapatos): el 38</td><td>de lana <span class="en">wool</span></td></tr>
<tr><td>rosa, naranja, morado</td><td>grande / pequeño</td><td>de cuero <span class="en">leather</span></td></tr></table>
<p>El adjetivo concuerda: <b>una falda roja</b>, <b>unos zapatos rojos</b>. Pero <b>rosa</b>, <b>naranja</b> y <b>azul</b> no cambian de género: <b>una camisa azul</b>, <b>un jersey rosa</b>. <span class="en">Colours agree with the noun, except rosa/naranja (invariable) and azul/verde (same for both genders).</span></p>
<div class="tip"><b>Truco / Trick:</b> Ropa = <i>talla</i> (size). Zapatos = <i>número</i>. ¿Qué número tiene? <span class="en">What shoe size are you?</span></div></div>
<div class="card"><h3>En la tienda <span class="en">(in the shop)</span></h3>
<p>¿Me lo puedo probar? / ¿Puedo probármelo? <span class="en">Can I try it on?</span><br>
¿Dónde están los probadores? <span class="en">Where are the fitting rooms?</span><br>
¿Tiene una talla más grande? <span class="en">Do you have a bigger size?</span><br>
Me queda pequeño / grande / bien. <span class="en">It's too small / too big / it fits well.</span><br>
¿Cuánto cuesta? / ¿Cuánto es? <span class="en">How much is it?</span><br>
Está de rebajas / en oferta. <span class="en">It's on sale.</span><br>
¿Puedo pagar con tarjeta? — Sí, o en efectivo. <span class="en">Can I pay by card? — Yes, or in cash.</span><br>
Me lo llevo. <span class="en">I'll take it.</span></p></div>`,
  voc: [
    ["👕", "la camiseta", "T-shirt"],
    ["👔", "la camisa", "shirt"],
    ["👖", "los vaqueros", "jeans"],
    ["👗", "el vestido", "dress"],
    ["🧥", "el abrigo", "coat"],
    ["👟", "las zapatillas", "trainers / sneakers"],
    ["👞", "los zapatos", "shoes"],
    ["👢", "las botas", "boots"],
    ["👜", "el bolso", "handbag"],
    ["🧢", "la gorra", "cap"],
    ["🧣", "la bufanda", "scarf"],
    ["🧦", "los calcetines", "socks"],
    ["🧤", "los guantes", "gloves"],
    ["🏷️", "el precio", "price"],
    ["💳", "la tarjeta", "card"],
    ["💶", "el efectivo", "cash"],
    ["🛍️", "la bolsa", "shopping bag"],
    ["🪞", "el probador", "fitting room"]
  ],
  ex: [
    { q: "¿Me lo puedo ___? (to try on)", o: ["probar", "llevar", "pagar"], a: 0, t: "Can I try it on?" },
    { q: "Necesito un ___ más grande de zapatos.", o: ["número", "talla", "precio"], a: 0, t: "I need a bigger shoe size." },
    { q: "Quiero una falda ___.", o: ["rojo", "roja", "rojas"], a: 1, t: "I want a red skirt." },
    { q: "Estos pantalones me quedan ___. Necesito una talla menos.", o: ["grandes", "pequeños", "bien"], a: 0, t: "These trousers are too big for me. I need one size smaller." },
    { q: "el abrigo", o: ["coat", "shirt", "scarf"], a: 0, t: "el abrigo = coat" },
    { q: "¿Puedo pagar en ___? — Sí, claro, o con tarjeta.", o: ["efectivo", "probador", "rebaja"], a: 0, t: "Can I pay in cash? — Yes, of course, or by card." },
    { q: "Un jersey de ___ es muy caliente para el invierno. (wool)", a: ["lana"], t: "A wool jumper is very warm for winter." },
    { q: "¿Cuánto ___ esta camisa? (costar)", a: ["cuesta"], t: "How much does this shirt cost?" },
    { q: "Me gusta mucho. Me lo ___. (llevar)", a: ["llevo"], t: "I like it a lot. I'll take it." },
    { w: "¿Tiene esta chaqueta en talla mediana?", t: "Do you have this jacket in a medium size?" },
    { w: "Los probadores están al fondo a la derecha.", t: "The fitting rooms are at the back on the right." },
    { w: "Hoy llevo una camiseta azul y vaqueros.", t: "Today I'm wearing a blue T-shirt and jeans." }
  ],
  tx: {
    ti: "De rebajas en Madrid",
    b: `El sábado Clara fue de compras con su amiga Inés porque estaban de <u>rebajas</u>. Primero entraron en una tienda de ropa en la calle Fuencarral. Clara buscaba un <u>abrigo</u> para el invierno. Encontró uno <u>negro</u>, de <u>lana</u>, muy bonito, y le preguntó a la dependienta: «¿Me lo puedo <u>probar</u>?». Fue al <u>probador</u>, pero el abrigo le quedaba <u>grande</u>. Por suerte, tenían una <u>talla</u> más pequeña.<br><br>Inés no necesitaba nada, pero vio unas <u>botas</u> marrones de cuero y no pudo resistirse. Pidió el número 38 y le quedaban perfectas. El abrigo costaba noventa euros, pero con el descuento solo pagó sesenta. Las botas costaban cuarenta y cinco. Clara pagó con <u>tarjeta</u> e Inés en <u>efectivo</u>. Después tomaron un café para celebrar sus compras.`
  },
  q: [
    ["¿Qué buscaba Clara?", ["Unas botas", "Un abrigo", "Un vestido"], 1],
    ["¿Qué problema tenía el primer abrigo?", ["Era muy caro", "Le quedaba grande", "Era de color rojo"], 1],
    ["¿Cuánto pagó Clara por el abrigo?", ["Sesenta euros", "Noventa euros", "Cuarenta y cinco euros"], 0],
    ["¿Cómo pagó Inés?", ["Con tarjeta", "No pagó", "En efectivo"], 2]
  ],
  sp: [
    "¿Qué ropa llevas hoy? Describe los colores y los materiales.",
    "¿Cuál es tu ropa favorita para el fin de semana? ¿Por qué?",
    "Estás en una tienda: pide una talla diferente y pregunta si te lo puedes probar.",
    "¿Prefieres comprar ropa en tiendas o por internet? ¿Por qué?",
    "¿Cuál fue tu última compra? ¿Cuánto costó y cómo pagaste?",
    "Describe la ropa que llevas normalmente en invierno y en verano."
  ]
},
{
  id: "a2-viajes",
  lvl: "A2",
  k: "v",
  t: "Viajes y hotel",
  en: "Travel and hotels",
  ic: "🧳",
  th: `<div class="card"><h2>En el aeropuerto y en la estación <span class="en">(at the airport and the station)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>el vuelo / el avión</td><td>flight / plane</td></tr>
<tr><td>la tarjeta de embarque</td><td>boarding pass</td></tr>
<tr><td>la puerta de embarque</td><td>boarding gate</td></tr>
<tr><td>facturar la maleta</td><td>to check in the suitcase</td></tr>
<tr><td>el equipaje de mano</td><td>hand luggage</td></tr>
<tr><td>el billete de ida / de ida y vuelta</td><td>one-way / return ticket (LatAm: el boleto, el pasaje)</td></tr>
<tr><td>el andén / la vía</td><td>platform / track</td></tr>
<tr><td>el retraso / cancelado</td><td>delay / cancelled</td></tr></table>
<p>El vuelo a Lima sale con retraso. <span class="en">The flight to Lima is delayed.</span><br>
El tren para Sevilla sale del andén 5. <span class="en">The train to Seville leaves from platform 5.</span></p></div>
<div class="card"><h3>Reservar un hotel <span class="en">(booking a hotel)</span></h3>
<p>Quería reservar una habitación doble para dos noches. <span class="en">I'd like to book a double room for two nights.</span><br>
¿Está incluido el desayuno? <span class="en">Is breakfast included?</span><br>
Tengo una reserva a nombre de Ramírez. <span class="en">I have a booking under the name Ramírez.</span><br>
¿A qué hora es la salida? <span class="en">What time is check-out?</span><br>
habitación individual / doble, con vistas al mar <span class="en">single / double room, with a sea view</span><br>
la recepción, el ascensor, la llave <span class="en">reception, lift, key</span></p>
<div class="tip"><b>Truco / Trick:</b> «Quería…» (imperfecto) suena más amable que «quiero…» para pedir algo. <span class="en">"Quería" sounds more polite than "quiero" when asking for something.</span></div></div>
<div class="card"><h3>Problemas en el hotel <span class="en">(problems at the hotel)</span></h3>
<p>El aire acondicionado no funciona. <span class="en">The air conditioning doesn't work.</span><br>
No hay agua caliente. <span class="en">There's no hot water.</span><br>
La habitación está sucia / es muy ruidosa. <span class="en">The room is dirty / very noisy.</span><br>
He perdido la llave. <span class="en">I've lost the key.</span><br>
Mi maleta no ha llegado. <span class="en">My suitcase hasn't arrived.</span><br>
¿Me puede cambiar de habitación? <span class="en">Can you change my room?</span></p></div>`,
  voc: [
    ["✈️", "el avión", "plane"],
    ["🛫", "el vuelo", "flight"],
    ["🧳", "la maleta", "suitcase"],
    ["🎒", "la mochila", "backpack"],
    ["🛂", "el pasaporte", "passport"],
    ["🎫", "el billete", "ticket"],
    ["🚆", "el tren", "train"],
    ["🚉", "la estación", "station"],
    ["🏨", "el hotel", "hotel"],
    ["🛎️", "la recepción", "reception"],
    ["🔑", "la llave", "key"],
    ["🛏️", "la habitación doble", "double room"],
    ["🗺️", "el mapa", "map"],
    ["⏰", "el retraso", "delay"],
    ["🌊", "las vistas al mar", "sea view"],
    ["🚿", "la ducha", "shower"],
    ["🛗", "el ascensor", "lift / elevator"]
  ],
  ex: [
    { q: "Antes de subir al avión necesitas la tarjeta de ___.", o: ["embarque", "crédito", "visita"], a: 0, t: "Before boarding the plane you need the boarding pass." },
    { q: "Quería ___ una habitación doble para el viernes.", o: ["reservar", "facturar", "perder"], a: 0, t: "I'd like to book a double room for Friday." },
    { q: "el andén", o: ["platform", "gate", "luggage"], a: 0, t: "el andén = platform (at a train station)" },
    { q: "Un billete de ida y ___, por favor.", o: ["vuelta", "venida", "salida"], a: 0, t: "A return ticket, please." },
    { q: "La ducha no tiene agua caliente. Es un ___.", o: ["problema", "equipaje", "vuelo"], a: 0, t: "The shower has no hot water. It's a problem." },
    { q: "Tengo una ___ a nombre de López. (booking)", a: ["reserva"], t: "I have a booking under the name López." },
    { q: "Voy a ___ la maleta grande en el mostrador. (to check in)", a: ["facturar"], t: "I'm going to check in the big suitcase at the desk." },
    { q: "El tren llega tarde: tiene un ___ de veinte minutos. (delay)", a: ["retraso"], t: "The train is late: it has a twenty-minute delay." },
    { q: "Para subir al quinto piso tomamos el ___. (lift)", a: ["ascensor"], t: "To go up to the fifth floor we take the lift." },
    { w: "¿Está incluido el desayuno en el precio?", t: "Is breakfast included in the price?" },
    { w: "El aire acondicionado de mi habitación no funciona.", t: "The air conditioning in my room doesn't work." },
    { w: "Nuestro vuelo sale de la puerta doce.", t: "Our flight leaves from gate twelve." }
  ],
  tx: {
    ti: "Un viaje complicado a Cartagena",
    b: `En marzo, Diego y su hermana viajaron de Bogotá a Cartagena de Indias. En el aeropuerto <u>facturaron</u> una <u>maleta</u> grande y llevaron una <u>mochila</u> como <u>equipaje de mano</u>. El <u>vuelo</u> salió con una hora de <u>retraso</u>, pero el viaje fue tranquilo.<br><br>Cuando llegaron, la maleta no apareció. Tuvieron que ir a una oficina del aeropuerto y explicar el problema. Después tomaron un taxi al <u>hotel</u>. En la <u>recepción</u> dijeron: «Tenemos una <u>reserva</u> a nombre de Diego Rojas». La <u>habitación doble</u> tenía <u>vistas al mar</u>, pero el aire acondicionado no funcionaba y hacía mucho calor. El recepcionista fue muy amable y les cambió de habitación. Al día siguiente, la maleta llegó al hotel. Al final, las vacaciones fueron fantásticas: playa, comida rica y paseos por la ciudad antigua.`
  },
  q: [
    ["¿Qué problema tuvo el vuelo?", ["Fue cancelado", "Salió con retraso", "Salió antes"], 1],
    ["¿Qué pasó con la maleta?", ["No llegó con ellos", "Se rompió", "La olvidaron en el hotel"], 0],
    ["¿Qué no funcionaba en la habitación?", ["La ducha", "El aire acondicionado", "La televisión"], 1],
    ["¿Cómo fueron las vacaciones al final?", ["Horribles", "Aburridas", "Fantásticas"], 2]
  ],
  sp: [
    "¿Prefieres viajar en avión, en tren o en coche? ¿Por qué?",
    "Llamas a un hotel: reserva una habitación para tu familia y pregunta por el desayuno.",
    "Cuenta un viaje que hiciste: ¿adónde fuiste y dónde dormiste?",
    "¿Qué llevas siempre en tu equipaje de mano?",
    "Estás en la recepción de un hotel: explica un problema con tu habitación.",
    "¿Cuál es el viaje de tus sueños? Descríbelo."
  ]
},
{
  id: "a2-salud",
  lvl: "A2",
  k: "v",
  t: "Salud y cuerpo",
  en: "Health and the body",
  ic: "🩺",
  th: `<div class="card"><h2>El cuerpo <span class="en">(the body)</span></h2>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>la cabeza, la cara, el pelo</td><td>head, face, hair</td></tr>
<tr><td>los ojos, la nariz, la boca, los dientes, la oreja</td><td>eyes, nose, mouth, teeth, ear</td></tr>
<tr><td>el cuello, la garganta, la espalda</td><td>neck, throat, back</td></tr>
<tr><td>el brazo, la mano, el dedo</td><td>arm, hand, finger</td></tr>
<tr><td>la pierna, la rodilla, el pie</td><td>leg, knee, foot</td></tr>
<tr><td>el estómago / la barriga</td><td>stomach / tummy (LatAm also: la panza)</td></tr></table></div>
<div class="card"><h3>¿Qué te pasa? Me duele… <span class="en">(What's wrong? It hurts…)</span></h3>
<p><b>Doler</b> funciona como <b>gustar</b>: me duele + singular, me duelen + plural. <span class="en">"Doler" works like "gustar".</span><br>
Me duele la cabeza. <span class="en">I have a headache.</span><br>
Me duelen los pies. <span class="en">My feet hurt.</span><br>
A mi hijo le duele la garganta. <span class="en">My son has a sore throat.</span></p>
<table><tr><th>tener…</th><th>estar…</th></tr>
<tr><td>tener fiebre <span class="en">to have a fever</span></td><td>estar enfermo/a <span class="en">to be ill</span></td></tr>
<tr><td>tener tos <span class="en">to have a cough</span></td><td>estar resfriado/a <span class="en">to have a cold</span></td></tr>
<tr><td>tener gripe <span class="en">to have the flu</span></td><td>estar mareado/a <span class="en">to be dizzy</span></td></tr></table>
<div class="tip"><b>Truco / Trick:</b> En español no decimos «mi cabeza duele», sino «<b>me</b> duele <b>la</b> cabeza»: con partes del cuerpo usamos el artículo, no el posesivo. <span class="en">Use the article (la, el), not "mi", with body parts.</span></div></div>
<div class="card"><h3>En el médico y en la farmacia <span class="en">(at the doctor's and the pharmacy)</span></h3>
<p>Quería pedir cita con el médico. <span class="en">I'd like to make an appointment with the doctor.</span><br>
¿Desde cuándo se encuentra mal? — Desde ayer. <span class="en">Since when have you felt ill? — Since yesterday.</span><br>
Tiene que tomar este jarabe tres veces al día. <span class="en">You have to take this syrup three times a day.</span><br>
¿Tiene algo para el dolor de cabeza? <span class="en">Do you have anything for a headache?</span><br>
la receta, las pastillas, la tirita (LatAm: la curita) <span class="en">prescription, pills, plaster / band-aid</span></p></div>`,
  voc: [
    ["🧠", "la cabeza", "head"],
    ["👁️", "el ojo", "eye"],
    ["👃", "la nariz", "nose"],
    ["👄", "la boca", "mouth"],
    ["🦷", "el diente", "tooth"],
    ["👂", "la oreja", "ear"],
    ["💪", "el brazo", "arm"],
    ["✋", "la mano", "hand"],
    ["🦵", "la pierna", "leg"],
    ["🦶", "el pie", "foot"],
    ["🤒", "la fiebre", "fever"],
    ["🤧", "el resfriado", "cold"],
    ["🧑‍⚕️", "el médico", "doctor"],
    ["💊", "la pastilla", "pill"],
    ["🏥", "el hospital", "hospital"],
    ["🌡️", "el termómetro", "thermometer"],
    ["🩹", "la tirita", "plaster / band-aid"]
  ],
  ex: [
    { q: "Me ___ los pies después de caminar tanto.", o: ["duele", "duelen", "dolen"], a: 1, t: "My feet hurt after walking so much." },
    { q: "A Marta le duele ___ cabeza.", o: ["su", "la", "mi"], a: 1, t: "Marta has a headache." },
    { q: "Tengo 39 grados. Tengo ___.", o: ["fiebre", "tos", "hambre"], a: 0, t: "I have 39 degrees. I have a fever." },
    { q: "la rodilla", o: ["knee", "elbow", "neck"], a: 0, t: "la rodilla = knee" },
    { q: "Para comprar este medicamento necesita una ___ del médico.", o: ["receta", "cita", "tirita"], a: 0, t: "To buy this medicine you need a prescription from the doctor." },
    { q: "No puedo hablar bien: me duele la ___. (throat)", a: ["garganta"], t: "I can't speak properly: my throat hurts." },
    { q: "Mi hermano ___ resfriado y no va a clase. (estar)", a: ["está"], t: "My brother has a cold and isn't going to class." },
    { q: "¿A ti te ___ la espalda? (doler)", a: ["duele"], t: "Does your back hurt?" },
    { q: "Me corté el dedo. ¿Tienes una ___? (plaster)", a: ["tirita", "curita"], t: "I cut my finger. Do you have a plaster?" },
    { w: "Quería pedir cita con el médico, por favor.", t: "I'd like to make an appointment with the doctor, please." },
    { w: "Tome estas pastillas tres veces al día.", t: "Take these pills three times a day." },
    { w: "¿Tiene algo para el dolor de estómago?", t: "Do you have anything for a stomachache?" }
  ],
  tx: {
    ti: "Un lunes en el centro de salud",
    b: `Pablo vive en Santiago de Chile y trabaja en una oficina. El lunes se levantó muy mal: le <u>dolía la cabeza</u>, tenía <u>tos</u> y le <u>dolía la garganta</u>. Se puso el <u>termómetro</u> y vio que tenía treinta y ocho grados de <u>fiebre</u>. Llamó a su jefa para decir que estaba <u>enfermo</u> y después pidió <u>cita</u> en el centro de salud.<br><br>La <u>médica</u> le preguntó: «¿Desde cuándo se encuentra mal?». Pablo respondió que desde el domingo por la noche. La doctora le miró la garganta y le dijo que tenía <u>gripe</u>. Le escribió una <u>receta</u> y le recomendó beber mucha agua, descansar y no ir a trabajar en tres días. Pablo fue a la <u>farmacia</u>, compró las <u>pastillas</u> y un jarabe para la tos, y volvió a casa a dormir. El jueves ya se sentía mucho mejor.`
  },
  q: [
    ["¿Cuánta fiebre tenía Pablo?", ["Treinta y seis grados", "Treinta y ocho grados", "Cuarenta grados"], 1],
    ["¿Qué le dijo la médica?", ["Que tenía gripe", "Que no tenía nada", "Que tenía que ir al hospital"], 0],
    ["¿Qué compró en la farmacia?", ["Tiritas", "Pastillas y un jarabe", "Un termómetro"], 1],
    ["¿Cuándo se sentía mejor?", ["El martes", "El domingo", "El jueves"], 2]
  ],
  sp: [
    "¿Qué haces cuando te duele la cabeza?",
    "Estás en el médico: explica tus síntomas (¿qué te duele y desde cuándo?).",
    "¿Cuándo fue la última vez que estuviste enfermo/a? ¿Qué te pasó?",
    "Estás en la farmacia: pide algo para la tos y la garganta.",
    "¿Qué haces para estar sano/a? Habla de comida, deporte y sueño.",
    "¿Qué remedios caseros usa tu familia para el resfriado?"
  ]
},
{
  id: "a2-trabajo",
  lvl: "A2",
  k: "v",
  t: "Trabajo y estudios",
  en: "Work and studies",
  ic: "💼",
  th: `<div class="card"><h2>Las profesiones <span class="en">(professions)</span></h2>
<table><tr><th>Masculino</th><th>Femenino</th><th>English</th></tr>
<tr><td>el médico</td><td>la médica</td><td>doctor</td></tr>
<tr><td>el profesor</td><td>la profesora</td><td>teacher</td></tr>
<tr><td>el enfermero</td><td>la enfermera</td><td>nurse</td></tr>
<tr><td>el abogado</td><td>la abogada</td><td>lawyer</td></tr>
<tr><td>el cocinero</td><td>la cocinera</td><td>cook</td></tr>
<tr><td>el ingeniero</td><td>la ingeniera</td><td>engineer</td></tr>
<tr><td>el periodista</td><td>la periodista</td><td>journalist (same form)</td></tr>
<tr><td>el policía</td><td>la policía</td><td>police officer (same form)</td></tr></table>
<p>Soy enfermera. <span class="en">I'm a nurse.</span> (sin artículo «una») <br>Trabajo en un hospital. <span class="en">I work in a hospital.</span><br>Trabaja de camarero. <span class="en">He works as a waiter.</span></p>
<div class="tip"><b>Truco / Trick:</b> Con <b>ser</b> + profesión no usamos «un/una»: «Soy profesor», no «Soy un profesor». <span class="en">No article after ser with professions.</span></div></div>
<div class="card"><h3>En el trabajo <span class="en">(at work)</span></h3>
<p>la oficina, la empresa, la reunión, el jefe / la jefa, el compañero de trabajo, el sueldo (LatAm: el salario) <span class="en">office, company, meeting, boss, colleague, salary</span><br>
Trabajo a tiempo completo / a media jornada. <span class="en">I work full-time / part-time.</span><br>
Tengo un horario de nueve a cinco. <span class="en">My hours are from nine to five.</span><br>
Mañana tengo una entrevista de trabajo. <span class="en">Tomorrow I have a job interview.</span></p></div>
<div class="card"><h3>Los estudios <span class="en">(studies)</span></h3>
<p>el colegio / el instituto / la universidad <span class="en">primary school / secondary school / university</span><br>
las asignaturas (LatAm: las materias): matemáticas, historia, lengua, inglés, biología, química, educación física <span class="en">subjects: maths, history, language, English, biology, chemistry, PE</span><br>
aprobar / suspender un examen (LatAm: reprobar) <span class="en">to pass / to fail an exam</span><br>
Estudio Derecho en la Universidad de Salamanca. <span class="en">I study Law at the University of Salamanca.</span><br>
Las clases empiezan a las ocho y media. <span class="en">Classes start at half past eight.</span></p></div>`,
  voc: [
    ["👨‍⚕️", "el médico", "doctor"],
    ["👩‍🏫", "la profesora", "teacher"],
    ["👩‍🍳", "la cocinera", "cook"],
    ["👨‍🚒", "el bombero", "firefighter"],
    ["👮", "el policía", "police officer"],
    ["👩‍💻", "la programadora", "programmer"],
    ["👨‍🌾", "el agricultor", "farmer"],
    ["⚖️", "la abogada", "lawyer"],
    ["🏢", "la oficina", "office"],
    ["💼", "la reunión", "meeting"],
    ["💰", "el sueldo", "salary"],
    ["🏫", "el colegio", "school"],
    ["🎓", "la universidad", "university"],
    ["📚", "la asignatura", "subject"],
    ["📝", "el examen", "exam"],
    ["➗", "las matemáticas", "maths"],
    ["🧪", "la química", "chemistry"],
    ["🕘", "el horario", "schedule / timetable"]
  ],
  ex: [
    { q: "Mi madre es ___. Trabaja en un hospital.", o: ["enfermera", "una enfermera", "enfermero"], a: 0, t: "My mother is a nurse. She works in a hospital." },
    { q: "Ana estudió mucho y ___ el examen.", o: ["aprobó", "suspendió", "trabajó"], a: 0, t: "Ana studied a lot and passed the exam." },
    { q: "La persona que apaga fuegos es el ___.", o: ["bombero", "abogado", "periodista"], a: 0, t: "The person who puts out fires is the firefighter." },
    { q: "el sueldo", o: ["salary", "boss", "meeting"], a: 0, t: "el sueldo = salary" },
    { q: "Trabajo cuatro horas al día: trabajo a media ___.", o: ["jornada", "semana", "oficina"], a: 0, t: "I work four hours a day: I work part-time." },
    { q: "Esta tarde tengo una ___ con mi jefa a las cuatro. (meeting)", a: ["reunión"], t: "This afternoon I have a meeting with my boss at four." },
    { q: "Mi asignatura favorita es la ___: me encantan los números. (maths)", a: ["matemáticas"], t: "My favourite subject is maths: I love numbers." },
    { q: "Mi hermano ___ Medicina en Buenos Aires. (estudiar)", a: ["estudia"], t: "My brother studies Medicine in Buenos Aires." },
    { q: "Si no estudias, vas a ___ el examen. (to fail, Spain)", a: ["suspender", "reprobar"], t: "If you don't study, you're going to fail the exam." },
    { w: "Mañana tengo una entrevista de trabajo importante.", t: "Tomorrow I have an important job interview." },
    { w: "Trabajo en una empresa de nueve a cinco.", t: "I work at a company from nine to five." },
    { w: "Las clases empiezan a las ocho y media.", t: "Classes start at half past eight." }
  ],
  tx: {
    ti: "Estudiar y trabajar en Guadalajara",
    b: `Me llamo Valeria, tengo veintidós años y vivo en Guadalajara, México. Estudio <u>Ingeniería</u> informática en la <u>universidad</u> y también trabajo a <u>media jornada</u> en una <u>empresa</u> de videojuegos. Mi <u>horario</u> es complicado: por la mañana tengo clases de ocho a una y por la tarde voy a la <u>oficina</u> de tres a siete.<br><br>Mis <u>materias</u> favoritas son programación y <u>matemáticas</u>, pero no me gusta nada la física. El semestre pasado <u>reprobé</u> un <u>examen</u> de física y tuve que repetirlo. En el trabajo mis <u>compañeros</u> son muy simpáticos y mi <u>jefa</u> me ayuda mucho. El <u>sueldo</u> no es muy alto, pero aprendo muchísimo. Los viernes tenemos una <u>reunión</u> para hablar de los proyectos. Cuando termine la carrera, quiero ser programadora de videojuegos.`
  },
  q: [
    ["¿Qué estudia Valeria?", ["Medicina", "Ingeniería informática", "Física"], 1],
    ["¿Cuándo va a la oficina?", ["Por la tarde", "Por la mañana", "Los fines de semana"], 0],
    ["¿Qué asignatura no le gusta?", ["Programación", "Matemáticas", "Física"], 2],
    ["¿Qué pasa los viernes?", ["No trabaja", "Tiene una reunión", "Tiene un examen"], 1]
  ],
  sp: [
    "¿A qué te dedicas? ¿Trabajas o estudias?",
    "Describe tu horario de un día normal de trabajo o de clase.",
    "¿Cuál era tu asignatura favorita en el colegio? ¿Y la que menos te gustaba?",
    "¿Qué profesión te gustaría tener en el futuro? ¿Por qué?",
    "Imagina que estás en una entrevista de trabajo: preséntate y habla de tus estudios.",
    "¿Qué es más importante para ti en un trabajo: el sueldo, el horario o los compañeros?"
  ]
},
{
  id: "a2-ocio",
  lvl: "A2",
  k: "v",
  t: "Tiempo libre y deporte",
  en: "Free time and sport",
  ic: "⚽",
  th: `<div class="card"><h2>Jugar, hacer, practicar <span class="en">(play, do, practise)</span></h2>
<table><tr><th>Verbo</th><th>Uso</th><th>Ejemplos</th></tr>
<tr><td><b>jugar al</b> / <b>a la</b></td><td>juegos y deportes de pelota <span class="en">games, ball sports</span></td><td>jugar al fútbol, al tenis, a las cartas</td></tr>
<tr><td><b>hacer</b></td><td>actividades en general <span class="en">activities</span></td><td>hacer deporte, yoga, senderismo, natación</td></tr>
<tr><td><b>practicar</b></td><td>deportes (más formal) <span class="en">sports, more formal</span></td><td>practicar atletismo, surf, escalada</td></tr>
<tr><td><b>ir a</b> / <b>montar en</b></td><td>lugares / vehículos <span class="en">places / vehicles</span></td><td>ir al gimnasio, montar en bici</td></tr></table>
<p>Juego <span class="irr">(u→ue)</span> al baloncesto los martes. <span class="en">I play basketball on Tuesdays.</span><br>
Mis padres hacen senderismo en la sierra. <span class="en">My parents go hiking in the mountains.</span></p>
<div class="tip"><b>Truco / Trick:</b> En España se dice <b>jugar al fútbol</b>; en muchos países de América se dice también <b>jugar fútbol</b>, sin «al». <span class="en">In much of Latin America "al" is often dropped.</span></div></div>
<div class="card"><h3>Aficiones <span class="en">(hobbies)</span></h3>
<p>leer, pintar, cocinar, bailar, tocar la guitarra, ver series, sacar fotos, ir al cine, quedar con amigos <span class="en">read, paint, cook, dance, play the guitar, watch series, take photos, go to the cinema, meet friends</span><br>
Me encanta bailar salsa. <span class="en">I love dancing salsa.</span><br>
En mi tiempo libre suelo leer novelas. <span class="en">In my free time I usually read novels.</span><br>
Voy al gimnasio dos veces por semana. <span class="en">I go to the gym twice a week.</span></p></div>
<div class="card"><h3>Hacer planes e invitar <span class="en">(making plans and invitations)</span></h3>
<p>¿Quedamos el sábado? <span class="en">Shall we meet on Saturday?</span><br>
¿Te apetece ir al cine? (LatAm: ¿Tienes ganas de…? / ¿Quieres…?) <span class="en">Do you fancy going to the cinema?</span><br>
¿Por qué no vamos a la playa? <span class="en">Why don't we go to the beach?</span><br>
¡Vale! / ¡Genial! / ¡Me parece buena idea! <span class="en">OK! / Great! / Sounds good!</span><br>
Lo siento, no puedo, tengo que estudiar. <span class="en">Sorry, I can't, I have to study.</span><br>
¿A qué hora quedamos? — A las seis en la puerta del cine. <span class="en">What time shall we meet? — At six at the cinema entrance.</span></p></div>`,
  voc: [
    ["⚽", "el fútbol", "football / soccer"],
    ["🏀", "el baloncesto", "basketball"],
    ["🎾", "el tenis", "tennis"],
    ["🏊", "la natación", "swimming"],
    ["🚴", "el ciclismo", "cycling"],
    ["🥾", "el senderismo", "hiking"],
    ["🧘", "el yoga", "yoga"],
    ["🏋️", "el gimnasio", "gym"],
    ["🏄", "el surf", "surfing"],
    ["📖", "leer", "to read"],
    ["🎨", "pintar", "to paint"],
    ["💃", "bailar", "to dance"],
    ["🎸", "tocar la guitarra", "to play the guitar"],
    ["📷", "sacar fotos", "to take photos"],
    ["🎬", "el cine", "cinema"],
    ["🎮", "los videojuegos", "video games"],
    ["🃏", "las cartas", "cards"]
  ],
  ex: [
    { q: "Los domingos ___ al fútbol con mis amigos.", o: ["juego", "hago", "toco"], a: 0, t: "On Sundays I play football with my friends." },
    { q: "Mi abuela ___ yoga todas las mañanas.", o: ["juega", "hace", "toca"], a: 1, t: "My grandmother does yoga every morning." },
    { q: "Mi hermano ___ la guitarra en un grupo.", o: ["juega", "toca", "hace"], a: 1, t: "My brother plays the guitar in a band." },
    { q: "¿Te apetece ir al cine esta noche? — ¡___! Me parece buena idea.", o: ["Vale", "Lo siento", "Nunca"], a: 0, t: "Do you fancy going to the cinema tonight? — OK! Sounds good." },
    { q: "el senderismo", o: ["hiking", "swimming", "sailing"], a: 0, t: "el senderismo = hiking" },
    { q: "Nosotros ___ al tenis los jueves. (jugar)", a: ["jugamos"], t: "We play tennis on Thursdays." },
    { q: "Lo siento, no puedo: ___ que trabajar. (tener)", a: ["tengo"], t: "Sorry, I can't: I have to work." },
    { q: "Me encanta ___ salsa los viernes. (to dance)", a: ["bailar"], t: "I love dancing salsa on Fridays." },
    { q: "Voy al ___ tres veces por semana para hacer pesas. (gym)", a: ["gimnasio"], t: "I go to the gym three times a week to lift weights." },
    { w: "¿Quedamos el sábado por la tarde?", t: "Shall we meet on Saturday afternoon?" },
    { w: "En mi tiempo libre suelo leer novelas.", t: "In my free time I usually read novels." },
    { w: "¿Por qué no vamos a la playa mañana?", t: "Why don't we go to the beach tomorrow?" }
  ],
  tx: {
    ti: "Un fin de semana activo",
    b: `Hola, Lucas:<br><br>¿Qué tal estás? Te escribo para hacer <u>planes</u> para el fin de semana. El sábado por la mañana Sofía y yo vamos a <u>hacer senderismo</u> en la sierra de Guadarrama. Es una ruta fácil de tres horas. ¿Te <u>apetece</u> venir? Después podemos comer en un restaurante del pueblo.<br><br>Por la tarde tengo partido: <u>juego al baloncesto</u> en un equipo del barrio y jugamos contra el equipo de Getafe. Si quieres, puedes venir a vernos. El domingo prefiero descansar un poco: quiero <u>leer</u>, <u>tocar la guitarra</u> y por la noche ir al <u>cine</u>. Ponen una película argentina muy buena. ¿<u>Quedamos</u> a las ocho en la puerta del cine?<br><br>Escríbeme pronto y dime si puedes.<br><br>Un abrazo,<br>Marcos`
  },
  q: [
    ["¿Qué van a hacer el sábado por la mañana?", ["Jugar al baloncesto", "Hacer senderismo", "Ir al cine"], 1],
    ["¿Qué deporte practica Marcos en un equipo?", ["Fútbol", "Tenis", "Baloncesto"], 2],
    ["¿Qué quiere hacer Marcos el domingo?", ["Descansar e ir al cine", "Trabajar", "Hacer una ruta larga"], 0],
    ["¿Dónde propone quedar el domingo?", ["En el restaurante", "En la puerta del cine", "En la sierra"], 1]
  ],
  sp: [
    "¿Qué haces en tu tiempo libre? ¿Con qué frecuencia?",
    "¿Practicas algún deporte? ¿Cuál y dónde?",
    "Invita a un amigo a hacer algo este fin de semana: propón el día, la hora y el lugar.",
    "Un amigo te invita a una fiesta, pero no puedes ir: rechaza la invitación con amabilidad.",
    "¿Qué deporte te gusta ver en la tele? ¿Tienes un equipo favorito?",
    "¿Qué afición nueva te gustaría empezar? ¿Por qué?"
  ]
},
{
  id: "a2-natur",
  lvl: "A2",
  k: "v",
  t: "Tiempo y naturaleza",
  en: "Weather and nature",
  ic: "🌦️",
  th: `<div class="card"><h2>¿Qué tiempo hace? <span class="en">(What's the weather like?)</span></h2>
<table><tr><th>Estructura</th><th>Ejemplos</th></tr>
<tr><td><b>hace</b> + sustantivo</td><td>hace sol, hace calor, hace frío, hace viento, hace buen / mal tiempo <span class="en">it's sunny, hot, cold, windy, good / bad weather</span></td></tr>
<tr><td><b>hay</b> + sustantivo</td><td>hay niebla, hay tormenta, hay nubes <span class="en">it's foggy, there's a storm, it's cloudy</span></td></tr>
<tr><td><b>está</b> + adjetivo</td><td>está nublado, está despejado <span class="en">it's cloudy, it's clear</span></td></tr>
<tr><td>verbos</td><td>llueve <span class="irr">(llover)</span>, nieva <span class="irr">(nevar)</span>, graniza <span class="en">it rains, it snows, it hails</span></td></tr></table>
<p>Hoy hace mucho calor: estamos a treinta y cinco grados. <span class="en">It's very hot today: it's 35 degrees.</span><br>
Mañana va a llover en el norte. <span class="en">Tomorrow it's going to rain in the north.</span></p>
<div class="tip"><b>Truco / Trick:</b> Con <b>hace</b> usamos <b>mucho</b>: «hace <b>mucho</b> frío», nunca «hace muy frío». Con adjetivos usamos <b>muy</b>: «está <b>muy</b> nublado». <span class="en">"mucho" with nouns, "muy" with adjectives.</span></div></div>
<div class="card"><h3>Paisajes y geografía <span class="en">(landscapes and geography)</span></h3>
<table><tr><th>Español</th><th>English</th></tr>
<tr><td>la montaña, la sierra, el volcán</td><td>mountain, mountain range, volcano</td></tr>
<tr><td>el río, el lago, la cascada</td><td>river, lake, waterfall</td></tr>
<tr><td>la costa, la playa, el mar, la isla</td><td>coast, beach, sea, island</td></tr>
<tr><td>el bosque, la selva, el desierto, el campo</td><td>forest, jungle, desert, countryside</td></tr>
<tr><td>el norte, el sur, el este, el oeste</td><td>north, south, east, west</td></tr></table>
<p>El río Amazonas es el más caudaloso del mundo. <span class="en">The Amazon carries the most water in the world.</span><br>
Galicia está en el noroeste de España y tiene una costa preciosa. <span class="en">Galicia is in the north-west of Spain and has a beautiful coast.</span></p></div>
<div class="card"><h3>Los animales <span class="en">(animals)</span></h3>
<p>el perro, el gato, el caballo, la vaca, la oveja <span class="en">dog, cat, horse, cow, sheep</span><br>
el pájaro, el águila, el oso, el lobo <span class="en">bird, eagle, bear, wolf</span><br>
el delfín, la ballena, la tortuga, el mono <span class="en">dolphin, whale, turtle, monkey</span><br>
En las islas Galápagos viven tortugas gigantes. <span class="en">Giant tortoises live on the Galápagos Islands.</span></p></div>`,
  voc: [
    ["☀️", "el sol", "sun"],
    ["🌧️", "la lluvia", "rain"],
    ["❄️", "la nieve", "snow"],
    ["🌬️", "el viento", "wind"],
    ["⛈️", "la tormenta", "storm"],
    ["🌫️", "la niebla", "fog"],
    ["⛰️", "la montaña", "mountain"],
    ["🏞️", "el río", "river"],
    ["🌋", "el volcán", "volcano"],
    ["🏝️", "la isla", "island"],
    ["🏖️", "la costa", "coast"],
    ["🌲", "el bosque", "forest"],
    ["🏜️", "el desierto", "desert"],
    ["🐻", "el oso", "bear"],
    ["🐺", "el lobo", "wolf"],
    ["🐬", "el delfín", "dolphin"],
    ["🐢", "la tortuga", "turtle / tortoise"],
    ["🦅", "el águila", "eagle"]
  ],
  ex: [
    { q: "En agosto en Sevilla ___ mucho calor.", o: ["hace", "está", "hay"], a: 0, t: "In August in Seville it's very hot." },
    { q: "No veo nada en la carretera: hay mucha ___.", o: ["niebla", "sol", "calor"], a: 0, t: "I can't see anything on the road: it's very foggy." },
    { q: "Hoy el cielo ___ nublado.", o: ["hace", "está", "hay"], a: 1, t: "Today the sky is cloudy." },
    { q: "Hace ___ frío en Ushuaia en invierno.", o: ["muy", "mucho", "mucha"], a: 1, t: "It's very cold in Ushuaia in winter." },
    { q: "el bosque", o: ["forest", "desert", "beach"], a: 0, t: "el bosque = forest" },
    { q: "En los Pirineos ___ mucho en invierno. (nevar)", a: ["nieva"], t: "In the Pyrenees it snows a lot in winter." },
    { q: "Lleva paraguas: va a ___ esta tarde. (to rain)", a: ["llover"], t: "Take an umbrella: it's going to rain this afternoon." },
    { q: "El ___ Ebro pasa por Zaragoza. (river)", a: ["río"], t: "The river Ebro flows through Zaragoza." },
    { q: "El Teide es un ___ en la isla de Tenerife. (volcano)", a: ["volcán"], t: "El Teide is a volcano on the island of Tenerife." },
    { w: "Mañana va a hacer sol en la costa.", t: "Tomorrow it's going to be sunny on the coast." },
    { w: "En el bosque viven osos y lobos.", t: "Bears and wolves live in the forest." },
    { w: "Galicia está en el noroeste de España.", t: "Galicia is in the north-west of Spain." }
  ],
  tx: {
    ti: "Un viaje por Costa Rica",
    b: `Costa Rica es un país pequeño, pero tiene una naturaleza increíble. En solo dos semanas, Laura y Javier visitaron <u>playas</u>, <u>volcanes</u>, <u>selvas</u> y <u>ríos</u>. Primero fueron a la <u>costa</u> del Caribe. Allí <u>hacía mucho calor</u> y <u>llovía</u> casi todas las tardes, pero las mañanas estaban <u>despejadas</u>. En el parque nacional vieron <u>monos</u>, perezosos y muchos <u>pájaros</u> de colores. Por la noche, en la playa, vieron <u>tortugas</u> poniendo huevos.<br><br>Después subieron a la <u>montaña</u>, cerca del <u>volcán</u> Arenal. Allí el clima era diferente: <u>hacía viento</u> y por la noche <u>hacía fresco</u>. Se bañaron en un <u>río</u> de aguas termales y caminaron por un <u>bosque</u> lleno de <u>niebla</u>. Al final, en la costa del Pacífico, vieron <u>delfines</u> desde un barco. Laura dice que fue el mejor viaje de su vida.`
  },
  q: [
    ["¿Qué tiempo hacía en la costa del Caribe?", ["Frío y nieve", "Calor y lluvia por la tarde", "Viento y niebla todo el día"], 1],
    ["¿Qué animales vieron por la noche en la playa?", ["Tortugas", "Delfines", "Osos"], 0],
    ["¿Cómo era el clima cerca del volcán?", ["Muy caluroso", "Seco y despejado", "Con viento y fresco por la noche"], 2],
    ["¿Dónde vieron los delfines?", ["En el río", "Desde un barco en el Pacífico", "En el lago"], 1]
  ],
  sp: [
    "¿Qué tiempo hace hoy donde estás?",
    "¿Cuál es tu estación del año favorita? ¿Por qué?",
    "Describe un paisaje bonito de tu país: ¿hay montañas, ríos, costa?",
    "¿Prefieres la playa o la montaña para las vacaciones? ¿Por qué?",
    "¿Cuál es tu animal favorito? ¿Dónde vive y cómo es?",
    "Haz el pronóstico del tiempo de mañana para tu ciudad."
  ]
}
);
