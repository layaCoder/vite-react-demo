
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
        <h1 className='page_title'>React+Redux Shopping Cart Demo</h1>
        <h2 className='page_desc'>github : <a href="https://github.com/layaCoder/vite-react-demo">https://github.com/layaCoder/vite-react-demo</a></h2>
      </div>
      <div className='cart_btn'>
        <Button
          type='primary'
          onClick={() => {
            setShowCart(!showCart)
          }}
        >Open Cart
        </Button>
      </div>
      <div className="row" >
        <ProductList />
      </div>
      <Modal title="Shopping Cart" open={showCart} onCancel={() => { setShowCart(false) }} footer={null}>
        <Cart />
      </Modal>

      {/* <footer>
        <small>
          react redux cart demo
        </small>
      </footer> */}
    </div>
  )
}

export default App
