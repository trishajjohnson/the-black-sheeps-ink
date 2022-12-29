import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CardContainer from '../../components/CardContainer';
import ProductFilter from '../../components/ProductFilter';

import { styled } from '@mui/material/styles';

const ContainerStyled = styled('div')({
    paddingTop: 100,
    // margin: '0 20vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
});

const FilterContainer = styled('div')({
    // padding: '0 80px',
    display: 'flex',
    marginRight: {
        // xs: '20vw',
        md: '15vw',
    },
    // flexDirection: 'column',
    justifyContent: 'flex-end',
    // textAlign: 'center',
    // alignItems: 'center'
});


function Products() {
    const [filter, setFilter] = useState("");
    const [displayedProducts, setDisplayedProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await axios.get('http://localhost:3000/api/products');
            if(filter === "all" || filter === "") {
                setDisplayedProducts(response.data);
            } else {
                setDisplayedProducts(response.data.filter(product => product.category === filter));
            }
        }
        getProducts();
    }, [filter]);

    function handleChange(evt) {
        setFilter(evt.target.value);
    }


    return (
        <ContainerStyled>
            <h1>Welcome to the Black Sheep's Ink shop!</h1>
            <FilterContainer sx={{ display: 'flex', justifyContent: "flex-end" }}>
                <ProductFilter handleChange={handleChange} filter={filter} />
            </FilterContainer>
            <CardContainer products={displayedProducts} />
        </ContainerStyled>
    );
}


export default Products;