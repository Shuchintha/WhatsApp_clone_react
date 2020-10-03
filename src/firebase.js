import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6-mQPZABpFlN8neIAVQNragHXYqv_pvA",
    authDomain: "reactchatapp-tpn.firebaseapp.com",
    databaseURL: "https://reactchatapp-tpn.firebaseio.com",
    projectId: "reactchatapp-tpn",
    storageBucket: "reactchatapp-tpn.appspot.com",
    messagingSenderId: "96134245690",
    appId: "1:96134245690:web:daaff7e1bea9206344f403",
    measurementId: "G-JG4KBYEEFX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db