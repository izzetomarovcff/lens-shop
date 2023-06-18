import { prodata } from "./data";
import {additiondata} from "./data"
const INITIAL_STATE = {
    login: false,
    register: true,
    productdata: prodata,
    adddata: additiondata

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