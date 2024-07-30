
import { useState } from "react"
const ItemCount = ({stock,agregarAlCarrito}) => {
    Const [ count, setCout] = useState(1)

    const aumentar = () => {

        if(count < stock ){
        setCout( count + 1)
        }
    }
    const disminuir = ()  => {
        if( count > 1){
            setCout( count- 1)
         }
    }


 

  return (
    <div>
        <button onClick={disminuir}>-</button>
        <p>{count}</p>
        <button onClick={aumentar}>+</button>

        <button onClick={ () =>agregarAlCarrito(count)} >Agregar al carrito</button>

    </div>
  )
}

export default ItemCount