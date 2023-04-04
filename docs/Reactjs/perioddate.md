---
id: period-date
title: Period Date
sidebar_position: 14
tags: [perioddate]
---

> **Hàm xử lý**

```js
const handleChangePeriod = (item) => {
    const date = new Date();
    let toDate = new Date();
    let fromDate = new Date();
    switch (item?.toLowerCase()?.replace(/\s/g, '')) {
        case 'today':
            fromDate = new Date();
            break;
        case 'yesterday':
            fromDate = new Date(date.setDate(date.getDate() - 1));
            break;
        case 'thisweek':
            //lấy ngày thứ 2 của tuần week[1]
            fromDate = new Date(date.setDate(date.getDate() - date.getDay() + 1));
            break;
        case 'lastweek':
            fromDate = new Date(date.setDate(date.getDate() - date.getDay() + 1 - 7));
            toDate = new Date(date.setDate(date.getDate() - date.getDay() + 7));
            break;
        case 'thismonth':
            // lấy ngày đầu tiên của tháng
            fromDate = new Date(date.setDate(1));
            break;
        case 'lastmonth':
            fromDate = new Date(date.setMonth(date.getMonth() - 1, 1));
            toDate = new Date(date.setMonth(date.getMonth() + 1, 0));
            break;
        case 'thisyear':
            // lấy ngày đầu tiên của năm
            fromDate = new Date(date.setMonth(0, 1));
            break;
        case 'lastyear':
            fromDate = new Date(date.setFullYear(date.getFullYear() - 1, 0, 1));
            toDate = new Date(date.setFullYear(date.getFullYear() + 1, 0, 0));
            break;
        default:
            fromDate = new Date();
            break;
    }
    dispatch(
        actions.setData({
            searchValues: {
                dateFrom: dateUtils.dateVnFormat2(fromDate),
                dateTo: dateUtils.dateVnFormat2(toDate),
            },
        })
    );
    setPeriod(item);
    setIsPeriod(false);
};
```

> **Hàm dateVnFormat2(date)**

```js
export const dateVnFormat2 = (date) => {
    const dateVn = new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000);
    const day = dateVn.getDate();
    const month = dateVn.getMonth() + 1;
    const year = dateVn.getFullYear();
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
};
```
