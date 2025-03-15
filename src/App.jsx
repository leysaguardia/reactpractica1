
import './App.css'
import Titulo from './components/Titulo'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'





function App() { 
 
const agregarAlCarrito = (count) => {

}



  return (
      
    <BrowserRouter>

       <NavBar/>

        <Routes>
          <Route path="/" element= {<ItemListContainer  saludo= {"Mermeladas naturales, libres de aditivos e ingredientes artificiales"} />}/>


      

          </Routes>
    </BrowserRouter>
  )
}

export default App
/*<h1 className='titulo'>{}</h1>

      
<ItemCount stock={5} agregarAlCarrito={agregarAlCarrito} />
    <Titulo /> */