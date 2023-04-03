---
id: configstrictintsconfig
title: Config strict in tsconfig.jsons
sidebar_position: 5
tags: [typescript, config, strict]
---

> **Bật `strict=true` sẽ bật tất cả các `options` liên quan đến `strict` lên true**

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

-   Mặc định các options liên quan tới `strict=false`, nhưng khuyến nghị sử dụng `strict=true`
-   Config của từng option sẽ ưu tiên cao hơn so với "strict". Tức `strict=true`, mà `noImplicitAny=false` thì giá trị cuối cùng vẫn là `noImplicitAny=false`

> `noImplicitAny`: nếu không khai báo kiểu dữ liệu cho biến mà để TS tự suy luận ra kiểu `"any"` thì nó sẽ báo lỗi nếu bật thằng này là `true`.
>
> `strictNullChecks`: báo lỗi khi `null/undefined` được sử dụng không đúng khi bật thằng này là true.
>
> `alwaysStrict`: khi bật thằng này là true thì khi convert file TS → JS, các file JS sẽ ở chế độ `strict mode` và sẽ có `"use strict"` ở đầu file javascript được tạo ra.
>
> **Tham khảo thêm tại:** [https://www.typescriptlang.org/tsconfig#strict](https://www.typescriptlang.org/tsconfig#strict)
