const path = require("path");

module.export = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules:[
            {
                test: /\.jsx$/,
                exclude:/(node_modules)/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        preset:[
                            '@babel/preset-react',
                            '@babel/preset-env',
                        ]
                    }
                }
            }
        ]
    }
}