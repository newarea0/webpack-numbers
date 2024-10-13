# Webpack Numbers

一个将数字转换为单词和反向转换的库。

## 安装

```bash
npm install @newarea/webpack-numbers
```

## 使用

- ES Modules

  ```javascript
  import { numberToWords, wordsToNumber } from '@newarea/webpack-numbers';
  ```

- CommonJS

  ```javascript
  const { numberToWords, wordsToNumber } = require('@newarea/webpack-numbers');
  ```

- AMD

  ```javascript
  require(['@newarea/webpack-numbers'], function (webpackNumbers) {
    // webpackNumbers is the exported module
  });
  ```

- UMD

  ```html
  <script src="https://unpkg.com/@newarea/webpack-numbers@latest/dist/webpack-numbers.min.js"></script>
  <script>
    const { numberToWords, wordsToNumber } = window.webpackNumbers;
  </script>
  ```

## 注意事项

请确保同时安装 lodash，因为它是本包的对等依赖。

  ```bash
  npm install lodash
  ```
