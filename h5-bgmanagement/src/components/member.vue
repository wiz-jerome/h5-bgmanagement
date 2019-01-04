<template>
  <div class="member">
    <div class="block">
      <span class="demonstration">地址</span>
      <el-cascader
        :options="options"
        v-model="selectedOptions"
        @change="handleChange">
      </el-cascader>
    </div>
    <!-- <div class="linkage">
      <el-select
        v-model="sheng"
        @change="choseProvince"
        placeholder="省级地区">
        <el-option
          v-for="item in province"
          :key="item.id"
          :label="item.value"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select
        v-model="shi"
        @change="choseCity"
        placeholder="市级地区">
        <el-option
          v-for="item in shi1"
          :key="item.id"
          :label="item.value"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select
        v-model="qu"
        @change="choseBlock"
        placeholder="区级地区">
        <el-option
          v-for="item in qu1"
          :key="item.id"
          :label="item.value"
          :value="item.id">
        </el-option>
      </el-select>
    </div> -->
    <div class="month_bill_body">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="headPhoto"
          label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.headPhoto" alt="" style="width: 50px;height: 50px">
            <el-col prop="orderDetail"></el-col>
          </template>
        </el-table-column>
        <el-table-column
          prop="nickname"
          label="昵称">
        </el-table-column>
        <el-table-column
          prop="phoneNo"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="orderNum"
          label="下单数">
        </el-table-column>
        <el-table-column
          prop="expend"
          label="支出金额">
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      mapJson:'../static/json/map.json',
      province:'',
      sheng: '',
      shi: '',
      shi1: [],
      qu: '',
      qu1: [],
      city:'',
      block:'',
      tableData: [{
          headPhoto: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          nickname: 'Becks',
          phoneNo: '查看',
          address: '飞马旅1楼110',
          orderNum: 12,
          expend: 42432
        }, {
          headPhoto: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          nickname: 'Becks',
          phoneNo: '查看',
          address: '飞马旅1楼110',
          orderNum: 12,
          expend: 42432
        }, {
          headPhoto: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          nickname: 'Becks',
          phoneNo: '查看',
          address: '飞马旅1楼110',
          orderNum: 12,
          expend: 42432
        }, {
          headPhoto: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          nickname: 'Becks',
          phoneNo: '查看',
          address: '飞马旅1楼110',
          orderNum: 12,
          expend: 42432
        }, {
          headPhoto: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          nickname: 'Becks',
          phoneNo: '查看',
          address: '飞马旅1楼110',
          orderNum: 12,
          expend: 42432
        }],
        options: [],
        selectedOptions: []
    }
  },
  methods:{
    handleChange(e){
      console.log(e)
    },
    // 加载china地点数据，三级
      getCityData:function(){
        var that = this
        axios.get(this.mapJson).then(function(response){
          if (response.status==200) {
            var data = response.data
            that.province = []
            that.city = []
            that.block = []
            // 省市区数据分类
            // console.log(JSON.stringify(data))
            for (var item in data) {
              if (item.match(/0000$/)) {//省
                that.province.push({id: item, value: data[item], children: []})
                // console.log(JSON.stringify(that.province))
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: []})
                // console.log(JSON.stringify(that.city))                
              } else {//区
                that.block.push({id: item, value: data[item]})
              }
            }
            // 分类市级
            for (var index in that.province) {
              for (var index1 in that.city) {
                if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                  that.province[index].children.push(that.city[index1])
                }
                delete that.city[index1].children
                that.city[index1].label = that.city[index1].value
              }
              that.province[index].label = that.province[index].value
            }
            that.options = that.province          
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
      // 选省
      choseProvince:function(e) {
        for (var index2 in this.province) {
          if (e === this.province[index2].id) {
            this.shi1 = this.province[index2].children
            this.shi = this.province[index2].children[0].value
            this.qu1 =this.province[index2].children[0].children
            this.qu = this.province[index2].children[0].children[0].value
            this.E = this.qu1[0].id
          }
        }
      },
      // 选市
      choseCity:function(e) {
        for (var index3 in this.city) {
          if (e === this.city[index3].id) {
            this.qu1 = this.city[index3].children
            this.qu = this.city[index3].children[0].value
            this.E = this.qu1[0].id
            // console.log(this.E)
          }
        }
      }
    },
    created:function(){
      this.getCityData()
    }
}
</script>
<style>
.member{
  width: 90%;
  padding: 30px 5% 0 5%;
}

  /* 分页 */
  .order_bottom{
    width: 90%;
    padding-top: 3%;
    text-align: center;
  }
</style>
