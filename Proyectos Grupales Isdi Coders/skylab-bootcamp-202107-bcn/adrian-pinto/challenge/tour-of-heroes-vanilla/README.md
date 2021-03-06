# Tour of heroes vanilla JS
Este challenge nos enseña a modulizar un proyecto simple con principios solid.

## Estructura de directorios
El proyecto esta fragmentado por cada uno de los casos de uso del mmismo.

### Dashboard
Pagina princial del proyecto donde podemos ver los top heroes.
1. Dr Nice
2. Narco
3. Bombasto
4. Celeritas
Desde esta pagina podemos ir a los detalles de los heroes haciendo click en sus nombres o bien a la lista completa 

Aquí vamos anidar el componente heroes__first

### Heroes 
Muestra la lista completa de heroes desde aqui podemos volver al dashboard o hacer click en algun heroes de la lista

Aqui vamos anidar el componente heroes__list

### Details 
Muestra la ficha del heroe con toda su informacion
aqui mantenemos los botones de dashboard y de heroes
pero añadimos el boton de volver para regresar al la pagina de la que venimos

Aquí vamos anidar el componente heroe__details


Back button
~~~html
 <button onclick="goBack()">Go Back</button>

<script>
function goBack() {
  window.history.back();
}
</script> 
~~~

## Estructura del proyecto 

- Tenemos un archivo heroes.const que nos hara a la vez de base de datos
- hero.class este archivo actuara como constructor para cada uno de nuestros heroes
- implementaremos cada pagina como un componente reusable 


