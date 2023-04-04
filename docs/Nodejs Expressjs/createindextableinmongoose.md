---
id: create-index-table-in-mongoose
title: Tạo index cho các trường table trong Mongoose
sidebar_position: 6
tags: [mongoose, table, index]
---

> **Mặc định sử dụng**

```html
<th>{{@index}}</th>
```

> **Tăng index:** Tại `src/index.js` tạo helpers

```js
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
```

> **Sử dụng**

```html
<th>{{sum @index 1}}</th>
```
