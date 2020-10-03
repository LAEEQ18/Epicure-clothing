import { call ,put, takeLatest ,all} from 'redux-saga/effects';

import { firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure

} from './shop.action';

import ShopActionTypes from './shope.type';

export function* fetchCollectionsAsync() {
   // yield console.log('I am fired');

try{
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap));
} catch (error) {
    yield put (fetchCollectionsFailure(error.message));
}

}

export function* fetchCollectionsStart() {
    yield takeLatest (
        ShopActionTypes.FECTCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all( [call(fetchCollectionsStart)])
}