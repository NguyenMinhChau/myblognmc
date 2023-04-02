---
id: introduce
title: Giới thiệu về React Native
sidebar_position: 1
tags: [introduce, react native]
---

## React Native là gì?

-   React Native là một khung nguồn mở để xây dựng các ứng dụng di động bằng JavaScript và thư viện ReactJS. Nó được `Facebook` phát triển và cung cấp cách xây dựng ứng dụng di động gốc cho `iOS, Android` và các nền tảng khác bằng cách sử dụng một cơ sở mã duy nhất.
-   React Native hoạt động bằng cách sử dụng một tập hợp các thành phần giao diện người dùng dựng sẵn dành riêng cho từng nền tảng, chẳng hạn như các nút, kiểu nhập văn bản và chế độ xem cuộn để tạo giao diện người dùng. Các thành phần này được viết bằng JavaScript và được hiển thị tự nhiên trên thiết bị, mang lại trải nghiệm người dùng nhanh và nhạy.
-   Một trong những lợi ích chính của React Native là nó cho phép sử dụng lại mã giữa các nền tảng khác nhau, giảm thời gian và chi phí phát triển. Các nhà phát triển có thể viết mã một lần và sử dụng nó trên cả nền tảng iOS và Android, cũng như trên web.
-   React Native cũng cung cấp tính năng tải lại nóng, cho phép các nhà phát triển xem các thay đổi trong ứng dụng theo thời gian thực khi họ thực hiện chúng. Điều này làm cho quá trình phát triển nhanh hơn và hiệu quả hơn, vì các nhà phát triển có thể thấy tác động của những thay đổi của họ ngay lập tức.
-   Nhìn chung, React Native là một framework mạnh mẽ và phổ biến để xây dựng các ứng dụng di động sử dụng JavaScript và ReactJS. Khả năng cung cấp trải nghiệm người dùng nhanh và nhạy, đồng thời cho phép sử dụng lại mã giữa các nền tảng khác nhau, khiến nó trở thành lựa chọn lý tưởng để phát triển ứng dụng di động hiện đại.

> **Cài đặt**

```bash
npm uninstall -g react-native-cli @react-native-community/cli
npx react-native@latest init AwesomeProject
```

> **Tham khảo:** [Cài đặt React Native](https://reactnative.dev/docs/environment-setup)

## Ví dụ về React Native

```jsx
import React from 'react';
import { StyleSheet, ScrollView, View, Text, Linking } from 'react-native';

export default function App() {
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <View>
                <Text style={[styles.text]}>Welcome to React Native!</Text>
                <Text onPress={() => Linking.openURL('https://reactnative.dev')}>
                    Welcome to React Native!
                </Text>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    text: {
        color: 'blue',
        textAlign: 'right',
    },
)};
```

## Tham khảo

**`Tham khảo tại:`** [https://reactnative.dev/](https://reactnative.dev/)
