import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Themes/DarkTheme";
import Home from "./components/Home/Home";
import RestaurantDetails from "./components/Restaurant/RestaurantDetails";
import Cart from "./components/cart/Cart";
import Profile from "./components/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./components/State/Authentication/Action";
import { findCart } from "./components/State/Cart/Action";
import { store } from "./components/State/store";
import Routers from "./Routers/Routers";
import { getRestaurantByUserId } from "./components/State/Restaurant/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store => store);
  
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt])

  useEffect(()=>{
    dispatch(getRestaurantByUserId(auth,jwt || jwt));

  },[auth.user])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers/>
    </ThemeProvider>
  );
}

export default App;
