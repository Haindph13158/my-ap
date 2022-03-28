import { axiosClinetMobile } from "./axiosClient"

export default  function pointApi (value){
    const {term_id, campus_code, user_code} = value
        const url = `t7/transcript/get-by-term?campus_id=${campus_code}&term_id=${term_id}&user_code=${user_code}`
        return axiosClinetMobile.get(url,{
            headers: {
                "Authorization": "Bearer " + value.token
            }
        })
}