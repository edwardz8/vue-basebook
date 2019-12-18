const firebase = require('firebase');
require('firebase/firestore');

var firebaseConfig = {
    apiKey: 'AIzaSyDSCze4KVkWRDkU1Ync0tVj31CfPit2FzY',
    authDomain: 'basebook-92100.firebaseapp.com',
    databaseURL: 'https://basebook-92100.firebaseio.com',
    projectId: 'basebook-92100',
    storageBucket: 'basebook-92100.appspot.com',
    messagingSenderId: '46273488588',
    appId: '1:46273488588:web:d7ca0fba24117e4a1c4469',
    measurementId: 'G-GQE6B4MS20'
};

// Initialize Firestore instance
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
// const batters = db.collection('batters')
// const pitchers = db.collection('pitchers')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    /* batters,
    pitchers, */
}