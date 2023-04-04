---
id: usestatefeaturevalue
title: useState Feature Value
sidebar_position: 5
tags: [react typescript, useState feature value]
---

```tsx
// src/conponents/Authen.tsx
import React, { useState } from 'react';

type AuthenProps = {
    name: string;
    email: string;
};

export default function Authen() {
    // 1. Chỉ định user có thể là null và có thể là AuthenProps trong tương lai: useState Feature Value
    const [user, setUser] = useState<AuthenProps | null>(null);
    // 2. Khẳng định user là AuthenProps: useState Type Assertion
    const [user, setUser] = useState<AuthenProps>({} as AuthenProps);
    const handleLogin = () => {
        setUser({
            name: 'John',
            email: 'john@gmail.com'
    };
    const handleLogout = () => {
        setUser(null);
    };
    return <>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout}</button>
        {/* 1. useState Feature Value */}
        <p>User name is {user?.name}</p>
        <p>User email is {user?.email}</p>
        {/* 2. useState Type Assertion */}
        <p>User name is {user.name}</p>
        <p>User email is {user.email}</p>
    </>;
}
```
