import CartItem from '../../contaners/CartItem';

const Cart = ({ items, total, currency, removeFromCart, addToCart, decreaseFromCart,itemCount }) => {
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} itemCount={itemCount} onClick={() => removeFromCart(item.id)} add={()=>{addToCart(item.id)}} decrease={()=>{decreaseFromCart(item.id)}} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="empty-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart