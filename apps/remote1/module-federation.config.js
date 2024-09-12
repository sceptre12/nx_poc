
module.exports = {
  name: 'remote2',
  filename: 'remoteEntry.js',
  exposes: {
    // Set the modules to be exported, default export as '.'
    './button': './src/app/button',
  },
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
}