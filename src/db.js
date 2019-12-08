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

const batterProjections = require('../public/batters_2020.json');
const pitcherProjections = require('../public/pitchers_2020.json');

/* batterProjections.forEach(function (obj) {
    db.collection("batters").add({
            playerid: obj.playerid,
            name: obj.Name,
            team: obj.Team,
            G: obj.G,
            PA: obj.PA,
            AB: obj.AB,
            H: obj.H,
            HR: obj.HR,
            R: obj.R,
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
            wOBA: obj.wOBA,
            BsR: obj.BsR,
            Fld: obj.Fld,
            Off: obj.Off,
            Def: obj.Def,
            WAR: obj.WAR
        }).then(function (docRef) {
            // console.log("Document written with ID: ", docRef.playerid);
        })
        .catch(function (error) {
            //  console.error("Error adding document: ", error);
        });
});

pitcherProjections.forEach(function (obj) {
    db.collection("pitchers").add({
            playerid: obj.playerid,
            name: obj.Name,
            team: obj.Team,
            W: obj.W,
            L: obj.L,
            ERA: obj.ERA,
            GS: obj.GS,
            SV: obj.SV,
            IP: obj.IP,
            H: obj.H,
            ER: obj.ER,
            HR: obj.HR,
            SO: obj.SO,
            BB: obj.BB,
            WHIP: obj.WHIP,
            FIP: obj.FIP,
            WAR: obj.WAR
        }).then(function (docRef) {
            // console.log("Document written with ID: ", docRef.playerid);
        })
        .catch(function (error) {
            // console.error("Error adding document: ", error);
        });
}); */

export {
    db,
    auth,
    currentUser,
    usersCollection,
    /* batters,
    pitchers, */
}