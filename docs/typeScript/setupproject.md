---
id: set-up-project
title: Khởi tạo và thực thi dự án
sidebar_position: 2
tags: [setup, typescript]
---

## Cài đặt

> **Cài đặt npm packages: chỉ nên cài ở project đang làm tránh conflict**

```bash
npm i typescript ts-node ts-lib @types/node
```

-   `typescript`: chuyển typescript -> js để thực thi
-   `ts-node`: nó như là nodejs trong TS: chuyển ts -> js rồi thực thi
-   `ts-lib` và `@types/node`: các thư viện cần thiết khác

## Khởi tạo file tsconfig.json mặc định

```bash
npx tsc --init
```

> **Check version**

```bash
npx tsc -v
npx ts-node -v
```

> **Combine TS sang JS**

```bash
npx tsc my-file.ts
```

> **Chạy file TS**

```bash
npx ts-node my-file.ts
```
