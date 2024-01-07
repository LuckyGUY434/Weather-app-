const path = require('path')

module.exports = {
    mode : 'development',
    entry:{ 
        main: path.resolve(__dirname, './src/index.js'),
    },   
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
         {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
         },
        ],
      },
}