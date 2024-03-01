import { getProduct } from '../store/products';

// actions
const CART_ADD = 'CART_ADD';
const CART_DECREASE = 'CART_DECREASE'
const CART_REMOVE = 'CART_REMOVE';

// reducer
const initialState = {
    items: [], //  product  array
    currency: '￥'
};

export default function cart(state = initialState, action = {} as { payload: { productId: number }, type: string }) {

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


function handleCartAdd(state: Store.Cart, payload: { productId: number }) {
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

function handleCartDecrease(state: Store.Cart, payload: { productId: number }) {
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

function handleCartRemove(state: Store.Cart, payload: { productId: number }) {
    return {
        ...state,
        items: state.items.filter(it => it.id !== payload.productId)
    };
}

// action creators
export function addToCart(productId: number) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId: number) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

export function decreaseFromCart(productId: number) {
    return {
        type: CART_DECREASE,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state: Store.Data, props: Store.Product) {
    // get ids arry form obj array

    const prodcutIdsInState = Array.from(state.cart.items, ({ id }) => id);
    return prodcutIdsInState.indexOf(props.id) !== -1;
}

export function getItems(state: Store.Data) {
    const prodcutIdsInState = Array.from(state.cart.items, ({ id }) => id);
    return prodcutIdsInState.map(id => getProduct(state, { id }));
}

export function getCurrency(state: Store.Data) {
    return state.cart.currency;
}

export function getTotal(state: Store.Data) {
    return state.cart.items.reduce((acc, it) => {
        const item = getProduct(state, { id: it.id });
        return acc + (item?.price || 0) * it.count;
    }, 0);
}

export function getItemCountInCart(state: Store.Data, props: Store.Product) {
    return state.cart.items.find((it: { id: number; }) => it.id === props.id)?.count || 0
}


export function getItemsInCart(state:Store.Data){
    return state.cart.items
}

