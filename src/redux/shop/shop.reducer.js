//import SHOP_DATA from './shop.data';

import  ShopActionTypes  from './shope.type';


const INITIAL_STATE = {

    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) =>
{
    switch(action.type) {


        case ShopActionTypes.FECTCH_COLLECTIONS_START:
        return {
            ...state,
            isFetching: true
        };

        case ShopActionTypes.FECTCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                collections: action.payload

            }

        case ShopActionTypes.FECTCH_COLLECTIONS_FAILURE:
            return {
            ...state,
            isFetching: false,
            errorMessage: action.payload
        };

        // case ShopActionTypes.UPDATE_COLLECTIONS:
        //     return{
        //         ...state,
        //         collections: action.payload
        //     };
        default:
         return state
    }
}

export default shopReducer;