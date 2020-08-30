import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props.product);
    const {key}= props.product;
    return (
        <div className='product'>
            <div className='productImg' >
                <img src={props.product.img} alt="" />
            </div>
            <div className='productInformation'>
              <h4 className='product-name'><Link to={`/product/${key}`}>{props.product.name}</Link></h4>
                <p><small>by :{props.product.seller}</small></p>
                <p>Price : {props.product.price}</p>
                <p><small>only {props.product.stock} left in stack - order soon</small></p>
                {props.showaddToCart && <button className='addCartBtn' onClick ={()=>{props.handleAddProduct(props.product)}}> 

                  <FontAwesomeIcon icon ={faShoppingCart}/> add to cart 

                </button>
                }
            </div>
        </div>
    );
};

export default Product;