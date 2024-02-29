import './index.css'


const Index = (props) => {
    const { name, price, currency, image, isInCart } = props

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

    return (
        <div >
            <img src={image} alt="product" className="product_image"/>
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
                </div>
            </div>
        </div>
    );
}

export default Index;