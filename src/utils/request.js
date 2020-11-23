//axios的一些配置

//引入axios
import axios from "axios";

import {Loading} from 'element-ui'
//通过axios实例配置请求的公共接口
const request = axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// Loading加载数据
const loading = {
    loadingService: null,
    // 开启loading加载
    open(){
        if(this.loadingService == null){
            this.loadingService = Loading.service({
                target:".el-main",
                text:'拼命加载中...',
                background:'rgba(0,0,0,0.5)'
            })
        }
    },
    // 关闭loading加载
    close(){
        if(this.loadingService!=null){
            this.loadingService.close();
        }
        this.loadingService = null
    }
}

//配置请求 拦截  ---   发送请求的触发,请求也没有
// 添加请求拦截器
request.interceptors.request.use(function (config) {
    loading.open()
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    loading.close()
    return Promise.reject(error);
});



//配置响应 拦截  ---   响应数据的时候触发,响应没有结束
// 添加响应拦截器
request.interceptors.response.use(function (response) {
    loading.close()
    // 对响应数据做点什么
    return response;
}, function (error) {
    loading.close()
    // 对响应错误做点什么
    return Promise.reject(error);
});

//导出axios
export default request;