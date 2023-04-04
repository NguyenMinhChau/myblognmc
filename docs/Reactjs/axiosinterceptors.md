---
id: axios-interceptors
title: Axios Interceptors
sidebar_position: 12
tags: [axios, interceptors]
---

> **HÀM XỬ LÝ**

```js
const api = axios.create({
    baseURL: `${process.env.REACT_APP_URL_SERVER}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});
// MIDDLEWARES DÙNG ĐỂ CHECK TRƯỚC KHI VÀO API (VD: CHECK TOKEN)
api.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response.status === 401) {
            // todo
        }
        return Promise.reject(err);
    }
);
export { api };
```
