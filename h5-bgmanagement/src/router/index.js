import Vue from 'vue'
import Router from 'vue-router'
// 页面路由
import login from '@/components/login'
import index from '@/components/index'
import home from '@/components/home'


// 商品管理
import Product from '@/components/product/index'
import Audit from '@/components/product/audit'
import editPate from '@/components/product/edit_pate'
// 商品
import Finish from '@/components/product/finished_product/finish_index'
import finishCompile from '@/components/product/finished_product/finish_compile'
import finishDetails from '@/components/product/finished_product/finish_details'
import finishPutaway from '@/components/product/finished_product/finish_putaway'
// 部位
import Part from '@/components/product/part/part_index'
import partCompile from '@/components/product/part/part_compile'
import partDetails from '@/components/product/part/part_details'
import partUpload from '@/components/product/part/part_upload'
// 材质
import Texture from '@/components/product/texture/texture_index'
import textureCompile from '@/components/product/texture/texture_compile'
import textureDetails from '@/components/product/texture/texture_details'
import textureUpload from '@/components/product/texture/texture_upload'
// 颜色
import Color from '@/components/product/color/color_index'
import colorCompile from '@/components/product/color/color_compile'
import colorDetails from '@/components/product/color/color_details'
import colorUpload from '@/components/product/color/color_upload'
// 产品库
import productLibrary from '@/components/product/product_library'


// 订单管理
import Order from '@/components/order'


// 物流管理
import Logistics from '@/components/logistics/logistics_index'
import logisticsBill from '@/components/logistics/logistics_bill'


// 会员管理
import Member from '@/components/member'

// 系统管理
import System from '@/components/system'
import systemRole from '@/components/system/system_role'
import systemFeedback from '@/components/system/system_feedback'
import systemAdminlog from '@/components/system/system_adminlog'

// 二级路由
import upload from '@/components/upload/upload'


Vue.use(Router)

export default new Router({
  routes: [
    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 主入口页面
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: './home',
      children: [
        /**
         ** 首页
         **/
        {
          path: '/home',
          name: 'home',
          component: home
        },
        

        /**
         ** 商品管理
         **/
        {
          path: '/Product',
          name: 'Product',
          component: Product
        },
        // 商品管理->审计页面
        {
          path: '/Audit',
          name: 'Audit',
          component: Audit
        },
        // 商品管理->编辑页面
        {
          path: '/editPate',
          name: 'editPate',
          component: editPate
        },

        
        // 商品管理->商品
        {
          path: '/Finish',
          name: 'Finish',
          component: Finish
        },
        // 商品管理->商品->编辑
        {
          path: '/finishCompile',
          name: 'finishCompile',
          component: finishCompile
        },
        // 商品管理->商品->详情
        {
          path: '/finishDetails',
          name: 'finishDetails',
          component: finishDetails
        },
        // 商品管理->商品->上架
        {
          path: '/finishPutaway',
          name: 'finishPutaway',
          component: finishPutaway
        },


        // 商品管理->部位
        {
          path: '/Part',
          name: 'Part',
          component: Part
        },
        // 商品管理->部位->编辑
        {
          path: '/partCompile',
          name: 'partCompile',
          component: partCompile
        },
        // 商品管理->部位->详情
        {
          path: '/partDetails',
          name: 'partDetails',
          component: partDetails
        },
        // 商品管理->部位->上传
        {
          path: '/partUpload',
          name: 'partUpload',
          component: partUpload
        },



        // 商品管理->材质
        {
          path: '/Texture',
          name: 'Texture',
          component: Texture
        },
        // 商品管理->材质->编辑
        {
          path: '/textureCompile',
          name: 'textureCompile',
          component: textureCompile
        },
        // 商品管理->材质->详情
        {
          path: '/textureDetails',
          name: 'textureDetails',
          component: textureDetails
        },
        // 商品管理->材质->上传
        {
          path: '/textureUpload',
          name: 'textureUpload',
          component: textureUpload
        },
      



        // 商品管理->颜色
        {
          path: '/Color',
          name: 'Color',
          component: Color
        },
        // 商品管理->颜色->编辑
        {
          path: '/colorCompile',
          name: 'colorCompile',
          component: colorCompile
        },
        // 商品管理->颜色->详情
        {
          path: '/colorDetails',
          name: 'colorDetails',
          component: colorDetails
        },
        // 商品管理->颜色->上传
        {
          path: '/colorUpload',
          name: 'colorUpload',
          component: colorUpload
        },

        // 商品管理->产品库
        {
          path: '/productLibrary',
          name: 'productLibrary',
          component: productLibrary
        },


        
        
        /**
         ** 订单管理
         **/
        {
          path: '/Order',
          name: 'Order',
          component: Order
        },


        
        /**
         ** 物流管理
         **/
        {
          path: '/Logistics',
          name: 'Logistics',
          component: Logistics
        },
        // 物流管理->月账单
        {
          path: '/logisticsBill',
          name: 'logisticsBill',
          component: logisticsBill
        },
        
        
        /**
         ** 会员管理
         **/
        {
          path: '/Member',
          name: 'Member',
          component: Member
        },


        /**
         ** 系统管理
         **/
        {
          path: '/System',
          name: 'System',
          component: System
        },
        // 系统管理->角色管理
        {
          path: '/systemRole',
          name: 'systemRole',
          component: systemRole
        },
        // 系统管理->反馈日志
        {
          path: '/systemFeedback',
          name: 'systemFeedback',
          component: systemFeedback
        },
        // 系统管理->管理日志
        {
          path: '/systemAdminlog',
          name: 'systemAdminlog',
          component: systemAdminlog
        },
        // 上传页面
        {
          path: '/upload',
          name: 'upload',
          component: upload
        }
      ]
    }
  ]
})
