import firebase from 'firebase'
import 'firebase/firestore'

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
firebase.analytics();

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
const batters = db.collection('batters')
/* const playerCardsCollection = db.collection('cards')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes') */

// json imports
import batterProjections from '../public/steamerprojections_2020.json'

/* batterProjections.forEach(function (obj) {
    db.collection("batters").add({
        Name: obj.Name,
        Team: obj.Team,
        G: obj.G,
        PA: obj.PA,
        AB: obj.AB,
        H: obj.H,
        HR: obj.HR,
        R: obj.H,
        RBI: obj.RBI,
        BB: obj.BB,
        SO: obj.SO,
        HBP: obj.HBP,
        SB: obj.SB,
        CS: obj.CS,
        AVG: obj.AVG,
        OBP: obj.OBP,
        SLG: obj.SLG,
        OPS: obj.OPS,
        // woBA: obj.woBA,
        //wRC+: obj.wRC+,
        BsR: obj.BsR,
        Fld: obj.Fld,
        Off: obj.Off,
        Def: obj.Def,
        WAR: obj.WAR,
        playerid: obj.playerid
    }).then(function (docRef) {
        console.log("Document written with playerid", docRef.playerid)
    }).catch(function (error) {
        console.log("Error adding document", error);
    });
}); */

export {
    db,
    auth,
    currentUser,
    usersCollection,
    batters
}