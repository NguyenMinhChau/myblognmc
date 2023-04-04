---
id: props
title: Props
sidebar_position: 2
tags: [props]
---

## Basic props

```tsx
// src/App.tsx
import React from 'react';
import Greeting from './components/Greeting.tsx';
export default function App() {
    const infoUser = {
        email: 'john@gmail.com',
        phone: '02768282983',
    };
    const worksUser = [
        {
            id: 1,
            name: 'Work 1',
        },
        {
            id: 2,
            name: 'Work 2',
        },
    ];
    return <Greeting name='John' age={20} isLoggedIn={false} info={infoUser} works={worksUser} />;
}
// src/components/Greeting.tsx
type GreetingProps = {
    name: string;
    age: number;
    isLoggedIn: boolean;
    info: {
        email: string;
        phone: string;
    };
    works: {
        id: number;
        name: string;
    }[];
};
export default function Greeting(props: GreetingProps) {
    return (
        <p>
            {props.isLoggedIn
                ? `Hello {props.name}: {props.age}, {props.info.email}, {props.info.phone}`
                : 'Hello Guest'}
        </p>
    );
}
```

## Advance props

```ts
// src/App.js
import React from 'react';

export default function App() {
    return (
        <>
            <Status status='loading' />
            <HeaderText>Placeholder text</HeaderText>
            <Content>
                <HeaderText>Placeholder text</HeaderText>
            </Content>
        </>
    );
}
// src/components/Status.tsx
type StatusProps = {
    status: 'loading' | 'success' | 'error';
};
// src/components/HeaderText.tsx
type HeaderTextProps = {
    children: string;
};
// src/components/Content.tsx
type HeaderTextProps = {
    children: React.ReactNode;
};
```

> **Có thể dùng Optional: `?:` cho props**
