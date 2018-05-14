const initialState = {
    username: '',
    pinput: '',
    itemNumber: ''
}

const GET_USERNAME = "GET_USERNAME"
const GET_PASSWORD = "GET_PASSWORD"
const GET_ITEM_NUMBER = "GET_ITEM_NUMBER"
const CLEAR_INPUT = "CLEAR_INPUT"

export function clearInput() {
    return {
        type: CLEAR_INPUT,
        payload: initialState.itemNumber
    }
}

export function getUsername(username) {
    return {
        type: GET_USERNAME,
        payload: username
    }
}

export function getPinput(pinput) {
    return {
        type: GET_PASSWORD,
        payload: pinput
    }
}

export function getItemNumber(number) {
    return {
        type: GET_ITEM_NUMBER,
        payload: number
    }
}

export default function reducer( state = initialState, action ) {
    switch (action.type) {

    case GET_PASSWORD:
        return Object.assign( {}, state, { username: action.payload } )
        
    case GET_USERNAME:
        return Object.assign( {}, state, { pinput: action.payload })
        
    case GET_ITEM_NUMBER:
    console.log(action.payload)
        return Object.assign( {}, state, { itemNumber: action.payload })

    case CLEAR_INPUT:
        return Object.assign( {}, state, { itemNumber: action.payload })
        
        default:
            return state
    }
}