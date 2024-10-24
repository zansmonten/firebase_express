const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpN4kgWn3rpuZe486tq6bkQ8YSwurqQKg",
  authDomain: "mywebbapp-10fd2.firebaseapp.com",
  projectId: "mywebbapp-10fd2",
  storageBucket: "mywebbapp-10fd2.appspot.com",
  messagingSenderId: "1055890640452",
  appId: "1:1055890640452:web:fcdc79a2e54abdd504b611",
  measurementId: "G-9ZLXNY2N8H",
};

// Inisialisasi Firebase App
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Ekspor koleksi "Users"
const UserCollection = collection(db, "Users");
module.exports = UserCollection;
