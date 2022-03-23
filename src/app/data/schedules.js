import { useSelector } from "react-redux";
import axiosClient from "./axiosClient";
const SchedulesApi = {
    getSchedule(action){
    const {users} = useSelector(state => state.auths);
    const token = users.token
        const url = `schedule/get-schedule?campus_id=${users.campus_code}&days=7&user_code=${users.user_code}`
        return axiosClient.get(url,
            {
                headers: {
                    "Authorization": "Bearer " + token}}
            )
    },
    getListAttendance(value) {
        console.log(value);
    const {users} = useSelector(state => state.auths);
        const token = users.token
        console.log(token);
        const url = `schedule/get-list-attendance?campus_id=${users.campus_code}&user_code=${users.user_code}`
        return axiosClient.get(url, {
            headers: {
                "Authorization": "Bearer " + token}
        })
    }    
   
}
export default SchedulesApi;