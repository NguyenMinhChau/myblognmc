---
id: template-literals-and-exclude
title: Template Literals and Exclude
sidebar_position: 12
tags: [template literals, exclude]
---

> **`templateAndExclude.tsx`**

```tsx
import React from 'react';

type HorizontalType = 'left' | 'center' | 'right';
type VerticalType = 'top' | 'center' | 'bottom';

type TemplateAndExcludeProps = {
    position: Exclude<`${HorizontalType}-${VerticalType}`, 'center-center'> | 'center';
};

// position: `${HorizontalType}-${VerticalType}`; => "left-center" | "left-top" | "left-bottom" | "center-center" | "center-top" | "center-bottom" | "right-center" | "right-top" | "right-bottom"

// position: Exclude<`${HorizontalType}-${VerticalType}`, 'center-center'> | 'center'; => => "left-center" | "left-top" | "left-bottom" | "center" | "center-top" | "center-bottom" | "right-center" | "right-top" | "right-bottom"

function TemplateAndExclude({ position }: TemplateAndExcludeProps) {
    return <p>TemplateAndExclude is {position}</p>;
}

export default TemplateAndExclude;
```

> **`usage.tsx`**

```tsx
import React from 'react';
import TemplateAndExclude from './templateAndExclude';

function User() {
    return <TemplateAndExclude position='center' />;
}

export default User;
```
