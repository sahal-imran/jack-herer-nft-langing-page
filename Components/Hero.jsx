import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Hero() {
    return (
        <>
            <Box sx={{ width: '100%', minHeight: {
                md:'100vh'
            }, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }} >
                <Container maxWidth="lgBig" sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                    <Box sx={{width:'100%',height:'100%',display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <img style={{width:'100%',height:'100%',objectFit:'contain'}} src="/GifLogo/logo.gif" alt="Cover Picture here..." />
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Hero