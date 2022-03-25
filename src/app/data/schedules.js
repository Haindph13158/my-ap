import { useSelector } from "react-redux";
import axiosClient from "./axiosClient";
const SchedulesApi = {
    getSchedule(action) {
        const url = `schedule/get-schedule?campus_id=${action.campus_code}&days=7&user_code=${action.user_code}`
        return axiosClient.get(url,
            {
                headers: {
                    "Authorization": "Bearer " + action.token
                }
            }
        )
    },
    getListAttendance(value) {
        const url = `schedule/get-list-attendance?campus_id=${value.campus_code}&term_id=39&user_code=${value.user_code}`
        return axiosClient.get(url, {
            headers: {
                "Authorization": "Bearer " + value.token
            }
        })
    }

}
export default SchedulesApi;