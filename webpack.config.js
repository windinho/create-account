const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const preCss = require("precss");

module.exports = {
	entry: path.join(__dirname, "src", "index.js"),
	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-env",
								"@babel/preset-react",
							],
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
					/* {
						loader: "webpack-atomizer-loader",
						options: {
							configPath: path.resolve("./atomCssConfig.js"),
							postcssPlugins: [autoprefixer, preCss],
						},
					}, */
				],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: ["file-loader"],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),
	],
	mode: process.env.NODE_ENV === "production" ? "development" : "production",
};
