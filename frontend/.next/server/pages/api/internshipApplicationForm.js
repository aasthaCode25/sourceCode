"use strict";
(() => {
var exports = {};
exports.id = 450;
exports.ids = [450];
exports.modules = {

/***/ 4537:
/***/ ((module) => {

module.exports = require("next");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 6615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ internshipApplicationForm)
});

// EXTERNAL MODULE: external "next"
var external_next_ = __webpack_require__(4537);
// EXTERNAL MODULE: external "nodemailer"
var external_nodemailer_ = __webpack_require__(5184);
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_);
;// CONCATENATED MODULE: ./services/internshipApplication.js

async function sendSimpleMail({
  name,
  email,
  phone,
  qualification,
  duration,
  internshipType,
  message,
  universityDetails,
  passingYear,
  countryOfOrigin
}) {
  try {
    console.log("Received Submission:", {
      name,
      email,
      phone,
      qualification,
      duration,
      internshipType,
      message,
      universityDetails,
      passingYear,
      countryOfOrigin
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
      from: `"Intership Application- Aasthaparivaar" <${process.env.EMAIL_USER || "shyamalfred@gmail.com"}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Internship Application from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background-color: #f5f5f5;">
          <h1 style="color: #333; text-align: center;">New Internship Application</h1>
          <hr style="border: 1px solid #ccc;">
          <div style="margin-bottom: 20px;">
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Phone:</strong> ${phone}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Qualification:</strong> ${qualification}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Duration:</strong> ${duration}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Internship Type:</strong> ${internshipType}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>University Details:</strong> ${universityDetails}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Passing Year:</strong> ${passingYear}</p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Country of Origin:</strong> ${countryOfOrigin}</p>
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
;// CONCATENATED MODULE: ./pages/api/internshipApplicationForm.js



const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      // Extract data from the request body
      const {
        name,
        email,
        phone,
        qualification,
        duration,
        // Added duration
        internshipType,
        // Added internship type
        message,
        universityDetails,
        // Added university details
        passingYear,
        // Added passing year
        countryOfOrigin // Added country of origin

      } = req.body;
      console.log("Received Submission:", {
        name,
        email,
        phone,
        qualification,
        duration,
        internshipType,
        message,
        universityDetails,
        passingYear,
        countryOfOrigin
      }); // Send email with form data

      await sendSimpleMail({
        subject: "New Internship Form Submission",
        to: "shyamalfred@gmail.com",
        // Update with your email address or use email from req.body
        name,
        phone,
        message,
        email,
        qualification,
        duration,
        // Pass duration to the mail function
        internshipType,
        // Pass internship type to the mail function
        universityDetails,
        // Pass university details to the mail function
        passingYear,
        // Pass passing year to the mail function
        countryOfOrigin // Pass country of origin to the mail function

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

/* harmony default export */ const internshipApplicationForm = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6615));
module.exports = __webpack_exports__;

})();