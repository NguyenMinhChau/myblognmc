---
id: usecontext
title: Quản lý state bằng useConext
sidebar_position: 17
tags: [react, useContext, state]
---

> **`src/app/createContext.js`**

```js
import React from 'react';

const AppContext = React.createContext();

export default AppContext;
```

> **`src/app/actions.js`**

```js
export const SET_USER = 'SET_USER';
```

> **`src/app/reducer.js`**

```js
import { SET_USER } from './actions';

export const initialState = {
    user: null,
};

export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload,
    };
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
```

> **`src/app/provider.js`**

```js
import React, { useReducer } from 'react';
import AppContext from './createContext';
import reducer, { initialState } from './reducer';

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
```

> **`src/index.js`**

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './app/provider';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
```

> **`src/utils/hooks/customHook.js`**

```js
import { useContext } from 'react';
import AppContext from '../../app/createContext';

export const useAppContext = () => {
    const { state, dispatch } = useContext(AppContext);
    return { state, dispatch };
};
```
