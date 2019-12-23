module.exports = {
    entry:["./src/app/js/index.js","./src/app/css-o-sass/estilosLocales.css"],
    output: {
        path: __dirname + "/src/static", 
        filename: "bundel.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test:/\.(scss|css)$/i,
                use:
                [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}