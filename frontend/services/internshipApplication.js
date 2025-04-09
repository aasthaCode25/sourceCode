import nodemailer from "nodemailer";

export async function sendSimpleMail({
  name,
  email,
  phone,
  qualification,
  duration,
  internshipType,
  message,
  universityDetails,
  passingYear,
  countryOfOrigin,
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
      countryOfOrigin,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "shyamalfred@gmail.com", // Use environment variable for sender's email
        pass: process.env.EMAIL_PASS || "ltjldqphmnsexyna", // Use environment variable for password
      },
      tls: {
        rejectUnauthorized: false, // Disable SSL verification
      },
    });

   const sendSimpleMail = async ({ name, email, phone, position, experience, skills, message, cvFile }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.EMAIL_USER || "shyamalfred@gmail.com",
      pass: process.env.EMAIL_PASS || "ltjldqphmnsexyna",
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER || "shyamalfred@gmail.com",
    to: process.env.RECIPIENT_EMAIL || "shyamalfred@gmail.com",
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
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}
