// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBhTpK2ebR530clwg_AkSC0CNSI-OFVclk',
  authDomain: 'cinefiles-2816a.firebaseapp.com',
  projectId: 'cinefiles-2816a',
  storageBucket: 'cinefiles-2816a.appspot.com',
  messagingSenderId: '840912327703',
  appId: '1:840912327703:web:54f04350b522b394d5b852',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
