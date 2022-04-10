import { axiosClientMyap } from "./axiosClient";

const CampusApi = {
    getCampus(){
        const url = `fu/campus/get-list`;
        return axiosClientMyap.get(url)
    },
}
export default CampusApi;