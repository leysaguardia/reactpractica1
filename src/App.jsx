
import './App.css'
import Titulo from './components/Titulo'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'



function App() { 
 

  return (
      
    <div >

       <NavBar/>

       <h1 className='titulo'>{}</h1>

      <ItemListContainer  saludo= {"Mermeladas naturales, libres de aditivos e ingredientes artificiales"} />
  
      

          <Titulo />
    </div>
  )
}

export default App
