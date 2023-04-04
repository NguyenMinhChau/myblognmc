---
id: react-webpack
title: Tạo dự án React + Webpack
sidebar_position: 2
tags: [react webpack]
---

## Webpack là gì?

-   Giúp `module` hóa ứng dụng `frontend` (js, image, css, scss,...) → giúp `export/import` các file.
-   Khi build `webpack` sẽ `compiler` thành các file có kích thước nhỏ hơn.

## Cấu hình dự án với webpack

> **Khởi tạo package.json**

```bash
npm init -y
```

> **Cài đặt webpack và webpack-cli**

```bash
npm install webpack webpack-cli --save-dev
```

> **Cài đặt react và react-dom**

```bash
npm install react@latest react-dom@latest --save
```

> **Cài đặt babel**

```bash
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

-   `babel-core`: Chuyển đổi ES6 về ES5
-   `babel-loader`: Cho phép chuyển các files Javascript sử dụng Babel & Webpack
-   `babel-preset-env`: Cài đặt sẵn giúp bạn sử dụng Javascript mới nhất trên nhiều môi trường khác nhau (nhiều trình duyệt khác nhau). Gói này đơn giản là support truyển đổi ES6, ES7, ES8, ES... về ES5.
-   `babel-preset-react`: Hỗ trợ chuyển đổi JSX về Javascript

> **Tạo `public/index.html`**

```html
<!-- ... -->
<body>
    <div id="root"></div>
</body>
<!-- ... -->
```

> **Tạo `src/index.js`**

```js
import React from 'react'; // nạp thư viện react
import ReactDOM from 'react-dom'; // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em</h1>
        </div>
    );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'));
```

> **Cài đặt css-loader và style-loader giúp webpack có thể tải file `*.css` dưới dạng `module`**

```bash
npm install css-loader style-loader --save-dev
```

> **Tạo `webpack.config.js` tại thư mục gốc của dự án**

```js
const path = require('path');

module.exports = {
    entry: './src/index.js', // Dẫn tới file index.js ta đã tạo
    output: {
        path: path.join(__dirname, '/build'), // Thư mục chứa file được build ra
        filename: 'bundle.js', // Tên file được build ra
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
                exclude: /node_modules/, // Loại trừ thư mục node_modules
                use: ['babel-loader'],
            },
            {
                test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    // Chứa các plugins sẽ cài đặt trong tương lai
    plugins: [],
};
```

> **Tạo file `.babelrc` tại root dùng để cấu hình cho thư viện `Babel`**

```json
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

> **Thêm `scripts` cho dự án tại `package.json`**

```bash
"scripts": {
    # ...
    "start": "webpack --mode development --watch",
    "build": "webpack --mode production"
}
```

> **Chạy dự án với Live Server**

```bash
npm start # Xuất ra file build/bundle.js (vì ta đã cấu hình trong webpack.config.json) và đây là code trong file src/index.js
```

-   Thêm thẻ `script` link tới file `build/bundle.js` trong `public/index.html`

```html
<script src="build/bundle.js"></script>
```

-   Chạy **Live Server**

> **Cài đặt html-webpack-plugin**: Giúp chúng ta "nhờ" Webpack sau khi build ra `build/bundle.js` thì thêm hộ chúng ta vào `public/index.html` luôn chứ không phải thêm `script` như trên nữa và khi thay đổi khỏi cần F5 lại trang

```bash
npm install html-webpack-plugin --save-dev
```

> **Tại `webpack.config.js`**

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //   ...
    // Chứa các plugins sẽ cài đặt trong tương lai
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
```

-   Xóa bỏ thẻ `script` link tới file `build/bundle.js` trong `public/index.html`

> **Cài đặt webpack-dev-server**: Để có được một web server kết hợp được Webpack và Node nhé (tự động bật khi start dự án)

```bash
npm install webpack-dev-server --save-dev
```

> **Sửa lại cấu hình `scripts` trong `package.json`**

```json
"scripts": {
    // ...
    "start": "webpack-dev-server --mode development --open --hot",
    // ...
}
```

> **Chạy lại dự án để thấy kết quả**

```bash
npm start
```

## Tham khảo

> **Tham khảo tại:** [fullstack.edu.vn](https://fullstack.edu.vn/blog/phan-1-tao-du-an-reactjs-voi-webpack-va-babel.html)
