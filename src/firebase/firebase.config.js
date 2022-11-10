// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX3nnrAp8cJAAE1rCssGWnZ2E5RRyO96U",
  authDomain: "start-cloud-kitchen.firebaseapp.com",
  projectId: "start-cloud-kitchen",
  storageBucket: "start-cloud-kitchen.appspot.com",
  messagingSenderId: "493514632664",
  appId: "1:493514632664:web:eb9ec44d092a26eece96ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;