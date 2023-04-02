---
id: modelVerify
title: Model xác thực
sidebar_position: 13
tags: [nodejs, expressjs, jwt, token, modal, verify]
---

> **Model này dùng để tạo ra cấu trúc trong database cho việc lưu và xác thực mã code của người dùng**

```js
const VerifyAccountModal = new mongoose.Schema(
    {
        code: { type: String, default: '' },
        email: { type: String, default: '' },
        token: { type: String, default: '' },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

VerifyAccountModal.index({ createdAt: 1 }, { expireAfterSeconds: 180 }); // thiết lập thời gian tự xóa OTP của db trong vòng 180s
```
