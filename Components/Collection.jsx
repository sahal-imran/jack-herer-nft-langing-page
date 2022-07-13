import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function Collection() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', py: 8,mt: {
                    md: 0,
                    xs: -1
                } }} >
                <Container maxWidth="lgBig" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Typography variant='h4' sx={{ color: '#EDEDED', fontSize: {
                        md:'80px',
                        xs:'40px'
                    }, lineHeight: {
                        md:'101px',
                        xs:'52px'
                    }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize',textAlign:'center',position:'relative',zIndex:1, }} >
                        About The Collection
                    </Typography>
                    <Box sx={{ width: '100%',mt:8 }} >
                        <Grid container rowSpacing={{ xs: 8, md: 0 }} columnSpacing={{ xs: 0, md: 0 }}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/backstage.gif" alt="img" />
                                    </Box>
                                    <Typography variant='h4' sx={{ color: '#EDEDED', fontSize: {
                                        md:'40px',
                                        xs:'30px'
                                    }, lineHeight: {
                                        md:'52px',
                                        xs:'36px'
                                    }, fontFamily: 'HelveticaRegular', }} >
                                        Backstage Level:
                                    </Typography>
                                    <Typography variant='h4' sx={{ color: '#EDEDED', fontSize: {
                                        md:'14px',
                                        xs:'16px'
                                    }, lineHeight: {
                                        md:'36px',
                                        xs:'24px'
                                    }, fontFamily: 'HelveticaRegular', textAlign: 'center', mt: 2 }} >
                                        - Air Dropped to Celebrities and Industry leaders.<br />
                                        <br />
                                        - Member will receive 40,000 points to be used to attend events<br />and gain additional access.<br />
                                        <br />
                                        -  Will receive free merchandise with each event that the member attends.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',mt:{
                                    md:0,
                                    xs:-6
                                } }} >
                                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/vip.gif" alt="img" />
                                    </Box>
                                    <Typography variant='h4' sx={{ color: '#EDEDED', fontSize: {
                                        md:'40px',
                                        xs:'30px'
                                    }, lineHeight: {
                                        md:'52px',
                                        xs:'36px'
                                    }, fontFamily: 'HelveticaRegular', }} >
                                        VIP Level:
                                    </Typography>
                                    <Typography variant='h4' sx={{ color: '#EDEDED', fontSize: {
                                        md:'14px',
                                        xs:'16px'
                                    }, lineHeight: {
                                        md:'36px',
                                        xs:'24px'
                                    }, fontFamily: 'HelveticaRegular', textAlign: 'center', mt: 2 }} >
                                        - Access to exclusive VIP Level Only
                                        areas at all events.<br />
                                        <br />
                                        - Member will receive 18,000 points to be used to attend events<br />and gain additional access.<br />
                                        <br />
                                        -  Will receive free merchandise with each event that the member attends.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',mt:{
                                    md:0,
                                    xs:-6
                                } }} >
                                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/member.gif" alt="img" />
                                    </Box>
                                    <Typography variant='h4' sx={{ color: '#EDEDED', fontSize: {
                                        md:'40px',
                                        xs:'30px'
                                    }, lineHeight: {
                                        md:'52px',
                                        xs:'36px'
                                    }, fontFamily: 'HelveticaRegular', }} >
                                        Members Level:
                                    </Typography>
                                    <Typography variant='h4' sx={{ color: '#EDEDED',fontSize: {
                                        md:'14px',
                                        xs:'16px'
                                    }, lineHeight: {
                                        md:'36px',
                                        xs:'24px'
                                    }, fontFamily: 'HelveticaRegular', textAlign: 'center', mt: 2 }} >
                                        - Access to exclusive Members Level Only
                                        areas at all events. <br />
                                        <br />
                                        - Member will receive 8,000 points to be used to attend events<br />and gain additional access. <br />
                                        <br />
                                        -  Will receive free merchandise with each event that the member attends.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Collection