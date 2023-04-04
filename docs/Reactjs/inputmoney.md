---
id: input-money
title: Input Money
sidebar_position: 10
tags: [input money]
---

> **Hàm xử lý**

```js
export const autoFormatNumberInputChange = (number) => {
    return number
        ?.toString()
        ?.replace(/\D/g, '')
        ?.split('')
        ?.reverse()
        ?.join('')
        ?.replace(/(\d{3})(?=\d)/g, '$1.')
        ?.split('')
        ?.reverse()
        ?.join('');
};
export const convertNumberMultiple = (number, multipleNumber) => {
    const numberConvert = parseInt(number?.toString()?.replace(/\D/g, ''), 10);
    const multiplied = numberConvert * multipleNumber;
    //console.log(autoFormatNumberInputChange(multiplied)); //x.xxx
    return multiplied;
};
```
