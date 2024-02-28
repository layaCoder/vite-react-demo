// reducer
export default function products(state:Products.Item[] = []) {
    return state;
}

// selectors
export function getProducts(state:{products:Products.Item[]}) {
    return state.products;
}

export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}
