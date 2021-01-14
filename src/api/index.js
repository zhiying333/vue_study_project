// 接口请求模块
import ajax from './ajax'

export const reqAddress = (latitude, longitude) => ajax(`/position/${latitude},${longitude}`)

//获取食品分类
export const reqFoodList = () => ajax('/index_category', {
  headers: {
    needToken: true
  }
})

//根据经纬度获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax('/shops', {
  params: {
    longitude,
    latitude
  },
  headers: {
    needToken: true
  }
})

//发送短信验证码
export const reqCode = phone => ajax('/sendcode', {
  params: {
    phone
  }
})

//手机号登录
export const reqLoginSms = ({phone, code}) => ajax({
  url:'/login_sms',
  method: 'POST',
  data: {
    phone,
    code
  }
})

//用户名密码登录
export const reqLoginUserInfo = ({username, pwd, captcha}) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data: {
    name: username,
    pwd,
    captcha
  }
})

//自动登录
export const reqAutoLogin = () => ajax('/auto_login',{
  headers: {
    needToken: true
  }
})

//获取商家详细信息
export const reqShopInfo = () => ajax('/getShopGoods')