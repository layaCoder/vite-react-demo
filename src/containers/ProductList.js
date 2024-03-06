import { connect } from 'react-redux';
import ProductList from '../components/ProductList'
import {
    getProducts,
    // setProducts,
    fetchProductsAsync
} from "../store/products";

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({

    fetchProducts: () => {
        dispatch(fetchProductsAsync())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)