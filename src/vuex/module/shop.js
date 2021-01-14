import Vue from 'vue'
import { SAVE_SHOPDATAS, ADD_FOOD_COUNT, DEL_FOOD_COUNT } from '../mutation-types'
import { reqShopInfo } from '../../api'

const state = {
  shopDatas: {}, //每个商家的信息
  cartShops: [] //商家购物车内的食品种类
}

const mutations = {
  [SAVE_SHOPDATAS] (state, shopDatas) {
    state.shopDatas = shopDatas
  },

  [ADD_FOOD_COUNT] (state, {food}) {
    if (food.count > 0) {
      food.count++
    } else {
      Vue.set(food, 'count', 1)
      state.cartShops.push(food)
    }
  },

  [DEL_FOOD_COUNT] (state, {food}) {
    if (food.count > 0) {
      food.count--
      if (food.count === 0) {
        state.cartShops.splice(state.cartShops.indexOf(food), 1)
      }
    }
  },
}

const actions = {
  async getShopDatas ({commit}) {
    let result = await reqShopInfo()
    if (result.code === 0) {
      commit(SAVE_SHOPDATAS, result.data)
    }
  },

  changeFoodCount ({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(ADD_FOOD_COUNT, {food})
    } else {
      commit(DEL_FOOD_COUNT, {food})
    }
  }
}

const getters = {
  //（低性能）计算加入购物车的食物种类
  /* foodSpecies (state) {
    // console.log(state.shopDatas.goods)
    return state.shopDatas.goods.reduce((pre, good) => {
      pre.push(...good.foods.filter(food => food.count > 0))
      return pre
    }, [])
  }, */

  //计算加入购物车的食物总数
  totalCount (state) {
    return state.cartShops.reduce((pre, food) => {
      pre += food.count
      return pre
    }, 0)
  },

  totalPrice (state) {
    return state.cartShops.reduce((pre, food) => pre += food.count * food.price, 0)
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}