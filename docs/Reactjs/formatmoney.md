---
id: format-money
title: Format Money
sidebar_position: 9
tags: [format money]
---

> **HÀM LÀM TRÒN**

```js
export const precisionRound = (number) => {
    let precision = 5;
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
};
```

> **HÀM FORMAT USD**

```js
export const formatUSD = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number);
};
```

> **HÀM FORMAT VND**

```js
export const formatVND = (number) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(number);
};
```
