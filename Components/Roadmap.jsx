import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Roadmap() {
    return (
        <>
            <Box id={'Roadmap'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', overflow: 'hidden' }} >
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
                        Roadmap
                    </Typography>
                    <Box sx={{
                        width: {
                            md: '80%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: {
                            md: 'start',
                            xs: 'center'
                        }, alignItems: {
                            md: 'center',
                            xs: 'start'
                        }, flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }, mt: 4
                    }} >
                        <Typography variant='h4' sx={{
                            color: '#EDEDED', fontSize: '106px', lineHeight: '157px', fontFamily: 'HelveticaBold', mr: 8
                        }} >
                            01
                        </Typography>
                        <Box sx={{
                            width: {
                                md: '70%',
                                xs: '100%'
                            }, minHeight: '112px', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2, borderRadius: '15px', border: '1px solid white'
                        }} >
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: {
                                    md: '35px',
                                    xs: '30px'
                                }, lineHeight: {
                                    md: '42px',
                                    xs: '36px'
                                }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'start',
                            }} >
                                Launch of Jack Here Cup NFT!
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: {
                        md:'80%',
                        xs:'100%'
                    }, display: 'flex', justifyContent: {
                        md:'end',
                        xs:"center"
                    }, alignItems: {
                        md:'center',
                        xs:'end'
                    }, flexDirection: {
                        md:'row-reverse',
                        xs:'column'
                    }, mt: 4 }} >
                        <Typography variant='h4' sx={{
                            color: '#EDEDED', fontSize: '106px', lineHeight: '157px', fontFamily: 'HelveticaBold', ml: 8
                        }} >
                            02
                        </Typography>
                        <Box sx={{ width: {
                            md:'70%',
                            xs:'100%'
                        }, minHeight: '112px', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2, borderRadius: '15px', border: '1px solid white' }} >
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: {
                                    md: '35px',
                                    xs: '30px'
                                }, lineHeight: {
                                    md: '42px',
                                    xs: '36px'
                                }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'start'
                            }} >
                                First Event in the United States for 2022 in Oklahoma!
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{  width: {
                            md: '80%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: {
                            md: 'start',
                            xs: 'center'
                        }, alignItems: {
                            md: 'center',
                            xs: 'start'
                        }, flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }, mt: 4 }} >
                        <Typography variant='h4' sx={{
                            color: '#EDEDED', fontSize: '106px', lineHeight: '157px', fontFamily: 'HelveticaBold', mr: 8
                        }} >
                            03
                        </Typography>
                        <Box sx={{ width: {
                            md:'70%',
                            xs:'100%'
                        }, minHeight: '112px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', p: 2, borderRadius: '15px', border: '1px solid white' }} >
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: {
                                    md: '35px',
                                    xs: '30px'
                                }, lineHeight: {
                                    md: '42px',
                                    xs: '36px'
                                }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'start', position: 'relative', zIndex: 1,
                            }} >
                                Completion of Jack Herer Cup Web3 Platform!
                            </Typography>
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: {
                                    md: '24px',
                                    xs: '16px'
                                }, lineHeight: {
                                    md: '42px',
                                    xs: '24px'
                                }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'start',
                            }} >
                                Holders will be able to use the platform to distribute points, buy additional points and more!
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: {
                        md:'80%',
                        xs:'100%'
                    }, display: 'flex', justifyContent: {
                        md:'end',
                        xs:"center"
                    }, alignItems: {
                        md:'center',
                        xs:'end'
                    }, flexDirection: {
                        md:'row-reverse',
                        xs:'column'
                    }, mt: 4 }} >
                        <Typography variant='h4' sx={{
                            color: '#EDEDED', fontSize: '106px', lineHeight: '157px', fontFamily: 'HelveticaBold', ml: 8
                        }} >
                            04
                        </Typography>
                        <Box sx={{ width: {
                            md:'70%',
                            xs:'100%'
                        }, minHeight: '112px', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2, borderRadius: '15px', border: '1px solid white' }} >
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: {
                                    md: '35px',
                                    xs: '30px'
                                }, lineHeight: {
                                    md: '42px',
                                    xs: '36px'
                                }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'start'
                            }} >
                                Our Most Famous Event for Jack Herer Cup in Las Vegas at the Hard Rock Cafe!
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: {
                            md: '80%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: {
                            md: 'start',
                            xs: 'center'
                        }, alignItems: {
                            md: 'center',
                            xs: 'start'
                        }, flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }, mt: 4 }} >
                        <Typography variant='h4' sx={{
                            color: '#EDEDED', fontSize: '106px', lineHeight: '157px', fontFamily: 'HelveticaBold', mr: 8
                        }} >
                            05
                        </Typography>
                        <Box sx={{ width: {
                            md:'70%',
                            xs:'100%'
                        }, minHeight: '112px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', p: 2, borderRadius: '15px', border: '1px solid white' }} >
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: {
                                    md: '35px',
                                    xs: '30px'
                                }, lineHeight: {
                                    md: '42px',
                                    xs: '36px'
                                }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'start', position: 'relative', zIndex: 1,
                            }} >
                                2 Day Thailand Event on the Beach!
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: {
                        md:'80%',
                        xs:'100%'
                    }, display: 'flex', justifyContent: {
                        md:'end',
                        xs:"center"
                    }, alignItems: {
                        md:'center',
                        xs:'end'
                    }, flexDirection: {
                        md:'row-reverse',
                        xs:'column'
                    }, mt: 4 }} >
                        <Typography variant='h4' sx={{
                            color: '#EDEDED', fontSize: '106px', lineHeight: '157px', fontFamily: 'HelveticaBold', ml: 8
                        }} >
                            06
                        </Typography>
                        <Box sx={{ width: {
                            md:'70%',
                            xs:'100%'
                        }, minHeight: '112px', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2, borderRadius: '15px', border: '1px solid white' }} >
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: {
                                    md: '35px',
                                    xs: '30px'
                                }, lineHeight: {
                                    md: '42px',
                                    xs: '36px'
                                }, fontFamily: 'Merriweather', fontWeight: 'regular', textTransform: 'capitalize', textAlign: 'start'
                            }} >
                                Jack Herer Cup Metaverse Coming soon….
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Roadmap