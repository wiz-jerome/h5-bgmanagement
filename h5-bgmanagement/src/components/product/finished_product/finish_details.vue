<template>
    <div class="upload">
        <div class="upload_head">
            <span>商品管理></span><span>颜色></span><span>详情</span>
        </div>
        <div class="upload_select">
            <span>商品</span>
            <el-select v-model="value" placeholder="请选择" size="mini">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="upload_list">
            <div v-for="item in imagesList" v-bind:key="item.id">
                <div class="upload_img">
                    <img class="upimg" :src="item.imgsrc" alt="">
                    <p class="colortext">{{item.colortext}}<i class="el-icon-delete"></i></p>
                    <i class="redact"><img src="../../../assets/compile.png" alt=""></i>
                </div>
            </div>
            <div class="upload_wrap">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <div class="input_wrap">
                    <label for="">名称:</label>
                    <input type="text" placeholder="输入">
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: '',
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
        imagesList: [{
            id: '1',
            imgsrc: 'https://cn.vuejs.org/images/logo.png',
            colortext: '黑色'
        }, {
            id: '2',
            imgsrc: 'https://cn.vuejs.org/images/logo.png',
            colortext: '黑色'
        }, {
            id: '3',
            imgsrc: 'https://cn.vuejs.org/images/logo.png',
            colortext: '黑色'
        }, {
            id: '4',
            imgsrc: 'https://cn.vuejs.org/images/logo.png',
            colortext: '黑色'
        }]
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
          console.log(res)
          console.log(file)
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        console.log(file)
        return isJPG && isLt2M;
      }
    }
  }
</script>


<style scope>
  .avatar-uploader .el-upload {
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: rgba(42, 59, 75, 1);

    margin: 15px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: rgba(42, 59, 75, 1);
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }

  .upload{
      width: 100%;
  }
  /* 头部 */
  .upload_head{
      width: 90%;
      padding: 20px 5% 10px 5%;
      font-size: 14px;
      font-weight: 700;
  }
  
    .upload_select{
        padding: 20px 10%;
    }
    .upload_list{
        width: 80%;
        margin: 20px 10%;
    }
  .upload_wrap{
      width: 130px;
      height: 180px;
      background: #ccc;
      font-size: 14px;
      float: left;

  }
  .input_wrap{
    width: 100px;
    margin-left: 15px;
    border: 1px solid #000;
    border-radius: 6px;
    padding: 2px 0;
    background: #fff;
  }
  .input_wrap input{
      width: 48px;
      border: none;
  }
  .upload_img{
      width: 130px;
      height: 180px;
      background: #ccc;
      font-size: 14px;
      float: left;
      margin-right: 10px;
      position: relative;
      margin-bottom: 10px;
  }
  .upimg{
      width: 100px;
      height: 100px;
      margin: 15px;
  }
  .colortext{
      text-align: center;
  }
  .redact{
      position: absolute;
      top: 0;
      right: 0;
  }
  .redact img{
      width: 25px;
      height: 25px;
  }
</style>

