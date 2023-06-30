var firebaseConfig = {
    apiKey: "AIzaSyCERdVrF3QaqLPN_h8xzrAEr7V3-gdcBvQ",
    authDomain: "let-chat-web-app-3875f.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-3875f-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-3875f",
    storageBucket: "let-chat-web-app-3875f.appspot.com",
    messagingSenderId: "424095145183",
    appId: "1:424095145183:web:0a283dc973f738af749d6a"
  };

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("welcome").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

//End code
});});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
  
    window.location = "kwitter_page.html";
  }