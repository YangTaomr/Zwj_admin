<template>
  <div>
    <!--    <template></template>  -->
    <from_modelu></from_modelu>

      <el-table
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
              <el-button >编辑</el-button>
              <el-button>删除</el-button>
            </template>
          </el-table-column>
      </el-table>

    <pagination></pagination>

  </div>
</template>

<script>
import pagination from '@/views/modelu/pagination'
import from_modelu from '@/views/modelu/from'


export default {
  data() {
    return {
      // 数据
    };
  },
  components: {
    // 组件注册
    pagination,
    from_modelu
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

  }
};
</script>
/*// css 样式*/
<style scoped>

</style>