import Mock from 'mockjs'
import shopDatas from './data.json'

//模拟商家接口
Mock.mock('/api/getShopGoods',{
  code: 0,
  data: shopDatas
})