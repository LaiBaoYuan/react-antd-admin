import http from '@/utils/http'

export function login(data){
    return http.post('/login',data)
}