<template>
  <div class="month_bill">
    <!-- <div class="month_head">
        <span @click="goLogis">物流管理></span><span>月账单</span>
    </div> -->
    <div class="month_head">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Logistics' }">物流管理</el-breadcrumb-item>
        <el-breadcrumb-item>月账单</el-breadcrumb-item>
      </el-breadcrumb>
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
          label="账单明细">
          <template slot-scope="scope">
            <span v-if="scope.row.billingDetails=='1'" type="text" size="small">未出</span>
            <span class="button_cursor" v-else @click="handleClick(scope.row)" type="text" size="small">查看</span>
          </template>
        </el-table-column>

        <el-table-column
          label="支付状态">
          <template slot-scope="scope">
            <span v-if="scope.row.payState=='0'" type="text" size="small">未出帐</span>
            <span class="load_pay" v-else-if="scope.row.payState=='1'" @click="paymentClick(scope.row)" type="text" size="small">待支付</span>
            <span v-else type="text" size="small">已支付</span>
          </template>
        </el-table-column>
        
      </el-table>
    </div>
    <div class="month_bill_bottom">
      <el-pagination
        background
        layout="prev, pager, next, total"
        :total="1000">
      </el-pagination>
    </div>
    <div v-show="popBody" class="pop_body"></div>
    <div v-show="popUp" class="pop_up">
      <div class="pop_head">
        <p>账单明细</p>
        <i @click="closeClick" class="el-icon-close"></i>
      </div>
      <el-table
        :data="tableData2"
        height="350"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="oddNumbers"
          label="单号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="cost"
          label="费用">
        </el-table-column>
      </el-table>
      <div class="poppagin">
        <el-pagination
          background
          layout="prev, pager, next, total"
          :total="100">
        </el-pagination>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value6: '',
        value7: '',
        popBody: false,
        popUp: false,
        tableData: [{
          month: 13134234243,
          totalMoney: '2928',
          billingDetails: '1',
          payState: '0'
        }, {
          month: 13134234244,
          totalMoney: '2928',
          billingDetails: '1',
          payState: '1'
        }, {
          month: 13134234245,
          totalMoney: '2928',
          billingDetails: '1',
          payState: '0'
        }, {
          month: 13134234246,
          totalMoney: '2928',
          billingDetails: '0',
          payState: '2'
        }, {
          month: 13134234247,
          totalMoney: '2928',
          billingDetails: '0',
          payState: '1'
        }],
        tableData2: [{
          date: '2016-05-03',
          oddNumbers: 'sf#23568945623',
          cost: '25'
        }, {
          date: '2016-05-02',
          oddNumbers: 'sf#23568945623',
          cost: '25'
        }, {
          date: '2016-05-04',
          oddNumbers: 'sf#23568945623',
          cost: '25'
        }, {
          date: '2016-05-01',
          oddNumbers: 'sf#23568945623',
          cost: '25'
        }, {
          date: '2016-05-08',
          oddNumbers: 'sf#23568945623',
          cost: '25'
        }, {
          date: '2016-05-06',
          oddNumbers: 'sf#23568945623',
          cost: '25'
        }, {
          date: '2016-05-07',
          oddNumbers: 'sf#23568945623',
          cost: '25'
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
      // 返回物流管理页面
      goLogis(){
          this.$router.push('/logistics')
      },
      // 查看事件
      handleClick(e){
        console.log(e)
        this.popBody = true;
        this.popUp = true;
      },
      // 待支付事件
      paymentClick(e){
        this.$prompt('请输入支付密码', '确认支付', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '密码错误请重新输入'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '支付成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      closeClick(){
        this.popBody = false;
        this.popUp = false;
      }
    },
  }
</script>
<style scope>

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
  .button_cursor{
    cursor: pointer;
  }
  .load_pay{
    cursor: pointer;
    line-height: 30px;
    padding: 2px 8px;
    background-color: rgb(42, 59, 75);
    color: #fff;
    border-radius: 4px;

  }
  .el-table::before{
    height: 0;
  }
  /* 分页 */
  .month_bill_bottom{
    width: 90%;
    padding: 5%;
    text-align: center;
  }

</style>
