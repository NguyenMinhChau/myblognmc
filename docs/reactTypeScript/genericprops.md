---
id: generic-props
title: Generic Props
sidebar_position: 10
tags: [generic props]
---

> **`generic.tsx`**

```tsx
import React from 'react';

interface Props<T> {
    items: T[];
    onClick: (item: T) => void;
}

export const Generic = <T extends {}>({ items, onClick }: Props<T>) => {
    return (
        <div>
            {items.map((item: any, index) => (
                <div key={index} onClick={() => onClick(item)}>
                    {item}
                </div>
            ))}
        </div>
    );
};
```

-   `<T extends string | number | ...>`
-   `<T extends {id: number}>`
-   `...`

> **`list.tsx`**

```tsx
import React from 'react';
import { Generic } from './generic';
export const List = () => {
    const itemsString = ['a', 'b', 'c'];
    const itemsNumber = [1, 2, 3];
    const itemsObject = [
        {
            id: 1,
            name: 'a',
        },
        {
            id: 2,
            name: 'b',
        },
        {
            id: 3,
            name: 'c',
        },
    ];

    return (
        <>
            <Generic
                items={items}
                onClick={(item) => {
                    console.log(item);
                }}
            />
            <Generic
                items={itemsNumber}
                onClick={(item) => {
                    console.log(item);
                }}
            />
            <Generic
                items={itemsObject}
                onClick={(item) => {
                    console.log(item);
                }}
            />
        </>
    );
};
```
