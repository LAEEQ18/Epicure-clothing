import CartActionTypes from './cart.types';

const toggleCartHidden = () =>(
{
    type : CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export default toggleCartHidden;