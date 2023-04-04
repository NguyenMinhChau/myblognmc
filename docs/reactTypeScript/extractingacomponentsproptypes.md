---
id: extracting-a-components-prop-types
title: Extracting a Components PropTypes
sidebar_position: 14
tags: [component props, extracting]
---

> **`extracting.tsx`**

```tsx
import React from 'react';

type ExtractingProps = {
    name: string;
    email: string;
};

function Extracting(props: ExtractingProps) {
    return <></>;
}

export default Extracting;
```

> **`usage.tsx`**

```tsx
import React from 'react';
import Extracting from './extracting';

function User(props: React.ComponentProps<typeof Extracting>) {
    return <p>{props.name}</p>;
}

export default User;
```
