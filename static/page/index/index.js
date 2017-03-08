
import Index from '../../../component/index';
// var Index = require('component/index');
// import a from '../../comm/gps';
import '../../comm/gps'

var app = new (Vue.extend(Index))().$mount();
document.getElementById('app').appendChild(app.$el)

/**
 * @require '../../less/index.less'
 */
