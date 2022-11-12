import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CoffeeCup from '../coffeecup1.webp'


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
                                <h1>Jason</h1>
                                <h3>This is my title</h3>
                                <h6>This is a description</h6>
                                <p>This is going to be a summary of the content inside this item</p>
                            </Item>
                        </Grid>
                        <Grid item xs={5}>
                            <Item style={{ height: 'inherit' }}>
                                <h1>Jason</h1>
                                <h6>This is a description</h6>
                                <p>This is going to be a summary of the content inside this item</p>
                            </Item>
                        </Grid>


                        <Grid item xs={4}>
                            <Item>
                                <h1>Jason</h1>
                                <h3>This is my title</h3>
                                <h6>This is a description</h6>
                                <p>This is going to be a summary of the content inside this item</p>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <h1>Jason</h1>
                                <h3>This is my title</h3>
                                <h6>This is a description</h6>
                                <p>This is going to be a summary of the content inside this item</p>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
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