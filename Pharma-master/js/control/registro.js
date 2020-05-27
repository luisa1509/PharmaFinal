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

  const database = firebase.database();

  const nameIT = document.getElementById("name");
  const directionIT = document.getElementById("direction");
  const passwordIT = document.getElementById("password");
  const CpasswordIT = document.getElementById("Cpassword");
  const registerBtn = document.getElementById("registerBtn");
  


  //registrar estudiante xd
  registerBtn.addEventListener("click",function(event){
    event.preventDefault();

    let id = database.ref().child("Usuarios").push().key;
    let name= nameIT.value;
    let direction = directionIT.value;
    let password= passwordIT.value;
    let Cpassword = CpasswordIT.value;

    if(password==Cpassword && name!="" && direction!="" && password!=""){
        let user = new Usuario(id,name, password, direction);
        console.log(user);

    //registrar en db
    database.ref().child("Usuarios").child(id).set(user);

    }
    else(alert("constraseña debe ser igual xd"));

    




  })
