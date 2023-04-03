---
id: localstorage
title: Local Storage
sidebar_position: 7
tags: [react, local storage]
---

> **Hàm xử lý**

```js
const KEY = '$NAME_KEY';

export const getStore = () => {
    return JSON.parse(localStorage.getItem(KEY));
};
export const setStore = (data) => {
    return localStorage.setItem(KEY, JSON.stringify(data));
};
export const removeStore = () => {
    return localStorage.removeItem(KEY);
};
```
