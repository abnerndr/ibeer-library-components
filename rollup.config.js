/* eslint-disable import/no-anonymous-default-export */
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

const extensions = ['.ts', '.tsx', '.js', '.mjs', '.es', '.es6'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true
    }
  ],
  // external: [...Object.keys(packageJson.dependencies)],
  plugins: [
    typescript({ sourcemap: true }),
    peerDepsExternal(),
    resolve({ preferBuiltins: true, browser: true }),
    commonjs({
      extensions
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: ['node_modules/**', 'public/**'],
      extensions,
      inputSourceMap: true
    }),
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top'
      }
    })
  ]
};