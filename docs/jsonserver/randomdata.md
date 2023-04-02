---
id: randomdata
title: Random dữ liệu với Faker.js
sidebar_position: 4
tags: [json server, random data]
---

## Thư viện Faker.js

> **[Faker.js](https://github.com/faker-js/faker)**

## Cài đặt thư viện

```bash
npm install @faker-js/faker --save-dev
```

## Tạo file src/generateData.js

```js
const { faker } = require('@faker-js/faker');
const fs = require('fs');

// language: Vietnamese
faker.setLocale('vi');

// random lớp học
const randomClasses = (n) => {
    if (n <= 0) return [];
    const arr = [];
    Array.from(new Array(n)).forEach((item) => {
        arr.push({
            id: faker.database.mongodbObjectId(),
            class: faker.name.fullName(),
        });
    });
    return arr;
};

// random học sinh (mỗi lớp có n học sinh)
const randomDataStudent = (classes, n) => {
    if (n <= 0) return [];
    const arr = [];
    for (const classItem of classes) {
        Array.from(new Array(n)).forEach((item) => {
            arr.push({
                id: faker.database.mongodbObjectId(),
                name: faker.name.fullName(),
                username: faker.name.firstName(),
                email: faker.internet.email(),
                classId: classItem.id,
            });
        });
    }
    return arr;
};

const generateData = (path) => {
    // random data
    const classes = randomClasses(5);
    const dataStudent = randomDataStudent(classes, 5);
    // structure data
    const data = {
        classes: classes,
        dataStudent: dataStudent,
    };
    // write file db.json
    fs.writeFile(path, JSON.stringify(data), () => {
        console.log('Generate data successfully');
    });
};

// generateData và ghi đè dữ liệu file db.json
generateData(__dirname.replace('src', 'db.json'));
```

## Viết scripts - package.json

```json
{
    "scripts": {
        "start": "npm run generateData && node src/index.js",
        "generateData": "node src/generateData.js",
        "dev": "nodemon src/index.js"
    }
}
```

> **Chạy lệnh**
