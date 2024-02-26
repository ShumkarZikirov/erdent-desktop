import {GET_DATE,GET_TIME} from "../type";

const defaultState = {
    date:'',
    time:''
}
console.log(defaultState)
export const EnrollReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_TIME:{
            return {
                ...state,
                date: action.payload.data.date,
                time: action.payload.data.time
            }
        }
        default:
            return state
    }
}