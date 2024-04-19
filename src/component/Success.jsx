import React from 'react';
import { useParams } from 'react-router-dom';

const OrderSuccess = () => {
    const  orderId  = useParams();
    return (
        <div className="order-success-container">
            <div className="order-success-content">
                <h1 className="order-success-title">Order Placed Successfully!</h1>
                <p className="order-success-message">Your order has been successfully placed.</p>
                <p className="order-id">Order ID: {orderId.id}</p>
                <p className="email-confirmation">An email confirmation has been sent to your email address.</p>
            </div>
        </div>
    );
};

export default OrderSuccess;
