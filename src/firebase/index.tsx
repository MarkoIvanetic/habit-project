import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
// import firebase from "firebase/app";
// import firestore from "firebase/firestore";

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

export default firebase;

// ******************************************************************

// var db: firebase.firestore.Firestore = firestore();
const db = firebase.firestore();

interface IFirebaseContext {
  firebase: firebase.app.App;
  authProviders: string[];
  db: firebase.firestore.Firestore;
}

const FirebaseContext = React.createContext({} as IFirebaseContext);

const FirebaseProvider = ({ children }: any) => {
  const authProviders: string[] = [];
  return (
    <div>
      <FirebaseContext.Provider
        value={
          { firebase: firebase.app(), authProviders, db } as IFirebaseContext
        }
      >
        {children}
      </FirebaseContext.Provider>
    </div>
  );
};

export { FirebaseContext, FirebaseProvider };
