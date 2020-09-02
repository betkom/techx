import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBFrGwKVDszYAxj2uzfx21SlWnJiVcxDQk",
  authDomain: "techx-a362c.firebaseapp.com",
  databaseURL: "https://techx-a362c.firebaseio.com",
  projectId: "techx-a362c",
  storageBucket: "techx-a362c.appspot.com",
  messagingSenderId: "588991305193",
  appId: "1:588991305193:web:f6d6214b3f65bc4ad6a778",
  measurementId: "G-0FVF44XBM6"
}
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;