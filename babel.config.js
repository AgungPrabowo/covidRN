module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".js", ".ts", ".tsx", ".json"],
        alias: {
          "@components": "./src/components",
          "@store": "./src/store",
          "@screens": "./src/screens",
        },
      },
    ],
  ],
};
