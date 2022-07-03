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

function Mint() {

  const [Hide_Main_Mint_Section_For_VIP_Mint, Set_Hide_Main_Mint_Section_For_VIP_Mint] = useState(false);
  const [Hide_Main_Mint_Section_For_Member_Mint, Set_Hide_Main_Mint_Section_For_Member_Mint] = useState(false);
  const [Hide_Main, Set_Hide_Main] = useState(true);

  const checkUI = (Package) => {
    if (Package === 'vip') {
      Set_Hide_Main_Mint_Section_For_VIP_Mint(true);
      Set_Hide_Main_Mint_Section_For_Member_Mint(false);
      Set_Hide_Main(false);
    }
    else if (Package === 'member') {
      Set_Hide_Main_Mint_Section_For_VIP_Mint(false);
      Set_Hide_Main_Mint_Section_For_Member_Mint(true);
      Set_Hide_Main(false);
    }
    else {
      Set_Hide_Main(true);
    }
  }

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
          <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            <Typography variant='h4' sx={{
              color: '#EDEDED', fontSize: {
                md: '57px',
                xs: '40px'
              }, lineHeight: {
                md: '66px'
              }, fontFamily: 'HelveticaBold',textAlign:'center'
            }} >
              Become a VIP or Member
            </Typography>
            <Typography variant='h4' sx={{
              color: '#EDEDED', fontSize: {
                md: '35px',
                xs: '30px'
              }, lineHeight: {
                md: '52px'
              }, fontFamily: 'HelveticaRegular', mt: 2,textAlign:'center'
            }} >
              Start by selecting one of the following:
            </Typography>
            <Box sx={{
              flexGrow: 1, width: {
                md: '80%',
                xs: '100%'
              }, mt: 10
            }}>
              <Grid container rowSpacing={{ xs: 8, md: 0 }} columnSpacing={{ xs: 0, md: 2 }}>
                <Grid item xs={12} md={6}>
                  <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '48px', flexDirection: 'column', transition: 'all 0.3s ease'
                  }} >
                    <Box onClick={() => checkUI('vip')} sx={{
                      width: {
                        md: '470px',
                        xs: '100%', cursor: 'pointer'
                      }
                    }} >
                      <img src="/vip.gif" alt="img" style={{ width: '100%', height: '100%' }} />
                    </Box>
                    <Typography variant='h4' sx={{
                      color: '#EDEDED', fontSize: {
                        md: '47px',
                        xs: '30px'
                      }, lineHeight: {
                        md: '55px'
                      }, fontFamily: 'HelveticaBold', mt: 4
                    }} >
                      VIP
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '48px', flexDirection: 'column', transition: 'all 0.3s ease'
                  }} >
                    <Box onClick={() => checkUI('member')} sx={{
                      width: {
                        md: '470px',
                        xs: '100%', cursor: 'pointer'
                      }
                    }} >
                      <img src="/member.gif" alt="img" style={{ width: '100%', height: '100%' }} />
                    </Box>
                    <Typography variant='h4' sx={{
                      color: '#EDEDED', fontSize: {
                        md: '47px',
                        xs: '30px'
                      }, lineHeight: {
                        md: '55px'
                      }, fontFamily: 'HelveticaBold', mt: 4
                    }} >
                      Member
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* ++++++++++++++++++ */}
          {/* Main  minting menu */}
          {/* ++++++++++++++++++ */}
          <Box sx={Hide_Main ? {
            width: {
              md: '70%',
              xs: '100%'
            }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
              md: 'row',
              xs: 'column'
            }, mt: {
              md: 18,
              xs: 14
            }, borderRadius: '15px', overflow: 'hidden'
          } : { display: 'none' }} >
            <Box sx={{
              width: {
                md: '50%',
                xs: '100%'
              }, height: {
                md: '840px',
                xs: '550px'
              }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: 'linear-gradient(to bottom, #3F3F3F,#959595)', borderRight: {
                md: '1px solid white'
              }, borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', pl: 4, pr: {
                md: 'unset',
                xs: 4
              }, borderTopRightRadius: {
                md: 'unset',
                xs: '15px'
              },
              borderBottomRightRadius: {
                md: 'unset',
                xs: '15px'
              }
            }} >
              <Box sx={{
                width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50%', borderBottom: '1px solid white', pr: {
                  md: 4
                }
              }} >
                <Typography variant='h4' sx={{
                  color: '#EDEDED', fontSize: {
                    md: '47px',
                    xs: '30px'
                  }, lineHeight: {
                    md: '57px'
                  }, fontFamily: 'HelveticaBold'
                }} >
                  VIP
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 8 }} >
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
                      398
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }} >
                    <Typography variant='h4' sx={{
                      color: '#EDEDED', fontSize: {
                        md: '24px',
                        xs: '20px'
                      }, lineHeight: {
                        md: '42px',
                        xs: '28px'
                      }, fontFamily: 'HelveticaBold'
                    }} >
                      Presale Price
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
                      .85 ETH
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{
                width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50%', borderTop: '1px solid white', pr: {
                  md: 4
                }
              }} >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Typography variant='h4' sx={{
                      color: '#EDEDED', fontSize: {
                        md: '24px',
                        xs: '20px'
                      }, lineHeight: {
                        md: '28px',
                        xs: '24px'
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
                      399 - Presale
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }} >
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
                      1 ETH
                    </Typography>
                  </Box>
                  <Link href="/mint/vip">
                    <a style={{ textDecoration: 'none' }} >
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
                          xs: 4
                        }, textDecoration: 'none'
                      }} >
                        Mint now
                      </Button>
                    </a>
                  </Link>
                </Box>
              </Box>
            </Box>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {/*++++++++++++++++++++++++++++ Part Right ++++++++++++++++++++++++++ */}
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <Box sx={{
              width: {
                md: '50%',
                xs: '100%'
              }, height: {
                md: '840px',
                xs: '550px'
              }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderLeft: {
                md:'1px solid white'
              }, background: 'linear-gradient(to bottom, #437E62,#85C2A1)', borderTopRightRadius: '15px', borderBottomRightRadius: '15px', pr: {
                md: 4,
                xs: 4
              }, pl: {
                md: 0,
                xs: 4
              }, borderBottomLeftRadius: {
                md: 'unset',
                xs: '15px'
              }, borderTopLeftRadius: {
                md: 'unset',
                xs: '15px'
              },
              mt: {
                md: 0,
                xs: 4
              }
            }} >
              <Box sx={{
                width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50%', borderBottom: '1px solid white', pl: {
                  md: 4
                }
              }} >
                <Typography variant='h4' sx={{
                  color: '#EDEDED', fontSize: {
                    md: '47px',
                    xs: '30px'
                  }, lineHeight: {
                    md: '57px'
                  }, fontFamily: 'HelveticaBold'
                }} >
                  Members
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 8 }} >
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
                      7,357
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }} >
                    <Typography variant='h4' sx={{
                      color: '#EDEDED', fontSize: {
                        md: '24px',
                        xs: '20px'
                      }, lineHeight: {
                        md: '42px',
                        xs: '28px'
                      }, fontFamily: 'HelveticaBold'
                    }} >
                      Presale Price
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
                      .420 ETH
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{
                width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50%', borderTop: '1px solid white', pl: {
                  md: 4
                }
              }} >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Typography variant='h4' sx={{
                      color: '#EDEDED', fontSize: {
                        md: '24px',
                        xs: '20px'
                      }, lineHeight: {
                        md: '28px',
                        xs: '24px'
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
                      7,357 - Presale
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }} >
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
                      .6 ETH
                    </Typography>
                  </Box>
                  <Link href="/mint/member">
                    <a style={{ textDecoration: 'none' }} >
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
                          xs: 4
                        }, textDecoration: 'none'
                      }} >
                        Mint now
                      </Button>
                    </a>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* ++++++++++++++++++ */}
          {/*         end        */}
          {/* ++++++++++++++++++ */}
          <Box sx={Hide_Main_Mint_Section_For_VIP_Mint ? {
            width: {
              md: '70%',
              xs: '100%'
            }, mt: {
              md: 18,
              xs: 14
            }
          } : { display: 'none' }} >
            <Grid container rowSpacing={{ xs: 8, md: 0 }} columnSpacing={{ xs: 0, md: 8 }}>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                }} >
                  <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/vip.gif" alt="img" />
                  </Box>
                  <Typography variant='h4' sx={{
                    color: '#EDEDED', fontSize: {
                      md: '20px',
                      xs: '16px'
                    }, lineHeight: {
                      md: '28px',
                      xs: '24px'
                    }, fontFamily: 'HelveticaRegular', textAlign: 'center', mt: 2
                  }} >
                    - Access to exclusive VIP Level Only<br />
                    areas at all events. <br />
                    <br />
                    - Member will receive 18,000 points to be used to attend events and gain additional access. <br />
                    <br />
                    -  Will receive free merchandise with each event that the member attends
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: 'linear-gradient(to bottom, #3F3F3F,#959595)', borderRadius: '15px', height: '100%', px: 4, py: {
                    md: 0,
                    xs: 8
                  }
                }} >
                  <Typography variant='h4' sx={{
                    color: '#EDEDED', fontSize: {
                      md: '47px',
                      xs: '30px'
                    }, lineHeight: {
                      md: '57px'
                    }, fontFamily: 'HelveticaBold'
                  }} >
                    VIP
                  </Typography>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 10 }} >
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
                        399
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
                        1 ETH
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
                    <Link href="/mint/vip">
                      <a style={{ textDecoration: 'none' }} >
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
                            md: 12,
                            xs: 4
                          }, textDecoration: 'none'
                        }} >
                          Mint now
                        </Button>
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={Hide_Main_Mint_Section_For_Member_Mint ? {
            width: {
              md: '70%',
              xs: '100%'
            }, mt: {
              md: 18,
              xs: 14
            }
          } : { display: 'none' }} >
            <Grid container rowSpacing={{ xs: 8, md: 0 }} columnSpacing={{ xs: 0, md: 8}}>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                }} >
                  <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/member.gif" alt="img" />
                  </Box>
                  <Typography variant='h4' sx={{
                    color: '#EDEDED', fontSize: {
                      md: '20px',
                      xs: '16px'
                    }, lineHeight: {
                      md: '28px',
                      xs: '24px'
                    }, fontFamily: 'HelveticaRegular', textAlign: 'center', mt: 2
                  }} >
                    - Access to exclusive Members Level Only <br />
                    areas at all events. <br />
                    <br />
                    - Member will receive 8,000 points to be used to attend events and gain additional access. <br />
                    <br />
                    -  Will receive free merchandise with each event that the member attends
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: 'linear-gradient(to bottom, #437E62,#85C2A1)', borderRadius: '15px', height: '100%', px: 4, py: {
                    md: 0,
                    xs: 8
                  }
                }} >
                  <Typography variant='h4' sx={{
                    color: '#EDEDED', fontSize: {
                      md: '47px',
                      xs: '30px'
                    }, lineHeight: {
                      md: '57px'
                    }, fontFamily: 'HelveticaBold'
                  }} >
                    VIP
                  </Typography>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 10 }} >
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
                        7,357
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
                        .6 ETH
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
                    <Link href="/mint/member">
                      <a style={{ textDecoration: 'none' }} >
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
                            md: 12,
                            xs: 4
                          }, textDecoration: 'none'
                        }} >
                          Mint now
                        </Button>
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Mint;