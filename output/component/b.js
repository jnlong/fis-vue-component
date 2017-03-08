define('component/b.vue', function(require, exports, module) {

  module.exports = {
    created() {
      console.log('component b created !');
    },
    methods: {
      hello() {
        alert('hello!');
      }
    }
  }
  var _vueTemplateString = "<div class=\"component-b\">\n  Component B <a href=\"javascript:;\" @click=\"hello\">Click Me</a>\n</div>";
  
  module && module.exports && (module.exports.template = _vueTemplateString);
  
  exports && exports.default && (exports.default.template = _vueTemplateString);
  

});
