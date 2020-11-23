import request from "@/utils/request";

export function goods(data){
    return request({
        url:'/pro-api/goods/list/search/1/10',
        method:'POST',
        data
    })
}