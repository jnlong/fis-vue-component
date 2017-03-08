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

define('component/index.vue', function(require, exports, module) {

  import ComponentA from './a';
  import ComponentB from './b';
  import TestBug from './test-bug';
  
  export default {
    components: {
      ComponentA,
      ComponentB,
      TestBug,
      ComponentC: require('component/c.vue')
    },
    created() {
      console.log('Index page created!');
    },
    methods: {
      //
    }
  }
  var _vueTemplateString = "<div class=\"index __vuec__\">\n  <p>fis3-parser-vue-component demo runing ~</p>\n  <component-a></component-a>\n  <component-b></component-b>\n  <component-c></component-c>\n  <test-bug></test-bug>\n</div>";
  
  module && module.exports && (module.exports.template = _vueTemplateString);
  
  exports && exports.default && (exports.default.template = _vueTemplateString);
  

});

define('static/comm/gps', function(require, exports, module) {

  'use strict';
  
  console.log('gps');

});

'use strict';

var _index = require('component/index.vue');

var _index2 = _interopRequireDefault(_index);

require('static/comm/gps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new (Vue.extend(_index2["default"]))().$mount();
// var Index = require('component/index');
// import a from '../../comm/gps';

document.getElementById('app').appendChild(app.$el);

/**
 * @require '../../less/index.less'
 */
