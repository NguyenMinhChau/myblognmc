---
id: setupandusage
title: Setup và sử dụng
sidebar_position: 2
tags: [redux toolkit, setup, usage]
---

> Cài đặt thư viện

```bash
npm install @reduxjs/toolkit react-redux

```

> Tạo folder `src/app`
>
> Tạo reducer `src/app/reducer.js`

```js
import { createSlice } from '@reduxjs/toolkit';
export const myReducer = createSlice({
    name: mySlice,
    initialState: {},
    reducers: {
        incremented: (state) => {
            state.counter += 1;
            return state;
        },
        //...
    },
});
export const { incremented } = myReducer.actions;
export default myReducer.reducer;
```

> Tạo store `src/app/store.js`

```js
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: {
        mySlice: myReducer,
    },
});
```

> Tạo Provider file entrypoint `index.js`

```js
import store from './app/store';
import { Provider } from 'react-redux';

<Provider store={store}>
    <App />
</Provider>;
```

> Sử dụng trong các `components`

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { incremented } from './app/myReducer';

const counter = useSelector((state) => state.mySlice.key);
const dispatch = useDispatch();

const submitIncremented = () => {
    dispatch(incremented());
};
```
