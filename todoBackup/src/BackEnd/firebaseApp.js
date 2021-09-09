import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig={
    apiKey: "AIzaSyDJgY3UbxWZfr5Q6v5Z2hZVycw4tD07fZw",
    authDomain: "todo-app-9d5e4.firebaseapp.com",
    projectId: "todo-app-9d5e4",
    storageBucket: "todo-app-9d5e4.appspot.com",
    messagingSenderId: "404792854184",
    appId: "1:404792854184:web:1178ce138acb435087e49d",
    measurementId: "G-1YH83V4R4M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
