import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getCurrency, getTotal, getItemCountInCart } from '../store/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props),
        itemCount: getItemCountInCart(state, props)
    }
}


export default connect(mapStateToProps)(Cart);
