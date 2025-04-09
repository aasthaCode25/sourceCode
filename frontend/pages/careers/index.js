import Link from "next/link";
import { useState, useEffect } from "react";

import Header from "../../layout/header-3";
import Footer2 from "../../layout/footer-2";
import { fetchStrapiData } from "../../lib/fetchStrapiData";
function Careers({jobs}) {
  const [isOpen, setOpen] = useState(false);
 
 
 
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/cover.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Careers</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                   Careers
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
      
        <section
          className="content-inner-2 wow m-5 fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
   
 <div className="text-dark px-2 py-1 border border-2 rounded text-center" style={{maxWidth:"130px"}}>
    We're hiring
 </div>
 <h2 className="fw-bold fs-1 text-dark">
  Be part of our mission
 </h2>
 <div className="row">
 {
  jobs.length > 0 ? (
    jobs.map((job) => (
      <div className="col-12 border border-top-5 border-bottom-5 border-right-0 border-left-0 p-3" key={job?.jobId}>
        <h4 className="text-dark fs-2 fw-bold">{job?.Role}</h4>
        <p className="text-dark fw-500">{job?.shortDescription}</p>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="d-flex flex-column flex-md-row mb-4" style={{ gap: "10px" }}>
            <span className="text-dark px-2 py-1 mr-2 border border-2 rounded text-center">
              Full time
            </span>
            <span className="text-dark px-2 py-1 border border-2 rounded text-center mr-2">
              On Site
            </span>
            <a href={job.projectDescription
.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
   <span className="text-dark px-2 py-1 border border-2 rounded text-center">
              Project Description
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="ml-2"
                viewBox="0 0 16 16"
              >
                <path d="M.5 15.5a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v-2a.5.5 0 0 1-.5-.5H1a.5.5 0 0 1-.5.5v2zm8-13v7h3l-4 4-4-4h3V2h2z"/>
              </svg>
            </span>
</a>
           
          </div>
          <div className="h-100">
            <Link href={`/careers/${job?.jobId}/apply`}>
              <button type="button" className="btn btn-dark">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="col-12 text-center p-3">
      <h4 className="text-dark fs-2 fw-bold">No Job Openings</h4>
      <p className="text-dark fw-500">There are no job openings as of now. Please check back later!</p>
    </div>
  )
}

 </div>
            </div>
        </section>

       
      </div>
      <Footer2 />
    </>
  );
}

export async function getServerSideProps() {
  const jobs = await fetchStrapiData("job-postings?populate=*");
  return {
    props: {
      jobs, 
    },
  };
}
export default Careers;
