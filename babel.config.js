module.exports = function (api) {
  const presets = [
    "module:metro-react-native-babel-preset",
    "babel-preset-expo",
  ];
  const plugins = [];
  api.cache(true);

  plugins.push([
    "module-resolver",
    {
      root: ["./"],
      extensions: [".js", ".json"],
      alias: {
        "@": "./src",
      },
    },
  ]);
  return {
    presets,
    plugins,
  };
};
