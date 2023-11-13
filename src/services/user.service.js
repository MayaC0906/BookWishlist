import { httpService } from './http.service.js'

const STORAGE_KEY_LOGGEDIN = 'loggedinUser'
const USER_URL = 'user/'
const AUTH_URL = 'auth/'



export const userService = {
    login,
    logout,
    signup,
    getById,
    getLoggedinUser,
    // updateUser
}

window.us = userService

function getById(userId) {
    return httpService.get(USER_URL + userId)
}

async function login({ username, password }) {
    try {
        const user = await httpService.post(AUTH_URL + 'login', { username, password })
        if (user) return _setLoggedinUser(user)
        else return Promise.reject('Invalid login')
    } catch (err) {
        throw new Error('Cannot login')
    }
}

async function signup({ username, password, fullname }) {
    try {
        const user = await httpService.post(AUTH_URL + 'signup', { username, password, fullname })
        if (user) return _setLoggedinUser(user)
        else return Promise.reject('Invalid signup')
    } catch (err) {
        throw new Error('Cannot signup')
    }
}

// function updateUser(newUser) {
//     return userService.getById(getLoggedinUser()._id)
//         .then(user => {
//             user = { ...newUser }
//             return storageService.put(STORAGE_KEY, user)

//         })
//         .then(user => {
//             _setLoggedinUser(user)
//             return user
//         })
// }

async function logout() {
    try {
        const msg = await httpService.post(AUTH_URL + 'logout')
        sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
        return msg
    } catch (err) {
        throw err
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function _setLoggedinUser(user) {
    const userToSave = { _id: user._id, fullname: user.fullname, isAdmin:user.isAdmin, imgUrl:user.imgUrl}
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(userToSave))
    return userToSave
}

