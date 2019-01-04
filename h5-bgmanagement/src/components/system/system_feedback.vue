<template>
  <div class="feedback">
    <div class="feedback_body">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="month"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="totalMoney"
          label="昵称">
        </el-table-column>
        <el-table-column
          prop="billingDetails"
          label="时间">
        </el-table-column>
        <el-table-column
          prop="retroaction"
          label="反馈内容">
        </el-table-column>
        
      </el-table>
    </div>
    <div class="feedback_bottom">
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
          retroaction: '我的鞋子没有办法退'
        }, {
          month: 13134234244,
          totalMoney: '2928',
          billingDetails: '查看',
          retroaction: '我的鞋子没有办法退'
        }, {
          month: 13134234245,
          totalMoney: '2928',
          billingDetails: '查看',
          retroaction: '我的鞋子没有办法退'
        }, {
          month: 13134234246,
          totalMoney: '2928',
          billingDetails: '查看',
          retroaction: '我的鞋子没有办法退'
        }, {
          month: 13134234247,
          totalMoney: '2928',
          billingDetails: '查看',
          retroaction: '我的鞋子没有办法退'
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
      }
    },
  }
</script>
<style>




  /* 自定义样式 */
  .feedback{
    width: 100%;
    background-color: #f8f8f8;
    padding-top: 100px;
  }

  /* 头部 */
  .month_head{
      width: 90%;
      padding: 20px 5% 80px 5%;
      font-size: 14px;
      font-weight: 700;
  }

  /*body部分*/

  .feedback_body{
    width: 80%;
    padding-left: 10%;
  }


  /* 分页 */
  .feedback_bottom{
    width: 90%;
    padding: 5%;
    text-align: center;
  }
</style>
