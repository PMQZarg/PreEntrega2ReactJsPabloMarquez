import CounterContainer from "../../Common/counter/CounterContainer"

export const ItemDetail = ({productSelected, onAdd}) => {
  return (
    <div>
{}
<h2>{productSelected.title}</h2>
 {}
<CounterContainer stock={productSelected.stock} onAdd={onAdd} />
<button onClick={()=> onAdd(productSelected)}>Agregar al carrito</button>
    </div>
  )
}
