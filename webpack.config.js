const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                indentedSyntax: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `[name].[ext]`,
                        outputPath: 'fonts/',
                    }
                }
            },
        ],
    },

    plugins: [
        new VueLoaderPlugin(),
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, "node_modules")
        ]),
    ],
    resolve: {
        alias: {
            "Components": path.resolve(__dirname, 'src/components/'),
            "Assets": path.resolve(__dirname, 'src/assets/'),
            "Mixins": path.resolve(__dirname, 'src/mixins/'),
            "Services": path.resolve(__dirname, 'src/services/'),
            "Colors": path.resolve(__dirname, 'src/assets/colors.sass'),
        },
        extensions: [".js", ".vue"]
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: false,
        port: 9090,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        },
    }
};
