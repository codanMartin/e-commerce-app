import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCQZiVpnPP4z4dkyQ3LpX1Z2QkbAKGwZxQ",
  authDomain: "e-commerce-app-da5fb.firebaseapp.com",
  projectId: "e-commerce-app-da5fb",
  storageBucket: "e-commerce-app-da5fb.appspot.com",
  messagingSenderId: "712768143324",
  appId: "1:712768143324:web:334cb4ba84de0ad1be1919"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc (db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log("There was an error creating the user", error);
    }
  } 

  return userDocRef
}