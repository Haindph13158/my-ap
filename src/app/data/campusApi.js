import { axiosClientMyap } from "./axiosClient";

const CampusApi = {
    getCampus(){
        const url = `campus/get-list`;
        return axiosClientMyap.get(url)
    },
}
export default CampusApi;