<template>
  <div class="order">
    <div class="order_head">
      <div class="head_left">
        <div class="block">
          <label class="demonstration">时间</label>
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
      <div class="head_center">
        <label class="demonstration">订单状态</label>
        <el-select v-model="value" placeholder="全部">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="head_right">
        <el-button @click="inquire(value6)">查询</el-button>
      </div>

    </div>
    <div class="order_body">
      <el-table
        :data="tableData"
        height="500"
        style="width: 100%">
        <el-table-column
          prop="orderNo"
          label="订单号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="accountNo"
          label="用户手机号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="imgsrc"
          label="订单明细">
          <template slot-scope="scope">
            <img :src="scope.row.imgsrc" alt="" style="width: 50px;height: 50px">
            <el-col prop="orderDetail"></el-col>
          </template>
        </el-table-column>
        <el-table-column
          label="订单状态">
          <template slot-scope="scope">
            <span class="button_cursor" @click="handleClick(scope.row.orderState)" type="text" size="small">{{scope.row.orderState}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="orderMoney"
          label="订单金额">
        </el-table-column>
      </el-table>
    </div>
    <div class="order_bottom">
      <el-pagination
        background
        layout="prev, pager, next, total"
        :total="50">
      </el-pagination>
    </div>
    <div v-show="popBody" class="pop_body"></div>
    <div v-show="popUp" class="pop_up">
      <div class="pop_head">
        <p>售后详情</p>
        <i @click="closeClick" class="el-icon-close"></i>
      </div>
      <div class="reason_detail">
        <p>售后原因：</p>
        <p>{{reason}}</p>
        <br>
        <p>上传图片：</p>
        <img v-for="item in upImg" v-bind:key="item.id" :src="item.imgSrc" alt="" style="width:150px;height:150px;margin:5px">
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
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        tableData: [{
          orderNo: 13134234243,
          accountNo: '18788888888',
          orderDetail: 'AJ1代球鞋定制',
          orderState: '待取件',
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
          orderState: '待发货',
          imgsrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          orderMoney: 2500
        }, {
          orderNo: 13134234246,
          accountNo: '18788888888',
          orderDetail: 'AJ1代球鞋定制',
          orderState: '待收货',
          imgsrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          orderMoney: 2500
        }, {
          orderNo: 13134234247,
          accountNo: '18788888888',
          orderDetail: 'AJ1代球鞋定制',
          orderState: '售后',
          imgsrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          orderMoney: 2500
        }, {
          orderNo: 13134234247,
          accountNo: '18788888888',
          orderDetail: 'AJ1代球鞋定制',
          orderState: '完成',
          imgsrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          orderMoney: 2500
        }],
        upImg: [{
          id: 1,
          imgSrc: 'https://c.static-nike.com/a/images/t_default/wj1arwgmqk0x0rjnnxh7/air-max-97-qs-%E7%94%B7%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-HMWrv0.jpg'
        }, {
          id: 2,
          imgSrc: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/yp7guk6bj1vxzivsvc3y/air-max-97-qs-%E7%94%B7%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-HMWrv0.jpg'
        }, {
          id: 3,
          imgSrc: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bq13ftwoq5axnydlhqdf/air-max-97-qs-%E7%94%B7%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-HMWrv0.jpg'
        }, {
          id: 4,
          imgSrc: 'https://c.static-nike.com/a/images/t_PDP_144_v1/f_auto/egaurfk8369rby5zguew/air-max-97-qs-%E7%94%B7%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-HMWrv0.jpg'
        }],
        reason:'鞋子修坏了求赔偿,XXXXXXXXXXXXX'
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
      inquire(e){
        if(e == ''){
          alert('请输入起止时间');
          return;
        }
        alert(e);
      },
      handleClick(type){
        console.log(type)
        if(type === '售后'){
          this.popBody = true;
          this.popUp = true;
        }
      },
      closeClick(){
        this.popBody = false;
        this.popUp = false;
      }
    },
  }
</script>
<style>


  /* 自定义样式 */
  .order{
    width: 100%;
    /* height: 100%; */
  }

  /* 头部 */
  .order_head{
    width: 80%;
    height: 80px;
    padding-left: 10%;
    margin-top: 30px;
    /*line-height: 80px;*/
  }
  .order_head span{
    /*line-height: 80px;*/
  }
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
    padding-top: 3%;
    text-align: center;
  }

  .reason_detail{
    margin: 10px;
  }
</style>
