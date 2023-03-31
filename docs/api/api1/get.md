---
title: 'Get'
sidebar_position: 1
tags: ['api', 'get']
---

**`axios`**

```js
const data = await axios.get(url, options);
console.log(data);
```

**`fetch`**

```js
fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((res) => res.json())
    .then((data) => console.log(data));
```
