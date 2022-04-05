import { axiosClinetMobile } from "./axiosClient";

const CampusApi = {
    getCampus(){
        const url = `fu/campus/get-list`;
        return axiosClinetMobile.get(url)
    },
}
export default CampusApi;