import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./Components/Pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/Pages/itemDetailContainer/ItemDetailContainer";
import  {NavBar}  from "./Components/Layout/navBar/NavBar"; 
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import Cart from "./Components/Pages/cart/Cart";

import Ecommerce from "./Components/Ecommerce";
import Productos from "./Components/Productos";
import Servicios from "./Components/Servicios";

function App() {

  return (
   <BrowserRouter>
   <ThemeProvider theme={customTheme}>

   <Routes>

  <Route element = {<NavBar/>}>
  
<Route path="/" element={<ItemListContainer/>}  />
<Route path="/categoryName/:categoryName" element={<ItemListContainer/>}  />
<Route path="/itemDetail/:id" element={<ItemDetailContainer/>}  />
<Route path="/cart" element={<Cart/>}  />
<Route path = "/Ecommerce" element={<ItemListContainer/>}/>
  <Route path = "/Productos" element={<Productos/>}/>
  <Route path = "/Servicios" element={<Servicios/>}/>
</Route>

<Route path="*" element={<h1>No encuentro</h1>}  />

   </Routes>
   
   </ThemeProvider>
   </BrowserRouter>
   
  );
}
export default App;
