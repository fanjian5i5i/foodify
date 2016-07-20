const path = require("path");
const webpack = require("webpack");

module.exports = {
    colors: true,
    context: __dirname,
    devtool: "#source-map",
    entry: path.join(__dirname, "example/main.jsx"),
    devServer: {
        colors: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass']},
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.json?$/, loader: 'json-loader' },
            { test: /\.png$/, loader: "url-loader?limit=100000" }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: '/'
    }
};
