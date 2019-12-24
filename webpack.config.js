const MiniCssExtractPlugin =require("mini-css-extract-plugin")

module.exports = {

    entry: ["./src/app/js/index.js",],

    output: {
        path: __dirname + "/src/static",
        filename: "[name].js"
    },

    plugins: [new MiniCssExtractPlugin({
        filename:"css/[name].css"
    })],

    module: {
        rules: [
            {
                test: /\.js$/i,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/i,
                use:
                    [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
            }
        ]
    },
}