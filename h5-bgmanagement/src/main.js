// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入echarts
import ECharts from 'vue-echarts'


Vue.use(ECharts)
Vue.component('chart', ECharts)
// Vue.prototype.$echarts = echarts


// 注册elementui
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
