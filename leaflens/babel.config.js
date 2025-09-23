module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      // Remove "nativewind/babel" from here!
    ],
    plugins: [
      "nativewind/babel",  // Move it here!
      'react-native-reanimated/plugin',  // This must be the last plugin
    ],
  };
};