// import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyARyxFMPivYOhfEyIuNMo599O87ZgcZ1Ws',
   authDomain: 'chat-app-7dd6b.firebaseapp.com',
   projectId: 'chat-app-7dd6b',
   storageBucket: 'chat-app-7dd6b.appspot.com',
   messagingSenderId: '867738945969',
   appId: '1:867738945969:web:d3890b354f8cc9ea675590',
   measurementId: 'G-HJL5N6PXXP',
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();
const db = firebase.firestore();

export { app, analytics, auth, db };

export default firebase;
