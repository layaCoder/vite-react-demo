
import ProductList from './contaners/ProductList'
import Cart from './contaners/Cart'
import { useState } from 'react'
import { Button, Modal } from 'antd'; 


import './App.css'

function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <div className="container">
      <div className="row">
        <h1>React+Redux Shopping Cart Example</h1>
      </div>
      <Button
        onClick={() => {
          setShowCart(!showCart)
        }}
      >toggle cart
      </Button>
      
      <div className="row" >
        <ProductList />
      </div>
      <Modal title="Basic Modal" open={showCart} onCancel={()=>{setShowCart(false)}} footer={null}>
      <Cart />
      </Modal>

      <footer>
        <small>
          react redux cart demo
        </small>
      </footer>
    </div>
  )
}

export default App
