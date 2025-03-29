const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = defineConfig({
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, "public/manifest.json"),
                        to: path.resolve(__dirname, "dist/manifest.json"),
                    },
                ],
            }),
        ],
    },
});
