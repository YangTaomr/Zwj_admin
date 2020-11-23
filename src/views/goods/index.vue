<template>
  <div>
    <!--    <template></template>  -->
    <crumbs></crumbs>

      <userForm></userForm>

      <el-table
          height="500"
          :data="this.$store.state.rows"
          border
          style="width: 100%">
          <el-table-column
              type="index"
              label="序号">
          </el-table-column>
          <el-table-column
              prop="name"
              label="商品名称">
          </el-table-column>
          <el-table-column
              prop="code"
              label="商品编码">
          </el-table-column>
          <el-table-column
              prop="spec"
              label="商品规格">
          </el-table-column>
          <el-table-column
              prop="retailPrice"
              label="零售价">
          </el-table-column>
          <el-table-column
              prop="purchasePrice"
              label="进货价">
          </el-table-column>
          <el-table-column
              prop="storageNum"
              label="库存数量">
          </el-table-column>
          <el-table-column
              prop="supplierName"
              label="供应商">
          </el-table-column>
          <el-table-column
              label="操作">
            <template slot-scope="scope">
              <el-button size="small" @click="compiles(scope.row)">编辑</el-button>
              <el-button size="small" @click="Delete(scope.row.id)" type="danger">删除</el-button>
            </template>
          </el-table-column>
      </el-table>

    <pagination></pagination>


    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form ref="ruleForm">
        <el-form-item label="商品名称" align="left" label-width="120px">
          <el-input v-model="compile.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品编码" align="left" label-width="120px">
          <el-input v-model="compile.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品规格" align="left" label-width="120px">
          <el-input v-model="compile.spec" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="零售价" align="left" label-width="120px">
          <el-input v-model="compile.retailPrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="进货价" align="left" label-width="120px">
          <el-input v-model="compile.purchasePrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="库存数量" align="left" label-width="120px">
          <el-input v-model="compile.storageNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商" align="left" label-width="120px">
          <el-input v-model="compile.supplierName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="TRUE()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
// 接口
import {goodsDelte} from "@/api/goods"

// 组件
import pagination from '@/views/modelu/pagination'
import userForm from '@/views/modelu/user_form'
import crumbs from '@/views/modelu/crumbs'


export default {
  data() {
    return {
      // 数据
      compile:{},
      dialogFormVisible:false
    };
  },
  components: {
    // 组件注册
    pagination,
    userForm,
    crumbs,
  },
  beforeCreate() {
    // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  },
  create() {
    // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始， 属性目前不可见。
  },
  beforeMount() {
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  },
  mounted() {
    // el 被新创建的 vm. 替换，并挂载到实例上去之后调用该钩子。
    // 调用接口渲染数据
    this.$store.commit('GetCatehoryList')
  },
  beforeUpdate() {
    // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  },
  updated() {
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环
  },
  beforeDestroy() {
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
  },
  destroyed() {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
  },
  computed: {
    // 计算属性
  },
  watch: {
    // 数据监听
  },
  methods: {
    // 方法定义
    // 删除
    Delete(id){
      goodsDelte().then(res=>{
        if (res.status==200){
          this.$store.state.rows.filter(item=>{
            if (item.id===id){
              this.$store.state.rows.splice(item,1)
            }
          })
          this.$message.success('删除成功 ');
        }else{
          this.$message.error('删除失败 ');
        }
      })
    },
    // 编辑
    compiles(row){
      this.dialogFormVisible=true
      console.log(this.$store.state.dialogFormVisible)
      this.compile=row
    },
    cancel(){
      this.dialogFormVisible=false
    },
    TRUE(){
      this.dialogFormVisible=false
      this.$store.state.rows.filter(item=>{
        if (item===this.compile){
          this.compile=item
        }
      })
    }
  }
};
</script>
/*// css 样式*/
<style scoped>

</style>