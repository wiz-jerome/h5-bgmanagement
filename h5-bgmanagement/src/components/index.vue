<template>
  <div class="index">
    <el-container style="height: 100%; border: 1px solid #eee">
      <!--头部-->
      <el-header style=" font-size: 12px; padding-right: 30px;">
        <span class="alias">昵称</span>
        <span class="exit">退出</span>
      </el-header>
      <el-container>
        <!--左侧导航-->
        <el-aside width="200px" style="background-color: rgba(42, 59, 75, 1)">
          <el-col>
            <el-menu
              class="el-menu-vertical-demo"
              background-color="rgba(42, 59, 75, 1)"
              text-color="#fff"
              router
              active-text-color="#ffd04b">
              <el-menu-item index="home">
                <span slot="title">首 页</span>
              </el-menu-item>

              <el-submenu index="Product">
                <template slot="title" class="cencelHe">
                  <!-- <span>商品管理</span> -->
                  <el-menu-item class="cencelPosition" index="Product" slot="title">商品管理</el-menu-item>
                </template>
                <el-menu-item index="Audit">审核页面</el-menu-item>
                <el-menu-item index="editPate">编辑页面</el-menu-item>
                <el-submenu index="Finish">
                  <template slot="title" class="cencelHe">
                    <el-menu-item class="cencelPosition" index="Finish">商品</el-menu-item>
                  </template>
                  <el-menu-item index="finishCompile">编辑</el-menu-item>
                  <el-menu-item index="finishDetails">详情</el-menu-item>
                  <el-menu-item index="finishPutaway">上架</el-menu-item>
                </el-submenu>

                <el-submenu index="Part">
                  <template slot="title" class="cencelHe">
                    <el-menu-item class="cencelPosition" index="Part">部位</el-menu-item>
                  </template>
                  <el-menu-item index="partCompile">编辑</el-menu-item>
                  <el-menu-item index="partDetails">详情</el-menu-item>
                  <el-menu-item index="partUpload">上传</el-menu-item>
                </el-submenu>

                <el-submenu index="Texture">
                  <template slot="title" class="cencelHe">
                    <el-menu-item class="cencelPosition" index="Texture">材质</el-menu-item>
                  </template>
                  <el-menu-item index="textureCompile">编辑</el-menu-item>
                  <el-menu-item index="textureDetails">详情</el-menu-item>
                  <el-menu-item index="textureUpload">上传</el-menu-item>
                </el-submenu>

                <el-submenu index="Color">
                  <template slot="title" class="cencelHe">
                    <el-menu-item class="cencelPosition" index="Color">颜色</el-menu-item>
                  </template>
                  <el-menu-item index="colorCompile">编辑</el-menu-item>
                  <el-menu-item index="colorDetails">详情</el-menu-item>
                  <el-menu-item index="colorUpload">上传</el-menu-item>
                </el-submenu>

                <el-menu-item index="productLibrary">产品库</el-menu-item>
              </el-submenu>
              <el-menu-item index="Order">
                <span slot="title">订单管理</span>
              </el-menu-item>

              <el-submenu index="Logistics">
                <template slot="title" class="cencelHe">
                  <el-menu-item class="cencelPosition" index="Logistics">物流管理</el-menu-item>
                </template>
                <el-menu-item index="logisticsBill">月账单</el-menu-item>
              </el-submenu>

              <el-menu-item index="Member">
                <span slot="title">会员管理</span>
              </el-menu-item>
              <el-submenu index="system">
                <template slot="title">
                  <span>系统管理</span>
                </template>
                <el-menu-item index="systemRole">角色管理</el-menu-item>
                <el-menu-item index="systemFeedback">反馈管理</el-menu-item>
                <el-menu-item index="systemAdminlog">管理日志</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>

        <!--右侧内容-->
        <el-container>
          <router-view></router-view>
        </el-container>
      </el-container>
    </el-container>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style scope>
  html, body, #app, .index{
    height: 100%;
    font-size: 16px !important;
  }
  .el-header {
    background-color: rgba(42, 59, 75, 1);
    color: #fff;
    line-height: 60px;
    font-size: 16px !important;
    text-align: right;
  }
  .el-header .exit{
    margin-right: 100px;
  }
  .el-header .alias{
    display: inline-block;
    color: rgba(42, 59, 75, 1);
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    margin-top: 5px;
    line-height: 40px;
    margin-right: 20px;
  }

  .el-aside {
    color: #fff;
  }

  .el-menu {
    border-right: 0;
  }
  .el-menu-item{
    font-size: 16px;
    text-align: center;
  }
  .el-submenu__title{
    font-size: 16px;
    text-align: center;
  }
  .el-submenu .el-menu-item{
    font-size: 14px;
  }
  .el-submenu__title:hover{
    background-color: rgba(242, 242, 242, 0.23921568627451) !important;
  }
  .el-submenu__title:hover{
    background-color: rgba(242, 242, 242, 0.23921568627451) !important;
    
  }
  .el-menu-item:focus, .el-menu-item:hover{
        background-color: rgba(242, 242, 242, 0.23921568627451) !important;
        color: #fff !important;
  }
  .el-menu-item.is-active{
    color: #fff !important;
  }
  .el-menu-item, .el-submenu__title{
    height: 50px !important;
    line-height: 50px !important; 
  }
  .cencelPosition{
    position: absolute;
    left: 0 !important;
    font-size: 16px !important;
  }
</style>
