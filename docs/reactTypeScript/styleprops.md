---
id: styleprops
title: Style Props
sidebar_position: 4
tags: [react typescript, style props]
---

```tsx
// src/App.tsx
import React from 'react';
export default function App() {
    return <Container styles={{ display: 'flex' }} />;
}
// src/components/Container.tsx
type ContainerProps = {
    styles?: React.CSSProperties;
};
export default function Container(props: ContainerProps) {
    return <div style={props.styles}></div>;
}
```
