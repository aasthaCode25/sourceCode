import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

function VolunteerForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Match input names with formData.get()
    const name = formData.get("dzName");
    const email = formData.get("dzEmail");
    const phone = formData.get("phone");
    const qualification = formData.get("dzOther[special_skills]");
    const availability = formData.get("dzOther[availability]");
    const message = formData.get("dzMessage");

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          name, 
          email, 
          phone, 
          qualification, 
          availability, 
          message 
        }),
      });
console.log(response)
      if (response.ok) {
        console.log("Form submitted successfully!");
        e.target.reset();
      } else {
        console.error("Failed to submit form");
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div 
      className="content-inner" 
      // style={{
      //   backgroundImage: "url(images/background/bg2.png)",
      //   backgroundRepeat: "no-repeat"
      // }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center mx-auto align-items-center">
          {/* <div className="col-lg-6 m-b30 quote-media">
            <div className="dlab-media style-1 move-1">    
              <img src="images/team/large/pic1.jpg" alt="Volunteer 1" />
            </div>
            <div className="dlab-media style-2 move-2">    
              <img src="images/team/large/pic2.jpg" alt="Volunteer 2" />
            </div>
            <div className="dlab-media style-3 move-3">    
              <img src="images/team/large/pic3.jpg" alt="Volunteer 3" />
            </div>
          </div> */}
          <div className="col-lg-6 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <form className="dlab-form dzForm" onSubmit={handleSubmit}>
              <div className="dzFormMsg"></div>
              <input type="hidden" name="dzToDo" value="Contact" />
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-group">
                    <input 
                      name="dzName" 
                      required 
                      type="text" 
                      className="form-control"
                      placeholder="Full Name" 
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input 
                      name="dzEmail" 
                      required 
                      type="email" 
                      className="form-control" 
                      placeholder="Email Address" 
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input 
                      name="phone" 
                      required 
                      type="tel" 
                      className="form-control"
                      placeholder="Phone (10 digits)" 
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input 
                      name="dzOther[special_skills]" 
                      required 
                      type="text" 
                      className="form-control" 
                      placeholder="Special Skills" 
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input 
                      name="dzOther[availability]" 
                      required 
                      type="text" 
                      className="form-control" 
                      placeholder="Availability" 
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-group">
                    <textarea 
                      name="dzMessage" 
                      required 
                      className="form-control" 
                      placeholder="Your Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                {/* Add ReCAPTCHA if you have a site key */}
                {/* <div className="col-sm-12">
                  <ReCAPTCHA
                    sitekey="your-recaptcha-site-key"
                    onChange={onChange}
                  />
                </div> */}
                <div className="col-sm-12 mt-2">
                  <button 
                    name="submit" 
                    type="submit" 
                    value="Submit" 
                    className="btn btn-primary gradient border-0 rounded-xl"
                  >
                    Submit Now
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

export default VolunteerForm;