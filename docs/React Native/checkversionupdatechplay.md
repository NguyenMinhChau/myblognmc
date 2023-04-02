---
id: checkversionupdatechplay
title: Check version update chplay
sidebar_position: 5
tags: [check version, update chplay, react native]
---

> **Cài đặt thư viện**

```bash
npm i react-native-version-check
```

> **src/app.js**

```jsx
const [updateApp, setUpdateApp] = React.useState(false);
const [versionNew, setVersionNew] = React.useState(null);

useEffect(() => {
    const init = async () => {
        VersionCheck.needUpdate({
            packageName: PACKAGE_NAME_APP,
        }).then(async (res) => {
            if (res?.isNeeded) {
                setUpdateApp(true);
                setVersionNew(res?.latestVersion);
            } else {
                setUpdateApp(false);
                setVersionNew(null);
            }
        });
    };
    init();
}, []);

const toogleUpdateApp = () => {
    setUpdateApp(!updateApp);
};
const handleRedirectPlayStore = () => {
    Linking.openURL(`${URL_APP_PLAY_STORE}`);
};

{
    updateApp && versionNew && (
        <View style={[styles.modal_container]}>
            <View style={[styles.modal_content]}>
                <View style={[styles.modal_header]}>
                    <Image
                        style={[styles.modal_header_img]}
                        source={require('./assets/images/logo.png')}
                        resizeMode='contain'
                    />
                    <View style={[styles.modal_header_text]}>
                        <Text style={[styles.text]}>Cập nhật ứng dụng</Text>
                        <Text style={[styles.version]}>Phiên bản: v{versionNew}</Text>
                    </View>
                </View>
                <View style={[styles.modal_body]}>
                    <Text style={[styles.text_body]}>
                        Phiên bản v{versionNew} đã có sẵn. Vui lòng cập nhật để có trải nghiệm tốt
                        nhất. Cảm ơn quý khách!
                    </Text>
                </View>
                <View style={[styles.modal_footer]}>
                    <Text
                        onPress={toogleUpdateApp}
                        style={[styles.text_footer, stylesStatus.cancelbgc, stylesGeneral.mr10]}>
                        Bỏ qua
                    </Text>
                    <Text
                        onPress={handleRedirectPlayStore}
                        style={[styles.text_footer, stylesStatus.confirmbgc]}>
                        Cập nhật
                    </Text>
                </View>
            </View>
        </View>
    );
}
```
