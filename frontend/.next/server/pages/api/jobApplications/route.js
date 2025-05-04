"use strict";
(() => {
var exports = {};
exports.id = 4063;
exports.ids = [4063];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 7175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POST": () => (/* binding */ POST),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

async function POST(req) {
  try {
    // Parse the incoming request body
    const formData = await req.formData();
    console.log(formData); // Extract form fields

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const experience = formData.get("experience");
    const skills = formData.get("skills");
    const message = formData.get("message");
    const cvFile = formData.get("cv"); // File upload
    // Validate required fields

    if (!name || !email || !phone || !position || !cvFile) {
      return new Response(JSON.stringify({
        error: "Missing required fields"
      }), {
        status: 400
      });
    } // Read CV file as a buffer


    const cvBuffer = await cvFile.arrayBuffer(); // Configure Nodemailer transport

    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
      service: "gmail",
      // You can use other services like Outlook, Yahoo, etc.
      auth: {
        user: process.env.EMAIL_USER || "shyamalfred@gmail.com",
        // Your email address
        pass: process.env.EMAIL_PASS || "ltjldqphmnsexyna" // Your email password or app password

      }
    }); // Email options

    const mailOptions = {
      from: process.env.EMAIL_USER || "shyamalfred@gmail.com",
      to: process.env.RECIPIENT_EMAIL || "shyamalfred@gmail.com",
      // Replace with your recipient email address
      subject: `Job Application from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Position Applied For: ${position}
        Years of Experience: ${experience}
        Skills: ${skills}
        Message:
        ${message}
      `,
      attachments: [{
        filename: cvFile.name,
        content: Buffer.from(cvBuffer),
        contentType: cvFile.type
      }]
    }; // Send the email

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({
      message: "Application submitted successfully!"
    }), {
      status: 200
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({
      error: "Failed to send application. Please try again later."
    }), {
      status: 500
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  POST
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7175));
module.exports = __webpack_exports__;

})();