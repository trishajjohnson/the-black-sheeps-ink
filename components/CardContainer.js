import React from 'react';
import ProductCard from './ProductCard';

import { styled } from '@mui/material/styles';

import { Grid } from '@mui/material';

const ContainerStyled = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    width: '100vw'
});


function CardContainer({products}) {


    return (
        <ContainerStyled>
            <Grid 
                container 
                spacing={2}
                sx={{
                    width: {
                        md: '75%'
                    },
                }}
            >
                {products.map(item => {
                    return (
                        <Grid item xs={12} md={4} lg={3}>
                            <ProductCard key={item.id} product={ item } />
                        </Grid>
                    );
                })}
            </Grid>    
        </ContainerStyled>
    );
}


export default CardContainer;