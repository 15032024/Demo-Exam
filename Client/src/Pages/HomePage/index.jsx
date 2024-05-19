import React from 'react'
import "./index.scss"
import Section from '../../Components/Section'
const HomePage = () => {
  return (
   <>
    <div className="shopping-page">
      <div className="shopping-img">
        <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />
      </div>
      <div className="shopping-page-content">
        <p>75% Off</p>
        <h2>It's Hapening <hr />This Season!</h2>
        <button>Purchase Now</button>
      </div>
    </div>
      <Section/>
      
      </>
  )
}

export default HomePage