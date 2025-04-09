import Link from 'next/link';

function OurHistory() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="Logo.jpg"  alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">Our History</h6>
                              <h2 className="title">Where it all started</h2>
                          </div>
                          <p>Aastha Parivaar was officially registered in 2009, born from the Bill and Melinda Gates Foundation AIDS Initiative, FHI 360. From the project’s inception in 2001, Aastha Parivaar has since become one of the largest umbrella organizations representing the various sex worker communities in Mumbai, Pune and Thane, including street-based, brothel-based, home-based, male and Hijra/transgender sex workers.

Aastha Parivaar provides financial and administrative support to 13 registered community-based organizations (CBOs) which operate at the field level to enable different sex worker populations to voice and address their individual needs, increasing the capacity of the sex worker community. The issues addressed by CBOs include family planning, HIV intervention, health, human rights, rapid crisis intervention, legal literacy, alternative livelihoods, and education for the children of sex workers.

By utilizing CBOs, our model is extremely unique, sustainable and successful in the sex worker community, leading individuals to empowerment and self intervention. The sex workers themselves take an active role in leading their community’s development through their own elected governing board and managing committees, which are in turn supported by Aastha Parivaar’s secretariat of professionals.

Learn more about our model here.

As a result of the effectiveness of our programs, Aastha Parivaar has also become a resource centre and demonstrative model for other NGOs and programs both nationally and internationally.

Learn more about our capacity building programs here.

We envision a community of sex workers that are healthy, united, and empowered. Each day we strive to ensure our sex worker communities live with self-respect, dignity and pride, free from the discrimination and stigmatization that often accompanies their work.</p>
                          {/* <img src="images/sign.png" alt=""/>
                          <h4 className="m-b30">CEO Jhone Doe</h4>
                         <Link href="about-us-1"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link>  */}
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default OurHistory;