import Product from '../../contaners/Product'
import { useEffect } from 'react'


const Index = ({ products ,fetchProducts}: { products: Products.Item[] ,fetchProducts:()=>void}) => {



  useEffect(() => {
  // fetch product list data
    fetchProducts()

    // 【无限加载list】 ps:此功能可以使用 antd 的list组件快速完成

    // handleScroll方法中，通过计算滚动条高度，执行加载数据
    // 此项目为demo项目，实际使用中，会根据分页逻辑，加载下一页数据
    // 若要实现无限加载，可以在最后无数据时将pageIndex重置为1，从第1页开始重新走分页加载逻辑
    const handleScroll = (e:any)=>{
      const clientHeight = document.documentElement.clientHeight; //可视区域高度
      // let scrollTop = document.documentElement.scrollTop;//滚动条滚动高度
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //top使用兼容性写法，否则移动端浏览器兼听不到scroll事件
      const scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
  
      const res = scrollHeight - scrollTop - clientHeight;
      if (res <= 400 ) {
  
        fetchProducts()
      }
    }
    // start scroll listener
    window.addEventListener('scroll',handleScroll)

    return ()=>{
      // remove scroll listener
      window.removeEventListener('scroll',handleScroll)
    }

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