<template>
  <span :style="`font-size: ${size};color: ${color}`">
    {{ name }}
  </span>
</template>
<script>
export default {
  name: '',
  data () {
    return {}
  },
  props: {
    name: {
      type: [String, undefined],
      required: false
    },
    size: {
      type: String,
      default: '16px'
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  methods: {
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
