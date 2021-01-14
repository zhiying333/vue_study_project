// 所有路由的数组

import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop'

import Good from '../pages/Shop/Good/Good.vue'
import Rating from '../pages/Shop/Rating/Rating.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/good',
        component: Good
      },
      {
        path: 'rating',
        component: Rating
      },
      {
        path: '/shop/info',
        component: ShopInfo
      },
      {
        path: '/shop',
        redirect: '/shop/good'
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]