---
id: optimize-react-performance
title: Optimize React Performance
sidebar_position: 3
tags: [performance]
---

## Use Browser Performance Tools

> **Tải tại đây**: [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)

## Use React.Suspense and React.Lazy for Lazy Loading Components

```jsx
import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyComponent'));
function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading....</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}
```

## useMemo, useCallback trong React Hooks

> **Sử dụng khi cần thiết, không nên lạm dụng**
