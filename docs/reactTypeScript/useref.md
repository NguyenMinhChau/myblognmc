---
id: useref
title: useRef
sidebar_position: 8
tags: [react typescript, useref, hook]
---

## useRef for DOM element

```tsx
import React, { useRef, useEffect } from 'react';

function InputCP() {
    const inputRef = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return <input type='text' alt='ref' placeholder='ref' ref={inputRef} />;
}

export default InputCP;
```

## useRef for variable

```tsx
import React, { useRef, useEffect, useState } from 'react';

function Info() {
    const [timer, setTimer] = useState(0);
    const refTime = useRef<number>();
    const stopTimer = () => {
        window.clearInterval(refTime.current);
    };
    useEffect(() => {
        refTime.current = window.setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            stopTimer();
        };
    }, []);
    return (
        <>
            <p>{timer}</p>
            <button onClick={stopTimer}>Click me</button>
        </>
    );
}

export default Info;
```
