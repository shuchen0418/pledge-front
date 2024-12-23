/**
 * 配置文件
 */

module.exports = {
  name: 'muniz-tpl-react-pc',
  copyrightDesc: '版权描述-声明-预留-塞入打包的文件头部',
  dev: {
    port: 8000,
    ip: '127.0.0.1',
    // 连接后端API的URL
    apiUrl: 'http://yourserver.com/',
  },
  publish: {
    publicPath: '/',
  },
  theme: {
    '@primary-color': '#661aff',
  },
};
