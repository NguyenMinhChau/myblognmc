---
id: introduce
title: Giới thiệu về Redux Toolkit
sidebar_position: 1
tags: [introduce, redux-toolkit, reactjs]
---

## Redux Tookit là gì?

-   Redux Toolkit là gói chính thức của Redux, một thư viện quản lý trạng thái phổ biến cho các ứng dụng JavaScript. Nó cung cấp một tập hợp các tiện ích giúp đơn giản hóa quá trình xây dựng và quản lý các ứng dụng Redux.
-   Bộ công cụ Redux bao gồm một số tính năng giúp viết và bảo trì mã Redux dễ dàng hơn, bao gồm:

    -   API được đơn giản hóa để tạo cửa hàng Redux, giảm số lượng mã soạn sẵn cần thiết để thiết lập cửa hàng.
    -   Một tập hợp các bộ giảm tốc Redux tiêu chuẩn, chẳng hạn như `createSlice`, tạo ra các hàm bộ giảm tốc và trình tạo hành động dựa trên một bộ quy tắc đã xác định.
    -   Hỗ trợ tích hợp cho tính không thay đổi và `Immer`, một thư viện giúp viết mã không thay đổi dễ dàng hơn.
    -   Tích hợp với tiện ích mở rộng `Redux DevTools`, cung cấp công cụ sửa lỗi mạnh mẽ cho các ứng dụng Redux.

-   Nhìn chung, Redux Toolkit là một gói mạnh mẽ và phổ biến để đơn giản hóa quá trình xây dựng và quản lý các ứng dụng Redux. API được đơn giản hóa, bộ giảm tốc tiêu chuẩn, hỗ trợ tính bất biến và tích hợp với tiện ích mở rộng Redux DevTools khiến nó trở thành lựa chọn lý tưởng để phát triển web hiện đại.

## Cài đặt Redux Toolkit

-   Để cài đặt Redux Toolkit, chúng ta sử dụng câu lệnh sau:

```bash
npm install @reduxjs/toolkit
```

-   Sau khi cài đặt, chúng ta có thể sử dụng các API được cung cấp bởi Redux Toolkit để xây dựng ứng dụng Redux.

## Các API được cung cấp bởi Redux Toolkit

-   Redux Toolkit cung cấp một số API để xây dựng ứng dụng Redux, bao gồm:

    -   `configureStore`: API này được sử dụng để tạo cửa hàng Redux. Nó có thể nhận vào một số tham số như `reducer`, `middleware`, `enhancer`, `preloadedState` và `reducer` để tạo cửa hàng Redux.
    -   `createReducer`: API này được sử dụng để tạo bộ giảm tốc Redux. Nó có thể nhận vào một số tham số như `initialState`, `builderCallback` và `reducers` để tạo bộ giảm tốc Redux.
    -   `createAction`: API này được sử dụng để tạo hành động Redux. Nó có thể nhận vào một số tham số như `type`, `payloadCreator` và `prepareCallback` để tạo hành động Redux.
    -   `createSlice`: API này được sử dụng để tạo bộ giảm tốc Redux và trình tạo hành động. Nó có thể nhận vào một số tham số như `name`, `initialState`, `reducers` và `extraReducers` để tạo bộ giảm tốc Redux và trình tạo hành động.
    -   `createAsyncThunk`: API này được sử dụng để tạo bộ giảm tốc Redux và trình tạo hành động. Nó có thể nhận vào một số tham số như `typePrefix`, `payloadCreator`, `extraReducers` và `prepareCallback` để tạo bộ giảm tốc Redux và trình tạo hành động.
    -   `createEntityAdapter`: API này được sử dụng để tạo bộ giảm tốc Redux. Nó có thể nhận vào một số tham số như `options` để tạo bộ giảm tốc Redux.
    -   `createSelector`: API này được sử dụng để lấy các giá trị trong state

## Tạo cửa hàng Redux

```js
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        // ...
    },
});
```

## Tạo reducer

```js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

## Tham khảo

**`Tham khảo thêm tại:`** [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
