  // Initialize Firebase
  alert("hola")
      var config = {
        apiKey: "AIzaSyD0miVM-LBHNt3FzaX-Apmsx4NkOvJowOY",
        authDomain: "software-eventos.firebaseapp.com",
        databaseURL: "https://software-eventos.firebaseio.com",
        projectId: "software-eventos",
        storageBucket: "software-eventos.appspot.com",
        messagingSenderId: "580152220271"
    };
    firebase.initializeApp(config);

      // Obtener Elementos
      var uploader = document.getElementById('uploader');
      var fileButton = document.getElementById('fileButton');

      // Vigilar selección archivo
      fileButton.addEventListener('change', function(e) {
        //Obtener archivo
        var file = e.target.files[0];

        // Crear un storage ref
        var storageRef = firebase.storage().ref('mis_fotos/' + file.name);


        // Subir archivo
        var task = storageRef.put(file);

        // Actualizar barra progreso
        task.on('state_changed',

          function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
          },

          function error(err) {

          },


          function complete() {


          }





          )





      });








    