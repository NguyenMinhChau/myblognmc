---
id: cssmodules
title: CSS Modules và Global
sidebar_position: 9
tags: [nextjs, css modules, global]
---

> Các file `css global` luôn được `import` vào file `src/app/layout.tsx`

```tsx
import './global.css';
import './color.css';
import './reset.css';
```

> File css từng component: `src/app/my-component/my-css.module.css`

```tsx
import styles from './my-css.module.css';
<h1 className={styles.cl_red}>Paragrap</h1>;
```
