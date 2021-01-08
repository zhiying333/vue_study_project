<template>
  <div>
    <router-view />
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" scoped>
  @import './common/stylus/mixins.styl'
  
</style>
