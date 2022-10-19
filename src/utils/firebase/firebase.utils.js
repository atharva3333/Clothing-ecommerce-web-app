import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAbynCu2BKDsn46UbZGeTotqjXNZBgytBI",
  authDomain: "clothind-eccom-db.firebaseapp.com",
  projectId: "clothind-eccom-db",
  storageBucket: "clothind-eccom-db.appspot.com",
  messagingSenderId: "32831526244",
  appId: "1:32831526244:web:4c3783aa1b6aa81e639671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = new getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation ={}
  ) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }
    catch (error) {
      console.log('error creating the user', error.message);
    }

  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email , password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}