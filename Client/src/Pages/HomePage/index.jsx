import React, { useEffect, useState } from 'react'
import "./index.scss"
import Section from '../../Components/Section'
import { getAllData } from '../../Services/services'
import Meta from 'antd/es/card/Meta'
import { Col, Card, Row } from 'antd'
import { NavLink } from 'react-router-dom'
const HomePage = () => {

  const [products, setproducts] = useState(null)
  useEffect(() => {
    getAllData().then(res=>{
      setproducts(res.data.data)
    })
  }, [])
  
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
     <div className="container">
     <Row gutter={16}>
{
  products && products.map((p)=>{
    return(
      <Col xs={24} md={12} lg={6} key={p._id}>
      
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={p.imageUrl} />}
  >
    <Meta title={<NavLink to={`/products/${p._id}`}  > {p.title} </NavLink>} 
    
    description={p.price}/>
  </Card>
      </Col>
    )
  })
}

      </Row>
     </div>
      </>
  )
}

export default HomePage