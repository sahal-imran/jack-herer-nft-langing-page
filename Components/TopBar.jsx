import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function TopBar() {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return <>
        <Box component={'div'} sx={{
            width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000',pt:4,pb:1
        }} >
            <Container maxWidth="lgBig" sx={{
                height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '98px'
            }} >
                <Typography variant='h4' sx={{
                    color: '#EDEDED', fontSize: {
                        md: '36px',
                        xs: '24px'
                    }, lineHeight: {
                        md: '42px'
                    }, fontFamily: 'HelveticaBold'
                }} >
                    Jack Herer Cup
                </Typography>
                <Box sx={{
                    display: {
                        md: 'flex',
                        xs: 'none'
                    }, justifyContent: 'center', alignItems: 'center',
                }} >
                    <Box sx={{
                        width: '180px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }} >
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/logoMov.gif" alt="Cover Picture here..." />
                    </Box>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', ml: {
                            md: -3
                        }
                    }} >
                        <AnchorLink target={'_blank'} href='https://twitter.com/JackHererCupNFT' sx={{ textDecoration: 'none',mr: 2  }} >
                            <Image
                                src="/twitter.png"
                                alt="icon"
                                width={50}
                                height={50}
                                objectFit={'contain'}
                            />
                        </AnchorLink>
                        <AnchorLink target={'_blank'} href='' sx={{ textDecoration: 'none',mr: 2  }} >
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
                    <Button variant='contained' sx={router.pathname === '/' ? { display: 'none' } : {
                        width: {
                            md: '180px',
                            xs: '200px'
                        }, height: {
                            md: '58px',
                            xs: '60px'
                        }, color: '#000000', background: 'linear-gradient(#FFDEB0,#B49802 )', fontSize: '18px', lineHeight: '21px', fontFamily: 'HelveticaBold', borderRadius: '15px', textTransform: "capitalize", ml: 3
                    }} >
                        Connect Wallet
                    </Button>
                </Box>
                {isOpen ? < MenuIcon onClick={toggleDrawer} sx={{
                    display: {
                        md: 'none'
                    }, color: 'white', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2
                }} /> : < MenuIcon onClick={toggleDrawer} sx={{
                    display: {
                        md: 'none'
                    }, color: 'white', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2
                }} />}
                {/* < CloseIcon onClick={toggleDrawer} sx={{
          color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2, display: {
            md: 'none'
          }
        }} /> */}
            </Container>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='drawer'
                style={{ width: '80%' }}
            >
                <Box component={'div'} sx={{
                    width: '100%', height: '100vh',
                    display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column', backgroundImage: 'linear-gradient(#FFDEB0,#B49802 )'
                }} >
                    <Box sx={{ width: '100%', display: "flex", justifyContent: 'start', alignItems: 'center', height: '60px', px: 2 }} >
                        <ArrowBackIcon onClick={() => toggleDrawer()} sx={{ color: '#000000', fontSize: '40px', cursor: 'pointer' }} />
                    </Box>
                    <Typography variant='h4' sx={{
                        color: 'black', fontSize: {
                            md: '36px',
                            xs: '30px'
                        }, lineHeight: {
                            md: '42px'
                        }, fontFamily: 'HelveticaBold', mt: 2
                    }} >
                        Jack Herer Cup
                    </Typography>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2
                    }} >
                        <AnchorLink target={'_blank'} href='https://twitter.com/JackHererCupNFT' sx={{ textDecoration: 'none',mr: 2  }} >
                            <Image
                                src="/twitter.png"
                                alt="icon"
                                width={50}
                                height={50}
                                objectFit={'contain'}
                            />
                        </AnchorLink>
                        <AnchorLink target={'_blank'} href='' sx={{ textDecoration: 'none',mr: 2  }} >
                            <Image
                                src="/discord.png"
                                alt="icon"
                                width={54}
                                height={54}
                                objectFit={'contain'}
                            />
                        </AnchorLink>
                        <AnchorLink target={'_blank'} href='' sx={{ textDecoration: 'none',mr: 2  }} >
                            <Image
                                src="/instagram.png"
                                alt="icon"
                                width={50}
                                height={50}
                                objectFit={'contain'}
                            />
                        </AnchorLink>
                        <AnchorLink target={'_blank'} href='https://www.instagram.com/jackherercup/?hl=en' sx={{ textDecoration: 'none' }} >
                            <Image
                                src="/opensea.png"
                                alt="icon"
                                width={50}
                                height={50}
                                objectFit={'contain'}
                            />
                        </AnchorLink>
                    </Box>
                    <Button variant='contained' sx={ {
                        width: {
                            md: '180px',
                            xs: '180px'
                        }, height: '50px', color: '#000000', background: 'linear-gradient(#FFDEB0,#B49802 )', fontSize: '18px', lineHeight: '21px', fontFamily: 'HelveticaBold', borderRadius: '15px', textTransform: "capitalize", mt: 3,p:0
                    }} >
                        Connect Wallet
                    </Button>
                </Box>
            </Drawer>
        </Box >
    </>
}

export default TopBar;




{/* <Box sx={{ width: '100%', py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }} >
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
            </Box> */}