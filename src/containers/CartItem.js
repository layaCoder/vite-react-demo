import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import {  removeFromCart,addToCart,decreaseFromCart,getItemCountInCart } from '../store/cart';

const mapStateToProps = (state, props) => {
    return {
        itemCount:getItemCountInCart(state,props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    addToCart: (id) => dispatch(addToCart(id)),
    decreaseFromCart: (id) => dispatch(decreaseFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
