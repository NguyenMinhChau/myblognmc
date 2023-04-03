---
id: checkcurrentuser
title: Check Current User
sidebar_position: 4
tags: [react, check user]
---

> **Hàm xử lý cho JS, TS**

```jsx
useEffect(() => {
  if (currentUser) {
      dispatch(...)
  } else {
      // JS
      if (!currentUser && !!publicRouter.includes(window.location.pathname)) {
          history(routers.login);
      } else {
          publicRouter.includes(window.location.pathname);
      }
      // TS
      if (!currentUser) {
        const isPath = publicRouter
          .map((x) => window.location.pathname.includes(x.path))
          .filter((x) => x);
        if (isPath?.length <= 0) {
          history(routers.login);
        }
      } else {
        publicRouter
          .map((x) => window.location.pathname.includes(x.path))
  }
},[])
```

> **Public Router**

```js
export const publicRouter = [
    { path: routers.login, component: Login, layout: null },
    { path: routers.pageNotFound, component: PageNotFound, layout: null },
];
```

> **Private Router**

```js
export const privateRouter = [
    { path: routers.home, component: Home },
    { path: routers.dashboard, component: Dashboard },
];
```
