var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {//配置all 第三方loader模块的
        rules: [
            { test: /\.css$/,use:['style-loader','css-loader']},
            { test: /\.less$/,use:['style-loader','css-loader','less-loader']},
            { test: /\.scss$/,use:['style-loader','css-loader','sass-loader']},
            { test: /\.(jpg|png|gif|bmp)$/,use: 'url-loader?limit=381368'},
            { test: /\.(ttf|eot|svg|woff|woff2)$/,use: 'url-loader'},//处理字体文件的 loader
            { test: /\.js$/,use:'babel-loader',exclude: /node_modules/},//配置Babel 来转换高级ES语法
            { test: /\.vue$/,use: 'vue-loader'}//配置解析vue文件
        ]
    }
}