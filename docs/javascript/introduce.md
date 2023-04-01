---
id: introduce
title: Giới thiệu về Javascript
sidebar_position: 1
tags: [introduce, javascript]
---

## Javascript là gì?

-   JavaScript là ngôn ngữ lập trình được sử dụng để tạo nội dung web động và tương tác. Nó là ngôn ngữ phía máy khách, nghĩa là nó chạy trên trình duyệt của người dùng chứ không phải máy chủ web, cho phép cập nhật và tương tác theo thời gian thực.
-   JavaScript được sử dụng để thêm tính tương tác vào các trang web, chẳng hạn như xác thực biểu mẫu, hoạt ảnh và xử lý sự kiện. Nó cũng có thể được sử dụng để tạo các ứng dụng web, chẳng hạn như trò chơi và các công cụ năng suất.
-   JavaScript hoạt động bằng cách điều khiển Mô hình Đối tượng Tài liệu (DOM), là một cấu trúc dạng cây đại diện cho nội dung và cấu trúc của một trang web. Bằng cách truy cập và sửa đổi DOM, JavaScript có thể thêm, xóa và sửa đổi các phần tử trên trang web, cũng như phản hồi các tương tác của người dùng như nhấp chuột và nhấn phím.
-   JavaScript không ngừng phát triển với các tính năng và khả năng mới được bổ sung theo thời gian. Điều này đã dẫn đến sự phát triển của các thư viện và khung, chẳng hạn như React và Angular, cung cấp mã và chức năng được xác định trước để giúp phát triển web nhanh hơn và hiệu quả hơn.
-   Nhìn chung, JavaScript là một công cụ cần thiết cho các nhà phát triển web vì nó cho phép tạo nội dung web động và tương tác thu hút người dùng và mang lại trải nghiệm người dùng tốt hơn.

## Ví dụ về Javascript

```jsx
<!DOCTYPE html>
<html>
    <body>
        <h1 id="demo">My First JavaScript</h1>
        <button
            type="button"
            onclick="document.getElementById('demo').style.backgroundColor = 'red'">
            Click Me!
        </button>
    </body>
</html>
```

## Các event trong DOM

| Event                    | Description                                                                   |
| ------------------------ | ----------------------------------------------------------------------------- |
| onclick                  | An HTML element has been clicked                                              |
| onmouseover              | The user moves the mouse over an HTML element                                 |
| onmouseout               | The user moves the mouse away from an HTML element                            |
| onkeydown                | The user pushes a keyboard key                                                |
| onload                   | The browser has finished loading the page                                     |
| **`Tham khảo thêm tại`** | [HTML DOM Events W3School](https://www.w3schools.com/jsref/dom_obj_event.asp) |
