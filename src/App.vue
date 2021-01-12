<template>
  <div>
    <router-view />
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script>
  import { reqAutoLogin } from "./api";
  import { SAVE_USER } from "./vuex/mutation-types";
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    components: {
      FooterGuide
    },

    async mounted () {
      this.$store.dispatch('getAddress')
      //应用加载，请求自动登录
      const result = await reqAutoLogin()
      //登录成功，用户信息存入vuex
      this.$store.commit(SAVE_USER, result.data)
    }
  }
</script>

<style lang="stylus" scoped>
  @import './common/stylus/mixins.styl'
  
</style>
