const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "polyglot-mf",
    projectName: "navbar",
    webpackConfigEnv,
  });

  const cssRule = defaultConfig.module.rules.find(
    (r) =>
      Array.isArray(r.use) && r.use.some((u) => u.loader.includes("css-loader"))
  );
  cssRule.use[1].options.modules = true;

  return merge(defaultConfig, {});
};
