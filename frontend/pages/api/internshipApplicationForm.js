import { NextApiRequest, NextApiResponse } from "next";
import { sendSimpleMail } from "../../services/internshipApplication";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      // Extract data from the request body
      const {
        name,
        email,
        phone,
        qualification,
        duration, // Added duration
        internshipType, // Added internship type
        message,
        universityDetails, // Added university details
        passingYear, // Added passing year
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
      });

      // Send email with form data
      await sendSimpleMail({
        subject: "New Internship Form Submission",
        to: "shyamalfred@gmail.com", // Update with your email address or use email from req.body
        name,
        phone,
        message,
        email,
        qualification,
        duration, // Pass duration to the mail function
        internshipType, // Pass internship type to the mail function
        universityDetails, // Pass university details to the mail function
        passingYear, // Pass passing year to the mail function
        countryOfOrigin // Pass country of origin to the mail function
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
