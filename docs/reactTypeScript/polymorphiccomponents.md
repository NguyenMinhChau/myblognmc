---
id: polymorphic-components
title: Polymorphic Components (Thành phần đa hình)
sidebar_position: 15
tags: [polymorphic component]
---

> **Component `text.tsx`**

```tsx
import React from 'react';

type TextProps<T extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg';
    weight?: 'normal' | 'bold' | 'bolder' | 'lighter';
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
    as?: T;
};

type TextAttributeAs<T extends React.ElementType> = TextProps<T> &
    Omit<React.ComponentProps<T>, keyof TextProps<T>>;

function Text<T extends React.ElementType = 'div'>({
    size,
    weight,
    color,
    children,
    as,
}: TextAttributeAs<T>) {
    const Component = as || 'div';
    return <Component className={`class-${size}-${color}`}>{children}</Component>;
}

export default Text;
```

> **Component `App.tsx`**

```tsx
import React from 'react';
import Text from './text';

function User() {
    return (
        <>
            <Text as='h1' size='md' color='primary'>
                Header
            </Text>
            <Text as='h2' size='lg' color='secondary'>
                Content
            </Text>
            <Text as='label' htmlFor='inputName'>
                Label
            </Text>
        </>
    );
}

export default User;
```
