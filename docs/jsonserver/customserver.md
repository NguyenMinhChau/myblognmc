---
id: custom-server
title: Cấu hình router và dữ liệu
sidebar_position: 2
tags: [custom router, custom data]
---

## Khởi tạo package.json

```bash
npm init -y
```

## Cài đặt các thư viện cần thiết

```bash
npm i json-server
npm i nodemon --save-dev
```

## Tạo file entrypoint src/index.js

```js
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});
```

## Cấu hình lại router

> Ban đầu: `server.use(router); => http://localhost:3000/data`
>
> Cấu hình: `server.use('/api', router); => http://localhost:PORT/api/data`

## Cấu hình lại dữ liệu khi gửi với phương thức POST

```js
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now(); // tự động thêm createdAt vào khi POST
        req.body.updatedAt = Date.now(); // tự động thêm updatedAt vào khi POST
    }
    // Continue to JSON Server router
    next();
});
```

**`Tham khảo cấu hình tại:`** [https://github.com/typicode/json-server#module](https://github.com/typicode/json-server#module)

## Thêm scripts - package.json

```json
"scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
},
```
