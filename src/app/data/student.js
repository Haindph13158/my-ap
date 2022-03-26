import { axiosClientMyap } from "./axiosClient";

const StudentsApi = {
    getDetailStudent(student_login){
        const url = `user/get-detail-student?student_login=${student_login}`
        return axiosClientMyap.get(url, {
            headers: {
                "Content-Type": "application/json",
            }
        })
    },
}
export default StudentsApi;