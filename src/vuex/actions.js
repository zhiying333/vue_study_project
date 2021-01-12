//包含n个间接更新状态数据方法的对象，可以包含异步和逻辑代码

import {
  reqAddress,
  reqFoodList,
  reqShops,
} from '../api'

import {
  SAVE_ADRESS,
  SAVE_FOODLIST,
  SAVE_SHOPS,
  SAVE_USER,
  SAVE_TOKEN
} from './mutation-types'

export default {
  //获取当前地址信息
  async getAddress ({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqAddress(latitude, longitude)
    if (result.code === 0) {
      const adress = result.data
      commit(SAVE_ADRESS, adress)
    }
  },

  //获取食品分类
  async getFoodList ({commit}) {
    const result = await reqFoodList()
    if (result.code === 0) {
      const categorys = result.data
      commit(SAVE_FOODLIST, {categorys})
    }
  },

  //获取商铺
  async getShops ({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({longitude, latitude})
    if (result.code === 0) {
      const shops = result.data
      commit(SAVE_SHOPS, {shops})
    }
  },

  //短信/用户名登录
  saveUserInfoAndToken ({commit}, user) {
    commit(SAVE_TOKEN, user.token)
    localStorage.setItem('token_key', user.token)
    delete user.token
    commit(SAVE_USER, user)
  }


}