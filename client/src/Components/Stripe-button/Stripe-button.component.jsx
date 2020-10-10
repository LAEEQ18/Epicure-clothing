import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
//import { error } from 'console';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HHZLSHQ2umExmCkPcSnqccXkURJuPL3h0Yd7Pj2hozeeHJUWSwvpFcAdV9smGa9WyXft7pZP1wXNrcUe9ym5wUk00aZKhn3R7';

   const onToken = token => {
       // console.log (token);
      // alert ('Payment Succesful');
       axios({
           url: 'payment',
           method: 'post' ,
           data: {
               amount: priceForStripe,
               token
           }
       })
       .then( response => {
           alert('Payment succesful');
       })
       .catch(error => {
           console.log ('Payment error:' , JSON.parse(error));
           alert(
               'There was an issue with your payment. Please sure you use the provided credit card'
           );
       }); 
        
    };
        return(
            <StripeCheckout
            
            label = 'Pay Now'
            name= 'Crown Clothing Pvt'
            billingAddress 
            shippingAddress
           //image='https://sendeyo.com/up/d/f3eb2117da' we also use imageUrl for this
             image='images/crown2.png'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
        );    
};

export default StripeCheckoutButton;

