---
id: formatcurrency
title: Định dạng tiền tệ
sidebar_position: 8
tags: [formatcurrency, angular]
---

## Cú pháp

```html
<span>{{money | currency}}</span>
```

> Thêm `| currency` và sau số tiền. Mặc định theo chuẩn `USD`

## Định dạng VND

```html
<span>{{money | currency:'VND':'symbol':'1.0-0'}}</span>
```

## Tham khảo

> **Tham khảo thêm tại:** [https://angular.io/guide/pipes](https://angular.io/guide/pipes)
