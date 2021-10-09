import { firebase } from '@firebase/app';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBi1EUsSiIGmnNfQE8gRzbUz090P03-gcI",
    authDomain: "algologs-4cd95.firebaseapp.com",
    projectId: "algologs-4cd95",
    storageBucket: "algologs-4cd95.appspot.com",
    messagingSenderId: "740713409179",
    appId: "1:740713409179:web:0f9ec1afe54f3d5b0b743e",
    measurementId: "G-Q74NY2MXTW"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db }
