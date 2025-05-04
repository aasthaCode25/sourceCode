import React, { useState } from "react";



function InternshipForm() {
  const [status, setStatus] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    // Extracting form data
    const name = formData.get("dzName");
    const email = formData.get("dzEmail");
    const phone = formData.get("dzOther[phone]");
    const qualification = formData.get("dzOther[special_skills]");
    const duration = formData.get("dzOther[Duration]");
    const internshipType = formData.get("dzOther[choose_service]");
    const message = formData.get("dzMessage");
    const universityDetails = formData.get("dzOther[university_details]");
    const passingYear = formData.get("dzOther[college_passing_year]");
    const countryOfOrigin = formData.get("dzOther[country]");
  
    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    try {
      setStatus("Submitting...");
      // Sending data to API
      const response = await fetch("/api/internshipApplicationForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        }),
      });
  
      if (response.ok) {
        setStatus("Application submitted successfully!");
        e.target.reset(); // Reset the form on successful submission
      } else {
        const errorData = await response.json();
        setStatus(`Submission failed: ${errorData.error || 'An error occurred'}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="content-inner">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div
            className="col-lg-6 mx-auto m-b30 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <form className="dlab-form dzForm" onSubmit={handleSubmit}>
              <div className="dzFormMsg"></div>
              <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-group">
                    <input name="dzName" required type="text" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input name="dzEmail" required type="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input name="dzOther[phone]" required type="text" className="form-control" placeholder="Phone No." />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input name="dzOther[special_skills]" required type="text" className="form-control" placeholder="Special Skills" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input name="dzOther[Duration]" required type="text" className="form-control" placeholder="Duration" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <select name="dzOther[choose_service]" required className="form-control">
                      <option value="" disabled selected>Type of Internship</option>
                      <option value="Social Work">Social Work</option>
                      <option value="Content Writing">Content Writing</option>
                      <option value="Accounting">Accounting</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-group">
                    <textarea name="dzMessage" required className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-group">
                    <input name="dzOther[university_details]" required type="text" className="form-control" placeholder="College/University Details"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input name="dzOther[college_passing_year]" required type="text" className="form-control" placeholder="Passing Year"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input name="dzOther[country]" required type="text" className="form-control" placeholder="Country of Origin"/>
                  </div>
                </div>
                {/* Submit Button */}
                {status && (
                  <div className="col-12 mt-2">
                    <p className={`text-center ${status.startsWith("Error") ? "text-danger" : "text-success"}`}>
                      {status}
                    </p>
                  </div>
                )}
                <div className="col-sm-12 mt-2">
                  <button name="submit" type="submit" value="Submit Now" className="btn btn-primary gradient border-0 rounded-xl">Submit Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipForm;

