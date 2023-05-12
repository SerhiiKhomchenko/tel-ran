import  { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import { ProductsReducer } from './ProductsReducer'
import { CardReducer } from './CardReducer'

const rootReducer = combineReducers({
    products: ProductsReducer,
    card: CardReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))