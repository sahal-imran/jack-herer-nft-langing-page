import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Zoom from 'react-reveal/Zoom';

function FAQ() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Box id={'FAQ'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', overflow: 'hidden' }} >
                <Container maxWidth="lgBig" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: {
                        md: 14,
                        xs: 4
                    }, pb: {
                        md: 14,
                        xs: 8
                    }
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
                        FAQs
                    </Typography>
                    <Box sx={{
                        width: {
                            md: '60%',
                            xs: '100%'
                        }, mt: 8
                    }} >
                        <Accordion expanded={expanded === `panel1`} onChange={handleChange(`panel1`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#EDEDED', fontSize: '40px' }} />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                sx={{ backgroundColor: 'black', py: 1 }}
                            >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '30px',
                                        xs: '20px'
                                    }, lineHeight: {
                                        md: '38px',
                                        xs: '28px'
                                    }, fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold',
                                }} >
                                    How many are there?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'black' }} >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    }, 
                                }} >
                                    Total NFTS: 7,777<br />Backstage Level: 22<br />VIP Level: 399<br />Members Level: total NFTs are 7,356
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ mt: 2 }} expanded={expanded === `panel2`} onChange={handleChange(`panel2`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#EDEDED', fontSize: '40px' }} />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                sx={{ backgroundColor: 'black', py: 1 }}
                            >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '30px',
                                        xs: '20px'
                                    }, lineHeight: {
                                        md: '38px',
                                        xs: '28px'
                                    }, fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold',
                                }} >
                                    Which blockchain is it on?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'black' }} >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    },  fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular',
                                }} >
                                    Ethereum (ETH) Blockchain
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ mt: 2 }} expanded={expanded === `panel3`} onChange={handleChange(`panel3`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#EDEDED', fontSize: '40px' }} />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                sx={{ backgroundColor: 'black', py: 1 }}
                            >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '30px',
                                        xs: '20px'
                                    }, lineHeight: {
                                        md: '38px',
                                        xs: '28px'
                                    }, fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold',
                                }} >
                                    How much does the NFT cost?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'black' }} >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    },  fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular',
                                }} >
                                    Backstage Level: Air dropped to Celebrities and Industry Leaders<br />
                                    <br />
                                    VIP Level:<br />
                                    Presale .85 eth<br />
                                    Public Sales 1 ETH<br />
                                    <br />
                                    Members Level:<br />
                                    Presale .420 ETH<br />
                                    Public Sales .6 ETH
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ mt: 2 }} expanded={expanded === `panel4`} onChange={handleChange(`panel4`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#EDEDED', fontSize: '40px' }} />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                sx={{ backgroundColor: 'black', py: 1 }}
                            >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '30px',
                                        xs: '20px'
                                    }, lineHeight: {
                                        md: '38px',
                                        xs: '28px'
                                    }, fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold',
                                }} >
                                    When does the NFT drop?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'black' }} >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    },  fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular',
                                }} >
                                    To be determined
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ mt: 2 }} expanded={expanded === `panel5`} onChange={handleChange(`panel5`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#EDEDED', fontSize: '40px' }} />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                sx={{ backgroundColor: 'black', py: 1 }}
                            >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '30px',
                                        xs: '20px'
                                    }, lineHeight: {
                                        md: '38px',
                                        xs: '28px'
                                    }, fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold',
                                }} >
                                    What is the max amount that is mintable?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'black' }} >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    },  fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular',
                                }} >
                                    Each person will be able to mint up to 4 NFTS
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ mt: 2 }} expanded={expanded === `panel6`} onChange={handleChange(`panel6`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#EDEDED', fontSize: '40px' }} />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                sx={{ backgroundColor: 'black', py: 1 }}
                            >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '30px',
                                        xs: '20px'
                                    }, lineHeight: {
                                        md: '38px',
                                        xs: '28px'
                                    }, fontFamily: ['HelveticaBold','Open Sans'],fontWeight:'bold',
                                }} >
                                    What is Jack Herer Cup?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'black' }} >
                                <Typography variant='h4' sx={{
                                    color: '#EDEDED', fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    },  fontFamily: ['HelveticaRegular','Open Sans'],fontWeight:'regular',
                                }} >
                                    The Jack Herer Cup is the Premier Cannabis Award Show that honors the Best Products and Cannabis Leaders in the Industry. At our events held around the world, we come together to discuss cannabis education and current issues in the cannabis industry.<br />
                                    <br />
                                    We can’t wait to see you there!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default FAQ;

const faq = [
    {
        id: 1,
        question: 'How many are there?',
        answer: ``
    },
    {
        id: 2,
        question: 'Which blockchain is it on?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nesciunt autem voluptates ab ullam dolor vitae, labore, error aperiam, illo quibusdam fugiat. Aut nisi repudiandae iusto, maiores laborum unde voluptas ullam a doloribus illo accusamus modi saepe reprehenderit cupiditate consequatur nobis, debitis dolor! Ipsam, excepturi deleniti. Consequuntur officia harum accusantium'
    },
    {
        id: 3,
        question: 'How much does the NFT cost?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nesciunt autem voluptates ab ullam dolor vitae, labore, error aperiam, illo quibusdam fugiat. Aut nisi repudiandae iusto, maiores laborum unde voluptas ullam a doloribus illo accusamus modi saepe reprehenderit cupiditate consequatur nobis, debitis dolor! Ipsam, excepturi deleniti. Consequuntur officia harum accusantium'
    },
    {
        id: 4,
        question: 'When does the NFT drop?',
        answer: 'Platinum will be 5 ETH and Gold will be 1.5 ETH'
    },
    {
        id: 5,
        question: '',
        answer: 'Eth is the cryptocurrency of Ethereum and it can be purchased on coinbase.'
    },
    {
        id: 6,
        question: 'What is Jack Herer Cup?',
        answer: 'The Jack Herer Cup is the Premier Cannabis Award Show that honors the Best Products and Cannabis Leaders in the Industry. At our events held around the world, we come together to discuss cannabis education and current issues in the cannabis industry.'
    }
]