const CartItem = ({ id,name, price, currency, removeFromCart, addToCart, decreaseFromCart ,itemCount}:
    {id:number,name:string,price:number,currency:string,removeFromCart:(id:number)=>void,addToCart:(id:number)=>void,decreaseFromCart:(id:number)=>void,itemCount:number}) => {
    return (
        <div className="cart-item">
            <div>
                <button className="add" onClick={()=>{addToCart(id)}}> + </button>
                <button className="decrease" onClick={()=>{decreaseFromCart(id)}}> - </button>
                <button className="btn" onClick={ ()=>{removeFromCart(id)}}>Remove</button>
                <div>count : {itemCount}</div>
                <span className="cart-item__name">{name}</span>
            </div>
            <div className="cart-item__price">{price} {currency}</div>
        </div>
    );
}
export default CartItem