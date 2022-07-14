import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function PastEvents() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', overflow: 'hidden' }} >
                <Container maxWidth="lgBig" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: {
                        md: 14,
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
                        Take a look at our past events!
                    </Typography>
                    <Box sx={{
                        width: {
                            md: '100vw',
                            xs: '100%'
                        }, mt: 8
                    }} >
                        <Grid container columns={{ md: 12 }} rowSpacing={{ xs: 2, md: 2 }} columnSpacing={{ xs: 0, md: 0 }}>
                            <Grid item xs={12} md={3}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 1.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 3.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 2.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 11.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 8.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 5.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 7.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 6.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 4.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 16.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 14.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 13.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/10.png" alt="img" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="/past event/jack herer 12.png" alt="img" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default PastEvents