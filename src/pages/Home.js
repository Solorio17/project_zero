import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "@fontsource/berkshire-swash"
import "../Home.css"
import CssBaseline from '@mui/material/CssBaseline';
import CoffeePic from '../home_coffee.jpeg'
import Menu from './Menu.js';

function Home() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#4D1802', height: '100vh' }}>
          <h1 className='shopName'>Bear's Cup of Coffee</h1>
          <img className='coffeeImg' src={CoffeePic} alt='This is the main home image which shows a off centered expresso coffee mug with surrounding coffee beans.' />
          <p className='coffeeImgTxt'>" Happiness is not something readymade, you must first wait for bear to make it."</p>
          <div style={{ borderBottom: '2px solid brown', height: '50px' }}>
            Our Menu
          </div>
          <Menu />
        </Box>
      </Container>
    </>
  );
}

export default Home;
