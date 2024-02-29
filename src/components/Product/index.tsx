import { Modal } from 'antd'
import { useState } from 'react'
import './index.css'


const Index = (props) => {
    const { name, price, currency, image, isInCart, video } = props
    const [showDetail, setShowDetail] = useState(false)


    const handleClick = () => {
        const { id, addToCart } = props;
        addToCart(id);
    }

    const handleDecrease = () => {
        const { id, decreaseFromCart } = props
        decreaseFromCart(id)
    }

    const handleRemove = () => {
        const { id, removeFromCart } = props
        removeFromCart(id)
    }


    const renderProductView = (showDetailBtn:boolean)=>{
        return   <div>
        {/* <img src={image} alt="product" className="product_image"/> */}
        <div className="caption">
            <h3>{name}</h3>
            <div className="product__price">{price} {currency}</div>
            <div className="product__button-wrap">
                <button
                    onClick={handleClick}
                >
                    Add to cart
                </button>
                <button
                    onClick={handleDecrease}
                    disabled={!isInCart}
                >
                    Decrease in cart
                </button>
                <button
                    onClick={handleRemove}
                    disabled={!isInCart}
                >
                    Remove
                </button>
                {showDetailBtn&& <button onClick={()=>{
                    setShowDetail(true)
                }}>
                    Show detail
                </button>}
            </div>
        </div>
    </div>
    }

    return (
        <div   className='product_container'>
        <img src={image} alt="product"  className="product_image" />
            {renderProductView(true)}

            <Modal title="Product Detail" open={showDetail} onCancel={() => { setShowDetail(false) }} footer={null}>
                <video src={video} autoPlay className="product_vedio"/>
                {renderProductView(false)}
            </Modal>
        </div>
    );
}

export default Index;