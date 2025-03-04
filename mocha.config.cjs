module.exports = {
    require: 'ts-node/register',
    extension: ['ts'],
    spec: 'testing/**/*.test.js',
    reporter: 'spec',
    timeout: 5000,
    watch: false,
    'watch-files': ['**/*.ts'],
  };