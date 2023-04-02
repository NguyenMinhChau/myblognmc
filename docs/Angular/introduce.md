---
id: introduce
title: Giới thiệu về Angular
sidebar_position: 1
tags: [introduce, angular]
---

## Angular là gì?

-   Angular là một khung ứng dụng web nguồn mở phổ biến được phát triển bởi Google. Nó được sử dụng để xây dựng các ứng dụng web động và có thể mở rộng, tập trung vào các ứng dụng một trang (SPA).
-   Angular dựa trên kiến ​​trúc Model-View-Controller (MVC), phân tách ứng dụng thành ba lớp riêng biệt: mô hình, đại diện cho dữ liệu và logic nghiệp vụ, chế độ xem, hiển thị dữ liệu cho người dùng và bộ điều khiển, xử lý đầu vào của người dùng và cập nhật mô hình và chế độ xem khi cần.
-   Một trong những tính năng chính của Angular là liên kết dữ liệu hai chiều, cho phép đồng bộ hóa tự động giữa mô hình và chế độ xem. Điều này có nghĩa là mọi thay đổi được thực hiện đối với dữ liệu trong mô hình sẽ tự động được phản ánh trong dạng xem và ngược lại.
-   Angular cũng đi kèm với một tập hợp các thành phần giao diện người dùng dựng sẵn, chẳng hạn như các nút, biểu mẫu và menu điều hướng, có thể dễ dàng tùy chỉnh để phù hợp với nhu cầu của ứng dụng. Điều này làm cho quá trình phát triển nhanh hơn và hiệu quả hơn, vì các nhà phát triển có thể tập trung vào việc xây dựng các tính năng độc đáo của ứng dụng thay vì dành thời gian xây dựng các thành phần giao diện người dùng cơ bản.
-   Một tính năng quan trọng khác của Angular là hệ thống tiêm phụ thuộc, cho phép quản lý dễ dàng hơn các phụ thuộc giữa các thành phần trong ứng dụng. Điều này giúp dễ dàng bảo trì và cập nhật ứng dụng theo thời gian.
-   Nhìn chung, Angular là một framework mạnh mẽ và phổ biến để xây dựng các ứng dụng web tập trung vào SPA. Kiến trúc mạnh mẽ, liên kết dữ liệu hai chiều, các thành phần giao diện người dùng dựng sẵn và hệ thống tiêm phụ thuộc làm cho nó trở thành lựa chọn lý tưởng để xây dựng các ứng dụng web phức tạp và có thể mở rộng.

## Ví dụ về Angular

-   app/app.component.html

```html
<main>
    <h1>{{ title }}</h1>
</main>
```

-   app/app.component.ts

```typescript
import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'Hello Angular';
}
```

## Tham khảo

**`Tham khảo thêm tại:`** [https://angular.io/](https://angular.io/)
