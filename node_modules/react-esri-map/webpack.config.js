const path = require("path");
const webpack = require("webpack");

module.exports = {
    colors: true,
    devtool: "#source-map",
    entry: [ "./src/index.jsx" ],
    output: {
        path: path.join( __dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'
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
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
