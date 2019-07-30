<template>
  <div class="success">
    <transition name="fade">
      <div class="success-view" v-show="show">
        <div class="view">
          <i></i>
          <p>已领取</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
	name: "success",
  props: {
    show: {
      type: Boolean,
      default: false
    },
  },
	data(){
		return {
			//Component Data
      example: true,
      foo: "bar"
		}
	},
  watch: {
    show (val) {
      console.log(11);
      console.log(val);
      if (val) {
        this.timeout = setTimeout(() => {
          this.show = false
        }, 800)
      }
    },
  },
	created(){
		//On Component created
	},

	methods: {
		functionExample(){
      //Basic Component method
		}
	}
}
</script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>
