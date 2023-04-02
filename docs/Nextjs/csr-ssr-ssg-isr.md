---
id: csr-ssr-ssg-isr
title: CSR, SSR, SSG, ISR
sidebar_position: 7
tags: [nextjs, csr, ssr, ssg, isr]
---

## Pre-rendering (Nextjs)

> Render sẵn file HTML phía server (người dùng vẫn thấy giao diện khi truy cập dù file javascript chưa được attach)

-   `Server site rendering (SSR)`: theo mỗi request của user sẽ TẠO 1 file HTML trả về.
-   `Static site generation (SSG)`: next build -> tạo ra một tập file HTML tĩnh -> mỗi request của user chỉ cần LẤY RA đúng file HTML đó ra sử dụng.

## No Pre-rendering

> `Client site rendering (CSR) - Reactjs`: không render sẵn file HTML phía server (người dùng sẽ không thấy giao diện khi truy cập khi file javascript chưa được attach)

## ISR (Incremental static regeneration)

> Sử dụng với tập dữ liệu lớn -> build ra số lượng file static HTML lớn
