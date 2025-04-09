import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/about/our-model.png"  alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">Our Structure</h6>
                             
                          </div>
                          <p>Our organizational model’s uniqueness, success and sustainability lies in the empowerment of the community to initiate and manage its own interventions. The sex workers themselves assume an active role in leading their community’s development on every level.

Aastha Parivaar comprises of 9 community based organisations (CBO’s) throughout Mumbai and Thane. These CBOs facilitate official self-help groups of sex workers, known as Aastha Gats. The Gats are the bases providing support, information, services and crises response to the community.

Leaders of Aastha Gats elect the CBO’s 7 member Managing Committee. These 9 Managing Committees from each CBO form the 63  member General Body of Aastha Parivaar; the federation.

Additionally, each CBO elects one representative to from Aastha Parivaar’s 9-member Governing Body, from which the General Body votes for its 7-member Managing Committee. The leaders of these communities are supported by a Secretariat of professionals that functions as the administrative body of Aastha Parivaar.

These committees and bodies meet regularly for management, vision and leadership capacity building; with elections held every three years.

Due to the success of our community-led approach, Aastha Parivaar has become a model for community led intervention programmes and sex worker advocacy groups around the world.</p>
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
  
  export default AboutUs;