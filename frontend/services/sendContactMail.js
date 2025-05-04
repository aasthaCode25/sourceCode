import nodemailer from "nodemailer";

export async function sendContactMail({
  firstName,
  lastName,
  email,
  phone,
  message,
}) {
  try {
    console.log("Received Contact Submission:", {
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER ,
          pass: process.env.EMAIL_PASS ,
        },
        tls: {
          rejectUnauthorized: false, // Disable SSL verification
        },
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
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}
