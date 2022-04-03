import { axiosClientMyap } from "./axiosClient";

const StudentsApi = {
    getDetailStudent(student_login){
        const url = `user/get-detail-student?student_login=${student_login}`;
        return axiosClientMyap.get(url)
    },
    getDetailFee(value){
        const url = `fee/detail?campus_id=${value.compus_code}&user_code=${value.user_code}`
        return axiosClientMyap.get(url,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + value.token
            }
        })
    }
}
export default StudentsApi;