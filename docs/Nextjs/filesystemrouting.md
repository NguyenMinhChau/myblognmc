---
id: filesystemrouting
title: File System Routing
sidebar_position: 4
tags: [nextjs, routing, file system]
---

| src/pages Directory   | src/app Directory    | Router       |
| --------------------- | -------------------- | ------------ |
| index.tsx             | page.tsx             | /            |
| about.tsx             | about/page.tsx       | /about       |
| blog/[slug]/index.tsx | blog/[slug]/page.tsx | /blog/post-1 |

## Ví dụ

```js
// src/pages
. src/pages/index.tsx // domain.com/
. src/pages/about.tsx // domain.com/about
. src/pages/about/[aboutId]/index.tsx // domain.com/about/:id
. src/page/about/[aboutId]/slug/[slugId]/index.tsx // domain.com/about/:id/slug/:slug
. src/page/about/[...aboutId]/index.tsx // Dùng cho PAGE NOT FOUND

```

```js
// src/app
. src/app/page.tsx // domain.com/
. src/app/page/page.tsx // domain.com/page
  . src/app/page/member/page.tsx // domain.com/page/member
. src/app/about/page.tsx // domain.com/about
  . src/app/about/[id]/page.tsx // domain.com/about/:id
  . src/app/about/[slug]/page.tsx // domain.com/about/:slug
  . src/app/about/[id]/slug/[slug] // domain.com/:id/slug/[slug]
  . src/app/about/[...id]/page.tsx // DÙNG CHO PAGE NOT FOUND
// [id], [slug], [...id] là tên folder
```

## Tham khảo

> **Tham khảo thêm tại:** [https://beta.nextjs.org/docs/upgrade-guide#step-4-migrating-pages](https://beta.nextjs.org/docs/upgrade-guide#step-4-migrating-pages)
