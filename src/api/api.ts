import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "acc8259c-1446-4874-901e-e45c04ac3561"
    }
})

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    deleteFollow (id: number) {
        return instance
            .delete(`follow/${id}`)
            .then(res => {
                return res.data
            })
    },
    postFollow (id: number) {
        return instance
            .post(`follow/${id}`, {})
            .then(res => {
                return res.data
            })
    }
}
