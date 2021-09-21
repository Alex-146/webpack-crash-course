const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { ProvidePlugin } = require("webpack")

module.exports = {
    mode: "development",
    context: path.resolve("src"),
    entry: {
        main: "./js/index.js", // "@babel/polyfill", 
        analytics: "./js/analytics.js"
    },
    output: {
        path: path.resolve("dist"),
        filename: "[name].[contenthash].js"
    },
    resolve: {
        extensions: [".js"],
        alias: {
            "@": path.resolve("src"),
            "@components": path.resolve("src", "components"),
        },
        fallback: {
            buffer: require.resolve("buffer/")
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        port: 5500
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "foo-bar-42", // ! doesn't work if template provided
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve("src", "public", "index.js"),
                    to: path.resolve("dist", "public")
                }
            ]
        }),
        new ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                // use: ["file-loader"]
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                // use: ["file-loader"]
                type: 'asset/resource',
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             presets: ["@babel/preset-env"]
            //         }
            //     }
            // },
        ]
    }
}