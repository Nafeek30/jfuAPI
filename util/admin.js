var admin = require("firebase-admin");

var serviceAccount = require("../jfu-movecare-firebase-adminsdk-nc3s9-1bfbd0b4b5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };