const webpack = require('webpack');

module.exports = {
    // ... other configurations ...
    
    chainWebpack: (config) => {
        config.module
            .rule('glb')
            .test(/\.glb$/)
            .use('gltf-loader')
            .loader('three/examples/js/loaders/GLTFLoader')
            .end();
    },
    
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                '__VUE_OPTIONS_API__': JSON.stringify(true),
                '__VUE_PROD_DEVTOOLS__': JSON.stringify(false)
            })
        ]
    }
};
