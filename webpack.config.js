const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "polyglot-mf",
    projectName: "navbar",
    webpackConfigEnv
  });

  return webpackMerge.smart(defaultConfig, {
    output: {
      filename: "polyglot-mf-navbar.js"
    }
  });
};
