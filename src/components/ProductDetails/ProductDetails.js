import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    // useParmes

    const {productKey} = useParams();
    
    const product = fakeData.find(pd => pd.key === productKey);


    return (
        <div>
            <h1> Your Product Details Here</h1> 
             <Product showaddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;