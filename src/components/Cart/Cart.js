import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = props.cart.reduce((total,pd)=> total+pd.price*pd.quentiy,0)
    
    
    let shipping = 0;

    if(totalPrice > 50){
        shipping = 0 ;  
    }
    else if(totalPrice > 15){
        shipping = 10.99;
    }
    else if(totalPrice > 0){
        shipping = 10.35;
    }
    const tax = (totalPrice/10).toFixed(2);

    const grandTotal = totalPrice + shipping + Number(tax);
   
    const formateNumber = num =>{
        const precision = num.toFixed(2);

        return Number(precision);
    }
   
    
    return (
        <div>
           <h4>Order Summery</h4>  
           <p>Item orders : {cart.length} </p>
           <p>Product Price : {formateNumber(totalPrice)}</p>
           <p><small>Shipping Cost : {formateNumber(shipping)}</small></p>
           <p><small>Tax + VAT : {tax}</small></p>
          <p>Total Price : {formateNumber(grandTotal)}</p> <br/>
          {
              props.children
          }
        </div>
    );
};

export default Cart;