import mockData from '../mockData/products'

// actions
const SET_PRODUCTS = 'SET_PRODUCTS';



// reducer

const initialState = [] as Store.Product[]


export default function products(state = initialState, action = {} as { payload: any, type: string }) {

    switch (action.type) {
        case SET_PRODUCTS:
            return handleSetProducts(state, action.payload);
        default:
            return state;
    }
}



function handleSetProducts(state: Store.Product[], props: { products: Store.Product[] }) {
    const newList = [...state].concat(props.products)
    return newList
}


// get data from api
export function fetchProductsAsync() {
    function fetchWithMidware(dispatch: (callback) => void, getState) {
        // 模拟api 返回请求数据
        setTimeout(() => {
            dispatch(setProducts(mockData)),
                500
        })
    }
    return fetchWithMidware
}


// action creators
export function setProducts(products: Store.Product[]) {
    return {
        type: SET_PRODUCTS,
        payload: {
            products
        }
    }
}



// selectors
export function getProducts(state: { products: Store.Product[] }) {
    return state.products;
}

export function getProduct(state: Store.Data, props:{id:number}) {
    return state.products.find(item => item.id === props.id);
}
