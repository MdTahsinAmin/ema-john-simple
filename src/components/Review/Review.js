import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
  
  const [cart,setCart] = useState([])

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

    return (
        <div>
          {
            cart.map(product => <ReviewItem product={product} key={product.key}></ReviewItem>)
          }
        </div>
    );
};

export default Review;