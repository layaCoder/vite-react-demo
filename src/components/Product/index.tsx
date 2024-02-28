
const Index = (props) => {
    const {name, price, currency, image, isInCart} = props

    const  handleClick = () => {
        const { id, addToCart, removeFromCart } = props;
        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    return (
        <div >
            <img src={image} alt="product" />
            <div className="caption">
                <h3>{name}</h3>
                <div className="product__price">{price} {currency}</div>
                <div className="product__button-wrap">
                    <button
                        onClick={handleClick}
                    >
                        {isInCart ? 'Remove' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Index;