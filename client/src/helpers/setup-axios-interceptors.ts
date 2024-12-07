import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios"

export function setupAxiosInterceptors(axios: AxiosInstance) {
    axios.interceptors.response.use(
        response => response,
        async (err: AxiosError) => {
            const prevRequest = err.config as InternalAxiosRequestConfig

            try {
                if (prevRequest.url === "/auth/refresh") {
                    throw new Error()
                }

                if (prevRequest.url === "/common-user/me") {
                    return axios({
                        method: "GET",
                        url: "/professional-user/me",
                    })
                }

                await axios.get("/auth/refresh")
                return axios(prevRequest)
            } catch (error) {
                window.location.href = "/login"
                return Promise.reject(error)
            }
        },
    )
}
