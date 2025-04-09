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
import Head from 'next/head';
function Health() {
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
              <h1>Alternative Livelihoods</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Alternative Livelihoods
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
          <div>
      <Head>
        <title>HIV Prevention Programs</title>
        <meta name="description" content="Learn about HIV prevention programs, including the Targeted Intervention Project, FHI 360-USAID LINKAGES project, and healthcare support services." />
      </Head>
      
      <h1>HIV Prevention Programs</h1>
      
      <h2>Introduction</h2>
      <p>HIV prevention programs are crucial in reducing the spread of HIV/AIDS. Various initiatives have been implemented globally and locally to target high-risk groups and vulnerable populations.</p>
      
      <h2>Targeted Intervention (TI) Project</h2>
      <p>The Targeted Intervention (TI) Project has been running since 2014, focusing on HIV prevention for residential bar-based female sex workers in the Malad area of Mumbai and brothel-based sex workers in South Mumbai. This project is funded by the Mumbai District AIDS Control Society. Another TI is implemented in Dombivili, Thane District for bar girls, funded by the Maharashtra State AIDS Control Society. The project has helped approximately 4,500 key populations (KPs) live healthier, HIV-free lives.</p>
      
      <h2>FHI 360-USAID Funded LINKAGES Project</h2>
      <p>Aastha Parivaar implemented the FHI 360-USAID funded LINKAGES project from 2016 to 2018. As a lead agency, Aastha Parivaar worked with female sex workers in three districts of Maharashtra and provided technical assistance to targeted intervention NGOs in Mumbai, Thane, and Pune. The project aimed to achieve the 90-90-90 goal through technical assistance, working closely with FHI 360 LINKAGES team, MSACS, MDACS, and district authorities.</p>
      
      <h2>Healthcare Support</h2>
      <p>Aastha Parivaar implemented a Continuum of Care (CoC) system designed for sex workers. The CoC program includes:</p>
      <ul>
        <li><strong>Referral Network and Services</strong>: Positive prevention counseling, monthly screening for opportunistic infections (OIs), clinical care, nutrition support, PLHIV support group membership, and accompanied referrals for ART services at government centers.</li>
        <li><strong>Communication Materials</strong>: Need-based materials were developed to address stigma and discrimination.</li>
      </ul>
      
      <h2>SRH and HIV Services</h2>
      <p>With support from the Family Planning Association of India and FHI 360, under the Aastha project, Aastha Parivaar provided services such as:</p>
      <ul>
        <li><strong>Motivating sex workers to use ICTC services</strong></li>
        <li><strong> STI diagnosis and treatment</strong></li>
        <li><strong>FP-HIV integrated services for sex workers</strong></li>
        <li><strong>Sessions on gender and sexuality and contraceptive updates</strong></li>
        <li><strong>Providing information on dual protection and counseling</strong></li>
        <li><strong>Training for FP-HIV communication materials for peer educators and outreach workers</strong></li>
      </ul>
      
      <h2>General Health Camps and Services</h2>
      <p>Community-based organizations, in collaboration with partner NGOs, offer various health services to enhance community well-being, focusing on key populations. These include:</p>
      <ul>
        <li><strong>General Health Camps</strong></li>
        <li><strong>Cervical Cancer Detection Camps</strong></li>
        <li><strong>Eye Health Camps</strong></li>
        <li><strong>Vitamin Supplementation Camps for Children</strong> (supported by Vitamin Angels)</li>
        <li><strong>TB Projects focused on awareness, prevention, and treatment</strong></li>
      </ul>
      
    </div>
			</div>
        </section>

       
      </div>
      <Footer2 />
    </>
  );
}

export default Health;
