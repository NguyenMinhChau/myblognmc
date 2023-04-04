---
id: generics-in-ts
title: Generics trong typescript
sidebar_position: 10
tags: [generics]
---

## Generics là gì?

-   Là 1 kiểu dữ liệu mà ta có thể sử dụng cho nhiều kiểu dữ liệu khác nhau
-   Được sử dụng khi ta không biết kiểu dữ liệu của 1 biến nào đó

## Cú pháp

```ts
function sum<T>(a: T, b: T) {
    return a + b;
}
```

> **ts: function sum(a: T, b: T): T**

## Sử dụng

```ts
sum(1, 2); // 3
sum('1', '2'); // 12
sum(1, '2'); // error
```

## Generic với array

```ts
function sum<T>(a: T[], b: T[]) {
    return a.concat(b);
}
```

> **ts: function sum(a: T[], b: T[]): T[]**

## Generic với interface

```ts
interface IGeneric<T> {
    value: T;
}
```

> **ts: interface `IGeneric<T>` { value: T; }**

## Generic với class

```ts
class Generic<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
}
```

> **ts: `class Generic<T>` { value: T; constructor(value: T) { this.value = value; } }**

## Generic với extends

```ts
interface IGeneric<T> {
    value: T;
}

class Generic<T> implements IGeneric<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
}
```

> **ts: `class Generic<T>` implements `IGeneric<T>` { value: T; constructor(value: T) { this.value = value; }}**

## Ví dụ

```ts
interface List<T> {
    // trong đó T có thể thay đổi bằng bất cứ chữ cái nào khác
    length: number;
    [index: number]: T; // arr[0], arr[1],...
    map<U>(callBackFunc: (value: T, index: number, array: T[]) => U): U[];
    filter(callBackFunc: (value: T, index: number, array: T[]) => boolean): T[];
}

interface Student {
    id: number;
    name: string;
}

const numberList: List<number> = [1, 2, 3];
const wordList: List<string> = ['one', 'two'];
numberList.map((x, index, array) => {
    console.log(x);
});

const studentList: List<Student> = [{ id: 1, name: 'Bob' }];
```

## keyof operator

```ts
interface Student {
    id: number;
    name: string;
}

type StudentKeys = keyof Student; // 'id' | 'name'
```

## Mappped Types

```ts
interface Student {
    id: number;
    name: string;
}
// trả về toàn boolean
type MappedTypes = {
    [Key in keyof Student]: boolean;
};
const student: MappedTypes = {
    id: true,
    name: false,
};
// trả về theo kiểu dữ liệu Student
type MappedTypes = {
    [Key in keyof Student]: Student[Key];
};
const student: MappedTypes = {
    id: 1,
    name: '',
};
// tự custom key trả về
type MappedTypes = {
    [Key in keyof Student as `get${Capitalize<string & Key>}`]: Student[Key];
};
const student: MappedTypes = {
    getId: 1,
    getName: '',
};
```
