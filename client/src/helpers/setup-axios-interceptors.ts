import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios"

export function setupAxiosInterceptors(axios: AxiosInstance) {
    axios.interceptors.response.use(
        response => response,
        async (err: AxiosError) => {
            const prevRequest = err.config as InternalAxiosRequestConfig
            const response = await axios.get("/auth/refresh")
            if (response.status !== 200) {
                window.location.href = "/login"
                return
            }
            return axios(prevRequest)
        },
    )
}
