import React from "react";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// ******************************************************************

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}

// ******************************************************************

// var db = firebase.firestore();

// db.collection("users")
//   .add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   })
//   .then(function (docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function (error) {
//     console.error("Error adding document: ", error);
//   });

// console.log("Starting");

// db.collection("users")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   });

interface IFirebaseContext {
  firebase: firebase.app.App;
  authProviders: string[];
}

const FirebaseContext = React.createContext({} as IFirebaseContext);

const FirebaseProvider = ({ children }: any) => {
  const authProviders: string[] = [];
  return (
    <div>
      <FirebaseContext.Provider
        value={{ firebase: firebase.app(), authProviders } as IFirebaseContext}
      >
        {children}
      </FirebaseContext.Provider>
    </div>
  );
};

export { FirebaseContext, FirebaseProvider };
