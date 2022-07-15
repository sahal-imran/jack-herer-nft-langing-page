import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Hero() {
    return (
        <>
            <Box sx={{
                width: '100%', minHeight: {
                    md: '100vh'
                }, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', pb: 14, mt: {
                    md: 0,
                    xs: -1
                }
            }} >
                <Container maxWidth="lgBig" sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={'/logoMov.gif'} alt="Cover Picture here..." />
                        <Link href="/mint">
                            <a style={{ textDecoration: 'none' }} >
                                <Button variant='contained' sx={{
                                    width: {
                                        md: '247px',
                                        xs: '200px'
                                    }, height: {
                                        md: '77px',
                                        xs: '60px'
                                    }, color: '#000000', background: 'linear-gradient(#FFDEB0,#B49802 )', fontSize: {
                                        md: '33px',
                                        xs: '20px'
                                    }, lineHeight: {
                                        md: '38px',
                                        xs: '28'
                                    }, fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', borderRadius: '15px', textTransform: "capitalize", mt: {
                                        md: -8
                                    }, textDecoration: 'none'
                                }} >
                                    Mint
                                </Button>
                            </a>
                        </Link>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Hero