<template>
  <div class="month_bill">
    <div class="month_head">
        <span @click="goLogis">系统管理></span><span>角色管理</span>
    </div>
    <div class="month_bill_body">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="month"
          label="月份">
        </el-table-column>
        <el-table-column
          prop="totalMoney"
          label="总金额">
        </el-table-column>
        <el-table-column
          prop="billingDetails"
          label="账单明细">
        </el-table-column>
        <el-table-column
          prop="payState"
          label="支付状态">
        </el-table-column>
        
      </el-table>
    </div>
    <div class="month_bill_bottom">
      <el-pagination
        background
        layout="prev, pager, next, total"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value6: '',
        value7: '',
        tableData: [{
          month: 13134234243,
          totalMoney: '2928',
          billingDetails: '查看',
          payState: '已支付'
        }, {
          month: 13134234244,
          totalMoney: '2928',
          billingDetails: '查看',
          payState: '已支付'
        }, {
          month: 13134234245,
          totalMoney: '2928',
          billingDetails: '查看',
          payState: '已支付'
        }, {
          month: 13134234246,
          totalMoney: '2928',
          billingDetails: '查看',
          payState: '已支付'
        }, {
          month: 13134234247,
          totalMoney: '2928',
          billingDetails: '查看',
          payState: '已支付'
        }]
      }
    },
    mounted: function (){
      console.log(this.value6)
        console.log(this.value7)
      this.getInit()
    },
    methods: {
      getInit: function(){
        console.log(this.value6)
        console.log(this.value7)
      },
      goLogis(){
          this.$router.push('/system')
      }
    },
  }
</script>
<style>


  /* 自定义样式 */
  .month_bill{
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
  }

  /* 头部 */
  .month_head{
      width: 90%;
      padding: 20px 5% 80px 5%;
      font-size: 14px;
      font-weight: 700;
  }

  /*body部分*/

  .month_bill_body{
    width: 80%;
    padding-left: 10%;
  }


  /* 分页 */
  .month_bill_bottom{
    width: 90%;
    padding: 5%;
    text-align: center;
  }
</style>
