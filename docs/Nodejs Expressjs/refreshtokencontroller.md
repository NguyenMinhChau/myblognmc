---
id: refresh-token-controller
title: Refresh Token Controller
sidebar_position: 10
tags: [jwt, token, refresh token]
---

> **Hàm xử lý refresh token cho người dùng**

```js
refreshToken: async (req, res) => {
    try {
        const rf_token = req.cookies.$KEY_REFRESH_TOKEN;
        if (!rf_token) return res.status(400).json({ message: 'Please Login or Register' });
        jwt.verify(rf_token, process.env.JWT_REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(400).json({ message: 'Please Login or Register' });
            const access_token = authenController.createAccessToken(user);
            const refresh_token = authenController.createRefreshToken(user);
            res.cookie('$KEY_REFRESH_TOKEN', refresh_token, {
                httpOnly: true,
                sameSite: 'strict',
                secure: false,
                path: '/',
                maxAge: 7 * 60 * 60 * 1000, // 1 day
            });
            res.status(200).json({
                message: 'Access token has been refreshed',
                newToken: access_token,
            });
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
```
