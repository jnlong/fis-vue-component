# fis-vue-component 组件化-demo
* 结合fis3、fis3-parser-vue-component实现vue组件化开发；
* 静态资源可以按需打包，只把require的资源整合并且合并；
* 支持公共库单独引用，提高缓存利用率；

## 功能

* 使用fis3-parser-vue-component实现vue单文件解析
* 使用fis3-postpackager-loader，实现静态资源按需加载，并且公共库（如zepto、vue、mod，icon.css,base.css)合并打包
* 使用fis3-postprocessor-autoprefixer，解析css3兼容并根据配置生成制定css前缀
* 使用fis-parser-babel-6.x，实现es6文件解析
* 使用fis3-parser-less-2.x，实现less解析

## 使用步骤

1. `git clone` 
2. `cd `
3. `npm install`
4. `npm run debug`
5. `fis3 server start`

## 工具

* [fis3](http://fis.baidu.com/fis3/index.html)
* [vue](https://cn.vuejs.org/)
* [fis3-parser-vue-component](https://github.com/ccqgithub/fis3-parser-vue-component)
* [fis3-postprocessor-autoprefixer](https://github.com/huixisheng/fis3-postprocessor-autoprefixer)
* [fis-parser-babel-6.x](https://github.com/fex-team/fis-parser-babel-6.x)
* [fis3-parser-less-2.x](https://github.com/snadn/fis-parser-less-2.x)

## 配置
###打包配置
`
	fis.match('::package', {
	  postpackager: fis.plugin('loader', {
	    allInOne: {
	      ignore: ['/static/lib/**.js','node_modules/**','/static/css/base/**'],
	    }
	  })
	});
`

### less解析
`
	fis.match('{*.vue:less,*.less}', {
	  rExt: 'css',
	  parser: [fis.plugin('less-2.x')],
	  postprocessor : fis.plugin("autoprefixer",{
	      "browsers": ['Safari >= 6', 'Chrome >= 12', "ChromeAndroid >= 4.0"],
	      "flexboxfixer": true,
	      "gradientfixer": true
	  })
	});
`

### vue解析
`
	fis.match('*.vue', {
	  isMod: true,
	  rExt: 'js',
	  useSameNameRequire: true,
	  parser: [
	    fis.plugin('vue-component', {
	        styleNameJoin: '',
	        ccssScopedFlag: '__vuec__',
	    }),
	    fis.plugin('babel-6.x', {
	      presets: ['es2015-loose', 'react', 'stage-3']
	    }),
	    fis.plugin('translate-es3ify', null, 'append')
	  ]
	});
`

## 代码
### 编译前-vue文件（a.vue)

`
	<style lang="less">
	.component-b {
	  line-height: 50px;
	  text-align: center;
	  color: #fff;
	  background: rgb(114, 61, 227);
	
	  a {
	    display: block;
	    border: 1px solid #ddd;
	  }
	}
	</style>
	
	<template>
	  <div class="component-b">
	    Component B <a href="javascript:;" @click="hello">Click Me</a>
	  </div>
	</template>
	
	<script>
	  module.exports = {
	    created() {
	      console.log("component b created !");
	    },
	    methods: {
	      hello() {
	        alert('hello!');
	      }
	    }
	  }
	</script>
`

### 编译后文件(a.js)

`
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
`
