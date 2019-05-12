const path = require('path');

const pathToInlineSvg = path.resolve(__dirname, '../src/images');

module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve("babel-loader")

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ]

  // use @babel/plugin-proposal-class-properties for class arrow functions
  config.module.rules[0].use[0].options.plugins = [
    require.resolve("@babel/plugin-proposal-class-properties"),
  ]

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"]

  // TypeScript Support
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app'), require.resolve('@babel/preset-typescript')],
          plugins: [require.resolve('babel-plugin-typescript-to-proptypes')],
          exclude: ["node_modules", "**/node_modules"],
        },
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  // Svgr support
  const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = pathToInlineSvg;

  config.module.rules.push({
    test: /\.svg$/,
    include: pathToInlineSvg,
    use: [
      {
        loader: '@svgr/webpack',
      },
      'url-loader'
    ],
  });

  return config
}
