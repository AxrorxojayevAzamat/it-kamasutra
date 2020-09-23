import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY' : '4b3ce52a-860c-430a-9e68-d18b4469c2d7'
    }
});


export const usersAPI = {
    getUsers(pageSize = 10, page = 1) {
        return instance.get(`users?count=${pageSize}&page=${page}`)
            .then( response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn("Obsolete method. Please profileAPI object.")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    },
    updatePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }})
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
    }
}

export const authAPI = {
    me() {
        return instance.get("auth/me")
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post("auth/login", {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete("auth/login")
    }
}

export const captchaAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}