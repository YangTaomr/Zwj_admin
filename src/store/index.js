import Vue from "vue";
import Vuex from "vuex";
// 接口api
import {goods} from "@/api/goods";
import {staff} from "@/api/staff";

Vue.use(Vuex);

export default new Vuex.Store({
  // 数据存储
  state: {
    // 面包屑
    crumbs:'',
    // 分页数据
    total:0,//总页数
    size: 20,//请求条数
    current: 1,//页码
    rows : [],//list数据
    // 表单数据
    fromlist:[],//表单placeholder
    frombtn:[],//表单按钮
  },
  // 数据更改
  mutations: {
    // 总页数
    TOTAL(state,val){
      state.total=val
    },
    // 最长数据
    SIZE(state,val){
      state.size=val
    },
    // 更改页码
    CURRENT(state,val){
      state.current=val
    },
    // 商品初始页面获取数据
    GetCatehoryList(state){
      goods(state.current, state.size).then(respoten=>{
        state.rows= respoten.data.data.rows
        state.total=respoten.data.data.total
        state.fromlist=['商品名称','商品编号','商品供应商']
        state.crumbs='商品管理'

      })
    },
    GetstaffList(state){
      staff(state.current, state.size).then(respoten=>{
        state.rows= respoten.data.data.rows
        state.total=respoten.data.data.total
        state.fromlist=['账号','姓名']
        state.crumbs='员工管理'
      })
    },
  },
  // 数据计算属性
  getters(){

  },
  // 异步更改数据
  actions: {},
  // 模块化
  modules: {}
});
