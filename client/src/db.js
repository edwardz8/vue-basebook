import firebase from "firebase/app";
import 'firebase/firestore'
import {
    initializeApp
} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyB0y1__NDxBoW8WcI5iCtb8092HM3mpmKk",
    authDomain: "basebook-0.firebaseapp.com",
    databaseURL: "https://basebook-0.firebaseio.com",
    projectId: "basebook-0",
    storageBucket: "basebook-0.appspot.com",
    messagingSenderId: "504453600708",
    appId: "1:504453600708:web:25b97af64c846b42c58091",
    measurementId: "G-YS9W2JS5DW"
});

// firebase utils
const db = app.firestore()
const auth = firebase.auth()
// firebase.analytics();
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
const battersCollection = db.collection('batters')
const pitchersCollection = db.collection('pitchers')
const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    battersCollection,
    pitchersCollection,
    commentsCollection,
    // likesCollection
}