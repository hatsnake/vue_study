//const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VueLoaderPlugin } = require('vue-loader');
// 절대 경로를 가져와준다.
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    // 여러 개의 스크립트파일에서 대표가 되는 파일이 entry
    entry: {
        app: path.join(__dirname, 'main.js'), // app의 이름은 바뀌어도 된다.
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        // filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};