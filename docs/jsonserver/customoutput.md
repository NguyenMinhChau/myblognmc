---
id: customoutput
title: Custom Output
sidebar_position: 6
tags: [json server, custom output]
---

## Tham khảo

> **[https://github.com/typicode/json-server#custom-output-example](https://github.com/typicode/json-server#custom-output-example)**

## Tại file entrypoint - src/index.js

> **Mặc định output trả về**

```js
router.render = (req, res) => {
    res.jsonp(res.locals.data);
};
```

> **Cấu hình output trả về**

```js
const url = require('url');
router.render = (req, res) => {
    // check GET pagination in json-serser
    const headers = res.getHeaders();
    const totalCountHeader = headers['x-total-count'];
    if (req.method === 'GET' && totalCountHeader) {
        const totalCount = parseInt(totalCountHeader, 10);
        const parsed = url.parse(req.url, true);
        const page = parseInt(parsed.query._page) || 1;
        const limit = parseInt(parsed.query._limit) || 10;
        const totalPages = Math.ceil(totalCount / limit);
        // cấu trúc data trả về
        const result = {
            data: res.locals.data,
            pagination: {
                page,
                limit,
                totalCount,
                totalPages,
            },
        };
        return res.jsonp(result);
    } else {
        return res.jsonp(res.locals.data);
    }
};
```
