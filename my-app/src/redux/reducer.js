const INITIAL_STATE = {
    login: false,
    register: true
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_LOGIN":
            return { ...state, login: action.payload }

        case "SET_REGISTER":
            return { ...state, register: action.payload }

        default:
            return state;
    }
}