import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function WhatIsJackHerer() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', py: 4 }} >
                <Container maxWidth="lgBig" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py:{
                    md: 14,
                    xs:8
                }, borderTop: '1px solid #FFFFFF', borderBottom: '1px solid #FFFFFF' }} >
                    <Typography variant='h4' sx={{
                        color: '#EDEDED', fontSize: {
                            md:'45px',
                            xs:'40px'
                        }, lineHeight: '52px',fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular',textAlign:'center'
                    }} >
                        What is the Jack Herer Cup?
                    </Typography>
                    <Typography variant='h4' sx={{
                        color: '#EDEDED', fontSize: {
                            md:'24px',
                            xs:'16px'
                        }, lineHeight: {
                            md:'40px',
                            xs:'24px'
                        },fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular',textAlign:'center',width:{
                            md:'60%'
                        },mt:4
                    }} >
                        The Jack Herer Cup NFT gives you the ability to be a part of an exclusive club that hosts Cannabis Events Worldwide. NFT holders will receive exclusive perks, and products for each Jack Herer Cup event.<br />
                        <br />
                        When you mint your NFT, you will receive points that you can redeem for access to all of the events that Jack Herer Cup hosts all year round. With each level of the NFT’s you will be granted different kinds of access and receive different perks.
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default WhatIsJackHerer;