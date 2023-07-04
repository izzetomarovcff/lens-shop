
export const SetLogin = (login)=>{
    return {
        type: 'SET_LOGIN',
        payload: login
    }
}
export const SetRegister = (register)=>{
    return {
        type: 'SET_REGISTER',
        payload: register
    }
}

export const AddCart = product=>{
    return {
        type: 'ADD_CART',
        payload: product
    }
}
export const AddAdditionCart = addition=>{
    return {
        type: 'ADD_CARTA',
        payload: addition
    }
}
export const ActiveCart = cartactive=>{
    return {
        type: 'ACTIVE_CART',
        payload: cartactive
    }
}