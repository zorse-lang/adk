const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

/** @type {webpack.Configuration} */
const config = {
	mode: "development",
	entry: "./src/core/index.ts",
	target: "node",
	devtool: "inline-source-map",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [],
	optimization: {
		minimize: false,
		nodeEnv: false,
	},
	node: {
		global: false,
		__dirname: false,
		__filename: false,
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"],
			},
		],
	},
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
	},
};

module.exports = config;
