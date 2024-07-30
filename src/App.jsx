
import './App.css'
import Titulo from './components/Titulo'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import React from 'react'

function App() { 
 
const agregarAlCarrito = (count) => {

}



  return (
      
    <div >

       <NavBar/>

       <h1 className='titulo'>{}</h1>

      <ItemListContainer  saludo= {"Mermeladas naturales, libres de aditivos e ingredientes artificiales"} />
  
      <ItemCount stock={5} agregarAlCarrito={agregarAlCarrito} />

          <Titulo />
    </div>
  )
}

export default App
