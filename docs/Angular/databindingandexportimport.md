---
id: data-binding-and-export-import
title: Data binding và export/import
sidebar_position: 4
tags: [data binding, export, import]
---

## Data Binding

-   app/app.component.html

```html
<main>
    <h1>{{ title }}</h1>
</main>
```

-   app/app.component.ts

```typescript
import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'Hello Angular';
}
```

> Data truyền vào trong file `my-component.component.ts` và lấy ra sử dụng ở file `my-component.component.html` bằng cách sử dụng cặp dấu `{{}}`

## Export/import

-   Tạo file trong thư mục `app` với cấu trúc `my-model.model.ts`, dữ liệu ở đây những nơi khác có thể dùng được

```js
// Ví dụ
export class Product {
    id: string;
    name: string;
    desc: string;
    thumbnail: string;
    price: number;
    quantity: number;
}
```

-   Sử dụng: **import {Product} from '../product.model'**
