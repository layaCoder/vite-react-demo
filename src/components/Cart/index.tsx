import CartItem from '../../contaners/CartItem';
import { Button, Alert } from 'antd';
import { useState } from 'react';
import './index.css'

const Cart = ({ items, total, currency, itemsInCart }:
    { items: Store.Product[], total: number, currency: string, itemsInCart: Store.CartItem[] }) => {

    const [showAlert, setShowAlert] = useState(false)

    return (
        <div>
            {showAlert && <Alert
                message="Ready to navigate to [Order] page"
                description={`Products Data: ${JSON.stringify(itemsInCart)} Total Fee: ${total}`}
                type="success"
                closable
                onClose={() => { setShowAlert(false) }}
                showIcon
            />}

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
                        <div className='cart_pay_row'>
                            <div className="cart__total">Total: {total} {currency}</div>
                            <Button
                            type='primary'
                                onClick={() => {
                                    setShowAlert(true)
                                }}
                            >Go to pay</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart