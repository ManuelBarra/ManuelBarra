let questions = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },

    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },

    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },

    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" }];/*

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }];*/

let jugadores = [
    { nombre: "Raul", puntos: 7 },
    { nombre: "Paul", puntos: 5 },
    { nombre: "Eddy", puntos: 1 },
    { nombre: "Jose", puntos: 3 }];

function pasapalabra() {

    let nombre = prompt("Cual es tu nombre");
    alert("Bienvenido " + nombre + " al BINGO \n Responde cada pregunta a tu criterio o responde PASAPALABRA para saltar a la proxima \n En cualquier momento puedes terminar la partida escribiendo END o presionando el boton CANCELAR");
    let puntos = partida();

    ranking(nombre, puntos);

}

function ranking(nombre, puntos) {

    let jugador = new Object();

    jugador.nombre = nombre;
    jugador.puntos = puntos;

    jugadores.push(jugador);

//ordenar las puntuaciones y mostrarlas
    jugadores.sort(function (a, b) {
        if (a.puntos < b.puntos) {
            return 1;
        }
        if (a.puntos > b.puntos) {
            return -1;
        }
       
    });

    for (let i = 0; i < jugadores.length; i++) {
        console.log(jugadores[i]);
    }

}

function partida() {
    let finPartida = false;
    let cont = 0;
    let respuesta;
    let acertadas = 0;
    let erroneas = 0;

    do {
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].status === 0) {//solo muestra las preguntas que aun no se han respondido
                do {//para que solo introduzcan letras
                    respuesta = prompt(questions[i].question);

                    if (respuesta === null) {// condicion para cuando pulsa cacelar 
                        finPartida = true;
                        break;
                    } else {
                        respuesta = respuesta.toLowerCase(); //por el contrario pasa a minusculas lo introducido
                    }

                    //condiciones para ssaber si es coorecta o no la respuesta o si es pasalapabra
                    if (respuesta === questions[i].answer) {
                        alert("CORRECTO")
                        cont++; // contador para saber cuado acabar el bucle
                        acertadas++;
                        questions[i].status = 1;
                    }

                    if (respuesta === "pasapalabra") {
                        questions[i].status = 0;

                    } else if (respuesta !== "pasapalabra" && respuesta !== questions[i].answer && respuesta !== "end") {
                        if (respuesta === undefined || /^([0-9])*$/.test(respuesta)) {
                            alert("Has introduciso algo incorrecto");
                        } else {
                            alert("INCORRECTO \n La respuesta es : " + questions[i].answer);
                            cont++
                            erroneas++;
                            questions[i].status = 2;
                        }
                    }
                    // condicion para salir
                    if (respuesta === "end") {
                        finPartida = true;
                        break;
                    }

                } while (/^([0-9])*$/.test(respuesta))

            }
            if (finPartida === true) {
                break;
            }

            console.log("Tienes " + acertadas + " aciertos");
            console.log("Tienes " + erroneas + " fallos");
        }
    } while (cont < questions.length)

    console.log("Has conseguido acertar " + acertadas + " preguntas");
    console.log("Y has fallado en " + erroneas + " preguntas");

    return acertadas;
}

pasapalabra();

