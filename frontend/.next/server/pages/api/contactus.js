"use strict";
(() => {
var exports = {};
exports.id = 3306;
exports.ids = [3306];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "nodemailer"
var external_nodemailer_ = __webpack_require__(5184);
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_);
;// CONCATENATED MODULE: ./services/sendContactMail.js

async function sendContactMail({
  firstName,
  lastName,
  email,
  phone,
  message
}) {
  try {
    console.log("Received Contact Submission:", {
      firstName,
      lastName,
      email,
      phone,
      message
    });
    const transporter = external_nodemailer_default().createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false // Disable SSL verification

      }
    });
    const mailOptions = {
      from: `"Contact form submission - Aasthaparivaar" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background-color: #f5f5f5;">
          <h1 style="color: #333; text-align: center;">New Contact Form Submission</h1>
          <hr style="border: 1px solid #ccc;">
          <div style="margin-bottom: 20px;">
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>First Name:</strong> ${firstName}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Last Name:</strong> ${lastName}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Phone:</strong> ${phone}</p>
          </div>
          <div style="border-top: 1px solid #ccc; padding-top: 20px;">
            <p style="font-size: 16px;"><strong>Message:</strong></p>
            <p style="font-size: 16px; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}
;// CONCATENATED MODULE: ./pages/api/contactus.js

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        message
      } = req.body;
      await sendContactMail({
        firstName,
        lastName,
        email,
        phone,
        message
      });
      return res.status(200).json({
        message: "Form submitted successfully"
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        error: "Error sending email"
      });
    }
  } else {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(107));
module.exports = __webpack_exports__;

})();