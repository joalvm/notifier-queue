/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve, join } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
    {
        mode: 'development',
        entry: ['./src/notifier.ts', './src/notifier.scss'],
        output: {
            filename: 'notifier.js',
            path: resolve(__dirname, 'dist')
        },
        devtool: 'source-map',
        devServer: {
            contentBase: join(__dirname, '.'),
            index: 'index.html',
            compress: true,
            port: 9000,
            open: 'Google Chrome'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            // After all CSS loaders we use plugin to do his work.
                            // It gets all transformed CSS and extracts it into separate
                            // single bundled file
                            loader: MiniCssExtractPlugin.loader
                        },
                        // Creates `style` nodes from JS strings
                        // 'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new htmlWebpackPlugin({
                template: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'notifier.css'
            })
        ]
    }
]
