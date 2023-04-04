---
id: download-file-local
title: Download File Local
sidebar_position: 6
tags: [download file]
---

> **Hàm xử lý**

```jsx
const [valueProcess, setValueProgress] = useState(0);
const [isProcess, setIsProgress] = useState(false);
const downloadFile = async (url, name) => {
    setIsLoading(true);
    setGetApp(true);
    await axios({
        url: url,
        method: 'GET',
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setValueProgress(percentCompleted);
            if (percentCompleted >= 100) {
                setTimeout(() => {
                    setIsLoading(false);
                    setGetApp(false);
                    setValueProgress(0);
                }, 2000);
            }
        },
    })
        .then((res) => {
            const url = window.URL.createObjectURL(res.data);
            const a = document.createElement('a');
            a.href = url;
            a.download = name;
            a.click();
        })
        .catch((err) => {
            console.log(err);
        });
};
```

> **Sử dụng**

```jsx
<Button variant='contained' color='primary' onClick={() => downloadFile(url, name)}>
    Download
</Button>
```
