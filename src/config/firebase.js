// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDs855gn8Xf6iii39jCcdBb3D1SRy_TiUY",
    authDomain: "shoping-app-b54ea.firebaseapp.com",
    projectId: "shoping-app-b54ea",
    storageBucket: "shoping-app-b54ea.appspot.com",
    messagingSenderId: "22244812660",
    appId: "1:22244812660:web:c8b4be195a27e7bef46e21",
    measurementId: "G-D0YSDGB7ED"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signUp = async (name, email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateCurrentUser(auth, { displayName: name });
    } catch (error) {
        console.log(error);
    }
};

const signIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
    }
}
