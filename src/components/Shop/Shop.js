import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
  
    const firstTen = fakeData.slice(0,10);

    const [product , setProduct] = useState(firstTen);

    const  [cart,setCart] = useState([]);
     
    const handleAddProduct = (product)=>{
        
        const newCart = [...cart ,product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        addToDatabaseCart(product.key,sameProduct.length);
    }
 
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                   product.map(item => <Product  showaddToCart={true} handleAddProduct = {handleAddProduct} product={item} key={item.key}></Product>)
               }
            </div>
            <div className="cart-container">
             <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;