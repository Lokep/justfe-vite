const name = 'justfe-vite';

module.exports = {
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
    },
  },
};
