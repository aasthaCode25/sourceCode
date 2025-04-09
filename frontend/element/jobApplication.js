import React, { useState } from "react";

function JobApplicationForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Extract form data from the event target (form)
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const position = e.target.position.value; // This remains the same
    const experience = e.target.experience.value;
    const skills = e.target.skills.value;
    const message = e.target.message.value;
    const cvFile = e.target.cv.files[0]; // Get the CV file

    // Append form data to FormData object
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position", position);
    formData.append("experience", experience);
    formData.append("skills", skills);
    formData.append("message", message);

    // Append the CV file
    if (cvFile) {
      formData.append("cv", cvFile); // Use "cv" as the field name for file uploads
    } else {
      setStatus("Please upload your CV.");
      return;
    }

    // Log the FormData for debugging
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      setStatus("Submitting..."); // Set status to "Submitting..."
      // Send the FormData object via fetch to your API route
      const response = await fetch("/api/jobSubmission", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("Application submitted successfully!");
        e.target.reset(); // Reset the form after successful submission
      } else {
        const errorData = await response.json();
        setStatus(`Submission failed: ${errorData.error || 'An error occurred'}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="content-inner">
      <div className="container">
        <div className="row d-flex justify-content-center mx-auto align-items-center">
          <div className="col-lg-8 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <form className="dlab-form dzForm" onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="dzFormMsg"></div>
              <input type="hidden" name="dzToDo" value="JobApplication" />

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      name="name"
                      required
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      name="email"
                      required
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      name="phone"
                      required
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number (10 digits)"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      name="position"
                      required
                      type="text"
                      className="form-control"
                      placeholder="Position Applied For"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      name="experience"
                      required
                      type="text"
                      className="form-control"
                      placeholder="Years of Experience"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      name="skills"
                      required
                      type="text"
                      className="form-control"
                      placeholder="Key Skills (comma separated)"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-group">
                    <textarea
                      name="message"
                      required
                      className="form-control"
                      placeholder="Cover Letter"
                      rows="5"
                    ></textarea>
                  </div>
                </div>

                {/* CV Upload Field */}
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                {status && (
                  <div className="col-12 mt-2">
                    <p className={`text-center ${status.startsWith("Error") ? "text-danger" : "text-success"}`}>
                      {status}
                    </p>
                  </div>
                )}

                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary gradient w-100 rounded-xl py-3"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationForm;