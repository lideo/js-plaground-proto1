# JS Playground Prototype #1

Yet another in-browser JS playground built on top of CodeMirror editor. Doesn't do much yet.

![JS Playground Prototype #1](./screenshot.png)

## Command list

Build for development:
```
npm run dev
```

Watch for changes and serve for development:
```
npm run watch
```

Build for production:
```
npm run build
```

## Plugins & packages

* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) for creating HTML files to serve your bundles.
* [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) for extracting CSS into separate files. Works with webpack 4.
* [webpack-cleanup-plugin](https://github.com/gpbl/webpack-cleanup-plugin) for cleaning up the extraneous files from the webpack's output path.
* [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin) for optimizing / minimizing CSS assets.
* [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin) for minifying JavaScript.
* [webpack-notifier
](https://github.com/Turbo87/webpack-notifier#readme) for displaying build status system notifications to the user.
* [browser-sync-webpack-plugin
](https://github.com/Va1/browser-sync-webpack-plugin) for browser testing (will run only in watch mode).
       


## Loaders

### HTML

* html-loader

### JS

* babel-loader (with preset-env)

### Sass

* css-loader
* postcss-loader (with autoprefixer)
* sass-loader

### CSS

* css-loader
* postcss-loader (with autoprefixer)
