//BOM - Browser Object Model

function getBoom() {
	console.log(window.innerWidth);
	console.log(window.innerHeight);//la altura de la pantalla del navegador si lo haces mas chico o grande
	console.log(screen.height);//el alto total de tu pantalla
	console.log(window.location);// te da el url del sitio
	console.log(window.location.href);//Lo mismo pero solo te da el dato de la url
	
	}
getBoom();

function verOtraPagina(url) {
	//window.location.href = url;
	//window.open(url); te abre una pestaña nueva en el navegador
	window.open(url,"","width=400,height=300");//te abre una ventanita
}
//verOtraPagina(); poner dirección en la consola del navegador