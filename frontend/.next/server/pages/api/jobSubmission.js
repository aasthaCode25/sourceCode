"use strict";
(() => {
var exports = {};
exports.id = 2423;
exports.ids = [2423];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 6705:
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 8091:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_2__]);
formidable__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const config = {
  api: {
    bodyParser: false
  }
};

const sendSimpleMail = async ({
  name,
  email,
  phone,
  position,
  experience,
  skills,
  message,
  cvFile
}) => {
  const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false // Bypass certificate validation

    }
  });
  const mailOptions = {
    from: `"Job Application Bot" <${process.env.EMAIL_USER || "shyamalfred@gmail.com"}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Job Application from ${name}`,
    html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background-color: #f5f5f5;">
            <h1 style="color: #333; text-align: center;">New Job Application Submission</h1>
            <hr style="border: 1px solid #ccc;">
            <div style="margin-bottom: 20px;">
              <p style="font-size: 16px; margin-bottom: 5px;"><strong>Name:</strong> ${name}</p>
              <p style="font-size: 16px; margin-bottom: 5px;"><strong>Email:</strong> ${email}</p>
              <p style="font-size: 16px; margin-bottom: 5px;"><strong>Phone:</strong> ${phone}</p>
              <p style="font-size: 16px; margin-bottom: 5px;"><strong>Position Applied For:</strong> ${position}</p>
              <p style="font-size: 16px; margin-bottom: 5px;"><strong>Years of Experience:</strong> ${experience}</p>
              <p style="font-size: 16px; margin-bottom: 5px;"><strong>Skills:</strong> ${skills}</p>
            </div>
            <div style="border-top: 1px solid #ccc; padding-top: 20px;">
              <p style="font-size: 16px;"><strong>Message:</strong></p>
              <p style="font-size: 16px; line-height: 1.6;">${message}</p>
            </div>
            <div style="margin-top: 20px;">
              <p style="font-size: 14px; color: #666;">Attached: ${cvFile.name} (CV)</p>
            </div>
          </div>
        `,
    attachments: [{
      filename: cvFile.name,
      content: fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(cvFile.path),
      contentType: cvFile.type
    }]
  };
  await transporter.sendMail(mailOptions);
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    var _fields$name, _fields$email, _fields$phone, _fields$position, _fields$experience, _fields$skills, _fields$message, _files$cv;

    const form = (0,formidable__WEBPACK_IMPORTED_MODULE_2__.formidable)({
      multiples: false
    });
    const [fields, files] = await form.parse(req);
    const name = (_fields$name = fields.name) === null || _fields$name === void 0 ? void 0 : _fields$name[0];
    const email = (_fields$email = fields.email) === null || _fields$email === void 0 ? void 0 : _fields$email[0];
    const phone = (_fields$phone = fields.phone) === null || _fields$phone === void 0 ? void 0 : _fields$phone[0];
    const position = (_fields$position = fields.position) === null || _fields$position === void 0 ? void 0 : _fields$position[0]; // Still works as a text field

    const experience = (_fields$experience = fields.experience) === null || _fields$experience === void 0 ? void 0 : _fields$experience[0];
    const skills = (_fields$skills = fields.skills) === null || _fields$skills === void 0 ? void 0 : _fields$skills[0];
    const message = (_fields$message = fields.message) === null || _fields$message === void 0 ? void 0 : _fields$message[0];
    const cvFile = (_files$cv = files.cv) === null || _files$cv === void 0 ? void 0 : _files$cv[0];

    if (!name || !email || !phone || !position || !cvFile || !cvFile.filepath) {
      console.error("Validation failed. Missing fields or file:", {
        name,
        email,
        phone,
        position,
        cvFile
      });
      return res.status(400).json({
        error: "Missing required fields or file upload"
      });
    }

    console.log("Received Submission:", {
      name,
      email,
      phone,
      position,
      experience,
      skills,
      message,
      cvFile
    });
    await sendSimpleMail({
      name,
      email,
      phone,
      position,
      experience: experience || "Not specified",
      skills: skills || "Not specified",
      message,
      cvFile: {
        name: cvFile.originalFilename,
        path: cvFile.filepath,
        type: cvFile.mimetype
      }
    });
    return res.status(200).json({
      message: "Application submitted successfully!"
    });
  } catch (error) {
    console.error("Error processing application:", error);
    return res.status(500).json({
      error: "Internal server error"
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8091));
module.exports = __webpack_exports__;

})();