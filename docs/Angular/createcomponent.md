---
id: createcomponent
title: Tạo component với Angular CLI
sidebar_position: 3
tags: [component, angular]
---

## Tạo component

```bash
ng g c my-component # Không bỏ qua các file test
ng g c my-component --skip-tests # Bỏ qua các file test
```

## Cách sử dụng component

-   Xem tên `selector` tại file `my-component.componets.ts`.
-   Tạo thẻ tag với `<component-selector-name></component-selector-name>` trong file `*.components.html` muốn sử dụng

```js
// Ví dụ
@Component({
  selector: 'app-header',
  ...
}) → <app-header></app-header>
```

> **Nên chia component cho đỡ rối và dễ quản lý**

## Tham khảo

> **Tham khảo tại:** [https://angular.io/docs](https://angular.io/docs)
