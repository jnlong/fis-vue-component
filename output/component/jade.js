define('component/jade.vue', function(require, exports, module) {

  module.exports = {}
  var _vueTemplateString = "div(class=\"component-jade\")\n  | hello jade !";
  
  module && module.exports && (module.exports.template = _vueTemplateString);
  
  exports && exports.default && (exports.default.template = _vueTemplateString);
  

});
