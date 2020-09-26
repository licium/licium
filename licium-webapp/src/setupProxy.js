const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/iscc',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: { '^/iscc': '/api' },
        })
    )
    app.use(
        '/lookup',
        createProxyMiddleware({
            target: 'https://iscc.in/',
            changeOrigin: true,
        })
    )
}
