
// 1+1+2+3+5+8+13+21+34
function fibonacci(num){
	if (num <= 1) return 1;
  		return fibonacci(num - 1) + fibonacci(num - 2);
}
document.write(fibonacci(8));


















/*
0)Usar el modo estrictor de Javascript
0.1)Hacer un boton que funcione con onclick
0.11)Usar operaciones aritmeticas usando la función Math, googlealas o checalas en w3schools
0.12)Hacer un array
0.12.1)Hacer un array multidimensional

0.13)Insertar valores en un array vacío

=================================================EJERCICIOS CON IF/ELSE, SWITCH/CASE ===========================================
0.14)Hacer una condicional con if
0.14.1)Usar un BREAK en el IF
0.14.2)Función que dentro de ella ejecute funciones


0.15)Hacer una condicional usando mayor menor que
0.16)Hacer una condicional con ELSE IF
0.17)Hacer una condicional con switch
=================================================EJERCICIOS CON FOR ===========================================
0.18)Imprimir los números del 1 al 10 con FOR 
0.19)Imprimir los números del 10 al 1 con FOR
0.20)Recorrer un arreglo con un FOR


0.21)Recorrer un arreglo con FOR IN
0.21.1)Buscar dentro de un array con FOR IN y el metodo find()
0.21.1)Buscar dentro de un array con FOR IN y el metodo find() y funciones flecha

=================================================EJERCICIOS CON WHILE=========================================
0.22)Imprimir del 1 al 10 con WHILE
0.23)Imprimir del 1 al 10 con DO WHILE
0.24)Usar un break en un ciclo for de las 2 maneras mientras recorre un arreglo.
0.25)Usar un continue en un ciclo de las 2 manerasfor mientras recorre un arreglo

=================================================EJERCICIOS CON FUNCIONES ===========================================
0.27)Hacer una función que sume 2 números
0.28)Hacer una función con RETURN
0.29)Guardar una función dentro de una variable y ejecutarla
0.30)Hacer una función auto invocada
0.31)Hacer una función dentro de otra función

=================================================EJERCICIOS CON FRONTEND ===========================================
0.32)Modificar el DOM
0.33)Crear un nodo
0.34)Conociendo el elemento padre
0.35)Moviendo nodos e insertandolos en otra parte
0.36)Reemplazar los nodos, osea que "quite" una y ponga otra
0.37)Eliminar un nodo
0.38)Usar AddEventListener
0.39)Usar removeListener
0.40)Crear elementos con addEventListener
0.41)Cambiar de color las cajas de color usando addEventListener y toggle
0.42)Usar palabra this
0.43)Usar setTimeout (sirve para ejecutar en un intervalo de tiempo)
0.44)Usar setInterval y clearInterval
0.45)Mostrar la fecha con funciones de Javascript
0.46)Crear y mostrar un objeto
0.47)Guardar una variable con localStorage y sessionStorage
----------------------------------------------SEPARADOR DE TEMÁTICAS
1)Hacer una función que salude
2)Hacer una condicional con if
3)Agregar un valor a una constante que sea un array
4)Usar el template String
5)Hacer una función felcha
6)Hacer Función con flechas
7)Hacer una función con flechas y return
8)Hacer una Funcion con flechas trabajando en una linea(no es necesario el return, el punto y coma y las llaves)
9)Hacer una Función con flechas trabajando en una linea con un solo parametro(ya no son necesarios los parentesis de nombre
10)Hacer una función con parametro por defecto
11)Destructurar un arreglo
12)Deestructuración con parametro por defecto
13)Hacer una deestructuración con función con flecha
14)Deestructurar dentro de una función
15)Reducir el código anterior a 1 sola linea
16)Destructurar un objeto
17)Usar la manera mas común de destructurar un objeto
18)Destructurar el objeto y mostrarlo usando template de llaves
19)Reduce el código de la función anterior
20)Crea una clase que imprima algo y que tenga 
21)Crea una clase con constructor que imprima algo
22)Crea una clase y que herede algo
23)Simplificar el código
24)Simplificar el código del objeto y luego usar su metodo
25)Reducir el metodo del objeto
----------------------------------------------SEPARADOR DE TEMÁTICAS
26)Hacer un parametro rest
26.1)Parametros rest con funciones viejitas
27)Hacer un parametro Spread
27.1)Hacer un parametro Spread con funciones viejitas
27.2)Hacer una función anonima dentro de una variable
27.3)Hacer un puto Callback
28)Hacer una promesa sencilla
29)Hacer una promise que muestre mensaje en el resolve y reject





		
					Ejercicio 0
'use strict'
Si quitas el let te marca error en la consola
let nombre = "Ricardo";


					Ejercicio 0.1

<button onclick="alert('Hola mundo')">Dame click</button>


					Ejercicio 0.12
					
var semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado','Domingo'];
document.write(semana[3]);


					Ejercicio 0.12.1

var tematica = ["Terror","Comedia","Acción"];
var peliculas = ["Gran Torino","Forest Gump","La vida es bella","Mi pobre angelito"];
var cine = [tematica,peliculas];
document.write(cine[1][3]);


					Ejercicio 0.13

var semana = [];
semana[0] = "Monday";
document.write(semana[0]);


					Ejercicio 0.14

var num = 2;
if (num = 2) {
	document.write("Hello world");
}else{
	document.write("El número no es 2");
}


					Ejercicio 0.14.1

var year = 2010;

while(year != 1991){
	document.write("Estamos en el año: " + year + "<br>");
	if (year == 2000) {
		break;
	}
	year--;
}


					Ejercicio 0.14.2

function suma(num1,num2) {
	document.write("La suma de num1+num2 es: " + (num1+num2)+ "<br>");
}
function resta(num1,num2) {
	document.write("La resta de num1+num2 es: " + (num1-num2)+ "<br>");
}

function ejecutar(num1,num2,mostrar) {
	if (mostrar == true) {
		suma(num1,num2);
	}else{
		resta(num1,num2);
	}
	return true;
}

num1= 4;
num2 = 6;
mostrar = true;
ejecutar(num1,num2,mostrar);


					Ejercicio 0.15

var num = 18;
if (num >=18) {
	document.write("Eres mayor de edad");
}else{
	document.write("Eres menor de edad");
}


					Ejercicio 0.16

var num = "España";
if (num == "Mexico") {
	document.write("Eres mesa");
}else if(num == "Guatemala"){
	document.write("Eres chapin");
}else if(num == "Argentina"){
	document.write("Eres argento");
}else if (num == "España") {
	document.write("Eres español");
}


					Ejercicio 0.17

var pais = "Mexico"
switch(pais){
	case "Colombia":
		document.write("Eres parcero");
		break;
	case "Venezuela":
		document.write("Eres pana");
		break;
	case "Mexico":
		document.write("Eres mexa");
		break;
	default:
		document.write("Ese país no existe parcero");
		break;
}


					Ejercicio 0.18

for (var i = 1; i <= 10; i++) {
	document.write(i + "<br>");
}


					Ejercicio 0.19

for (var i = 10; i >= 1; i--) {
	document.write(i + "<br>");
}


					Ejercicio 0.20

var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
for (var i = 0; i < meses.length; i++) {
	document.write(meses[i] + "<br>");
}

					Ejercicio 0.21

var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
for (mes in meses) {
	document.write(meses[mes] + "<br>");
}

					Ejercicio 0.21.1

var peliculas = ["Gran Torino","Forest Gump","Cruzada","Pokemon","Rambo"];
for (pelicula in peliculas) {

}

var busqueda = peliculas.find(function(pelicula) {
	return pelicula == "Pokemon";
})
document.write(busqueda);

					Ejercicio 0.22

var num = 1;
while(num <=10){
	document.write(num + "<br>");
	num++;
}


					EJERCICIO 0.23

var num = 1;

do{
	document.write(num + "<br>");
	num++;
}while(num <= 10);


					EJERCICIO 0.24

var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
for (day in week) {
	document.write(week[day] + "<br>");
	if (week[day] == "Wednesday") {
		break;
	}
}

					Ejercicio 0.25

for (var i = 0; i <week.length; i++) {
	document.write(week[i] + "<br>");
	if (week[i] == "Wednesday") {
		break;
	}
}

for (day in week) {
	document.write(week[day] + "<br>");
	if (week[day] == "Wednesday") {
		break;
	}
}


					Ejercicio 0.26

var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

for (var i = 0; i <week.length; i++) {
	if (week[i] == "Wednesday") {
		continue;
	}
	document.write(week[i] + "<br>");
}

for (day in week) {
	if (week[day] == "Wednesday") {
		continue;
	}
	document.write(week[day] + "<br>");
}


					Ejercicio 0.27

function suma(arg1,arg2) {
	document.write(arg1 + arg2)
}
suma(2,4);


					Ejercicio 0.28

function suma(arg1,arg2) {
	var resultado = arg1 + arg2;
	return resultado;
}
document.write(suma(3,5));


					Ejercicio 0.29

var operacion = function(arg1,arg2) {
	$resultado = arg1 + arg2;
	return $resultado;
}
document.write(operacion(4,5));


					Ejercicio 0.30

(function() {
	alert("Esta es una función auto invocada");
}())


					Ejercicio 0.31

function saludo(a) {
	let b = a;
	function saludo2(c) {
		document.write(c);
	}
	saludo2(b);
}
saludo("Estoy ejecutando una función dentro de otra función, soy una pinshi bverga");


					Ejercicio 0.32

//var cajas = document.getElementByTagName('div');
//var cajas = document.getElementByClassName('caja');
//var cajas = document.getElementById('primeraCaja');

//Maneras de modificas
primeraCaja.textContent = "Hola Mundo";
primeraCaja.innerHTML = '<h1>Hola</h1>';


					Ejercicio 0.33

//------Creando nodos

//1-Crear el elemento
var caja = document.createElement('div');
//2-Crear un nodo de texto
var contenido = document.createTextNode('Hola mundo');
//3-Añadir el nodo de texto al elemento
caja.appendChild(contenido);
//4-Agregar atributos a la caja
caja.setAttribute('class','caja naranja');
//Puedes repetir la linea y agregar mas atributos 
//caja.setAttribute('id','loquesea');
//5-Aagregar el elemento al documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);


					Ejercicio 0.34

Modificando NODOS

//1-Crear el elemento
var caja = document.createElement('div');
//2-Crear un nodo de texto
var contenido = document.createTextNode('Hola mundo');
//3-Añadir el nodo de texto al elemento
caja.appendChild(contenido);
//4-Agregar atributos a la caja
caja.setAttribute('class','caja naranja');
//Puedes repetir la linea y agregar mas atributos 
//caja.setAttribute('id','loquesea');
//5-Aagregar el elemento al documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

//Modificando nodos
caja.id = "primera";
caja.className = 'caja naranja';

					Ejercicio 0.35

//Moviendo nodos e insertandolos en otra parte

var cajas = document.getElementsByTagName('div');
var primeraCaja = document.getElementById('primeraCaja');

//1-Crear el elemento
var caja = document.createElement('div');
//2-Crear un nodo de texto
var contenido = document.createTextNode('Hola mundo');
//3-Añadir el nodo de texto al elemento
caja.appendChild(contenido);
//4-Agregar atributos a la caja
caja.setAttribute('class','caja naranja');
//Puedes repetir la linea y agregar mas atributos 
//caja.setAttribute('id','loquesea');


//Conociendo el elemento padre
var padre = cajas[0].parentNode;
//padre.insertBefore(caja, primeraCaja); Insertala antes del id="primeraCaja"
padre.insertBefore(caja,cajas[2]); //Inserta la caja antes de la caja no.2


					Ejercicio 0.36

var cajas = document.getElementsByTagName('div');
var primeraCaja = document.getElementById('primeraCaja');

//1-Crear el elemento
var caja = document.createElement('div');
//2-Crear un nodo de texto
var contenido = document.createTextNode('Hola mundo');
//3-Añadir el nodo de texto al elemento
caja.appendChild(contenido);

//Modificando la clase o id de un elemento
caja.id = 'primera';//Este es el id de la caja naranja que aparecere
caja.className = 'caja naranja';


//Conociendo el elemento padre
var padre = cajas[0].parentNode;

//Reemplazando
padre.replaceChild(caja,cajas[2]);


						Ejercicio 0.37

var cajas = document.getElementsByTagName('div');
var primeraCaja = document.getElementById('primeraCaja');

//1-Crear el elemento
var caja = document.createElement('div');
//2-Crear un nodo de texto
var contenido = document.createTextNode('Hola mundo');
//3-Añadir el nodo de texto al elemento
caja.appendChild(contenido);

//Modificando la clase o id de un elemento
caja.id = 'primera';//Este es el id de la caja naranja que aparecere
caja.className = 'caja naranja';


//Conociendo el elemento padre
var padre = cajas[0].parentNode;

//Reemplazando
padre.replaceChild(caja,cajas[2]);

//Eliminando nodos
padre.removeChild(cajas[3]);


					Ejercicio 0.38

function saludo() {
	alert('Hola');
}

function saludo2() {
	alert('Hola 2');
}

var btnSaludar = document.getElementById('btn-saludar');
btnSaludar.addEventListener('click',saludo);
btnSaludar.addEventListener('click',saludo2);


					Ejercicio 0.39

function saludo() {
	alert('Hola');
}

function saludo2() {
	alert('Hola 2');
}

var btnSaludar = document.getElementById('btn-saludar');
btnSaludar.addEventListener('click',saludo);
btnSaludar.addEventListener('click',saludo2);
btnSaludar.removeEventListener('click',saludo);


					Ejercicio 40
//Se agrego un boton con html y estilos css
function crearCaja() {
	var contenedor = document.getElementById('contenedor');
	var caja = document.createElement('div');
	caja.className = 'caja';
	contenedor.appendChild(caja);
}

var btnCaja = document.getElementById('btn-caja');
btnCaja.addEventListener('click',crearCaja);


						Ejercicio 41

var cajas = document.getElementsByClassName('caja');

function color() {
	cajas[0].classList.toggle('negro');
}
function color1() {
	cajas[1].classList.toggle('naranja');
}
function color2() {
	cajas[2].classList.toggle('negro');
}
function color3() {
	cajas[3].classList.toggle('naranja');
}

cajas[0].addEventListener('click',color);
cajas[1].addEventListener('click',color1);
cajas[2].addEventListener('click',color2);
cajas[3].addEventListener('click',color3);


						Ejercicio 0.42

var cajas = document.getElementsByClassName('caja');

function color() {
	this.classList.toggle('negro');
	//El this nos sirve para saber que elemento fue clickeado
}

for (var i = 0; i < cajas.length; i++) {
	cajas[i].addEventListener('click',color)
}
cajas[0].addEventListener('click',color);


						Ejercicio 0.43

function saludo() {
	alert('Hola mundo');
}
document.getElementById('btn-iniciar').addEventListener('click',function(){
	setTimeout(saludo,3000);
});
//También se puede limpiar el tiempo usando 
//var tiempo = setTimeout(saludo,3000);
//clearTimeout(Tiempo) 

						Ejercicio 0.44

function saludo() {
	alert('Hola mundo');
}
var intervalo = setInterval(saludo,3000); 
document.getElementById('btn-detener').addEventListener('click',function(){
	clearInterval(intervalo);
});

						Ejercicio 0.45


var fecha = new Date();
var semana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

console.log('Año:'+fecha.getFullYear());
console.log('Mes:'+fecha.getMonth());
console.log('Día:'+ fecha.getDay());
console.log('Hrs:'+fecha.getHours());
console.log('Minutos:'+fecha.getMinutes());
console.log('Segundos:'+fecha.getSeconds());

function mostrarTiempo() {
	var fecha = new Date();
	var parrafo = document.getElementById('fecha');
	parrafo.innerHTML = fecha;
}
var intervalo = setInterval(mostrarTiempo,1000);


						Ejercicio 0.46

var abuelo = {
	nombre: 'Francisco',
	apellido: 'Cruz',
	edad: 80
}

function pishiconstructor(apellido,integrantes,animales) {
	this.apellido = apellido;
	this.integrantes = integrantes;
	this.animales = animales;
}

var familia = new pishiconstructor('Garrido',4,8); 

document.write(abuelo.edad);
document.write("<br>");
document.write(familia.integrantes);



						Ejercicio 0.47

localStorage.setItem('nombre','Ricardo');
//localStorage.nombre = 'Ricardo'; otra manera de agregar
document.write(localStorage.nombre);

//eliminar el elemento de localStorage
//localStorage.removeItem('nombre');


// sessionStorage deja de guardar el dato hasta que cierras la pestaña del navegador
// sessionStorge.nombre = "Fulano";
//document.write(sessionStorge.nombre);

						Ejercicio 0.48



		EJERCICIO 1
function saludo() {
	let nombre = "Ricardo";
	return "Hola " + nombre;
}


					EJERCICIO 2
var edad = 18;
if (edad =>18) {
	console.log("Eres adulto");
}


					EJERCICIO 3
const lol = ["azul","rojo","verde"];
lol.push("amarillo");

console.log(lol);


					Ejercicio 4
let nombre = "lol";
console.log(`riete como gringo ${nombre}`);


					Ejercicio 5

const numero_caracteres = nombres.map(function(nombre) {
	console.log(`${nombre} tiene ${nombre.length} caracteres`);
})


					Ejercicio 6

const numero_caracteres = nombres.map((nombre) => {
	console.log(`${nombre} tiene ${nombre.length} caracteres`);
})


					Ejercicio 7


const numero_caracteres = nombres.map((nombre) => {
	return `${nombre} tiene ${nombre.length} caracteres`;
});


					Ejercicio 8

const numero_caracteres = nombres.map((nombre) => `${nombre} tiene ${nombre.length} caracteres`);


					Ejercicio 9

const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} caracteres`);


					Ejercicio 10

function registro(nombre,pais,mail,telefono='000000') {
	return `Mi nombre es ${nombre} y soy de ${pais}, mi correo es ${mail} y mi telefono es ${telefono}`;
}
console.log(registro("ricardo","Mexalandia","Correo@correo.com",133233));


					EJERCICIO 11
const persona = ["Ricardo",32,"Mexico","Desarrollo web"];
const [nombre,,pais,profesion] =persona;
console.log(pais);


					EJERCICIO 12
const persona = ["Ricardo",32,"Mexico"];
const [nombre,,pais,profesion="no especificado"] =persona;
console.log(profesion);


					Ejercicio 13
const persona = ["Ricardo",32,"Mexico"];
const [nombre,,pais,profesion="no especificado"] =persona;
const mostrarInfo = (profesion) => {
	console.log(profesion);
}
mostrarInfo(profesion);

					Ejercicio14

const persona = ["Ricardo",32,"Mexico"];
const [nombre,,pais,profesion="no especificado"] =persona;
const mostrarInfo = ([nombre,,pais] = persona ) => {
	console.log(nombre,pais,profesion);
}
mostrarInfo(persona);

					Ejercicio15

const persona = ["Ricardo",32,"Mexico"];
const [nombre,,pais,profesion="no especificado"] =persona;

const mostrarInfo = ([nombre,,pais] = persona ) => console.log(nombre,pais,profesion);
mostrarInfo(persona);


						Ejercicio 16

const usuario = {
	nombre: 'Ricardo',
	correo: 'correo@correo.com',
	edad: 22,
	pais: 'Mexico',
	profesion: 'Desarrollo web'
}

const {nombre, correo,profesion} = usuario;
console.log(profesion);

				
				Ejercicio 17

const usuario = {
	nombre: 'Ricardo',
	correo: 'correo@correo.com',
	edad: 22,
	pais: 'Mexico',
	profesion: 'Desarrollo web'
}

const {nombre, correo,profesion,sexo='No especificado'} = usuario;

const mostrarInfo = ({nombre,edad}) =>{
	console.log(profesion,edad);
}
 mostrarInfo(usuario);


 						//Ejercicio 18

const usuario = {
	nombre: 'Ricardo',
	correo: 'correo@correo.com',
	edad: 22,
	pais: 'Mexico',
	profesion: 'Desarrollo web'
}

const {nombre, correo,profesion,sexo='No especificado'} = usuario;

const mostrarInfo = ({nombre,edad}) =>{
	console.log(`${nombre} tiene ${edad}`);
}
 mostrarInfo(usuario);



					//Ejercicio 20
class usuario{

	mostrarInfo(){
		console.log("Hola mundo");
	}
}
const objeto = new usuario();
console.log(objeto.mostrarInfo());


					//Ejercicio 21

class Usuario{
	constructor(nombre,edad,correo){
		this.nombre = nombre,
		this.edad = edad,
		this.correo = correo
	}

	mostrarSaludos(mensaje){
		return mensaje;
	}

	mostrarInfo(){
		return `
			<b>Nombre:</b> ${this.nombre} <br>
			<b>Edad:</b> ${this.edad} <br>
			<b>Correo:</b> ${this.correo} <br>
			<hr>
		`;
	}

}

const objeto = new Usuario("fulano",21,"ricgarridoc@hotmail.com");
console.log(objeto.mostrarInfo());


					//Ejercicio 22

class Usuario{
	constructor(nombre,edad,correo){
		this.nombre = nombre,
		this.edad = edad,
		this.correo = correo
	}

	mostrarSaludos(mensaje){
		return mensaje;
	}

	mostrarInfo(){
		return `
			<b>Nombre:</b> ${this.nombre} <br>
			<b>Edad:</b> ${this.edad} <br>
			<b>Correo:</b> ${this.correo} <br>
			<hr>
		`;
	}

}

const ricardo = new Usuario('Ricardo',32,'ric@mail.com');
document.write(ricardo.mostrarInfo());

class Estudiante extends Usuario{
	constructor(nombre,edad,correo,carrera){
		super(nombre,edad, correo);
		this.carrera = carrera;
	}

	mostrarInfo(){
	return `
		<b>Nombre:</b> ${this.nombre} <br>
		<b>Edad:</b> ${this.edad} <br>
		<b>Correo:</b> ${this.correo} <br>
		<b>Carrera:</b> ${this.carrera} <br>
		<hr>
		`;
	}

}

const rafael = new Estudiante('fulano',50,'ejemplo@mail.com','Php Developer');
document.write(rafael.mostrarInfo());
document.write(rafael.mostrarSaludos("Hello World"));


						Ejercicio 23

const crearObjeto = (nombre, edad) => {
	return {
		nombre,
		edad
	}
}
console.log(crearObjeto('Ricardo',32));


						Ejercicio 24

const crearObjeto = (nombre, edad) => {
	return {
		nombre: nombre,
		edad: edad,
		mostrarInfo: () => {
			return `${nombre} tiene ${edad} años`;
		}
	}
}
console.log(crearObjeto('Ricardo',32).mostrarInfo());

						Ejercicio 25

const crearObjeto = (nombre, edad) => {
	return {
		nombre: nombre,
		edad: edad,
		mostrarInfo(){
			return `${nombre} tiene ${edad} años`;
		}
	}
}
console.log(crearObjeto('Ricardo',32).mostrarInfo());


						Ejercicio 26

//podemos iterar, un ciclo for, foreach, utilizar el metodo map etc

const mostrarDatos = (...datos) => {
	console.log(datos);
}

mostrarDatos('Ricardo',32,'Mexico');


						Ejercicio 26.1

function listadoFrutas(fruta1,fruta2,...resto_de_frutas) {
	document.write("Fruta1: " + fruta1 + "<br>");
	document.write("Fruta2: " + fruta2 + "<br>");
	document.write("Resto de frutas: " + resto_de_frutas + "<br>");
}

listadoFrutas("Pera","Manzana","Uvas","Melones","Sandias");

						
						Ejercicio 27

const mostrarDatos = (...datos) => {
	console.log(datos);
}

const arregloDatos = ['Carlos',23, 'correo@correo.com','México'];
mostrarDatos(...arregloDatos);


						Ejercicio 27.1

function listadoFrutas(fruta1,fruta2,...resto_de_frutas) {
	document.write("Fruta1: " + fruta1 + "<br>");
	document.write("Fruta2: " + fruta2 + "<br>");
	document.write("Resto de frutas: " + resto_de_frutas + "<br>");
}
var vegetales = ["Jitomate","Zanahoria","papa"];
listadoFrutas("Pera","Manzana","Uvas","Melones","Sandias",...vegetales);


						Ejercicio 27.2

var pelicula = function(nombre) {
	document.write("La película se llama: " + nombre);
}

pelicula("Pokemon");


						Ejercicio 27.3 Hacer un puto callback

function operaciones(num1,num2,resta,multiplicar) {
	suma = num1 + num2;
	resta(num1 - num2);
	multiplicar(num1*num2);

}

operaciones(4,5,function(dato) {
	document.write("El resultado de la resta es: "+ dato + "<br>");
},function(dato) {
	document.write("El resultado de la multiplicacion es: "+ dato + "<br>");
});


						Ejemplo 28

const promesa = new Promise( (resolve, reject) =>{
	//Acción que se ejecutara
	setTimeout( ()=>{
		const exito = true;
		if (exito) {
			resolve();
		}else{
			reject();
		}
	},4000);
});

promesa.then( ()=>{
	alert('Exito');
});

promesa.catch( ()=>{
	alert("Salio de la verch");
});



					Ejercicio 29

const promesa = new Promise( (resolve, reject) =>{
	//Acción que se ejecutara
	setTimeout( ()=>{
		const exito = true;
		if (exito) {
			resolve("Salio a toda madre");
		}else{
			reject("Valio gaver");
		}
	},4000);
});

promesa.then( (mensaje)=>{
	alert(mensaje);
});

promesa.catch( (mensaje)=>{
	alert(mensaje);







			METODOS DE JAVASCRIPT

document.write(amigos.length); Te cuenta cuantos elementos hay

variable = amigos.join(' ** ');
document.write(variable); Te agregar elementos a tu arreglo

amigos.pop(); Te elimina el último elemento de tu arreglo
amigos.push("fulano") Te agrega un elemento al final de tu arreglo
amigos.shift(); Te elimina el primer elemento de tu arreglo
amigos.unshift("fulano") agregar un elemento al inicio de tu arreglo
amigos.sort() te ordena tus elementos de manera alfabetica
amigos.reverse() te ordena tus elementos de la Z a la A

var todosMisAmigos = amigos.concat(amigos2); concatena arreglos
console.log(todosMisAmigos);

parseFloat(); convierte los string a float
typeof(); te dice el tipo de dato que tiene la variable

Number(); transforma el dato en un número
parseInt();Lo transformas a un número entero
parseFloat(); Lo transforma a un número decimal
String(); Vuelve el número en texto
substring(7,15) te permite cortar una cadena de texto
substr(7,7) corta una cadena de texto, el primer caracter es desde donde 
chartAt(44); te trae la letra del string en la posicion número 44
texto.startsWith("Hola"); te busca la palabra al inicio de la cadena de texto
texto.endsWith("Fulano"); te busca la palabra al final de la cadena de texto
texto.includes("Javascript") te busca la palabra y te dice si existe(Le gusta mucho esta función a victor robles)
texto.replace("Javascript","PHP"); te cambia un texto por el otro
texto.slice(14,22); corta tu cadena de texto a partir de la posición que le digas
comenzara a corta y el segundo cuantas letras cortará
texto.split(); meterá todo el texto en un array, y si dentro de los parentesis pones un espacio, te pondrá cada palabra dentro
de un espacio de un array// SIRVE PARA HACER BUSCADORES
texto.trim(); te limpia los espacios que haya al inicio y al final de tu texto

nombre.replace('Ricardo','Elricho');reemplaza una texto por otro
nombre.toUpperCase(); te transforma el texto a mayúsculas
nombre.toLowerCase(); te pone el texto en minúsculas
nombre.indexOf('o'); nos da la ubicación de la letra, incluso puedes poner palabras también
search(); Sirve para lo mismo que indexOf
match(/curso/g); Sirve para que te diga cuantas veces aparece una palabra
nombre.lastIndexOf('o'); nos da la ubicación de la letra pero comenzando a contar
desde el final incluso puedes poner palabras también

setInterval(alert('hello',2000)); ejecuta de manera infinita

prompt();// sale una alerta en la que puedes ingresar datos, es como un alert

confirm();//Igual que el prompt y el alert, pero te devuelve lo que clickeo el usuario, verdadero o falso 

forEach();//DE MANERA ELEGANTE
var lenguajes = ["Js","phyton","Php","Ruby"];

lenguajes.forEach((elemento,indice)=>{
	document.write("<ul>");
	document.write("<li>"+ indice + " - "+ elemento + "</li>");
	document.write("</ul>");
});
------------------------
join(); //Convierte un array en string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
---------------------------------
findIndex(); Nos permite sacar la posicion en la que se encuentra//Se utiliza como CALLBACK
var peliculas = ["Gran Torino","Forest Gump","Cruzada","Pokemon","Rambo"];
for (pelicula in peliculas) {

}
var busqueda = peliculas.findIndex(pelicula => pelicula == "Pokemon");
document.write(busqueda);
-----------------------------------
some(); Se busca que cumpla una condicion concreta

var numeros = [20,30,40,50,60];
for (numero in numeros) {

}
var busqueda = numeros.some(numero => numero >= 40);
document.write(busqueda);





								ARRAYS
(Otra forma de hacer un array)
var lenguajes = new Array('Javascript','php','SQL');



				SCOPE
Varaibles locales: solo pueden usarse dentro de su función, si a la variables
no le pones var o let, aunque estén dentro de una función, se vuelven globales


Variables globales: pueden usarse en todo el archivo, incluso modificarse dentro
de un función.

NOTA:No se pueden usar variables de una función de afuera hacia adentro de otra función

				Función anidadad
Una función dentro de otra

			Explicación de scope let, var const
Si hay una función y dentro un IF, el scope del let llega solo dentro del IF, pero el VAR llega a toda la función

						EVENTOS
Son acciones que se van a ejecutar cuando el usuario presione un boton
Lista de eventos mas usados:
-click
-focus
-blur
-change
-onload
-mouseover
-mouseout
-resize
-submit

					CALLBACKS
Callback:Es una función que se le pasa una función anónima
Ejemplo:
function operaciones(num1,num2,resta,multiplicar) {
	suma = num1 + num2;
	resta(num1 - num2);
	multiplicar(num1*num2);

}

operaciones(4,5,function(dato) {
	document.write("El resultado de la resta es: "+ dato + "<br>");
},function(dato) {
	document.write("El resultado de la multiplicacion es: "+ dato + "<br>");
});

					
					VALORES DE LOS DATOS

 1 == true
 0 == false
 ""== false
 "cualquier cadena que no este vacía" == true
 undefined == false
 NaN == false
 null == false 
*/