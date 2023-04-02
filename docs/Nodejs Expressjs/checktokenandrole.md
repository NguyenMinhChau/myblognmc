---
id: checktokenandrole
title: Middleware kiểm tra Token và quyền người dùng
sidebar_position: 11
tags: [nodejs, expressjs, jwt, token, check token, check role, middleware]
---

## Kiểm tra token

```js
const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    try {
        const acccessToken = req.headers.token || req.body.headers.token;
        if (!acccessToken) return res.status(400).json({ message: 'Invalid Authentication' });
        jwt.verify(acccessToken, process.env.JWT_ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(400).json({ message: 'Invalid Authentication Verify' });
            req.user = user;
            next();
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
```

## Kiểm tra quyền

```js
const checkRole = (req, res, next) => {
    if (req.user?.id === req.params?.id || req.user?.role === 'admin') next();
    else return res.status(403).json({ message: 'You are not allowed to do this!' });
};
```
