import { setToken as setCookieToken, getToken, removeToken } from '@/utils/auth'
import { login } from '@/apis'

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

export const handleLogin = (data) => {
    return {type: 'HANDLE_LOGIN',data}
}

const initState = {
    id: '',
    token: '',
    username: '',
    avatar: '',
};

const reducer = async (state = initState, action) => {
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
        case 'HANDLE_LOGIN':
            return await new Promise((s,j)=>{
                login(data).then(res=>{
                    s(res)
                }).catch(err=>j(err))
            })
        default:
            return state;
    }
};

export default {initState, reducer};
  