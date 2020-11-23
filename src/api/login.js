import request from '@/utils/request'
export function getLogin(data){
    return request({
        url:'/pro-api/user/login',
        method:'POST',
        data
    })
}