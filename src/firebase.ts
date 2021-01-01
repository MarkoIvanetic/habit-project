import firebase from "firebase/app";
import "firebase/firestore";
const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

firebase.initializeApp(config);

var db = firebase.firestore();

db.collection("users")
  .add({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  })
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.error("Error adding document: ", error);
  });

console.log("Starting");

db.collection("users")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });

export default firebase;
