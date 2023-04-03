---
id: routermapcomponent
title: Router Map Component
sidebar_position: 5
tags: [react, router]
---

> **src/App.js**

```jsx
const Routers = currentUser ? privateRouter : publicRouter;
<Routes>
    {Routers.map((route, index) => {
        const Layout = route.layout
            ? route.layout
            : route.layout === null
            ? Fragment
            : DefaultLayout;
        const Page = route.component;
        return (
            <Route
                key={index}
                path={route.path}
                element={
                    <Layout>
                        <Page />
                    </Layout>
                }
            />
        );
    })}
</Routes>;
```
