import CounterContainer from "../../Common/counter/CounterContainer"

export const ItemDetail = ({productSelected, onAdd}) => {
  return (
    <div>
{/*aca el detalle*/}
<h2>{productSelected.title}</h2>
<img src={productSelected.img}alt=""/>
 {}
<CounterContainer stock={productSelected.stock} onAdd={onAdd} />

    </div>
  )
}
