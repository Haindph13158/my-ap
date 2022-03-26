import axios from "axios";
const axiosClient = axios.create({
    baseURL: "https://api.poly.edu.vn/ssm-api/fu/",
    headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Token ${token}`,
    }
})
 export const axiosClinetMobile = axios.create({
  baseURL: "https://api.poly.edu.vn/app-mobile/fu/",
  headers: {
    "Content-Type": "application/json",
  }
})
export const axiosClientMyap = axios.create({
    baseURL: "https://api.poly.edu.vn/myap/fu/",
    headers: {
        "Content-Type": "application/json",
      }
})

export default axiosClient;