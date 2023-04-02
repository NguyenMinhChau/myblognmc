---
id: restclientvscode
title: REST Client - VSCode
sidebar_position: 3
tags: [json server, rest client]
---

## Extension

> **[REST Client for VS Code](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)**

## Tạo file test API - api/test.http

```http
@baseUrl = http://localhost:3000/api

# @name getAll dataStudent
GET http://localhost:3000/dataStudent
GET {{baseUrl}}/dataStudent
###
# @name add new student
POST http://localhost:3000/api/classes
Content-Type: application/json
*CÓ KHOẢNG TRỐNG NGAY ĐÂY*
{
    "class": "F"
}
###
PATH tương tự
```

> **Send Request**
