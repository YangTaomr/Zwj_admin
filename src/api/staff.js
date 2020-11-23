import request from "@/utils/request";

export function staff(data){
    return request({
        url:'/pro-api/staff/list/search/1/10',
        method:"POST",
        data
    })
}