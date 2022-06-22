// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'task-app-hakan.firebaseapp.com',
  projectId: 'task-app-hakan',
  storageBucket: 'task-app-hakan.appspot.com',
  messagingSenderId: '832557801105',
  appId: '1:832557801105:web:f2c9685b5fdf2b7a5c6930',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
