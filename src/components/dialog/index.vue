<template>
  <div class="v-dialog">
    <div v-transfer-dom>
      <x-dialog v-model="show" hide-on-blur>
        <div :class="['header', {primary: isPrimary}]">
          <h2 :class="{'border-b': !isPrimary}">{{title}}</h2>
        </div>
        <div class="body">
          <slot name="body"></slot>
        </div>
        <div class="footer border-t" v-if="isFooter">
          <p @click="close" class="border-r">取消</p>
          <p @click="confirm">确定</p>
        </div>
      </x-dialog>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "~rem";
  .v-dialog{
    overflow: hidden;
  }
  .header h2,.footer,.footer p:first-of-type{
    &:before{
      background-color: #e6e6e6;
    }
  }
  .header{
    height: rem(120);
    line-height: rem(120);
    text-align: center;
    padding: 0 rem(40);

    h2{
      display: block;
      width: 100%;
      height: 100%;
      font-size: rem(36);
      color: #000;
    }
    &.primary{
      height: rem(100);
      line-height: rem(100);
      background-color: #569df6;

      h2{
        color: #fff;
      }
    }
  }
  .body{
    padding: 0 rem(40);
  }
  .footer{
    height: rem(100);
    line-height: rem(100);
    text-align: center;
    font-size: rem(32);

    p{
      width: 50%;
      float: left;
      color: #666;

      &:last-of-type{
        color: #569df6;
      }
    }
  }
</style>
<script>
  import { TransferDom, XDialog } from 'vux'
  export default {
  	name: "v-dialog",
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      isFooter: {
        type: Boolean,
        default: true
      },
      isPrimary: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '温馨提示'
      },
    },
    watch: {
      isShow(val, oldVal){
        this.show = val
      },
      show(val, oldVal){
        this.$emit('close', val)
      }
    },
  	data(){
  		return {
        show: false
  		}
  	},
    components: {
      XDialog,
    },
    directives: {
      TransferDom
    },
  	created(){
  	},

  	methods: {
  		close(){
        this.$emit('close')
  		},
      confirm(){
        this.$emit('confirm')
  		}
  	}
  }
</script>
