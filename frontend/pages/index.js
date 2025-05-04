import { useEffect, useState } from "react";
import AboutUs2 from "../element/aboutUs-2";
import Blog2 from "../element/blog-2";
import Clients2 from "../element/clients-2";
import Counter2 from "../element/counter2";
import OurServices2 from "../element/our-services-2";
import Pricing2 from "../element/pricing-2";
import Projects2 from "../element/Projects-2";
import Service2 from "../element/service-2";
import Slider2 from "../element/slider-2";
import Testimonial2 from "../element/testimonial-2";
import Footer2 from "../layout/footer-2";
import Header3 from "./../layout/header-3";
// import "../css/skin/skin-1.css";
import { useContext } from "react";
import { UpdateContextProvider } from "../context/updatedata";
import axios from "axios";
import { UpdateContext } from "../context/updatedata";
import ServiceSlider from "../component/serviceslider";
function Index2() {
const {blogData, setBlogData} = useContext(UpdateContext);


  return (
    <>
    <UpdateContextProvider>
      <Header3 />
      <div className="page-content bg-white">
        <Slider2 />
        {/* <Service2 /> */}
         <ServiceSlider/>
         <div className="container py-5">
  <div
    className="d-flex flex-column flex-md-row w-100 p-3 p-md-5" // Responsive padding
    style={{
  
      maxWidth: "100%", // Prevent overflow
      overflow: "hidden",
    }}
  >
    <div className="row w-100 m-0 d-flex justify-content-between" style={{gap:"20px"}}>
      <div
        className="col-12 py-4 col-md-5 d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "200px",
          height: "auto",
          gap:"30px",
          borderRadius: "20px",
          background: "linear-gradient(90deg, #ff5f6d 0%, rgb(243, 203, 147) 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)", // Responsive font size
            textAlign: "left",
            color: "#fff",
            margin: 0,
          }}
          className="px-2 px-md-3" // Responsive inner padding
        >
          OUR MISSION
        </h1>
        <p
          style={{
            fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)", // Responsive font size
            fontWeight: "bold",
            textAlign: "left",
            margin: 0,
            lineHeight: "1.5",
            maxWidth: "100%",
            color:"black",
          }}
          className="px-2 px-md-4" // Responsive inner padding
        >
          We aim to empower Marginalised Communities in Mumbai and Thane to live healthy,
          dignified lives, free from discrimination, by providing them with
          resources, support, and a platform to advocate for their rights,
          while their vision is a community of sex workers that are healthy,
          united, and empowered to manage their affairs independently.
        </p>
      </div>
      <div
        className="col-12 col-md-5 py-4 d-flex  flex-column justify-content-center align-items-center text-dark"
        style={{
          minHeight: "200px",
          height: "auto",
          gap:"30px",
          borderRadius: "20px",
          background: "linear-gradient(90deg, #ff5f6d 0%, rgb(243, 203, 147) 100%)",
        }}
      ><h1
      style={{
        fontSize: "clamp(1.5rem, 4vw, 2rem)", // Responsive font size
        textAlign: "left",
        color: "#fff",
        margin: 0,
      }}
      className="px-2 px-md-3" // Responsive inner padding
    >OUR VISION</h1>
        <p
          style={{
            fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)", // Responsive font size
            fontWeight: "bold",
            textAlign: "left",
            margin: 0,
            lineHeight: "1.5",
            maxWidth: "100%",
             color:"black",
          }}
          className="px-2 px-md-4" // Responsive inner padding
        >
         We are an organization of, by and for the sex worker. We envision a community of sex workers that are healthy, united, and empowered to independently manage their affairs. Each day we strive to ensure our sex worker communities live with self-respect, dignity, and pride, free from the discrimination and stigmatization that often accompanies their profession.
        </p>
      </div>
    </div>
  </div>
</div>
        <AboutUs2 />
        <Counter2 />
 
        {/* <OurServices2 /> */}
        {/* <Projects2 /> */}
        {/* <Pricing2 /> */}
        {/* <Testimonial2 /> */}
        <Blog2 />
        {/* <Clients2 /> */}
      </div>
      <Footer2 />
      </UpdateContextProvider>
    </>
  );
}

export default Index2;
