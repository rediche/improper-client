module.exports = {
  staticFileGlobs: [
    'manifest.json',
    'node_modules/socket.io-client/dist/socket.io.slim.js',
    'src/**/*',
  ],
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest'
    }
  ]
};
