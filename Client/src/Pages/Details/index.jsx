import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDataById } from '../../Services/services'

const Details = () => {

  const [shop, setShop] = useState({})
  const { id } = useParams();
  useEffect(() => {
    getDataById(id).then(res => {
console.log(res.data.data);
      setShop(res.data.data)
    })


  }, [])


  return (
    <div id='details'>
      <div className="container">
        <div className="details">
          <div className="card">
            <img src={products.imageUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details