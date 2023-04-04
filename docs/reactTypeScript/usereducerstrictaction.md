---
id: use-reducer-strict-action
title: useReducer with strict action
sidebar_position: 6
tags: [useReducer, state, strict]
---

```tsx
import React, { useReducer } from 'react';

const initialState = {
    count: 0;
};

type CountState = {
    count: number;
}

type CountUpdate = {
    type: 'increment' | 'decrement';
    payload: number;
}

type CountRest = {
    type: 'reset';
}

type CountActions = CountUpdate | CountReset;

const reducer = (state: CountState, actions: CountActions) => {
    switch (dispacth.type) {
        case 'increment':
            return {count: state.count + actions.payload};
        case 'decrement':
            return {count: state.count - actions.payload};
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}

export default function App() {
    return <>
        <div>Count: {state.count}</div>
        <button onClick={() => dispatch({type: 'increment', payload: 1})}>+</button>
        <button onClick={() => dispatch({type: 'decrement', payload: 1})}>-</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>
    </>
}
```
