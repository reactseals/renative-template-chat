const { withRNV } = require('@rnv/engine-rn-next');
const path = require('path');

const config = {
    projectRoot: path.resolve(__dirname),
    module: {
        rules: [
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]',
                    },
                },
            },
        ],
    },
};

module.exports = withRNV(config);