## El uso de web component
[MDN - WebComponent](https://developer.mozilla.org/es/docs/Web/Web_Components)
[Ejemplo WebComponent - Codigo](https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js)
[Ejemplo WebComponent - Live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
[Ejemplo WebComponent - DEV](https://github.com/Leeoc/WebComponentExamples/blob/master/components/tooltip.js)
Web component gracias al shadow DOM nos permite poder implementar datos en trozos de html que luego podemos reusar aplicando custom elements dentro de nuestra pagina.

### Estructura de un WebComponent
 - Custom elements: Nos permite crear elementos personalizados que podemos reusar
 - Shadow DOM: Nos permite desacoplar el HTML, los Styles y los scripts asociados a el del resto de elementos del ligth DOM 
 - Html templates: Junto a <template> y <slot> nos permite tener plantillas de html que no son desplegadas en el documento asta que lo indiquemos, puediendo así ser reusadas

### Resumen de la implementación de un WebComponent
1. Crear una clase o funcion donde anidar la logica del componente
2. Registrar el nuevo elemento con CustomElementRegistry.define()
3. Si es preciso, adjuntar un shadow DOM el elemento usando Element.attachShadow() para ello. Aquí debemos de anidar stylos, eventos y elementos hijos.
> el shadow DOM se llama al final de la clase constructora
4. Si es preciso, definiremos una plantilla html usando <template> o <slot>
5. Usar el WebComponent como si fuera un tag mas dentro de nuestro documento

### Configuracion basica
Para crear nuestro web component debemos de extender primero el HTMLElement
en un objeto constructor donde vamos a prototipar los datos.

En el siguiente ejemplo vamos a crear una clase Tooltip donde vamos a extender HTMLElement.

~~~javascript
class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}
~~~

Para poder usar los metodos de objeto padre usaremos las siguietes funciones
 - super(): Para tenerlos disponibles en el constructor del nuevo objeto.
 - attachShadow(): Al añadir nuestros componentes al shadow DOM nos permite tenerlos separados de nuestro HTML.


Ahora podemos añadir nuestro html con sus stylos dentro de nuestro componente
~~~javascript
this.shadowRoot.innerHTML = `
    <style>
        #tooltip-container {
            font-size: 24px;
        }

        .tooltip{
            padding: 1rem;
            border-radius: 10px;
            background-color: black;
            color: white;
        }
    </style>
    <slot></slot>
    <span id="tooltip-container">👉</span>
`;
~~~
 > Nota: el tag 'slot' nos permite traer elementos del DOM hacia el interior de nuestro componente.

Para acabar la configuracion de nuestro componente deberemos de definirlo dentro de customElements con la siguiente funcion.
~~~javascript
customElement.define('tooltip-tag', Tooltip);
~~~
Ahora nuestro componente esta disponible como una tag mas dentro de nuestro HTML

### Añadir funcionalidad al componente
Nuestros componentes de forma automatica generan unos callback durante los siguientes eventos:
 - connectedCallback(): Cuando el componente se agrega al ligth DOM
 - disconnectedCallback(): Cuando el componente se retira del ligth DOM
 - adoptedCallback(): Cuando el componente se mueve a un nuevo documento
 - attributeChangedCallback(): Cuando algun atributo del componente recibe un cambio

 > Se considera una buena practica limpiar los EventListeners del componente al retirarlo del DOM
~~~javascript
 disconnectedCallback() {
    this._tooltipContainer.removeEventListener("mouseover", this._showTooltip);
    this._tooltipContainer.removeEventListener("mouseleave", this._hideTooltip);
    console.log("All clean 😊");
  }
~~~

### Creando un componente desde otro
Cuando queremos crear una nueva intancia de nuestro compoenente debemos de extender el mismo en uno nuevo en vez de hacer una copia del mismo

Cuando extendemos tenemos tres eventos fisponibles

 - construtor() : cuando intanciamos una nueva clase de nuestro elemento

 - connectedCallback() : este evento se dispara al definir el componente con el metodo define de customElements 

 - disconnectedCallback() : cuando nuestro custom elemento se desconecta de la pagina

# notas:
## Generar un HTML template
Es mejor usar un template string y el metodo createElement()
estos ficheros se pueden denominar .mjs
## Consultas:
 - MVC repasar conecptos de los controladores.
## test:
En los test vamos a dividir el test en tres bloques
~~~javascript
test('Check key is exist', () => {
  // arrange - Los datos necesarios para el test
  let uriParams = '?id=01&heroName=Batman';
  // act - operamos los datos y almacenamos los resultados de las expresiones
  let params = new URLSearchParams(uriParams)
  // assert - evaluamos los datos con los test
  expect( params.has('id') ).toBe(true)
})
~~~
## funciones utiles
[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
1. Parsear un parametro de la url 
En el navegador podemos localizar los parametros que hay en una URI en document.location.search.substring(1), Podemos crear un objeto con ello gracias a URLSearchParams() para mas tarde parsear el resultado
~~~javascript
let params = new URLSearchParams(document.location.search.substring(1))
~~~

2. Una vez creado el objeto URLSearchParam() podemos consultar los parametros con .get('PARAM_TO_FIND') esto nos retornara el valor del parametro que le indicamos
~~~javascript
// URI localhost/?id=01&name='pepe'
let idValue = params.get('id') // '01'
let nameValue = params.get('name') // 'pepe'
~~~
 - Funciones utiles de 'URLSearchParams'
   - forEach: se opera con un callback
  ~~~javascript
  params.forEach( (value, key ) => console.log( value, key ))
  ~~~
   - .entries: se opera con un array
  ~~~javascript
  for( let param of params.entries()){
    console.log( `Clave: ${param[0]} Valor: ${param[1]}` )
  }
  ~~~
  3. .has('KEY_TO_CHECK')
  ~~~javascript
  let result = params.has('id') // result: true || false
  ~~~
  4. .get() Devuelve el valor que apunta la key
  ~~~javascript
    let result = params.get('id') // result: '01'
  ~~~
  5. .getAll(KEY_TO_FIND) Devulve todo los valores asociados a la key
  ~~~javascript
  let result = params.getAll('id') // result: [ '01' ]
  ~~~ 

[metodo statico](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/static)
 - Cuando definimos una nueva clase podemos añadir metodos staticos que seran unicamente accesible en el momento que estamos generando una nueva instancia de la clase y luego quedaran inaccesibles
 - Nos debemos de asegurar de que el metodo statico no tiene dependencia de la clase

[Object.entries](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
 - Las entries son el conjunto de {Key: value} de un objeto tambien conocido como propiedad

[Nest style on component](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#internal_vs._external_styles)
[Ejemplo:](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/?)

[API resource](https://akabab.github.io/superhero-api/api/)

### Jest manual mock for http request
Para crear un mock de forma manual creamos el directorio __mocks__ dentro de este directorio creamos el archivo de la funcion que queremos mockear.


### Ejemplo de la llamada cors asincrona
~~~javascript
// With XMLHttpRequest
/**
 * Funcion que crea una promesa con una Peticion XML contra la API que indiquemos en 'url'
 * @param {String} url Indicamos la direccion del recurso que queremos pedir a la API
 */
function newXHR(url){
    return new Promise(function(resolve, reject){
        let xhr=new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onloadend=function(){resolve(this.response)};
        xhr.onerror=function(){reject(console.error("La solicitud no a podido ser resuelta"))};
        xhr.send();
    });
}
// Use case
  Promise.all(newXHR(["URI"])).then(function(value){
   //Do stuff
  });
}
// with fetch API
/**
 * https://developer.mozilla.org/es/docs/Web/API/Fetch_API
 * https://akabab.github.io/superhero-api/
 * @param { Number || String } heroId Id number || 'all' => to obtain all heroes json
 * @param { String } heroInfo id, powerstat, apparence, biography, connections, work
 * @returns { Object } promise
 */
const callHeroe = async (heroId, heroInfo) => {
  const consult = heroId === 'all' ? `${heroId}.json` : `${heroInfo}/${heroId}.json`;
  const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/${consult}`);
  return response.json()
    .then((hero) => { response.json = hero; return response; })
    .catch((error) => new Error(error));
};

export default callHeroe;
/* use case
newCall = await callHeroe( id, 'info' )
*/
~~~

### call(), bind(), apply()
Sirven para cambiar el contexto de una funcion, por el contexto que se le pasa como argumento

### Llamar una funcion con destructuracion
~~~javascript
const Obj = { id: 12, name: 'qwerety'}
const destruc = ({id}) => id;
const result = destruc(Obj);
console.log(result); // 12
~~~

### closure 
una funcion que se declara dentro de otra ser llama closure, este closure mantiene el scope en el momento que es invocada
 > No confundir con una funcion de callback (una funcion que se pasa como un argumento a otra funcion)
 ~~~javascript
 const totalPrice = (unitPrice) => {
   const amount = 5;
   return resultPrice = () => unitPrice * amount;
 }
 const calc = totalPrice(10)
 console.log( calc ) // function resultPrice() with unitPrice = 10
 const result = calc(); // 50; Resolve calc scoope 
 ~~~

# Challenge 21/7
Poder filtrar heroes y despues hacer un CRUD
esto debe de implementarse en la pagina de heroes

# Challenge 22/7
Usar callbacks para recuperar datos con XMLHttpRequest
Dashboard 
 - Call heroes from XMLHttpRequest
 - Call heroes from fetch