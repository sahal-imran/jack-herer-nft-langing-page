import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function MintConfirmation() {
    const router = useRouter();

    const MintSelected = router.query.mintselect;
    console.log(MintSelected);

    const [Mint, setMint] = useState(0);
    const Increment = () => {
        if (Mint >= 4) {
            setMint(4);
        }
        else if (Mint < 0) {
            setMint(0);
        }
        else {
            setMint(Mint + 1)
        }
    }
    const Decrement = () => {
        if (Mint <= 0) {
            setMint(0);
        }
        else if (Mint < 0) {
            setMint(0);
        }
        else {
            setMint(Mint - 1)
        }
    }


    return (
        <>
            <Box sx={{
                width: '100%', minHeight: {
                    md: '100vh'
                }, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', py: 8,mt: {
                    md: 0,
                    xs: -1
                }
            }} >
                <Container maxWidth="lgBig" sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Typography variant='h4' sx={{
                        color: '#EDEDED', fontSize: {
                            md: '57px',
                            xs: '40px'
                        }, lineHeight: {
                            md: '66px'
                        }, fontFamily: 'HelveticaBold'
                    }} >
                        Jack Herer Cup
                    </Typography>
                    <Box sx={{
                        flexGrow: 1, width: {
                            md: '80%',
                            xs: '100%'
                        }, mt: 14
                    }}>
                        <Grid container rowSpacing={{ xs: 8, md: 0 }} columnSpacing={{ xs: 0, md: 12 }}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    width: {
                                        md: '100%',
                                        xs: '100%',
                                    }
                                }} >
                                    <img src={MintSelected === 'member' ? "/member.gif" : "/vip.gif"} alt="img" style={{ width: '100%', height: '100%' }} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', minHeight: {
                                    md:'450px'
                                }, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#292929', borderRadius: '15px', px: 4,py:{
                                    md:4,
                                    xs:8
                                } }} >
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                        <Typography variant='h4' sx={{
                                            color: '#EDEDED', fontSize: {
                                                md: '24px',
                                                xs: '20px'
                                            }, lineHeight: {
                                                md: '42px',
                                                xs: '28px'
                                            }, fontFamily: 'HelveticaBold'
                                        }} >
                                            Total Supply
                                        </Typography>
                                        <Typography variant='h4' sx={{
                                            color: '#EDEDED', fontSize: {
                                                md: '24px',
                                                xs: '16px'
                                            }, lineHeight: {
                                                md: '42px',
                                                xs: '24px'
                                            }, fontFamily: 'HelveticaRegular'
                                        }} >
                                            {MintSelected === 'member' ? '7,357' : '399'}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }} >
                                        <Typography variant='h4' sx={{
                                            color: '#EDEDED', fontSize: {
                                                md: '24px',
                                                xs: '20px'
                                            }, lineHeight: {
                                                md: '42px',
                                                xs: '28px'
                                            }, fontFamily: 'HelveticaBold'
                                        }} >
                                            Public Price
                                        </Typography>
                                        <Typography variant='h4' sx={{
                                            color: '#EDEDED', fontSize: {
                                                md: '24px',
                                                xs: '16px'
                                            }, lineHeight: {
                                                md: '42px',
                                                xs: '24px'
                                            }, fontFamily: 'HelveticaRegular'
                                        }} >
                                            {MintSelected === 'member' ? '.6 ETH' : '1 ETH'}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }} >
                                        <Typography variant='h4' sx={{
                                            color: '#EDEDED', fontSize: {
                                                md: '24px',
                                                xs: '20px'
                                            }, lineHeight: {
                                                md: '42px',
                                                xs: '28px'
                                            }, fontFamily: 'HelveticaBold'
                                        }} >
                                            Amount
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mr: -2 }} >
                                            <ArrowLeftIcon onClick={() => Decrement()} sx={Mint <= 4 && Mint > 0 ? { fontSize: '40px', cursor: 'pointer', color: "white" } : { fontSize: '40px', cursor: 'pointer', color: "#575252" }} />
                                            <Box sx={{ width: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                <Typography variant='h4' sx={{
                                                    color: '#EDEDED', fontSize: {
                                                        md: '24px',
                                                        xs: '20px'
                                                    }, lineHeight: {
                                                        md: '42px',
                                                        xs: '28px'
                                                    }, fontFamily: 'HelveticaRegular'
                                                }} >
                                                    {Mint}
                                                </Typography>
                                            </Box>
                                            <ArrowRightIcon onClick={() => Increment()} sx={Mint >= 0 && Mint < 4 ? { fontSize: '40px', cursor: 'pointer', color: "white" } : { fontSize: '40px', cursor: 'pointer', color: "#575252" }} />
                                        </Box>
                                    </Box>
                                    <Button variant='contained' sx={{
                                        width: {
                                            md: '247px',
                                            xs: '200px'
                                        }, height: {
                                            md: '77px',
                                            xs: '60px'
                                        }, color: '#000000', background: 'linear-gradient(#FFDEB0,#B49802 )', fontSize: {
                                            md: '33px',
                                            xs: '20px'
                                        }, lineHeight: {
                                            md: '38px',
                                            xs: '28'
                                        }, fontFamily: 'HelveticaBold', borderRadius: '15px', textTransform: "capitalize", mt: {
                                            md: 8,
                                            xs: 8
                                        }, textDecoration: 'none'
                                    }} >
                                        Mint now
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default MintConfirmation;