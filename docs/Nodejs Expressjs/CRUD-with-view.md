---
id: CRUD-with-view
title: CRUD
sidebar_position: 5
tags: [nodejs, expressjs, CRUD]
---

## Tạo mới

-   Tạo view create: `views/create`
-   Tạo router match với view (VD: course/create). Router này chỉ dùng hiện view
-   Tạo router dùng để submit form (VD: course/store). Router này dùng để tạo mới
-   Bên view: `<form method='POST' actions='/course/store'>...</form>`
-   Controller xử lý tạo mới:

```js
const itemNew = new $MODEL(req.body);
itemNew.save().then(() => res.redirect('/')); //CHÚ Ý CÁC TRƯỜNG TRONG req.body ĐÃ CÓ TRONG $MODEL HAY CHƯA
```

## Cập nhật

-   Tạo view chứa thông tin đối tượng muốn cập nhật: `views/update/:id`
-   Tạo router match với view `(views/update/:id)`. Đổ các trường dữ liệu lên form chỉnh sửa thông qua controller xử lý.

```js
$MODEL.findById(req.params.id).then((item) => res.render('my-view', { item }));
```

> **FORM CHỈ HỖ TRỢ ĐƯỢC 2 PHƯƠNG THỨC GET,POST. NẾU MUỐN CẬP NHẬT THÌ PHẢI DÙNG METHOD-OVERRIDE VÀ FORM DÙNG METHOD='POST'**

-   Dùng method-override: `npm i method-override` (giúp chuyển đổi phương thức submit)
-   Tại `src/index.js`:

```js
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
```

-   Bên view: `<form id='form' method='POST' actions='/course/store/id?_method=PUT'>...</form>`
-   Tạo router dùng để submit form (VD: course/store/:id). Router này dùng để cập nhật với phương thức PUT.
-   Controller xử lý update:

```js
$MODEL
    .updateOne({ _id: req.params.id }, req.body)
    .then(() => res.redirect('my-view'))
    .catch(next);
```

## Xóa

-   Bấm button delete -> Hiện modal xác nhận -> Bấm button confirm modal thì mới xóa (tăng trải nghiệm người dùng)
-   Bên view tạo FORM ẨN: `<form name='hidden_form' method='POST'>KHÔNG CHỨA CONTENT</form>`
-   Tạo router dùng để submit form (VD: course/store/delete/:id). Router này dùng để xóa với phương thức DELETE.
-   Controller xử lý delete:

```js
$MODEL
    .deleteOne({ _id: req.params.id })
    .then(() => res.redirect('my-view'))
    .catch(next);
```

-   Dùng hàm JAVASCRIPT xử lý bấm button confirm modal xóa.
    -   Bấm vào button xóa (đặt attribute data-id='\_id') phải lấy được id đối tượng khi hiện modal
    -   Viết script xử lý.

```js
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var id;
        var buttonDelete = document.getElementById('buttonDelete')
        var buttonModal = document.getElementById('buttonModal');
        var hidden_form = document.forms['name_form']

        buttonDelete.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget
            id = button.getAttribute('data-id')
        })
        buttonModal.onClick(() => {
            hidden_form.action = '/course/delete/' + id + '?_method=DELETE';
            hidden_form.submit();
        })
    });
  </script>
```
