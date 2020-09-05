const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // production
    devtool : 'eval', // hidden-source-map
    resolve : {
        extensions: ['.jsx', '.js', '.tsx', '.ts']
    },

    entry: {
        app: './client'
    },
    module: {
        rules : [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader', //babel과 함께 사용이 가능합니다.
        }]

    },
    plugins:[

    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    }

}