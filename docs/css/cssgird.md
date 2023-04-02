---
id: cssgird
title: CSS Gird
sidebar_position: 2
tags: [css, css gird]
---

> **Giả sử ở đây chúng ta chia 3 cột**

## grid-template-columns

```css
.col {
    display: grid;
    grid-template-columns: 50px 20% auto;
}
```

> Chia kích thước từng cột trong `#grid-container`, chia theo `px, %, auto, fr, minmax(min,max)`

## grid-gap

```css
.col {
    display: grid;
    grid-template-columns: 50px 20% auto;
    grid-gap: 20px 10px;
}
```

> Khoảng cách giữ các `dòng, cột` trong `#grid-container`

## grid-row-gap

```css
.col {
    display: grid;
    grid-template-columns: 50px 20% auto;
    grid-gap: 20px 10px;
    grid-row-gap: 20px;
}
```

> Khoảng cách giữ các `dòng` trong `#grid-container`

## grid-column-gap

```css
.col {
    display: grid;
    grid-template-columns: 50px 20% auto;
    grid-gap: 20px 10px;
    grid-column-gap: 20px;
}
```

> Khoảng cách giữ các `cột` trong `#grid-container`

## grid-row

```css
.col {
    display: grid;
    grid-template-columns: 50px 20% auto;
    grid-gap: 20px 10px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-row: 1 / span 3; /* x / span y */
}
```

> `x:` chỉ thị dòng mà `#grid-item` đứng, mỗi dòng có chiều cao = chiều cao `#grid-item` hiện tại
>
> `y:` chiều cao mà `#grid-item` chiếm (chiều cao mỗi `#grid-item * y`)

## grid-row-start

```css
.col {
    display: grid;
    grid-template-columns: 50px 20% auto;
    grid-gap: 20px 10px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-row-start: auto; /* auto || number-row-line */
}
```

> `auto:` tự động tính toán vị trí dòng
>
> `row-line:` chỉ thị dòng mà `#grid-item` đứng, mỗi dòng có chiều cao = chiều cao `#grid-item` hiện tại

## grid-row-end

```css
.col {
    display: grid;
    grid-template-columns: 50px 20% auto;
    grid-gap: 20px 10px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-row-end: auto; /* auto || number-row-line || span n */
}
```

> `auto:` tự động tính toán vị trí dòng
>
> `row-line:` chỉ thị dòng mà `#grid-item` đứng, mỗi dòng có chiều cao = chiều cao `#grid-item` hiện tại
>
> `span n:` chiều cao mà `#grid-item` chiếm (chiều cao mỗi `#grid-item * n`)

## grid-area

```css
.col {
    display: grid;
    grid-template-columns: 50px 20% auto;
    grid-gap: 20px 10px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-area: 1 / 1 / span 3 / span 3; /* x / x' / span y / span y' */
}
```

> `x:` chỉ thị dòng mà `#grid-item` đứng, mỗi dòng có chiều cao = chiều cao `#grid-item` hiện tại
>
> `x'`: chỉ thị cột mà `#grid-item` đứng, mỗi cột có chiều rộng = chiều rộng `#grid-item` hiện tại
>
> `y:` chiều cao mà `#grid-item` chiếm (chiều cao mỗi `#grid-item * y`)
>
> `y'`: chiều rộng mà `#grid-item` chiếm (chiều rộng mỗi `#grid-item * y'`)
