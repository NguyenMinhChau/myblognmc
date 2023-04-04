---
id: scrollview
title: ScrollView
sidebar_position: 7
tags: [scrollview]
---

> **Cấu hình**

```jsx
const [refreshing, setRefreshing] = useState(false);

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};
const onRefresh = useCallback(() => {
    setRefreshing(true);
    // CALL API WHEN REFRESH
    wait(2000).then(() => setRefreshing(false));
}, []);
```

> **Sử dụng**

```jsx
<ScrollView
    showsVerticalScrollIndicator={false}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    style={[styles.container]}>
    <View>
        <Text>123</Text>
    </View>
</ScrollView>
```
