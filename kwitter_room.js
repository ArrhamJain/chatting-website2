
var firebaseConfig = 
{ apiKey: "AIzaSyDMSaF3jN2UpDoHGO7lagZ6Wgf_JahGa38",
 authDomain: "practice-4edaa.firebaseapp.com", 
 databaseURL: "https://practice-4edaa-default-rtdb.firebaseio.com",
  projectId: "practice-4edaa",
   storageBucket: "practice-4edaa.appspot.com",
    messagingSenderId: "29669093528",
     appId: "1:29669093528:web:c4a64cebd8ad2ddef060ed",
      measurementId: "G-1TRNTDCLFE" }; 
      
      // Initialize Firebase 
      firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room name-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

            });
      });
}
getData();

function redirecttoRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}
