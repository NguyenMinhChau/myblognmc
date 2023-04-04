---
id: tab-navigator
title: Tab Navigator
sidebar_position: 3
tags: [navigation, tab navigator]
---

> **`routerRender/router.js`**

```jsx
const Tab = createBottomTabNavigator();
<Tab.Navigator initialRouteName={routers.Home}>
    {MainObject.map((item, index) => {
        return (
            <Tab.Screen
                key={index}
                name={item?.custom ? ' ' : item?.name}
                component={item?.component}
                options={{
                    tabBarHideOnKeyboard: true,
                    headerTitleAlign: 'center',
                    headerTintColor: WHITE_COLOR,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        letterSpacing: 1,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: 'bold',
                    },
                    headerShown: item?.name === routers.Home ? false : true,
                    headerTitle: item?.name,
                    headerStyle: {
                        backgroundColor: PRIMARY_COLOR,
                    },
                    tabBarIcon: item?.custom
                        ? () => (
                              <View style={[styles.tabBarIconCustom]}>
                                  <FontAwesome5 name={'bitcoin'} size={25} color={WHITE_COLOR} />
                              </View>
                          )
                        : ({ focused, color, size }) => (
                              <FontAwesome5
                                  name={item.icon}
                                  size={20}
                                  color={focused ? PRIMARY_COLOR : color}
                              />
                          ),
                }}
            />
        );
    })}
</Tab.Navigator>;
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
