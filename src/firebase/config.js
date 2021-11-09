import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhKv0ikwiUCx-hiMZOKCLzeW_aGNzJ2As",
    authDomain: "recipies-7fc7f.firebaseapp.com",
    projectId: "recipies-7fc7f",
    storageBucket: "recipies-7fc7f.appspot.com",
    messagingSenderId: "643434173615",
    appId: "1:643434173615:web:6a0ceb936763022a3c705a"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };