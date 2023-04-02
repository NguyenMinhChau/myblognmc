---
id: routerquery
title: Router Query
sidebar_position: 5
tags: [json server, router query]
---

> **Tìm kiếm, lọc, phân trang**

```http
GET {{baseUrl}}/dataStudent?_page=1&_limit=10_sort=id&_order=asc&email=...
GET {{baseUrl}}/dataStudent?email=...&username=...
GET {{baseUrl}}/dataStudent?author.email=...
GET {{baseUrl}}/dataStudent?email_like=... (có chứa từ nào đó/không phân biệt hoa thường)
GET {{baseUrl}}/dataStudent?age_gte=18&age_lte=30 (18 <= tuổi <= 30)
GET {{baseUrl}}/dataStudent?age_ne=18 (không lấy tuổi 18)
GET {{baseUrl}}/dataStudent?q=... (Full text search)
```
