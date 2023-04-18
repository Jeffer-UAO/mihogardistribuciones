const withPlugins = require('next-compose-plugins');
const withNextBoost = require('next-boost');
const withImages = require('next-images');

module.exports = withPlugins([
  [withNextBoost],
  [withImages],
], {
  reactStrictMode: true,
  // Otras configuraciones de Next.js aquí...
});