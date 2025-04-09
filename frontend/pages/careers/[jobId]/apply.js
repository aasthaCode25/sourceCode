"use client"
import React from 'react'
import Header3 from '../../../layout/header-3'
import Footer2 from '../../../layout/footer-2'
import VolunteerForm from '../../../element/jobApplication'
const Volunteer = () => {
  return (
    <>
    <Header3/>
    <div className="page-content bg-white">
    <section className="content-inner-2">
    <div className="container">
   
    <div className="row">
        <div className="col-md-12">
        <h2 className="display-4 mb-4 fw-bold d-flex justify-content-center" style={{fontWeight:"bold"}}>Job Application</h2>
          {/* <p className="lead">
          We welcome all kinds of volunteers and would love your support! From offering professional skills like design and business management, to teaching our English With Fun classes to children living in slums, there are many ways to get involved.
          </p> */}
          {/* <p>
            These topics include (but are not limited to) counseling, resource mobilization, community mobilization, accounting, management, and communication.
          </p> */}
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          {/* <h3 className='text-center'>Interested in Volunteering?</h3> */}
          <p className='text-center' style={{fontSize: "20px",fontWeight:"bold"}}>Drops us a mail</p>
          <VolunteerForm/>
          
        </div>
      </div>
      
    </div>
    </section>
    </div>
    <Footer2/>
    </>
 
 
  )
}

export default Volunteer