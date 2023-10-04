// import firebase from "firebase/compat";
// import {getFirestore} from "firebase/firestore";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBGe3aQimScgMFUc91idMEyYt5t5kMU1Yc",
  authDomain: "artproject-66d05.firebaseapp.com",
  projectId: "artproject-66d05",
  storageBucket: "artproject-66d05.appspot.com",
  messagingSenderId: "598824987390",
  appId: "1:598824987390:web:712116067e20b1dbbb93af"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebaseApp.firestore();
export default firebaseApp;
