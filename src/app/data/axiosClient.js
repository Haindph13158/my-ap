import axios from "axios";
const axiosClient = axios.create({
    baseURL: "https://api.poly.edu.vn/ssm-api/fu/",
    headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Token ${token}`,
    }
})

export default axiosClient;