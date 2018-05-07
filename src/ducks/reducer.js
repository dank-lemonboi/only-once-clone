import axios from 'axios';

const initialState = {
    products: [],
    cart: []
}

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const _FULFILLED = "_FULFILLED";
const _PENDING = "_PENDING";
const _REJECTED = "_REJECTED";


export function getAll() {
    const allProducts = axios.get('/api/products').then( products => {
        return products.data
    }).catch()
    return { 
        type: GET_ALL_PRODUCTS, 
        payload: allProducts
    };
}

export function addToCart(id) {
    const cartItem = axios.put(`/api/addProduct`, { id }).then( item => {
        // console.log(item.data)
        return item.data
    }).catch()
   
    return {
        type: ADD_TO_CART,
        payload: cartItem
    }
}

export function removeFromCart(updateCart) {
    // console.log(updateCart)
    return {
        type: REMOVE_FROM_CART,
        payload: updateCart
    }
}

export default function reducer( state = initialState, action ) {
    // console.log(action)
    switch (action.type) {
      case ADD_TO_CART + _PENDING:
        return state

        case ADD_TO_CART + _FULFILLED:
            // console.log('adding to cart, state: ',state)
            return (Object.assign( {}, state, { cart: [ ...state.cart, action.payload ]}))

        case ADD_TO_CART + _REJECTED:
            return 'Rejected'
            

      case GET_ALL_PRODUCTS + _PENDING:
        return state
                case GET_ALL_PRODUCTS +_FULFILLED:
                // console.log(action.payload)
                    return (Object.assign({}, state, { products: action.payload }))
                    

                case GET_ALL_PRODUCTS +_REJECTED:
                    return 'Rejected'

    //   case REMOVE_FROM_CART + _PENDING:
    //     return state

        case REMOVE_FROM_CART:
          console.log('removing from cart', state)
          return (Object.assign( {}, state,  { cart: [... action.payload ]} ))
                    

      default:
        return state;
    }
}

