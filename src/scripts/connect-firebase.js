import firebase from "firebase/app";
//import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOgWAbXUGckpad2sk0IUo00hZsV4WxG0E",
    authDomain: "meddbriefer-68cd4.firebaseapp.com",
    projectId: "meddbriefer-68cd4",
    storageBucket: "meddbriefer-68cd4.appspot.com",
    messagingSenderId: "1087114796018",
    appId: "1:1087114796018:web:679fbab38dbf78af0ce96b",
    measurementId: "G-Q7QZKC9KHW"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// TODO: For creating new, verify there is no item with same ID

function publishScenario(scenarioObject, edit=false) {
    if(!edit)
    {
        db.collection('scenarios').doc(scenarioObject.name).set(scenarioObject)
            .then(() => {
                console.log(`Succesfully published '${scenarioObject.name}'.`);
                alert(`Succesfully published '${scenarioObject.name}'.`);
            })
            .catch((error) => {
                console.log(error);
                alert(`Unable to publish '${scenarioObject.name}'.`);
            });
    }
    else
    {
        console.log('Can\'t edit yet!');
    }
}

export default publishScenario;