import { LOGOUT_AUTH, AUTH_ME } from '../type'

export const getMeAction = (data) => {
    return {
        type: AUTH_ME,
        payload: {data}
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT_AUTH,
    }
}