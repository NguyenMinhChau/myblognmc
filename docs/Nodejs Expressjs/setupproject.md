---
id: setupproject
title: Khởi tạo dự án
sidebar_position: 2
tags: [nodejs, expressjs, setup]
---

## Khỏi tạo package.json và cài đặt các thư viện cần thiết

```bash
npm init -y
npm i nodemon morgan --save-dev
npm i dotenv express mongoose cors mongoose-slug-generator mongoose-delete
```

> **Thêm scripts - package.json**

```json
"scripts": {
   "start": "nodemon --inspect src/index.js"
},
```

## Cấu hình entrypoint src/index.js

```js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// use express: parse json
app.use(express.json());
// use express for form
app.use(express.urlencoded({ extended: true }));
//static file is public/
app.use(express.static(path.join(__dirname, 'public')));
// use cors: allow all origin config
app.use(
    cors({
        origin: '*', // or URL_CLIENT
    })
);
// Tự động xóa log trong khoảng thời gian nào đó: npm install rotating-file-stream
const rfs = require('rotating-file-stream');
const logDirectory = path.join(__dirname, 'utils/helpers/logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory,
    maxFiles: 7, // keep 7 days of logs
    compress: 'gzip', // compress rotated files
});
app.use(morgan('combined', { stream: accessLogStream })); // log in file
app.use(morgan('dev')); // log in terminal

// connect to mongodb
// app.use(router);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

## Tạo router và controller

> **`src/controllers/myController.js`**

```js
const myController = {
    index: (req, res) => {
        res.json({ message: 'Hello world' });
    },
};
```

> **`src/routers/myRouter.js`**

```js
const express = require('express').Router();
const myController = require('../controllers/myController');

router.get('/', myController.index);

module.exports = router;
```

> **`src/routers/index.js`**

```js
const myRouter = require('./myRouter');

const router = (app) => {
    app.use('/api', myRouter);
};

module.exports = router;
```

> **`src/index.js`**

```js
const router = require('../routers/');
router(app);
```

## Tạo model

```js
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const mySchema = mongoose.Schema(
    {
        //...
        title: { type: String, required: true },
        description: { type: String },
        videoId: { type: String, required: true },
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', mySchema);
```

## Connect database (MongoDB)

```js
require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Successfully');
    } catch {
        console.log('Error in connecting to MongoDB');
    }
}

module.exports = {
    connect,
};
```

> **`src/index.js`**

```js
const db = require('../db/');
db.connect();
```
