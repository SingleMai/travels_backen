<template>
  <transition name="vmessage">
    <div class="message-box">
      <div class="message">
        <div class="title"></div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      content: '',
      prefixCls: '',
      type: ''
    }
  },
  computed: {
    calClass () {
      return `${this.prefixCls}-${this.type}`
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
.message-box {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.message {
  display: flex;
  align-content: center;
  border-radius: 20px;
  background: pink;
  padding: 30px;
  box-sizing: border-box;
}
.title {
  
}
</style>
