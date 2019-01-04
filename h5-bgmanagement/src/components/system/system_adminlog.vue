<template>
  <div class="order">
    <div class="month_head">
        <span @click="goLogis">系统管理></span><span>管理日志</span>
    </div>
    <div class="order_head">
      <div class="head_left">
        <div class="block">
          <span class="demonstration">时间</span>
          {{value6}}
          <el-date-picker
            v-model="value6"
            type="daterange"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="head_right">
        <el-button>查询</el-button>
      </div>

    </div>
    <div class="order_body">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="orderNo"
          label="时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="accountNo"
          label="名字"
          width="180">
        </el-table-column>
        <el-table-column
          prop="orderState"
          label="职位">
        </el-table-column>
        <el-table-column
          prop="orderMoney"
          label="操作内容">
        </el-table-column>
      </el-table>
    </div>
    <div class="order_bottom">
      <el-pagination
        background
        :page-size="5"
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
        value: '',
        tableData: [{
          orderNo: 13134234243,
          accountNo: '18788888888',
          orderDetail: 'AJ1代球鞋定制',
          orderState: '待付款',
          imgsrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          orderMoney: 2500
        }, {
          orderNo: 13134234244,
          accountNo: '18788888888',
          orderDetail: 'AJ1代球鞋定制',
          orderState: '待付款',
          imgsrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          orderMoney: 2500
        }, {
          orderNo: 13134234245,
          accountNo: '18788888888',
          orderDetail: 'AJ1代球鞋定制',
          orderState: '待付款',
          imgsrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          orderMoney: 2500
        }, {
          orderNo: 13134234246,
          accountNo: '18788888888',
          orderDetail: 'AJ1代球鞋定制',
          orderState: '待付款',
          imgsrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          orderMoney: 2500
        }, {
          orderNo: 13134234247,
          accountNo: '18788888888',
          orderDetail: 'AJ1代球鞋定制',
          orderState: '待付款',
          imgsrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          orderMoney: 2500
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
  .order{
    width: 100%;
    height: 100%;
  }

  /* 头部 */
  .order_head{
    width: 80%;
    height: 80px;
    padding-left: 10%;
    margin-top: 30px;
    /*line-height: 80px;*/
  }
  /* 头部 */
  .month_head{
      width: 90%;
      padding: 20px 5% 30px 5%;
      font-size: 14px;
      font-weight: 700;
  }
  /* .order_head span{
    /*line-height: 80px;*/
  /* }  */
  .order_head div{
    float: left;
    display: flex;
  }
  .order_head .head_left{
    margin-right: 50px;
  }
  .order_head .head_right{
    float: right;
  }

  /*body部分*/

  .order_body{
    width: 80%;
    padding-left: 10%;
  }


  /* 分页 */
  .order_bottom{
    width: 90%;
    padding: 5%;
    text-align: center;
  }
</style>
