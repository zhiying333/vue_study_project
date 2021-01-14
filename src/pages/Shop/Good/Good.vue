<template>
  <div id="good">
    <div class="navLeft">
      <ul class="nav-food" ref="muneNav">
        <li @click="changeMenu(index)" :class="{active: navIndex === index}" v-for="(good, index) in goods" :key="index">
          {{good.name}}
        </li>
      </ul>
    </div>
    <div class="rightContent">
      <div class="foods-wrapper">
        <ul ref="rightUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index">
                <div class="icon">
                  <img width="57" height="57"
                      :src="food.image">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <ShopCart />
  </div>
</template>
           
<script>
  import BScroll from '@better-scroll/core'
  import {mapState} from 'vuex'
  import CartControl from '../../../components/CartControl/CartControl'
  import ShopCart from '../../../components/ShopCart/ShopCart'

  export default {
    data () {
      return {
        tops: [],
        scrollY: 0, //右侧菜单详情滚动的距离
      }
    },

    components: {
      CartControl,
      ShopCart
    },
    
    async mounted () {
      if (this.goods) {
        this._initScroll()
        this._initTops()
      }
    },

    computed: {
      ...mapState({
        goods: state => state.shop.shopDatas.goods
      }),

      navIndex () {
        const {tops, scrollY} = this
        let index = tops.findIndex((top, index) => scrollY >= tops[index] && scrollY < tops[index+1])
        //优化暂时没做
        if (this.navScroll) {
          this.navScroll.scrollToElement(this.$refs.muneNav.children[index])
        }
        return index
      }
    },

    watch: {
      goods () {
        this.$nextTick(() => {
          this._initScroll()
          this._initTops()
        })
      }
    },

    methods: {
      _initScroll () {
        this.navScroll = new BScroll('.navLeft')
        this.rightScroll = new BScroll('.rightContent', {
          probeType: 1
        })

        this.rightScroll.on('scroll', (position) => {
          // console.log(position.y)
          this.scrollY = Math.abs(position.y)
        })

        this.rightScroll.on('scrollEnd', (position) => {
          // console.log(position.y)
          this.scrollY = Math.abs(position.y)
        })
      },

      _initTops () {
        let lis = Array.from(this.$refs.rightUl.children)
        let top = 0;
        let tops = [];
        tops.push(top)
        /* for (var i = 0; i < lis.length; i++ ) {
          top += lis[i].clientHeight
          tops.push(top)
        } */

        lis.reduce((pre, current) => {
          pre += current.clientHeight
          tops.push(pre)
          return pre
        }, top)

        this.tops = tops
      },

      changeMenu (index) {
        // console.log(index)
        this.scrollY = this.tops[index]
        this.rightScroll.scrollTo(0, -this.scrollY, 500)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../../common/stylus/mixins.styl'

  #good
    display flex
    overflow hidden
    .navLeft
      width 80px
      height calc(100vh - 272px)
      background #f3f5f7
      /* position absolute
      top 224px
      bottom 0
      overflow hidden */
      .nav-food
        li
          position relative
          width 100%
          height 50px
          line-height 50px
          text-align center
          &.active
            background #fff
            color $green
          &:after
            content ''
            width 80%
            height 1px
            background #aaa
            position absolute
            left 10%
            bottom 0
            transform scaleY(0.5)
    .rightContent
      width 295px
      height calc(100vh - 272px)
      .foods-wrapper
        flex: 1
        .title
          padding-left: 14px
          height: 26px
          line-height: 26px
          border-left: 2px solid #d9dde1
          font-size: 12px
          color: rgb(147, 153, 159)
          background: #f3f5f7
        .food-item
          display: flex
          margin: 18px
          padding-bottom: 18px
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border-none()
            margin-bottom: 0
          .icon
            flex: 0 0 57px
            margin-right: 10px
          .content
            flex: 1
            .name
              margin: 2px 0 8px 0
              height: 14px
              line-height: 14px
              font-size: 14px
              color: rgb(7, 17, 27)
            .desc, .extra
              line-height: 10px
              font-size: 10px
              color: rgb(147, 153, 159)
            .desc
              line-height: 12px
              margin-bottom: 8px
            .extra
              .count
                margin-right: 12px
            .price
              font-weight: 700
              line-height: 24px
              .now
                margin-right: 8px
                font-size: 14px
                color: rgb(240, 20, 20)
              .old
                text-decoration: line-through
                font-size: 10px
                color: rgb(147, 153, 159)
            .cartcontrol-wrapper
              position: absolute
              right: 0
              bottom: 12px
</style>