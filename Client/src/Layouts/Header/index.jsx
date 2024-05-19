import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
const Header = () => {
  return (
 <header>
<div className="container">
  <div className="header">
   
      <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
   

   <nav>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Category</NavLink>
        </li>
        <li>
          <NavLink>Men</NavLink>
        </li>
        <li>
          <NavLink>Women</NavLink>
        </li>
        <li>
          <NavLink>Latest</NavLink>
        </li>
        <li>
          <NavLink>Pages</NavLink>
        </li>
      </ul>
    </nav>
 
  </div>
</div>

 </header>
  )
}

export default Header