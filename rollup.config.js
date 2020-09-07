import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
    input: 'src/notifier.ts',
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: 'notifier',
        },
        {
            file: pkg.module,
            format: 'es',
            name: 'notifier',
        },
    ],
    plugins: [
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions,
        }),
        resolve(),
        commonjs(),
        serve({
            open: true,
            openPage: '/',
            host: 'localhost',
            port: 3000,
            contentBase: ['.'],
        }),
        livereload({
            watch: ['.'],
            exts: ['html', 'js', 'css'],
        }),
    ],
}