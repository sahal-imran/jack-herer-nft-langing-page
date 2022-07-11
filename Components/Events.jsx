import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Events() {
    return (
        <>
            <Box sx={{
                width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', mt: {
                    md: 0,
                    xs: -1
                }
            }} >
                <Container maxWidth="lgBig" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: {
                        md: 11,
                        xs: 4
                    }, pb: {
                        md: 14,
                        xs: 8
                    }, borderBottom: '1px solid #FFFFFF'
                }} >
                    <Typography variant='h4' sx={{
                        color: '#EDEDED', fontSize: {
                            md: '80px',
                            xs: '40px'
                        }, lineHeight: {
                            md: '101px',
                            xs: '52px'
                        }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'center', position: 'relative', zIndex: 1,
                    }} >
                        2022 Events
                    </Typography>
                    <Box sx={{ width: '100%', my: 10 }} >
                        <Grid container columns={{ md: 15 }} rowSpacing={{ xs: 8, md: 0 }} columnSpacing={{ xs: 0, md: 4 }}>
                            <Grid item xs={12} md={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/Events/2.png" alt="img" />
                                    </Box>
                                    <Box sx={{ width: '62px', height: '39px', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/flage1.png" alt="img" />
                                    </Box>
                                    <Typography variant='h4' sx={{
                                        color: '#EDEDED', fontSize: {
                                            md: '22px',
                                            xs: '20px'
                                        }, lineHeight: {
                                            md: '31px',
                                            xs: '28px'
                                        }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'center', mt: 5
                                    }} >
                                        September 10th
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/Events/1.png" alt="img" />
                                    </Box>
                                    <Box sx={{ width: '62px', height: '39px', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/flage3.png" alt="img" />
                                    </Box>
                                    <Typography variant='h4' sx={{
                                        color: '#EDEDED', fontSize: {
                                            md: '22px',
                                            xs: '20px'
                                        }, lineHeight: {
                                            md: '31px',
                                            xs: '28px'
                                        }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'center', mt: 5
                                    }} >
                                        November 4th-6th
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/Events/3.png" alt="img" />
                                    </Box>
                                    <Box sx={{ width: '62px', height: '39px', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/flage1.png" alt="img" />
                                    </Box>
                                    <Typography variant='h4' sx={{
                                        color: '#EDEDED', fontSize: {
                                            md: '22px',
                                            xs: '20px'
                                        }, lineHeight: {
                                            md: '31px',
                                            xs: '28px'
                                        }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'center', mt: 5
                                    }} >
                                        November 19th
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/Events/4.png" alt="img" />
                                    </Box>
                                    <Box sx={{ width: '62px', height: '39px', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/flage2.png" alt="img" />
                                    </Box>
                                    <Typography variant='h4' sx={{
                                        color: '#EDEDED', fontSize: {
                                            md: '22px',
                                            xs: '20px'
                                        }, lineHeight: {
                                            md: '31px',
                                            xs: '28px'
                                        }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'center', mt: 5
                                    }} >
                                        December 10th & 11th
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/Events/5.png" alt="img" />
                                    </Box>
                                    <Box sx={{ width: '62px', height: '39px', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                        {/* <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/flage3.png" alt="img" /> */}
                                    </Box>
                                    <Typography variant='h4' sx={{
                                        color: '#EDEDED', fontSize: {
                                            md: '22px',
                                            xs: '20px'
                                        }, lineHeight: {
                                            md: '31px',
                                            xs: '28px'
                                        }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'center', mt: 5
                                    }} >
                                        Coming Soon
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Typography variant='h4' sx={{
                        color: '#EDEDED', fontSize: {
                            md: '24px',
                            xs: '16px'
                        }, lineHeight: {
                            md: '40px',
                            xs: '24px'
                        }, fontFamily: 'HelveticaRegular', textAlign: 'center', width: {
                            md: '68%'
                        }
                    }} >
                        At Jack Herer Cup Events, we discuss current cannabis issues and how to grow our industry along with judging the best cannabis products in the world!<br />
                        <br />
                        Come and enjoy life music, good food and bump elbows with celebrities and industry leaders!
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Events;