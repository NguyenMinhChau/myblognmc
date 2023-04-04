---
id: wrapping-html-elements
title: Wrapping HTML Elements
sidebar_position: 13
tags: [component props, wrapping html]
---

> **`wrappinghtml.tsx`**

```tsx
import React from 'react';
// button
type WrappingHTMLProps = React.ComponentProps<'button'> & {
    variant: 'primary' | 'secondary';
    // có thể chỉ định children là string → children: string
    // Omit<React.ComponentProps<'button'>, 'children'> → bỏ qua thuộc tính children
    // Trong TypeScript, Omit<T, K> được sử dụng để tạo một phiên bản mới của kiểu T mà loại bỏ các thuộc tính có tên trong tập hợp K.
};
function WrappingHTML({ variant, children, ...rest }: WrappingHTMLProps) {
    return (
        <button className={`${variant}`} {...rest}>
            {children}
        </button>
    );
}

// input
type WrappingHTMLProps = React.ComponentProps<'input'>;
function WrappingHTML(props: WrappingHTMLProps) {
    return <input {...props} />;
}

export default WrappingHTML;
```

> **`usage.tsx`**

```tsx
import React from 'react';
import WrappingHTML from './wrappinghtml';

function User() {
    return (
        // button
        <WrappingHTML variant='primary' onClick={() => console.log('Cliked')}>
            <div>Profile</div>
        </WrappingHTML>
        // input
        <WrappingHTML type='text' alt='' placeholder=''/>
    );
}

export default User;
```
