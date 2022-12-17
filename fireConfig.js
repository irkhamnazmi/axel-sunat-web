 // Import the functions you need from the SDKs you need
 import {
     initializeApp
 } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 import {
     getDatabase,
     set,
     ref,
     push,
     child,
     onValue

 } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyDAcgUkHv0JRZGvOOXJgvT4Sow5zheeiiY",
     authDomain: "axel-khitan.firebaseapp.com",
     databaseURL: "https://axel-khitan-default-rtdb.firebaseio.com",
     projectId: "axel-khitan",
     storageBucket: "axel-khitan.appspot.com",
     messagingSenderId: "1069651605852",
     appId: "1:1069651605852:web:15718fa4c66acfd5a06999"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);

 const list = document.getElementById('list')


 document.getElementById("submit").addEventListener("click", function() {
     let name = document.getElementById('name')
     let message = document.getElementById('message')
     let date = new Date()

     if (name.value == "") {
         name.focus
         name.setAttribute("style", "border:2px solid red;");
         setTimeout(() => {
             name.setAttribute("style", "border:0;");
         }, 500);
     } else if (message.value == "") {
         message.focus
         message.setAttribute("style", "border:2px solid red;");
         setTimeout(() => {
             message.setAttribute("style", "border:0;");
         }, 500);
     } else {
         //  const userId = push(child(ref(database), 'users')).key;

         //  console.log(date);

         //  set(ref(database, 'users/' + userId), {
         //      name: name,
         //      message: message,
         //      date: `${date}`
         //  });
         //  const listGroup = document.getElementById('list-group')

         //  listGroup.remove()
         //  setTimeout(() => {
         //      listControl()
         //  }, 300);
     }




 });



 document.addEventListener("DOMContentLoaded", function() {
     moment.locale('id');

     listControl()
 });


 var listControl = function() {
     const dbRef = ref(database, 'users');
     let l = 0
     list.innerHTML = `<div class="list-group" id="list-group"></div>`
     const listGroup = document.getElementById('list-group')

     onValue(dbRef, (snapshot) => {
         snapshot.forEach((childSnapshot) => {
             const childKey = childSnapshot.key;
             const childData = childSnapshot.val();
             var row = `<div class="list-control">
             <div class="col">
             <object width="25px" type="image/svg+xml" data="/image/user-circle.svg" ></object>
             <h3>${childData.name}</h3>
             <span>. ${
                 moment(childData.date).fromNow()} </span>
             </div>
             <div class="row">
             <p>${childData.message}</p>
             </div>
             </div>`

             if (childSnapshot != "") {


                 listGroup.innerHTML += row
                 l++



             }



         });

         document.getElementById('participant').innerHTML = `${l} Ucapan`
     }, {

         onlyOnce: true
     });


 }