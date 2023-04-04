---
id: usecontexthook
title: useContext Hook
sidebar_position: 7
tags: [react typescript, useContext]
---

## Basic

> **`theme.ts`**

```ts
export const theme = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};
```

> **`themeProvider.tsx`**

```tsx
import React, { createContext } from 'react';
import {theme} from './theme'

export ThemeContext = createContext(theme);

type ThemeProviderProps = {
    children: React.ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}
```

> **`Box.tsx`**

```tsx
import React, { useContext } from 'react';
import { ThemeContext } from './themeProvider';

const Box = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ background: theme.dark.background, color: theme.dark.foreground }}>
            Hello World
        </div>
    );
};
```

> **`App.tsx`**

```tsx
import React from 'react';
import { ThemeProvider } from './themeProvider';
import { Box } from './Box';

const App = () => {
    return (
        <ThemeProvider>
            <Box />
        </ThemeProvider>
    );
};
```

## Feature value

> **`userProvider.tsx`**

```tsx
import React, { createContext, useState } from 'react';

type UserState = {
    name: string;
    email: string;
}
type UserContextType = {
    user: UserState | null,
    setUser: React.Dispatch<React.SetStateAction<UserState | null>>;
}

export const UserContext = createContext({} as UserContextType);

type UserProviderProps = {
    children: React.ReactNode
}

export default function UserProvider = ({children}: UserProviderProps) => {
    const [user, setUser] = useState<UserState | null>(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
    )
}
```

> **`infoUser.tsx`**

```tsx
import React, { useContext } from 'react';
import { UserContext } from './userProvider';

const InfoUser = () => {
    const context = useContext(UserContext);
    const handleLogin = () => {
        context.setUser({
            name: 'John',
            email: 'john@gmail.com',
        });
    };
    const handleLogout = () => {
        context.setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name is {context.user?.name}</p>
            <p>User email is {context.user?.email}</p>
        </div>
    );
};
```

> **`App.tsx`**

```tsx
import React from 'react';
import { UserProvider } from './userProvider';

const App = () => {
    return (
        <UserProvider>
            <InfoUser />
        </UserProvider>
    );
};
```
