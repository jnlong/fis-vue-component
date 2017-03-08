var path = require('path');

// 需要构建的文件
fis.set('project.fileType.text', 'vue');
fis.set('project.ignore', fis.get('project.ignore').concat(['output/**', 'DS_store']));

// 模块化支持插件
fis.hook('commonjs', {
  extList: [
    '.js', '.coffee', '.es6', '.jsx', '.vue',
  ],
  umd2commonjs: true,
  ignoreDependencies: []
});

// 编译vue组件
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

// 模块文件
fis.match('*.js', {
  isMod: true,
  rExt: 'js',
  useSameNameRequire: true,
  parser: [
    fis.plugin('babel-6.x', {
      presets: ['es2015-loose', 'react', 'stage-3']
    }),
    fis.plugin('translate-es3ify', null, 'append')
  ]
});

fis.match('{*.vue:less,*.less}', {
  rExt: 'css',
  parser: [fis.plugin('less-2.x')],
  postprocessor : fis.plugin("autoprefixer",{
      "browsers": ['Safari >= 6', 'Chrome >= 12', "ChromeAndroid >= 4.0"],
      "flexboxfixer": true,
      "gradientfixer": true
  })
});

// 非模块文件
fis.match('/static/lib/**.js', {
  parser: null,
  isMod: false
});
fis.match('/static/page/**.js', {
  isMod: false
});

// 打包
fis.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: {
      ignore: ['/static/lib/**.js','node_modules/**','/static/css/base/**'],
    }
  })
});

// prod
    fis.match('*.{js,css,less,sass,jpg,jpeg,png,gif}', {
        useHash: true,
        domain: 'http://s0.m.xxx.com'
    });
    fis.match('*.{css,less}', {
        optimizer: fis.plugin('clean-css')
    });
    fis.match('*.{png,jpg}', {
        optimizer: fis.plugin('png-compressor', {
            type: 'pngquant'
        })
    });
    fis.match('*.{js,vue}', {
        optimizer: fis.plugin('uglify-js')
    });

// 部署
fis.media('prod').match('*', {
  domain: ''
});
fis.media('debug').match('*', {
    useHash: false,
    useSprite: false,
    optimizer: null,
    domain: ''
});
