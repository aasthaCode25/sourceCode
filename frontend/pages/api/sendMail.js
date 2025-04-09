import { NextApiRequest, NextApiResponse } from "next";
import { sendSimpleMail } from "../../services/sendVolunteerMail";
const handler = async (req, res) => {
  
  try {
    if (req.method === "POST") {
      // Extract data from the request body
      const { name, email, phone, qualification, availability, message } = req.body;
console.log("name",name)
      // Send email with form data
      await sendSimpleMail({
        subject: "New Volunteer Form Submission",
        to: "shyamalfred@gmail.com", // Update with your email address or use email from req.body
        name,
        phone,
        message,
        email,
        qualification,availability
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
};

export default handler;