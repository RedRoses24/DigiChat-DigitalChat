//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBf-MpJ0kv3dmlTudBsYOD8TQ80iTbRoB0",
      authDomain: "kwitter-5b849.firebaseapp.com",
      databaseURL: "https://kwitter-5b849-default-rtdb.firebaseio.com",
      projectId: "kwitter-5b849",
      storageBucket: "kwitter-5b849.appspot.com",
      messagingSenderId: "138273395092",
      appId: "1:138273395092:web:ba0ca1f90f53b5b22e3f81"
    };
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");
    roomname=localStorage.getItem("room");

    function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(roomname).push({
      name:username,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
    }

    function logout(){
          localStorage.removeItem("username");
          localStorage.removeItem("room");
          window.location.replace("index.html");
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
