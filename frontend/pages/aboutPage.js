import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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
import OurHistory from "../element/ourHistory";
import ReactMarkdown from 'react-markdown';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Image from "next/image";
function AboutPage() {
  const [isOpen, setOpen] = useState(false);
  const [update, setUpdate] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  
  
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
              <h1>About Us</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
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
        <About/>
<AboutUs/>
{/* <OurHistory/> */}
{/* <AboutUs_3/>  */}
{/* <AllServices/> */}
<section>
<div className="container">
  <div className="d-flex w-100 justify-content-center my-5 align-items-center flex-column " style={{gap:"30px"}}>
  <div className="section-head style-3 text-center">
					<h2 className="title">What is Secretatriate?</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
    <div className="row d-flex justify-content-between align-items-center w-100 ">
<div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-5">
<Image src="https://res.cloudinary.com/dohfnsylp/image/upload/v1742277953/AP_Secretariat_9fd1bd6625.png" alt="Example" width={500} height={300} />

</div>
<div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-5">
<Image src="https://res.cloudinary.com/dohfnsylp/image/upload/v1742277953/AP_Secretariat_1_af4cad7de1.png" alt="Example" width={500} height={300} />
</div>
    </div>
    </div> 
  </div> 
</section>
<section>
<div className="container">
  <div className="d-flex w-100 justify-content-center my-5 align-items-center flex-column " style={{gap:"30px"}}>
  <div className="section-head style-3 text-center">
					<h2 className="title">What is Federation?</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
    <div className="row d-flex justify-content-between align-items-center w-100 ">
<div className="col-12 d-flex justify-content-center align-items-center  ">
<Image src="https://res.cloudinary.com/dohfnsylp/image/upload/v1742279165/AP_Secretariat_2_cf5ffa6235.png" alt="Example" width={500} height={300} />

</div>

    </div>
    </div> 
  </div> 
</section>
<section>
<div className="container">
  <div className="d-flex w-100 justify-content-center my-5 align-items-center">
  <div className="section-head style-3 text-center">
					<h2 className="title">Our Offices</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
  </div>

<div class="card-group d-flex ">
  <div class="card mx-2">
    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
    <div class="card-body d-flex flex-column  bg-light">
    <h5 class="card-title text-dark mb-3">Malad Office </h5>
    <div className="d-flex align-items-center">
    <i class="fa-solid fa-location-dot"></i>
    <p class="card-text text-dark mb-3"> Aastha Parivaar - 181, Squatters Colony 2, Behind Sanghvi Jewelers, Gate No.7, Malvani, Malad (W), Mumbai- 400 095</p></div> 
      
      {/* <p class="card-text mb-3"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>
  <div class="card mx-2">
    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
    <div class="card-body bg-light">
      <h5 class="card-title text-dark mb-3">Grant Road office - </h5>
      <p class="card-text text-dark mb-3">Aastha Parivaar - 102, Ground Floor, 391 E, LTT market, Maulana Shaukat Ali Road, Grant Road Market, Grant Road (E), Mumbai- 400 007</p>
      {/* <p class="card-text"><small class="text-muted"></small></p> */}
    </div>
  </div>
  <div class="card mx-2">
    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
    <div class="card-body bg-light">
    <h5 class="card-title text-dark mb-3">Dombivili office</h5>
      <p class="card-text text-dark mb-3">Aastha Parivaar - 302, 3rd Floor, Gomati Building, Rajaji Path Road, Near Sathe Vidyalaya, Dombivali (E), Thane, Maharashtra - 421 201.</p>
    
    </div>
  </div>
</div>
</div>
</section>

<section>
<div className="container">
  <div className="d-flex w-100 justify-content-center my-5 align-items-center flex-column " style={{gap:"10px"}}>
  <div className="section-head style-3 text-center">
					<h2 className="title">Our Team</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
    <div className="row d-flex" >
    <div className="col-12 col-md-6 mb-5"><img src="https://res.cloudinary.com/dohfnsylp/image/upload/v1742278736/AP_Meet_the_team_Insta_458b1ee8d2.png" alt="teamImage1"/></div>
     
      <div className="col-12 col-md-6 mb-5"><img src="https://res.cloudinary.com/dohfnsylp/image/upload/v1742278737/AP_Meet_the_team_Insta_1_48bdb1abc4.png" alt="teamImage1"/></div>
      </div>
      <div className="row d-flex" >
      <div className="col-12 col-md-6 mb-5"><img src="https://res.cloudinary.com/dohfnsylp/image/upload/v1742278736/AP_Meet_the_team_Insta_2_3ce8679386.png" alt="teamImage1"/></div>
      <div className="col-12 col-md-6 mb-5"><img src="https://res.cloudinary.com/dohfnsylp/image/upload/v1742278737/AP_Meet_the_team_Insta_3_8cf5e6ffba.png" alt="teamImage1"/></div>
</div>
  
    </div></div>
  </section>

{/* <AllServices3/> */}
        {/* <!-- Counters --> */}
        <Counter2 />

        {/* <!-- Video --> */}
        <section
      className="content-inner-2 wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.2s"
    >
      <div className="container">
        <div className="row">
        <div className="section-head w-100 style-3 text-center d-flex flex-column justify-content-center align-items-center">
					<h2 className="title">Who we are</h2>
					<div className="dlab-separator style-2 bg-primary text-center"></div>
				</div>
          <div className="col-lg-12">
            <div className="video-bx style-1 overlay-black-light">
              <div className="video-btn" style={{ display: isPlaying ? 'none' : 'block' }}>
                <a href="#" className="popup-youtube">
                  <i className="flaticon-play"></i>
                </a>
                <h2 className="title">Watch US</h2>
              </div>
              <video
                controls
                width="100%"
                height="auto"
                ref={videoRef}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoPause}
              >
                <source
                  src="https://res.cloudinary.com/dohfnsylp/video/upload/v1742208755/Aastha_Function_1_2cfe659651.mov"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* <!-- Testimonials --> */}
        {/* <Testimonial2/> */}
        {/*  */}

        {/* <!-- Blog --> */}
        <Blog2 />

{/* <div className="content-inner-3 ">
  <div className="container">
  <Carousel style={{
  '--bs-carousel-control-color': '#000',
  '--bs-carousel-control-icon-width': '20px',
  '--bs-carousel-control-icon-height': '20px'
}}>
      {videos.map((video) => (
        <Carousel.Item key={video.id}>
          <div className="d-flex justify-content-center">
            <ReactPlayer url={video.url} controls width="80%" />
          </div>
          <Carousel.Caption>
            <h5>{video.title}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
</div> */}
        {/* <!-- Clients Logo --> */}
        {/* <div className="content-inner-3 bg-white">
			<div className="container">
				<div className="clients-carousel owl-none owl-carousel m-b30">
					<ClientSlider />
				</div>
			</div>
        </div> */}
      </div>
      <Footer2 />
    </>
  );
}

export default AboutPage;
