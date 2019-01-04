<template>
  <div class="product">
    <div class="el-form">
      <form class="hunt" ref="form" :model="form" label-width="80px">
        <div class="hunt_left">
          <label for="colorText" class="colorname">商品名称</label>
          <el-input v-model="input" size="small" placeholder="请输入搜索内容" class="colortext" id="colorText"></el-input>
        </div>
        
        <div class="hunt_right">
          <el-button size="small">查询</el-button>
        </div>
        
      </form>
    </div>
    <div class="p_part_bill_body">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="pName"
          width="120"
          label="商品名称">
        </el-table-column>
        <el-table-column
          prop="imgSrc"
          label="商品封面">
          <template slot-scope="scope">
            <img :src="scope.row.imgSrc" alt="" style="width: 50px;height: 50px">
            <el-col prop="orderDetail"></el-col>
          </template>
        </el-table-column>

        <el-table-column
          prop="part"
          label="部位">
        </el-table-column>
        <el-table-column
          prop="texture"
          label="材质">
        </el-table-column>
        <el-table-column
          prop="color"
          label="颜色">
        </el-table-column>
        <el-table-column
          prop="bottomPrice"
          label="最低价">
        </el-table-column>
        <el-table-column
          prop="topPrice"
          label="最高价">
        </el-table-column>
        <el-table-column
          prop="pageView"
          label="浏览量">
        </el-table-column>
        <el-table-column
          prop="salesVolume"
          label="销量">
        </el-table-column>
        <el-table-column
          prop="volumeTransaction"
          label="成交额">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <span class="compile" @click="handleClick(scope.row)" type="text" size="small">审核</span>
            <span type="text" size="small">编辑</span>
            <span type="text" size="small">发布</span>
          </template>
        </el-table-column>
        
      </el-table>
    </div>

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
          pName: 'AJ1代球鞋定制',
          imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          part: '18个',
          texture: '20种',
          color: '30种',
          texture: '20种',
          bottomPrice: '3000',
          topPrice: '45000',
          pageView: '45000',
          salesVolume: '45000',
          volumeTransaction: '342'
        }, {
          pName: 'AJ1代球鞋定制',
          imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          part: '18个',
          texture: '20种',
          color: '30种',
          texture: '20种',
          bottomPrice: '3000',
          topPrice: '45000',
          pageView: '45000',
          salesVolume: '45000',
          volumeTransaction: '342'
        }, {
          pName: 'AJ1代球鞋定制',
          imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          part: '18个',
          texture: '20种',
          color: '30种',
          texture: '20种',
          bottomPrice: '3000',
          topPrice: '45000',
          pageView: '45000',
          salesVolume: '45000',
          volumeTransaction: '342'
        }, {
          pName: 'AJ1代球鞋定制',
          imgSrc: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          part: '18个',
          texture: '20种',
          color: '30种',
          texture: '20种',
          bottomPrice: '3000',
          topPrice: '45000',
          pageView: '45000',
          salesVolume: '45000',
          volumeTransaction: '342'
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
/*body部分*/

  .p_part_bill_body{
    width: 94%;
    padding-left: 3%;
  }

  /* form表单 */
  .el-form{
    display:-webkit-box;
    padding: 0 5% 16px 0;
    font-size: 14px;
    width: 95%;
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
  .colorname{
    margin-right: 30px;

  }
  .colortext{
    width: 150px;
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
