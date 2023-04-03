---
id: enumints
title: Enum trong typescript
sidebar_position: 9
tags: [typescript, enum]
---

## Khi nào sử dụng enum

-   Dữ liệu 1 chiều, khai báo rồi chỉ sử dụng
-   Tập hợp các giá trị cùng nhóm

```ts
enum Status {
    PENDING,
    IN_PROGRESS,
    DONE,
    CANCELED,
}
```

> **Dữ liệu trả về từ `API` mà cần `parser` nên sử dụng `UNION TYPES`**

```ts
type MediaTypes = 'application/json' | 'application/xml';
```

## Number enum

```ts
enum Status1 {
    PENDING, // 0
    IN_PROGRESS, // 1
    DONE, // 2
    CANCELED, // 3
}
enum Status2 {
    PENDING = 3, // 3
    IN_PROGRESS, // 4
    DONE, // 5
    CANCELED, // 6
}
enum Status3 {
    PENDING = 3,
    IN_PROGRESS = 5,
    DONE = 8,
    CANCELED = 10,
}
```

> **Có thể gán bất cứ giá trị `number` nào cho `enum`**

```ts
const status1: Status1 = Status.PENDING;
const status2: Status2 = 1;
const status3: Status3 = -1;
```

> **`ENUM NUMBER` có hỗ trợ `reverse mapping`**

```ts
console.log(Status1[0]); // PENDING
console.log(Status1['DONE']); // 2
```

## String enum

```ts
enum MediaTypes {
    JSON = 'application/json',
    XML = 'application/xml',
}
fetch(url, {
    headers: { Accept: MediaTypes.JSON },
}).then((res) => {
    // ...
});
```

> **`ENUM STRING` KHÔNG có hỗ trợ `reverse mapping`**
