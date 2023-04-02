---
id: sendemailuser
title: Gửi email cho người dùng
sidebar_position: 12
tags: [nodejs, expressjs, jwt, token, send email, nodemailer]
---

## Cài đặt thư viện

```bash
npm i nodemailer otp-generator
```

## Tạo file .env

```env
SERVICE_MAIL=gmail
HOST=smtp.gmail.com
PORT_MAIL=465
EMAIL=nmchauhcmue@gmail.com (email gửi cho user)
MAIL_PASS=ufkaahwbkmdpmgjx (Vào chrome -> Manager account -> Bảo mật -> Xác minh 2 bước -> Mật khẩu ứng dụng -> Chọn ứng dụng -> Tạo -> Lấy MAIL_PASS)
```

## Tạo phương thức send-email: utils/sendEmail.js

```js
require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: process.env.SERVICE_MAIL,
    host: process.env.HOST,
    port: process.env.PORT_MAIL,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.MAIL_PASS,
    },
});

function sendMailFunc(email, message, subject) {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        html: message,
    };
    let p = new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                reject(err);
            }
            resolve({ code: 0, message: 'Send Mail successfully' });
        });
    });

    return p;
}
```

## Register (Đăng ký → Gửi mã cho người dùng xác thực tài khoản)

```js
register: async (req, res) => {
    //...
    const date = Date.now();
    const activation_token = jwt.sign(
        {
            id: newUser._id,
            email: newUser.email,
            username: newUser.username,
            date,
        },
        process.env.JWT_ACCESS_TOKEN_SECRET,
        {
            expiresIn: '5m',
        }
    );
    // generater otp
    const otp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
    const verify = new VerifyAccount({
        // $MODEL VerifyAccount
        code: otp,
        email: newUser.email,
        token: activation_token,
        date,
    });
    await newUser.save();
    verify
        .save()
        .then((f) => {
            if (f) {
                const mailContentActivation = `$HTML`;
                let resultSendMail = sendMailFunc(
                    newUser.email,
                    mailContentActivation,
                    `TITLE - Xác thực cho tài khoản @${newUser.email}`
                );
                resultSendMail
                    .then((val) => {
                        return res.json({
                            code: 0,
                            message: `Send mail for verify account successfully to email = ${newUser.email}`,
                        });
                    })
                    .catch((err) => {
                        return res.json({
                            code: 1,
                            message: err?.message,
                        });
                    });
            } else {
                return res.json({
                    code: 2,
                    message: `Can not save model verify account of user with email = ${newUser.email}`,
                });
            }
        })
        .catch((err) => {
            return res.json({
                code: 1,
                message: err?.message,
            });
        });
    ///..
};
```

> **Model [VerifyAccount](modelVerify)**

## Send email xác thực tài khoản khi chưa xác thực lúc đăng ký

```js
sendMailVerify: async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                code: 1,
                message: 'User not found.',
            });
        } else {
            const date = Date.now();
            const activation_token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    username: user.username,
                    date,
                },
                process.env.JWT_ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '5m',
                }
            );
            // generater otp
            const otp = otpGenerator.generate(6, {
                lowerCaseAlphabets: false,
                upperCaseAlphabets: false,
                specialChars: false,
            });
            const verify = new VerifyAccount({
                // $Model VerifyAccount
                code: otp,
                email: user.email,
                token: activation_token,
                date,
            });
            verify
                .save()
                .then((f) => {
                    if (f) {
                        const mailContentActivation = `$HTML`;
                        let resultSendMail = sendMailFunc(
                            user.email,
                            mailContentActivation,
                            `TITLE - Xác thực cho tài khoản @${user.email}`
                        );
                        resultSendMail
                            .then((val) => {
                                return res.json({
                                    code: 0,
                                    message: `Send mail for verify account successfully to email = ${user.email}`,
                                });
                            })
                            .catch((err) => {
                                return res.json({
                                    code: 1,
                                    message: err?.message,
                                });
                            });
                    } else {
                        return res.json({
                            code: 2,
                            message: `Can not save model verify account of user with email = ${user.email}`,
                        });
                    }
                })
                .catch((err) => {
                    return res.json({
                        code: 1,
                        message: err?.message,
                    });
                });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
```

> **Model [VerifyAccount](modelVerify)**

## Gửi lại mã OTP

```js
resendCode: async (req, res) => {
    try {
        const { token } = req.params;
        if (!token) {
            return res.json({
                code: 2,
                message: 'A token is required',
            });
        } else {
            const date = Date.now();
            const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
            const activation_token = jwt.sign(
                { id: decoded._id, email: decoded.email, date },
                process.env.JWT_ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '5m',
                }
            );
            // generater otp
            const otp = otpGenerator.generate(6, {
                lowerCaseAlphabets: false,
                upperCaseAlphabets: false,
                specialChars: false,
            });
            const verify = new VerifyAccount({
                // $Model VerifyAccount
                code: otp,
                email: decoded.email,
                token: activation_token,
                date,
            });
            verify
                .save()
                .then((f) => {
                    if (f) {
                        const mailContentActivation = `$HTML`;
                        let resultSendMail = sendMailFunc(
                            decoded.email,
                            mailContentActivation,
                            `TITLE - Gửi lại mã xác thực cho tài khoản @${decoded.email}`
                        );
                        resultSendMail
                            .then((val) => {
                                return res.json({
                                    code: 0,
                                    message: `Send mail for resend code successfully to email = ${decoded.email}`,
                                });
                            })
                            .catch((err) => {
                                return res.json({
                                    code: 1,
                                    message: err?.message,
                                });
                            });
                    } else {
                        return res.json({
                            code: 2,
                            message: `Can not save model verify account of user with email = ${decoded.email}`,
                        });
                    }
                })
                .catch((err) => {
                    return res.json({
                        code: 1,
                        message: err?.message,
                    });
                });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
```

> **Model [VerifyAccount](modelVerify)**

## Kiểm tra OTP Verify

```js
checkCodeVerify: async (req, res) => {
    const { token } = req.params;
    const { otp } = req.body;
    if (!token) {
        return res.json({
            code: 2,
            message: 'A token is required',
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
        VerifyAccount.findOne({ date: decoded.date }, (err, f) => {
            // $Model VerifyAccount
            if (f) {
                if (f.code === otp) {
                    User.findOne({ email: decoded.email }, (errs, user) => {
                        if (err)
                            return res.json({
                                code: 1,
                                message: err?.message,
                            });

                        if (user) {
                            user.verify = true;
                            user.save();
                            return res.json({
                                code: 0,
                                message: 'Verify account successfully',
                            });
                        } else {
                            return res.json({
                                code: 2,
                                message: `User is not valid with email = ${decoded.email}`,
                            });
                        }
                    });
                } else {
                    return res.json({
                        code: 2,
                        message: `Otp iput is wrong or dead`,
                    });
                }
            } else {
                return res.json({
                    code: 2,
                    message: `Token is dead! Please order new Token for verify account`,
                });
            }
        });
    } catch {
        return res.status(500).json({ message: err.message });
    }
};
```

> **Model [VerifyAccount](modelVerify)**
