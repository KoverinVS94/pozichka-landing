const fs = require("fs");
const path = require("path");
const Webpack = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const meta = require("../meta.json");
const commonConfig = require("./webpack.common");
const debug = process.env.NODE_ENV !== "production";

const sourceMapOptions = {
    sourceMap: debug
};

if (!fs.existsSync(path.resolve("favicons/favicon-stats.json"))) {
    throw new Error("Favicons build not found. Run 'npm run build:favicons' first");
}

module.exports = {
    ...commonConfig,
    devServer: {
        publicPath: "/",
        contentBase: path.resolve("./web"),
        noInfo: false,
        hot: true,
        inline: true,
        open: false,
        historyApiFallback: true,
        port: 8088
    },
    entry: [
        path.resolve("./src/index.tsx")
    ],
    output: {
        filename: `[name].v${meta.version}.js`,
        publicPath: debug ? "/" : "/static/",        
        path: path.resolve("./web")
    },
    module: {
        rules: [
            ...commonConfig.module.rules,
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: {
                        loader: "style-loader",
                        options: sourceMapOptions
                    },
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: debug ? "[local]" : "[hash:base64:3]",
                                ...sourceMapOptions
                            }                            
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => {
                                    const plugins = [require("autoprefixer")()];
                                    !debug && plugins.push(require("cssnano")());
                                    return plugins;
                                },
                                ...sourceMapOptions
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [
                                    path.resolve("./styles"),
                                    path.resolve("./node_modules/compass-mixins/lib"),
                                ],
                                ...sourceMapOptions
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        ...commonConfig.plugins,
        new ExtractTextPlugin({
            filename: `styles.v${meta.version}.css`,
            publicPath: debug ? "/" : "/static/"
        }),
        new CleanWebpackPlugin([path.resolve("./web")], {
            root: path.resolve(".")
        }),
        ...(!debug
            ? [
                new UglifyJSPlugin({
                    parallel: true,
                    test: /main\..*\.js/g
                })
            ]
            : [
                new HtmlWebpackPlugin({
                    template: path.resolve("./templates/index.ejs"),
                    version: meta.version,
                    minify: {
                        minifyJS: false,
                        minifyCSS: false,
                        removeComments: false,
                        collapseWhitespace: false,
                        trimCustomFragments: false
                    }
                }),
                new Webpack.HotModuleReplacementPlugin()
            ]
        )
    ]
};
