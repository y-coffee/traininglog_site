import firebase from 'firebase/app';
import 'firebase/firestore';

require('dotenv').config();

const env1 = process.env.FIRESTORE_API_KEY;
const env2 = process.env.FIRESTORE_MESSAGEING_SENDER_ID;
const env3 = process.env.FIRESTORE_APP_ID;

const firebaseConfig = {
  apiKey: `${env1}`,
  authDomain: 'contacttraininglog.firebaseapp.com',
  projectId: 'contacttraininglog',
  storageBucket: 'contacttraininglog.appspot.com',
  messagingSenderId: `${env2}`,
  appId: `${env3}`,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
