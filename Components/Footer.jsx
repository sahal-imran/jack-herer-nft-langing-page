import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Footer() {
    return (
        <>
            <Box sx={{ width: '100%', py: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }} >
                <Container maxWidth="lgBig" sx={{
                    height: '100%', display: 'flex', justifyContent: {
                        md: 'space-between',
                        xs: 'center'
                    }, alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }
                }} >
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }} >
                        <Link href='' sx={{
                            color: '#EDEDED', fontSize: {
                                md: '24px',
                                xs: '18px'
                            }, lineHeight: {
                                md: '88px',
                                xs: '26px'
                            }, fontFamily: 'HelveticaRegular',textDecoration:'none',mt:{
                                md:0,
                                xs:2
                            }
                        }} >
                            Home
                        </Link>
                        <Link href='' sx={{
                            color: '#EDEDED', fontSize: {
                                md: '24px',
                                xs: '18px'
                            }, lineHeight: {
                                md: '88px',
                                xs: '26px'
                            }, fontFamily: 'HelveticaRegular',textDecoration:'none',mx:{
                                md:4
                            },mt:{
                                md:0,
                                xs:2
                            }
                        }} >
                            Mint
                        </Link>
                        <Link href='' sx={{
                            color: '#EDEDED', fontSize: {
                                md: '24px',
                                xs: '18px'
                            }, lineHeight: {
                                md: '88px',
                                xs: '26px'
                            }, fontFamily: 'HelveticaRegular',textDecoration:'none',mt:{
                                md:0,
                                xs:2
                            }
                        }} >
                            FAQ
                        </Link>
                    </Box>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }} >
                        <Box sx={{ width: '180px', height: '98px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/logoMov.gif" alt="Cover Picture here..." />
                        </Box>
                        <Box sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', ml: {
                                md: -3
                            }
                        }} >
                            <Link href='' sx={{ textDecoration: 'none' }} >
                                <Image
                                    src="/twitter.png"
                                    alt="icon"
                                    width={50}
                                    height={50}
                                    objectFit={'contain'}
                                />
                            </Link>
                            <Link href='' sx={{ textDecoration: 'none', mx: 2 }} >
                                <Image
                                    src="/instagram.png"
                                    alt="icon"
                                    width={50}
                                    height={50}
                                    objectFit={'contain'}
                                />
                            </Link>
                            <Link href='' sx={{ textDecoration: 'none' }} >
                                <Image
                                    src="/opensea.png"
                                    alt="icon"
                                    width={50}
                                    height={50}
                                    objectFit={'contain'}
                                />
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Footer