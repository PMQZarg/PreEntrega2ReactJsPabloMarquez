import { ThemeProvider } from "@mui/material";
import ItemListContainer from "./Components/Pages/itemListContainer/ItemListContainer";
import { customTheme } from "./themeConfig";
import { ThemeContext } from "@emotion/react";
import CounterContainer from "./Components/Common/counter/CounterContainer";

import CartWidget from "./Components/Common/cartWidget/CartWidget";
import ResponsiveAppBar from "./Components/Layout/navBar2/NavBar2";
import { useState } from "react";
import ItemDetailContainer from "./Components/Pages/itemDetailContainer/ItemDetailContainer";
import { ItemDetail } from "./Components/Pages/itemDetailContainer/ItemDetail";
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
    <ResponsiveAppBar/>
  <ItemListContainer/>
<ItemDetailContainer/>
    <ThemeProvider theme = {customTheme}>
 
    </ThemeProvider>
    </>
  );
}
export default App;
