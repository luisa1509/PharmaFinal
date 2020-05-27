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
  

  const confirmarvan = document.getElementById("confirmarvan");
  const direccion = document.getElementById("direccion");
  const nombre = document.getElementById("nombre");
  const productoIT = document.getElementById("titulo");
  const precioIT = document.getElementById("precio")
  const storage = window.localStorage;
  
  var hoy =new Date();

  //Recuperación de datos
const idEst = storage.getItem("id");


console.log(idEst)

//Leer un objeto
database.ref().child("Usuarios").child(idEst).on("value", function(snapshot){
  
    var estObj = snapshot.val();
    

    direccion.innerHTML = "Dirección: " +estObj.direction;
    nombre.innerHTML ="Nombre: "+ estObj.name;
  
});
  

  confirmarvan.addEventListener("click",function(eventvan){
    eventvan.preventDefault();

    var id = database.ref().child("Usuarios").child(idEst).child("compras").push().key;
  //CUal rama va a contener las materias
  
  var nombre = productoIT.innerHTML;
  var precio = precioIT.innerHTML;

  //fecha

  var fecha = hoy.getDate() +"-" +(hoy.getMonth()+1)+"-"+ hoy.getUTCFullYear();
  var hora = hoy.getHours()+":"+hoy.getMinutes();
  var fechaYHora  = fecha +" "+ hora; 

  var compra = new Compra(id, nombre, precio, fechaYHora);

 database.ref().child("Usuarios").child(idEst).child("compras")
      .child(id).set(compra);


  console.log(compra)

   // window.location.href="farmacologicos.html";
});

