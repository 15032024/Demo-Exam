import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import HomePage from './Pages/HomePage'
import AddPage from './Pages/AddPage'
import Details from './Pages/Details'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import { Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Routes>

  <Route path="/"element={<HomePage/>}/>
  <Route path="/add-product"element={<AddPage/>}/>
  <Route path="/add-product/:id"element={<Details/>}/>
</Routes>
<Footer/>

    </>
  )
}

export default App
