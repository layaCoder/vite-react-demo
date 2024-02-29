import { getProduct } from '../store/products';

// actions
const CART_ADD = 'CART_ADD';
const CART_DECREASE = 'CART_DECREASE'
const CART_REMOVE = 'CART_REMOVE';

// reducer
const initialState = {
    items: [], //  product  array
    currency: 'CNY'
};

export default function cart(state = initialState, action = {}) {

    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);

        case CART_DECREASE:
            return handleCartDecrease(state, action.payload)
        default:
            return state;
    }
}


function handleCartAdd(state, payload) {
    const isInCart = state.items.find(it => it.id === payload.productId) !== undefined
    let newItems = [...state.items]
    if (isInCart) {
        newItems.forEach(it => {
            if (it.id === payload.productId) {
                it.count++
            }
        })
    }
    else {
        newItems = [...state.items, { id: payload.productId, count: 1 }]
    }
    return {
        ...state,
        items: newItems
    };
}

function handleCartDecrease(state, payload) {
    const itemInCard = state.items.find(it => it.id === payload.productId)
    let newItems = [...state.items]
    if (itemInCard?.id && itemInCard?.count > 1) {
        newItems.forEach(it => {
            if (it.id === payload.productId) {
                it.count--
            }
        })
    }
    else {
        newItems = [...state.items.filter(it => it.id !== payload.productId)]
    }
    return {
        ...state,
        items: newItems
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(it => it.id !== payload.productId)
    };
}

// action creators
export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

export function decreaseFromCart(productId) {
    return {
        type: CART_DECREASE,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state, props) {
    // get ids arry form obj array
    const prodcutIdsInState = Array.from(state.cart.items, ({ id }) => id);
    return prodcutIdsInState.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    const prodcutIdsInState = Array.from(state.cart.items, ({ id }) => id);
    return prodcutIdsInState.map(id => getProduct(state, { id }));
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, it) => {
        const item = getProduct(state, { id: it.id });
        return acc + item.price * it.count;
    }, 0);
}
