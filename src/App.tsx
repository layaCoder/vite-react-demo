
import ProductList from './contaners/ProductList'

import './App.css'

function App() {

  return (
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <h1>React+Redux Shopping Cart Example</h1>
              </div>
          </div>
          <div className="row">
              <div className="col-md-8">
                  <ProductList />
              </div>
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
