---
id: data-transmission
title: Truyền dữ liệu giữa các component (Con ⇄ Cha)
sidebar_position: 6
tags: [data transmission]
---

## Ý tưởng

> Tập trung dữ liệu về một nơi để xử lý (thường là `app.component.ts`)

```js
export class AppComponent {
  ...dữ liệu và hàm xử lý
}
```

## Cách component truyền dữ liệu cho nhau

-   app/name-selector/name-selector.component.html

```html
<app-name-selector [name_event]="name_data">{{name_data}}</app-name-selector>
<app-name-selector (name_event1)="name_data1($event)"></app-name-selector>
<!-- 
    -   name_event, name_event1: tên biến tự đặt truyền vào trong chil-component.componets.ts
    -   name_data, name_data1: tên biến/hàm định nghĩa bên app.components.ts
    -   name_event1 là hàm nên được đặt trong cặp ()
-->
```

-   app/name-selector/name-selector.component.ts

```js
import { Component, Input, Output, EventEmitter } from '@angular/core';
...
export class NameSelectorComponent {
    @Input() name_event: string;
    @Output() name_event1 = new EventEmitter();
    handleClick(id:string) {
        this.name_event1.emit(id);
    }
}
```

-   app/app.component.ts

```js
export class AppComponent {
    name_data = 'Hello Angular';
    name_data1(event: any) {
        console.log(event); // console.log(id) vì emit bên trên nhận vào là id
    }
}
```
