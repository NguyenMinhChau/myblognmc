---
id: sass-compiler
title: SASS Compiler
sidebar_position: 4
tags: [sass compiler]
---

## Cài đặt sass

```bash
npm i sass
```

## Thêm scripts - package.json

```json
"scripts": {
    "compilerSass": "sass --no-source-map -w $FOLDER_NAME_SCSS:$FOLDER_NAME_CSS"
},
```
