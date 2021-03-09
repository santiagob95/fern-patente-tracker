  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDlbNN53sxhEMh25ZlnTxwM1I1QMj0Vfpc",
    authDomain: "ervmecanica-ce335.firebaseapp.com",
    projectId: "ervmecanica-ce335",
    storageBucket: "ervmecanica-ce335.appspot.com",
    messagingSenderId: "481721392955",
    appId: "1:481721392955:web:d036b6f39fce635d31211e",
    measurementId: "G-7LZB4560YL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore, timestamp}
