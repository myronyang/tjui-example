import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import layout from '@/pages/layout'
import button from '@/pages/button'
import cell from '@/pages/cell'
import popup from '@/pages/popup'

import checkbox from '@/pages/checkbox'
import field from '@/pages/field'
import swicth from '@/pages/swicth'
import rate from '@/pages/rate'
import checker from '@/pages/checker'
import upload from '@/pages/upload'
import range from '@/pages/range'
import select from '@/pages/select'

import swipe from '@/pages/swipe'
import loading from '@/pages/loading'
import collapse from '@/pages/collapse'
import progress from '@/pages/progress'
import price from '@/pages/price'
import panel from '@/pages/panel'
import recycleList from '@/pages/recycleList'

import toast from '@/pages/toast'
import dialog from '@/pages/dialog'
import indicator from '@/pages/indicator'

import tabs from '@/pages/tabs'
import header from '@/pages/header'
import search from '@/pages/search'


Vue.use(Router)

export default new Router({
  routes: [
    // 开发指南
    {
      path: '/',
      name: '主页',
      component: index
    },
    // 基础组件
    {
      path: '/layout',
      label: '基础组件',
      name: 'Layout 布局',
      component: layout
    },
    {
      path: '/button',
      label: '基础组件',
      name: 'Button 按钮',
      component: button
    },
    {
      path: '/cell',
      label: '基础组件',
      name: 'Cell 单元格',
      component: cell
    },
    {
      path: '/popup',
      label: '基础组件',
      name: 'Popup 弹出层',
      component: popup
    },
    // 表单组件
    {
      path: '/checkbox',
      label: '表单组件',
      name: 'Checkbox 复选框',
      component: checkbox
    },
    {
      path: '/field',
      label: '表单组件',
      name: 'Field 输入框',
      component: field
    },
    {
      path: '/switch',
      label: '表单组件',
      name: 'Switch 开关',
      component: swicth
    },
    {
      path: '/rate',
      label: '表单组件',
      name: 'Rate 评分',
      component: rate
    },
    {
      path: '/checker',
      label: '表单组件',
      name: 'Checker 选择器',
      component: checker
    },
    {
      path: '/upload',
      label: '表单组件',
      name: 'Upload 上传图片',
      component: upload
    },
    {
      path: '/range',
      label: '表单组件',
      name: 'Range 滑块',
      component: range
    },
    {
      path: '/select',
      label: '表单组件',
      name: 'Select 选择器',
      component: select
    },
    // 展示组件
    {
      path: '/swipe',
      label: '展示组件',
      name: 'Swipe 轮播',
      component: swipe
    },
    {
      path: '/loading',
      label: '展示组件',
      name: 'Loading 加载动画',
      component: loading
    },
    {
      path: '/collapse',
      label: '展示组件',
      name: 'Collapse 折叠面板',
      component: collapse
    },
    {
      path: '/progress',
      label: '展示组件',
      name: 'Progress 进度条',
      component: progress
    },
    {
      path: '/price',
      label: '展示组件',
      name: 'Price 价格',
      component: price
    },
    {
      path: '/panel',
      label: '展示组件',
      name: 'Panel 面板',
      component: panel
    },
    {
      path: '/recycleList',
      label: '展示组件',
      name: 'RecycleList 滚动列表',
      component: recycleList
    },
    // 反馈组件
    {
      path: '/toast',
      label: '反馈组件',
      name: 'Toast 轻提示',
      component: toast
    },
    {
      path: '/dialog',
      label: '反馈组件',
      name: 'Dialog 弹出框',
      component: dialog
    },
    {
      path: '/indicator',
      label: '反馈组件',
      name: 'Indicator 加载提示',
      component: indicator
    },
    // 导航组件
    {
      path: '/tabs',
      label: '导航组件',
      name: 'Tabs 标签页',
      component: tabs
    },
    {
      path: '/header',
      label: '导航组件',
      name: 'Header 顶部导航栏',
      component: header
    },
    {
      path: '/search',
      label: '导航组件',
      name: 'Search 搜索框',
      component: search
    },
  ]
})