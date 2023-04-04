---
id: unit-test-ts-jest
title: Tạo unit test với ts-jest
sidebar_position: 3
tags: [unit test, ts-jest]
---

## Khởi tạo package.json

```bash
npm init -y
```

> **Thêm scripts**

```json
"scripts": {
    "test: "jest --coverage"
}
```

## Cấu hình unit test

> **Cài đặt**

```bash
npm install --save-dev jest typescript ts-jest @types/jest
```

> **Tạo file config mặc định jest**

```bash
npx ts-jest config:init
```

> **Tạo file tsconfig.json**

```bash
npx tsc --init
```

## Viết unit test

> Ví dụ: `src/main.ts` (file code) và `src/main.test.ts` (file test main.ts)

```tsx
// src/main.ts
export function isEvent(n: number) {
    return n % 2 == 0;
}
```

```tsx
// src/main.test.ts
import { isEvent } from './main';

describe('isEvent()', () => {
    test('should return true if the number is even', () => {
        expect(isEvent(2)).toBe(true);
    });
    test('should return false if the number is odd', () => {
        expect(isEvent(1)).toBe(false);
    });
});
```

> **Tham khảo cách viết test tại:** [https://jestjs.io/](https://jestjs.io/)
