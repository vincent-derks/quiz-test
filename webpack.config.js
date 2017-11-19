module.exports = {
    entry: __dirname + '/src/client/index.js',
    output: {
        path: __dirname + '/web/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: ['env'],
                }
            }
        ],

    }
}