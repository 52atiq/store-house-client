// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,

//   apiKey: "AIzaSyATrAwmCprTWGu9yHeWTQ7TEHhwLQlooaA",
// authDomain: "electronics-87081.firebaseapp.com",
// projectId: "electronics-87081",
// storageBucket: "electronics-87081.appspot.com",
// messagingSenderId: "46557956348",
// appId: "1:46557956348:web:0cc12912f079ae3ef6af79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export default app;

// apiKey: "AIzaSyATrAwmCprTWGu9yHeWTQ7TEHhwLQlooaA",
// authDomain: "electronics-87081.firebaseapp.com",
// projectId: "electronics-87081",
// storageBucket: "electronics-87081.appspot.com",
// messagingSenderId: "46557956348",
// appId: "1:46557956348:web:0cc12912f079ae3ef6af79"