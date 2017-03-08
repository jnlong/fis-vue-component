define('component/a.vue', function(require, exports, module) {

  module.exports = {
    created() {
      console.log('component a created !');
    },
    methods: {
    }
  }
  var _vueTemplateString = "<div class=\"component-a\" __vuec__=\"\">\n  Component A\n</div>";
  
  module && module.exports && (module.exports.template = _vueTemplateString);
  
  exports && exports.default && (exports.default.template = _vueTemplateString);
  

});
