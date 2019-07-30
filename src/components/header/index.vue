<template>
  <div class="header" v-if="isShowHeader">
    {{title}}
    <i @click="$router.go(-1)" class="iconfont icon-jiantou i-return"></i>
  </div>
</template>

<script>

export default {
	name: "vHeader",
  props: {
    title: String
  },
	data(){
		return {
      isShowHeader: false
		}
	},

	created(){
    var ua = navigator.userAgent.toLowerCase(),
        className = '';
    ua.match(/MicroMessenger/i) != "micromessenger" && (className = 'padding', this.isShowHeader = true);
    if(document.body.className.indexOf('padding') == -1){
      document.body.className = document.body.className + ' ' + className
    }

	},
  mounted(){

  },
	methods: {
		functionExample(){
      //Basic Component method
		}
	}
}
</script>
<style lang="scss" scoped>
  @import '~rem';
  .header{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    height: rem(88);
    line-height: rem(88);
    background: #333;
    font-size: rem(40);
    color: #fff;
    z-index: 99;
    text-align: center;

    .i-return{
      padding-left: rem(24);
      height: 100%;
      font-size: rem(44);
      line-height: rem(88);
      width: rem(35);
      position: absolute;
      left: 0;
      top: 0;
    }
  }
</style>
