import {UserActionTypes} from './user.types'

export const setCurrentUser = user => ({

    type: UserActionTypes.SET_CURENT_USER,
    payload: user

})