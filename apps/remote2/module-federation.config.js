
module.exports = {
  name: 'remote2',
  exposes: {
    './button': './src/app/button.tsx',
  },
  shared: ['react', 'react-dom'],
};