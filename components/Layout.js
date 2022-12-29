import { Fragment } from "react";

import Head from 'next/head';

import { CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import Navbar from "./Navbar";
import Footer from './Footer';


function Layout(props) {   
    return (
        <Fragment>
            <CssBaseline />
            <Head>
                <title>The Black Sheep's Ink</title>
                <meta name="description" content="Local artist Kristy Moore's collection of art and accessories." />
                <link rel="icon" href="/image0.jpeg" />
            </Head>
            <Navbar />

            <main>
                {props.children}
            </main>

            <Footer />
                
        </Fragment>
    );
}

export default Layout;