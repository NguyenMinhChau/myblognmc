---
id: bcrypt-password
title: Mã hóa mật khẩu bằng bcrypt
sidebar_position: 8
tags: [bcrypt, password]
---

> **Cài đặt thư viện hỗ trợ**

```bash
npm i bcrypt
```

> **Register**

```js
const genSalt = await bcrypt.genSalt(10);
const passwordHash = await bcrypt.hash(password, genSalt);
```

> **Login**

```js
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ message: 'Incorrect password.' });
```
