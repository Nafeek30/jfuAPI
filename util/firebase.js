const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDUmfUb1UuwLicUH3SeqIGMC8S0xlQAeHg",
    authDomain: "jfu-movecare.firebaseapp.com",
    projectId: "jfu-movecare",
    storageBucket: "jfu-movecare.appspot.com",
    messagingSenderId: "385823386583",
    appId: "1:385823386583:web:d9573c94d92b4efee1b992",
    measurementId: "G-8NXKSWQQLC"
  };

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app