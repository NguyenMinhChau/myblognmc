---
id: typescriptcompiler
title: TypeScript Compiler
sidebar_position: 4
tags: [typescript, compiler]
---

```bash
npx tsc #compiler tất cả file ts => js trong project
npx tsc my-file.ts #compiler my-file.ts
npx tsc src/*.ts #compiler tất cả file .ts trong src
```

> **Để tạo folder chứa tất cả các file compiler TS → JS**

```json
// tsconfig.json
{
    "compilerOptions": {
        "outDir": "./my-folder-name"
    }
}
```

> **Compiler với lỗi**

```json
// tsconfig.json
{
    "compilerOptions": {
        "noEmitOnError": false
    }
}
```

-   `noEmitOnError: true` không tạo ra file js nếu compiler lỗi
-   `noEmitOnError: false` vẫn tạo ra file js nếu compiler lỗi
