module.exports = {
  title: 'Hello JustFE',
  description: 'Just playing around.',
  themeConfig: {
    logo: 'https://resource.lanniuh.com/common/logo.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: '组件', link: '/packages/' },
      { text: 'PC 组件库', link: 'http://pc.justfe.cn' },
      { text: '文档中心', link: 'http://docs.justfe.cn' },
      { text: 'NPM 仓库', link: 'http://npm.justfe.cn' },
    ],
    sidebarDepth: 1,
    darkMode: false,
    sidebar: {
      '/packages/': [
        {
          text: '开发指南',
          children: ['/packages/README.md'],
        },
        {
          text: '组件',
          children: ['/packages/select/README.md'],
        },
      ],
    },
  },
};
