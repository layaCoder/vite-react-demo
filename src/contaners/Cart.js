import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getCurrency, getTotal, removeFromCart,addToCart,decreaseFromCart } from '../store/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    addToCart: (id) => dispatch(addToCart(id)),
    decreaseFromCart: (id) => dispatch(decreaseFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
