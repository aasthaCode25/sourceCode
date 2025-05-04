import { sendContactMail } from "../../services/sendContactMail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, email, phone, message } = req.body;

      await sendContactMail({
        firstName,
        lastName,
        email,
        phone,
        message,
      });

      return res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
