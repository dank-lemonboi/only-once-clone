import axios from 'axios';

const initialState = {
    products: [],
    cart: [],
    product: {},
    isSticky: false,
    isAdmin: false,
    modalView: false,
    loading: false,
    cartTotal: 0,
    billingCountry: '',
    billingStateProvince: '',
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
const BILLING_COUNTRY = "BILLING_COUNTRY"
const BILLING_STATE = "BILLING_STATE"
const BILLING_ADDRESS = "BILLING_ADDRESS"
const BILLING_POSTAL_CODE = "BILLING_POSTAL_CODE"
const BILLING_CITY = "BILLING_CITY"
const MODAL_ENGAGED = "MODAL_ENGAGED"
const ADMIN_MODE = "ADMIN_MODE"
const EMPTY_THE_CART = "EMPTY_THE_CART"
const SET_STICKY = "SET_STICKY"


const _FULFILLED = "_FULFILLED";
const _PENDING = "_PENDING";
const _REJECTED = "_REJECTED";

export function getCity(city) {
    return {
        type: BILLING_CITY,
        payload: city
    }
}

export function getPostalCode(post) {
    return {
        type: BILLING_POSTAL_CODE,
        payload: post
    }
}

export function getAddress(address) {
    return {
        type: BILLING_ADDRESS,
        payload: address
    }
}

export function getState(stateProvince) {
    return {
        type: BILLING_STATE,
        payload: stateProvince
    }
}

export function getCountry(country) {
    return {
        type: BILLING_COUNTRY,
        payload: country
    }
}

export function getProduct(id) {
    const product = axios.put('/api/getProduct', { id } ).then( product => {
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
    }).catch()
    return { 
        type: GET_ALL_PRODUCTS, 
        payload: allProducts
    };
}

export function addToCart(id) {
    const cartItem = axios.put(`/api/addProduct`, { productId: id } ).then( item => {
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

export function modalEngaged(value) {
    return {
        type: MODAL_ENGAGED,
        payload: value
    }
}

export function adminMode(value) {
    return {
        type: ADMIN_MODE,
        payload: value
    }
}

export function emptyCart() {
    return {
        type: EMPTY_THE_CART,
        payload: initialState.cart
    }
}

export function stickySet(value) {
    return {
        type: SET_STICKY,
        payload: value
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

        case BILLING_COUNTRY:
            return Object.assign( {}, state, { billingCountry: action.payload })

        case BILLING_STATE:
            return Object.assign( {}, state, { billingStateProvince: action.payload })
        
        case BILLING_ADDRESS:
            return Object.assign( {}, state, { billingAddress: action.payload })

        case BILLING_POSTAL_CODE:
            return Object.assign( {}, state, { billingPostalCode: action.payload })

        case BILLING_CITY:
            return Object.assign( {}, state, { billingCity: action.payload })

        case MODAL_ENGAGED:
            return Object.assign( {}, state, { modalView: action.payload })

        case EMPTY_THE_CART:
            return Object.assign( {}, state, { cart: action.payload })

        case ADMIN_MODE:
            return Object.assign( {}, state, { isAdmin: action.payload})

        case SET_STICKY:
            return Object.assign( {}, state, { isSticky: action.payload })

      default:
        return state;
    }
}

