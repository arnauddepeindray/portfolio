const path = require('path');
const webpack = require('webpack')




module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            loader:"css-loader",
            include: path.resolve(__dirname + "./public/css")
        }, 

        
    ]
    }
}