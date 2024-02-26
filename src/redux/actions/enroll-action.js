import {GET_DATE} from "../type";

export const getDate = (data) => {
    return{
        type: GET_DATE,
        payload: {data}
    }
}