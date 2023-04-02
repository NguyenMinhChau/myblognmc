---
id: setupnextjsts
title: Setup, Nextjs + TypeScript và Deploy
sidebar_position: 3
tags: [nextjs, typescript, deploy]
---

## Khởi tạo dự án

```bash
npx create-next-app@latest --typescript
```

> **Làm theo các hướng dẫn**

## Deploy với Vercel

> Tạo `repo` mới đưa code lên
>
> Import `repo` with `Vercel` → Làm theo hướng dẫn → `Deploy`
>
> Tự động `build + deploy` code mới khi `repo` git thay đổi

## Các scripts trong package.json

> `npm run dev`: Run project in develop process
>
> `npm start`: Run project in production
>
> `npm run lint`: Check ESlint in project in develop process
>
> `npm run build`: Build project for production

## Dùng Nextjs cho Frontend hay cả Backend?

> `NextJS` cơ bản được host trên `NodeJS` -> Làm `Backend` được (file src/app/api kết hợp `NodeJS + ExpressJS`) -> nhưng **KHÔNG NÊN**.
>
> **Nên tách biệt frontend và backend**

## Check client/server

```tsx
if (typeof window !== 'undefined') {
    // PHÍA CLIENT
    // do something on client side
}
```

## Tham khảo

> **Tham khảo thêm tại:** [https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)
>
> **Công cụ cần thiết:** [https://drive.google.com/file/d/10w5WxSFdiQGHkibwyYEggwkcoQDGbcFK/view](https://drive.google.com/file/d/10w5WxSFdiQGHkibwyYEggwkcoQDGbcFK/view)
