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
              <h1>Children</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                   Children
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
          <h2>Children</h2>

      <h3>Education:</h3>
      <p>
        "English With Fun" is a reading initiative project that distributes books to the 
        children of sex workers from years five to eight in Malwani, Malad. 
        Volunteers help conduct activities with these children through Aastha Parivaar's 
        community-based organization ‘Vishwas Sehat Mahila Mandal’ every Saturday, 
        in which children learn English through fun story-telling sessions. 
        At these classes, children also enjoy celebrating birthdays, festivals, and special occasions.
      </p>
      <p>
        Each year, Aastha Parivaar provides five educational scholarships to children 
        of CBO community members (excluding those working with the hijra and male populations) 
        for the provision of uniforms, textbooks, and other materials required to ensure 
        their attendance at a BMC school. 
        <a href="/donations" className="text-primary">
          To help sponsor a child's education, please click here.
        </a>
      </p>

      <h3>Nutrition:</h3>
      <p>
        ‘Tejasvini Mahila Mandal’, our Vashi-based CBO, has implemented the Annakshetra 
        Project, a midday meal program funded by the Ramanugraha Trust. 
        This project provides meals for 50 street children, where CBO members cook 
        and spend time engaging with the children.
      </p>

      <h3>Health:</h3>
      <p>
        Our CBOs conduct health camps for their communities, including the children 
        of sex workers. With the support of Vitamin Angels, vitamin A supplementation 
        camps are conducted each month for children under five years old. 
        These supplements promote eye health, vision, growth, and immunity.
      </p>

      <h3>OVC (Orphan & Vulnerable Children) Programme</h3>
      <p>
        Aastha Parivaar, with support from the Karnataka Health Public Trust (KHPT), 
        is implementing programs to alleviate the lives of orphans and vulnerable 
        children of sex workers. 
      </p>
      <p>
        The initiative is set to prioritize improvement in the areas of health and 
        social support. This will be achieved via implementation of social protection, 
        psycho-social support, and violence prevention in association with all our CBOs. 
      </p>
      <p>
        We aspire and aim to effect change in 3 districts - Mumbai, Pune, and Thane.
      </p>
			</div>
        </section>

       
      </div>
      <Footer2 />
    </>
  );
}

export default Health;
