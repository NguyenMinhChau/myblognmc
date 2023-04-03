---
id: typealiasandinterface
title: Type Alias and Interface
sidebar_position: 7
tags: [typescript, type alias, interface]
---

## Type Alias

> **Đặt một tên mới cho một kiểu dữ liệu**

```ts
type StringOrNumber = string | number;

let a: StringOrNumber = 'hello';
let b: StringOrNumber = 1;
```

## Interface

> **Định nghĩa một kiểu dữ liệu mới**

```ts
interface Student {
    name: string;
    age: number;
    isMale: boolean;
}

let student: Student = {
    name: 'student',
    age: 18,
    isMale: true,
};
```

> **Đặt tên `interface` theo kiểu `PascalCase`**

## Union Type

> **Kết hợp nhiều kiểu dữ liệu**

```ts
type StringOrNumber = string | number;
interface Student {
    id: number | string;
    name: string;
    gender: 'male' | 'female';
    grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

let a: StringOrNumber = 'hello';
let b: StringOrNumber = 1;
let student: Student = {
    id: 18,
    name: 'student',
    gender: 'male',
    grade: 'A',
};
```

## Intersection type

> **Dùng dấu `&` gom lại và các thuộc tính trong các interface**

```ts
interface BusinessPartner {
    name: string;
    credit: number;
}
interface Identity {
    id: number;
    name: string;
}
interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Identity;
// HOẶC
interface Customer extends BusinessPartner, Identity {}

let customer: Customer = {
    id: 1,
    name: 'customer',
    credit: 100,
};
```

## Thêm trường dữ liệu mới vào interface bằng MERGING

> **KHÔNG LÀM ĐƯỢC VỚI TYPE ALIAS**

```ts
interface Student {
    id: number;
    name: string;
}

interface Student {
    age?: number;
}

let student: Student = {
    id: 1,
    name: 'student',
    age: 18,
};
```
