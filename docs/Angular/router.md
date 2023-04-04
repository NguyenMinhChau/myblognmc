---
id: router
title: Router
sidebar_position: 10
tags: [router]
---

## Tạo file định nghĩa các router

> **`routers/app-routing.module.ts`**

```ts
import { Routes } from '@angular/router';
// import components
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
];

export default routes;
```

## Cấu hình router

> **`app.module.ts`**

```ts
import {RouterModule} from '@angular/router';
import routes from '../routers/app-routing.module';

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
```

## Tạo component router-outlet định nghĩa navigation

> **`router-outlet.component.html`**

```html
<nav>
    <a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a>
    <a routerLink="/about" routerLinkActive="active" ariaCurrentWhenActive="page">About</a>
    <a routerLink="/contact" routerLinkActive="active" ariaCurrentWhenActive="page">Contact</a>
</nav>
```

## Sử dụng

> **`app.component.html`**

```html
<main>
    <app-router-outlet></app-router-outlet>
    <!-- HEADER -->
    <!-- Hiển thị component router -->
    <router-outlet></router-outlet>
    <!-- FOOTER -->
</main>
```

## Tham khảo

> **Tham khảo thêm tại:** [https://angular.io/guide/router](https://angular.io/guide/router)
