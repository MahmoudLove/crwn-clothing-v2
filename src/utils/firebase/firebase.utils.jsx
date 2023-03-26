import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
//this sdk initializeApp do for us all the connecting auth and all of this
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore'; // getdoc =get document data -- setdoc =set document data  -- doc is needed to get documentr instance
const firebaseConfig = {
  apiKey: 'AIzaSyAtIrNkN49I2w6ST28HqUULkCnmJWoNmj8',
  authDomain: 'crwn-clothing-db-d5804.firebaseapp.com',
  projectId: 'crwn-clothing-db-d5804',
  storageBucket: 'crwn-clothing-db-d5804.appspot.com',
  messagingSenderId: '1018634172827',
  appId: '1:1018634172827:web:8668a1bbf7f04c5506c93e',
};

const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // class connected to google auth it self and can be many for 1 app

provider.setCustomParameters({
  prompt: 'select_account',
  login_hint: 'user@example.com',
});

export const auth = getAuth(); //this is authentication services and only 1 for  1 application
auth.useDeviceLanguage();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  //console.log(userAuth);
  const userDocRef = doc(db, 'users', userAuth.uid); //access data under users collection and find document with this id and give back the pointer for the place i want in the db inside users collection
  //console.log(userDocRef); // give the place in data base
  const snapShot = await getDoc(userDocRef); //give data for this place in db
  //   console.log(snapShot);
  //   console.log(snapShot.exists());
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('the following setting doc error happend : ', error.message);
    }
  }
  return userDocRef;
};
