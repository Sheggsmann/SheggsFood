module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".jsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@navigation": "./src/navigation",
            "@constants": "./src/constants",
            "@screens": "./src/screens",
            "@hooks": "./src/hooks",
            "@mocks": "./src/mocks",
            "@redux": "./src/redux",
            "@src": "./src",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
