import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles'; 

const ContainerStyled = styled('div')({
    paddingTop: 100,
    // margin: '0 20vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
});


function ProductDetail() {
    const router = useRouter();
    const productId =  parseInt(router.query.productId);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getProduct() {
            const response = await axios.get(`http://localhost:3000/api/products/${productId}`);
            const product = response.data;
            setProduct(product);
        }
        getProduct();
    }, [productId]);

    if(!product) return <div>Loading...</div>

    return (
        <ContainerStyled>
            <h1>Product Details Page</h1>
            <p>{product.id}: {product.title}</p>
        </ContainerStyled>
        
    );
}

export default ProductDetail;