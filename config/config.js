// 配置参考文档：https://bigfish.alipay.com/doc

export default {
  appType: 'console',
  deployMode: 'assets',

  // 接口代理配置
  proxy: {
    dev: {
      'api/': {
        target: 'http://bigfish-mock.dockerlab.alipay.net:7001',
      },
    },
    test: {
      'api/': {
        target: 'http://bigfish-mock.dockerlab.alipay.net:7001',
      },
    },
    pre: {
      'api/': {
        target: 'http://bigfish-mock.dockerlab.alipay.net:7001',
      },
    },
  },

  // 关于 treeShaking: https://bigfish.alipay.com/doc/gagklc#e3211d43
  treeShaking: true,
  deer: {
    useSpmFromBasement: true,
  },

  routes: [
    {
      path: '/',
      component: '../layout',
      indexRoute: { component: 'IndexPage' },
      routes: [
        { path: 'render', component: 'Render' },
        { path: 'ref', component: 'Ref' },
        { path: 'context', component: 'Context' },
        { path: 'lifeCycle', component: 'LifeCycle' },
        { path: 'utils', component: 'Utils' },
        { path: 'hook', component: 'Hook' },
      ],
    },
  ],

  title: '默认title',

  favicon: 'https://i.alipayobjects.com/common/favicon/favicon.ico',

  ctoken: true,

  locale: {
    enable: true,
  },
};
