module.exports = {
  staticFileGlobs: [
    'manifest.json',
    'node_modules/socket.io-client/dist/socket.io.slim.js'
  ],
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest'
    },
    {
      urlPattern: /\/src\//,
      handler: 'fastest'
    }
  ]
};
