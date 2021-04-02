import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    // console.log(book);

    return (
        <div className="col-md-3">
            <img style={{ height: '300px', width: '300px' }} src={product.url} alt="" />

            <h4>{product.name}</h4>
            <h5>{product.weight}</h5>
            <h5>${product.price}   <Link to={`/checkout/${product._id}`} > <button class="btn btn-primary" type="button">Buy Now</button> </Link></h5>
            {/* <h5>Price: $ {product.price} <Link to={`/checkout/${product._id}`}>Bye Now</Link></h5> */}

            {/* <Link to={`/checkout/${product._id}`} > <button class="btn btn-primary" type="button">Buy Now</button> </Link> */}
        </div>
    );
};

export default Product;