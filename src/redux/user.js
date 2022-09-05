import { setToken as setCookieToken, getToken, removeToken } from '@/utils/auth'

export const setId = (data) => {
    return {type: 'SET_ID',data};
};

export const setToken = (data) => {
    return {type: 'SET_TOKEN',data};
};

export const setUsername = (data) => {
    return {type: 'SET_USERNAME',data};
};

export const setAvatar = (data) => {
    return {type: 'SET_AVATAR',data};
};
export class userActions {
    static setId = (data) => ({type: 'SET_ID',data})
    static setToken = (data) => ({type: 'SET_TOKEN',data})
    static setUsername = (data) => ({type: 'SET_USERNAME',data})
    static setAvatar = (data) => ({type: 'SET_AVATAR',data})
}

const initState = {
    id: '',
    token: '11',
    username: '',
    avatar: ''
};

const reducer = (state = initState, action) => {
    const { type, data } = action
    switch (type) {
        case 'SET_ID':
            return {...state, id: data};
        case 'SET_TOKEN':
            setCookieToken(data)
            return {...state, token: data};
        case 'SET_USERNAME':
            return {...state, username: data};
        case 'SET_AVATAR':
            return {...state, avatar: data};
        default:
            return state;
    }
};

export default {initState, reducer};
  