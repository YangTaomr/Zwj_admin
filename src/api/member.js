import request from '@/utils/request'


export function members(data){
    return request({
        url:`/pro-api/member/list/search/1/10`,
        method:'POST',
        data
        // data:{
        //     pagenum:1,
        //     pagesize:10,
        //     // total:''
        // }
    })

}