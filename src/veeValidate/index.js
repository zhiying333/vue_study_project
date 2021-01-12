//表单验证库与规则

import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
import zh_CN from 'vee-validate/dist/locale/zh_CN'
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    username: '用户名',
    pwd: '密码',
    captcha: '验证码'
  }
})

VeeValidate.Validator.extend('phone', {
  validate: value => {
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(value)
  },
  getMessage: field => field + '必须是11位手机号码'
})

VeeValidate.Validator.extend('code', {
  validate: value => {
    return /^\d{6}$/.test(value)
  },
  getMessage: field => field + '必须是6位验证码'
})

VeeValidate.Validator.extend('username', {
  validate: value => {
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(value) || /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) || /^[a-zA-Z0-9_-]{3,12}$/.test(value)
  },
  getMessage: field => field + '必须是手机/邮箱/用户名'
})