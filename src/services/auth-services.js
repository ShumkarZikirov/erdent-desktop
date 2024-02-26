import { authRest } from "../axios/auth-rest";
import Cookies from "js-cookie";
import {
    logoutAction,
    getMeAction
} from "../redux/actions/auth-action";

export const getMeServices = () => {
    return async (dispatch) => {
        try {
            const response = await authRest.getMe()
            dispatch(getMeAction(response.data))
        } catch (e) {
            console.log(e)
        }
    }

}


export const registerServices = async (data) => {
    try {
        const response = await authRest.register(data)
        console.log(response)
    } catch (e) {
        console.log(e)

    }
}

export const loginServices = async (data) => {
    console.log(data)
    try {
        const response = await authRest.signIn(data)
        Cookies.set('stom-token', response.data.auth_token)
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}
