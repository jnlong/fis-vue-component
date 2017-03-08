define('component/test-bug.vue', function(require, exports, module) {

  import MyTable from './test-table';
  import MyTd from './test-td';
  export default {
    components: {
      MyTable,
      MyTd
    }
  }
  var _vueTemplateString = "<my-table>\n  <my-td></my-td>\n</my-table>";
  
  module && module.exports && (module.exports.template = _vueTemplateString);
  
  exports && exports.default && (exports.default.template = _vueTemplateString);
  

});
