import firebase from 'firebase/app' ;
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    
        apiKey: "AIzaSyBH_7FP31L5vwAyQrHRGWFcKK0S_Wikm_g",
        authDomain: "crown-db-bef58.firebaseapp.com",
        databaseURL: "https://crown-db-bef58.firebaseio.com",
        projectId: "crown-db-bef58",
        storageBucket: "crown-db-bef58.appspot.com",
        messagingSenderId: "36833151942",
        appId: "1:36833151942:web:40a7bdc1b0f07229c080c7",
        measurementId: "G-JB3KLLL9WM"
      };

      export const createUserProfileDocument = async (userAuth , additionalData) =>
      {
          if (!userAuth) return ;

          const userRef = firestore.doc(`users/${userAuth.uid}`);

          const snapShot = await userRef.get();

        //   console.log(snapShot);

          if(!snapShot.exists)
          {
              const {displayName , email} = userAuth;
              const createdAt = new Date();
          

          try{
              await userRef.set({
                  displayName,email,createdAt,...additionalData
              })

          }catch (error) {

            console.log('error creating user ' , error.message);
          }
        }

        return userRef;
      };

       

      firebase.initializeApp(config);
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'});

      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;

    //   export default createUserProfileDocument();