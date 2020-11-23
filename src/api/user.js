import request from "@/utils/request";

export function users(data){
    return request({
        url:'/pro-api/goods/list/search/1/10',
        method:'POST',
        data
    })
}