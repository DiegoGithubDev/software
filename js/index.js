

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

var  imagenesFbref= firebase.database().ref().child("imagenes");
var  storageRef = firebase.storage().ref;
var fichero

function inicializar() {
	subirImagenFirabase();
	
}


function subirImagenFirabase(){
	 fichero = document.getElementById("upload-file-selector");
	 fichero.addEventListener("change",function(e){
	 	var imagenASubir= fichero.files[0];
	 	storageRef.child("imagenes/"+imagenASubir.name).put(imagenASubir)
	 });
}