import firebase from "firebase";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD_NyPJeFOabKPy4AJQWIzKChjI1_HxA88",
  authDomain: "hwitter-4c1de.firebaseapp.com",
  projectId: "hwitter-4c1de",
  storageBucket: "hwitter-4c1de.appspot.com",
  messagingSenderId: "656658297581",
  appId: "1:656658297581:web:41e87929939ae6b92a12e4",
};
// export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();

// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
// appId: process.env.REACT_APP_APP_ID,
