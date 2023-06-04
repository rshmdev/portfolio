const { override, addBabelPreset } = require("customize-cra");

module.exports = override(
  addBabelPreset("@babel/preset-env", {
    targets: {
      browsers: ["last 2 versions"],
    },
  })
);
