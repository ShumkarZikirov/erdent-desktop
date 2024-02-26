import instance from "./settings";

export const postEnroll = (data) => {
    return instance.post('/enroll/create/',data)
}
export const getDoctors = () => {
    return instance.get('/user/all/doctors')
}