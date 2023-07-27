import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

module.exports = {
    webpack: {
        plugins: [new TsconfigPathsPlugin()],
    },
};
