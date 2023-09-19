// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
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





async function addUser(e){
    e.preventDefault();

    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let city = document.getElementById('city').value;




    try {
        const docRef = await addDoc(collection(db, "AddUser"), {
            userName:userName,
            email:email,
            password:password,
            city:city
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }



}



    let form = document.getElementById('form');


    form.addEventListener('submit',addUser)





