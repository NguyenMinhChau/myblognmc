---
id: paginationcustom
title: Pagination Custom
sidebar_position: 13
tags: [react, pagination]
---

> **Trình tự các bước thực hiện**

```js
let showPage = 10;
const start = (page - 1) * showPage + 1;
const end = start + showPage - 1;

// FILTER DATA
data?.filter((row, index) => {
    if (index + 1 >= start && index + 1 <= end) return true;
});

// RENDER TABLE DATA

// COUNTPAGE CONTAINER
<span className={`${cx('countpage-text')}`}>
    items per page | {start} - {end} of {data.length}
</span>

// PAGINATION NUMBER WITH MATERIAL.UI
<Stack spacing={2} className={`${cx('pagination-container')}`}>
   <Pagination onChange={handleChangePage} page={page}
      showFirstButton showLastButton
      onChange={handleChangePage}
      count={ parseInt(Math.ceil(data.length / 10)) || 0}
      variant='outlined' shape='rounded'
    />
</Stack>
```
