import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import products from './mockData/products'
import productsReducer from './store/products';
import cartReducer from './store/cart'
import './index.css'


const rootReducer = combineReducers({
  products: productsReducer,
  cart:cartReducer
});

const store = createStore(
  rootReducer,
  {
      products: products // initial store values
  },
  // for debugging
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
)
