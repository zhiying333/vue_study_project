<template>
  <div class="footer-guide">
    <span class="guide-item" :class="{on: $route.path === '/msite'}" @click="goto('/msite')">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide-item" :class="{on: $route.path === '/search'}" @click="goto('/search')">
      <span>
        <i class="iconfont icon-search2"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide-item" :class="{on: $route.path === '/order'}" @click="goto('/order')">
      <span>
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide-item" :class="{on: $route.path === '/profile'}" @click="goto('/profile')">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人中心</span>
    </span>
  </div>
</template>
           
<script>
  export default {
    name: 'FooterGuide',

    methods: {
      goto (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixins.styl'

  .footer-guide
    top-border-1px(#333)
    display flex
    position fixed
    left 0px
    bottom 0px
    width 100%
    height 80px
    .guide-item
      display flex
      flex-direction column
      align-items center
      width 25%
      &.on
        color $green
      span
        margin-top 8px
        font-size 14px
        .iconfont
          font-size 44px
</style>