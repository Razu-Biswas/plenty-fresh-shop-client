import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [product, setProduct] = useState({});

    const onSubmit = data => {
        console.log(product);

        const url = `https://plenty-fresh-server.onrender.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => console.log('server side response', res))

        data.preventDefault();
    };

    const handleAddProduct = (e) => {
        console.log(e.target.name);
        if (e.target.name === 'product') {
            const name = (product.name = e.target.value);
            setProduct({ ...product, name });
        } else if (e.target.name === 'weight') {
            const weight = (product.weight = e.target.value);
            setProduct({ ...product, weight });
        } else if (e.target.name === 'price') {
            const price = (product.price = e.target.value);
            setProduct({ ...product, price });
        }
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '3d746c5f8d8d011dc07a596dfeb00a19');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                const url = (product.url = response.data.data.display_url);
                setProduct({ ...product, url });
                setIMageURL(response.data.data.display_url);
                toast.success('Product Save  Successful');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Form onSubmit={(e) => onSubmit(e)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="product" onChange={(e) => handleAddProduct(e)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Product Weight/Pcs/Pack</Form.Label>
                        <Form.Control type="string" placeholder="Enter weight/pcs/pack" name="weight" onChange={(e) => handleAddProduct(e)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" >
                        <Form.Label>Add Price</Form.Label>
                        <Form.Control type="string" placeholder="Enter price" name="price" onChange={(e) => handleAddProduct(e)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Add Product Photo</Form.File.Label>
                            <Form.File.Input onChange={handleImageUpload} />
                        </Form.File>

                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Save
            </Button>
            </Form>
        </div>
    );

};

export default AddProduct;