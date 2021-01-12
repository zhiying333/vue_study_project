//包含n个直接更新状态数据方法的对象

import {
  SAVE_ADRESS,
  SAVE_FOODLIST,
  SAVE_SHOPS,
  SAVE_USER,
  SAVE_TOKEN,
  LOGOUT
} from './mutation-types'

export default {
  [SAVE_ADRESS] (state, adress) {
    state.adress = adress
  },

  [SAVE_FOODLIST] (state, {categorys}) {
    state.categorys = categorys
  },
  
  [SAVE_SHOPS] (state, { shops }) {
    state.shops = shops
  },

  [SAVE_USER] (state, user) {
    state.user = user
  },

  [SAVE_TOKEN] (state, token) {
    state.token = token
  },

  [LOGOUT] (state) {
    state.user = {}
    state.token = ''
    localStorage.removeItem('token_key')
  }
}