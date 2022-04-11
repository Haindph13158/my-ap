import { useSelector } from "react-redux";
import axiosClient, { axiosClientMyap, axiosClinetMobile } from "./axiosClient";
const SchedulesApi = {
    getSchedule(action) {
        const {token, campus_code, day, user_code} = action;
        const url = `fu/schedule/get-schedule?campus_id=${campus_code}&days=${day}&user_code=${user_code}`;
        return axiosClinetMobile.get(url,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            }
        )
    },
    getListAttendance(value) {
        const url = `schedule/get-list-attendance?campus_id=${value.campus_code}&term_id=39&user_code=${value.user_code}`
        return axiosClient.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + value.token
            }
        })
    },
    getListTest(value) {
        const url = `fu/schedule/get-test-schedule?campus_id=${value.campus_code}&days=${value.day}&user_code=${value.user_code}&term_id=39`
        return axiosClinetMobile.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + value.token
            }
        })
    }

}
export default SchedulesApi;