import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
  
    const firstTen = fakeData.slice(0,10);

    const [product , setProduct] = useState(firstTen);

    const  [cart,setCart] = useState([]);

    
    useEffect(()=>{
         const saveData = getDatabaseCart();

         const productsKey = Object.keys(saveData);
        
         const previousData = productsKey.map(productKey =>{
              
            const product = fakeData.find(pd => pd.key === productKey);

            product.quentiy = saveData[productKey];

            return product;

         })
        setCart(previousData);
    },[]);

     
    const handleAddProduct = (product)=>{
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count =  1;
        let newCart ;
        if(sameProduct){
             count = sameProduct.quentiy + 1;

            sameProduct.quentiy = count;

            const others = cart.filter(pd => pd.key !== product.key);

           newCart = [...others , sameProduct];

        }
        else{
            product.quentiy = 1;
            newCart = [...cart , product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }
 
    return (
        <div className='twin-container'>
            <div className="products-container">
               {
                   product.map(item => <Product  showaddToCart={true} handleAddProduct = {handleAddProduct} product={item} key={item.key}></Product>)
               }
            </div>
            <div className="cart-container">
             <Cart cart ={cart}>
             <Link to='/review'>
               <button className='addCartBtn' >Review Order</button>
             </Link>
             </Cart>
            </div>
        </div>
    );
};

export default Shop;