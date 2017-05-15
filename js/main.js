
function agregaPosteo() {
//escribe aca el codigo

	//obtengo valores de las entradas
	var containerPosteos = document.getElementById("contenedor-posteos");
	var nombreFF = document.getElementById("nombre").value;
	var contenidoFF = document.getElementById("cajaposteos").value;

	//creo el espacio y elementos donde irá el comentario
	var nuevoPost = document.createElement("div");
	var contenedorNombre = document.createElement("strong");
	var contenedorPost = document.createElement("p");
	var separacion = document.createElement("hr");
	var parrafoCorazon = document.createElement("p");
	var i = document.createElement("i");
	parrafoCorazon.appendChild(i);
 	parrafoCorazon.setAttribute("class", "corazon");
 	i.setAttribute("class", "fa fa-heart");
 	i.setAttribute("arial-hidden", "true");

 	//creo el "texto que irá en mi espacio para nombre y comentario"
	var nodoNombre = document.createTextNode(nombreFF, "Escribió");
	var nodoposteo = document.createTextNode(contenidoFF);

	//le asigno a mis espacios sus textos
	contenedorNombre.appendChild(nodoNombre);
	contenedorPost.appendChild(nodoposteo);
	nuevoPost.appendChild(contenedorNombre);
	nuevoPost.appendChild(contenedorPost);
	nuevoPost.appendChild(parrafoCorazon);
	nuevoPost.appendChild(separacion);

	//creo un listener para poner en rojo el corazón
	i.addEventListener("click", function(){
	i.classList.toggle("rojo");
	})

	nuevoPost.setAttribute("class", "posteo");
	containerPosteos.appendChild(nuevoPost);
	document.getElementById("nombre").value = "";
	document.getElementById("cajaposteos").value = "";
}





