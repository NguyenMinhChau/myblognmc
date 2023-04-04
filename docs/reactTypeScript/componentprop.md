---
id: component-prop
title: Component Prop
sidebar_position: 9
tags: [component prop]
---

> **`login.tsx`**

```tsx
import React from 'react';
function Login() {
    return <p>Login</p>;
}
export default Login;
```

> **`component.tsx`**

```tsx
import React from 'react';
export type ComponentProps = {
    name: string;
};
function Component({ name }: ComponentProps) {
    return <div>Component is {name}</div>;
}
export default Component;
```

> **`checkLogin.tsx`**

```tsx
import React from 'react';
import Login from './login';
import { ComponentProps } from './component';
type CheckLoginProps = {
    isLoggedIn: boolean;
    component: React.ComponentType<ComponentProps>;
};
function CheckLogin({ isLoggedIn, component: Component }: CheckLoginProps) {
    if (isLoggedIn) {
        return <Component name='John' />;
    } else {
        return <Login />;
    }
}
export default CheckLogin;
```
