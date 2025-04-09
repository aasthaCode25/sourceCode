import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ClientSlider from "../component/clientSlider";
import Blog2 from "../element/blog-2";
import Counter2 from "../element/counter2";
import About from "../element/pageaboutsus"
import Header from "../layout/header-3";
import Footer2 from "./../layout/footer-2";
import Testimonial2 from "../element/testimonial-2";
import OurFeatures from "../element/our-features"
import OurFeatures3 from "../element/our-features-3"
// import OurFeatures2 from "../element/our-features-2"
import AboutUs from "../element/aboutUs";
import AboutUs_3 from "../element/aboutUs-3"
import AllServices2 from "../element/cbos"
import AllServices from "../element/all-services"
import AllServices3 from "../element/all-services-3"

function  HivAids() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>HIV Intervention Work</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  HIV Intervention Work
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About --> */}
        {/* <section className="content-inner-2">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                OUR STEPS
              </h6>
              <h2 className="title">How It’s Work</h2>
            </div>
            <div
              className="row about-wraper-3 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a className="icon-cell text-primary"
                    >
                      <i className="flaticon-sketch"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Designing</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-vector"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Development</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-startup"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Launching</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- About us --> */}
 

        {/* <!-- Video --> */}
        <section
          className="content-inner-2 wow m-5 fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
          <h2>HIV Intervention Work</h2>
      <p>
        To achieve its goals of preventing the spread of HIV, Aastha Parivaar spearheads 
        a range of initiatives at every level of the community.
      </p>
      <p>
        These initiatives are carried out by our 13 community-based organizations (CBOs) 
        based throughout Mumbai, Thane, and Pune in conjunction with partner organizations 
        and projects. Through these partnerships, we aid our CBOs in the running of 
        monthly health camps, 6-monthly HIV testing camps, and caring for members of 
        our key population (KP) who have tested HIV positive.
      </p>

      <h3>Key Interventions:</h3>
      <ul>
        <li>
          **FHI 360- USAID funded LINKAGES project (Initiation: 2015, Status: Ongoing)**: 
          Aastha Parivaar is currently implementing the FHI 360- USAID funded LINKAGES 
          project. This project provides technical assistance to Targeted Intervention 
          NGOs in Mumbai, Thane, and Pune working with key populations (KPs – female sex workers). 
          Aastha Parivaar works closely with the FHI 360 Linkages team and the local 
          stakeholders including MSACS, MDACS, and the district authorities to achieve 
          the LINKAGES goals.
        </li>
        <li>
          **The Targeted Intervention (TI) Project (Initiation: 2013, Status: Ongoing)**: 
          This project has been running for five years and has implemented HIV prevention 
          for residential bar-based female sex workers in Malad, Mumbai, and Dombivili, Thane. 
          So far, the project has helped 2500 KP live healthier, HIV-free lives.
        </li>
        <li>
          **Continuum of Care (CoC):** Aastha Parivaar implemented the Continuum of Care 
          (CoC) system, specifically designed to suit the needs of sex workers. 
          The CoC program comprised of a referral network and services; including positive 
          prevention counseling, monthly screening for opportunistic infections, clinical care, 
          nutrition support, PLHIV support group membership, and accompanied referral 
          through ‘Buddies’ for Antiretroviral Therapy (ART) services at Government Centers.
        </li>
        <li>
          **FPAI and FHI360:** With the support of the Family Planning Association of India 
          and FHI 360, Aastha Parivaar has provided services including: 
          <ul>
            <li>Motivating sex workers to undergo ICTC, STI diagnosis, and treatment</li>
            <li>FP-HIV integrated service for sex workers</li>
            <li>Conducted sessions on gender and sexuality and contraceptive updates</li>
            <li>Educated KP on dual protection and counseling</li>
            <li>Conducted training on FP – HIV communication material for Peer Educators and Outreach workers</li>
          </ul>
        </li>
        <li>
          **Capacity Building Unit for CBO (CBU for CBO) in Mumbai:** 
          Provided capacity building support to CBOs of FSWs, MSM/MSWs, and TGs formed 
          under the MDACS TI programs in Mumbai. The objective was to support CBOs to 
          increase their HIV prevention capacity through providing training and aid on 
          effective outreach, health camps, and education.
        </li>
      </ul>

      <h3>Support for People Living With HIV (PLHIV)</h3>
      <p>
        Each of Aastha Parivaar’s CBOs has at least two support groups for people living 
        with HIV, totaling 27 groups with 289 members. Groups meet each month and 
        conduct exposure visits to various organizations that provide support in areas 
        including nutrition, finance, and legal advice. 
      </p>
      <p>
        This exposure to the experiences of HIV-positive sex workers allows the CBOs 
        to gain a better understanding of the clinical needs of these individuals.
      </p>
      <p>
        Members of the community also have the opportunity for empowerment by 
        nominating for positions such as Group Leader. These individuals are then 
        responsible for the planning and implementation of support groups, mentored 
        by professional Project Counsellors.
      </p>
      <p>
        Aastha Parivaar also supports five HIV-positive transgender/male sex workers 
        at two CBOs (Triveni Samaj Vikas Kendra and GAURAV). 
        Financial support is offered to these individuals for basic living expenses 
        including food, transport, medical costs, and shelter.
      </p>
			</div>
        </section>

       
      </div>
      <Footer2 />
    </>
  );
}

export default HivAids;
