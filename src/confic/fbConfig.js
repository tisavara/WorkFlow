import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAjDQ6qa-X9fyU5DxTwHH7wE1PhqEgZRAg",
    authDomain: "workflow-c6710.firebaseapp.com",
    databaseURL: "https://workflow-c6710.firebaseio.com",
    projectId: "workflow-c6710",
    storageBucket: "",
    messagingSenderId: "771784960531",
    appId: "1:771784960531:web:6ee4e54be842cc0dcf6de6",
    measurementId: "G-LZ8SNGG44N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  //firebase.firestore().settings({ tinestampInSnapshots: true})

  export default firebase