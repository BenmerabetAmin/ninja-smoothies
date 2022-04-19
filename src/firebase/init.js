import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAxqSxVsi7uSnqbz7H5v_mnKiWPn9nP9sA",
    authDomain: "ninja-smoothies-95184.firebaseapp.com",
    projectId: "ninja-smoothies-95184",
    storageBucket: "ninja-smoothies-95184.appspot.com",
    messagingSenderId: "721684784005",
    appId: "1:721684784005:web:2a68ec04b7dd0f99041aec"
  };

  const firebaseApp = firebase.initializeApp(config)
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore()