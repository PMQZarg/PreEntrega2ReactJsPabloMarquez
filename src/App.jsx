import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./Components/Pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/Pages/itemDetailContainer/ItemDetailContainer";
import  {NavBar}  from "./Components/Layout/navBar/NavBar"; 

function App() {

  return (
   <BrowserRouter>
   

   <Routes>
  <Route element = {<NavBar/>}>
<Route path="/" element={<ItemListContainer/>}  />
<Route path="/itemDetail/:id" element={<ItemDetailContainer/>}  />
</Route>
   </Routes>
   
   
   </BrowserRouter>
   
  );
}
export default App;
