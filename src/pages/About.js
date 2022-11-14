import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CoffeeCup from '../coffeecup1.webp'
import "@fontsource/berkshire-swash"
import "../Home.css"


const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function About() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', flexGrow: 1 }}>
                    <Grid container spacing={0} >
                        <Grid item xs={7}>
                            <Item>
                                <Typography variant="overline" style={{ fontSize: '45px' }}>
                                    Premium Roasts. 100% Curated Blends. Experience Euphoria.
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={5}>
                            <Item style={{ padding: "0px" }}>
                                <img src={CoffeeCup} style={{ width: '480px', height: '400px' }} />
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item style={{ padding: "0px" }}>
                                <img src={CoffeeCup} style={{ width: '480px', height: '400px' }} />
                            </Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <Typography variant="h3">
                                    Bear's Cup of Coffee
                                </Typography>
                                <br />
                                <Typography variant="h5">
                                    Founded by Bear / A&J 2022
                                </Typography>
                                <br />
                                <Typography variant="h6">
                                    Our Story
                                </Typography>
                                <br />
                                <Typography variant="overline" gutterBottom>
                                    Bears Cup of Coffee came to life through the idea of the bear himself.
                                    "Meow Meow Meow meow Meow  Meow Meow Meow Meow"
                                    ("I Always saw my mother drink expensive cheap coffee, she had spent
                                    thousands of dollars, and I knew I needed to take action.
                                    "). 5 Great Roasts to Choose from, we sought to curate the best blend
                                    of coffee beans and happiness. Each blend has great unique flavors and
                                    will take your coffee drinking experience to the next level.
                                    Trademark 2022

                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <h1>Jason</h1>
                                <h3>This is my title</h3>
                                <h6>This is a description</h6>
                                <p>This is going to be a summary of the content inside this item</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <h1>Jason</h1>
                                <h3>This is my title</h3>
                                <h6>This is a description</h6>
                                <p>This is going to be a summary of the content inside this item</p>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default About;