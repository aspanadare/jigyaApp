const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add SVG transformer configuration
const { resolver: { sourceExts, assetExts } } = config;
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

config.resolver.assetExts = assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts = [...sourceExts, 'svg'];

// Export the modified config with NativeWind
module.exports = withNativeWind(config, { input: "./global.css" });
