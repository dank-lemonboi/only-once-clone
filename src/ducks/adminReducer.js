const initialState = {
    username: '',
    password: '',
    itemNumber: ''
}

const GET_USERNAME = "GET_USERNAME"
const GET_PASSWORD = "GET_PASSWORD"
const GET_ITEM_NUMBER = "GET_ITEM_NUMBER"

export function getUsername(username) {
    return {
        type: GET_USERNAME,
        payload: username
    }
}

export function getPassword(password) {
    return {
        type: GET_PASSWORD,
        payload: password
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
        return Object.assign( {}, state, { password: action.payload })
        
    case GET_ITEM_NUMBER:
        return Object.assign( {}, state, { itemNumber: action.payload })
        
        default:
            return state
    }
}