<template>
  <div class="p_color_bill">
    <div class="p_color_head">
        <span @click="goLogis">商品管理></span><span>颜色</span>
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
    <div class="p_color_bill_body">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="pName"
          label="产品名称">
        </el-table-column>
        <el-table-column
          prop="partNum"
          label="部位">
        </el-table-column>
        <el-table-column
          prop="uploadTime"
          label="上传时间">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <span class="compile" @click="handleClick(scope.row)" type="text" size="small">编辑</span>
            <span type="text" size="small">详情</span>
          </template>
        </el-table-column>
        
      </el-table>
    </div>
    <div class="p_color_bill_bottom">
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
          pName: 'AJ1XXX',
          partNum: '12个',
          uploadTime: '2018-11-11-14:50:20'
        }, {
          pName: 'AJ1XXX',
          partNum: '12个',
          uploadTime: '2018-11-11-14:50:20'
        }, {
          pName: 'AJ1XXX',
          partNum: '12个',
          uploadTime: '2018-11-11-14:50:20'
        }, {
          pName: 'AJ1XXX',
          partNum: '12个',
          uploadTime: '2018-11-11-14:50:20'
        }, {
          pName: 'AJ1XXX',
          partNum: '12个',
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
 
  .compile{
    margin-right: 10px;
  }




  /* 自定义样式 */
  .p_color_bill{
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
  }

  /* 头部 */
  .p_color_head{
      width: 90%;
      padding: 20px 5% 10px 5%;
      font-size: 14px;
      font-weight: 700;
  }


  /* form表单 */
  .el-form{
    display:-webkit-box;
    padding: 0 5% 20px 0;
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
  /* .el-button{

    float: right;
  } */

  /*body部分*/

  .p_color_bill_body{
    width: 80%;
    padding-left: 10%;
  }


  /* 分页 */
  .p_color_bill_bottom{
    width: 90%;
    padding: 5%;
    text-align: center;
  }
</style>
