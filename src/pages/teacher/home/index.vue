<template>
  <div class="home">
    home
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  created(){
    this.$vux.alert.show({
      title: 'Vux is Cool',
      content: 'Do you agree?',
      onShow () {
        console.log('Plugin: I\'m showing')
      },
      onHide () {
        console.log('Plugin: I\'m hiding')
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
