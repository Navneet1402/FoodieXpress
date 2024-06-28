import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Themes/DarkTheme';
import Home from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Cart from './components/cart/Cart';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
  <Navbar/>
  {/* {<Home/>} */}
  {/* <RestaurantDetails/> */}
  <Cart/>
      
    </ThemeProvider>
  );
}

export default App;
