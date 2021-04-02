import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';

const Product = ({ product }) => {

    return (
        <div className=" p-1 my-2 mx-5" style={{height: '400px', width:"22%"}}>
        <Card style={{ width: '18rem' }}            >
            <Card.Img variant="top" style={{ height: '200px', width: '180px', display: 'block', margin: 'auto'}} src={product.url} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text> {product.weight}</Card.Text>
                <h5> $ {product.price} <Link to={`/checkout/${product._id}`}><Button variant="primary">Bye Now</Button></Link></h5>
            </Card.Body>
        </Card>

    </div>
    );
};

export default Product;
