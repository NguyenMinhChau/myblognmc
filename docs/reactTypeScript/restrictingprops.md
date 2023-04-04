---
id: restrictingprops
title: Restricting Props (Hạn chế props)
sidebar_position: 11
tags: [react typescript, restricting props]
---

> **`restricting.tsx`**

```tsx
import React from 'react';

type RandomValueType = {
    value: number;
};

type RadomPositiveType = RandomValueType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
};

type RandomNegativeType = RandomValueType & {
    isPositive?: never;
    isNegative: boolean;
    isZero?: never;
};

type RandomZeroType = RandomValueType & {
    isPositive?: never;
    isNegative?: never;
    isZero: boolean;
};

type RandomProps = RadomPositiveType | RandomNegativeType | RandomZeroType;
function Restricting({ value, isPositive, isNegative, isZero }: RandomProps) {
    return (
        <>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
        </>
    );
}
export default Restricting;
```

> **`usage.tsx`**

```tsx
import React from 'react';
import Restricting from './restricting';

function Usage() {
    return (
        <>
            <Restricting value={10} isPositive />
        </>
    );
}
export default Usage;
```
