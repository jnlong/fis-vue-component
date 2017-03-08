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