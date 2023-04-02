---
id: localstorage
title: Local Storage
sidebar_position: 8
tags: [localstorage, react native]
---

> **Cài đặt thư viện**

```bash
npm i @react-native-async-storage/async-storage
```

> **`utils/localStorage.js`**

```js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCurrentUserPL } from '../../app/payloads/user';
const KEY = '$KEY_NAME';

export const getAsyncStore = async (dispatch) => {
    try {
        await AsyncStorage.getItem(`@${KEY}`)
            .then(JSON.parse)
            .then((res) => {
                dispatch(setCurrentUserPL(res));
            });
    } catch (err) {
        console.log('Error: ', err);
    }
};

export const setAsyncStore = async (data) => {
    try {
        if (data) {
            const jsonValue = await JSON.stringify(data);
            await AsyncStorage.setItem(`@${KEY}`, jsonValue);
        }
    } catch (err) {
        console.log(err);
    }
};

export const removeAsyncStore = async () => {
    try {
        await AsyncStorage.clear();
        return true;
    } catch (exception) {
        return false;
    }
};

export const removeStore = async () => {
    try {
        await AsyncStorage.removeItem(`@${KEY}`);
        return true;
    } catch (exception) {
        return false;
    }
};
```
