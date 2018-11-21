const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const mainProcessConfig = {
    entry: './app/src/main/main.js',
    output: {
        path: path.resolve(__dirname, 'build/main'),
        filename: 'main.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js']
    },
    node: {
        __filename: false,
        __dirname: false,
    },
    target: 'electron-main',
};

const rendererProcessConfig = {
    entry: './app/src/renderer/renderer.js',
    output: {
        path: path.resolve(__dirname, 'build/renderer'),
        filename: 'renderer.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/html/index.html',
            filename: path.resolve(__dirname, 'build/html/index.html')
        })
    ],
    target: 'electron-renderer'
};

module.exports = [
    mainProcessConfig,
    rendererProcessConfig
];