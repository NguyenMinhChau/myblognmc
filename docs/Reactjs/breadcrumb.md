---
id: breadcrumb
title: Breadcrumb
sidebar_position: 15
tags: [react, breadcrumb]
---

> **Component Breadcrumb with material.ui**

```jsx
<div role='presentation' onClick={handleClick}>
    <Breadcrumbs
        aria-label='breadcrumb'
        separator={titleList && <NavigateNextIcon fontSize='small' />}>
        <Link to={routers.dashboard} className={`${cx('breadcrumb-link')} cl-primary hv-primary`}>
            <Icons.BreadcrumbHomeIcon className='mr8' />
            Home
        </Link>
        {titleList &&
            titleList.map((item, index) => {
                const pathBefore = linkList.slice(0, index + 1);
                return (
                    <Link
                        key={index}
                        to={`/${pathBefore.join('/')}`}
                        className={`${cx('breadcrumb-link')}`}>
                        {item}
                    </Link>
                );
            })}
    </Breadcrumbs>
</div>
```

> **Cách sử dụng**

```jsx
const location = useLocation();
const { pathname } = location;
const path = pathname.split('/').filter(Boolean);
<Breadcrumb
    titleList={
        path.length > 0
            ? path.map((item) => {
                  return item.replace(/-/g, ' ');
              })
            : ''
    }
    linkList={
        path.length > 0
            ? path.map((item) => {
                  return item;
              })
            : '/'
    }
/>;
```
