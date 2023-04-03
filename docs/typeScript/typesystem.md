---
id: typesystem
title: Type System
sidebar_position: 6
tags: [typescript, type system]
---

## Các kiểu dữ liệu bên TypeScript

-   `string`
-   `number`
-   `boolean`
-   `null`
-   `undefined`
-   `symbol`
-   `object`
-   `array`
-   `function`
-   `any`: không khuyến khích dùng trong TS vì bỏ qua TypeChecking
-   `void`
-   `never`
-   `unknown`

## Ví dụ về type system

```ts
let a: string = 'hello';
let b: number = 1;
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;
let f: symbol = Symbol('hello');
let g: object = {};
let h: any = 'hello';
let i: void = undefined;
let j: never = (() => {
    throw new Error('hello');
})();

// array
let k: string[] = ['hello', 'world'];
let l: number[] = [1, 2, 3];
let m: boolean[] = [true, false];
let n: null[] = [null, null];
let o: undefined[] = [undefined, undefined];
let p: symbol[] = [Symbol('hello'), Symbol('world')];
let q: object[] = [{}, {}];
let r: any[] = ['hello', 1, true, null, undefined, Symbol('hello'), {}, []];
let s: void[] = [undefined];
let t: never[] = [
    (() => {
        throw new Error('hello');
    })(),
];
```

```tsx
const Student = {
    name: 'student',
} as const;
```

-   `as const` giúp chúng ta có thể gán giá trị cho `Student` mà không bị thay đổi giá trị của nó
