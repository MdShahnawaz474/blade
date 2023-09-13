const { dependencies } = require('./package.json');

module.exports = {
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3002/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    '@razorpay/blade': {
      // Notice shared are NOT eager here.
      requiredVersion: dependencies['@razorpay/blade'],
      singleton: true,
    },
    'styled-components': {
      requiredVersion: dependencies['styled-components'],
      version: dependencies['styled-components'],
      singleton: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
