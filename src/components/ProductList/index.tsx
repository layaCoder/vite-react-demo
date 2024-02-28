import Product from '../../contaners/Product'


const Index = ({products}:{products:Products.Item[]}) => {
    console.log(products,'products in list')

    return (
      <div>
      <h3>Products</h3>
        {products.map(product => (
            <li key={product.id} className="product-list__item">
              <Product {...product} />
            </li>
        ))}
  </div>
      );
}
 

export default Index;