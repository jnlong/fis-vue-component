<template lang="html">
  <div class="component-a" __vuec__>
    Component A
  </div>
</template>

<script lang="js">
  module.exports = {
    created() {
      console.log('component a created !');
    },
    methods: {
    }
  }
</script>

<style lang="less">
@import "../static/css/other.less";
body {
  a {
    color: inherit;
  }
}
.component-a[__vuec__] {
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: rgb(227, 99, 61);
}
</style>
