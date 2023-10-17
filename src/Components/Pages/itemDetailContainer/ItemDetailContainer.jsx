import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ItemDetail } from "./ItemDetail";


const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  //hardcodeo para practicar traer el id 2

    let id=2;
     


useEffect (()=>{
let producto = products.find ((product)=>product.id === id ) ;

const getProduct = new Promise ((resolve, reject)=>{
 resolve(producto)
 //reject("error")
});

getProduct.then((res)=> setProductSelected(res)).catch((err)=> console.log(err))
 

}, [id]);
const onAdd = (cantidad)=> {
  let obj ={
    ...productSelected, quantity: cantidad,
  };
console.log("este es el producto que se agrega", obj);

return <ItemDetail productSelected={productSelected}/>;
}
}

export default ItemDetailContainer;