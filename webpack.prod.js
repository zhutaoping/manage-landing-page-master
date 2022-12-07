const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "bundle.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},

	devtool: "source-map",

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[contenthash].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
});
