import React from 'react';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonStyled = styled(Button)({
    backgroundColor: 'black',
    color: 'white',
    position: 'relative',
    top: '50%',
    // marginTop: 25,
    width: '150px',
    textDecoration: 'none',
    border: '1px solid black',
    '&:hover': {
        transform: 'scale(1.1)',
        backgroundColor: 'black',
        color: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }
});

const ContainerStyled = styled('div')({
    height: '100vh',
    // alignItems: 'center'
})

const HeaderStyled = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: `url("https://eojassets.s3.us-west-1.amazonaws.com/Astha_sofa_in_large_open_lounge.jpeg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

function Header() {
    
    return (
        
        <HeaderStyled>
            <ContainerStyled>
                <ButtonStyled size='large' href="/products">
                    Browse Art
                </ButtonStyled>            
            </ContainerStyled>
        </HeaderStyled>

    );
}

export default Header;