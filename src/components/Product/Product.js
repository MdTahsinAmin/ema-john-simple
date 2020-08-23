import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props);
    return (
        <div className='product'>
            <div className='productImg' >
                <img src={props.product.img} alt="" />
            </div>
            <div className='productInformation'>
                <h4 className='product-name'>{props.product.name}</h4>
                <p><small>by :{props.product.seller}</small></p>
                <p>Price : {props.product.price}</p>
                <p><small>only {props.product.stock} left in stack - order soon</small></p>
                <button className='addCartBtn' onClick ={()=>{props.handleAddProduct(props.product)}}> 

                  <FontAwesomeIcon icon ={faShoppingCart}/> add to cart 

                </button>
            </div>
        </div>
    );
};

export default Product;