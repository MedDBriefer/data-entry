const admin = require('firebase-admin');

const serviceAccount = require('../../meddbriefer-68cd4-f3021042a326.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const docRef = db.collection('foo').doc('bar');


// docRef.set({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })  

db.collection('foo').get()
    .then((snapshot) => {
        //console.log(snapshot);
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        })
    })
    .catch((error) => {
        console.log(error);
    });