<template>
  <div class="login">
    <!--<div>-->
      <div class="headerBox">
        <h1>金寻管理平台</h1>
      </div>
      <div class="bottom-box">
        <div class="form-box">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-header class="jx-header">金寻管理平台</el-header>

            <el-form-item label="登录账户" prop="name">
              <el-input v-model="ruleForm2.name"></el-input>
            </el-form-item>

            <!--<el-form-item label="登录账户">-->
              <!--<el-input v-model="ruleForm2.name"></el-input>-->
            <!--</el-form-item>-->

            <el-form-item label="账户密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass"></el-input>
            </el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">立即登录</el-button>
          </el-form>
        </div>

      </div>
    <!--</div>-->
  </div>
</template>

<script>
export default {
   data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            // this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      };
      return {
        ruleForm2: {
          name: '',
          pass: ''
        },
        rules2: {
          name: [
            { required: true, message: '请输入账户号', trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5-18 个字符', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('home')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,body,#app, .login{
  width:100%;
  height:100%;
}
/* .login{

} */
.login .headerBox{
  width: 100%;
  height: 100px;
  text-align: center;
  background: #fff;
  line-height: 100px;
  color: #333;
  font-size: 26px;
}
.login .headerBox .jx-header{
  color: #333;
  font-size: 18px;
  margin: 10px;
}
.login .bottom-box{
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/loginbg.jpg") no-repeat;
  background-size: 100% 100%;

}
.login .form-box{
  width: 540px;
  /*height: 500px;*/
  padding: 20px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  background: #fff;

}
</style>
