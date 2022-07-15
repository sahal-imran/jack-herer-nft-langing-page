import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import AnchorLink from "@mui/material/Link";
import Zoom from 'react-reveal/Zoom';

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
                        }, fontFamily: 'Merriweather', fontWeight: 'regular', textAlign: 'center', position: 'relative', zIndex: 1,
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
                        }, mt: 4, ml: {
                            md: -6
                        }
                    }} >
                        <Zoom cascade>
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: '106px', lineHeight: '157px', fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', mr: 8
                            }} >
                                01
                            </Typography>
                        </Zoom>
                        <Box sx={{
                            width: {
                                md: '70%',
                                xs: '100%'
                            }, minHeight: '112px', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2, borderRadius: '15px', border: '1px solid white'
                        }} >
                            <Zoom cascade>
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '35px',
                                        xs: '30px'
                                    }, lineHeight: {
                                        md: '42px',
                                        xs: '36px'
                                    }, fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', textAlign: 'start',
                                }} >
                                    Launch of Jack Here Cup NFT!
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: {
                            md: '80%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: {
                            md: 'end',
                            xs: "center"
                        }, alignItems: {
                            md: 'center',
                            xs: 'end'
                        }, flexDirection: {
                            md: 'row-reverse',
                            xs: 'column'
                        }, mt: 4, mr: {
                            md: -6
                        }
                    }} >
                        <Zoom cascade>
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: '106px', lineHeight: '157px',fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', ml: 8
                            }} >
                                02
                            </Typography>
                        </Zoom>
                        <Box sx={{
                            width: {
                                md: '70%',
                                xs: '100%'
                            }, minHeight: '112px', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2, borderRadius: '15px', border: '1px solid white'
                        }} >
                            <Zoom cascade>
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '35px',
                                        xs: '30px'
                                    }, lineHeight: {
                                        md: '42px',
                                        xs: '36px'
                                    },fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', textAlign: 'start'
                                }} >
                                    First Event in the United States for 2022 in Oklahoma!
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
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
                        }, mt: 4, ml: {
                            md: -6
                        }
                    }} >
                        <Zoom cascade>
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: '106px', lineHeight: '157px',fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', mr: 8
                            }} >
                                03
                            </Typography>
                        </Zoom>
                        <Box sx={{
                            width: {
                                md: '70%',
                                xs: '100%'
                            }, minHeight: '112px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', p: 2, borderRadius: '15px', border: '1px solid white'
                        }} >
                            <Zoom cascade>
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '35px',
                                        xs: '30px'
                                    }, lineHeight: {
                                        md: '42px',
                                        xs: '36px'
                                    }, fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', textAlign: 'start', position: 'relative', zIndex: 1,
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
                                    }, fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular', textAlign: 'start',
                                }} >
                                    Holders will be able to use the platform to distribute points, buy additional points and more!
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: {
                            md: '80%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: {
                            md: 'end',
                            xs: "center"
                        }, alignItems: {
                            md: 'center',
                            xs: 'end'
                        }, flexDirection: {
                            md: 'row-reverse',
                            xs: 'column'
                        }, mt: 4, mr: {
                            md: -6
                        }
                    }} >
                        <Zoom cascade>
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: '106px', lineHeight: '157px', fontFamily: 'HelveticaBold', ml: 8
                            }} >
                                04
                            </Typography>
                        </Zoom>
                        <Box sx={{
                            width: {
                                md: '70%',
                                xs: '100%'
                            }, minHeight: '112px', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2, borderRadius: '15px', border: '1px solid white'
                        }} >
                            <Zoom cascade>
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '35px',
                                        xs: '30px'
                                    }, lineHeight: {
                                        md: '42px',
                                        xs: '36px'
                                    },fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', textAlign: 'start'
                                }} >
                                    Our Inaugural Jack Herer Cup Colombia will be hosted by DJ Bonics in Medellin, Colombia on November 4th through the 6th!
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
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
                        }, mt: 4, ml: {
                            md: -6
                        }
                    }} >
                        <Zoom cascade>
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: '106px', lineHeight: '157px',fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', mr: 8
                            }} >
                                05
                            </Typography>
                        </Zoom>
                        <Box sx={{
                            width: {
                                md: '70%',
                                xs: '100%'
                            }, minHeight: '112px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', p: 2, borderRadius: '15px', border: '1px solid white'
                        }} >
                            <Zoom cascade>
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '35px',
                                        xs: '30px'
                                    }, lineHeight: {
                                        md: '42px',
                                        xs: '36px'
                                    },fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', textAlign: 'start', position: 'relative', zIndex: 1,
                                }} >
                                    Our Most Famous Event, the 8th Annual Jack Herer Cup Las Vegas
                                    on November 19th 2022
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: {
                            md: '80%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: {
                            md: 'end',
                            xs: "center"
                        }, alignItems: {
                            md: 'center',
                            xs: 'end'
                        }, flexDirection: {
                            md: 'row-reverse',
                            xs: 'column'
                        }, mt: 4, mr: {
                            md: -6
                        }
                    }} >
                        <Zoom cascade>
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: '106px', lineHeight: '157px',fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', ml: 8
                            }} >
                                06
                            </Typography>
                        </Zoom>
                        <Box sx={{
                            width: {
                                md: '70%',
                                xs: '100%'
                            }, minHeight: '112px', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2, borderRadius: '15px', border: '1px solid white'
                        }} >
                            <Zoom cascade>
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '35px',
                                        xs: '30px'
                                    }, lineHeight: {
                                        md: '42px',
                                        xs: '36px'
                                    },fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', textAlign: 'start'
                                }} >
                                    Come Roll With Us at the 2nd Annual Jack Herer Cup Thailand 2 day event on the beach in December.
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
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
                        }, mt: 4, ml: {
                            md: -6
                        }
                    }} >
                        <Zoom cascade>
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: '106px', lineHeight: '157px',fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', mr: 8
                            }} >
                                07
                            </Typography>
                        </Zoom>
                        <Box sx={{
                            width: {
                                md: '70%',
                                xs: '100%'
                            }, minHeight: '112px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', p: 2, borderRadius: '15px', border: '1px solid white'
                        }} >
                            <Zoom cascade>
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '35px',
                                        xs: '30px'
                                    }, lineHeight: {
                                        md: '42px',
                                        xs: '36px'
                                    },fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', textAlign: 'start', position: 'relative', zIndex: 1,
                                }} >
                                    Jack Herer Cup NFT holders will be able to gain access and use their points in Thailand for cannabis friendly travel and accommodations with Get Thai With Us. Website:<AnchorLink target={'_blank'} href='https://getthaiwithus.com/' sx={{ textDecoration: 'none', ml: 1,color:'white' }} >
                                        www.GetThaiWithUs.com
                                    </AnchorLink>
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: {
                            md: '80%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: {
                            md: 'end',
                            xs: "center"
                        }, alignItems: {
                            md: 'center',
                            xs: 'end'
                        }, flexDirection: {
                            md: 'row-reverse',
                            xs: 'column'
                        }, mt: 4, mr: {
                            md: -6
                        }
                    }} >
                        <Zoom cascade>
                            <Typography variant='h4' sx={{
                                color: '#EDEDED', fontSize: '106px', lineHeight: '157px',fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', ml: 8
                            }} >
                                08
                            </Typography>
                        </Zoom>
                        <Box sx={{
                            width: {
                                md: '70%',
                                xs: '100%'
                            }, minHeight: '112px', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2, borderRadius: '15px', border: '1px solid white'
                        }} >
                            <Zoom cascade>
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '35px',
                                        xs: '30px'
                                    }, lineHeight: {
                                        md: '42px',
                                        xs: '36px'
                                    },fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold', textAlign: 'start'
                                }} >
                                    Jack Herer Cup Metaverse Coming Soon..
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Roadmap