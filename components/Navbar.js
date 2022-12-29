import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material'

const pages = [{name: 'Home', path: ''}, {name: 'Shop', path: 'products'}, {name: 'About', path: 'about'}, {name: 'Contact', path: 'contact'}];

const AppBarStyled = styled(AppBar)({
  position: 'absolute',
//   backgroundColor: 'none',
  background: 'transparent',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.3)' 
});

const BoxStyled = styled(Box)({
    display: 'flex'
})

const ContainerStyled = styled('div')({
    display: 'flex',
    // justifyContent: 'center',
    // textAlign: 'center',
    alignItems: 'center',
    width: '50%',
    margin: '0 auto'
});

const MenuStyled = styled(Menu)({
  backgroundColor: 'none',
  '& ul': {
    backgroundColor: 'black',
    color: 'white',
  },
});


function Navbar() {
    const router = useRouter();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleRespMenuItemClick = (path) => {
      router.push(`/${path}`);
      handleCloseNavMenu();
    }

    return (
      <AppBarStyled position="static">
        <ContainerStyled sx={{ justifyContent: {xs: 'space-between', md: 'center'}, flexDirection: { xs: 'row', md: 'column' } }} maxWidth="xl">
          {/* <Toolbar disableGutters> */}
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                display: 'flex',
                fontFamily: 'Helvetica Neue',
                fontWeight: 700,
                fontSize: { xs: '15px', md: '45px'},
                letterSpacing: '.3rem',
                mt: '10px',
                color: 'black',
                textDecoration: 'none',
                // textAlign: 'center',
                // justifyContent: 'center'
              }}
            >
                THE BLACK SHEEP'S INK
              {/* <IconButton>
                <img 
                  src="/image0.jpeg" 
                  alt="Black Sheep's Ink logo" 
                  width={50} 
                  height={50} 
                />
              </IconButton> */}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: { xs: 'flex-end' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: 'black' }}/>
              </IconButton>
              <MenuStyled
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={() => handleRespMenuItemClick(page.path)}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </MenuStyled>
            </Box>
                
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >

              <IconButton>
                <img 
                  src="./image0.jpeg"
                  alt="Black Sheep's Ink logo" 
                  width={50} 
                  height={50} 
                />

              </IconButton>
            </Typography> */}

            <Box 
              sx={{ 
                flexGrow: 1, 
                display: { 
                  xs: 'none', 
                  md: 'flex' 
                }, 
                // justifyContent: 'flex-end', 
              }}
            >
              {pages.map((page) => (
                <Link key={page.name} href={`/${page.path}`}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ 
                    //   my: 2, 
                      color: 'black', 
                      display: 'block' 
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
          {/* </Toolbar> */}
        </ContainerStyled>
      </AppBarStyled>
    )
}


export default Navbar;