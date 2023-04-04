---
id: soft-delete
title: Soft delete trong Mongoose
sidebar_position: 7
tags: [mongoose, softdelete]
---

## Cài đặt thư viện hỗ trợ

```bash
npm i mongoose-delete
```

> **Tại `models/my-model.js`**

```js
const mongooseDelete = require('mongoose-delete');

const mySchema = new Schema({
    name: String,
});

mySchema.plugin(mongooseDelete, {
    deletedAt: true, // thêm trường deletedAt
    overrideMethods: 'all', // không lấy ra những bảng có deleted: true
});

module.exports = mongoose.model('MyModel', mySchema);
```

## Xử lý xóa giả, khôi phục, xóa thật

> **Xóa giả**

```js
// XÓA THEO MỘT _ID
myModel
    .delete({ _id: req.params.id })
    .then(() => res.redirect('my-view'))
    .catch(next);
// XÓA _ID NẰM TRONG 1 MẢNG _IDS (dùng cho chọn bằng checkbox)
myModel.delete({ _id: { $in: arrayIds } });
```

> **Lấy ra các object đã bị xóa mềm**

```js
myModel
    .findDelete({})
    .then((items) => {
        data: items;
    })
    .catch(next);
```

> **Chức năng khôi phục**

-   Lấy ra tất cả nút khôi phục
-   Lắng nghe sự kiện click -> cập nhật theo id (submit form ẨN với phương thức PATCH);
-   controller xử lý.

```js
myModel.restore({ _id: req.params.id }).then(res.redirect('my-view'));
```

> **Chức năng xóa vĩnh viễn**

-   Lắng nghe sự kiện click nút xóa vĩnh viễn -> hiện modal xác nhận -> xóa theo id (submit form ẨN với phương thức DELETE);
-   controller xử lý.

```js
myModel.deleteOne({ _id: req.params.id }).then(res.redirect('my-view'));
```

## Đếm số lượng object đã được xóa mềm

```js
Promise.all([myModel.find({}), myModel.countDocumentsDeleted({})])
    .then(([data, count]) =>
        res.render('my-view', {
            data: mutipleObject(data),
            count,
        })
    )
    .catch(next);
```
