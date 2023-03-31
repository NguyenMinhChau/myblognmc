---
title: 'Post'
sidebar_position: 2
tags: ['api', 'post']
---

**`axios`**

```js
const data = await axios.post(url, options);
console.log(data);
```

**`fetch`**

```js
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((res) => res.json())
    .then((data) => console.log(data));
```
