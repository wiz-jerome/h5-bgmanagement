<template>
  <div class="product">
    <div class="product_head">
        <span @click="goLogis">商品管理></span><span>商品</span>
    </div>
    <div class="el-form">
      <form class="hunt" ref="form" :model="form" label-width="80px">
        <div class="hunt_left">
          <label for="colorText">活动名称:</label>
          <el-input v-model="input" size="small" placeholder="请输入内容" id="colorText"></el-input>
        </div>
        
        <div class="hunt_right">
          <el-button size="small">查询</el-button>
          <el-button size="small" @click="goUpload">上传</el-button>
        </div>
        
      </form>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>商品名称</th>
          <th>商品图片</th>
          <th>上传时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" v-bind:key="item.id">
          <td>{{item.pName}}</td>
          <td class="imgbox">
            <img v-for="imglis in item.imgList" v-bind:key="imglis.id" :src="imglis.imgSrc" alt="">
          </td>
          <td>{{item.uploadTime}}</td>
          <td class="czclick">
            <span>编辑</span><span>详情</span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="p_part_bill_bottom">
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
          id: '1',
          pName: 'AJ1XXX',
          imgList: [{
            id: '1',
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            id: '2',
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            id: '3',
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            id: '4',
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            id: '5',
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            id: '6',
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, ],
          uploadTime: '2018-11-11-14:50:20'
        }, {
          id: '2',
          pName: 'AJ1XXX',
          imgList: [{
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, ],
          uploadTime: '2018-11-11-14:50:20'
        }, {
          id: '3',
          pName: 'AJ1XXX',
          imgList: [{
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, ],
          uploadTime: '2018-11-11-14:50:20'
        }, {
          id: '4',
          pName: 'AJ1XXX',
          imgList: [{
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, ],
          uploadTime: '2018-11-11-14:50:20'
        }, {
          id: '5',
          pName: 'AJ1XXX',
          imgList: [{
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, {
            imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png'
          }, ],
          uploadTime: '2018-11-11-14:50:20'
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        input: ''
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
      },
      handleClick(row) {
        console.log(row);
      },
      onSubmit() {
        console.log('submit!');
      },
      goUpload() {
        this.$router.push('/upload')
      }
    },
  }
</script>
<style scope>
/* 头部 */
  .product{
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
  }
  .product_head{
      width: 90%;
      padding: 16px 5% 10px 5%;
      font-size: 14px;
      font-weight: 700;
  }


  /* form表单 */
  .el-form{
    display:-webkit-box;
    padding: 0 5% 16px 0;
    font-size: 14px;
    width: 100%;
  }
  .el-input{
    width: 100px;
    margin-right: 80px;
  }
  .hunt{
    width: 80%;
    margin: 30px 10%;
  }
  .hunt_left{
    float: left;
  }
  .hunt_right{
    float: right;
  }


  /* 表格 */
  .table{
    width: 80%;
    margin-left: 10%;
    text-align: center;
  }
  .table tbody tr{
    width: 100%;
    height: 60px;
    border-bottom: 2px #ccc solid;
  }
  .table tbody tr:last-child{
    border:none;
  }
  .imgbox img{
    width: 40px;
    height: 40px;
    border: 3px solid #ccc;
    margin: 20px 1px 10px;
  }
  .czclick span{
    padding: 0 5px;
  }

  /* 分页 */
  .p_part_bill_bottom{
    width: 90%;
    padding: 3% 0 2%;
    text-align: center;
  }
</style>
