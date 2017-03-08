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
var _vueTemplateString = "<div class=\"index __vuec__\">\n  <p>fis3-parser-vue-component demo runing ~</p>\n  <component-a></component-a>\n  <component-b></component-b>\n  <component-c></component-c>\n  <test-bug></test-bug>\n</div>";

module && module.exports && (module.exports.template = _vueTemplateString);

exports && exports.default && (exports.default.template = _vueTemplateString);
