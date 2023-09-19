// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU0kLLmnmEo1Fyabeb9cGY7JxcxWvtloY",
    authDomain: "firstdatabase-25b2c.firebaseapp.com",
    projectId: "firstdatabase-25b2c",
    storageBucket: "firstdatabase-25b2c.appspot.com",
    messagingSenderId: "1062694783587",
    appId: "1:1062694783587:web:9dc9c925a29a9838b58656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const querySnapshot = await getDocs(collection(db, "AddUser"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  
  
  let data = doc.data();
  
  
  console.log(data.email);


  let tableData = document.getElementById('tableData');
  // let username = document.getElementById('username');
  

  tableData.innerHTML += `
  <tr>
      <th scope="row">${data.userName}</th>
      <td>${data.email}</td>
      <td>${data.password}</td>
      <td>${data.city}</td>
  </tr>
  `







});