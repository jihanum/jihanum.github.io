const path = require('path');

module.exports = {
  entry: {
    app: './js/scrollAnimations.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/scrollAnimations.js',
  },
};
