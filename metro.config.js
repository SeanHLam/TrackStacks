const { getDefaultConfig } = require("@expo/metro-config");

// const defaultConfig = getDefaultConfig(__dirname);

// defaultConfig.resolver.assetExts.push("cjs");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.resolver.assetExts.push("cjs");

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
// module.exports = defaultConfig;