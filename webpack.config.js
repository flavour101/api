const SRC = __dirname + "/src/";
const DIST = __dirname + "/dist/";

module.exports = {
    target: "node",
    mode: "none",
    entry: SRC + "index.js",
    output: {
        path: DIST,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: {
                                    node: "current"
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    }
};
