import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getCurrency, getTotal, getItemCountInCart,getItemsInCart } from '../store/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props),
        itemCount: getItemCountInCart(state, props),
        itemsInCart:getItemsInCart(state)
    }
}


export default connect(mapStateToProps)(Cart);
