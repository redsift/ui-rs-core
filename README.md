# ui-rs-core

Core library with common functionality to be used by UI components.

`ui-rs-core` contains

1. the common CSS style theme for [RedsiftUI](https://github.com/redsift/redsift-ui) and
2. common Javascript functionality used by RedsiftUI components (living in the `ui-rs-*` repositories).

For a description of the RedsiftUI and its components see [official RedsiftUI documentation](https://docs.redsift.io/docs/client-code-redsift-ui).

## Builds

[![Circle CI](https://circleci.com/gh/Redsift/ui-rs-core.svg?style=svg)](https://circleci.com/gh/Redsift/ui-rs-core)

A UMD build is available from //static.redsift.io/reusable/ui-rs-core/latest/ui-rs-core.umd-es2015.min.js.

To build locally checkout this repository and

```bash
> cd ui-rs-core
> npm install
> npm run build
```

This will create a `./dist` folder with the Javascript and CSS files.

## Browser Usage

First include the CSS file in the `<head>` of your page:

```html
<link rel="stylesheet" href="//static.redsift.io/reusable/ui-rs-core/latest/css/ui-rs-core.min.css">
```

Additionally include the Javascript on the bottom of the `<body>`, if you want to use its functionality directly:

```html
<script src="//static.redsift.io/reusable/ui-rs-core/latest/js/ui-rs-core.umd-es2015.min.js"></script>
```
