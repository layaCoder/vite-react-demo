const CartItem = ({ name, price, currency, onClick, add, decrease }) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn" onClick={onClick}>X</button>
                <button className="add" onClick={add}> + </button>
                <button className="decrease" onClick={decrease}> - </button>
                <span className="cart-item__name">{name}</span>
            </div>
            <div className="cart-item__price">{price} {currency}</div>
        </div>
    );
}
export default CartItem