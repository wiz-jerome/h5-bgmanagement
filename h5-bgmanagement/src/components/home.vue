<template>
  <div class="home">
    <div class="headerH">
      <div  type="flex" class="purpleBox" justify="space-around">
        <div class="bg-purple">订单总数：1234</div>
        <div class="bg-purple">收入总数：123141</div>
        <div class="bg-purple">会员总数：243</div>
        <div class="bg-purple">首页打开次数：342424232</div>
      </div>
    </div>
    <div class="centerH">
      <ul>
        <li :class="selecType == '1' ? 'hover' : ''" @click="selectChunk('1')">会员</li>
        <li :class="selecType == '2' ? 'hover' : ''" @click="selectChunk('2')">订单</li>
        <li :class="selecType == '3' ? 'hover' : ''" @click="selectChunk('3')">首页打开次数</li>
        <li :class="selecType == '4' ? 'hover' : ''" @click="selectChunk('4')">收入</li>
      </ul>
      <ul>
        <li :class="periodType == '1' ? 'hover' : ''" @click="selectPeriod('1')">日</li>
        <li :class="periodType == '2' ? 'hover' : ''" @click="selectPeriod('2')">周</li>
        <li :class="periodType == '3' ? 'hover' : ''" @click="selectPeriod('3')">月</li>
      </ul>
    </div>
    <div id="myChart" :style="{width: '1000px', height: '400px'}">
      <chart class="content" :class="dpr" :options="option" ref="echarts" :auto-resize="true"></chart>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dpr: 'chart-size-' + document.documentElement.dataset.dpr + 'dpr',
        option: {
          color: '#4D8AF5',
          tooltip : {
            trigger: 'axis',
            backgroundColor: 'rgba(42, 59, 75, 1)',
            textStyle: {
              fontSize: 14 * document.documentElement.dataset.dpr
            }
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }]
        },
        selecType: '1',
        periodType: '1'
      }
    },
    mounted(){
      // this.drawLine();
    },
    methods: {
      selectChunk(selecType){
        this.selecType = selecType

      },
      selectPeriod(periodType){
        this.periodType = periodType
      }
    }
  }
</script>
<style scope>

  .el-row {
    margin-bottom: 20px;

  }
  .el-row:last-child {
     margin-bottom: 0;
   }
  .grid-content {
    border-radius: 4px;
    min-height: 60px;
  }
  .headerH{
    padding: 50px;
    padding-left: 10%;
  }
  .purpleBox{
    display: flex;
    /* justify-content: center; */
  }
  .bg-purple {
    height: 60px;
    line-height: 60px;
    margin: 0 80px 0 0;
    background: rgba(42, 59, 75, 1);
    color: #fff;
    font-size: 14px;
    padding: 0 20px;
    border-radius: 4px;
  }

  .centerH{
    width: 80%;
    height: 50px;
    line-height: 50px;
    display: flex;
    background: rgba(42, 59, 75, 1);
    margin-left: 10%;
    color: #fff;
    padding: 0 4%;
    justify-content: space-between;
    font-size: 14px;
  }
  .centerH ul{
    display: flex;
  }
  .centerH ul li{
    padding: 0 6px;
    text-align: center;
  }
  .centerH ul:last-child li{
    width: 40px;
  }
 
  .hover{
    color: rgba(42, 59, 75, 1);
    background-color: rgba(242, 242, 242, 1);
  }
 /* .centerH ul li:hover{
    opacity: 0.6;
  } */
  /* echarts */
  .content{
    width: 100%;
    margin-left: 5%;
  }
</style>
