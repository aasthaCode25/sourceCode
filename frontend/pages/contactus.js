import React, { useState } from "react";
import Header3 from '../layout/header-3'
import Footer2 from '../layout/footer-2'
function Contactusform() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get("dzName"),
      lastName: formData.get("last_name"),
      email: formData.get("dzEmail"),
      phone: formData.get("dzOther[phone]"),
      message: formData.get("dzMessage"),
    };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setStatus("Error: Please enter a valid email address.");
      return;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(data.phone)) {
      setStatus("Error: Phone number must be exactly 10 digits.");
      return;
    }

    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Form submitted successfully!");
        e.target.reset();
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || "Failed to submit the form."}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("Error: An error occurred. Please try again later.");
    }
  };

  return (
    <>
        <Header3/>
    <div className="page-content bg-white"style={{paddingTop:"100px"}}>
    <div
      className="content-inner"
      style={{
        backgroundImage: "url(images/background/bg2.png)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div
            className="col-lg-6 m-b30 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <h1 className="text-center mb-4">Drop a mail!</h1>
            <form className="dlab-form dzForm" onSubmit={handleSubmit}>
              <div className="dzFormMsg"></div>
              <input
                type="hidden"
                className="form-control"
                name="dzToDo"
                value="Contact"
              />
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-group">
                    <input
                      name="dzName"
                      required
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input
                      name="last_name"
                      required
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
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
                      name="dzOther[phone]"
                      required
                      type="text"
                      className="form-control"
                      placeholder="Phone No."
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-group">
                    <textarea
                      name="dzMessage"
                      required
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                {status && (
                  <div className="col-12 mt-2">
                    <p
                      className={`text-center ${
                        status.startsWith("Error")
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {status}
                    </p>
                  </div>
                )}
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
    </div>
    <Footer2/>
    </>

  );
}

export default Contactusform;
