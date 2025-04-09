import React from 'react'
import Header3 from '../layout/header-3'
import Footer2 from '../layout/footer-2'
import InternshipForm from "../element/internshipForm"
const Internships = () => {
  return (
    <>
    <Header3/>
    <div className="page-content bg-white">
    <section className="content-inner-2">
    <div className="container">
   
    <div className="row">
        <div className="col-md-12 py-5">
        <h2 className="display-4 mb-4 fw-bold" style={{fontWeight:"bold"}}>Internships at Aastha Parivaar</h2>
          <p className="lead">
            Aastha Parivaar offers engaging unpaid internships (for university credit or otherwise) to students interested in learning about the unique issues of the sex worker community. Regardless of your area of study, you have the opportunity to engage in meaningful fieldwork and build your skill sets in various topics.
          </p>
          <p>
            These topics include (but are not limited to) counseling, resource mobilization, community mobilization, accounting, management, and communication.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h3 className='text-center'>Interested in Interning?</h3>
          <p  className="text-center" style={{fontSize: "20px",fontWeight:"bold"}}>Drops us a mail</p>
          <InternshipForm/>
         
        </div>
      </div>
      
    </div>
    </section>
    </div>
    <Footer2/>
    </>
 
 
  )
}

export default Internships