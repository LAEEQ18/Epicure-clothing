import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems , selectCartTotal} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../Components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../Components/Stripe-button/Stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems , total}) => (
    <div className='checkout-page'>
        <div className ='checkout-header'>
            <div className = 'header-block'>
                <span>Product</span>
            </div>
            <div className = 'header-block'>
                <span>Description</span>
            </div>
            <div className = 'header-block'>
                <span>Quantity</span>
            </div>
            <div className = 'header-block'>
                <span>Price</span>
            </div>
            <div className = 'header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem =>(
            <CheckoutItem key ={cartItem.id} cartItem={cartItem}/>
        ))
        }

        <div className ='total'>
    <span>TOTAL :${total}</span>
        </div>
        <div className = 'Test-Warning'>
            *Please Use The Following Test Credit card for Payments*
            <br/>
            5555 5555 5555 4444 - Exp: 09/20 - CVV:789 

        </div>
        <StripeCheckoutButton price ={total} />
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems ,
    total : selectCartTotal
})

export default connect (mapStateToProps)(CheckoutPage);
