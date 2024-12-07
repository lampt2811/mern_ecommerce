/**
 *
 * Checkout
 *
 */

import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PAYPAL_CLIENT_ID } from '../../../constants';

import Button from '../../Common/Button';

const Checkout = props => {
  const { authenticated, handleShopping, handleCheckout, placeOrder, createPaypalOrder } = props;

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions'>
        <Button
          variant='primary'
          text='Continue shopping'
          onClick={() => handleShopping()}
        />
        {authenticated ? (
          <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID }}>
            <PayPalButtons
              createOrder={createPaypalOrder}
              onApprove={placeOrder}
              onError={(data,actions)=> {alert("PayPal Payment Error! Please try again later!")}}
            />
          </PayPalScriptProvider>
          // <Button
          //   variant='primary'
          //   text='Place Order'
          //   onClick={() => placeOrder()}
          // />
        ) : (
          <Button
            variant='primary'
            text='Proceed To Checkout'
            onClick={() => handleCheckout()}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
