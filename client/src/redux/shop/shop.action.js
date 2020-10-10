import  ShopActionTypes  from './shope.type';

import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
//import { error } from 'coll';


// export const updateCollections = collectionsMap => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// })

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FECTCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FECTCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FECTCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})



export const fetchCollectionsStartAync = () => {
    return dispatch => {

        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(
            snapShot => {

                const collectionsMap =   convertCollectionsSnapshotToMap(snapShot);
               dispatch (fetchCollectionsSuccess(collectionsMap));
                //this.setState({loading :false});
               
               }
        ).catch(error => dispatch(fetchCollectionsFailure(error.message)));

    } 
}