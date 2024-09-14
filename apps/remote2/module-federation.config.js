const { REMOTE2_NAME } = require("../../libs/global-constants/src/index.cjs");
module.exports = {
  name: REMOTE2_NAME,
  exposes: {
    './button': './src/app/button.tsx',
  },
  shared: ['react', 'react-dom'],
};