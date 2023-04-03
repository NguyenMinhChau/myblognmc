---
id: introducerecoilinreact
title: Giới thiệu Recoil trong React
sidebar_position: 16
tags: [react, recoil]
---

## Recoil là gì?

Recoil là một thư viện state management được phát triển bởi Facebook. Nó được thiết kế để thay thế cho Redux và MobX. Nó được thiết kế để giải quyết các vấn đề về hiệu suất và đơn giản hóa các ứng dụng React.

## Các tính năng của Recoil

-   **Đơn giản**: Recoil được thiết kế để giải quyết các vấn đề về hiệu suất và đơn giản hóa các ứng dụng React.

-   **Hiệu suất**: Recoil được thiết kế để giải quyết các vấn đề về hiệu suất và đơn giản hóa các ứng dụng React.

-   **Tích hợp**: Recoil được thiết kế để giải quyết các vấn đề về hiệu suất và đơn giản hóa các ứng dụng React.

## Thành phần chính của Recoild

> **`RecoilRooot`**
>
> **`atome`**: xem như initialState
>
> **`selector`**: Các hàm xử lý

## Cài đặt Recoil

```bash
npm install recoil
```

## Ví dụ về các thành phần

### `RecoilRoot`

```jsx
// src/index.js
ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>,
document.getElementById('root')
```

### `atom`

```jsx
export const cartState = atom({
    key: 'cart',
    default: [
        {
            id: 1,
            name: 'Iphone 12',
            price: 20000000,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Iphone 12 Pro',
            price: 30000000,
            quantity: 1,
        },
    ],
});
```

### `selector`

```jsx
export const cartTotal = seletor({
    key: 'cartTotal',
    get: ({ get }) => {
        const cars = get(cartState);
        return cars.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    },
});
```

> **Lấy giá trị `cartTotal` trong component `CartInfo`**

```jsx
function CartInfo(props) {
    const total = useRecoilValue(cartTotal);
}
```

## Tham khảo

> **Trang chủ:** [RecoilJS](https://recoiljs.org/)
>
> **Slide easy-frontend:** [Easy Frontend](https://drive.google.com/file/d/1VxeAVLHnC16Qh0FGy_-YP9-SFEkLih_X/view)
