---
title: 'Put'
sidebar_position: 3
tags: ['api', 'put']
---

**`axios`**

```js
const data = await axios.put(url, options);
console.log(data);
```

**`fetch`**

```js
fetch(url, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((res) => res.json())
    .then((data) => console.log(data));
```
