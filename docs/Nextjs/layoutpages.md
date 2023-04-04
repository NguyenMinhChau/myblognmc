---
id: layout-pages
title: Layout pages
sidebar_position: 8
tags: [layout pages]
---

> `src/app/layout.tsx` -> Đây là layout chung cho tất cả các trang (chỉ có children thay đổi)

```tsx
export const metadata = {
    title: 'Home Page',
};
export default function RootLayout() {
    return (
        <html lang='en'>
            <body>
                <div className='container'>
                    {/* HEADER */}
                    <div className='content'>
                        {/* SIDEBAR */}
                        <div className='main'>{children}</div>
                    </div>
                    {/* FOOTER */}
                </div>
            </body>
        </html>
    );
}
```

> `src/app/about/layout.tsx` -> có thể custom layout và change title web cho trang about

```tsx
export const metadata = {
    title: 'About Page',
};

export default function AboutLayout() {
    return (
        <>
            {/* CUSTOM */}
            <section>{children}</section>
            {/* CUSTOM */}
        </>
    );
}
```

> `src/app/favicon.ico` -> Thay thế ảnh khác và đặt tên favicon.ico (dù nó là file .png, .jpg, ...)
