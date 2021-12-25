const webpack = require('webpack')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('comps', resolve('./src/components'))
            .set('img', resolve('./src/assets/img'))
            .set('assets', resolve('./src/assets'))
            .set('apis', resolve('./src/apis'))
            .set('utils', resolve('./src/utils'))
            .set('views', resolve('./src/views'))
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ]
    },
}
