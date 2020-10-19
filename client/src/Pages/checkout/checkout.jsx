import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems , selectCartTotal} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../Components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../Components/Stripe-button/Stripe-button.component';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    TestWarningContainer
} from './checkout.style.jsx';

// 

const CheckoutPage = ({cartItems , total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price For 1</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem =>(
            <CheckoutItem key ={cartItem.id} cartItem={cartItem}/>
        ))
        }

        <TotalContainer>
    <span>TOTAL :${total}</span>
        </TotalContainer>
        <TestWarningContainer>
            *Please Use The Following Test Credit card for Payments*
            <br/>
            5555 5555 5555 4444 - Exp: 09/20 - CVV:789 

        </TestWarningContainer>
        <StripeCheckoutButton price ={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems ,
    total : selectCartTotal
})

export default connect (mapStateToProps)(CheckoutPage);
