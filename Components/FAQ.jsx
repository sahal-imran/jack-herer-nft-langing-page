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
                        {
                            faq.map((item, index) => {
                                return <Accordion key={index} sx={{ mt: 2 }} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
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
                                            }, fontFamily: 'HelveticaBold'
                                        }} >
                                            {item.question}
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
                                            }, fontFamily: 'HelveticaRegular'
                                        }} >
                                            {item.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            })
                        }
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
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nesciunt autem voluptates ab ullam dolor vitae, labore, error aperiam, illo quibusdam fugiat. Aut nisi repudiandae iusto, maiores laborum unde voluptas ullam a doloribus illo accusamus modi saepe reprehenderit cupiditate consequatur nobis, debitis dolor! Ipsam, excepturi deleniti. Consequuntur officia harum accusantium'
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
        question: 'What is the max amount that is mintable?',
        answer: 'Eth is the cryptocurrency of Ethereum and it can be purchased on coinbase.'
    },
    {
        id: 6,
        question: 'What is Jack Herer Cup?',
        answer: 'This collection will be available for purchase July 28th, 2022. Whitelist will be able to mint an hour before.'
    }
]