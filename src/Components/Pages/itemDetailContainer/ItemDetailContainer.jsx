import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  //hardcodeo para practicar traer el id 2
 // let id = 2;
     
 const { id } = useParams();

useEffect (()=>{
let producto = products.find ((product)=>product.id === +id ) ;

const getProduct = new Promise ((resolve, reject)=>{
 resolve(producto)
 //reject("error")
});

getProduct.then((res)=> setProductSelected(res)).catch((err)=> console.log(err));
 }, [id]);

const onAdd = (cantidad)=> {
  let obj ={
    ...productSelected, quantity: cantidad,
  };
 
console.log("se agregó al carrito", productSelected, obj)
console.log (cantidad)

}
return <ItemDetail productSelected={productSelected} onAdd={onAdd}/>;


}

export default ItemDetailContainer;