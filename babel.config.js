module.exports = function (api) {
    api.cache(true);
    return {
     
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
      ],
      _plugins: ['react-native-reanimated/plugin', '@babel/plugin-proposal-export-namespace-from'],
       get plugins() {
         return this._plugins;
       },
       set plugins(value) {
         this._plugins = value;
       },
       
    };
  };