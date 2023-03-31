---
title: 'Delete'
sidebar_position: 5
tags: ['api', 'delete']
---

**`axios`**

```js
const data = await axios.delete(url, options);
console.log(data);
```

**`fetch`**

```js
fetch(url, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((res) => res.json())
    .then((data) => console.log(data));
```
