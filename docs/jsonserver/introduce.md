---
id: jsonserver
title: Giới thiệu về JSON Server
sidebar_position: 1
tags: [introduce, jsonserver]
---

## JSON Server là gì?

-   Máy chủ JSON là gói Node.js cho phép bạn nhanh chóng tạo API RESTful bằng dữ liệu JSON. Nó là một công cụ hữu ích cho các nhà phát triển muốn tạo nguyên mẫu và thử nghiệm ứng dụng của họ mà không cần phải xây dựng máy chủ phụ trợ. Với Máy chủ JSON, bạn có thể tạo API giả phản hồi các yêu cầu HTTP bằng dữ liệu JSON.
-   JSON Server also provides additional features such as pagination, sorting, and filtering. You can find more information on how to use JSON Server in the official documentation: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

## Cài đặt json-server

```bash
npm install -g json-server #global
npm install json-server #local project
```

## Ví dụ về json-server

**`db.json`**

```json
{
    "posts": [{ "id": 1, "title": "json-server", "author": "typicode" }],
    "comments": [{ "id": 1, "body": "some comment", "postId": 1 }],
    "profile": { "name": "typicode" }
}
```

## Chạy json-server

```bash
json-server --watch db.json
```

## Tài liệu tham khảo

**`Tham khảo thêm tại:`** [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)
