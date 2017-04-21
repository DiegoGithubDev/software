

window.addEventListener("load",inicializar) ;
var config = {
        apiKey: "AIzaSyD0miVM-LBHNt3FzaX-Apmsx4NkOvJowOY",
        authDomain: "software-eventos.firebaseapp.com",
        databaseURL: "https://software-eventos.firebaseio.com",
        projectId: "software-eventos",
        storageBucket: "software-eventos.appspot.com",
        messagingSenderId: "580152220271"
    };
    firebase.initializeApp(config);

var  TablaDeBaseDatos= firebase.database().ref('Imagenes');
var  imagenesStorageRef = firebase.storage().child("imagenes");
var fichero

function inicializar() {
	subirImagenFirabase();
	
}


function subirImagenFirabase(){
	 fichero = document.getElementById("upload-file-selector");
	 fichero.addEventListener("change",function(e){
	 	var imagenASubir= fichero.files[0];
	 	imagenesStorageRef.child("imagenes/"+imagenASubir.name).put(imagenASubir)
	 });
}