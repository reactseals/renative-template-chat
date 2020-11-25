const { withRNV } = require('@rnv/engine-rn-next');
const path = require('path');

const config = {
    projectRoot: path.resolve(__dirname),
    module:{rules:[{
        test: /hammerjs/,
        loader: "null-loader"
        }]}
};

module.exports = withRNV(config);
