---
id: eventprops
title: Event props
sidebar_position: 3
tags: [react typescript, event props]
---

## Button event

```tsx
// src/App.tsx
import React from 'react';
export default function App() {
    return (
        <Button
            handleClick={(e, id) => {
                console.log(e, id);
            }}
        />
    );
}
// src/components/Button.tsx
type ButtonProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
export default function Button(props: ButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
    };
    return (
        <>
            <button onClick={(e) => props.handleClick(e, id)}>Click me</button>
            {/* HOẶC */}
            <button onClick={handleClick}>Click me</button>
        </>
    );
}
```

## Input event

```tsx
// src/App.tsx
import React from 'react';
export default function App() {
    return (
        <Input
            handleChange={(e) => {
                console.log(e);
            }}
        />
    );
}
// src/components/Input.tsx
type InputProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Input(props: InputProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };
    return (
        <>
            <input type='text' onChange={props.handleChange} />
            {/* HOẶC */}
            <input type='text' onChange={handleInputChange} />
        </>
    );
}
```
