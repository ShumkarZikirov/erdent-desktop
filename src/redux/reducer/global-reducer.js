import {CLEAR_ERROR, SHOW_LOADING, HIDE_LOADING, SHOW_ERROR, DETAILS_DOCTOR, DOCTORS} from "../type"
import data from "bootstrap/js/src/dom/data";

const defaultState = {
    loading: false,
    error: null,
    name:'',
    number:'',
    id:null,
    data:[],
    detailDoctor:[]
}
export const globalReducer = (state = defaultState, action) => {
    console.log(state)
    switch(action.type) {
        case SHOW_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case HIDE_LOADING: {
            return {
                ...state,
                loading: false
            }
        }
        case CLEAR_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        case SHOW_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case DETAILS_DOCTOR: {
            const {payload} = action
            const {data} = state
            const newArray = data.filter((elem,index) => elem.id === payload)
            return {
                    ...state,
                    detailDoctor: newArray,
            }
        }
        case DOCTORS:{
            return {
                ...state,
                data: action.payload
            }
        }
        default:
            return state
    }
}