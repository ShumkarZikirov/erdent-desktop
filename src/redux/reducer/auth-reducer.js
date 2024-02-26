import { AUTH_ME, LOGOUT_AUTH } from "../type"

const defaultState = {
    user: '',
}
export const AuthReducer = (state = defaultState, action) => {
    switch(action.type) {
        case AUTH_ME: {
            return {
                ...state,
                user: action.payload.data.username
            }
        }
        case LOGOUT_AUTH: {
            return {
                ...state,
                user: ''
            }
        }
        default:
            return state
    }
}