
//var  imagenesFbref= firebase.database().ref().child("imagenes");


window.addEventListener("load",inicializar) ;
function inicializar() {
	subirImagenFirabase();
	alert("hola");
}


function subirImagenFirabase(){
	 fichero = document.getElementById("upload-file-selector");
	 fichero.addEventListener("change",function(e){
	 	var imagenASubir= e.target.files[0];// tener en cuenta
	 	alert(imagenASubir);
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