import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/Pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/Pages/itemDetailContainer/ItemDetailContainer";
import { NavBar } from "./Components/Layout/navBar/NavBar";
import Container from '@mui/material/Container';
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import Cart from "./Components/Pages/cart/Cart";



function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route element={<NavBar/>}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName"element={<ItemListContainer />}/>
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
           <Route path="Ecommerce" element={<ItemListContainer/>} />
          </Route>

          <Route path="*" element={<h1>No encuentro</h1>} />
        </Routes>
        <Container/>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
