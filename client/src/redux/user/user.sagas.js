//import { auth } from 'firebase';
import {takeLatest, put , call ,all} from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { auth, 
    googleProvider,
     createUserProfileDocument,
     getCurrentUser} from '../../firebase/firebase.utils';

     import { SignInSuccess , SignInFailure , signOutFailure ,signOutSuccess , signUpFailure,signUpSuccess} from './user.actions';


export function* getSnapshotFromUserAuth(userAuth , additionalData) {
    try {
       // const {user} = yield auth.signInWithPopup(googleProvider);
        //console.log(userRef);
        const userRef = yield call (createUserProfileDocument , userAuth , additionalData);
        const userSnapshot = yield userRef.get();
        yield put (
            SignInSuccess({ id: userSnapshot.id,  ...userSnapshot.data()})
        );
    }catch(error) {
        yield put (SignInFailure(error));

    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        
        yield getSnapshotFromUserAuth (user);
       
    }catch(error) {
        yield put (SignInFailure(error));

    }
}

export function* signOut () {
    try {
        yield auth.signOut();
        yield(put(signOutSuccess()));
    } catch (error) {
        yield (put(signOutFailure(error)));
        
    }
}

export function* signUp ({ payload: { email , password , displayName }}) {
    try {
        const {userAuth} = yield auth.createUserWithEmailAndPassword(
            email ,
            password
             );
            // yield getSnapshotFromUserAuth (user);
        yield put(signUpSuccess({ userAuth, additionalData: {displayName}}));     

    } catch (error) {
        yield put (signUpFailure(error));
    }
};

export function* signInAfterSignUp ({payload:{ userAuth , additionalData}}) {
   yield getSnapshotFromUserAuth(userAuth , additionalData);
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email , password}}) {
    try {
        const {userAuth} = yield auth.signInWithEmailAndPassword(email , password);
        yield  getSnapshotFromUserAuth (userAuth);
    
    }catch(error) {
        yield put (SignInFailure(error));

    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
       const userAuth = yield getCurrentUser();
       if (!userAuth) return;
       yield getSnapshotFromUserAuth (userAuth);
    
    }catch(error) {
        yield put (SignInFailure(error));

    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START , signOut )
}

export function* onSignUpStart () {
    yield takeLatest(UserActionTypes.SIGN_UP_START , signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS , signInAfterSignUp)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), 
        call(onEmailSignInStart) , 
        call(onCheckUserSession) ,
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
      //  call(signInAfterSignUp)
    
    ]);
}