import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgMJdoS25PEF2fv92Nbo6CKsZ-uqb_5gY",
  authDomain: "myevents-finalproject.firebaseapp.com",
  projectId: "myevents-finalproject",
  storageBucket: "myevents-finalproject.appspot.com",
  messagingSenderId: "1008576257165",
  appId: "1:1008576257165:web:f8412d1af3f3e9d89516c4",
  measurementId: "G-K4ZEXLZDSZ",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
