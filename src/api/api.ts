import axios, {AxiosResponse} from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "acc8259c-1446-4874-901e-e45c04ac3561"
  }
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => {
        return res.data
      })
  },
  deleteFollow(id: number) {
    return instance
      .delete(`follow/${id}`)
      .then(res => {
        return res.data
      })
  },
  postFollow(id: number) {
    return instance
      .post(`follow/${id}`, {})
      .then(res => {
        return res.data
      })
  },
}

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status})
  }

}

export const authAPI = {
  login(data: LoginParamsType) {
    return instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: number }>>>('auth/login', data)
  },
  me() {
    return instance.get<ResponseType<MeResponceType>>('auth/me')
  },
  logout() {
    return instance.delete<ResponseType>('auth/login')
  }
}

export type MeResponceType = {
  id: number,
  email: string,
  login: string
}

export type LoginParamsType = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string
}

export type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  fieldsErrors: Array<string>
  data: D
}