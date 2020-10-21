import firebase from 'firebase/app' ;
import 'firebase/firestore';
import 'firebase/auth';
//import { rejects } from 'assert';

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

      firebase.initializeApp(config);

      export const createUserProfileDocument = async (userAuth , additionalData) =>
      {
          if (!userAuth) return ;

          const userRef = firestore.doc(`users/${userAuth.uid}`);
          //const collectionRef = firestore.collection('users');

          const snapShot = await userRef.get();
          //const collectionSnapshot = await collectionRef.get();
          //console.log({collection: collectionSnapshot.docs.map(doc=> doc.data())});

        //   console.log(snapShot);

          if(!snapShot.exists)
          {
              const {displayName , email} = userAuth;
              const createdAt = new Date();
          

          try{
              await userRef.set({
                  displayName,email,createdAt, ...additionalData
              })

          }catch (error) {

            console.log('error creating user ' , error.message);
          }
        }

        return userRef;
      };

      export const addCollectionAndDocuments = async (
        collectionKey,
        objectsToAdd
      ) => {
        const collectionRef = firestore.collection(collectionKey);
      
        const batch = firestore.batch();
        objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
        });
      
        return await batch.commit();
      };

       export const convertCollectionsSnapshotToMap = collections => {
        const transformedCollection = collections.docs.map(doc => {
          const { title, items } = doc.data();
      
          return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
          };
        });
         //console.log(transformedCollection);

         return transformedCollection.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
        }, {});
      };

       export const getCurrentUser = () => {
        return new Promise((resolve, reject) => {
          const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
          }, reject);
        });
      };

      //firebase.initializeApp(config);
      export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;


    //   export default createUserProfileDocument();