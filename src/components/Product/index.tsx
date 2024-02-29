import { Modal } from 'antd'
import { useState } from 'react'
import './index.css'


const Index = (props) => {
    const { name, price, currency, image, isInCart, video, itemCount } = props
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


    const renderProductView = (showDetailBtn: boolean) => {
        return <div className='content_wrppper'>
            {/* <img src={image} alt="product" className="product_image"/> */}
            <div className="caption">
                <div className='name_wrapper'>
                    <div className='name_txt'>{name}</div>
                    {showDetailBtn && <button onClick={() => {
                        setShowDetail(true)
                    }}>
                        Show detail
                    </button>}
                </div>
                <div className="product__price">Price: {price} {currency}</div>
                <div className="product__button-wrap">
                    <div>Count: {itemCount}</div>
                    <button
                        onClick={handleClick}
                    >
                        +
                    </button>
                    <button
                        onClick={handleDecrease}
                        disabled={!isInCart}
                    >
                        -
                    </button>
                    <button
                        onClick={handleRemove}
                        disabled={!isInCart}
                    >
                        Remove
                    </button>

                </div>
            </div>
        </div >
    }

    return (
        <div className='product_container'>
            <img src={image} alt="product" className="product_image" />
            {renderProductView(true)}

            <Modal title="Product Detail"
                open={showDetail}
                onCancel={() => { setShowDetail(false) }}
                destroyOnClose
                footer={null}>
                <video src={video} autoPlay muted className="product_vedio" />
                {renderProductView(false)}
            </Modal>
        </div>
    );
}

export default Index;