import {postEnroll} from "../axios/enroll-rest";
import Cookies from "js-cookie";
import {getDate} from "../redux/actions/enroll-action";
import {getDoctors} from "../axios/enroll-rest";
import {getDoctorsAction} from '../redux/actions/global-action'
export const getDateServices = async (data) =>{
    try {
        const res = await postEnroll(data)
        console.log(res)
    }catch (e){
        alert('dvdcscdv')
    }
}
// export const getDoctorsServices = async () => {
//     try {
//         const res = await getDoctors()
//         getDoctorsAction(res.data)
//     }catch (e){
//         console.log('erore')
//     }
// }