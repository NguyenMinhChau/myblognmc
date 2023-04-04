---
id: event-binding
title: Event binding
sidebar_position: 5
tags: [event binding]
---

## Cú pháp

> `(event)="expression"`

-   app/app.component.html

```html
<button (click)="handleClick()">Click me</button>
```

-   app/app.component.ts

```typescript
...
export class AppComponent {
    handleClick() {
        console.log('Click me');
    }
}
```

> **Tham khảo thêm tại:** [https://angular.io/guide/event-binding](https://angular.io/guide/event-binding)

## Nhận giá trị thẻ input

-   app/app.component.html

```html
<input type="text" (input)="handleInput($event)" />
<!-- HOẶC -->
<input #id_Input type="text" (input)="handleInput(id_Input)" />
```

-   app/app.component.ts

```typescript
...
export class AppComponent {
    handleInput(event: any) {
        console.log(event.target.value);
    }
}
```
