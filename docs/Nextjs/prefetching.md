---
id: prefetching
title: Prefetching
sidebar_position: 6
tags: [nextjs, prefetching]
---

> Chỉ tự động tải trước tài nguyên những trang nằm trong thẻ `<Link href='...'></Link>` và có trong viewport (màn hình trình duyệt mà người dùng nhìn thấy).
>
> Chỉ hoạt động trong môi trường production.
>
> Nó sẽ bị tắt nếu mạng chậm/yếu.
>
> Prefetching trong thẻ Link của Next.js được sử dụng để tải trước (preload) các tài nguyên liên quan đến trang sẽ được truy cập. Điều này giúp cải thiện trải nghiệm người dùng bằng cách giảm thời gian đáp ứng khi người dùng chuyển đến một trang mới.
>
> Khi người dùng chuyển đến trang hiện tại, Next.js sẽ tự động tải trước tài nguyên (chẳng hạn như các tệp CSS, JS, hình ảnh) cần thiết cho trang mới sẽ được truy cập. Khi người dùng chuyển đến trang đó, các tài nguyên này đã được tải trước và có thể được sử dụng để hiển thị trang một cách nhanh chóng hơn.
>
> Lưu ý rằng prefetch chỉ nên được sử dụng cho các trang chính trong ứng dụng của bạn và không nên sử dụng cho các trang ít được truy cập hoặc không cần thiết. Việc tải trước quá nhiều tài nguyên có thể làm tăng thời gian tải và làm giảm hiệu suất của trang.
