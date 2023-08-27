
//Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import 'firebase/firestore'
// import { getFirestore } from 'firebase/firestore/lite' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAN1x6owc4s8vjq3A17LmWfn_HUxNCf6dI",
  authDomain: "udemy-vue-firbase.firebaseapp.com",
  projectId: "udemy-vue-firbase",
  storageBucket: "udemy-vue-firbase.appspot.com",
  messagingSenderId: "351237742715",
  appId: "1:351237742715:web:22fa3baff1eca27c5a82de"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

//init firestore service
// const projectFirestore = getFirestore(app)
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }


// import firebase from 'firebase/app'

// import 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyAN1x6owc4s8vjq3A17LmWfn_HUxNCf6dI",
//     authDomain: "udemy-vue-firbase.firebaseapp.com",
//     projectId: "udemy-vue-firbase",
//     storageBucket: "udemy-vue-firbase.appspot.com",
//     messagingSenderId: "351237742715",
//     appId: "1:351237742715:web:22fa3baff1eca27c5a82de"
//   };

//   //init firebase
//   firebase.initializeApp(firebaseConfig)


//   // init firebase service
// const projectFirestore = firebase.firestore()

// export {projectFirestore}