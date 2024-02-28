
import ProductList from './contaners/ProductList'
import Cart from './contaners/Cart'
import { useState } from 'react'


import './App.css'

function App() {
    const [showCart,setShowCart] = useState(false)


  return (
      <div className="container">
          <div className="row">
                <h1>React+Redux Shopping Cart Example</h1>
          </div>
          <button
          onClick={()=>{
            setShowCart(!showCart)
          }}
          >toggle cart
          </button>
            <div className="row" >
                  <ProductList />
            </div>
            <div>
                {showCart&& <Cart />}
            </div>
          <footer>
              <small>
                react redux cart demo
              </small>
          </footer>
      </div>
  )
}

export default App
