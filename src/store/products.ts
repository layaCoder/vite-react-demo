import mockData from '../mockData/products'

// actions
const SET_PRODUCTS = 'SET_PRODUCTS';



// reducer

const initialState = [] as Products.Item[]


export default function products(state = initialState, action = {}) {

    switch (action.type) {
        case SET_PRODUCTS:
            return handleSetProducts(state, action.payload);
        default:
            return state;
    }
}



function handleSetProducts(state, props) {
    const newList = [...state].concat(props.products)
    return newList
}


// get data from api
export function fetchProductsAsync (){
    function foo(dispatch,getState){
        // 模拟api 返回请求数据
        setTimeout(()=>{
            dispatch(setProducts(mockData))
        ,500})
    }
    return foo
}


// action creators
export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: {
            products
        }
    }
}

// export default function products(state = []) {
//     console.log(state,29)
//     return state;
// }


// selectors
export function getProducts(state: { products: Products.Item[] }) {
    return state.products;
}

export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}

export function getProductAsync(state, props) {
    return state.products
}
