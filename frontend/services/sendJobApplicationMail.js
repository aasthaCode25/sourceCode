import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function sendSimpleMail({
  name,
  email,
  phone,
  position,
  experience,
  skills,
  message,
  cvFilePath, // Path to CV file for attachment
}) {
  try {
    console.log("Received Submission:", { name, email, phone, position, experience, skills, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "shyamalfred@gmail.com",
        pass: process.env.EMAIL_PASS || "ltjldqphmnsexyna",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "shyamalfred@gmail.com",
      to: process.env.RECIPIENT_EMAIL || "shyamalfred@gmail.com",
      subject: "New Job Application Submission",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h1>New Job Application</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>Skills:</strong> ${skills}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    // Attach CV if it exists
    if (cvFilePath) {
      mailOptions.attachments = [
        {
          filename: path.basename(cvFilePath),
          path: cvFilePath, // Path to CV file
        },
      ];
    }

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    
    // Optionally delete the file after sending (ensure you have proper cleanup)
    fs.unlink(cvFilePath, (err) => {
      if (err) console.error("Error deleting CV file:", err);
    });

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}
