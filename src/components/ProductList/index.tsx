import Product from '../../contaners/Product'
import { useEffect } from 'react'


const Index = ({ products ,fetchProducts}: { products: Products.Item[] ,fetchProducts:()=>void}) => {

  useEffect(() => {
  // fetch product list data
    fetchProducts()
  },[fetchProducts])

  return (
    <div>
      <h3>Products</h3>
      {products.map(product => (
        <li className="product-list__item">
          <Product {...product} />
        </li>
      ))}
    </div>
  );
}


export default Index;