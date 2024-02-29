import CartItem from '../../contaners/CartItem';
import './index.css'

const Cart = ({ items, total, currency }:
    { items: Store.Product[], total: number, currency: string, removeFromCart: (id: number) => void, addToCart: (id: number) => void, decreaseFromCart: (id: number) => void, itemCount: number }) => {
    return (
        <div>
            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} />
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