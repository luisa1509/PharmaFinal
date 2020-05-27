var firebaseConfig = {
    apiKey: "AIzaSyC0ZPzuFU1XKqtmHBmhGwBF9lQl_Hl1lFg",
    authDomain: "pharma-7e8e7.firebaseapp.com",
    databaseURL: "https://pharma-7e8e7.firebaseio.com",
    projectId: "pharma-7e8e7",
    storageBucket: "pharma-7e8e7.appspot.com",
    messagingSenderId: "355822346883",
    appId: "1:355822346883:web:a084b8b44a6d9331ac71b6",
    measurementId: "G-363JVV4P5V"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const nameIT= document.getElementById("name");
  const passwordIT =  document.getElementById("password");
  const sendBtn = document.getElementById("sendBtn");
  const database = firebase.database();
  const storage = window.localStorage;





sendBtn.addEventListener("click", function(event){
event.preventDefault();


    database.ref().child("Usuarios").on("child_added", function(snapshot){

        var estObj = snapshot.val();
        let name=nameIT.value;
        let password=passwordIT.value;

        if (estObj.name==name&& estObj.password==password){
            console.log("ingresas xd")
            storage.setItem("id", estObj.id);
            window.location.href = "../farmacologicos.html"
        }
        else(alert("usuario o contraseña incorrecta"));
      
      });




})

