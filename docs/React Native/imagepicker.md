---
id: imagepicker
title: Image Picker
sidebar_position: 9
tags: [image picker, react native]
---

> **Cài đặt thưu viện**

```bash
npm i react-native-image-crop-picker
```

> **Sử dụng**

```jsx
const [fileCCCDFront, setFileCCCDFront] = useState(null);
const [dataImageForm, setDataImageForm] = useState([]);

const handleSelectCCCDFront = async () => {
    await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        compressImageQuality: 0.7,
        includeBase64: true,
    }).then((image) => {
        const object = {
            image: image?.data || image?.image,
            fileName: image.modificationDate
                ? image.modificationDate + '.' + image.mime.split('/')[1]
                : image.filename || image.fileName,
        };
        setFileCCCDFront(`data:${image?.mime};base64,${image?.data || image?.image}`);
        setDataImageForm([...dataImageForm, object]);
    });
};

// GỌI API
const handleUploadSV = (dataToken) => {
    userUploadLicenseSV({
        id_user: currentUser?.id,
        navigation,
        token: dataToken?.token,
        toast,
        imageForm: dataImageForm,
        setIsProcess,
    });
};
```
