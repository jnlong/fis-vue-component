<style lang="less">
@import "../static/css/base/reset.less";
@import "../static/css/other.less";
.index.__vuec__ {
  > p {
    line-height: 50px;
    text-align: center;
    background: rgb(240, 203, 210);
    border: 1px solid #ddd;
  }
}
</style>

<template>
  <div class="index __vuec__" >
    <p>fis3-vue-component</p>
    <component-a></component-a>
    <component-b></component-b>
    <component-c></component-c>
    <test-bug></test-bug>
  </div>
</template>

<script>
  import ComponentA from './a';
  import ComponentB from './b';
  import TestBug from './test-bug';

  export default {
    components: {
      ComponentA,
      ComponentB,
      TestBug,
      ComponentC: require('./c')
    },
    created() {
      console.log('Index page created!');
    },
    methods: {
      //
    }
  }
</script>
