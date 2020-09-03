import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
const Review = () => {
  
  const [cart,setCart] = useState([])
  const [orderPlaced ,setOrderPlaced] = useState(false);

  const handlePlaceOrder =()=>{
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  }


  const handleRemoveItem =(productKey)=>{
    //console.log('remove product' , productKey)

    const newCart = cart.filter(pd => pd.key !== productKey)

    setCart(newCart)

    removeFromDatabaseCart(productKey);
  }

  useEffect(() =>{
       const saveCart = getDatabaseCart();
       const productKeys = Object.keys(saveCart)
       const cartProduct = productKeys.map(key =>{
        const product = fakeData.find(pd => pd.key === key)
        product.quentiy = saveCart[key];
       return product;
     });
     setCart(cartProduct)
  },[])
   
  let  thanks ;
  if(orderPlaced) thanks = <img src={happyImage} alt=""/>
    return (
        <div className='twin-container'>
          <div className='products-container'>
              {
               cart.map(product => <ReviewItem product={product} handleRemoveItem={handleRemoveItem} key={product.key}></ReviewItem>)
              }
              {
                thanks
              }
          </div>
          <div className='cart-container'>
            <Cart cart={cart}>
              <button onClick={handlePlaceOrder} className='addCartBtn'>Place Order</button>
            </Cart>
          </div>
        </div>
    );
};

export default Review;