// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD8DJj6AcWsDx8CsJ965rpVHoAPGB72npM",
    authDomain: "uas-iot-48a16.firebaseapp.com",
    databaseURL: "https://uas-iot-48a16.firebaseio.com",
    projectId: "uas-iot-48a16",
    storageBucket: "uas-iot-48a16.appspot.com",
    messagingSenderId: "546033625607",
    appId: "1:546033625607:web:997f1f9e608d3e8d9b98a2",
    measurementId: "G-GJ50GQ2Z7W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



var preTinggi = document.getElementById("tinggi");
var preSuhu = document.getElementById("suhu");
var preKelembapan = document.getElementById("kelembapan");
var preStatus = document.getElementById("lampu");

var pre1 = firebase.database().ref().child("Kelembapan");
pre1.on('value', function (datasnapshot) {
    preKelembapan.innerHTML = datasnapshot.val() + '%';
})

var pre2 = firebase.database().ref().child("Suhu");
pre2.on('value', function (datasnapshot) {
    preSuhu.innerHTML = datasnapshot.val() + ' &#8451;';
})
var pre3 = firebase.database().ref().child("distance");
pre3.on('value', function (datasnapshot) {
    preTinggi.innerHTML = datasnapshot.val() + ' CM';
})
var pre4 = firebase.database().ref().child("relay");
pre4.on('value', function (datasnapshot) {
   let relay = datasnapshot.val();
   if (relay===1)  {
    preStatus.innerHTML = 'Lampu menyala';
   }
   else{
    preStatus.innerHTML = 'Lampu mati';
   }
})


