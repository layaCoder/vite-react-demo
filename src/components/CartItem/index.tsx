import './index.css'

const CartItem = ({ id, name, price, currency, removeFromCart, addToCart, decreaseFromCart, itemCount, image }:
    { id: number, name: string, price: number, currency: string, removeFromCart: (id: number) => void, addToCart: (id: number) => void, decreaseFromCart: (id: number) => void, itemCount: number, image: string }) => {
    return (
        <div className="cart-item">
            <div>
                <img src={image} className='cart_img'></img>
                <span className="cart-item__name">{name}</span>
                <button className="add" onClick={() => { addToCart(id) }}> + </button>
                <button className="decrease" onClick={() => { decreaseFromCart(id) }}> - </button>
                <button className="btn" onClick={() => { removeFromCart(id) }}>Remove</button>
                <div>Count : {itemCount}</div>
            </div>
            <div className="cart-item__price">Price: {price} {currency}</div>
            <div className='gap'></div>
        </div>
    );
}
export default CartItem