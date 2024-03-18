import Product from '../../containers/Product'
import './index.css'
import { useEffect,useRef } from 'react'



const Index = ({ products, fetchProducts }: { products: Store.Product[], fetchProducts: () => void }) => {


  const observeRef = useRef<HTMLDivElement >(null)

  useEffect(() => {
    // fetch product list data
    fetchProducts()

    // 监听回调事件
    const callback: IntersectionObserverCallback = (enters) => {
      for (const item of enters) {
        if (item.isIntersecting) {
          console.log('listened dom display in viewpfort, fetching list')
          fetchProducts()
          // 第一次出现之后，后续停止对此dom的监听
          // observe.unobserve(item.target)
        }
      }
    }
    const observe = new IntersectionObserver(callback)

    observe.observe(observeRef.current)

    // 组件销毁的时候，停止所有监听
    return () => {
      observe.disconnect()

    }

  }, [fetchProducts])


  return (
    <div className='p_container' >
      <div  className='p_list_wrapper'>
      {products.map(product => (
        // 实际项目中 key = product.id 是唯一值，此项目未demo，加载的数据是mock数据，加 + 0-1 随机数确保 key 唯一
        <div key={product.id + Math.random()} className="product-list__item">
          <Product {...product} />
        </div>
      ))}
      </div>
      <div ref={observeRef} id='p_footer' className='footer'></div>
    </div>
  );
}


export default Index;