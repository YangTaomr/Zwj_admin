<template>
  <div>
    <!-- 我是会员页面 -->
    <!-- 会员管理系统 -->
    <crumbs></crumbs>

    <el-form :model="ruleForm" ref="ruleForm"  border class="sdfrom">
      <el-form-item prop="name">
        <el-input v-model="ruleForm.name" placeholder="会员卡号"></el-input>
      </el-form-item>
      <el-form-item prop="user_name">
        <el-input v-model="ruleForm.user_name" placeholder="会员名字"></el-input>
      </el-form-item>
      <el-form-item prop="region">
        <el-select v-model="ruleForm.region" placeholder="支付类型">
          <el-option label="现金" value="xianjin"></el-option>
          <el-option label="微信" value="weixin"></el-option>
          <el-option label="支付宝" value="zhifubao"></el-option>
          <el-option label="银行卡" value="yinhangka"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="date1">
        <el-col :span="8">
          <el-date-picker type="date" placeholder="出生日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-button type="primary">编辑</el-button>
        <el-button type="primary">新增</el-button>
        <el-button  @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="this.$store.state.huiyuan" border style="width: 100%" height="700">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="cardNum" label="会员卡号" width></el-table-column>
      <el-table-column prop="name" label="会员姓名" width></el-table-column>
      <el-table-column prop="birthday" label="会员生日" width></el-table-column>
      <el-table-column prop="phone" label="手机号码" width></el-table-column>
      <el-table-column prop="integral" label="可用积分" width></el-table-column>
      <el-table-column prop="money" label="开卡金额" width></el-table-column>
      <el-table-column label="支付类型" width>
        <template slot-scope="scope">
          <!-- <p
            @change="changeState(scope.row.id,scope.row.payType)"
            v-model="scope.row.payType"
            active-color="#409EFF"
          ></p> -->
        </template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址" width></el-table-column>
      <el-table-column prop="zip" label="操作" width="150">
        <el-button size="mini">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <!-- 分页 -->

    <pagination></pagination>
  </div>
</template>

<script>
import pagination from "@/views/modelu/pagination";
import crumbs from "@/views/modelu/crumbs";

export default {
  data() {
    return {
      currentPage4: 1,
      tableData: [],
      ruleForm: {
        name: "",
        user_name: "",
        region: "",
        date1: ""
      }
    };
  },
  components: {
    // 组件注册
    pagination,
    crumbs
  },
  created() {},

  mounted() {
    this.$store.commit("huiyuanList");

    // this.huiyuan();
  },
  methods: {
     resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    // async huiyuan() {
    //   let { data: res } = await membername();
    //   console.log(res)
    //   this.tableData = res.data.rows;
    //   console.log(this.tableData);
    // },
    //  handleSizeChange(val) {
    //     console.log(`每页 ${val} 条`);
    //   },
    //   handleCurrentChange(val) {
    //     console.log(`当前页: ${val}`);
    //   }
  }
};
</script>

<style scoped>
.el-col {
  margin: 0px 10px;
}
.sdfrom{
display: flex;
}

.el-input{
  margin: 0px 6px;
  width: 220px;
}
</style>
