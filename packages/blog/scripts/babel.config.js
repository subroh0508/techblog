module.exports = {
  presets: [
    ["@babel/preset-env", {
      "useBuiltIns": "usage",
      "corejs": 3,
    }],
  ],
  plugins: [
    "transform-html-import-require-to-string",
  ],
};
