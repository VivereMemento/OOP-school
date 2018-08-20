const HtmlWebpackPlugin = require('html-webpack-plugin');
const arr = (path) => [
    new HtmlWebpackPlugin(
        {
            filename: 'index.html',
            chunks: ['index', 'common'],
            template: path.source + '/pages/index/index.pug'
        }
    ),
    new HtmlWebpackPlugin(
        {
            filename: 'school.html',
            chunks: ['school', 'common'],
            template: path.source + '/pages/school/school.pug'
        }
    )
];
module.exports = arr;