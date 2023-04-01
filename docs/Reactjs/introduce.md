---
id: introduce
title: Giới thiệu về Reactjs
sidebar_position: 1
tags: [introduce, reactjs]
---

## Reactjs là gì?

-   ReactJS là một thư viện JavaScript nguồn mở phổ biến được sử dụng để xây dựng giao diện người dùng cho các ứng dụng web. Nó được phát triển bởi `Facebook` và được các nhà phát triển sử dụng rộng rãi để tạo các ứng dụng web nhanh, có thể mở rộng và năng động với trải nghiệm người dùng mượt mà.
-   ReactJS dựa trên khái niệm xây dựng các thành phần giao diện người dùng có thể tái sử dụng, có thể được kết hợp để tạo giao diện người dùng phức tạp. ReactJS sử dụng `DOM` ảo (Mô hình đối tượng tài liệu) để chỉ cập nhật các phần của giao diện người dùng đã thay đổi, giúp mang lại hiệu suất nhanh hơn và trải nghiệm người dùng tốt hơn.
-   Một trong những lợi ích chính của ReactJS là nó cho phép các nhà phát triển viết mã theo cách khai báo, giúp dễ hiểu và dễ bảo trì hơn. ReactJS cũng hỗ trợ kết xuất phía máy chủ, cho phép các trang web được hiển thị trên máy chủ trước khi được gửi đến trình duyệt, cải thiện thời gian tải trang và tối ưu hóa công cụ tìm kiếm.
-   ReactJS cũng hoạt động tốt với các công nghệ và thư viện khác, chẳng hạn như Redux để quản lý trạng thái và React Native để xây dựng ứng dụng di động. Điều này làm cho nó trở thành một công cụ linh hoạt để phát triển các ứng dụng web và ứng dụng di động.
-   Nhìn chung, ReactJS là một thư viện mạnh mẽ và phổ biến để xây dựng giao diện người dùng cho các ứng dụng web. Cách tiếp cận mô-đun và khai báo của nó để xây dựng các thành phần giao diện người dùng, kết hợp với tốc độ và hiệu suất của nó, làm cho nó trở thành một lựa chọn lý tưởng để phát triển web hiện đại.

## Ví dụ về Reactjs

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ReactJS Example</title>
        <script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            class App extends React.Component {
                render() {
                    return <h1>Hello World!</h1>;
                }
            }
            ReactDOM.render(<App />, document.getElementById('root'));
        </script>
    </body>
</html>
```

-   Trong ví dụ trên, chúng ta có một tệp HTML đơn giản với một thẻ `div` có `id` là `root`. Chúng ta sẽ sử dụng thẻ `div` này để hiển thị nội dung ReactJS.
-   Sau đó, chúng ta có một thẻ script với thuộc tính `type` là `text/babel`. Đây là một thẻ `script` đặc biệt, nó cho phép chúng ta viết mã JavaScript theo cách khai báo. `Babel` là một công cụ chuyển đổi mã JavaScript, nó sẽ chuyển đổi mã JavaScript theo cách khai báo thành mã JavaScript thông thường.
-   Trong thẻ `script` này, chúng ta có một lớp App kế thừa từ lớp `React.Component`. Lớp này có một phương thức `render()` trả về một thẻ `h1` với nội dung là `Hello World!`.
-   Cuối cùng, chúng ta sử dụng `ReactDOM.render()` để hiển thị nội dung của lớp `App` trong thẻ `div` có `id` là `root`.

## Tham khảo

**`Tham khảo thêm tại:`** [https://react.dev/](https://react.dev/)
