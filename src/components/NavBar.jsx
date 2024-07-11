import CartWidget from "./CartWidget"

import "./navbar.css"


const NavBar = () => {
  return (
    <nav className="navbar">

     <div> <img width={80}  height={50}   src="src\assets\Logo1Nmayusc.png" alt="" /></div>
      <div className="brand">
          Naturel Gourmet

      </div>
       
        <ul>
             <li>Inicio</li>
             <li>Nosotros</li>
             <li>Tienda</li>
             <li>Contacto</li>


        </ul>


      <CartWidget/>

    </nav>

  )
}

export default NavBar