"use strict";
(() => {
var exports = {};
exports.id = 1232;
exports.ids = [1232];
exports.modules = {

/***/ 4537:
/***/ ((module) => {

module.exports = require("next");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 3915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sendMail)
});

// EXTERNAL MODULE: external "next"
var external_next_ = __webpack_require__(4537);
// EXTERNAL MODULE: external "nodemailer"
var external_nodemailer_ = __webpack_require__(5184);
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_);
;// CONCATENATED MODULE: ./services/sendVolunteerMail.js

async function sendSimpleMail({
  name,
  email,
  message,
  phone,
  availability,
  qualification
}) {
  try {
    console.log("xxxxxxx", name);
    var transporter = external_nodemailer_default().createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false // Disable SSL verification

      }
    });
    var mailOptions = {
      from: `"Volunteer Application- Aasthaparivaar" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      // Change this to your recipient's email address
      subject: `Volunteer Application from ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background-color: #f5f5f5;">
        <h1 style="color: #333; text-align: center;">New Volunteer Form Submission</h1>
        <hr style="border: 1px solid #ccc;">
        <div style="margin-bottom: 20px;">
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Email:</strong> ${email}</p>
        
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Phone:</strong> ${phone}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Qualification:</strong> ${qualification}</p>
           <p style="font-size: 16px; margin-bottom: 5px;"><strong>Availability:</strong> ${availability}</p>
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
;// CONCATENATED MODULE: ./pages/api/sendMail.js



const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      // Extract data from the request body
      const {
        name,
        email,
        phone,
        qualification,
        availability,
        message
      } = req.body;
      console.log("name", name); // Send email with form data

      await sendSimpleMail({
        subject: "New Volunteer Form Submission",
        to: "shyamalfred@gmail.com",
        // Update with your email address or use email from req.body
        name,
        phone,
        message,
        email,
        qualification,
        availability
      });
      res.status(200).json({
        message: "Email sent successfully!"
      });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      error: "Error sending email"
    });
  }
};

/* harmony default export */ const sendMail = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3915));
module.exports = __webpack_exports__;

})();