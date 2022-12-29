import React from 'react';

import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';

const FooterStyled = styled('div')({
    borderTop: '.5px solid black',
    display: 'flex',
    justifyContent: 'center'
});

const FooterSection = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: 30
});

const SocialIcons = styled('div')({
    display: 'flex',
});

const SocialDivider = styled('p')({
    margin: 0,
    fontSize: 16
});

const CopyrightSection = styled('div')({
    display: 'flex',
    marginTop: '30px'
});

const CopyrightIconStyled = styled('p')({
    fontSize: 16,
    
});

const PStyled = styled('p')({
    margin: 0
});

function Footer() {

    return (
        <FooterStyled>
            <FooterSection>
                <h3>The Black Sheep's Ink</h3>
                <h5>FOLLOW US</h5>
                <SocialIcons>
                    <a href="https://www.instagram.com/"><InstagramIcon sx={{color: '#black', marginRight: 1}} fontSize='medium' /></a>
                    <SocialDivider>|</SocialDivider>
                    <a href="https://www.facebook.com/"><FacebookIcon sx={{color: '#black', marginLeft: 1}} fontSize='medium' /></a>
                </SocialIcons>
                <CopyrightSection>
                    {/* <CopyrightIconStyled> */}
                        <CopyrightIcon sx={{marginTop: '5px', marginRight: '5px'}} fontSize="xsmall" />
                    {/* </CopyrightIconStyled> */}
                    <PStyled>The Black Sheep's Ink, 2022</PStyled>
                </CopyrightSection>
            </FooterSection>
            <FooterSection>
            <h3>Menu</h3>
            </FooterSection>
        </FooterStyled>
    );
}

export default Footer;