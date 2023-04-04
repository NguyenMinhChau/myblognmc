---
id: utility-type-in-ts
title: Utility Types trong TypeScript
sidebar_position: 11
tags: [utility types]
---

## Partial

> **Tạo ra 1 interface mới với các thuộc tính của Type là optional**

```ts
interface IPartial {
    name: string;
    age: number;
}

const partial: Partial<IPartial> = {
    name: 'Nguyen Van A',
};
```

## Required

> **Tạo ra 1 interface mới với các thuộc tính của Type là required**

```ts
interface IRequired {
    name?: string;
    age: number;
}

const required: Required<IRequired> = {
    name: 'Nguyen Van A',
    age: 18,
};
```

## Readonly

> **Tạo ra 1 interface mới với các thuộc tính của Type là readonly**

```ts
interface IReadonly {
    name: string;
    age: number;
}
const readonly: Readonly<IReadonly> = {
    name: 'Nguyen Van A',
    age: 18,
};
```

## Record[Keys, Type]

> **Tạo ra 1 interface mới với các thuộc tính là Keys và kiểu dữ liệu là Type**

```ts
interface IRecord {
    name: string;
    age: number;
}

const record: Record<keyof IRecord, string> = {
    name: 'Nguyen Van A',
    age: '18',
};
```

## Pick[Type, Keys]

> **Chỉ lấy những Keys có trong Type**

```ts
interface IPick {
    name: string;
    age: number;
    address: string;
}

const pick: Pick<IPick, 'name' | 'age'> = {
    name: 'Nguyen Van A',
    age: 18,
};
```

## Omit[Type, Keys]

> **Loại bỏ các Keys có trong Type**

```ts
interface IOmit {
    name: string;
    age: number;
    address: string;
}

const omit: Omit<IOmit, 'name' | 'age'> = {
    address: 'Ha Noi',
};
```

## ReturnType

> **Lấy kiểu dữ liệu trả về của 1 hàm**

```ts
function getReturnType() {
    return 'Nguyen Van A';
}

const returnType: ReturnType<typeof getReturnType> = 'Nguyen Van A';
```

## Exclude

> **Loại bỏ các kiểu dữ liệu trong Type**

```ts
type ExcludeType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
const exclude: ExcludeType = 'c';
```

## Extract

> **Lấy các kiểu dữ liệu trong Type**

```ts
type ExtractType = Extract<'a' | 'b' | 'c', 'a' | 'b'>;
const extract: ExtractType = 'a';
```

## NonNullable

> **Loại bỏ các kiểu dữ liệu là null và undefined**

```ts
type NonNullableType = NonNullable<string | number | null | undefined>;
const nonNullable: NonNullableType = 'Nguyen Van A';
```

## Parameters

> **Lấy kiểu dữ liệu của các tham số của 1 hàm**

```ts
function getParameters(name: string, age: number) {
    return `${name} - ${age}`;
}

type ParametersType = Parameters<typeof getParameters>;
const parameters: ParametersType = ['Nguyen Van A', 18];
```

## Tham khảo

> **Tham khảo thêm tại:** [https://www.typescriptlang.org/docs/handbook/utility-types.html](https://www.typescriptlang.org/docs/handbook/utility-types.html)
