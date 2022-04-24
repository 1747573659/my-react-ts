const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://boss-api-cs.cloud.kemai.cn/',
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        })
    );
};
