<template>
  <div id="shoopCantiner">
    <ShopHeader></ShopHeader>
    <div class="tabs">
      <div class="tab-item">
        <router-link to="/shop/good" replace>订餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/rating" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
           
<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader'

  export default {
    components: {
      ShopHeader
    },

    mounted () {
      /* let result = await reqShopInfo()
      console.log(result) */

      this.$store.dispatch('getShopDatas')
    }
    
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixins.styl'

  #shoopCantiner
    .tabs
      display flex
      bottom-border-1px(#aaa)
      .tab-item
        width 33.3333%
        text-align center
        height 40px
        line-height 40px
        font-size 16px
        a
          &.router-link-active
            position relative
            color $green
            &:after
              content ''
              height 4px
              width 40px
              background $green
              transform scaleY(0.5)
              position absolute
              left 50%
              bottom -10px
              margin-left -20px
</style>