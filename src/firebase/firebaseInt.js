// import firebase from "firebase/compat";
// import {getFirestore} from "firebase/firestore";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAjkvgjfgIzlSTzNrjV1k_85ylSDP3W6F0",
  authDomain: "artshop-fdf76.firebaseapp.com",
  projectId: "artshop-fdf76",
  storageBucket: "artshop-fdf76.appspot.com",
  messagingSenderId: "371904362799",
  appId: "1:371904362799:web:4d92391221bb2d88f909da"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebaseApp.firestore();
export default firebaseApp;
