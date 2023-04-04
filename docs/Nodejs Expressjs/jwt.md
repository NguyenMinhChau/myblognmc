---
id: jwt
title: JWT
sidebar_position: 9
tags: [jwt, token]
---

> **Cài đặt thư viện**

```bash
npm i jsonwebtoken
```

## Hàm chung

> **Tạo Access Token**

```js
createAccessToken: (user) => {
    return jwt.sign(
        {
            // Ở đây JWT sẽ tạo access token với 2 trường dữ liệu như bên dưới
            id: user._id,
            role: user.role,
        },
        process.env.JWT_ACCESS_TOKEN_SECRET,
        {
            expiresIn: '1d',
        }
    );
};
```

> **Tạo Refresh Token**

```js
createRefreshToken: (user) => {
    return jwt.sign(
        {
            // Ở đây JWT sẽ tạo refresh token với 2 trường dữ liệu như bên dưới
            id: user._id,
            role: user.role,
        },
        process.env.JWT_REFRESH_TOKEN_SECRET,
        {
            expiresIn: '1d',
        }
    );
};
```

## Login

```js
login: async (req, res) => {
    //...
    const access_token = authenController.createAccessToken(user);
    const refresh_token = authenController.createRefreshToken(user);
    res.cookie('$KEY_REFRESH_TOKEN', refresh_token, {
        httpOnly: true,
        sameSite: 'strict',
        secure: false,
        path: '/',
        maxAge: 7 * 60 * 60 * 1000,
    });
    //...
};
```

## Logout

```js
logout: async (req, res) => {
    res.clearCookie('$KEY_REFRESH_TOKEN');
};
```

## Cài đặt OpenSSL tạo private/public key cho token

> Hướng dẫn cài đặt: [https://www.stechies.com/installing-openssl-windows-10-11/](https://www.stechies.com/installing-openssl-windows-10-11/)
>
> **Tạo thư mục chứa keys: `src/keys` → Mở terminal ngay thư mục này để tạo key**
>
> **Tạo private key**

```bash
openssl genrsa -out private_key.pem 2048
```

> **Tạo public key**

```bash
openssl rsa -in private_key.pem -outform PEM -pubout -out public_key.pem
```

> **Sử dụng**

```js
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const location = path.join(__dirname, 'keys');
const privatedKey = fs.readFileSync(`${location}/private_key.pem`);
const publicKey = fs.readFileSync(`${location}/public_key.pem`);

const token = jwt.sign({ name: 'Nguyễn Minh Châu' }, privatedKey, {
    algorithm: 'RS256',
    expiresIn: '1h',
});
jwt.verify(
    token,
    publicKey,
    {
        algorithms: ['RS256'],
    },
    (err, data) => {
        if (err) {
            console.log('err', 'Lỗi key');
        } else {
            console.log('data: ', data);
        }
    }
);
```

> **Có thể dùng `private key` do `OpenSSL` tạo ra để làm `KEY_ACCESS_TOKEN` VÀ `KEY_REFRESH_TOKEN`**
>
> **`Giải mã, verify` bằng cách dùng `public key`**
