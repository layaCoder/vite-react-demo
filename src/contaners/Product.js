import { connect } from 'react-redux';
import Product from '../components/Product';
import { addToCart, removeFromCart, isInCart,decreaseFromCart } from '../store/cart';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    decreaseFromCart: (id) => dispatch(decreaseFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
