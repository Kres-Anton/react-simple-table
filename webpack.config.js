var path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          }
        }
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
          loader: "svg-react-loader",
          options: {
            tag: "svg",
            attrs: {
              title: "svgIcon"
            },
            name: "MyIcon"
          }
        }
      }
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    React: "react"
  }
};
