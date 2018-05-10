import axios from 'axios';

const initialState = {
    loading: false,
    products: [],
    cart: [],
    product: {},
    cartTotal: 0,
    billingFirstName: '',
    billingLastName: '',
    billingCompany: '',
    billingAddress: '',
    billingPostalCode: '',
    billingCity: '',
    billingEmail: '',
    billingPhone: '',
    shippingFirstName: '',
    shippingLastName: '',
    shippingCompany: '',
    shippingAddress: '',
    shippingPostalCode: '',
    shippingCity: '',
    shippingEmail: '',
    shippingPhone: ''
}

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
const GET_CART_TOTAL = "GET_CART_TOTAL";
const BILLING_FIRST_NAME = "BILLING_FIRST_NAME"
const BILLING_LAST_NAME = "BILLING_LAST_NAME"
const BILLING_EMAIL = "BILLING_EMAIL"
const BILLING_PHONE = "BILLING_PHONE"

const _FULFILLED = "_FULFILLED";
const _PENDING = "_PENDING";
const _REJECTED = "_REJECTED";

export function getProduct(id) {
    const product = axios.put('/api/getProduct', { productId: id } ).then( product => {
        return product.data
    }).catch()
        return {
            type: GET_PRODUCT_DETAILS,
            payload: product
        }
}


export function getAll() {
    const allProducts = axios.get('/api/products').then( products => {
         return products.data
    }, console.log(allProducts)).catch()
    return { 
        type: GET_ALL_PRODUCTS, 
        payload: allProducts
    };
}

export function addToCart(id) {
    const cartItem = axios.put(`/api/addProduct`, { id } ).then( item => {
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

export function getTotal(total) {
    return {
        type: GET_CART_TOTAL,
        payload: total
    }
}

export function getFirstName(first) {
    return {
        type: BILLING_FIRST_NAME,
        payload: first
    }
}

export function getLastName(last) {
    return {
        type: BILLING_LAST_NAME,
        payload: last
    }
}

export function getEmail(email) {
    return {
        type: BILLING_EMAIL,
        payload: email
    }
}

export function getPhone(number) {
    return {
        type: BILLING_PHONE,
        payload: number
    }
}

export default function reducer( state = initialState, action ) {
    // console.log(action)
    switch (action.type) {
      case ADD_TO_CART + _PENDING:
        return state

        case ADD_TO_CART + _FULFILLED:
            // console.log('adding to cart, state: ',state)
            return (Object.assign( {}, state, { cart: [ ...state.cart, action.payload ] }))
            

      case GET_ALL_PRODUCTS + _PENDING:
        return Object.assign ({}, state, { loading: true })
        
        case GET_ALL_PRODUCTS +_FULFILLED:
        // console.log(action.payload)
            return (Object.assign( {}, state, { products: action.payload, loading: false } ) )

    //   case REMOVE_FROM_CART + _PENDING:
    //     return state

        case REMOVE_FROM_CART:
          console.log('removing from cart', state)
          return (Object.assign( {}, state,  { cart: [...action.payload ]} ))

        case GET_PRODUCT_DETAILS + _FULFILLED:
            return ( Object.assign( {}, state, { product: action.payload} ) )
        
        case GET_CART_TOTAL:
            return Object.assign( {}, state, { cartTotal: action.payload } )

        case BILLING_FIRST_NAME:
            return Object.assign( {}, state, { billingFirstName: action.payload } )

        case BILLING_LAST_NAME:
            return Object.assign({}, state, { billingLastName: action.payload } )
                    
        case BILLING_EMAIL:
            return Object.assign({}, state, { billingEmail: action.payload } )

        case BILLING_PHONE:
            return Object.assign( {}, state, { billingPhone: action.payload } )

      default:
        return state;
    }
}

