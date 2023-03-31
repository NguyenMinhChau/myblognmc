---
title: 'Patch'
sidebar_position: 4
tags: ['api', 'patch']
---

**`axios`**

```js
const data = await axios.patch(url, options);
console.log(data);
```

**`fetch`**

```js
fetch(url, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((res) => res.json())
    .then((data) => console.log(data));
```
