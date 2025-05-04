import nodemailer from "nodemailer";
import fs from "fs";
import { formidable } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

const sendSimpleMail = async ({ name, email, phone, position, experience, skills, message, cvFile }) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Bypass certificate validation
      },
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
        attachments: [
          {
            filename: cvFile.name,
            content: fs.readFileSync(cvFile.path),
            contentType: cvFile.type,
          },
        ],
      };
    await transporter.sendMail(mailOptions);
  };

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const form = formidable({ multiples: false });
    const [fields, files] = await form.parse(req);

    const name = fields.name?.[0];
    const email = fields.email?.[0];
    const phone = fields.phone?.[0];
    const position = fields.position?.[0]; // Still works as a text field
    const experience = fields.experience?.[0];
    const skills = fields.skills?.[0];
    const message = fields.message?.[0];
    const cvFile = files.cv?.[0];

    if (!name || !email || !phone || !position || !cvFile || !cvFile.filepath) {
      console.error("Validation failed. Missing fields or file:", {
        name,
        email,
        phone,
        position,
        cvFile,
      });
      return res.status(400).json({ error: "Missing required fields or file upload" });
    }

    console.log("Received Submission:", { name, email, phone, position, experience, skills, message, cvFile });

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
        type: cvFile.mimetype,
      },
    });

    return res.status(200).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error processing application:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default handler;
