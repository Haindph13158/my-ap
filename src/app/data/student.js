import axiosClient from "./axiosClient";

const StudentsApi = {
    getDetailStudent(student_login){
        const url = `https://api.poly.edu.vn/myap/fu/user/get-detail-student?student_login=${student_login}`
        return axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': `Token ${token}`,
            }
        })
    },
}
export default StudentsApi;