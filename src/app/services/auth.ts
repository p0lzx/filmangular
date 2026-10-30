import { Service } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from '../../environments/environment.development';

@Service()
export class Auth {
  firebaseConfig = {
    apiKey: environment.firebaseapikey,
    authDomain: 'filmangular.firebaseapp.com',
    projectId: 'filmangular',
    storageBucket: 'filmangular.firebasestorage.app',
    messagingSenderId: '841986396849',
    appId: '1:841986396849:web:0d66c359019ca9eccb0890',
    measurementId: 'G-C86GB2B4FV',
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



