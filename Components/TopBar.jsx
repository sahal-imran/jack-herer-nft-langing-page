import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TopBar() {
    return (
        <>
            <Box sx={{ width: '100%', py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }} >
                <Container maxWidth="lgBig" sx={{
                    height: '100%', display: 'flex', justifyContent: {
                        md: 'space-between',
                        xs: 'center'
                    }, alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }
                }} >
                    <Box sx={{width:'180px',height:'98px',display: {
                        md:'none',
                        xs:'flex'
                    }, justifyContent: 'center', alignItems: 'center'}} >
                        <img style={{width:'100%',height:'100%',objectFit:'contain'}} src="/logoMov.gif" alt="Cover Picture here..." />
                    </Box>
                    <Typography variant='h4' sx={{ color: '#EDEDED', fontSize: '36px', lineHeight: '42px', fontFamily: 'HelveticaBold',mt:{
                        md:0,
                        xs:-2
                    },position:'relative',zIndex:1,mb:{
                        md:0,
                        xs:2
                    } }} >
                        Jack Herer Cup
                    </Typography>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }} >
                         <Box sx={{width:'180px',height:'98px',display: {
                        md:'flex',
                        xs:'none'
                    }, justifyContent: 'center', alignItems: 'center'}} >
                        <img style={{width:'100%',height:'100%',objectFit:'contain'}} src="/logoMov.gif" alt="Cover Picture here..." />
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

export default TopBar;