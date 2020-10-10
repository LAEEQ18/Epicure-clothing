
import UserActionTypes from './user.types'

// export const setCurrentUser = user => ({

//     type: UserActionTypes.SET_CURENT_USER,
//     payload: user

// });

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const SignInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
    error:null
});

export const SignInFailure = error => ({
    type : UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const   emailSignInStart = (signInWithEmailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: signInWithEmailAndPassword
});


export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error)   => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = (userCredentials) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
});

export const signUpSuccess = ({user , additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user , additionalData}
});

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});