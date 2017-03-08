define('component/c.vue', function(require, exports, module) {

  export default {
    created() {
      console.log('component c created !');
    },
    methods: {
      //
    }
  }
  var _vueTemplateString = "<div class=\"component-c\">\n  Component C\n  <img src=\"/static/image/1.jpg\" alt=\"\">\n  2\n</div>";
  
  module && module.exports && (module.exports.template = _vueTemplateString);
  
  exports && exports.default && (exports.default.template = _vueTemplateString);
  

});
