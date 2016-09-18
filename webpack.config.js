var path = require('path');

module.exports = {
    entry: ['./node_modules/pixi.js/bin/pixi.js', './src/main.ts'],
    output: {
        path: './static',
        filename: 'js/all.js'
    },
    node: {
        fs: 'empty'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader'},
            {
                test: /\.json$/,
                include: path.join(__dirname, 'node_modules', 'pixi.js'),
                loader: 'json',
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.json', '.ts']
    }
};