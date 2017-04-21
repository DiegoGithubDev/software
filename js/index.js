window.onload = inicializar();
var TablaDeBaseDatos;


function inicializar() {
	referenciarFirebase();
	subirImagenFirabase();
}

function referenciarFirebase(){
	// Initialize Firebase
    var config = {
        apiKey: "AIzaSyD0miVM-LBHNt3FzaX-Apmsx4NkOvJowOY",
        authDomain: "software-eventos.firebaseapp.com",
        databaseURL: "https://software-eventos.firebaseio.com",
        projectId: "software-eventos",
        storageBucket: "software-eventos.appspot.com",
        messagingSenderId: "580152220271"
    };
    firebase.initializeApp(config);


   TablaDeBaseDatos= firebase.database().ref('Imagenes');

}