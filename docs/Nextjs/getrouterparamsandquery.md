---
id: getrouterparamsandquery
title: Get Router Params and Query
sidebar_position: 5
tags: [nextjs, routing, get router params, get router query]
---

## Get Router Params

> **src/app/about/[...id]/page.tsx**

```js
function AboutItem({ params }: { params: { id: string[] } }) {
    console.log(params);
    return <div>AboutItem [...ID]</div>;
}
```

> **src/app/about/[id]/page.tsx**

```js
function AboutItem({ params }: { params: { id: string } }) {
    console.log(params);
    return <div>AboutItem [...ID]</div>;
}
```

> **HOẶC**

```js
import { useRouter } from 'next/navigation';
const router = useRouter();
console.log(router);
```

## Get patchname and router query

> **`http://localhost:3000/about/1?ref=social&type=vercel`**

```js
import { usePathname, useSearchParams } from 'next/navigation';
const pathname = usePathname();
console.log(pathname); // about/1
const searchParams = useSearchParams();
const ref = searchParams.get('ref');
console.log(ref); // social
const type = searchParams.get('type');
console.log(type); // vercel
```
