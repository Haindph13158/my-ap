import { axiosClinetMobile } from "./axiosClient"

export default  function smsApi (value){
    console.log(value);
        const url = `sms/get-list-phone?campus_id=${value.campus_code}&user_code=${value.user_code}`
        return axiosClinetMobile.get(url,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + value.token
            }
        })

}