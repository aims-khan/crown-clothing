import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51I4A1UF4BwhfE1X7PC8tB4u4MNFTtI9xDVNNlBOI0nUQA2CVJepnOu3lIjPgILdlAMOXnzf2uwHRPs0AFu2RO2bW004SmYOeTM'
    
    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="Crown Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken} //it is the on success call back that triggers when we submit and the submission can be handled by this component
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;