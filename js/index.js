


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
var  storageRef = firebase.storage().ref();
var fichero;

window.addEventListener("load",inicializar) ;
function inicializar() {
	subirImagenFirabase();
	
}


function subirImagenFirabase(){
	 fichero = document.getElementById("upload-file-selector");
	 fichero.addEventListener("change",function(e){
	 	var imagenASubir= e.target.files[0];// tener en cuenta
	 	var uploadTask = storageRef.child("Imagenes/"+imagenASubir.name).put(imagenASubir);
	  

	     //obtener barra progreso
	      var uploader = document.getElementById('uploader');
	  
        // Actualizar barra progreso
        uploadtask.on('state_changed',

          function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
          },

          function error(err) {

          },


          function complete() {


          }


	 });
}