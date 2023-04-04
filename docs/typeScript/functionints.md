---
id: function-in-ts
title: Kiểu dữ liệu function trả về trong TypeScript
sidebar_position: 8
tags: [function, return type]
---

```ts
function sayHello() {
    console.log('Hi');
}
```

> **ts: function sayHello(): `void` vì không biết return về gì**

```ts
function fail(msg: string) {
    throw new Error(msg);
}
```

> **ts: function fail(msg:string): `never` vì throw 1 lỗi**

```ts
function sum(a: number, b: number) {
    return a + b;
}
```

> **ts: function sum(a:number, b:number): `number` vì return 1 số**

```ts
function sum(a: number, b: number): number {
    return a + b.toString();
}
```

> **ts: error**

## Optional và giá trị mặc định

> **Optional**: sử dụng `?:` để đánh dấu là optional

```ts
function sum(a: number, b?: number) {
    return a + b;
}
```

> **Gía trị mặc định**

```ts
function sum(a: number, b: number = 0) {
    return a + b;
}
```

> **KHÔNG ĐƯỢC DÙNG KẾT HỢP OPTIONAL VÀ GIÁ TRỊ MẶC ĐỊNH**

## Destructuring parameter

```ts
function sum({ a, b }: { a: number; b: number }) {
    return a + b;
} // sum({2,3})
// ___
function createStudent(student: { id: number; name: string; age: number }) {
    const { id, name, age } = student;
    console.log(id, name, age);
} // createStudent({id: 1, name: 'Bob', age: 20})
// ___
interface Student {
    id: number;
    name: string;
    age: number;
}
function createStudent(student: Student) {
    const { id, name, age } = student;
    console.log(id, name, age);
} //createStudent({id: 1, name: 'Bob', age: 20} as Student)
```
