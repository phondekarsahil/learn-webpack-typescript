const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    output: {
        publicPath: '',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    target: ['web', 'es5']
}