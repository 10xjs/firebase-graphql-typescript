module.exports = function config(api) {
  api.cache(true);

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-react-display-name',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-react-constant-elements',
    ['babel-plugin-transform-react-remove-prop-types', {removeImport: true}],
  ];

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins,
  };
};
