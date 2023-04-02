---
id: angularmaterial
title: Angular Material
sidebar_position: 9
tags: [angularmaterial, angular]
---

## Cài đặt

```bash
ng add @angular/material
```

## Cách sử dụng

-   app/app.module.ts

```ts
...
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [AppComponent],
    imports: [..., MatButtonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

-   app/app.component.html

```html
<button mat-button color="primary">Click me!</button>
```

> CSS trong `styles.css` sẽ ghi đè hết tất cả `CSS angular material` → xóa hết css trong `styles.css`, giữ lại các thuộc tính reset css

## Ghi đè CSS angular material

-   Tạo file `styles/mycss.css` và khai báo vào `angular.json` (2 nơi)

```json
"styles": [
    "src/styles.css",
    "src/styles/mycss.css"
],
```
