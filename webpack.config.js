const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "polyglot-mf",
    projectName: "navbar",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "navbar__[local]--[hash:base64:5]",
                },
              },
            },
          ],
        },
      ],
    },
  });
};
