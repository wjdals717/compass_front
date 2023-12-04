import axios from "axios";

export const instance = axios.create({  // axios 공통 설정
    baseURL: "http://43.201.121.217:8080/api"
})
