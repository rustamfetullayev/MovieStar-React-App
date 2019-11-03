import * as firebase from 'firebase/app';
import 'firebase/auth';

const base = firebase.initializeApp({
    apiKey: "AIzaSyB1e4W0AxpaBIEnNb8_RBPC9iiFZSYD9jM",
    authDomain: "moviestar-ab0f8.firebaseapp.com",
    databaseURL: "https://moviestar-ab0f8.firebaseio.com",
    projectId: "moviestar-ab0f8",
    storageBucket: "moviestar-ab0f8.appspot.com",
    messagingSenderId: "635661382153",
    appId: "1:635661382153:web:77d5f9297dd08b22c6bed8",
    measurementId: "G-YPZY2TTMKQ"
})

export default base;