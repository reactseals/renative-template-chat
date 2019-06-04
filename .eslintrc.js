module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'globals': {
        'localStorage': true,
        'fetch': true,
        'console': true,
        'alert': true
    },
    'rules': {
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/prop-types': 0
      }
  };