// Imports
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');

// JSON To Firestore
const jsonToFirestore = async () => {
    try {
        console.log('Initializing Firebase');
        await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
        console.log('Firebase Initialized');

        await firestoreService.restore('./pitchers_20.json');
        console.log('Upload Success');
    } catch (error) {
        console.log(error);
    }
};

jsonToFirestore();