import React from 'react';
import Product from '../Product/Product';

const ReviewItem = (props) => {
    //console.log(props);
    const {name,quentiy,key} = props.product;
    const style={
        borderBottom: '1px solid lightgray',
        paddingBottom:'5px',
        marginBottom: '5px',
        marginLeft: '200px'
    };
    return (
        <div style={style} className='review-item'>
          <h4 className='product-name'>Name : {name}</h4>
          <p>Quantity : {quentiy}</p>
          <button className='addCartBtn' onClick={()=>{props.handleRemoveItem(key)}}>Remove</button>
        </div>
    );
};

export default ReviewItem;