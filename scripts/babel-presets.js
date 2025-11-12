const BABEL_ENV = process.env.BABEL_ENV;
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

module.exports = () => ({
  presets: [
    ['@babel/preset-typescript'],
    [
      '@babel/env',
      {
        bugfixes: true,
        loose: true,
        modules: isCommonJS ? 'commonjs' : false,
        targets: {
          esmodules: isESM ? true : undefined,
          chrome: 70,
        },
      },
    ],
  ],
  plugins: [
    // This plugin enables the parsing and transformation of NestJS decorators (@Module, @Injectable, etc.)
    ['@babel/plugin-proposal-decorators', { 'legacy': true }]
  ]
});