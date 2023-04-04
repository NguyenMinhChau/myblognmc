---
id: template-engine-handlebars
title: Template Engine Handlebars
sidebar_position: 3
tags: [templateengine, handlebars]
---

## Cài đặt thư viện

```bash
npm i express-handlebars
```

## Cấu hình entrypoint src/index.js

```js
const { engine } = require('express-handlebars');
// view engine setup
app.engine('hbs', engine({ extname: '.hbs' })); // Thay đổi đuôi file engine
app.set('view engine', 'hbs'); // chỉ định app sử dụng engine handlebars
app.set('views', path.join(__dirname, 'views')); // định lại vị trí cho thư mục views
```

## Cấu trúc engine

```bash
.
├── app.js
└── views
    ├── home.hbs
    └── layouts
        └── main.hbs
```

> **`views/layouts/main.hbs`**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NodeJS & ExpressJS</title>
    </head>
    <body>
        <div id="app">
            <header id="header"></header>
            <div id="content">{{{body}}}</div>
            <footer id="footer"></footer>
        </div>
    </body>
</html>
```

> **Để tạo các thành phần dùng chung trong views ta tạo thư mục `views/partials`**
>
> Sử dụng trong `views/layouts/main.hbs`

```html
<!--
    {{> header }}: include header.hbs
    {{> footer }}: include footer.hbs
-->
<header id="header">{{> header }}</header>
<footer id="footer">{{> footer }}</footer>
```

## Server trả về view

```js
// [GET]: /api/index
index: async (req, res) => {
try {
    const data = await User.find({});
    res.render('home', {
        // data
    });
} catch (err) {
    res.status(500).json({ message: err.message });
}
},

```

## Bên view nhận data

> `string, number`

```html
<p>{{string || number}}</p>
```

> `array`

```html
<ul>
    {{#each array}}
    <li>{{this}}</li>
    {{/each}}
</ul>
```

> `object`

```html
<p>{{object.key}}</p>
```
