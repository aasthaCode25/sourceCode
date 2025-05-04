import nodemailer from "nodemailer";

export async function sendSimpleMail({ name, email, message, phone, availability, qualification }) {
  try {
    console.log("xxxxxxx", name)
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
         user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Disable SSL verification
      },
    });

    var mailOptions = {
       from:  `"Volunteer Application- Aasthaparivaar" <${process.env.EMAIL_USER }>`,
      to: process.env.RECIPIENT_EMAIL, // Change this to your recipient's email address
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
