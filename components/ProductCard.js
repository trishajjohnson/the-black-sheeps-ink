import React, { useState } from 'react';

import { styled } from '@mui/material/styles';

import { Card, CardContent, CardMedia, Grid, Typography, Link } from '@mui/material';

const ContainerStyled = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto'
});

const CardStyled = styled(Card)({
    maxWidth: 250,
    borderRadius: 0,
    boxShadow: 'none',
    '&:hover': {
        boxShadow: '1px 1px 5px'
    }
});

const CardMediaStyled = styled(CardMedia)({
});

const LinkStyled = styled(Link)({
    textDecoration: 'none',
    '&:hover': {

    }
});

function ProductCard({product}) {
    const [cardImage, setCardImage] = useState(product.images[0]);


    return (

        <ContainerStyled>
            <LinkStyled href={`http://localhost:3000/products/${product.id}`}>
                <CardStyled sx={{ }}>
                    <CardMediaStyled
                        component="img"
                        height="250"
                        // image={cardImage}
                        src={cardImage}
                        alt={product.altText}
                        onMouseOver={() => setCardImage(product.images[1])}
                        onMouseLeave={ () => setCardImage(product.images[0])}
                    />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            variant="h5" 
                            component="div"
                            sx={{
                                textAlign: 'center',
                                fontSize: 20
                            }}>
                        {product.title}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{
                                textAlign: 'center'
                            }}>
                        ${product.price}.00
                        </Typography>
                    </CardContent>
                </CardStyled>
            </LinkStyled>
        </ContainerStyled>
    );
}


export default ProductCard;