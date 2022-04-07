import { axiosClinetMobile } from "./axiosClient";

const TuitionsApi = {
    getDetailFee(value){
        const url = `fee/detail?campus_id=${value.campus_code}&user_code=${value.user_code}`;
        return axiosClinetMobile.get(url,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + value.token
            }
        })
    },
    getTransactionhistor(value){
        const url = `fee/transaction-history?campus_id=${value.campus_code}&user_code=${value.user_code}`
        return axiosClinetMobile.get(url,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + value.token
            }
        })
    } 
}
export default TuitionsApi;