var serverConfig = {
    target: 'node',
    entry: __dirname + '/src/server/index.js',
    output: {
        path: __dirname,
        filename: 'src/server/compiled/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: ['env', 'es2017'],
                    plugins: ['transform-object-rest-spread', 'transform-runtime']
                }
            }
        ],

    }
}

var clientConfig = {
    entry: __dirname + '/src/client/index.js',
    output: {
        path: __dirname,
        filename: 'web/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: ['env', 'es2017'],
                    plugins: ['transform-object-rest-spread', 'transform-runtime']
                }
            }
        ],

    }
}

module.exports = [serverConfig, clientConfig]