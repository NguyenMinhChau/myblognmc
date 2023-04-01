---
id: introduce
title: Giới thiệu về Nextjs
sidebar_position: 1
tags: [introduce, nextjs]
---

## Nextjs là gì?

-   Next.js là một khung nguồn mở để xây dựng các ứng dụng React được kết xuất phía máy chủ (SSR). Nó được Zeit phát triển vào năm 2016 và đã trở nên phổ biến nhờ tính dễ sử dụng và khả năng cung cấp trải nghiệm liền mạch cho nhà phát triển.
-   Next.js dựa trên React, một thư viện JavaScript phổ biến để xây dựng giao diện người dùng và cung cấp một số tính năng giúp xây dựng các ứng dụng web phức tạp dễ dàng hơn. Một trong những tính năng chính của Next.js là hỗ trợ hiển thị phía máy chủ, cho phép các trang web được hiển thị trên máy chủ trước khi được gửi tới trình duyệt. Điều này cải thiện thời gian tải trang và tối ưu hóa công cụ tìm kiếm, đồng thời mang lại trải nghiệm người dùng tốt hơn.
-   Next.js cũng cung cấp hỗ trợ tạo trang web tĩnh, cho phép các trang web được tạo tại thời điểm xây dựng thay vì trong thời gian chạy. Điều này hữu ích cho các trang web không yêu cầu dữ liệu động và có thể được hiển thị trước, vì nó có thể cải thiện thời gian tải trang và giảm tải cho máy chủ.
-   Một tính năng quan trọng khác của Next.js là hỗ trợ tách mã tự động và định tuyến phía máy khách. Điều này cho phép chuyển đổi trang nhanh hơn và trải nghiệm người dùng tốt hơn vì chỉ mã cần thiết được tải cho mỗi trang.
-   Next.js cũng cung cấp một số tính năng khác, chẳng hạn như tự động biên dịch và tối ưu hóa nội dung, hỗ trợ các mô-đun CSS và các thành phần được tạo kiểu cũng như tích hợp với các thư viện tìm nạp dữ liệu phổ biến như Apollo và Axios.
-   Nhìn chung, Next.js là một framework mạnh mẽ và phổ biến để xây dựng các ứng dụng React được kết xuất phía máy chủ. Hỗ trợ kết xuất phía máy chủ, tạo trang tĩnh, tách mã tự động và các tính năng khác khiến nó trở thành lựa chọn lý tưởng để phát triển web hiện đại.

## Ví dụ về Nextjs

-   src/app/page.tsx

```tsx
'use client';

import styles from './page.module.css';
import React from 'react';
function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <div className={styles.info_personal}>
                    <span className={styles.hello_text}>Xin chào 👋,</span>
                    <h2 className={styles.intro_name_text}>
                        Tôi là <i>Nguyễn Minh Châu</i> - Xuất bản 2001 😂
                    </h2>
                </div>
            </div>
        </main>
    );
}

export default Home;
```

-   Chạy dự án

```bash
npm run dev
```

-   Truy cập [http://localhost:3000/](http://localhost:3000/)

-   src/app/hello/page.tsx `=>` [http://localhost:3000/hello](http://localhost:3000/hello)
-   src/app/hello/[slug]/page.tsx `=>` [http://localhost:3000/hello/123/](http://localhost:3000/hello/123/)

## Tham khảo

**`Tham khảo thêm tại:`** [https://nextjs.org/](https://nextjs.org/)
