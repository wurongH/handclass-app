<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import '~assets/css/common.scss';
  @import '~rem';
  body{
    background: #f2f2f2;

    &.padding{
      padding-top: rem(88);
    }
    &.white{
      background: #fff;
    }
    &.grey{
      background: #f5f5f5
    }
  }
  .weui-loading_toast{
    z-index: 10000
  }
  .v-transfer-dom{
    z-index: 1000;
    position: relative;
  }
  .vux-popup-dialog{
    background: #fff !important;
  }
  #app{
    height: 100%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .weui-mask-activity{
    background: rgba(0, 0, 0, 0.95) !important;
  }
  .weui-dialog{
    width: rem(600) !important;
    max-width: 100% !important;
    overflow: hidden;
    border-radius: rem(20) !important;

    /*background-color: rgba(0,0,0,0) !important*/
    .weui-dialog__ft{
      border-radius: rem(20) !important;
    }
  }
  .vux-swipeout-content{
    background: none !important;
  }
</style>
