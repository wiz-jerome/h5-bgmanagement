<template>
  <div class="logistis">
    <div class="logistis_head">
      <div class="head_left">
        <div class="block">
          <span class="demonstration">时间</span>
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
      <div class="head_demand">
        <el-button @click="inquire(value6)">查询</el-button>
      </div>
      <div class="head_right">
        <p @click="goMonth">月账单记录</p>
      </div>

    </div>
    <div class="logistis_body">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="orderNo"
          label="订单号">
        </el-table-column>
        <el-table-column
          prop="getLogis"
          label="取件物流">
        </el-table-column>
        <el-table-column
          prop="getType"
          label="取件状态">
        </el-table-column>
        <el-table-column
          prop="getCost"
          label="取件费用">
        </el-table-column>
        <el-table-column
          prop="postLogis"
          label="发件物流">
        </el-table-column>
        <el-table-column
          prop="postType"
          label="发件状态">
        </el-table-column>
        <el-table-column
          prop="postCost"
          label="发件费用">
        </el-table-column>
      </el-table>
    </div>
    <div class="logistis_bottom">
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
          orderNo: 13134234243,
          getLogis: 'SF#2356789xxxx',
          getType: '已取件',
          getCost: '8.00',
          postLogis: '待录入',
          postType: '待发货',
          postCost: 0
        }, {
          orderNo: 13134234244,
          getLogis: 'SF#2356789xxxx',
          getType: '已取件',
          getCost: '8.00',
          postLogis: '待录入',
          postType: '待发货',
          postCost: 0
        }, {
          orderNo: 13134234245,
          getLogis: 'SF#2356789xxxx',
          getType: '已取件',
          getCost: '8.00',
          postLogis: '待录入',
          postType: '待发货',
          postCost: 0
        }, {
          orderNo: 13134234246,
          getLogis: 'SF#2356789xxxx',
          getType: '已取件',
          getCost: '8.00',
          postLogis: '待录入',
          postType: '待发货',
          postCost: 0
        }, {
          orderNo: 13134234247,
          getLogis: 'SF#2356789xxxx',
          getType: '已取件',
          getCost: '8.00',
          postLogis: '待录入',
          postType: '待发货',
          postCost: 0
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
      goMonth(){
        this.$router.push('/logisticsBill');
      },
      inquire(e){
        if(e == ''){
          alert('请输入起止时间');
          return;
        }
        alert(e);
      }
    },
  }
</script>
<style scope>


  /* 自定义样式 */
  .logistis{
    width: 100%;
    height: 100%;
  }

  /* 头部 */
  .logistis_head{
    width: 80%;
    height: 80px;
    padding-left: 10%;
    margin-top: 30px;
    /*line-height: 80px;*/
  }
  .logistis_head div{
    float: left;
    display: flex;
  }
  .logistis_head .head_left{
    margin-right: 50px;
  }
  .logistis_head .head_demand{
    margin-left: 35%;
  }
  .logistis_head .head_right{
    float: right;
    margin-right: 100px;
    line-height: 40px;
    cursor: pointer;
  }

  /*body部分*/

  .logistis_body{
    width: 80%;
    padding-left: 10%;
  }


  /* 分页 */
  .logistis_bottom{
    width: 90%;
    padding: 5%;
    text-align: center;
  }
</style>
