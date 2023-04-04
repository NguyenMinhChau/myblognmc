---
id: use-debounce-hook
title: Use Debounce Hook
sidebar_position: 8
tags: [debounce]
---

> **Hàm xử lý**

```jsx
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounceValue;
}
export default useDebounce;
```

> **Sử dụng**

```jsx
const [value, setValue] = useState('');
const [valueDebounce, setValueDebounce] = useState('');
const debounceValue = useDebounce(value, 500);
useEffect(() => {
    setValueDebounce(debounceValue);
}, [debounceValue]);
```
