import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AnchorLink from '@mui/material/Link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BarLink from "next/link";
import Typography from '@mui/material/Typography';
import { Link } from "react-scroll";
function Footer() {
    const router = useRouter();
    return (
        <>
            <Box sx={{
                width: '100%', py: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', position: 'relative', zIndex: 2, mt: {
                    md: 0,
                    xs: -1
                }
            }} >
                <Container maxWidth="lgBig" sx={router.pathname === '/' ? {
                    height: '100%', display: 'flex', justifyContent: {
                        md: 'space-between',
                        xs: 'center'
                    }, alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }
                } : {
                    height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
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
                        <BarLink href='/' >
                            <a style={{ textDecoration: 'none' }} >
                                <Typography variant='h4' sx={router.pathname === '/' ? {
                                    color: '#707070', fontSize: {
                                        md: '24px',
                                        xs: '18px'
                                    }, lineHeight: {
                                        md: '88px',
                                        xs: '26px'
                                    }, fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular', textDecoration: 'none', mt: {
                                        md: 0,
                                        xs: 2
                                    }
                                } : {
                                    color: '#EDEDED', fontSize: {
                                        md: '24px',
                                        xs: '18px'
                                    }, lineHeight: {
                                        md: '88px',
                                        xs: '26px'
                                    }, fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular', textDecoration: 'none', mt: {
                                        md: 0,
                                        xs: 2
                                    }
                                }} >
                                    Home
                                </Typography>
                            </a>
                        </BarLink>
                        <BarLink href='/mint' >
                            <a style={{ textDecoration: 'none' }} >
                                <Typography variant='h4' sx={router.pathname === '/mint' ? {
                                    color: '#707070', fontSize: {
                                        md: '24px',
                                        xs: '18px'
                                    }, lineHeight: {
                                        md: '88px',
                                        xs: '26px'
                                    }, fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular', textDecoration: 'none', mt: {
                                        md: 0,
                                        xs: 2
                                    }, mx: {
                                        md: 4
                                    }
                                } : {
                                    color: '#EDEDED', fontSize: {
                                        md: '24px',
                                        xs: '18px'
                                    }, lineHeight: {
                                        md: '88px',
                                        xs: '26px'
                                    }, fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular', textDecoration: 'none', mt: {
                                        md: 0,
                                        xs: 2
                                    }, mx: {
                                        md: 4
                                    }
                                }} >
                                    Mint
                                </Typography>
                            </a>
                        </BarLink>
                        {
                            router.pathname === '/' ? <Link
                                duration={500}
                                className={"ScrollLink"}
                                to={'FAQ'}
                                spy={true}
                                activeClass={"active"}
                                smooth={true}
                            >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '24px',
                                        xs: '18px'
                                    }, lineHeight: {
                                        md: '88px',
                                        xs: '26px'
                                    }, fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular', textDecoration: 'none', mt: {
                                        md: 0,
                                        xs: 2
                                    }, cursor: 'pointer'
                                }} >
                                    Faq
                                </Typography>
                            </Link> : <BarLink href='/' >
                                <a style={{ textDecoration: 'none' }} >
                                    <Typography variant='h4' sx={{
                                        color: '#EDEDED', fontSize: {
                                            md: '24px',
                                            xs: '18px'
                                        }, lineHeight: {
                                            md: '88px',
                                            xs: '26px'
                                        }, fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular', textDecoration: 'none', mt: {
                                            md: 0,
                                            xs: 2
                                        }
                                    }} >
                                        Faq
                                    </Typography>
                                </a>
                            </BarLink>
                        }
                    </Box>
                    <Box sx={router.pathname === '/' ? {
                        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    } : { display: 'none' }} >
                        <Box sx={{ width: '180px', height: '98px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/logoMov.gif" alt="Cover Picture here..." />
                        </Box>
                        <Box sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', ml: {
                                md: -3
                            }
                        }} >
                            <AnchorLink target={'_blank'} href='https://twitter.com/JackHererCupNFT' sx={{ textDecoration: 'none', mr: 2 }} >
                                <Image
                                    src="/twitter.png"
                                    alt="icon"
                                    width={50}
                                    height={50}
                                    objectFit={'contain'}
                                />
                            </AnchorLink>
                            <AnchorLink target={'_blank'} href='https://discord.gg/P66BrmED' sx={{ textDecoration: 'none', mr: 2 }} >
                                <Image
                                    src="/discord.png"
                                    alt="icon"
                                    width={54}
                                    height={54}
                                    objectFit={'contain'}
                                />
                            </AnchorLink>
                            <AnchorLink target={'_blank'} href='https://www.instagram.com/jackherercup/?hl=en' sx={{ textDecoration: 'none', mr: 2 }} >
                                <Image
                                    src="/instagram.png"
                                    alt="icon"
                                    width={50}
                                    height={50}
                                    objectFit={'contain'}
                                />
                            </AnchorLink>
                            <AnchorLink target={'_blank'} href='' sx={{ textDecoration: 'none' }} >
                                <Image
                                    src="/opensea.png"
                                    alt="icon"
                                    width={50}
                                    height={50}
                                    objectFit={'contain'}
                                />
                            </AnchorLink>
                        </Box>
                    </Box>
                </Container>
            </Box >
        </>
    )
}

export default Footer