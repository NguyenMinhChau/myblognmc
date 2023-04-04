---
id: animation-key-frames
title: Animation Keyframes
sidebar_position: 4
tags: [animation, keyframes]
---

> **Cấu hình**

```jsx
import { Animated } from 'react-native';
const [animation] = useState(new Animated.Value(0));
Animated.timing(animation, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
}).start();
const animatedStylesOpacity = {
    opacity: animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0.5, 1],
    }),
    transform: [
        {
            scale: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0.5, 0.75, 1],
            }),
        },
    ],
};
```

> **Sử dụng**

```jsx
<Animated.View style={[animatedStylesOpacity]}>
    <Text style={[styles.text_loader]}>Paragrap</Text>
</Animated.View>
```
