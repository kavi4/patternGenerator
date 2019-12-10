const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
            }
        ],
    },

    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            "Components": path.resolve(__dirname, 'src/components/'),
            "Colors": path.resolve(__dirname, 'src/assets/colors.sass'),
        },
        extensions: [".js", ".vue"]
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: false,
        port: 9090
    }
};
