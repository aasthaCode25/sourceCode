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
              <h1>Hiv-Aids</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                   Hiv-Aids
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
          <h2>About HIV/AIDS</h2>
      <p>
        HIV stands for Human Immunodeficiency Virus. After entering the human body, it 
        gradually destroys the immune system.
      </p>
      <p>
        AIDS stands for Acquired Immune Deficiency Syndrome. It is the later stage of 
        infection with HIV when a group of symptoms appear as the immune system becomes 
        very weak. It can take around 8-10 years from the time of HIV infection to the 
        stage of AIDS. HIV infected people can lead symptom-free and productive lives 
        for years.
      </p>

      <h3>Transmission of HIV</h3>
      <p>
        HIV can be transmitted through:
      </p>
      <ul>
        <li>Unprotected sex with an HIV infected person</li>
        <li>Transfusion of HIV infected blood or blood products</li>
        <li>Sharing of needles contaminated with HIV infected blood</li>
        <li>From an HIV infected mother to her baby during pregnancy, childbirth, or breastfeeding</li>
      </ul>

      <h3>HIV is Not Transmitted Through Casual Contact</h3>
      <p>
        HIV is found only in body fluids, so one cannot get HIV through ordinary social contact 
        like shaking someone’s hand, hugging, etc. While HIV is found in saliva, sharing cups or 
        utensils has never been shown to transmit HIV.
      </p>
      <p>
        Source: <a href="http://www.indiahivinfo.naco.gov.in/naco/content/faq-hivaids">Click here for more info.</a>
      </p>
			</div>
        </section>

       
      </div>
      <Footer2 />
    </>
  );
}

export default HivAids;
