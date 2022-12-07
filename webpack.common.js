const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.ts",

	devServer: {
		open: true,
		watchFiles: ["src/**/*"],
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/index.html",
		}),
	],

	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
};
