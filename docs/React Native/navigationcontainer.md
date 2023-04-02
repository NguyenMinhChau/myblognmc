---
id: navigationcontainer
title: Navigation Container
sidebar_position: 2
tags: [navigation, react native, navigation container]
---

> **`routerRender/main.js`**

```jsx
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: PRIMARY_COLOR,
        background: '#fafafa',
    },
};
const Stack = createNativeStackNavigator();

<NavigationContainer theme={MyTheme}>
    <Stack.Navigator
        initialRouteName={routersMain.MainPage}
        screenOptions={{
            headerShown: false,
        }}>
        {MainObject.map((item, index) => {
            return (
                <Stack.Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                    options={
                        item.options === 'headerNull'
                            ? { header: () => null }
                            : item.options === 'custom'
                            ? {
                                  title: item?.name === routersMain.SendFunds ? '' : item.name,
                                  headerShown: item?.name === routersMain.SendFunds ? false : true,
                                  headerTitleAlign: 'center',
                                  headerTintColor: WHITE_COLOR,
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                      letterSpacing: 1,
                                  },
                                  headerStyle: {
                                      backgroundColor: PRIMARY_COLOR,
                                  },
                              }
                            : {}
                    }
                />
            );
        })}
    </Stack.Navigator>
</NavigationContainer>;
```

> **routers/routersMain.js**

```js
export const routersMain = {
    Login: 'Login',
    Deposits: 'Nạp tiền',
};
```

> **routers/MainObject.js**

```js
const MainObject = [
    {
        name: routersMain.Login,
        component: Login,
        icon: 'home',
        color: null,
        size: null,
        options: 'headerNull',
    },
    {
        name: routersMain.Deposits,
        component: Deposits,
        icon: 'wallet',
        color: null,
        size: null,
        options: 'custom',
    },
];
```
