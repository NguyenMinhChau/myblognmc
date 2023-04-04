---
id: load-modal-before-on-app
title: Load modal before on app
sidebar_position: 6
tags: [load modal, before on app]
---

> **src/app.js**

```jsx
const [modalLoadApp, setModalLoadApp] = React.useState(false);
useEffect(() => {
    const init = async () => {
        await AsyncStorage.setItem(
            '@modalLoader',
            JSON.stringify({
                modalLoadApp: true,
            })
        );
        await AsyncStorage.getItem('@modalLoader').then((res) => {
            const data = JSON.parse(res);
            setModalLoadApp(data.modalLoadApp);
        });
        // CHECK VERSION APP PLAY STORE/APP STORE
        setTimeout(async () => {
            await AsyncStorage.setItem(
                '@modalLoader',
                JSON.stringify({
                    modalLoadApp: false,
                })
            );
            await AsyncStorage.getItem('@modalLoader').then((res) => {
                const data = JSON.parse(res);
                setModalLoadApp(data.modalLoadApp);
            });
        }, 2000);
    };
    init();
}, []);

{
    modalLoadApp ? (
        <View style={[styles.image_loader]}>
            <Animated.View style={[animatedStylesOpacity]}>
                <Text style={[styles.text_loader]}>Paragrap</Text>
            </Animated.View>
            <Animated.View style={[animatedStylesOpacity]}>
                <Image
                    style={[styles.image_loader_item]}
                    source={require('./assets/images/logo.png')}
                    resizeMode='contain'
                />
            </Animated.View>
        </View>
    ) : (
        <>{/*<HIỂN THỊ APP + CHECK VERSION>*/}</>
    );
}
```
